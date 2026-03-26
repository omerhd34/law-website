"use client";

import { useEffect } from "react";
import { X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import NavLinks from "./NavLinks";
import { navLinks } from "./Header.config";

export default function MobileNav({ open, onClose }) {
 useEffect(() => {
  document.body.style.overflow = open ? "hidden" : "";
  return () => { document.body.style.overflow = ""; };
 }, [open]);

 return (
  <>
   <div
    className={cn(
     "fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300",
     open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
    )}
    onClick={onClose}
   />

   <div
    className={cn(
     "fixed top-0 right-0 z-50 h-full w-[280px] sm:w-[320px]",
     "bg-background border-l border-border/60 shadow-2xl",
     "flex flex-col transition-transform duration-300 ease-out"
    )}
    style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
   >
    <div className="flex items-center justify-between px-5 h-16 border-b border-border/50">
     <Logo />
     <button
      onClick={onClose}
      className="flex items-center justify-center w-8 h-8 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors cursor-pointer"
      aria-label="Menüyü kapat"
     >
      <X className="h-4 w-4" />
     </button>
    </div>

    <nav className="flex flex-col gap-1 px-3 py-4 flex-1 overflow-y-auto">
     <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 px-3 mb-2">
      Sayfalar
     </p>
     <NavLinks links={navLinks} variant="mobile" onNavigate={onClose} />
    </nav>

    <div className="px-4 py-5 border-t border-border/50">
     <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground">
      <Phone className="h-3 w-3" />
      <span>Ücretsiz ilk görüşme · Gizlilik garantisi</span>
     </div>
    </div>
   </div>
  </>
 );
}