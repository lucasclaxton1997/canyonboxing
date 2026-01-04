import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { BookingModal } from "@/components/BookingModal";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [sessionType, setSessionType] = useState<"1on1" | "group">("1on1");
  const [location] = useLocation();

  const isHomePage = location === "/";

  const calendly1on1Url = "https://calendly.com/lucasslclaxton/1-on-1-boxing-training";

  const openBooking = (type: "1on1" | "group") => {
    if (type === "1on1") {
      window.open(calendly1on1Url, "_blank");
      setBookingOpen(false);
      setIsOpen(false);
    } else {
      setSessionType(type);
      setIsModalOpen(true);
      setBookingOpen(false);
      setIsOpen(false);
    }
  };

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
    { name: "1-on-1 Training", href: "/one-on-one-boxing", id: "one-on-one" },
    { name: "Group Training", href: "/group-boxing", id: "group" },
  ];

  const locations = [
    { name: "Williams, AZ", href: "/williams-az-boxing", id: "williams" },
    { name: "Route 66 Area", href: "/route-66-boxing", id: "route66" },
    { name: "Northern Arizona", href: "/northern-arizona-boxing", id: "northern-az" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b bg-background/90 backdrop-blur-md",
        scrolled ? "border-white/5 py-4" : "border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="/" className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase" data-testid="link-home" style={{ WebkitTextStroke: '0.5px black', paintOrder: 'stroke fill' }}>
          Canyon<span className="text-brand-red">Boxing</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <a
            href={isHomePage ? "#about" : "/#about"}
            className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
            data-testid="link-nav-about"
          >
            About
          </a>
          
          <a
            href={isHomePage ? "#pricing" : "/#pricing"}
            className="text-sm uppercase tracking-widest font-bold text-gray-300 hover:text-white transition-colors"
            data-testid="link-nav-pricing"
          >
            Pricing
          </a>

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
                      data-testid={`link-service-${service.id}`}
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
                      data-testid={`link-location-${loc.id}`}
                    >
                      {loc.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="tel:6029464446" className="flex items-center gap-2 text-white hover:text-brand-red transition-colors font-bold tracking-wider" data-testid="link-nav-phone">
            <Phone className="w-4 h-4" />
            (602) 946-4446
          </a>
          
          {/* Book Now Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setBookingOpen(true)}
            onMouseLeave={() => setBookingOpen(false)}
          >
            <Button 
              className="bg-brand-red hover:bg-red-700 text-white rounded-none font-bold uppercase tracking-wider px-6"
              data-testid="button-nav-book"
            >
              Book Now
              <ChevronDown className={cn("w-4 h-4 ml-1 transition-transform", bookingOpen && "rotate-180")} />
            </Button>
            <AnimatePresence>
              {bookingOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 w-48 bg-zinc-900 border border-white/10 shadow-xl"
                >
                  <button
                    onClick={() => openBooking("1on1")}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-brand-red/20 transition-colors"
                    data-testid="button-nav-book-1on1"
                  >
                    1-on-1 Training
                  </button>
                  <button
                    onClick={() => openBooking("group")}
                    className="block w-full text-left px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-brand-orange/20 transition-colors"
                    data-testid="button-nav-book-group"
                  >
                    Group Training
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
              <a
                href={isHomePage ? "#about" : "/#about"}
                className="text-lg font-bold uppercase text-white"
                onClick={() => setIsOpen(false)}
              >
                About
              </a>
              
              <a
                href={isHomePage ? "#pricing" : "/#pricing"}
                className="text-lg font-bold uppercase text-white"
                onClick={() => setIsOpen(false)}
              >
                Pricing
              </a>
              
              <div className="border-t border-white/10 pt-4">
                <span className="text-xs text-gray-500 uppercase tracking-widest">Services</span>
                <div className="mt-2 space-y-2">
                  {services.map((service) => (
                    <a
                      key={service.href}
                      href={service.href}
                      className="block text-white font-medium py-1"
                      onClick={() => setIsOpen(false)}
                      data-testid={`link-mobile-service-${service.id}`}
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
                      data-testid={`link-mobile-location-${loc.id}`}
                    >
                      {loc.name}
                    </a>
                  ))}
                </div>
              </div>
              
              <a href="tel:6029464446" className="flex items-center gap-2 text-white font-bold py-2 border-t border-white/10 pt-4" data-testid="link-mobile-phone">
                <Phone className="w-5 h-5 text-brand-red" />
                (602) 946-4446
              </a>
              <div className="flex gap-2">
                <Button 
                  className="flex-1 bg-brand-red text-white rounded-none font-bold uppercase text-sm"
                  onClick={() => openBooking("1on1")}
                  data-testid="button-mobile-nav-book-1on1"
                >
                  Book 1-on-1
                </Button>
                <Button 
                  className="flex-1 bg-brand-orange text-white rounded-none font-bold uppercase text-sm"
                  onClick={() => openBooking("group")}
                  data-testid="button-mobile-nav-book-group"
                >
                  Book Group
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        sessionType={sessionType}
      />
    </nav>
  );
}
