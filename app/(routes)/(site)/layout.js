import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main className="flex min-h-0 min-w-0 flex-1 flex-col">
        <div className="container mx-auto w-full min-w-0 flex-1">{children}</div>
      </main>
      <Footer />
    </>
  );
}
