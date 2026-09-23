import Navbar from "@/components/Navbar";
import FAQHeader from "@/components/FAQHeader";
import FAQList from "@/components/FAQList";
import FAQCTA from "@/components/FAQCTA";
import Footer from "@/components/Footer";

export default function FAQPage() {
  return (
    <>
      <Navbar />

      <main>
        <FAQHeader />
        <FAQList />
        <FAQCTA />
      </main>

      <Footer />
    </>
  );
}