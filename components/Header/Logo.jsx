import { Scale } from "lucide-react";
import Link from "next/link";

const Logo = () => {
 return (
  <Link href="/" className="flex items-center gap-2">
   <div className="bg-primary/10 p-2 rounded-md">
    <Scale className="h-6 w-6 text-primary" />
   </div>
   <span className="text-xl font-bold tracking-tight text-foreground">
    Adalet Hukuk
   </span>
  </Link>
 );
}
export default Logo