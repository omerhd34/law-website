"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SheetClose } from "../ui/sheet";

function normalizePath(pathname) {
 if (!pathname) return "/";
 if (pathname.length > 1 && pathname.endsWith("/")) return pathname.slice(0, -1);
 return pathname;
}

export default function NavLinks({
 navLinks,
 closeOnNavigate = false,
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

  const linkEl = (
   <Link href={link.href} className={className} aria-current={isActive ? "page" : undefined}>
    {link.name}
   </Link>
  );

  return closeOnNavigate ? (
   <SheetClose key={link.href} asChild>
    {linkEl}
   </SheetClose>
  ) : (
   <div key={link.href}>{linkEl}</div>
  );
 });
}