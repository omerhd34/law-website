import NavLinks from "./NavLinks";

const DesktopNav = ({ navLinks }) => {
 return (
  <nav className="hidden md:flex items-center gap-6">
   <NavLinks
    navLinks={navLinks}
    linkBaseClassName="text-sm font-medium transition-colors"
    inactiveClassName="text-muted-foreground hover:text-primary"
    activeClassName="text-primary"
   />
  </nav>
 )
}
export default DesktopNav;