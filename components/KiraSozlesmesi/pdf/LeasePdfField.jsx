import { Text, View } from "@react-pdf/renderer";
import { leasePdfStyles as styles } from "./leasePdfStyles";

export function LeasePdfField({ label, children }) {
 return (
  <View style={styles.fieldRow}>
   <Text style={styles.fieldLabel}>{label}</Text>
   <Text style={styles.fieldVal}>{children}</Text>
  </View>
 );
}
