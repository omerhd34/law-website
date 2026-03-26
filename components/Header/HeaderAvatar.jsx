import {
 Avatar,
 AvatarFallback,
 AvatarImage,
} from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
 DropdownMenu,
 DropdownMenuContent,
 DropdownMenuGroup,
 DropdownMenuItem,
 DropdownMenuLabel,
 DropdownMenuSeparator,
 DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, CreditCard, Settings, LogOut } from "lucide-react";

export default function HeaderAvatar() {
 return (
  <DropdownMenu>
   <DropdownMenuTrigger asChild>
    <Button
     variant="ghost"
     size="icon"
     className="rounded-full h-9 w-9 cursor-pointer ring-offset-background transition-all duration-200 hover:ring-2 hover:ring-border hover:ring-offset-2 "
    >
     <Avatar className="h-7 w-7">
      <AvatarImage src="https://github.com/shadcn.png" alt="Kullanıcı" />
      <AvatarFallback className="text-xs font-semibold">AH</AvatarFallback>
     </Avatar>
    </Button>
   </DropdownMenuTrigger>

   <DropdownMenuContent className="w-52" align="end">
    <DropdownMenuLabel className="font-normal px-2 py-2">
     <div className="flex flex-col gap-0.5">
      <span className="text-xs font-semibold text-foreground">Mehmet Yılmaz</span>
      <span className="text-[11px] text-muted-foreground">m.yilmaz@outlook.com</span>
     </div>
    </DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuGroup>
     <DropdownMenuItem className="gap-2 cursor-pointer text-sm">
      <User className="h-3.5 w-3.5" /> Profilim
     </DropdownMenuItem>
     <DropdownMenuItem className="gap-2 cursor-pointer text-sm">
      <CreditCard className="h-3.5 w-3.5" /> Faturalama
     </DropdownMenuItem>
     <DropdownMenuItem className="gap-2 cursor-pointer text-sm">
      <Settings className="h-3.5 w-3.5" /> Ayarlar
     </DropdownMenuItem>
    </DropdownMenuGroup>
    <DropdownMenuSeparator />
    <DropdownMenuItem variant="destructive" className="gap-2 cursor-pointer text-sm">
     <LogOut className="h-3.5 w-3.5" /> Çıkış Yap
    </DropdownMenuItem>
   </DropdownMenuContent>
  </DropdownMenu>
 );
}