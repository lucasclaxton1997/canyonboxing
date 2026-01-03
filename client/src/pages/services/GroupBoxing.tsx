import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { BookingModal } from "@/components/BookingModal";
import { useSEO } from "@/hooks/useSEO";
import { Users, Flame, Trophy, Heart, Check } from "lucide-react";

export default function GroupBoxing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useSEO({
    title: "Group Boxing Training",
    description: "High-energy mobile group boxing workouts in Northern Arizona. Train with friends, family, or coworkers. Perfect for team building and group fitness on Route 66.",
    keywords: "group boxing classes Arizona, team boxing training, mobile group fitness, boxing workout parties Williams AZ, corporate boxing training Route 66"
  });

  const benefits = [
    {
      icon: Users,
      title: "Train Together",
      description: "Share the experience with friends, family, or coworkers. Up to 8 people per session."
    },
    {
      icon: Flame,
      title: "High Energy",
      description: "Group dynamics push everyone harder. Feed off each other's energy and motivation."
    },
    {
      icon: Trophy,
      title: "Team Building",
      description: "Perfect for corporate events, bachelor/bachelorette parties, or fitness groups."
    },
    {
      icon: Heart,
      title: "Affordable",
      description: "Split the cost among your group for an incredible value per person."
    }
  ];

  const idealFor = [
    "Friends who want to work out together",
    "Families looking for fun, active bonding",
    "Corporate team building events",
    "Bachelor and bachelorette parties",
    "Sports teams for cross-training",
    "Fitness groups and workout buddies",
    "Birthday parties with a twist",
    "Community organizations"
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
              <div className="w-12 h-[2px] bg-brand-orange" />
              <span className="text-brand-orange font-bold uppercase tracking-[0.3em] text-sm">Group Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter leading-tight pr-4">
              Mobile Group <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-red inline-block pr-2">
                Boxing Workouts
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              Bring the energy of a boxing gym to your location. Our group sessions 
              deliver high-intensity training, team camaraderie, and expert coaching 
              for up to 8 participants.
            </p>
            <Button 
              size="lg"
              className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-hero-book"
            >
              Book Your Group
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase italic tracking-tighter text-center">
            The Power of Training Together
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 text-center border-brand-orange/20"
              >
                <benefit.icon className="w-10 h-10 text-brand-orange mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white uppercase mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="glass-panel p-8 border-brand-orange/20">
              <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6">
                Group Session Pricing
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-3">
                  <div>
                    <span className="text-gray-300 block">60-Minute Session</span>
                    <span className="text-xs text-gray-500">Up to 8 people</span>
                  </div>
                  <span className="text-3xl font-bold text-brand-orange">$80</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-3">
                  <div>
                    <span className="text-gray-300 block">30-Minute Session</span>
                    <span className="text-xs text-gray-500">Up to 8 people</span>
                  </div>
                  <span className="text-2xl font-bold text-white">$60</span>
                </div>
              </div>
              <div className="bg-brand-orange/10 p-4 border-l-4 border-brand-orange mb-6">
                <p className="text-sm text-gray-300">
                  <strong className="text-white">Great Value:</strong> A 60-minute session with 8 people 
                  is only $10 per person!
                </p>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                All bookings require a $10 deposit. Groups must be formed prior to booking.
              </p>
              <Button 
                className="w-full bg-brand-orange hover:bg-orange-600 text-white rounded-none font-bold uppercase tracking-widest"
                onClick={() => setIsModalOpen(true)}
                data-testid="button-pricing-book"
              >
                Book Your Group
              </Button>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase italic tracking-tighter">
                Perfect For
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {idealFor.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3"
                  >
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0" />
                    <span className="text-gray-300 font-light text-sm">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase italic tracking-tighter text-center">
            How Group Sessions Work
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-orange">1</span>
              </div>
              <h3 className="text-white font-bold uppercase mb-2">Gather Your Group</h3>
              <p className="text-gray-400 text-sm font-light">
                Assemble 2-8 people who want to train together. All fitness levels welcome.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-orange">2</span>
              </div>
              <h3 className="text-white font-bold uppercase mb-2">Choose Your Spot</h3>
              <p className="text-gray-400 text-sm font-light">
                Backyard, garage, park, office space—wherever works for your group.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-brand-orange/20 border border-brand-orange/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-brand-orange">3</span>
              </div>
              <h3 className="text-white font-bold uppercase mb-2">We Come to You</h3>
              <p className="text-gray-400 text-sm font-light">
                Professional coaching, equipment, and high-energy training delivered to your location.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-orange to-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Ready to Train as a Team?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light text-lg">
            Book a group session for you and your crew. We serve Williams, AZ 
            and the entire Route 66 corridor in Northern Arizona.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-orange hover:bg-gray-100 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-cta-book"
            >
              Book Group Session
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
        sessionType="group"
      />
    </PageLayout>
  );
}
