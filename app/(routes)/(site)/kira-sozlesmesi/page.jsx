import LeaseAgreementForm from "@/components/KiraSozlesmesi/LeaseAgreementForm";

export const metadata = {
 title: "Kira sözleşmesi oluştur",
 description:
  "Kiraya veren ve kiracı bilgileri, taşınmaz adresi ve kira koşullarını girerek kira sözleşmesi taslağı oluşturun.",
};

export default function KiraSozlesmesiPage() {
 return (
  <div className="py-8 sm:py-10 md:py-12">
   <LeaseAgreementForm />
  </div>
 );
}
