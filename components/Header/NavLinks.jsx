"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

function normalizePath(pathname) {
 if (!pathname) return "/";
 if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
 return pathname;
}

export default function NavLinks({
 navLinks,
 onNavigate,
 linkBaseClassName,
 inactiveClassName,
 activeClassName,
}) {
 const pathname = normalizePath(usePathname());

 return navLinks.map((link) => {
  const href = normalizePath(link.href);
  const isActive = href === "/" ? pathname === "/" : pathname === href;

  const className = cn(
   linkBaseClassName,
   isActive ? activeClassName : inactiveClassName
  );

  return (
   <Link
    key={link.href}
    href={link.href}
    className={className}
    aria-current={isActive ? "page" : undefined}
    onClick={onNavigate}
   >
    {link.name}
   </Link>
  );
 });
}