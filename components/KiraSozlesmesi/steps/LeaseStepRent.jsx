import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LeaseSelect } from "../LeaseSelect";
import {
 DEPOSIT_MONTHS_OPTIONS,
 PAYMENT_METHOD_OPTIONS,
} from "../leaseAgreementSummary";

export function LeaseStepRent({ form, update, inputClass }) {
 return (
  <div className="space-y-6">
   <div className="space-y-4">
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="monthlyRent">Aylık Kira Bedeli (TL)</Label>
      <Input
       id="monthlyRent"
       className={inputClass}
       inputMode="decimal"
       value={form.monthlyRent}
       onChange={(e) => update("monthlyRent", e.target.value)}
       required
       placeholder="25000"
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="paymentDay">Kira Ödeme Günü</Label>
      <Input
       id="paymentDay"
       className={inputClass}
       inputMode="numeric"
       min={1}
       max={31}
       value={form.paymentDay}
       onChange={(e) => update("paymentDay", e.target.value)}
       placeholder="15"
      />
     </div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="paymentMethod">Ödeme Yöntemi</Label>
      <LeaseSelect
       id="paymentMethod"
       className={inputClass}
       value={form.paymentMethod}
       onChange={(e) => update("paymentMethod", e.target.value)}
       options={PAYMENT_METHOD_OPTIONS}
       required
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="iban">Banka Hesap Bilgileri (IBAN)</Label>
      <Input
       id="iban"
       className={inputClass}
       value={form.iban}
       onChange={(e) => update("iban", e.target.value.toUpperCase())}
       placeholder="TR123456789012345678901234"
       autoComplete="off"
       spellCheck={false}
      />
     </div>
    </div>
    <div className="grid gap-4 sm:grid-cols-2">
     <div className="space-y-2">
      <Label htmlFor="deposit">Depozito Bedeli (TL)</Label>
      <Input
       id="deposit"
       className={inputClass}
       inputMode="decimal"
       value={form.deposit}
       onChange={(e) => update("deposit", e.target.value)}
       placeholder="25000"
      />
     </div>
     <div className="space-y-2">
      <Label htmlFor="depositMonths">Depozito (Kaç Aylık Kira)</Label>
      <LeaseSelect
       id="depositMonths"
       className={inputClass}
       value={form.depositMonths}
       onChange={(e) => update("depositMonths", e.target.value)}
       options={DEPOSIT_MONTHS_OPTIONS}
      />
     </div>
    </div>
    <div className="space-y-2">
     <Label htmlFor="annualRentIncreaseNote">Yıllık Kira Artış Oranı</Label>
     <Input
      id="annualRentIncreaseNote"
      className={inputClass}
      value={form.annualRentIncreaseNote}
      onChange={(e) => update("annualRentIncreaseNote", e.target.value)}
      placeholder="TÜFE oranında, %25, vb."
     />
    </div>
   </div>
  </div>
 );
}
