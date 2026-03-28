function isValidTcOrVergiNo(raw) {
 const d = String(raw ?? "").replace(/\D/g, "");
 return d.length === 11 || d.length === 10;
}

function isValidPhoneTr(raw) {
 const d = String(raw ?? "").replace(/\D/g, "");
 return d.length >= 10;
}

function isValidEmailLoose(raw) {
 const t = String(raw ?? "").trim();
 if (!t) return false;
 return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t);
}

export function validateStep(form, s) {
 if (s === 1) {
  if (!form.landlordName.trim())
   return "Kiraya veren ad soyad / ünvan zorunludur.";
  if (!isValidTcOrVergiNo(form.landlordTc))
   return "Kiraya veren T.C. kimlik veya vergi numarasını tam girin (10 veya 11 hane).";
  if (!isValidPhoneTr(form.landlordPhone))
   return "Kiraya veren telefon numarasını girin.";
  if (!isValidEmailLoose(form.landlordEmail))
   return "Kiraya veren geçerli bir e-posta girin.";
  if (!form.landlordAddress?.trim())
   return "Kiraya veren adresini girin.";
 }
 if (s === 2) {
  if (!form.tenantName.trim()) return "Kiracı ad soyad / ünvan zorunludur.";
  if (!isValidTcOrVergiNo(form.tenantTc))
   return "Kiracı T.C. kimlik veya vergi numarasını tam girin (10 veya 11 hane).";
  if (!isValidPhoneTr(form.tenantPhone))
   return "Kiracı telefon numarasını girin.";
  if (!isValidEmailLoose(form.tenantEmail))
   return "Kiracı geçerli bir e-posta girin.";
  if (!form.tenantAddress?.trim()) return "Kiracı adresini girin.";
 }
 if (s === 3) {
  if (!form.propertyAgreementDate) return "Sözleşme tarihini girin.";
  if (!form.propertyType) return "Taşınmaz türünü seçin.";
  if (!form.provinceDistrict.trim()) return "İl / ilçe girin.";
  if (!form.neighborhood.trim()) return "Mahalle girin.";
  if (!form.street.trim()) return "Sokak / cadde girin.";
  if (!form.heatingSystem) return "Isıtma sistemini seçin.";
  if (!form.furnishingStatus) return "Eşya durumunu seçin.";
  if (!form.usagePurpose) return "Kullanım amacını seçin.";
 }
 if (s === 4) {
  if (!form.contractDuration) return "Sözleşme süresini seçin.";
  if (!form.startDate) return "Kira başlangıç tarihini girin.";
  if (form.contractDuration !== "belirsiz") {
   if (!form.endDate) return "Kira bitiş tarihini girin.";
   if (new Date(form.endDate) <= new Date(form.startDate))
    return "Bitiş tarihi, başlangıçtan sonra olmalıdır.";
  } else if (form.endDate && form.startDate) {
   if (new Date(form.endDate) <= new Date(form.startDate))
    return "Bitiş tarihi, başlangıçtan sonra olmalıdır.";
  }
  const nd = form.terminationNoticeDays.trim();
  if (nd) {
   const n = Number(nd);
   if (Number.isNaN(n) || n < 1)
    return "Fesih bildirim süresi geçerli bir gün sayısı olmalıdır.";
  }
 }
 if (s === 5) {
  if (!form.monthlyRent.trim()) return "Aylık kira bedeli zorunludur.";
  const day = Number(form.paymentDay);
  if (Number.isNaN(day) || day < 1 || day > 28)
   return "Ödeme günü 1–28 arasında olmalıdır.";
  if (!form.paymentMethod) return "Ödeme yöntemini seçin.";
  if (
   form.paymentMethod === "banka_eft" &&
   !(form.iban ?? "").replace(/\s/g, "").trim()
  ) {
   return "Banka havalesi / EFT için IBAN girin.";
  }
 }
 if (s === 7) {
  if (form.hasGuarantor) {
   if (!form.guarantorName.trim()) return "Kefil Ad Soyad zorunludur.";
   if (!(form.guarantorTc ?? "").replace(/\D/g, "").trim())
    return "Kefil T.C. Kimlik No girin.";
   if (!form.guarantorPhone.trim()) return "Kefil Telefon girin.";
   if (!form.guarantorAddress.trim()) return "Kefil Adresi girin.";
  }
 }
 return "";
}

export function validateAll(form) {
 for (let i = 1; i <= 7; i++) {
  const msg = validateStep(form, i);
  if (msg) return msg;
 }
 return "";
}
