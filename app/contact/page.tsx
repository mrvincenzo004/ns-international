import Navbar from "@/components/Navbar";
import ContactHeader from "@/components/ContactHeader";
import ContactInformation from "@/components/ContactInformation";
import ContactMethods from "@/components/ContactMethods";
import ContactMap from "@/components/ContactMap";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main>
        <ContactHeader />

        <section className="bg-surface py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ContactInformation />
          </div>
        </section>

        <ContactMethods />

        <ContactMap />
      </main>

      <Footer />
    </>
  );
}