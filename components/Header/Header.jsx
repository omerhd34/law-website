import ActionButtons from "./ActionButtons";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggle from "./ThemeToggle";
import HeaderAvatar from "./HeaderAvatar";

const Header = () => {
 const navLinks = [
  { name: "Ana Sayfa", href: "/" },
  { name: "Çalışma Alanlarımız", href: "/hizmetler" },
  { name: "Avukatlarımız", href: "/ekip" },
  { name: "Yayınlar & Makaleler", href: "/yayinlar" },
  { name: "İletişim", href: "/iletisim" },
 ];

 return (
  <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
   <div className="container mx-auto px-4 h-20 flex items-center justify-between">
    <Logo />
    <Nav navLinks={navLinks} />
    <div className="flex items-center gap-3">
     <ActionButtons />
     <HeaderAvatar />
     <MobileNav navLinks={navLinks} />
     <ThemeToggle />
    </div>
   </div>
  </header>
 );
}

export default Header;