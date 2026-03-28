import { Scale } from "lucide-react";
import Link from "next/link";

export default function Logo() {
 return (
  <Link
   href="/"
   className="group flex min-w-0 max-w-full items-center gap-2 sm:gap-3 select-none"
  >
   <div className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-foreground shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-xl sm:h-10 sm:w-10">
    <Scale className="h-[18px] w-[18px] text-background sm:h-5 sm:w-5" />
    <div className="absolute inset-0 rounded-xl ring-1 ring-foreground/10" />
   </div>
   <div className="flex min-w-0 flex-col leading-none gap-[2px]">
    <span className="truncate text-sm font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-foreground/80">
     Adalet Hukuk
    </span>
    <span className="truncate text-[8px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:text-[9px] sm:tracking-[0.18em]">
     Avukatlık Bürosu
    </span>
   </div>
  </Link>
 );
}