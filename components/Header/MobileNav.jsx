"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/button";
import Logo from "./Logo";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNav = ({ navLinks }) => {
 const [open, setOpen] = useState(false);

 return (
  <>
   {/* Hamburger butonu */}
   <Button
    variant="ghost"
    size="icon"
    className="md:hidden"
    aria-label="Menüyü aç"
    onClick={() => setOpen(true)}
   >
    <Menu className="h-6 w-6" />
   </Button>

   {/* Overlay + sol sidebar */}
   {open && (
    <div className="fixed inset-0 z-50 md:hidden">
     {/* Karanlık arka plan */}
     <div
      className="absolute inset-0 bg-black/40 backdrop-blur-xs"
      onClick={() => setOpen(false)}
     />

     {/* Sol panel */}
     <div className="relative h-full w-[300px] sm:w-[400px] bg-popover text-popover-foreground shadow-lg flex flex-col gap-8 mt-0">
      <div className="flex items-center justify-between px-6 pt-6">
       <Logo />
       <Button
        variant="ghost"
        size="icon-sm"
        aria-label="Menüyü kapat"
        onClick={() => setOpen(false)}
       >
        <X className="h-4 w-4" />
       </Button>
      </div>

      <div className="flex flex-col gap-8 px-6 pb-6 mt-4 h-full">
       <nav className="flex flex-col gap-4">
        <NavLinks
         navLinks={navLinks}
         onNavigate={() => setOpen(false)}
         linkBaseClassName="text-lg font-medium transition-colors"
         inactiveClassName="text-foreground hover:text-primary"
         activeClassName="text-primary"
        />
       </nav>

       <div className="flex flex-col gap-4 mt-auto">
        <Button asChild className="w-full">
         <Link href="/iletisim">Danışmanlık Al</Link>
        </Button>
       </div>
      </div>
     </div>
    </div>
   )}
  </>
 );
};

export default MobileNav;