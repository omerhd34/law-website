import FooterBrand from "./FooterBrand";
import FooterBottom from "./FooterBottom";
import FooterColumn from "./FooterColumn";
import FooterContact from "./FooterContact";
import FooterLink from "./FooterLink";
import { footerLegalLinks, footerQuickLinks } from "./footer.config";

export default function Footer() {
 return (
  <footer className="relative mt-auto border-t border-border/40 bg-header">
   <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-foreground/10 to-transparent" />

   <div className="container mx-auto min-w-0 py-10 sm:py-11">
    <div className="flex flex-col gap-8 lg:grid lg:grid-cols-12 lg:gap-8 xl:gap-10">
     <div className="lg:col-span-5">
      <FooterBrand />
     </div>

     <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
      <FooterColumn title="Hızlı bağlantılar" id="footer-quick-heading">
       {footerQuickLinks.map((link) => (
        <FooterLink key={link.href} href={link.href}>
         {link.name}
        </FooterLink>
       ))}
      </FooterColumn>

      <FooterColumn title="Yasal" id="footer-legal-heading">
       {footerLegalLinks.map((link) => (
        <FooterLink key={link.href} href={link.href}>
         {link.name}
        </FooterLink>
       ))}
      </FooterColumn>

      <div className="sm:col-span-2 lg:col-span-1">
       <FooterContact />
      </div>
     </div>
    </div>

    <div className="mt-8">
     <FooterBottom />
    </div>
   </div>
  </footer>
 );
}
