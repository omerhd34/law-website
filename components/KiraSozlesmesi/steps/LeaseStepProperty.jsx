import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { LeaseDatePicker } from "../LeaseDatePicker";
import { LeaseSelect } from "../LeaseSelect";
import {
 FURNISHING_OPTIONS,
 HEATING_OPTIONS,
 PROPERTY_TYPE_OPTIONS,
 USAGE_PURPOSE_OPTIONS,
} from "../leaseAgreementSummary";

export function LeaseStepProperty({ form, update, inputClass, textareaClass }) {
 return (
  <div className="space-y-6">
   <div className="grid gap-4 sm:grid-cols-2">
    <div className="space-y-2">
     <Label htmlFor="propertyAgreementDate">Sözleşme tarihi</Label>
     <LeaseDatePicker
      id="propertyAgreementDate"
      className={inputClass}
      value={form.propertyAgreementDate}
      onChange={(v) => update("propertyAgreementDate", v)}
      placeholder="Tarih seçin"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="propertyType">Taşınmaz türü</Label>
     <LeaseSelect
      id="propertyType"
      className={inputClass}
      value={form.propertyType}
      onChange={(e) => update("propertyType", e.target.value)}
      options={PROPERTY_TYPE_OPTIONS}
      required
     />
    </div>
   </div>
   <div className="grid gap-4 sm:grid-cols-2">
    <div className="space-y-2">
     <Label htmlFor="provinceDistrict">İl / İlçe</Label>
     <Input
      id="provinceDistrict"
      className={inputClass}
      value={form.provinceDistrict}
      onChange={(e) => update("provinceDistrict", e.target.value)}
      placeholder="İl / İlçe"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="neighborhood">Mahalle</Label>
     <Input
      id="neighborhood"
      className={inputClass}
      value={form.neighborhood}
      onChange={(e) => update("neighborhood", e.target.value)}
      placeholder="Mahalle"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="street">Sokak / Cadde</Label>
     <Input
      id="street"
      className={inputClass}
      value={form.street}
      onChange={(e) => update("street", e.target.value)}
      placeholder="Cadde"
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="blockParcelNo">
      Ada / parsel no{" "}
      <span className="font-normal text-muted-foreground">
       (zorunlu değil)
      </span>
     </Label>
     <Input
      id="blockParcelNo"
      className={inputClass}
      value={form.blockParcelNo}
      onChange={(e) => update("blockParcelNo", e.target.value)}
      placeholder="Ada / parsel no (Tapu bilgisi)"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="exteriorDoorNo">Dış kapı no</Label>
     <Input
      id="exteriorDoorNo"
      className={inputClass}
      value={form.exteriorDoorNo}
      onChange={(e) => update("exteriorDoorNo", e.target.value)}
      placeholder="Dış kapı no"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="apartmentNo">Daire no (bağımsız bölüm)</Label>
     <Input
      id="apartmentNo"
      className={inputClass}
      value={form.apartmentNo}
      onChange={(e) => update("apartmentNo", e.target.value)}
      placeholder="Daire no"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="propertyAreaM2">Taşınmaz büyüklüğü (m²)</Label>
     <Input
      id="propertyAreaM2"
      className={inputClass}
      inputMode="decimal"
      value={form.propertyAreaM2}
      onChange={(e) => update("propertyAreaM2", e.target.value)}
      placeholder="Taşınmaz büyüklüğü (m²)"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="usagePurpose">Kullanım amacı</Label>
     <LeaseSelect
      id="usagePurpose"
      className={inputClass}
      value={form.usagePurpose}
      onChange={(e) => update("usagePurpose", e.target.value)}
      options={USAGE_PURPOSE_OPTIONS}
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="roomCount">Oda sayısı</Label>
     <Input
      id="roomCount"
      className={inputClass}
      value={form.roomCount}
      onChange={(e) => update("roomCount", e.target.value)}
      placeholder="2+1"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="floorLevel">Bulunduğu kat</Label>
     <Input
      id="floorLevel"
      className={inputClass}
      value={form.floorLevel}
      onChange={(e) => update("floorLevel", e.target.value)}
      placeholder="Bulunduğu kat"
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="heatingSystem">Isıtma sistemi</Label>
     <LeaseSelect
      id="heatingSystem"
      className={inputClass}
      value={form.heatingSystem}
      onChange={(e) => update("heatingSystem", e.target.value)}
      options={HEATING_OPTIONS}
      required
     />
    </div>
    <div className="space-y-2">
     <Label htmlFor="furnishingStatus">Eşya durumu</Label>
     <LeaseSelect
      id="furnishingStatus"
      className={inputClass}
      value={form.furnishingStatus}
      onChange={(e) => update("furnishingStatus", e.target.value)}
      options={FURNISHING_OPTIONS}
      required
     />
    </div>
   </div>
   <div className="space-y-2">
    <Label htmlFor="fixturesNote">Demirbaşlar</Label>
    <textarea
     id="fixturesNote"
     className={textareaClass}
     rows={4}
     value={form.fixturesNote}
     onChange={(e) => update("fixturesNote", e.target.value)}
     placeholder="Kiralananla birlikte teslim edilen demirbaşları listeleyin (kombi, klima, ankastre set, vb.)"
    />
   </div>
  </div>
 );
}
