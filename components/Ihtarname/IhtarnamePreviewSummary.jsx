import {
 DELIVERY_METHOD_OPTIONS,
 NOTICE_CATEGORY_OPTIONS,
} from "./ihtarnameFormConfig";

function labelOf(options, value) {
 if (!value) return "—";
 return options.find((o) => o.value === value)?.label ?? value;
}

export function IhtarnamePreviewSummary({ form }) {
 const rows = [
  { section: "Genel bilgiler", label: "İhtarname tarihi", value: form.noticeDate || "—" },
  {
   section: "Genel bilgiler",
   label: "Gönderim",
   value: labelOf(DELIVERY_METHOD_OPTIONS, form.deliveryMethod),
  },
  { section: "İhtar eden", label: "Ad / ünvan", value: form.senderName || "—" },
  { section: "İhtar eden", label: "T.C. / vergi no", value: form.senderTc || "—" },
  { section: "İhtar eden", label: "Adres", value: form.senderAddress || "—" },
  { section: "İhtar eden", label: "Telefon", value: form.senderPhone || "—" },
  { section: "Muhatap", label: "Ad / ünvan", value: form.recipientName || "—" },
  { section: "Muhatap", label: "Adres", value: form.recipientAddress || "—" },
  { section: "Muhatap", label: "Telefon", value: form.recipientPhone || "—" },
  {
   section: "İhtar",
   label: "Tür",
   value: labelOf(NOTICE_CATEGORY_OPTIONS, form.noticeCategory),
  },
  { section: "İhtar", label: "Konu", value: form.noticeSubject || "—" },
  { section: "İhtar", label: "Metin", value: form.noticeBody || "—" },
  { section: "İhtar", label: "Süre", value: form.deadlineText || "—" },
  { section: "İhtar", label: "Talep", value: form.demand || "—" },
 ];

 return (
  <div className="space-y-4 text-sm">
   {rows.map((row, i) => {
    const prev = rows[i - 1];
    const showHeading = !prev || prev.section !== row.section;
    return (
     <div key={`${row.label}-${i}`}>
      {showHeading ? (
       <p className="mb-2 border-b border-border/60 pb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {row.section}
       </p>
      ) : null}
      <div className="mb-3 grid gap-1 sm:grid-cols-[minmax(0,11rem)_1fr] sm:gap-4">
       <div className="text-muted-foreground">{row.label}</div>
       <div className="min-w-0 whitespace-pre-wrap text-foreground">{row.value}</div>
      </div>
     </div>
    );
   })}
  </div>
 );
}
