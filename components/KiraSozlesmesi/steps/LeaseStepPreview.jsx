import { LeaseAgreementPdfDocument } from "../pdf/LeaseAgreementPdfDocument";
import { LeaseAgreementPdfPreview } from "../LeaseAgreementPdfPreview";

export function LeaseStepPreview({ form, rentIncreaseSummary }) {
 return (
  <div className="space-y-4">
   <LeaseAgreementPdfPreview>
    <LeaseAgreementPdfDocument
     form={form}
     rentIncreaseSummary={rentIncreaseSummary}
    />
   </LeaseAgreementPdfPreview>
  </div>
 );
}