/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
 const [mounted, setMounted] = useState(false);
 const { theme, setTheme } = useTheme();
 const isDark = theme === "dark";

 useEffect(() => {
  setMounted(true);
 }, []);

 return (
  <Button
   variant="ghost"
   size="icon"
   className="h-9 w-9 cursor-pointer transition-all duration-200 hover:rotate-12"
   aria-label="Tema değiştir"
   onClick={() => setTheme(isDark ? "light" : "dark")}
   disabled={!mounted}
  >
   {!mounted ? (
    <Moon className="h-4 w-4 opacity-0" aria-hidden />
   ) : isDark ? (
    <Sun className="h-4 w-4 transition-transform duration-300" />
   ) : (
    <Moon className="h-4 w-4 transition-transform duration-300" />
   )}
  </Button>
 );
}