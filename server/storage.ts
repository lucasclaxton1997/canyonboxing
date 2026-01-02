import { users, bookings, type User, type InsertUser, type Booking, type InsertBooking } from "@shared/schema";
import { db } from "./db";
import { eq, and } from "drizzle-orm";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Booking operations
  createBooking(booking: InsertBooking): Promise<Booking>;
  getBookingById(id: string): Promise<Booking | undefined>;
  getBookingsByDate(date: string): Promise<Booking[]>;
  checkTimeSlotAvailable(date: string, time: string): Promise<boolean>;
  getAllBookings(): Promise<Booking[]>;
  updateBookingStatus(id: string, status: string): Promise<Booking | undefined>;
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user || undefined;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Booking operations
  async createBooking(booking: InsertBooking): Promise<Booking> {
    const [newBooking] = await db.insert(bookings).values(booking).returning();
    return newBooking;
  }

  async getBookingById(id: string): Promise<Booking | undefined> {
    const [booking] = await db.select().from(bookings).where(eq(bookings.id, id));
    return booking || undefined;
  }

  async getBookingsByDate(date: string): Promise<Booking[]> {
    return await db.select().from(bookings).where(eq(bookings.date, date));
  }

  async checkTimeSlotAvailable(date: string, time: string): Promise<boolean> {
    const existingBookings = await db
      .select()
      .from(bookings)
      .where(
        and(
          eq(bookings.date, date),
          eq(bookings.time, time),
          eq(bookings.status, "pending")
        )
      );
    return existingBookings.length === 0;
  }

  async getAllBookings(): Promise<Booking[]> {
    return await db.select().from(bookings);
  }

  async updateBookingStatus(id: string, status: string): Promise<Booking | undefined> {
    const [updated] = await db
      .update(bookings)
      .set({ status })
      .where(eq(bookings.id, id))
      .returning();
    return updated || undefined;
  }
}

export const storage = new DatabaseStorage();
