import { IhtarnamePdfDocument } from "../pdf/IhtarnamePdfDocument";
import { IhtarnamePdfPreview } from "../IhtarnamePdfPreview";

export function IhtarStepPreview({ form }) {
 return (
  <div className="space-y-4">
   <IhtarnamePdfPreview>
    <IhtarnamePdfDocument form={form} />
   </IhtarnamePdfPreview>
  </div>
 );
}
