import { Separator } from "@/components/ui/separator";

export default function FooterBottom() {
 const year = new Date().getFullYear();

 return (
  <div className="space-y-4">
   <Separator className="bg-border/80" />
   <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
    <p className="shrink-0 text-center text-xs text-muted-foreground sm:text-left">
     © {year} Adalet Hukuk Avukatlık Bürosu. Tüm hakları saklıdır.
    </p>
    <p
     lang="tr"
     className="text-center text-[11px] leading-snug text-pretty text-muted-foreground/80 sm:min-w-0 sm:flex-1 sm:text-right"
    >
     Bu site genel bilgilendirme amaçlıdır; hukuki görüş veya vekâlet ilişkisi oluşturmaz.
    </p>
   </div>
  </div>
 );
}
