import { Mail, MapPin, Phone } from "lucide-react";
import { footerContact } from "./footer.config";

export default function FooterContact() {
 return (
  <div className="space-y-4">
   <h3 id="footer-contact-heading" className="text-xs font-semibold uppercase tracking-[0.2em] text-foreground/90">
    İletişim
   </h3>
   <ul className="space-y-3 text-sm text-muted-foreground" aria-labelledby="footer-contact-heading">
    <li className="flex gap-3">
     <Phone className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" aria-hidden />
     <a
      href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
      className="transition-colors hover:text-foreground"
     >
      {footerContact.phone}
     </a>
    </li>
    <li className="flex gap-3">
     <Mail className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" aria-hidden />
     <a href={`mailto:${footerContact.email}`} className="transition-colors hover:text-foreground">
      {footerContact.email}
     </a>
    </li>
    <li className="flex gap-3">
     <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-foreground/50" aria-hidden />
     <span>{footerContact.address}</span>
    </li>
   </ul>
  </div>
 );
}
