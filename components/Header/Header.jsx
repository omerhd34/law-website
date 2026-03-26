"use client";

import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";

import Logo from "./Logo";
import DesktopNav from "./DesktopNav";
import HeaderAvatar from "./HeaderAvatar";
import ThemeToggle from "./ThemeToggle";
import MobileNav from "./MobileNav";

export default function Header() {
 const [mobileOpen, setMobileOpen] = useState(false);
 const [scrolled, setScrolled] = useState(false);

 useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 8);
  window.addEventListener("scroll", onScroll, { passive: true });
  return () => window.removeEventListener("scroll", onScroll);
 }, []);

 return (
  <>
   <header
    className={cn(
     "sticky top-0 z-30 w-full transition-all duration-300",
     scrolled
      ? "bg-header/92 backdrop-blur-xl border-b border-border/50 shadow-sm shadow-foreground/5"
      : "bg-header/96 backdrop-blur-md border-b border-border/40"
    )}
   >
    <div className="h-px w-full bg-linear-to-r from-transparent via-foreground/12 to-transparent" />

    <div className="container mx-auto">
     <div className="flex min-h-[68px] items-center justify-between gap-4">
      <Logo />

      <DesktopNav />

      <div className="flex items-center gap-1.5">
       <HeaderAvatar />
       <ThemeToggle />

       <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-foreground hover:bg-muted transition-colors cursor-pointer"
        aria-label="Menüyü aç"
       >
        <Menu className="h-5 w-5" />
       </button>
      </div>
     </div>
    </div>
   </header>

   <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
  </>
 );
}