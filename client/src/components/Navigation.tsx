import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [location] = useLocation();

  const isHomePage = location === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPricing = () => {
    setIsOpen(false);
    if (isHomePage) {
      setTimeout(() => {
        const pricingSection = document.getElementById('pricing');
        if (pricingSection) {
          pricingSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.location.href = '/#pricing';
    }
  };

  const services = [
    { name: "1-on-1 Training", href: "/one-on-one-boxing" },
    { name: "Group Training", href: "/group-boxing" },
  ];

  const locations = [
    { name: "Williams, AZ", href: "/williams-az-boxing" },
    { name: "Route 66 Area", href: "/route-66-boxing" },
    { name: "Northern Arizona", href: "/northern-arizona-boxing" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-background/80 backdrop-blur-md border-white/5 py-4" : "py-6 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase" data-testid="link-home">
          Canyon<span className="text-brand-red">Boxing</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {isHomePage && (
            <a
              href="#about"
              className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
              data-testid="link-nav-about"
            >
              About
            </a>
          )}

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Services
              <ChevronDown className={cn("w-4 h-4 transition-transform", servicesOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 shadow-xl"
                >
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {service.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Locations Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setLocationsOpen(true)}
            onMouseLeave={() => setLocationsOpen(false)}
          >
            <button className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors flex items-center gap-1">
              Locations
              <ChevronDown className={cn("w-4 h-4 transition-transform", locationsOpen && "rotate-180")} />
            </button>
            <AnimatePresence>
              {locationsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-zinc-900 border border-white/10 shadow-xl"
                >
                  {locations.map((loc) => (
                    <a
                      key={loc.href}
                      href={loc.href}
                      className="block px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {loc.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {isHomePage && (
            <a
              href="#pricing"
              className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
              data-testid="link-nav-pricing"
            >
              Pricing
            </a>
          )}

          <a href="tel:6029464446" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold tracking-wider" data-testid="link-nav-phone">
            <Phone className="w-4 h-4" />
            (602) 946-4446
          </a>
          <Button 
            className="bg-brand-red hover:bg-red-700 text-white rounded-none font-bold uppercase tracking-wider px-6"
            onClick={scrollToPricing}
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
              {isHomePage && (
                <a
                  href="#about"
                  className="text-lg font-bold uppercase text-white"
                  onClick={() => setIsOpen(false)}
                >
                  About
                </a>
              )}
              
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Services</span>
                <div className="mt-2 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block text-white font-medium py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Locations</span>
                <div className="mt-2 space-y-2">
                  {locations.map((loc) => (
                    <a
                      key={loc.href}
                      href={loc.href}
                      className="block text-white font-medium py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              </div>

              {isHomePage && (
                <a
                  href="#pricing"
                  className="text-lg font-bold uppercase text-white border-t border-white/10 pt-4"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
              )}
              
              <a href="tel:6029464446" className="flex items-center gap-2 text-white font-bold py-2 border-t border-white/10 pt-4" data-testid="link-mobile-phone">
                <Phone className="w-5 h-5 text-brand-red" />
                (602) 946-4446
              </a>
              <Button 
                className="w-full bg-brand-red text-white rounded-none font-bold uppercase"
                onClick={scrollToPricing}
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
