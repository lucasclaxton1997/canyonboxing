import { motion } from "framer-motion";
import trainingImage from "@assets/generated_images/boxing_padwork_action_shot.png";

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
                src={trainingImage} 
                alt="Boxing training on Route 66" 
                className="w-full h-full object-cover transition-all duration-700 saturate-50 brightness-75"
                data-testid="img-route66-training"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <h3 className="text-2xl font-heading font-bold text-white uppercase italic">Route 66 Original</h3>
                <p className="text-brand-orange font-bold text-sm tracking-wider uppercase">Northern Arizona's Premier Boxing Personal Training</p>
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
              The Only Boxing <br/>
              <span className="text-brand-red">Personal Training On Route 66.</span>
            </h2>
            
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-light">
              <p>
                Canyon Boxing Club stands as the <strong className="text-white">exclusive destination for technical boxing personal training</strong> along the historic Route 66 corridor in Northern Arizona.
              </p>
              <p>
                We are dedicated to serving the communities of Williams, Flagstaff, Red Lake, Valle, Bellemont, and Ash Fork. Our mission is to provide high-impact, elite-level personal training that was previously unavailable in this rugged heart of the Southwest.
              </p>
              <p>
                As the only provider of its kind in the area, we offer a specialized environment where technical precision meets high-intensity conditioning. Whether you're a local resident or passing through the Gateway to the Grand Canyon, we provide the authentic boxing experience that Northern Arizona deserves.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <span className="block text-4xl font-heading font-bold text-white uppercase">Primary</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Route 66</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold text-white uppercase">Full</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">Regional</span>
              </div>
              <div>
                <span className="block text-4xl font-heading font-bold text-white uppercase">50+</span>
                <span className="text-sm text-gray-400 uppercase tracking-widest">5-Star Reviews</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
