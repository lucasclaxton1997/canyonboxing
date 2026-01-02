import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Robert K.",
    role: "Parent in Williams",
    content: "Canyon Boxing has been incredible for my son's confidence and discipline. Having elite coaching come to our home makes it so much easier for our family's schedule.",
    stars: 5
  },
  {
    name: "Margaret W.",
    role: "Senior Resident",
    content: "At 68, I was hesitant about boxing, but the technical and personalized approach is perfect. It's helped immensely with my balance and overall strength.",
    stars: 5
  },
  {
    name: "David S.",
    role: "Local Business Owner",
    content: "The most professional training experience in Northern Arizona. High-impact, technical, and extremely convenient. Route 66 needed this.",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-red/5 blur-3xl rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4 uppercase italic tracking-tighter">
            What <span className="text-brand-red">Clients Say.</span>
          </h2>
          <p className="text-brand-orange uppercase tracking-widest font-bold text-sm">
            Community Feedback
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-white/5" />
              <div className="flex gap-1 mb-4">
                {[...Array(t.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand-orange text-brand-orange" />
                ))}
              </div>
              <p className="text-gray-300 font-light italic mb-6 leading-relaxed">
                "{t.content}"
              </p>
              <div>
                <span className="block text-white font-bold uppercase tracking-wider">{t.name}</span>
                <span className="text-xs text-brand-red uppercase font-bold">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
