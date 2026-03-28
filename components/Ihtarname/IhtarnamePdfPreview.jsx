"use client";

import dynamic from "next/dynamic";

const PDFViewer = dynamic(
 () => import("@react-pdf/renderer").then((mod) => mod.PDFViewer),
 {
  ssr: false,
  loading: () => (
   <div
    className="flex h-[min(70vh,560px)] w-full items-center justify-center rounded-lg border border-border/80 bg-muted/30 text-sm text-muted-foreground"
    role="status"
   >
    PDF önizlemesi yükleniyor…
   </div>
  ),
 },
);

export function IhtarnamePdfPreview({ children }) {
 return (
  <div className="w-full overflow-hidden rounded-xl border border-border/80 bg-muted/20">
   <PDFViewer width="100%" height={560} showToolbar={false}>
    {children}
   </PDFViewer>
  </div>
 );
}
