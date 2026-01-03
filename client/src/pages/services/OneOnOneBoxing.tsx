import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { BookingModal } from "@/components/BookingModal";
import { useSEO } from "@/hooks/useSEO";
import { Check, Target, Brain, Zap, Clock } from "lucide-react";
import videoSrc from "@assets/video-output-4E8AFFB4-5A1C-457D-A122-BD3FE5338B76_1767328015012.mp4";

export default function OneOnOneBoxing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useSEO({
    title: "1-on-1 Boxing Personal Training",
    description: "Elite one-on-one boxing personal training in Northern Arizona. Master technique, build power, and achieve your fitness goals with personalized coaching from Canyon Boxing Club.",
    keywords: "one-on-one boxing training, private boxing lessons, personal boxing coach Arizona, elite boxing training Williams AZ, mobile boxing personal trainer"
  });

  const benefits = [
    {
      icon: Target,
      title: "Personalized Attention",
      description: "Every session is tailored to your skill level, goals, and physical condition. No cookie-cutter workouts."
    },
    {
      icon: Brain,
      title: "Technical Mastery",
      description: "Learn proper stance, footwork, punching mechanics, and defensive techniques with elite technical precision."
    },
    {
      icon: Zap,
      title: "Rapid Progress",
      description: "One-on-one coaching means faster skill development and immediate feedback on your form."
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description: "Sessions fit your schedule. Early morning, lunch break, or evening—we come to you."
    }
  ];

  const sessionIncludes = [
    "Dynamic warm-up and mobility work",
    "Technical skill development (stance, footwork, combinations)",
    "Pad work with real-time coaching",
    "Conditioning and cardio integration",
    "Cool-down and recovery guidance",
    "Personalized homework for continued improvement"
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-zinc-950 border-b border-white/5 overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-zinc-950/70 z-10" />
          <video 
            src={videoSrc}
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover saturate-50 brightness-50"
          />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Personal Training</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter leading-tight pr-4">
              Elite 1-on-1 <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange inline-block pr-2">
                Boxing Training
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              Master the sweet science with personalized coaching designed for your goals. 
              Whether you're a complete beginner or looking to sharpen your skills, 
              our mobile personal training brings elite instruction directly to you.
            </p>
            <Button 
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-hero-book"
            >
              Book Your Session
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase italic tracking-tighter text-center">
            Why Choose 1-on-1 Training?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6 text-center"
              >
                <benefit.icon className="w-10 h-10 text-brand-red mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white uppercase mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-8 uppercase italic tracking-tighter">
                What Every Session Includes
              </h2>
              <div className="space-y-4">
                {sessionIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <Check className="w-5 h-5 text-brand-orange flex-shrink-0 mt-1" />
                    <span className="text-gray-300 font-light">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="glass-panel p-8 border-brand-red/20">
              <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-6">
                Session Pricing
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-3">
                  <span className="text-gray-300">60-Minute Session</span>
                  <span className="text-3xl font-bold text-brand-red">$60</span>
                </div>
                <div className="flex justify-between items-end border-b border-dashed border-white/20 pb-3">
                  <span className="text-gray-300">30-Minute Session</span>
                  <span className="text-2xl font-bold text-white">$40</span>
                </div>
              </div>
              <p className="text-sm text-gray-500 mb-6">
                All bookings require a $10 deposit, applied to your session fee.
              </p>
              <Button 
                className="w-full bg-white text-black hover:bg-gray-200 rounded-none font-bold uppercase tracking-widest"
                onClick={() => setIsModalOpen(true)}
                data-testid="button-pricing-book"
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who It's For Section */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Perfect For Every Skill Level
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-12 font-light text-lg">
            Whether you've never thrown a punch or you're preparing for competition, 
            our 1-on-1 training adapts to meet you where you are.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6">
              <h3 className="text-brand-red font-bold uppercase mb-2">Beginners</h3>
              <p className="text-gray-400 text-sm">Learn fundamentals in a supportive, judgment-free environment</p>
            </div>
            <div className="p-6">
              <h3 className="text-brand-orange font-bold uppercase mb-2">Fitness Seekers</h3>
              <p className="text-gray-400 text-sm">High-intensity workouts that burn calories and build functional strength</p>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold uppercase mb-2">Experienced Boxers</h3>
              <p className="text-gray-400 text-sm">Refine technique and push your limits with advanced training</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-brand-red">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light text-lg">
            Book your first 1-on-1 session today. We bring the gym to you—anywhere in Williams, AZ 
            and the surrounding Route 66 area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => setIsModalOpen(true)}
              data-testid="button-cta-book"
            >
              Book Session
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
        sessionType="1on1"
      />
    </PageLayout>
  );
}
