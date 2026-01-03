import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { BookingModal } from "@/components/BookingModal";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Phone, Clock, Star } from "lucide-react";

export default function WilliamsAZ() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionType, setSessionType] = useState<"1on1" | "group">("1on1");

  const openBooking = (type: "1on1" | "group") => {
    setSessionType(type);
    setIsModalOpen(true);
  };

  useSEO({
    title: "Mobile Boxing Personal Training in Williams, AZ",
    description: "Professional mobile boxing personal training serving Williams, Arizona. The only dedicated boxing coach in Williams bringing elite training directly to your home, gym, or outdoor space.",
    keywords: "boxing training Williams AZ, personal trainer Williams Arizona, mobile fitness Williams, boxing lessons Williams, fitness coach Williams AZ 86046"
  });

  const areas = [
    "Downtown Williams",
    "Williams Historic District",
    "Kaibab Estates",
    "Perkinsville Road area",
    "Cataract Lake vicinity",
    "Parks (nearby)",
    "Ash Fork (nearby)",
    "Bellemont (nearby)"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-5 h-5 text-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Williams, Arizona</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter leading-tight">
              Boxing Personal Training <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">
                in Williams, AZ
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              Williams is the "Gateway to the Grand Canyon"—and now it's home to elite mobile boxing 
              personal training. Canyon Boxing brings professional coaching directly to your doorstep 
              in Williams and surrounding areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                onClick={() => openBooking("1on1")}
                data-testid="button-hero-book-1on1"
              >
                Book 1-on-1
              </Button>
              <Button 
                size="lg"
                className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                onClick={() => openBooking("group")}
                data-testid="button-hero-book-group"
              >
                Book Group
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                asChild
              >
                <a href="tel:6029464446">
                  <Phone className="mr-2 w-5 h-5" />
                  (602) 946-4446
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Williams Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
                The Only Boxing Personal Trainer in Williams
              </h2>
              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  Williams, Arizona is a small mountain town with big character. But until now, 
                  residents looking for boxing training had to travel to Flagstaff or beyond. 
                  Canyon Boxing changes that.
                </p>
                <p>
                  As the only dedicated boxing personal training service in Williams, we bring 
                  elite technical coaching directly to you. No gym membership required. No 
                  commute down the mountain. Just professional boxing instruction at your 
                  chosen location.
                </p>
                <p>
                  Whether you're a local resident, a seasonal worker, or enjoying Williams' 
                  unique lifestyle, our mobile service adapts to your schedule and your space.
                </p>
              </div>
            </div>
            <div className="glass-panel p-8">
              <h3 className="text-xl font-bold text-white uppercase mb-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-red" />
                Areas We Serve in Williams
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2 text-gray-300 text-sm">
                    <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                    {area}
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-500">
                  Don't see your area? Call us—we likely serve your location too.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Benefits */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase italic tracking-tighter text-center">
            Why Williams Residents Choose Us
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="glass-panel p-6 text-center">
              <Clock className="w-10 h-10 text-brand-red mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white uppercase mb-2">Save Time</h3>
              <p className="text-gray-400 text-sm font-light">
                No 45-minute drive to Flagstaff. We come to you in Williams.
              </p>
            </div>
            <div className="glass-panel p-6 text-center">
              <MapPin className="w-10 h-10 text-brand-orange mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white uppercase mb-2">Train Anywhere</h3>
              <p className="text-gray-400 text-sm font-light">
                Your backyard, garage, or even scenic outdoor spots near town.
              </p>
            </div>
            <div className="glass-panel p-6 text-center">
              <Star className="w-10 h-10 text-yellow-500 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white uppercase mb-2">Local Service</h3>
              <p className="text-gray-400 text-sm font-light">
                A trainer who knows Williams and serves this community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Start Training in Williams Today
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light text-lg">
            Book your first session and experience elite boxing personal training 
            without leaving Williams. All skill levels welcome.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
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
