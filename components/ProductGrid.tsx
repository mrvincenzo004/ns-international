import ProductCard, { type Product } from "./ProductCard";

const products: Product[] = [
  {
    id: "1",
    name: "Water Treatment Plant (RO)",
    slug: "water-treatment-plant-ro",
    category: "Water Treatment & RO",
    description:
      "Industrial reverse osmosis water treatment system designed for reliable and efficient water purification.",
    price: "Rs. 850,000",
    image: "/products/water-treatment-plant.jpg",
  },
  {
    id: "2",
    name: "Water Bottle Filling Machine",
    slug: "water-bottle-filling-machine",
    category: "Water Bottling",
    description:
      "Efficient bottle filling equipment designed for commercial and industrial water bottling operations.",
    price: "Rs. 650,000",
    image: "/products/water-bottle-filling-machine.jpg",
  },
  {
    id: "3",
    name: "Water Bottle Blowing Machine",
    slug: "water-bottle-blowing-machine",
    category: "Water Bottling",
    description:
      "PET bottle blowing machinery for producing quality plastic bottles for water and beverage production.",
    price: "Rs. 1,200,000",
    image: "/products/water-bottle-blowing-machine.jpg",
  },
  {
    id: "4",
    name: "Juice Plant",
    slug: "juice-plant",
    category: "Juice & Beverage",
    description:
      "Complete juice processing machinery for efficient beverage preparation and production.",
    price: "Rs. 1,500,000",
    image: "/products/juice-plant.jpg",
  },
  {
    id: "5",
    name: "Cold Drink Plant",
    slug: "cold-drink-plant",
    category: "Juice & Beverage",
    description:
      "Industrial beverage production equipment for preparing and processing carbonated soft drinks.",
    price: "Rs. 1,800,000",
    image: "/products/cold-drink-plant.jpg",
  },
  {
    id: "6",
    name: "Wrapping Machine",
    slug: "wrapping-machine",
    category: "Packaging",
    description:
      "Industrial wrapping equipment for efficient and consistent packaging of products.",
    price: "Rs. 450,000",
    image: "/products/wrapping-machine.jpeg",
  },
  {
    id: "7",
    name: "Injection Moulding Machine",
    slug: "injection-moulding-machine",
    category: "Plastic Machinery",
    description:
      "Industrial plastic injection moulding machinery for manufacturing high-quality plastic components.",
    price: "Rs. 2,000,000",
    image: "/products/injection-moulding-machine.jpg",
  },
];

type ProductGridProps = {
  selectedCategory: string;
};

export default function ProductGrid({
  selectedCategory,
}: ProductGridProps) {
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter(
          (product) => product.category === selectedCategory,
        );

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-background px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-foreground">
              No Products Found
            </h2>

            <p className="mt-2 text-sm text-muted">
              There are currently no products available in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}