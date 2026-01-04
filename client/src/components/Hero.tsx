import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
 // Removed import: /v09044g40000c5ovcbbc77u7vuv3msqg_1767485095328.mov";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          aria-label="Boxing training in Grand Canyon Arizona - Mobile boxing personal training with dramatic canyon views"
          data-testid="video-hero-background"
        >
          <source src="/canyonboxing/assets/generated_images/placeholder.png" type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
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
            <span className="inline-block whitespace-nowrap mb-2">The Sweet Science</span> <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange inline-block px-2">
              On Route 66
            </span>
          </h1>
          
          <div className="glass-panel inline-block px-8 py-6 mb-8 max-w-2xl mx-auto rounded-sm">
            <p className="text-lg md:text-xl text-gray-200 font-light leading-relaxed" data-testid="text-hero-subtext">
              Master the fundamentals with Northern Arizona's only dedicated boxing personal training, 
              bringing elite technical precision and high-impact workouts to the historic Route 66 area.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <Button 
              size="lg"
              className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none w-full sm:w-56"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-start-training"
            >
              Start Training
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-white/20 hover:bg-white/10 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none w-full sm:w-56"
              onClick={() => document.getElementById('regimen')?.scrollIntoView({ behavior: 'smooth' })}
              data-testid="button-hero-view-regimen"
            >
              View Regimen
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
