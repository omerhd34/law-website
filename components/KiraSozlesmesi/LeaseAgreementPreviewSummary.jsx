import { getLeaseAgreementSummaryRows } from "./leaseAgreementSummary";

export function LeaseAgreementPreviewSummary({ form, rentIncreaseSummary }) {
 const rows = getLeaseAgreementSummaryRows(form, rentIncreaseSummary);
 return (
  <ul className="mt-3 list-inside list-disc space-y-1.5 text-muted-foreground">
   {rows.map((row, i) => {
    const noBullet = row.bullet === false;
    const multiline =
     row.label === "Demirbaşlar" || row.label === "Özel şartlar";
    return (
     <li
      key={`${row.label}-${i}`}
      className={noBullet ? "list-none" : undefined}
     >
      <span className="text-foreground/90">{row.label}:</span>{" "}
      <span className={multiline ? "whitespace-pre-wrap" : undefined}>
       {row.value}
      </span>
     </li>
    );
   })}
  </ul>
 );
}
