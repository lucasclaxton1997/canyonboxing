# Canyon Boxing Club Website

## Overview
A high-end website for Canyon Boxing Club, a mobile boxing personal training service owned by Lucas Claxton, serving Williams, AZ and surrounding Route 66 areas.

## Current State
- Full single-page website with Hero, About, Mobile Service, Regimen, Testimonials, Pricing, and Footer sections
- Functional booking system with database storage and double-booking prevention
- Real-time availability checking for time slots

## Tech Stack
- Frontend: React, Vite, TailwindCSS, Framer Motion, TanStack Query
- Backend: Express, Drizzle ORM, PostgreSQL
- UI: Shadcn/ui components with glassmorphism design

## Key Features
- Booking modal for 1-on-1 and Group sessions
- Date picker with real-time availability
- $10 deposit flow (mock payment for now)
- Phone number for direct calls: (602) 946-4446

## Design Guidelines
- Typography: Helvetica Bold/Neue
- Colors: Action Red (#DC2626), Burnt Orange (#EA580C), Earthy Brown
- Images: Slightly unsaturated and darkened (saturate-50 brightness-75)
- Copy: Use "personal training" not "training club", "Serving" not "Servicing"
- Do NOT mention Singapore - use "elite technical precision" instead

## TODO / Future Enhancements
- [ ] Email notifications for new bookings (Resend integration - user to provide API key later)
- [ ] Real payment processing (Stripe integration)
- [ ] Admin dashboard for managing bookings

## Database Schema
- `bookings` table: id, name, phone, zipcode, sessionType, duration, date, time, depositPaid, status, createdAt

## API Endpoints
- POST /api/bookings - Create new booking (with availability check)
- GET /api/bookings/availability/:date - Get available time slots
- GET /api/bookings - Get all bookings
- GET /api/bookings/:id - Get single booking
- PATCH /api/bookings/:id/status - Update booking status
