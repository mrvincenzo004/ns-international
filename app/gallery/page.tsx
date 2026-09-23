"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import GalleryHeader from "@/components/GalleryHeader";
import GalleryFilters from "@/components/GalleryFilters";
import GalleryGrid from "@/components/GalleryGrid";
import GalleryCTA from "@/components/GalleryCTA";
import Footer from "@/components/Footer";

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
        <GalleryHeader />

        <GalleryFilters
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <GalleryGrid selectedCategory={selectedCategory} />

        <GalleryCTA />
      </main>

      <Footer />
    </>
  );
}