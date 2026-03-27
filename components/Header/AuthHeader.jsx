"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";

export default function AuthHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 w-full min-w-0 transition-all duration-300",
        scrolled
          ? "bg-header/92 backdrop-blur-xl border-b border-border/50 shadow-sm shadow-foreground/5"
          : "bg-header/96 backdrop-blur-md border-b border-border/40",
      )}
    >
      <div className="h-px w-full bg-linear-to-r from-transparent via-foreground/12 to-transparent" />
      <div className="container mx-auto">
        <div className="flex min-h-[68px] items-center justify-between gap-3 min-w-0">
          <div className="min-w-0 flex-1">
            <Logo />
          </div>
          <div className="flex shrink-0 items-center gap-1.5">
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
