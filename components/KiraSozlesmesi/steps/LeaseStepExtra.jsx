import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { LeaseSelect } from "../LeaseSelect";
import { STAMP_DUTY_OPTIONS } from "../leaseAgreementSummary";

const UTIL_FIELDS = [
 ["utilAidat", "Aidat"],
 ["utilSu", "Su"],
 ["utilDogalgaz", "Doğalgaz"],
 ["utilElektrik", "Elektrik"],
 ["utilInternet", "İnternet"],
];

export function LeaseStepExtra({ form, update, inputClass, textareaClass }) {
 return (
  <div className="space-y-6">
   <div className="space-y-5">
    <div className="space-y-2">
     <p className="text-sm font-medium text-foreground">Evcil Hayvan İzni</p>
     <div className="flex gap-3">
      <Checkbox
       id="petAllowed"
       checked={form.petAllowed}
       onCheckedChange={(v) => update("petAllowed", v === true)}
      />
      <label
       htmlFor="petAllowed"
       className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
      >
       Kiralanan yerde evcil hayvan beslenebilir.
      </label>
     </div>
    </div>
    <div className="space-y-2">
     <p className="text-sm font-medium text-foreground">Alt Kiralama İzni</p>
     <div className="flex gap-3">
      <Checkbox
       id="sublettingAllowed"
       checked={form.sublettingAllowed}
       onCheckedChange={(v) => update("sublettingAllowed", v === true)}
      />
      <label
       htmlFor="sublettingAllowed"
       className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
      >
       Kiracı, taşınmazı üçüncü kişilere kiralayabilir.
      </label>
     </div>
    </div>
    <div className="space-y-2">
     <p className="text-sm font-medium text-foreground">Tadilat İzni</p>
     <div className="flex gap-3">
      <Checkbox
       id="renovationWithoutPermission"
       checked={form.renovationWithoutPermission}
       onCheckedChange={(v) =>
        update("renovationWithoutPermission", v === true)
       }
      />
      <label
       htmlFor="renovationWithoutPermission"
       className="cursor-pointer text-sm leading-relaxed text-muted-foreground"
      >
       Kiracı, kiraya verenin yazılı izni olmadan tadilat yapabilir.
      </label>
     </div>
    </div>
   </div>
   <div className="space-y-3">
    <p className="text-sm font-medium text-foreground">Kiraya Dahil Giderler</p>
    <div className="grid gap-3 sm:grid-cols-2">
     {UTIL_FIELDS.map(([key, label]) => (
      <div
       key={key}
       className="flex items-center gap-2 rounded-lg border border-border/60 bg-muted/20 px-3 py-2.5"
      >
       <Checkbox
        id={key}
        checked={form[key]}
        onCheckedChange={(v) => update(key, v === true)}
       />
       <label htmlFor={key} className="cursor-pointer text-sm">
        {label}
       </label>
      </div>
     ))}
    </div>
   </div>
   <div className="space-y-2">
    <Label htmlFor="stampDutyParty">Damga Vergisi Sorumlusu</Label>
    <LeaseSelect
     id="stampDutyParty"
     className={inputClass}
     value={form.stampDutyParty}
     onChange={(e) => update("stampDutyParty", e.target.value)}
     options={STAMP_DUTY_OPTIONS}
     showPlaceholder={false}
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="specialClauses">Özel Şartlar</Label>
    <textarea
     id="specialClauses"
     className={textareaClass}
     value={form.specialClauses}
     onChange={(e) => update("specialClauses", e.target.value)}
     placeholder="Tarafların üzerinde anlaştığı ek şartlar varsa buraya yazınız"
     rows={5}
    />
   </div>
   <div className="space-y-2">
    <p className="text-sm font-semibold text-foreground">Yetkili Mahkeme</p>
    <p className="text-xs text-muted-foreground">
     Uyuşmazlık halinde yetkili mahkeme
    </p>
    <Input
     id="competentCourt"
     className={inputClass}
     value={form.competentCourt}
     onChange={(e) => update("competentCourt", e.target.value)}
     placeholder="Yetkili mahkeme"
    />
   </div>
  </div>
 );
}
