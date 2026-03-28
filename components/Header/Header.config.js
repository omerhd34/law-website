export const navLinks = [
 { name: "Ana Sayfa", href: "/" },
 { name: "Hakkımızda", href: "/hakkimizda" },
 { name: "Kira sözleşmesi", href: "/kira-sozlesmesi" },
 { name: "İhtarname", href: "/ihtarname" },
 { name: "İletişim", href: "/iletisim" },
];

export function normalizePath(p) {
 if (!p) return "/";
 return p.length > 1 && p.endsWith("/") ? p.slice(0, -1) : p;
}