import { Scale } from "lucide-react";
import Link from "next/link";

export default function Logo() {
 return (
  <Link href="/" className="group flex items-center gap-3 shrink-0 select-none">
   <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-foreground shadow-md transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 group-hover:shadow-xl">
    <Scale className="h-5 w-5 text-background" />
    <div className="absolute inset-0 rounded-xl ring-1 ring-foreground/10" />
   </div>
   <div className="flex flex-col leading-none gap-[2px]">
    <span className="text-[15px] font-bold tracking-tight text-foreground transition-colors duration-200 group-hover:text-foreground/80">
     Adalet Hukuk
    </span>
    <span className="text-[9px] font-semibold tracking-[0.18em] uppercase text-muted-foreground">
     Avukatlık Bürosu
    </span>
   </div>
  </Link>
 );
}