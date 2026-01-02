import { motion } from "framer-motion";
import { Truck, MapPin, Package, ShieldCheck } from "lucide-react";

const requirements = [
  {
    icon: Package,
    title: "Hand Wraps",
    description: "Crucial for protecting your small bones and wrists during impact."
  },
  {
    icon: ShieldCheck,
    title: "Boxing Gloves",
    description: "Your primary tool for offense and defense. 14oz or 16oz recommended."
  },
  {
    icon: MapPin,
    title: "Your Location",
    description: "A driveway, backyard, garage, or public park—wherever you feel ready to work."
  }
];

export function MobileService() {
  return (
    <section className="py-24 bg-zinc-900 border-t border-white/5 relative overflow-hidden">
      {/* Decorative background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 text-[15rem] font-heading font-black text-white/5 uppercase select-none pointer-events-none whitespace-nowrap">
        BILE ELITE
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">On the Move</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-8 uppercase italic tracking-tighter leading-none">
              The Gym Comes <br />
              <span className="text-brand-orange">To You.</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg font-light leading-relaxed max-w-xl">
              <p>
                Canyon Boxing is a <strong className="text-white">fully mobile personal training service</strong>. The intimidation of traditional gyms is stripped away and elite technical coaching is brought directly to your doorstep.
              </p>
              <p>
                Whether it's your garage, backyard, or local park, Canyon Boxing transforms any space into a high-performance training camp. This is boxing without boundaries—tailored to your schedule and your environment.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-panel p-10 border-brand-red/20 relative"
          >
            <h3 className="text-2xl font-heading font-bold text-white uppercase italic mb-8 flex items-center gap-3">
              <Truck className="text-brand-red w-6 h-6" />
              What You'll Need
            </h3>
            
            <div className="space-y-8">
              {requirements.map((item, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-brand-red/20 group-hover:border-brand-red transition-all duration-300">
                    <item.icon className="w-6 h-6 text-brand-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold uppercase tracking-wider mb-1">{item.title}</h4>
                    <p className="text-gray-400 text-sm font-light leading-snug">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-4 bg-brand-red/10 border-l-4 border-brand-red text-sm text-gray-300 italic">
              "Canyon Boxing provides the pads, the program, and the expertise. You provide the grit."
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
