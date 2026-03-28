export const initialForm = {
 propertyAgreementDate: "",
 provinceDistrict: "",
 neighborhood: "",
 street: "",
 blockParcelNo: "",
 propertyType: "",
 usagePurpose: "",
 exteriorDoorNo: "",
 apartmentNo: "",
 roomCount: "",
 floorLevel: "",
 heatingSystem: "",
 furnishingStatus: "",
 propertyAreaM2: "",
 fixturesNote: "",
 monthlyRent: "",
 paymentDay: "",
 paymentMethod: "",
 iban: "",
 deposit: "",
 depositMonths: "",
 annualRentIncreaseNote: "",
 contractDuration: "",
 startDate: "",
 endDate: "",
 autoRenewal: true,
 terminationNoticeDays: "",
 landlordName: "",
 landlordTc: "",
 landlordPhone: "",
 landlordEmail: "",
 landlordAddress: "",
 landlordSignature: "",
 tenantName: "",
 tenantTc: "",
 tenantPhone: "",
 tenantEmail: "",
 tenantAddress: "",
 tenantSignature: "",
 hasGuarantor: false,
 guarantorName: "",
 guarantorTc: "",
 guarantorPhone: "",
 guarantorAddress: "",
 petAllowed: false,
 sublettingAllowed: false,
 renovationWithoutPermission: false,
 utilAidat: false,
 utilSu: false,
 utilDogalgaz: false,
 utilElektrik: false,
 utilInternet: false,
 stampDutyParty: "kiraya_veren",
 competentCourt: "",
 specialClauses: "",
};

export const inputClass = "h-9";
export const textareaClass =
 "min-h-[120px] w-full resize-y rounded-lg border border-input bg-transparent px-2.5 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 dark:bg-input/30";

export function mergeFormState(prev, field, value) {
 const merged = { ...initialForm, ...prev, [field]: value };
 return Object.fromEntries(
  Object.keys(initialForm).map((k) => {
   const v = merged[k];
   if (typeof initialForm[k] === "boolean") {
    return [k, v === true || v === false ? v : initialForm[k]];
   }
   return [k, v ?? initialForm[k] ?? ""];
  }),
 );
}
