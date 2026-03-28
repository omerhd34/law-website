import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function IhtarStepSender({ form, update, inputClass, textareaClass }) {
 return (
  <div className="space-y-6">
   <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
    <div className="space-y-2">
     <Label htmlFor="senderName">Ad soyad / ünvan</Label>
     <Input
      id="senderName"
      className={inputClass}
      value={form.senderName}
      onChange={(e) => update("senderName", e.target.value)}
      placeholder="Ad soyad / Ünvan"
      autoComplete="name"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="senderTc">T.C. kimlik / Vergi no</Label>
     <Input
      id="senderTc"
      className={inputClass}
      inputMode="numeric"
      value={form.senderTc}
      onChange={(e) => update("senderTc", e.target.value.replace(/\D/g, ""))}
      placeholder="T.C. kimlik / Vergi no"
      maxLength={11}
      required
     />
    </div>
   </div>
   <div className="space-y-2">
    <Label htmlFor="senderAddress">Adres</Label>
    <textarea
     id="senderAddress"
     className={textareaClass}
     rows={4}
     value={form.senderAddress}
     onChange={(e) => update("senderAddress", e.target.value)}
     placeholder="Adres"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="senderPhone">Telefon numarası</Label>
    <Input
     id="senderPhone"
     className={inputClass}
     inputMode="tel"
     value={form.senderPhone}
     onChange={(e) => update("senderPhone", e.target.value)}
     placeholder="05XXXXXXXXX"
     autoComplete="tel"
     required
    />
   </div>
  </div>
 );
}
