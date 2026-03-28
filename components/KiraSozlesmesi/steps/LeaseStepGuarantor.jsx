import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export function LeaseStepGuarantor({
 form,
 update,
 inputClass,
 textareaClass,
}) {
 return (
  <div className="space-y-6">
   <div className="flex gap-3 rounded-xl border border-border/60 bg-muted/20 p-4">
    <Checkbox
     id="hasGuarantor"
     checked={form.hasGuarantor}
     onCheckedChange={(v) => update("hasGuarantor", v === true)}
    />
    <div className="space-y-0.5">
     <label htmlFor="hasGuarantor" className="cursor-pointer text-sm font-medium">
      Kefil Var mı?
     </label>
     <p className="text-xs text-muted-foreground">
      Sözleşmede kefil bulunacaksa işaretleyin
     </p>
    </div>
   </div>
   {form.hasGuarantor && (
    <div className="space-y-4">
     <div className="grid gap-4 sm:grid-cols-2">
      <div className="space-y-2">
       <Label htmlFor="guarantorName">Ad Soyad</Label>
       <Input
        id="guarantorName"
        className={inputClass}
        value={form.guarantorName}
        onChange={(e) => update("guarantorName", e.target.value)}
        placeholder="Kefilin tam adı"
       />
      </div>
      <div className="space-y-2">
       <Label htmlFor="guarantorTc">T.C. Kimlik No</Label>
       <Input
        id="guarantorTc"
        className={inputClass}
        value={form.guarantorTc}
        onChange={(e) =>
         update("guarantorTc", e.target.value.replace(/\D/g, ""))
        }
        maxLength={11}
        placeholder="T.C. Kimlik No / Vergi No"
       />
      </div>
     </div>
     <div className="space-y-2">
      <Label htmlFor="guarantorPhone">Telefon</Label>
      <Input
       id="guarantorPhone"
       className={inputClass}
       type="tel"
       value={form.guarantorPhone}
       onChange={(e) => update("guarantorPhone", e.target.value)}
       placeholder="05XXXXXXXXX"
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="guarantorAddress">Adres</Label>
      <textarea
       id="guarantorAddress"
       className={textareaClass}
       rows={3}
       value={form.guarantorAddress}
       onChange={(e) => update("guarantorAddress", e.target.value)}
       placeholder="Kefilin ikamet adresi"
      />
     </div>
    </div>
   )}
  </div>
 );
}
