import { Label } from "@/components/ui/label";
import { LeaseDatePicker } from "@/components/KiraSozlesmesi/LeaseDatePicker";
import { LeaseSelect } from "@/components/KiraSozlesmesi/LeaseSelect";
import { DELIVERY_METHOD_OPTIONS } from "../ihtarnameFormConfig";

export function IhtarStepGeneral({ form, update, inputClass }) {
 return (
  <div className="space-y-6">
   <div className="space-y-2">
    <Label htmlFor="noticeDate">İhtarname tarihi</Label>
    <LeaseDatePicker
     id="noticeDate"
     className={inputClass}
     value={form.noticeDate}
     onChange={(v) => update("noticeDate", v)}
     placeholder="Tarih seçin"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="deliveryMethod">Gönderim yöntemi</Label>
    <LeaseSelect
     id="deliveryMethod"
     className={inputClass}
     value={form.deliveryMethod}
     onChange={(e) => update("deliveryMethod", e.target.value)}
     options={DELIVERY_METHOD_OPTIONS}
     placeholder="Seçiniz"
     required
    />
   </div>
  </div>
 );
}
