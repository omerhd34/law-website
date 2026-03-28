import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LeaseStepLandlord({
 form,
 update,
 inputClass,
 textareaClass,
}) {
 return (
  <div className="space-y-6">
   <div className="space-y-4">
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="landlordName">Ad soyad / Ünvan</Label>
      <Input
       id="landlordName"
       className={inputClass}
       value={form.landlordName}
       onChange={(e) => update("landlordName", e.target.value)}
       placeholder="Kiraya verenin tam adı"
       required
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="landlordTc">T.C. Kimlik No / Vergi No</Label>
      <Input
       id="landlordTc"
       className={inputClass}
       value={form.landlordTc}
       onChange={(e) =>
        update("landlordTc", e.target.value.replace(/\D/g, ""))
       }
       placeholder="T.C. Kimlik No / Vergi No"
       maxLength={11}
      />
     </div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="landlordPhone">Telefon</Label>
      <Input
       id="landlordPhone"
       className={inputClass}
       type="tel"
       value={form.landlordPhone}
       onChange={(e) => update("landlordPhone", e.target.value)}
       placeholder="05XXXXXXXXX"
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="landlordEmail">E-posta</Label>
      <Input
       id="landlordEmail"
       className={inputClass}
       type="email"
       value={form.landlordEmail}
       onChange={(e) => update("landlordEmail", e.target.value)}
       placeholder="ornek@email.com"
       autoComplete="email"
      />
     </div>
    </div>
    <div className="space-y-2">
     <Label htmlFor="landlordAddress">Adres</Label>
     <textarea
      id="landlordAddress"
      className={textareaClass}
      rows={3}
      value={form.landlordAddress}
      onChange={(e) => update("landlordAddress", e.target.value)}
      placeholder="Kiraya verenin ikamet adresi"
     />
    </div>
   </div>
  </div>
 );
}
