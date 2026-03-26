"use client";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

export default function ThemeToggle() {
 const { theme, setTheme } = useTheme();
 const isDark = theme === "dark";

 return (
  <Button
   variant="ghost"
   size="icon"
   className="h-9 w-9"
   aria-label="Tema değiştir"
   onClick={() => setTheme(isDark ? "light" : "dark")}
  >
   {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
  </Button>
 );
}