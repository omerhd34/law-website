import IhtarnameForm from "@/components/Ihtarname/IhtarnameForm";

export const metadata = {
 title: "İhtarname oluştur",
 description:
  "İhtar eden, muhatap ve ihtar detaylarını girerek ihtarname taslağı oluşturun.",
};

export default function IhtarnamePage() {
 return (
  <div className="py-8 sm:py-10 md:py-12">
   <IhtarnameForm />
  </div>
 );
}
