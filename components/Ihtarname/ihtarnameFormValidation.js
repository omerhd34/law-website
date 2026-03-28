function isValidTcOrVergiNo(raw) {
 const d = String(raw ?? "").replace(/\D/g, "");
 return d.length === 11 || d.length === 10;
}

function isValidPhoneTr(raw) {
 const d = String(raw ?? "").replace(/\D/g, "");
 return d.length >= 10;
}

export function validateStep(form, s) {
 if (s === 1) {
  if (!form.noticeDate) return "İhtarname tarihini seçin.";
  if (!form.deliveryMethod) return "Gönderim yöntemini seçin.";
 }
 if (s === 2) {
  if (!form.senderName?.trim()) return "İhtar eden ad soyad / ünvan zorunludur.";
  if (!isValidTcOrVergiNo(form.senderTc))
   return "İhtar eden T.C. kimlik veya vergi numarasını tam girin (10 veya 11 hane).";
  if (!form.senderAddress?.trim()) return "İhtar eden adresini girin.";
  if (!isValidPhoneTr(form.senderPhone)) return "Geçerli bir telefon numarası girin.";
 }
 if (s === 3) {
  if (!form.recipientName?.trim())
   return "Muhatap ad soyad / ünvan zorunludur.";
  if (!form.recipientAddress?.trim()) return "Muhatap adresini girin.";
  if (!isValidPhoneTr(form.recipientPhone))
   return "Muhatap telefon numarasını girin.";
 }
 if (s === 4) {
  if (!form.noticeCategory) return "İhtar türünü seçin.";
  if (!form.noticeSubject?.trim()) return "İhtar konusunu girin.";
  if (!form.noticeBody?.trim()) return "İhtar metnini girin.";
  if (!form.deadlineText?.trim()) return "Süre / termin bilgisini girin (ör. 15 gün).";
  if (!form.demand?.trim()) return "Talep konusunu girin.";
 }
 return "";
}

export function validateAll(form) {
 for (let i = 1; i <= 4; i += 1) {
  const msg = validateStep(form, i);
  if (msg) return msg;
 }
 return "";
}
