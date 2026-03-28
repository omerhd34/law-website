import { Text, View } from "@react-pdf/renderer";
import { leasePdfStyles as styles } from "./leasePdfStyles";

export function LeasePdfTableRow({ label, value, last }) {
 return (
  <View style={[styles.tableRow, last && styles.tableRowLast]}>
   <Text style={styles.tableCellL}>{label}</Text>
   <Text style={styles.tableCellR}>{value}</Text>
  </View>
 );
}
