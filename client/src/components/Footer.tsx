import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase mb-4">
              Canyon<span className="text-brand-red">Boxing</span>
            </h2>
            <p className="text-gray-400 font-light text-sm">
              Mobile boxing personal training serving Williams, AZ and the Route 66 corridor in Northern Arizona.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="/one-on-one-boxing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  1-on-1 Personal Training
                </a>
              </li>
              <li>
                <a href="/group-boxing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Group Training
                </a>
              </li>
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Areas Served</h3>
            <ul className="space-y-2">
              <li>
                <a href="/williams-az-boxing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Williams, AZ
                </a>
              </li>
              <li>
                <a href="/route-66-boxing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Route 66 Corridor
                </a>
              </li>
              <li>
                <a href="/northern-arizona-boxing" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Northern Arizona
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-widest text-xs mb-4">Contact</h3>
            <div className="space-y-3">
              <a href="tel:6029464446" className="text-gray-400 hover:text-brand-red transition-colors flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4" />
                (602) 946-4446
              </a>
              <a href="mailto:info@canyonboxing.com" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4" />
                info@canyonboxing.com
              </a>
              <div className="flex gap-4 pt-2">
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <div className="text-xs text-gray-600 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Canyon Boxing Club. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
