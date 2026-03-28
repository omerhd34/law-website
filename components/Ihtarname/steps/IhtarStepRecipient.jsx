import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function IhtarStepRecipient({ form, update, inputClass, textareaClass }) {
 return (
  <div className="space-y-6">
   <div className="space-y-2">
    <Label htmlFor="recipientName">Ad soyad / Ünvan</Label>
    <Input
     id="recipientName"
     className={inputClass}
     value={form.recipientName}
     onChange={(e) => update("recipientName", e.target.value)}
     placeholder="Ad soyad / Ünvan"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="recipientAddress">Adres</Label>
    <textarea
     id="recipientAddress"
     className={textareaClass}
     rows={4}
     value={form.recipientAddress}
     onChange={(e) => update("recipientAddress", e.target.value)}
     placeholder="Adres"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="recipientPhone">Telefon numarası</Label>
    <Input
     id="recipientPhone"
     className={inputClass}
     inputMode="tel"
     value={form.recipientPhone}
     onChange={(e) => update("recipientPhone", e.target.value)}
     placeholder="05XXXXXXXXX"
     autoComplete="tel"
     required
    />
   </div>
  </div>
 );
}
