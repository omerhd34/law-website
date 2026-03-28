export const PROPERTY_TYPE_OPTIONS = [
 { value: "konut", label: "Konut (Mesken)" },
 { value: "isyeri", label: "İşyeri" },
 { value: "dukkan", label: "Dükkan" },
 { value: "depo", label: "Depo" },
 { value: "arsa", label: "Arsa" },
 { value: "diger", label: "Diğer" },
];

export const HEATING_OPTIONS = [
 { value: "dogalgaz_kombi", label: "Doğalgaz Kombi" },
 { value: "merkezi", label: "Merkezi Sistem" },
 { value: "soba", label: "Soba" },
 { value: "klima", label: "Klima" },
 { value: "yok", label: "Yok" },
];

export const FURNISHING_OPTIONS = [
 { value: "esyali", label: "Eşyalı" },
 { value: "esyasiz", label: "Eşyasız" },
 { value: "yari_esyali", label: "Yarı Eşyalı" },
];

export const USAGE_PURPOSE_OPTIONS = [
 { value: "mesken", label: "Mesken (Konut)" },
 { value: "isyeri", label: "İşyeri" },
 { value: "depo", label: "Depo" },
 { value: "diger", label: "Diğer" },
];

export const PAYMENT_METHOD_OPTIONS = [
 { value: "banka_eft", label: "Banka Havalesi/EFT" },
 { value: "elden", label: "Elden Ödeme" },
 { value: "otomatik_talimat", label: "Otomatik Ödeme Talimatı" },
];

export const DEPOSIT_MONTHS_OPTIONS = [
 { value: "1", label: "1 Aylık" },
 { value: "2", label: "2 Aylık" },
 { value: "3", label: "3 Aylık" },
];

export const CONTRACT_DURATION_OPTIONS = [
 { value: "1", label: "1 Yıl" },
 { value: "2", label: "2 Yıl" },
 { value: "3", label: "3 Yıl" },
 { value: "5", label: "5 Yıl" },
 { value: "belirsiz", label: "Belirsiz Süreli" },
];

export const STAMP_DUTY_OPTIONS = [
 { value: "kiraci", label: "Kiracı" },
 { value: "kiraya_veren", label: "Kiraya Veren" },
];

export function optionLabel(options, value) {
 if (!value) return "—";
 return options.find((o) => o.value === value)?.label ?? value;
}

export function formatMoneyDisplay(raw) {
 if (raw === "" || raw == null) return "—";
 const n = Number(String(raw).replace(",", "."));
 if (Number.isNaN(n)) return String(raw);
 return new Intl.NumberFormat("tr-TR", {
  style: "currency",
  currency: "TRY",
  maximumFractionDigits: 2,
 }).format(n);
}

export function formatPropertyAddressSummary(form) {
 const parts = [
  form.provinceDistrict?.trim(),
  form.neighborhood?.trim(),
  form.street?.trim(),
  form.exteriorDoorNo?.trim() && `Dış kapı: ${form.exteriorDoorNo.trim()}`,
  form.apartmentNo?.trim() && `Daire: ${form.apartmentNo.trim()}`,
  form.blockParcelNo?.trim() && `Ada/parsel: ${form.blockParcelNo.trim()}`,
 ].filter(Boolean);
 return parts.length ? parts.join(" · ") : "—";
}

/**
 * Önizleme listesi ve PDF için ortak satırlar.
 * @returns {{ label: string; value: string; bullet?: boolean }[]}
 */
export function getLeaseAgreementSummaryRows(form, rentIncreaseSummary) {
 const utilLabels = [];
 if (form.utilAidat) utilLabels.push("Aidat");
 if (form.utilSu) utilLabels.push("Su");
 if (form.utilDogalgaz) utilLabels.push("Doğalgaz");
 if (form.utilElektrik) utilLabels.push("Elektrik");
 if (form.utilInternet) utilLabels.push("İnternet");

 const rows = [];

 rows.push({
  label: "Sözleşme tarihi (taşınmaz)",
  value: form.propertyAgreementDate || "—",
 });
 rows.push({
  label: "Kiralanan adres",
  value: formatPropertyAddressSummary(form),
 });

 let propertyLine = `${optionLabel(PROPERTY_TYPE_OPTIONS, form.propertyType)} · ${optionLabel(USAGE_PURPOSE_OPTIONS, form.usagePurpose)}`;
 if (form.propertyAreaM2?.trim()) propertyLine += ` · ${form.propertyAreaM2.trim()} m²`;
 if (form.roomCount?.trim()) propertyLine += ` · ${form.roomCount.trim()} oda`;
 if (form.floorLevel?.trim()) propertyLine += ` · Kat: ${form.floorLevel.trim()}`;
 if (form.heatingSystem)
  propertyLine += ` · ${optionLabel(HEATING_OPTIONS, form.heatingSystem)}`;
 if (form.furnishingStatus)
  propertyLine += ` · ${optionLabel(FURNISHING_OPTIONS, form.furnishingStatus)}`;
 rows.push({ label: "Taşınmaz", value: propertyLine });

 if (form.fixturesNote?.trim()) {
  rows.push({
   label: "Demirbaşlar",
   value: form.fixturesNote.trim(),
   bullet: false,
  });
 }

 let landlord = form.landlordName || "—";
 if (form.landlordEmail) landlord += ` · ${form.landlordEmail}`;
 rows.push({ label: "Kiraya veren", value: landlord });

 let tenant = form.tenantName || "—";
 if (form.tenantEmail) tenant += ` · ${form.tenantEmail}`;
 rows.push({ label: "Kiracı", value: tenant });

 if (form.hasGuarantor) {
  rows.push({ label: "Kefil", value: form.guarantorName || "—" });
 }

 rows.push({ label: "Aylık kira", value: formatMoneyDisplay(form.monthlyRent) });

 let depositLine = formatMoneyDisplay(form.deposit);
 if (form.depositMonths) {
  depositLine += ` (${optionLabel(DEPOSIT_MONTHS_OPTIONS, form.depositMonths)})`;
 }
 rows.push({ label: "Depozito", value: depositLine });

 rows.push({
  label: "Ödeme",
  value: optionLabel(PAYMENT_METHOD_OPTIONS, form.paymentMethod),
 });

 if ((form.iban ?? "").replace(/\s/g, "").trim()) {
  rows.push({ label: "IBAN", value: form.iban.trim() });
 }

 rows.push({
  label: "Sözleşme süresi",
  value: optionLabel(CONTRACT_DURATION_OPTIONS, form.contractDuration),
 });
 rows.push({
  label: "Kira tarihleri",
  value: `${form.startDate || "—"} — ${form.endDate || "—"}`,
 });
 rows.push({
  label: "Otomatik yenileme",
  value: form.autoRenewal ? "Evet" : "Hayır",
 });
 rows.push({
  label: "Fesih bildirimi (gün)",
  value: form.terminationNoticeDays.trim() || "—",
 });
 rows.push({ label: "Yıllık kira artışı", value: rentIncreaseSummary });
 rows.push({
  label: "Damga vergisi",
  value: optionLabel(STAMP_DUTY_OPTIONS, form.stampDutyParty),
 });

 if (utilLabels.length > 0) {
  rows.push({
   label: "Dahil giderler",
   value: utilLabels.join(", "),
  });
 }

 if (form.competentCourt.trim()) {
  rows.push({
   label: "Yetkili mahkeme",
   value: form.competentCourt.trim(),
  });
 }

 if (form.specialClauses.trim()) {
  rows.push({
   label: "Özel şartlar",
   value: form.specialClauses.trim(),
   bullet: false,
  });
 }

 return rows;
}
