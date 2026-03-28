import { Font } from "@react-pdf/renderer";

export const LEASE_PDF_FONT_FAMILY = "NotoSans";

if (typeof window !== "undefined") {
 try {
  Font.register({
   family: LEASE_PDF_FONT_FAMILY,
   fonts: [
    { src: "/fonts/NotoSans-Regular.ttf", fontWeight: 400 },
    { src: "/fonts/NotoSans-Bold.ttf", fontWeight: 700 },
   ],
  });
 } catch {
 }
}
