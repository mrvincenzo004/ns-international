import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import ProductDetailsHeader from "@/components/ProductDetailsHeader";
import ProductImageGallery from "@/components/ProductImageGallery";
import ProductInformation from "@/components/ProductInformation";
import ProductSpecifications from "@/components/ProductSpecifications";
import ProductFeatures from "@/components/ProductFeatures";
import ProductContactCTA from "@/components/ProductContactCTA";
import Footer from "@/components/Footer";

const products = [
  {
    id: "1",
    name: "Water Treatment Plant (RO)",
    slug: "water-treatment-plant-ro",
    category: "Water Treatment & RO",
    description:
      "Industrial reverse osmosis water treatment system designed for reliable and efficient water purification.",
    images: ["/products/water-treatment-plant.jpg"],
    specifications: [
      {
        label: "Capacity",
        value: "5,000 Litres Per Hour",
      },
      {
        label: "RO Membrane",
        value: "4040",
      },
      {
        label: "Material",
        value: "Stainless Steel 304",
      },
      {
        label: "Automation",
        value: "Automatic",
      },
      {
        label: "Power Requirement",
        value: "10 HP",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Industrial-grade components",
      "Efficient water purification",
      "Reliable continuous operation",
      "Easy maintenance",
      "Automatic operation",
      "Installation support available",
    ],
  },

  {
    id: "2",
    name: "Water Bottle Filling Machine",
    slug: "water-bottle-filling-machine",
    category: "Water Bottling",
    description:
      "Efficient bottle filling equipment designed for commercial and industrial water bottling operations.",
    images: ["/products/water-bottle-filling-machine.jpg"],
    specifications: [
      {
        label: "Machine Type",
        value: "Automatic",
      },
      {
        label: "Application",
        value: "Water Bottling",
      },
      {
        label: "Bottle Type",
        value: "PET",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Efficient bottle filling",
      "Suitable for commercial production",
      "Consistent filling performance",
      "Easy operation",
      "Industrial-grade construction",
      "Installation support available",
    ],
  },

  {
    id: "3",
    name: "Water Bottle Blowing Machine",
    slug: "water-bottle-blowing-machine",
    category: "Water Bottling",
    description:
      "PET bottle blowing machinery for producing quality plastic bottles for water and beverage production.",
    images: ["/products/water-bottle-blowing-machine.jpg"],
    specifications: [
      {
        label: "Machine Type",
        value: "PET Bottle Blowing Machine",
      },
      {
        label: "Application",
        value: "PET Bottle Production",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Material",
        value: "PET",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Efficient PET bottle production",
      "Consistent bottle quality",
      "Suitable for water and beverage industries",
      "Reliable production performance",
      "Easy operation",
      "Technical support available",
    ],
  },

  {
    id: "4",
    name: "Juice Plant",
    slug: "juice-plant",
    category: "Juice & Beverage",
    description:
      "Complete juice processing machinery for efficient beverage preparation and production.",
    images: ["/products/juice-plant.jpg"],
    specifications: [
      {
        label: "Application",
        value: "Juice Production",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Processing",
        value: "Juice Processing",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Efficient juice processing",
      "Suitable for commercial production",
      "Reliable production operation",
      "Industrial-grade components",
      "Easy maintenance",
      "Installation support available",
    ],
  },

  {
    id: "5",
    name: "Cold Drink Plant",
    slug: "cold-drink-plant",
    category: "Juice & Beverage",
    description:
      "Industrial beverage production equipment for preparing and processing carbonated soft drinks.",
    images: ["/products/cold-drink-plant.jpg"],
    specifications: [
      {
        label: "Application",
        value: "Carbonated Beverage Production",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Processing",
        value: "Beverage Processing",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Suitable for carbonated beverages",
      "Efficient beverage processing",
      "Commercial production capability",
      "Reliable operation",
      "Easy maintenance",
      "Technical support available",
    ],
  },

  {
    id: "6",
    name: "Wrapping Machine",
    slug: "wrapping-machine",
    category: "Packaging",
    description:
      "Industrial wrapping equipment for efficient and consistent packaging of products.",
    images: ["/products/wrapping-machine.jpg"],
    specifications: [
      {
        label: "Machine Type",
        value: "Automatic Wrapping Machine",
      },
      {
        label: "Application",
        value: "Industrial Packaging",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Efficient product wrapping",
      "Consistent packaging",
      "Suitable for industrial use",
      "Easy operation",
      "Reliable performance",
      "Installation support available",
    ],
  },

  {
    id: "7",
    name: "Injection Moulding Machine",
    slug: "injection-moulding-machine",
    category: "Plastic Machinery",
    description:
      "Industrial plastic injection moulding machinery for manufacturing high-quality plastic components.",
    images: ["/products/injection-moulding-machine.jpg"],
    specifications: [
      {
        label: "Machine Type",
        value: "Injection Moulding Machine",
      },
      {
        label: "Application",
        value: "Plastic Manufacturing",
      },
      {
        label: "Operation",
        value: "Automatic",
      },
      {
        label: "Material",
        value: "Plastic",
      },
      {
        label: "Installation",
        value: "Available",
      },
    ],
    features: [
      "Suitable for plastic manufacturing",
      "Reliable moulding performance",
      "Industrial-grade construction",
      "Efficient production",
      "Easy operation",
      "Technical support available",
    ],
  },
  {
    id: "8",
    name: "Bottle Labeling Machine",
    slug: "bottle-labeling-machine",
    category: "Packaging",
    description: "Automatic labeling equipment for accurate and consistent beverage bottle packaging.",
    images: ["/products/water-bottle-filling-machine.jpg"],
    specifications: [
      { label: "Machine Type", value: "Automatic Bottle Labeler" },
      { label: "Application", value: "Bottle Packaging" },
      { label: "Operation", value: "Automatic" },
      { label: "Installation", value: "Available" },
    ],
    features: ["Accurate label placement", "Consistent packaging", "Easy operation", "Reliable performance", "Industrial construction", "Installation support available"],
  },
  {
    id: "9",
    name: "Water Pouch Packing Machine",
    slug: "water-pouch-packing-machine",
    category: "Packaging",
    description: "Automatic pouch filling and sealing machinery for hygienic packaged drinking water.",
    images: ["/products/water-treatment-plant.jpg"],
    specifications: [
      { label: "Machine Type", value: "Automatic Pouch Packing Machine" },
      { label: "Application", value: "Packaged Drinking Water" },
      { label: "Operation", value: "Automatic" },
      { label: "Installation", value: "Available" },
    ],
    features: ["Hygienic filling", "Automatic sealing", "Efficient production", "Compact design", "Easy maintenance", "Technical support available"],
  },
  {
    id: "10",
    name: "Beverage Mixing Tank",
    slug: "beverage-mixing-tank",
    category: "Juice & Beverage",
    description: "Stainless steel mixing equipment for consistent juice and beverage preparation.",
    images: ["/products/juice-plant.jpg"],
    specifications: [
      { label: "Machine Type", value: "Stainless Steel Mixing Tank" },
      { label: "Application", value: "Juice and Beverage Production" },
      { label: "Material", value: "Stainless Steel 304" },
      { label: "Installation", value: "Available" },
    ],
    features: ["Uniform mixing", "Food-grade construction", "Reliable operation", "Easy cleaning", "Suitable for commercial production", "Installation support available"],
  },
];

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { slug } = await params;

  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <main>
        <ProductDetailsHeader
          category={product.category}
          productName={product.name}
        />

        <section className="bg-background py-12 sm:py-16">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
            <ProductImageGallery
              productName={product.name}
              images={product.images}
            />

            <ProductInformation
              name={product.name}
              category={product.category}
              description={product.description}
              slug={product.slug}
            />
          </div>
        </section>

        <ProductSpecifications
          specifications={product.specifications}
        />

        <ProductFeatures features={product.features} />

        <ProductContactCTA productName={product.name} />
      </main>

      <Footer />
    </>
  );
}
