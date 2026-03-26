import NavLinks from "./NavLinks";
import { navLinks } from "./Header.config";

export default function DesktopNav() {
 return (
  <nav className="hidden lg:flex items-center gap-0.5">
   <NavLinks links={navLinks} variant="desktop" />
  </nav>
 );
}