import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MobileService } from "@/components/MobileService";
import { Regimen } from "@/components/Regimen";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  useSEO({
    title: "Mobile Boxing Personal Training on Route 66",
    description: "Elite mobile boxing personal training serving Williams, AZ and Northern Arizona. 1-on-1 and group sessions with professional coaching brought directly to your location.",
    keywords: "boxing training Williams AZ, mobile boxing coach, personal trainer Route 66, Northern Arizona boxing, fitness Williams Arizona"
  });

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <MobileService />
      <Regimen />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}
