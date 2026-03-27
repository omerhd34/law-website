import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FooterLink({ href, children }) {
 return (
  <li>
   <Button
    variant="ghost"
    size="sm"
    asChild
    className="h-auto min-h-0 w-fit justify-start px-0 py-1 text-sm font-normal text-muted-foreground hover:text-foreground"
   >
    <Link href={href}>{children}</Link>
   </Button>
  </li>
 );
}
