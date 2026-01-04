import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const CALENDLY_URL = "https://calendly.com/lucasslclaxton/boxing-training";

export function BookingModal({ 
  isOpen, 
  onClose, 
  sessionType
}: { 
  isOpen: boolean; 
  onClose: () => void; 
  sessionType: "1on1" | "group";
}) {
  useEffect(() => {
    if (isOpen) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
        if (existingScript) {
          existingScript.remove();
        }
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-3xl h-[80vh] p-0 bg-zinc-900 border-white/10 overflow-hidden">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          data-testid="button-close-modal"
        >
          <X className="h-5 w-5 text-white" />
          <span className="sr-only">Close</span>
        </button>
        
        <div className="w-full h-full">
          <div 
            className="calendly-inline-widget w-full h-full" 
            data-url={CALENDLY_URL}
            style={{ minWidth: '320px', height: '100%' }}
            data-testid="calendly-embed"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
