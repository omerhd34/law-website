import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LeaseDatePicker } from "../LeaseDatePicker";
import { LeaseSelect } from "../LeaseSelect";
import { CONTRACT_DURATION_OPTIONS } from "../leaseAgreementSummary";

export function LeaseStepDuration({ form, update, inputClass }) {
 return (
  <div className="space-y-6">
   <div className="grid gap-4 sm:grid-cols-2">
    <div className="space-y-2">
     <Label htmlFor="startDate">Kira Başlangıç Tarihi</Label>
     <LeaseDatePicker
      id="startDate"
      className={inputClass}
      value={form.startDate}
      onChange={(v) => update("startDate", v)}
      placeholder="Başlangıç tarihi"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="endDate">Kira Bitiş Tarihi</Label>
     <LeaseDatePicker
      id="endDate"
      className={inputClass}
      value={form.endDate}
      onChange={(v) => update("endDate", v)}
      placeholder="Bitiş tarihi"
      required={form.contractDuration !== "belirsiz"}
      minDate={form.startDate || undefined}
     />
     {form.contractDuration === "belirsiz" && (
      <p className="text-xs text-muted-foreground">
       Belirsiz sürede bitiş tarihi isteğe bağlıdır.
      </p>
     )}
    </div>
   </div>
   <div className="grid gap-4 sm:grid-cols-2">
    <div className="space-y-2">
     <Label htmlFor="contractDuration">Sözleşme Süresi</Label>
     <LeaseSelect
      id="contractDuration"
      className={inputClass}
      value={form.contractDuration}
      onChange={(e) => update("contractDuration", e.target.value)}
      options={CONTRACT_DURATION_OPTIONS}
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="terminationNoticeDays">
      Fesih Bildirim Süresi (Gün)
     </Label>
     <Input
      id="terminationNoticeDays"
      className={inputClass}
      inputMode="numeric"
      value={form.terminationNoticeDays}
      onChange={(e) =>
       update("terminationNoticeDays", e.target.value.replace(/\D/g, ""))
      }
      placeholder="Fesih Bildirim Süresi (Gün)"
     />
    </div>
   </div>
   <div className="space-y-3 rounded-xl border border-border/60 bg-muted/20 p-4">
    <p className="text-sm font-medium text-foreground">Otomatik Yenileme</p>
    <div className="flex gap-3">
     <Checkbox
      id="autoRenewal"
      checked={form.autoRenewal}
      onCheckedChange={(v) => update("autoRenewal", v === true)}
     />
     <label
      htmlFor="autoRenewal"
      className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
     >
      Sözleşme süresi sonunda taraflardan biri fesih bildirmezse otomatik
      olarak uzar.
     </label>
    </div>
   </div>
  </div>
 );
}
