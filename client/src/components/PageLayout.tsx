import { ReactNode } from "react";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";

interface PageLayoutProps {
  children: ReactNode;
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-brand-red selection:text-white">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
