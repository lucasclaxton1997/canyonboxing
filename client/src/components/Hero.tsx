import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/boxer_training_at_grand_canyon_sunset.png";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/30 z-10" />
        <img
          src={heroImage}
          alt="Boxer training at Grand Canyon"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-tighter leading-none italic" data-testid="text-hero-headline">
            The Sweet Science <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange">
              On Route 66
            </span>
          </h1>
          
          <div className="glass-panel inline-block px-8 py-6 mb-8 max-w-2xl mx-auto rounded-sm">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed" data-testid="text-hero-subtext">
              Master the fundamentals with <strong className="text-white font-bold">Lucas Claxton</strong>, 
              bringing Singapore-honed technical expertise to the rugged heart of Northern Arizona.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none min-w-[200px]"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-start-training"
            >
              Start Training
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none min-w-[200px]"
              onClick={() => document.getElementById('regimen')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-view-regimen"
            >
              View Regimen
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
