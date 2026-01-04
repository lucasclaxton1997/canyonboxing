import { motion } from "framer-motion";
import { Dumbbell, Shield, Activity, Zap, Timer, Users, Flame } from "lucide-react";
import trainingImage from "@assets/generated_images/boxing_padwork_action_shot.png";

const trainingItems = [
  {
    icon: Flame,
    title: "Dynamic Stretches",
    description: "Prepare the body for explosive movement with boxing-specific mobility work."
  },
  {
    icon: Zap,
    title: "Shadowboxing",
    description: "Master footwork, rhythm, and combination visualization in the mirror."
  },
  {
    icon: Activity,
    title: "Jump Rope",
    description: "Build classic boxing conditioning, coordination, and calf endurance."
  },
  {
    icon: Shield,
    title: "Technical Padwork",
    description: "Sharpen accuracy and reaction time with high-intensity mitt sessions."
  },
  {
    icon: Dumbbell,
    title: "Strength & Conditioning",
    description: "Functional strength training designed specifically for combat sports."
  },
  {
    icon: Users,
    title: "Controlled Sparring",
    description: "Apply your skills in a safe, controlled environment (when ready)."
  }
];

export function Regimen() {
  return (
    <section id="regimen" className="py-24 bg-zinc-950 relative">
      {/* Background Texture */}
      <div 
        className="absolute inset-0 opacity-10 z-0 bg-fixed bg-center bg-cover grayscale mix-blend-overlay"
        style={{ backgroundImage: `url(${trainingImage})` }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase italic tracking-tighter">
            The Regimen
          </h2>
          <p className="text-brand-orange uppercase tracking-widest font-bold text-sm">
            Forged in Discipline
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainingItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="bg-brand-brown/30 w-14 h-14 flex items-center justify-center rounded-none mb-6 group-hover:bg-brand-red transition-colors duration-300">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-white mb-3 uppercase">
                {item.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
