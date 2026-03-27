import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
 variable: "--font-inter",
 subsets: ["latin"],
 display: "swap",
});

export const metadata = {
 title: "Hukuk Odaklı SaaS | Kira ve Tahliye Sistemi",
 description: "Kira ve tahliye süreçleri için güvenilir, web tabanlı hukuki otomasyon ve belge üretim uygulaması.",
};

export default function RootLayout({ children }) {
 return (
  <html
   lang="tr"
   className={`${inter.variable} h-full antialiased`}
   suppressHydrationWarning
  >
   <body className="flex min-h-dvh min-w-0 flex-col overflow-x-clip font-sans">
    <ThemeProvider
     attribute="class"
     storageKey="law-theme"
     defaultTheme="light"
     enableSystem={false}
     disableTransitionOnChange
    >
     <div className="flex min-h-dvh min-w-0 flex-1 flex-col">{children}</div>
    </ThemeProvider>
   </body>
  </html>
 );
}