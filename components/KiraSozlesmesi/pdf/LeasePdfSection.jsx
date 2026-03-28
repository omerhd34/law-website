import { Text, View } from "@react-pdf/renderer";
import { leasePdfStyles as styles } from "./leasePdfStyles";
import { toUpperTr } from "./leasePdfTextUtils";

export function LeasePdfSection({ n, title, children }) {
 return (
  <View style={styles.sectionWrap}>
   <View style={styles.sectionHead}>
    <View style={styles.sectionNum}>
     <Text style={styles.sectionNumText}>{n}</Text>
    </View>
    <View style={styles.sectionTitleUnderlineWrap}>
     <Text style={styles.sectionTitle}>{toUpperTr(title)}</Text>
    </View>
   </View>
   {children}
  </View>
 );
}
