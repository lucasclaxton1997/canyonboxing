import { motion } from "framer-motion";
 // Removed import: /video-output-4E8AFFB4-5A1C-457D-A122-BD3FE5338B76_1767328015012.mp4";

export function VideoSection() {
  return (
    <section className="bg-zinc-950 py-12 border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative aspect-video w-full max-w-5xl mx-auto glass-panel overflow-hidden group"
        >
          <div className="absolute inset-0 bg-brand-red/10 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none" />
          <video 
            src="/canyonboxing/assets/generated_images/placeholder.png"
            autoPlay 
            muted 
            loop 
            playsInline
            className="w-full h-full object-cover saturate-50 brightness-75 group-hover:saturate-100 group-hover:brightness-100 transition-all duration-700"
          />
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-950 to-transparent z-20">
            <p className="text-white font-bold uppercase tracking-[0.2em] text-sm italic">
              Experience the Intensity
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
