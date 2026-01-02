import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { MobileService } from "@/components/MobileService";
import { Regimen } from "@/components/Regimen";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
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
