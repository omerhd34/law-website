export function dash(v) {
 if (v === null || v === undefined) return "—";
 const s = String(v).trim();
 return s.length ? s : "—";
}

export function formatDateTr(raw) {
 if (raw === null || raw === undefined) return "—";
 const s = String(raw).trim();
 if (!s) return "—";
 const m = s.match(/^(\d{4})-(\d{2})-(\d{2})$/);
 if (m) {
  const [, y, mo, d] = m;
  return `${d}.${mo}.${y}`;
 }
 return s;
}

export function toUpperTr(str) {
 return String(str).toLocaleUpperCase("tr-TR");
}

export function utilList(form) {
 const u = [];
 if (form.utilAidat) u.push("Aidat");
 if (form.utilSu) u.push("Su");
 if (form.utilDogalgaz) u.push("Doğal gaz");
 if (form.utilElektrik) u.push("Elektrik");
 if (form.utilInternet) u.push("İnternet");
 return u.length ? u.join(", ") : "Belirtilmedi";
}
