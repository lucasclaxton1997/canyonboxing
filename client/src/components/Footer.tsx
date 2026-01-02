import { Phone, Mail, Instagram, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black py-12 border-t border-white/10">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl font-heading font-bold italic tracking-tighter text-white uppercase mb-6">
          Canyon<span className="text-brand-red">Boxing</span>
        </h2>
        
        <div className="mb-8 space-y-2">
          <p className="text-white font-bold tracking-wider uppercase">Canyon Boxing Club</p>
          <a href="tel:6029464446" className="text-gray-400 hover:text-brand-red transition-colors flex items-center justify-center gap-2">
            <Phone className="w-4 h-4" />
            (602) 946-4446
          </a>
          <p className="text-gray-400 font-light max-w-md mx-auto">
            Servicing Williams, AZ and surrounding Northern Arizona areas.
          </p>
        </div>

        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Instagram">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Facebook">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="mailto:info@canyonboxing.com" className="text-gray-500 hover:text-white transition-colors" aria-label="Email">
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <div className="text-xs text-gray-600 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} Canyon Boxing Club. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
