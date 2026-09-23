import ContactCTA from "@/components/ContactCTA";
import FeaturedProducts from "@/components/FeaturedProducts";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <FeaturedProducts/>
    <Services/>
    <ContactCTA/>
    <Footer/>
    </>
  );
}
