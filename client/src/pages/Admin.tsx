import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Calendar, Clock, Phone, MapPin, Users, User } from "lucide-react";
import type { Booking } from "@shared/schema";

export default function Admin() {
  const { data: bookings, isLoading } = useQuery<Booking[]>({
    queryKey: ["/api/bookings"],
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center">
        <p className="text-white">Loading bookings...</p>
      </div>
    );
  }

  const sortedBookings = bookings?.sort((a, b) => 
    new Date(b.createdAt || 0).getTime() - new Date(a.createdAt || 0).getTime()
  ) || [];

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-heading font-bold uppercase italic text-white mb-2">
            Booking Dashboard
          </h1>
          <p className="text-gray-400">
            {sortedBookings.length} total booking{sortedBookings.length !== 1 ? 's' : ''}
          </p>
        </div>

        {sortedBookings.length === 0 ? (
          <div className="bg-zinc-900 border border-white/10 p-8 text-center">
            <p className="text-gray-400">No bookings yet. They'll appear here when clients book sessions.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {sortedBookings.map((booking) => (
              <div 
                key={booking.id} 
                className="bg-zinc-900 border border-white/10 p-6 hover:border-brand-red/30 transition-colors"
                data-testid={`booking-card-${booking.id}`}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{booking.name}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-1">
                      <Phone className="w-4 h-4" />
                      <a href={`tel:${booking.phone}`} className="hover:text-brand-red transition-colors">
                        {booking.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      booking.status === 'confirmed' ? 'bg-green-500/20 text-green-400' :
                      booking.status === 'cancelled' ? 'bg-red-500/20 text-red-400' :
                      'bg-yellow-500/20 text-yellow-400'
                    }`}>
                      {booking.status}
                    </span>
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider ${
                      booking.sessionType === '1on1' ? 'bg-brand-red/20 text-brand-red' : 'bg-brand-orange/20 text-brand-orange'
                    }`}>
                      {booking.sessionType === '1on1' ? (
                        <span className="flex items-center gap-1"><User className="w-3 h-3" /> 1-on-1</span>
                      ) : (
                        <span className="flex items-center gap-1"><Users className="w-3 h-3" /> Group</span>
                      )}
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Calendar className="w-4 h-4 text-brand-red" />
                    <span>{booking.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Clock className="w-4 h-4 text-brand-orange" />
                    <span>{booking.time} ({booking.duration} min)</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span>{booking.zipcode}</span>
                  </div>
                  <div className="text-gray-500 text-xs">
                    Booked: {booking.createdAt ? format(new Date(booking.createdAt), "MMM d, h:mm a") : 'N/A'}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="mt-8 text-center">
          <a href="/" className="text-brand-red hover:text-brand-orange transition-colors uppercase text-sm font-bold tracking-wider">
            ← Back to Website
          </a>
        </div>
      </div>
    </div>
  );
}
