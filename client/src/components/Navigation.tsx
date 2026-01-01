import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about" },
    { name: "The Regimen", href: "#regimen", id: "regimen" },
    { name: "Pricing", href: "#pricing", id: "pricing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase" data-testid="link-home">
          Canyon<span className="text-brand-red">Boxing</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
              data-testid={`link-nav-${link.id}`}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-brand-red hover:bg-red-700 text-white rounded-none font-bold uppercase tracking-wider px-6"
            onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-nav-book"
          >
            Book Now
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          data-testid="button-mobile-menu-toggle"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-bold uppercase text-white"
                  onClick={() => setIsOpen(false)}
                  data-testid={`link-mobile-nav-${link.id}`}
                >
                  {link.name}
                </a>
              ))}
              <Button 
                className="w-full bg-brand-red text-white rounded-none font-bold uppercase"
                onClick={() => {
                  setIsOpen(false);
                  document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
                }}
                data-testid="button-mobile-nav-book"
              >
                Book Now
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
