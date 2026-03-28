import { Mail, MapPin, Phone } from "lucide-react";
import { footerContact } from "./footer.config";

export default function FooterContact() {
 return (
  <div className="space-y-4">
   <h3
    id="footer-contact-heading"
    className="text-[8px] sm:text-[9px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:tracking-[0.18em]"
   >
    İletişim
   </h3>
   <ul
    className="space-y-3 text-sm font-medium text-muted-foreground"
    aria-labelledby="footer-contact-heading"
   >
    <li className="group flex gap-3">
     <Phone
      className="mt-0.5 h-[15px] w-[15px] shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
      aria-hidden
     />
     <a
      href={`tel:${footerContact.phone.replace(/\s/g, "")}`}
      className="transition-all duration-200 group-hover:text-foreground"
     >
      {footerContact.phone}
     </a>
    </li>
    <li className="group flex gap-3">
     <Mail
      className="mt-0.5 h-[15px] w-[15px] shrink-0 text-muted-foreground transition-colors duration-200 group-hover:text-foreground"
      aria-hidden
     />
     <a
      href={`mailto:${footerContact.email}`}
      className="transition-all duration-200 group-hover:text-foreground"
     >
      {footerContact.email}
     </a>
    </li>
    <li className="flex gap-3">
     <MapPin className="mt-0.5 h-[15px] w-[15px] shrink-0 text-muted-foreground" aria-hidden />
     <span>{footerContact.address}</span>
    </li>
   </ul>
  </div>
 );
}
