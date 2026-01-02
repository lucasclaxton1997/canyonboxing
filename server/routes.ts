import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertBookingSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Create a new booking
  app.post("/api/bookings", async (req, res) => {
    try {
      const bookingData = insertBookingSchema.parse(req.body);
      
      // Check if the time slot is available (prevent double-booking)
      const isAvailable = await storage.checkTimeSlotAvailable(
        bookingData.date,
        bookingData.time
      );
      
      if (!isAvailable) {
        return res.status(409).json({ 
          error: "This time slot is already booked. Please select a different time." 
        });
      }
      
      const booking = await storage.createBooking(bookingData);
      
      // Log for owner notification (will be replaced with SMS later)
      console.log(`NEW BOOKING RECEIVED:
        Name: ${booking.name}
        Phone: ${booking.phone}
        Date: ${booking.date}
        Time: ${booking.time}
        Type: ${booking.sessionType === "1on1" ? "1-on-1" : "Group"}
        Duration: ${booking.duration} minutes
        Zipcode: ${booking.zipcode}
      `);
      
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ error: error.errors });
      }
      console.error("Booking error:", error);
      res.status(500).json({ error: "Failed to create booking" });
    }
  });

  // Get available time slots for a specific date
  app.get("/api/bookings/availability/:date", async (req, res) => {
    try {
      const { date } = req.params;
      const bookedSlots = await storage.getBookingsByDate(date);
      
      const allSlots = [
        "08:00 AM", "09:00 AM", "10:00 AM", "11:00 AM",
        "01:00 PM", "02:00 PM", "03:00 PM", "04:00 PM",
        "05:00 PM", "06:00 PM"
      ];
      
      const bookedTimes = bookedSlots
        .filter(b => b.status !== "cancelled")
        .map(b => b.time);
      
      const availableSlots = allSlots.filter(slot => !bookedTimes.includes(slot));
      
      res.json({ 
        date, 
        availableSlots,
        bookedSlots: bookedTimes
      });
    } catch (error) {
      console.error("Availability check error:", error);
      res.status(500).json({ error: "Failed to check availability" });
    }
  });

  // Get all bookings (for admin/owner view)
  app.get("/api/bookings", async (req, res) => {
    try {
      const allBookings = await storage.getAllBookings();
      res.json(allBookings);
    } catch (error) {
      console.error("Get bookings error:", error);
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  // Get single booking by ID
  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const booking = await storage.getBookingById(req.params.id);
      if (!booking) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(booking);
    } catch (error) {
      console.error("Get booking error:", error);
      res.status(500).json({ error: "Failed to fetch booking" });
    }
  });

  // Update booking status
  app.patch("/api/bookings/:id/status", async (req, res) => {
    try {
      const { status } = req.body;
      if (!["pending", "confirmed", "cancelled"].includes(status)) {
        return res.status(400).json({ error: "Invalid status" });
      }
      
      const updated = await storage.updateBookingStatus(req.params.id, status);
      if (!updated) {
        return res.status(404).json({ error: "Booking not found" });
      }
      res.json(updated);
    } catch (error) {
      console.error("Update booking error:", error);
      res.status(500).json({ error: "Failed to update booking" });
    }
  });

  return httpServer;
}
