import { Document, Page, Text, View } from "@react-pdf/renderer";
import {
 DELIVERY_METHOD_OPTIONS,
 NOTICE_CATEGORY_OPTIONS,
} from "../ihtarnameFormConfig";
import { LeasePdfField } from "@/components/KiraSozlesmesi/pdf/LeasePdfField";
import { LeasePdfSection } from "@/components/KiraSozlesmesi/pdf/LeasePdfSection";
import { LeasePdfTableRow } from "@/components/KiraSozlesmesi/pdf/LeasePdfTableRow";
import { leasePdfStyles as styles } from "@/components/KiraSozlesmesi/pdf/leasePdfStyles";
import {
 dash,
 formatDateTr,
} from "@/components/KiraSozlesmesi/pdf/leasePdfTextUtils";

function labelOf(options, value) {
 if (!value) return "—";
 return options.find((o) => o.value === value)?.label ?? value;
}

export function IhtarnamePdfDocument({ form }) {
 const delivery = labelOf(DELIVERY_METHOD_OPTIONS, form.deliveryMethod);
 const category = labelOf(NOTICE_CATEGORY_OPTIONS, form.noticeCategory);

 return (
  <Document title="İhtarname" author="İhtarname formu" language="tr">
   <Page size="A4" style={styles.page} wrap>
    <View style={styles.topBand} fixed />
    <View style={styles.hero}>
     <Text style={styles.docTitle}>İhtarname</Text>
     <Text style={styles.docMeta}>
      İhtarname tarihi: {formatDateTr(form.noticeDate)}
     </Text>
     <Text style={styles.docMeta}>Gönderim: {dash(delivery)}</Text>
    </View>

    <LeasePdfSection n="1" title="İhtar eden">
     <View style={styles.panel}>
      <LeasePdfField label="Ad soyad / ünvan">{dash(form.senderName)}</LeasePdfField>
      <LeasePdfField label="T.C. / Vergi no">{dash(form.senderTc)}</LeasePdfField>
      <LeasePdfField label="Adres">{dash(form.senderAddress)}</LeasePdfField>
      <LeasePdfField label="Telefon">{dash(form.senderPhone)}</LeasePdfField>
     </View>
    </LeasePdfSection>

    <LeasePdfSection n="2" title="Muhatap">
     <View style={styles.panel}>
      <LeasePdfField label="Ad soyad / ünvan">{dash(form.recipientName)}</LeasePdfField>
      <LeasePdfField label="Adres">{dash(form.recipientAddress)}</LeasePdfField>
      <LeasePdfField label="Telefon">{dash(form.recipientPhone)}</LeasePdfField>
     </View>
    </LeasePdfSection>

    <LeasePdfSection n="3" title="İhtar">
     <View style={styles.table}>
      <LeasePdfTableRow label="Tür" value={dash(category)} />
      <LeasePdfTableRow label="Konu" value={dash(form.noticeSubject)} />
      <LeasePdfTableRow label="Süre / termin" value={dash(form.deadlineText)} />
      <LeasePdfTableRow label="Talep" value={dash(form.demand)} last />
     </View>
     <Text style={[styles.prose, { marginTop: 10 }]}>
      <Text style={{ fontWeight: 700 }}>İhtar metni: </Text>
      {dash(form.noticeBody)}
     </Text>
    </LeasePdfSection>

    <View style={styles.sigRow}>
     <View style={styles.sigCol}>
      <Text style={styles.sigTitle}>İhtar eden</Text>
      <Text style={styles.sigLine}>İmza: ____________________</Text>
     </View>
     <View style={styles.sigCol}>
      <Text style={styles.sigTitle}>Muhatap</Text>
      <Text style={styles.sigLine}>İmza: ____________________</Text>
     </View>
    </View>

    <Text
     style={styles.footerFixed}
     fixed
     render={({ pageNumber, totalPages }) =>
      `Sayfa ${pageNumber} / ${totalPages}`
     }
    />
   </Page>
  </Document>
 );
}
