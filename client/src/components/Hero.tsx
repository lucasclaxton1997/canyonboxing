import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import videoSrc from "@assets/video-output-4E8AFFB4-5A1C-457D-A122-BD3FE5338B76_1767328015012.mp4";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/50 z-10" />
        <video 
          src={videoSrc}
          autoPlay 
          muted 
          loop 
          playsInline
          className="w-full h-full object-cover saturate-50 brightness-75"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-[95vw] md:max-w-4xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 uppercase tracking-tighter leading-tight italic overflow-visible" data-testid="text-hero-headline">
            <span className="inline-block whitespace-nowrap mb-2">The Gym That</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange inline-block px-2">
              Comes To You
            </span>
          </h1>
          
          <div className="glass-panel inline-block px-8 py-6 mb-8 max-w-2xl mx-auto rounded-sm">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed" data-testid="text-hero-subtext">
              Master the fundamentals with Northern Arizona's only dedicated boxing personal training, 
              bringing elite technical precision and high-impact workouts to the historic Route 66 area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <button 
              className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-4 rounded-none min-w-[200px] transition-colors"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-start-training"
            >
              Start Training
            </button>
            <button 
              className="border border-white/20 hover:bg-white/10 text-white text-lg font-bold uppercase tracking-widest px-8 py-4 rounded-none min-w-[200px] transition-colors"
              onClick={() => document.getElementById('regimen')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-view-regimen"
            >
              View Regimen
            </button>
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
