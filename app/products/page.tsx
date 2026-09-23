"use client";

import { useState } from "react";

import Navbar from "@/components/Navbar";
import ProductsHeader from "@/components/ProductsHeader";
import ProductCategories from "@/components/ProductCategories";
import ProductGrid from "@/components/ProductGrid";
import Footer from "@/components/Footer";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <Navbar />

      <main>
        <ProductsHeader />

        <ProductCategories
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        <ProductGrid selectedCategory={selectedCategory} />
      </main>

      <Footer />
    </>
  );
}