import { motion } from "framer-motion";
import coachImage from "@assets/generated_images/professional_boxing_coach_portrait.png";

export function About() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-brown/10 skew-x-12 blur-3xl pointer-events-none" />
      
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-brand-red/20 blur-xl rounded-full opacity-50" />
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden border border-white/10">
              <img 
                src={coachImage} 
                alt="Lucas Claxton" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-2xl font-heading font-bold text-white uppercase italic">Lucas Claxton</h3>
                <p className="text-brand-orange font-bold text-sm tracking-wider uppercase">Head Coach & Founder</p>
              </div>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-8 uppercase italic tracking-tighter">
              Precision. <span className="text-brand-red">Power.</span> <br/> 
              Personality.
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                With over <strong className="text-white">6 years of professional coaching</strong> and more than a decade of ring experience, Lucas Claxton isn't just a trainer—he's a technician of the sport.
              </p>
              <p>
                Born from a unique blend of Singaporean discipline and American grit, Lucas brings a worldly perspective to the sweet science. His coaching philosophy is built on the belief that boxing is for everyone, regardless of age or fitness level.
              </p>
              <p>
                Whether you're a beginner learning to wrap your hands or a seasoned fighter refining your footwork, Lucas tailors every session to your physiology and goals. He's known not just for his technical acumen, but for his sociability—making the grueling work of boxing feel like a shared mission.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-heading font-bold text-white">10+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Years Experience</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold text-white">6</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Years Pro Coaching</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
