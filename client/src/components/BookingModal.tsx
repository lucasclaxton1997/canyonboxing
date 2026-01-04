import { useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
        <div className="w-full h-full pt-8">
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
