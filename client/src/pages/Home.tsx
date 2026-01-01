import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Regimen } from "@/components/Regimen";
import { Pricing } from "@/components/Pricing";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Regimen />
      <Pricing />
      <Footer />
    </div>
  );
}
