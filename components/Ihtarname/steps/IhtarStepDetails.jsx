import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LeaseSelect } from "@/components/KiraSozlesmesi/LeaseSelect";
import { NOTICE_CATEGORY_OPTIONS } from "../ihtarnameFormConfig";

export function IhtarStepDetails({ form, update, inputClass, textareaClass }) {
 return (
  <div className="space-y-6">
   <div className="space-y-2">
    <Label htmlFor="noticeCategory">İhtar türü</Label>
    <LeaseSelect
     id="noticeCategory"
     className={inputClass}
     value={form.noticeCategory}
     onChange={(e) => update("noticeCategory", e.target.value)}
     options={NOTICE_CATEGORY_OPTIONS}
     placeholder="Seçiniz"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="noticeSubject">İhtar konusu</Label>
    <Input
     id="noticeSubject"
     className={inputClass}
     value={form.noticeSubject}
     onChange={(e) => update("noticeSubject", e.target.value)}
     placeholder="İhtar konusu"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="noticeBody">İhtar metni</Label>
    <textarea
     id="noticeBody"
     className={textareaClass}
     rows={6}
     value={form.noticeBody}
     onChange={(e) => update("noticeBody", e.target.value)}
     placeholder="İhtarın ayrıntılarını yazınız."
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="deadlineText">Süre / termin</Label>
    <Input
     id="deadlineText"
     className={inputClass}
     value={form.deadlineText}
     onChange={(e) => update("deadlineText", e.target.value)}
     placeholder="Örn: 15 gün"
     required
    />
   </div>
   <div className="space-y-2">
    <Label htmlFor="demand">Talep</Label>
    <Input
     id="demand"
     className={inputClass}
     value={form.demand}
     onChange={(e) => update("demand", e.target.value)}
     placeholder="Talep edilen"
     required
    />
   </div>
  </div>
 );
}
