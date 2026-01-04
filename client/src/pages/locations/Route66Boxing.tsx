import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { BookingModal } from "@/components/BookingModal";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Phone, Route, Star } from "lucide-react";
import heroVideo from "@assets/v09044g40000c793fs3c77u96l7a071g_1767485303318.mov";

export default function Route66Boxing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionType, setSessionType] = useState<"1on1" | "group">("1on1");

  const openBooking = (type: "1on1" | "group") => {
    setSessionType(type);
    setIsModalOpen(true);
  };

  useSEO({
    title: "Boxing Coach on Historic Route 66",
    description: "Mobile boxing personal training along Historic Route 66 in Arizona. From Seligman to Flagstaff, Canyon Boxing brings elite coaching to the Mother Road.",
    keywords: "Route 66 boxing training, boxing coach Route 66 Arizona, mobile fitness Route 66, personal trainer Seligman Flagstaff, boxing lessons Mother Road"
  });

  const route66Towns = [
    { name: "Williams", distance: "Home Base" },
    { name: "Ash Fork", distance: "40 min" },
    { name: "Seligman", distance: "20 min" },
    { name: "Parks", distance: "15 min" },
    { name: "Bellemont", distance: "25 min" },
    { name: "Flagstaff (West)", distance: "35 min" }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-zinc-950 border-b border-white/5 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-10" />
          <div className="absolute inset-0 bg-black/50 z-10" />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            aria-label="Boxing training on Historic Route 66 Arizona - Mobile boxing personal training along the Mother Road"
            data-testid="video-hero-background"
          >
            <source src={heroVideo} type="video/quicktime" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="container mx-auto px-6 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Route className="w-5 h-5 text-brand-orange" />
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm">Historic Route 66</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter leading-tight pr-4">
              Boxing Training on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red inline-block pr-2">
                The Mother Road
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              Historic Route 66 runs through the heart of Northern Arizona—and now it's home to 
              the only dedicated mobile boxing personal training service on the Mother Road. 
              From Seligman to the outskirts of Flagstaff, we bring the sweet science to you.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <Button 
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white text-base sm:text-lg font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-6 rounded-none"
                onClick={() => openBooking("1on1")}
                data-testid="button-hero-book-1on1"
              >
                Book 1-on-1
              </Button>
              <Button 
                size="lg"
                className="bg-brand-orange hover:bg-orange-600 text-white text-base sm:text-lg font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-6 rounded-none"
                onClick={() => openBooking("group")}
                data-testid="button-hero-book-group"
              >
                Book Group
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-base sm:text-lg font-bold uppercase tracking-widest px-6 sm:px-8 py-4 sm:py-6 rounded-none"
                asChild
              >
                <a href="tel:6029464446">
                  <Phone className="mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  (602) 946-4446
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Route 66 Coverage */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
                Serving the Route 66 Corridor
              </h2>
              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  The Arizona stretch of Route 66 is legendary—a place where the old American 
                  spirit still lives. Canyon Boxing is proud to serve the communities along 
                  this historic highway with professional boxing personal training.
                </p>
                <p>
                  Whether you're in a classic Route 66 town like Seligman, the mountain 
                  community of Williams, or anywhere along the corridor, we'll bring elite 
                  coaching directly to your location.
                </p>
                <p>
                  No need to travel to Phoenix or distant gyms. World-class boxing instruction 
                  is now available right here on the Mother Road.
                </p>
              </div>
            </div>
            <div className="glass-panel p-8 border-brand-orange/20">
              <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                <Route className="w-5 h-5 text-brand-orange" />
                Route 66 Towns We Serve
              </h3>
              <div className="space-y-4">
                {route66Towns.map((town, index) => (
                  <div key={index} className="flex justify-between items-center border-b border-white/10 pb-3">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-4 h-4 text-brand-orange" />
                      <span className="text-white font-medium">{town.name}</span>
                    </div>
                    <span className="text-gray-500 text-sm">{town.distance}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4">
                <p className="text-sm text-gray-500">
                  Live along Route 66 but not listed? Give us a call—we cover the entire corridor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Route 66 */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            The Spirit of Route 66 Meets the Sweet Science
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12 font-light text-lg">
            Route 66 represents freedom, adventure, and the American dream. Boxing embodies 
            discipline, determination, and self-improvement. Canyon Boxing brings these 
            spirits together on the historic Mother Road.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <Star className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="text-white font-bold uppercase mb-2">Local Pride</h3>
              <p className="text-gray-400 text-sm">The only boxing personal trainer dedicated to Route 66 communities</p>
            </div>
            <div className="p-6">
              <Route className="w-10 h-10 text-brand-red mx-auto mb-4" />
              <h3 className="text-white font-bold uppercase mb-2">Mobile Service</h3>
              <p className="text-gray-400 text-sm">We travel the Mother Road so you don't have to</p>
            </div>
            <div className="p-6">
              <MapPin className="w-10 h-10 text-white mx-auto mb-4" />
              <h3 className="text-white font-bold uppercase mb-2">Your Location</h3>
              <p className="text-gray-400 text-sm">Train at home, at work, or any scenic Route 66 spot</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Get Your Punches On Route 66
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light text-lg">
            Book your boxing session today. We serve every town along Arizona's 
            historic Route 66 corridor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => openBooking("1on1")}
              data-testid="button-cta-book-1on1"
            >
              Book 1-on-1
            </Button>
            <Button 
              size="lg"
              className="bg-black/20 text-white hover:bg-black/30 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none border border-white/30"
              onClick={() => openBooking("group")}
              data-testid="button-cta-book-group"
            >
              Book Group
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              asChild
            >
              <a href="tel:6029464446">Call (602) 946-4446</a>
            </Button>
          </div>
        </div>
      </section>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        sessionType={sessionType}
      />
    </PageLayout>
  );
}
