import Navbar from "@/components/Navbar";
import ContactHeader from "@/components/ContactHeader";
import ContactInformation from "@/components/ContactInformation";
import ContactForm from "@/components/ContactForm";
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
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <ContactInformation />
            <ContactForm />
          </div>
        </section>

        <ContactMethods />

        <ContactMap />
      </main>

      <Footer />
    </>
  );
}