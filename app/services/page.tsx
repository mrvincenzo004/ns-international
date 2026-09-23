import Navbar from "@/components/Navbar";
import ServicesHeader from "@/components/ServicesHeader";
import ServicesGrid from "@/components/ServicesGrid";
import ServicesCTA from "@/components/ServicesCTA";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main>
        <ServicesHeader />
        <ServicesGrid />
        <ServicesCTA />
      </main>

      <Footer />
    </>
  );
}