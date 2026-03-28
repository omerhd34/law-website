"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { normalizePath } from "@/components/Header/Header.config";

export default function FooterLink({ href, children }) {
 const pathname = normalizePath(usePathname());
 const normalizedHref = normalizePath(href);
 const isActive =
  normalizedHref === "/"
   ? pathname === "/"
   : pathname.startsWith(normalizedHref);

 return (
  <li>
   <Link
    href={href}
    aria-current={isActive ? "page" : undefined}
    className={cn(
     "relative inline-flex px-0 py-1.5 text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap group",
     isActive
      ? "text-foreground"
      : "text-muted-foreground hover:text-foreground"
    )}
   >
    {isActive && (
     <span className="absolute bottom-[4px] left-0 w-4 h-[2px] rounded-full bg-foreground/70" />
    )}
    {!isActive && (
     <span className="absolute bottom-[4px] left-0 w-4 h-[2px] origin-left scale-x-0 rounded-full bg-foreground/30 transition-transform duration-200 group-hover:scale-x-100" />
    )}
    <span className="relative">{children}</span>
   </Link>
  </li>
 );
}
