import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/PageLayout";
import { BookingModal } from "@/components/BookingModal";
import { useSEO } from "@/hooks/useSEO";
import { MapPin, Phone, Mountain, TreePine, Sun } from "lucide-react";

export default function NorthernArizona() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionType, setSessionType] = useState<"1on1" | "group">("1on1");

  const openBooking = (type: "1on1" | "group") => {
    setSessionType(type);
    setIsModalOpen(true);
  };

  useSEO({
    title: "Mobile Boxing Personal Training in Northern Arizona",
    description: "Professional mobile boxing training serving Northern Arizona. From the ponderosa pines to the high desert, Canyon Boxing brings elite coaching to Coconino County and beyond.",
    keywords: "boxing training Northern Arizona, personal trainer Coconino County, mobile boxing Flagstaff area, fitness coach high country Arizona, boxing lessons near Grand Canyon"
  });

  const regions = [
    {
      name: "Williams & Vicinity",
      areas: ["Williams", "Parks", "Ash Fork", "Perkinsville"]
    },
    {
      name: "Route 66 Corridor",
      areas: ["Seligman", "Bellemont", "Parks", "Ash Fork"]
    },
    {
      name: "Flagstaff Region",
      areas: ["West Flagstaff", "Bellemont", "Kachina Village", "Mountainaire"]
    },
    {
      name: "Grand Canyon Area",
      areas: ["Tusayan", "Valle", "Grand Canyon Village (limited)"]
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 bg-zinc-950 border-b border-white/5">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Mountain className="w-5 h-5 text-brand-red" />
              <span className="text-brand-red font-bold uppercase tracking-[0.3em] text-sm">Northern Arizona</span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter leading-tight pr-4">
              Boxing Training in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-orange inline-block pr-2">
                Northern Arizona
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed max-w-2xl mb-8">
              Northern Arizona's high country is known for ponderosa pines, mountain air, and 
              outdoor adventure. Now it's also home to elite mobile boxing personal training. 
              Canyon Boxing serves Coconino County and the surrounding region.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-brand-red hover:bg-red-700 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                onClick={() => openBooking("1on1")}
                data-testid="button-hero-book-1on1"
              >
                Book 1-on-1
              </Button>
              <Button 
                size="lg"
                className="bg-brand-orange hover:bg-orange-600 text-white text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                onClick={() => openBooking("group")}
                data-testid="button-hero-book-group"
              >
                Book Group
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
                asChild
              >
                <a href="tel:6029464446">
                  <Phone className="mr-2 w-5 h-5" />
                  (602) 946-4446
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Coverage Map */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-12 uppercase italic tracking-tighter text-center">
            Our Northern Arizona Coverage
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel p-6"
              >
                <h3 className="text-lg font-bold text-white uppercase mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-red" />
                  {region.name}
                </h3>
                <ul className="space-y-2">
                  {region.areas.map((area, i) => (
                    <li key={i} className="text-gray-400 text-sm flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-brand-orange rounded-full" />
                      {area}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-sm">
            Don't see your area? Contact us—we serve most of Northern Arizona.
          </p>
        </div>
      </section>

      {/* Why Northern AZ */}
      <section className="py-24 bg-zinc-950">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
                Train in Arizona's High Country
              </h2>
              <div className="space-y-6 text-gray-300 font-light leading-relaxed">
                <p>
                  Northern Arizona offers something special: cooler temperatures, stunning 
                  natural beauty, and a lifestyle that values health and outdoor activity. 
                  Canyon Boxing fits perfectly into this environment.
                </p>
                <p>
                  Our mobile service means you can train in your backyard surrounded by 
                  ponderosa pines, in your garage during winter months, or at a local 
                  park with mountain views. No crowded gym, no long commute—just 
                  professional boxing instruction in the high country.
                </p>
                <p>
                  Whether you're a year-round resident, a seasonal worker, or splitting 
                  time between the Valley and the mountains, we adapt to your schedule 
                  and location.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="glass-panel p-6 flex items-start gap-4">
                <TreePine className="w-8 h-8 text-brand-red flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase mb-1">Outdoor Training</h3>
                  <p className="text-gray-400 text-sm">
                    Take advantage of Northern Arizona's incredible outdoor spaces for your workout
                  </p>
                </div>
              </div>
              <div className="glass-panel p-6 flex items-start gap-4">
                <Sun className="w-8 h-8 text-brand-orange flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase mb-1">Year-Round Service</h3>
                  <p className="text-gray-400 text-sm">
                    Rain, shine, or snow—we bring training to you in all seasons
                  </p>
                </div>
              </div>
              <div className="glass-panel p-6 flex items-start gap-4">
                <Mountain className="w-8 h-8 text-white flex-shrink-0" />
                <div>
                  <h3 className="text-white font-bold uppercase mb-1">Altitude Advantage</h3>
                  <p className="text-gray-400 text-sm">
                    Train at elevation for enhanced cardiovascular conditioning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connection */}
      <section className="py-24 bg-zinc-900">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Serving Our Northern Arizona Community
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto mb-8 font-light text-lg">
            Canyon Boxing is built for Northern Arizona. We understand the unique lifestyle 
            here—the love of outdoors, the seasonal rhythms, and the tight-knit communities. 
            Our mobile service is designed to fit the way Northern Arizonans live.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="p-6">
              <h3 className="text-brand-red font-bold uppercase mb-2">Residents</h3>
              <p className="text-gray-400 text-sm">Year-round training at your home or preferred location</p>
            </div>
            <div className="p-6">
              <h3 className="text-brand-orange font-bold uppercase mb-2">Seasonal Workers</h3>
              <p className="text-gray-400 text-sm">Flexible scheduling for Grand Canyon and ski resort staff</p>
            </div>
            <div className="p-6">
              <h3 className="text-white font-bold uppercase mb-2">Second Homeowners</h3>
              <p className="text-gray-400 text-sm">Train when you're in town, skip when you're not</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-brand-red to-brand-orange">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6 uppercase italic tracking-tighter">
            Start Training in Northern Arizona
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-8 font-light text-lg">
            Book your first session and experience elite boxing personal training 
            in Arizona's beautiful high country.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-brand-red hover:bg-gray-100 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none"
              onClick={() => openBooking("1on1")}
              data-testid="button-cta-book-1on1"
            >
              Book 1-on-1
            </Button>
            <Button 
              size="lg"
              className="bg-black/20 text-white hover:bg-black/30 text-lg font-bold uppercase tracking-widest px-8 py-6 rounded-none border border-white/30"
              onClick={() => openBooking("group")}
              data-testid="button-cta-book-group"
            >
              Book Group
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
        sessionType={sessionType}
      />
    </PageLayout>
  );
}
