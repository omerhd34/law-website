import { Inter } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

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
   <body className="min-h-full flex flex-col font-sans">
    <ThemeProvider
     attribute="class"
     storageKey="law-theme"
     defaultTheme="light"
     enableSystem={false}
     disableTransitionOnChange
    >
     <Header />
     <main className="flex-1">
      <div className="container mx-auto">{children}</div>
     </main>
     <Footer />
    </ThemeProvider>
   </body>
  </html>
 );
}