"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { normalizePath } from "./Header.config";

export default function NavLinks({ links, onNavigate, variant = "desktop" }) {
 const pathname = normalizePath(usePathname());

 return links.map((link) => {
  const href = normalizePath(link.href);
  const isActive = href === "/" ? pathname === "/" : pathname.startsWith(href);

  if (variant === "mobile") {
   return (
    <Link
     key={link.href}
     href={link.href}
     onClick={onNavigate}
     className={cn(
      "flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150",
      isActive
       ? "bg-foreground text-background"
       : "text-muted-foreground hover:text-foreground"
     )}
    >
     {link.name}
     {isActive && (
      <span className="w-1.5 h-1.5 rounded-full bg-background/70" />
     )}
    </Link>
   );
  }

  return (
   <Link
    key={link.href}
    href={link.href}
    aria-current={isActive ? "page" : undefined}
    className={cn(
     "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap group",
     isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground"
    )}
   >
    {isActive && (
     <span className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-foreground/70" />
    )}
    {!isActive && (
     <span className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-4 h-[2px] rounded-full bg-foreground/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center" />
    )}
    <span className="relative">{link.name}</span>
   </Link>
  );
 });
}