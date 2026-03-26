import { Button } from "../ui/button";
import Link from "next/link";

const ActionButtons = () => {
 return (
  <div className="hidden md:flex items-center gap-6">
   <Button asChild>
    <Link href="/iletisim">Danışmanlık Al</Link>
   </Button>
  </div>
 )
}
export default ActionButtons;
