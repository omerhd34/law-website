import {
 Document,
 Page,
 Text,
 View,
} from "@react-pdf/renderer";
import {
 CONTRACT_DURATION_OPTIONS,
 DEPOSIT_MONTHS_OPTIONS,
 FURNISHING_OPTIONS,
 HEATING_OPTIONS,
 PAYMENT_METHOD_OPTIONS,
 PROPERTY_TYPE_OPTIONS,
 STAMP_DUTY_OPTIONS,
 USAGE_PURPOSE_OPTIONS,
 formatMoneyDisplay,
 optionLabel,
} from "../leaseAgreementSummary";
import { LeasePdfField } from "./LeasePdfField";
import { LeasePdfSection } from "./LeasePdfSection";
import { LeasePdfTableRow } from "./LeasePdfTableRow";
import { leasePdfStyles as styles } from "./leasePdfStyles";
import { dash, formatDateTr, utilList } from "./leasePdfTextUtils";

export function LeaseAgreementPdfDocument({ form, rentIncreaseSummary }) {
 const durationLabel = optionLabel(
  CONTRACT_DURATION_OPTIONS,
  form.contractDuration,
 );
 const notice = form.terminationNoticeDays?.trim();
 const noticeText = notice || "—";

 return (
  <Document
   title="Kira sözleşmesi"
   author="Kira sözleşmesi formu"
   language="tr"
  >
   <Page size="A4" style={styles.page} wrap>
    <View style={styles.topBand} fixed />
    <View style={styles.hero}>
     <Text style={styles.docTitle}>Kira sözleşmesi</Text>
     <Text style={styles.docMeta}>
      Sözleşme tarihi: {formatDateTr(form.propertyAgreementDate)}
     </Text>
    </View>

    <LeasePdfSection n="1" title="Kiraya veren">
     <View style={styles.panel}>
      <LeasePdfField label="Ad soyad / Ünvan">{dash(form.landlordName)}</LeasePdfField>
      <LeasePdfField label="T.C. / Vergi no">{dash(form.landlordTc)}</LeasePdfField>
      <LeasePdfField label="Telefon">{dash(form.landlordPhone)}</LeasePdfField>
      <LeasePdfField label="E-posta">{dash(form.landlordEmail)}</LeasePdfField>
      <LeasePdfField label="Adres">{dash(form.landlordAddress)}</LeasePdfField>
     </View>
    </LeasePdfSection>

    <LeasePdfSection n="2" title="Kiracı">
     <View style={styles.panel}>
      <LeasePdfField label="Ad soyad / Ünvan">{dash(form.tenantName)}</LeasePdfField>
      <LeasePdfField label="T.C. Kimlik no">{dash(form.tenantTc)}</LeasePdfField>
      <LeasePdfField label="Telefon">{dash(form.tenantPhone)}</LeasePdfField>
      <LeasePdfField label="E-posta">{dash(form.tenantEmail)}</LeasePdfField>
      <LeasePdfField label="Adres">{dash(form.tenantAddress)}</LeasePdfField>
     </View>
    </LeasePdfSection>

    <LeasePdfSection n="3" title="Kiralanan taşınmaz">
     <View style={styles.table}>
      <LeasePdfTableRow
       label="Taşınmaz türü"
       value={optionLabel(PROPERTY_TYPE_OPTIONS, form.propertyType)}
      />
      <LeasePdfTableRow label="İl / İlçe" value={dash(form.provinceDistrict)} />
      <LeasePdfTableRow label="Mahalle" value={dash(form.neighborhood)} />
      <LeasePdfTableRow label="Sokak / Cadde" value={dash(form.street)} />
      <LeasePdfTableRow label="Dış kapı no" value={dash(form.exteriorDoorNo)} />
      <LeasePdfTableRow
       label="Daire no (bağımsız bölüm)"
       value={dash(form.apartmentNo)}
      />
      <LeasePdfTableRow label="Ada / parsel" value={dash(form.blockParcelNo)} />
      <LeasePdfTableRow
       label="Kullanım amacı"
       value={optionLabel(USAGE_PURPOSE_OPTIONS, form.usagePurpose)}
      />
      <LeasePdfTableRow
       label="Brüt / net alan (m²)"
       value={dash(form.propertyAreaM2)}
      />
      <LeasePdfTableRow label="Oda sayısı" value={dash(form.roomCount)} />
      <LeasePdfTableRow label="Kat" value={dash(form.floorLevel)} />
      <LeasePdfTableRow
       label="Isıtma"
       value={optionLabel(HEATING_OPTIONS, form.heatingSystem)}
      />
      <LeasePdfTableRow
       label="Eşya durumu"
       value={optionLabel(FURNISHING_OPTIONS, form.furnishingStatus)}
       last
      />
     </View>
     {form.fixturesNote?.trim() ? (
      <Text style={[styles.prose, { marginTop: 8 }]}>
       <Text style={{ fontWeight: 700 }}>Demirbaş ve tesisat notu: </Text>
       {form.fixturesNote.trim()}
      </Text>
     ) : null}
    </LeasePdfSection>

    <LeasePdfSection n="4" title="Kira süresi">
     <Text style={styles.prose}>
      İşbu taslak kira ilişkisi{" "}
      <Text style={{ fontWeight: 700 }}>{formatDateTr(form.startDate)}</Text>{" "}
      tarihinde başlayıp{" "}
      <Text style={{ fontWeight: 700 }}>{formatDateTr(form.endDate)}</Text>{" "}
      tarihinde sona erecek şekilde öngörülmüştür. Sözleşme süresi:{" "}
      <Text style={{ fontWeight: 700 }}>{durationLabel}</Text>
      {form.contractDuration === "belirsiz"
       ? " (belirsiz süreli modele uygun)."
       : "."}
     </Text>
     <View style={{ marginTop: 4 }}>
      <View style={styles.bulletLine}>
       <Text style={styles.bullet}>•</Text>
       <Text style={styles.bulletText}>
        Otomatik yenileme:{" "}
        <Text style={{ fontWeight: 700 }}>
         {form.autoRenewal ? "Evet" : "Hayır"}
        </Text>
       </Text>
      </View>
      <View style={styles.bulletLine}>
       <Text style={styles.bullet}>•</Text>
       <Text style={styles.bulletText}>
        Fesih için bildirim süresi (gün):{" "}
        <Text style={{ fontWeight: 700 }}>{noticeText}</Text>
       </Text>
      </View>
     </View>
    </LeasePdfSection>

    <LeasePdfSection n="5" title="Kira şartları">
     <View style={styles.panel}>
      <LeasePdfField label="Aylık kira">
       {formatMoneyDisplay(form.monthlyRent)}
      </LeasePdfField>
      <LeasePdfField label="Ödeme günü (ayın)">{dash(form.paymentDay)}</LeasePdfField>
      <LeasePdfField label="Ödeme yöntemi">
       {optionLabel(PAYMENT_METHOD_OPTIONS, form.paymentMethod)}
      </LeasePdfField>
      <LeasePdfField label="IBAN">
       {(form.iban ?? "").replace(/\s/g, "").trim()
        ? form.iban.trim()
        : "—"}
      </LeasePdfField>
      <LeasePdfField label="Depozito">
       {formatMoneyDisplay(form.deposit)}
       {form.depositMonths
        ? ` (${optionLabel(DEPOSIT_MONTHS_OPTIONS, form.depositMonths)})`
        : ""}
      </LeasePdfField>
      <LeasePdfField label="Yıllık kira artışı (not)">{rentIncreaseSummary}</LeasePdfField>
     </View>
     <Text style={[styles.prose, { marginTop: 8 }]}>
      Aylık kira bedeli, taraflarca ayrıca yazılı olarak belirlenecek şekilde
      yıllık güncellenebilir; tüketici enflasyonu ve yasal sınırlar dikkate
      alınmalıdır.
     </Text>
    </LeasePdfSection>

    <LeasePdfSection n="6" title="Ek şartlar">
     <View style={styles.panel}>
      <LeasePdfField label="Evcil hayvan">
       {form.petAllowed
        ? "Formda: kiralanan yerde beslenebilir."
        : "Formda: beslenemez / izin yok."}
      </LeasePdfField>
      <LeasePdfField label="Alt kiralama">
       {form.sublettingAllowed
        ? "Formda: üçüncü kişiye kiralamaya izin var."
        : "Formda: alt kiralama yok."}
      </LeasePdfField>
      <LeasePdfField label="Tadilat (yazılı izin)">
       {form.renovationWithoutPermission
        ? "Formda: izinsiz tadilata izin verilir olarak işaretlendi."
        : "Yazılı izin olmadan tadilat yapılamaz (TBK çerçevesinde netleştirin)."}
      </LeasePdfField>
      <LeasePdfField label="Dahil yan giderler">{utilList(form)}</LeasePdfField>
      <LeasePdfField label="Damga vergisinden sorumlu taraf">
       {optionLabel(STAMP_DUTY_OPTIONS, form.stampDutyParty)}
      </LeasePdfField>
      <LeasePdfField label="Yetkili mahkeme / icra">
       {form.competentCourt?.trim() ? form.competentCourt.trim() : "—"}
      </LeasePdfField>
     </View>
     {form.specialClauses?.trim() ? (
      <Text style={[styles.prose, { marginTop: 8 }]}>
       <Text style={{ fontWeight: 700 }}>Özel şartlar: </Text>
       {form.specialClauses.trim()}
      </Text>
     ) : null}
    </LeasePdfSection>

    <LeasePdfSection n="7" title="Kefil">
     {form.hasGuarantor ? (
      <View style={styles.panel}>
       <LeasePdfField label="Ad soyad">{dash(form.guarantorName)}</LeasePdfField>
       <LeasePdfField label="T.C. Kimlik no">{dash(form.guarantorTc)}</LeasePdfField>
       <LeasePdfField label="Telefon">{dash(form.guarantorPhone)}</LeasePdfField>
       <LeasePdfField label="Adres">{dash(form.guarantorAddress)}</LeasePdfField>
      </View>
     ) : (
      <Text style={styles.prose}>
       Bu taslağa göre müşterek müteselsil kefil tanımlanmamıştır.
      </Text>
     )}
    </LeasePdfSection>

    <Text style={styles.footerNote}>
     Bu belge yalnızca bilgi ve düzenleme kolaylığı içindir; tarafları hukuki
     olarak bağlamaz. Kesin sözleşme metni için avukat görüşü alınması önerilir.
    </Text>

    <View style={styles.sigRow}>
     <View style={styles.sigCol}>
      <Text style={styles.sigTitle}>Kiraya veren</Text>
      <Text style={styles.sigLine}>İmza: ____________________</Text>
     </View>
     <View style={styles.sigCol}>
      <Text style={styles.sigTitle}>Kiracı</Text>
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
