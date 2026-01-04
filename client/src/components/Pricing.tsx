import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BookingModal } from "@/components/BookingModal";
import { motion } from "framer-motion";

export function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<"1on1" | "group">("1on1");

  const calendly1on1Url = "https://calendly.com/lucasslclaxton/1-on-1-boxing-training";

  const handleBook = (type: "1on1" | "group") => {
    if (type === "1on1") {
      window.open(calendly1on1Url, "_blank");
    } else {
      setSelectedType(type);
      setIsModalOpen(true);
    }
  };

  return (
    <section id="pricing" className="py-24 bg-background relative border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase italic tracking-tighter">
            Invest in Yourself
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto font-light">
            Professional coaching tailored to your goals. 
            All bookings require a <span className="text-brand-orange font-bold">$10 deposit</span>.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* 1-on-1 Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel p-8 relative overflow-hidden group"
            data-testid="card-pricing-1on1"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-9xl font-heading font-bold text-white leading-none">01</span>
            </div>
            
            <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-2 relative z-10">
              1-on-1 Training
            </h3>
            <p className="text-gray-400 text-sm mb-8 relative z-10 h-10">
              Personalized attention to master technique and build elite fitness.
            </p>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-2">
                <span className="text-gray-300">60 Minutes</span>
                <span className="text-3xl font-bold text-brand-red">$60</span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-2">
                <span className="text-gray-300">30 Minutes</span>
                <span className="text-2xl font-bold text-white">$40</span>
              </div>
            </div>

            <Button 
              className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase tracking-widest relative z-10"
              onClick={() => handleBook("1on1")}
              data-testid="button-book-1on1"
            >
              Book Session
            </Button>
          </motion.div>

          {/* Group Card */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="glass-panel p-8 relative overflow-hidden border-brand-orange/30"
            data-testid="card-pricing-group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="text-9xl font-heading font-bold text-white leading-none">02</span>
            </div>

            <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-2 relative z-10">
              Group Training
            </h3>
            <p className="text-gray-400 text-sm mb-8 relative z-10 h-10">
              High-energy sessions for small teams (Up to 8 people).
              <br/><span className="text-brand-orange text-xs">*Groups must be formed prior to booking</span>
            </p>

            <div className="space-y-4 mb-8 relative z-10">
              <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-2">
                <span className="text-gray-300">60 Minutes</span>
                <span className="text-3xl font-bold text-brand-orange">$80</span>
              </div>
              <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-2">
                <span className="text-gray-300">30 Minutes</span>
                <span className="text-2xl font-bold text-white">$60</span>
              </div>
            </div>

            <Button 
              className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-none font-bold uppercase tracking-widest relative z-10"
              onClick={() => handleBook("group")}
              data-testid="button-book-group"
            >
              Book Group
            </Button>
          </motion.div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        sessionType={selectedType}
      />
    </section>
  );
}
