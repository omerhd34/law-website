import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function LeaseStepTenant({
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
      <Label htmlFor="tenantName">Ad soyad / Ünvan</Label>
      <Input
       id="tenantName"
       className={inputClass}
       value={form.tenantName}
       onChange={(e) => update("tenantName", e.target.value)}
       placeholder="Kiracının tam adı"
       required
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="tenantTc">T.C. Kimlik No / Vergi No</Label>
      <Input
       id="tenantTc"
       className={inputClass}
       value={form.tenantTc}
       onChange={(e) =>
        update("tenantTc", e.target.value.replace(/\D/g, ""))
       }
       placeholder="T.C. Kimlik No / Vergi No"
       maxLength={11}
      />
     </div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="tenantPhone">Telefon</Label>
      <Input
       id="tenantPhone"
       className={inputClass}
       type="tel"
       value={form.tenantPhone}
       onChange={(e) => update("tenantPhone", e.target.value)}
       placeholder="05XXXXXXXXX"
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="tenantEmail">E-posta</Label>
      <Input
       id="tenantEmail"
       className={inputClass}
       type="email"
       value={form.tenantEmail}
       onChange={(e) => update("tenantEmail", e.target.value)}
       placeholder="ornek@email.com"
       autoComplete="email"
      />
     </div>
    </div>
    <div className="space-y-2">
     <Label htmlFor="tenantAddress">Adres</Label>
     <textarea
      id="tenantAddress"
      className={textareaClass}
      rows={3}
      value={form.tenantAddress}
      onChange={(e) => update("tenantAddress", e.target.value)}
      placeholder="Kiracının mevcut adresi"
     />
    </div>
   </div>
  </div>
 );
}
