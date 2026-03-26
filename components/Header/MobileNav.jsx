import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import {
 Sheet,
 SheetContent,
 SheetTrigger,
} from "../ui/sheet";
import Logo from "./Logo";
import Link from "next/link";
import NavLinks from "./NavLinks";

const MobileNav = ({ navLinks }) => {
 return (
  <Sheet>
   <SheetTrigger asChild>
    <Button variant="ghost" size="icon" className="md:hidden">
     <Menu className="h-6 w-6" />
     <span className="sr-only">Menüyü aç</span>
    </Button>
   </SheetTrigger>
   <SheetContent side="left" className="w-[300px] sm:w-[400px]" showCloseButton={false}>
    <div className="flex flex-col gap-8 mt-8">
     <Logo />
     <nav className="flex flex-col gap-4">
      <NavLinks
       navLinks={navLinks}
       closeOnNavigate
       linkBaseClassName="text-lg font-medium transition-colors"
       inactiveClassName="text-foreground hover:text-primary"
       activeClassName="text-primary"
      />
     </nav>
     <div className="flex flex-col gap-4 mt-auto">
      <Button asChild className="w-full">
       <Link href="/iletisim">Danışmanlık Al</Link>
      </Button>
     </div>
    </div>
   </SheetContent>
  </Sheet>
 )
}
export default MobileNav;
