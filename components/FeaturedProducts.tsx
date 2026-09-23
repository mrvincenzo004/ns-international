import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Water Treatment Plant (RO)",
    slug: "water-treatment-plant-ro",
    description:
      "Industrial reverse osmosis water treatment system designed for reliable and efficient water purification.",
    price: "Rs. 850,000",
    image: "/products/water-treatment-plant.jpg",
  },
  {
    id: 2,
    name: "Water Bottle Filling Machine",
    slug: "water-bottle-filling-machine",
    description:
      "Efficient bottle filling equipment designed for commercial and industrial water bottling operations.",
    price: "Rs. 650,000",
    image: "/products/water-bottle-filling-machine.jpg",
  },
  {
    id: 3,
    name: "Water Bottle Blowing Machine",
    slug: "water-bottle-blowing-machine",
    description:
      "PET bottle blowing machinery for producing quality plastic bottles for water and beverage production.",
    price: "Rs. 1,200,000",
    image: "/products/water-bottle-blowing-machine.jpg",
  },
  {
    id: 4,
    name: "Juice Plant",
    slug: "juice-plant",
    description:
      "Complete juice processing machinery for efficient beverage preparation and production.",
    price: "Rs. 1,500,000",
    image: "/products/juice-plant.jpg",
  },
  {
    id: 5,
    name: "Cold Drink Plant",
    slug: "cold-drink-plant",
    description:
      "Industrial beverage production equipment for preparing and processing carbonated soft drinks.",
    price: "Rs. 1,800,000",
    image: "/products/cold-drink-plant.jpg",
  },
  {
    id: 6,
    name: "Wrapping Machine",
    slug: "wrapping-machine",
    description:
      "Industrial wrapping equipment for efficient and consistent packaging of products.",
    price: "Rs. 450,000",
    image: "/products/wrapping-machine.jpg",
  },
  {
    id: 7,
    name: "Injection Moulding Machine",
    slug: "injection-moulding-machine",
    description:
      "Industrial plastic injection moulding machinery for manufacturing high-quality plastic components.",
    price: "Rs. 2,000,000",
    image: "/products/injection-moulding-machine.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-surface py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <span className="h-px w-8 bg-accent" />

              <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
                Our Products
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Industrial Machinery
              <span className="block text-secondary">
                & Equipment
              </span>
            </h2>
          </div>

          <Link
            href="/products"
            className="text-sm font-semibold text-secondary transition-colors hover:text-accent"
          >
            View All Products →
          </Link>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product) => (
            <article
              key={product.id}
              className="group overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
            >
              {/* Product Image */}
              <Link href={`/products/${product.slug}`}>
                <div className="relative aspect-square overflow-hidden bg-surface">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* Product Information */}
              <div className="p-5">
                <Link href={`/products/${product.slug}`}>
                  <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-secondary">
                    {product.name}
                  </h3>
                </Link>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
                  {product.description}
                </p>

                {/* Price */}
                <div className="mt-5 border-t border-border pt-4">
                  <p className="text-xs font-medium uppercase tracking-wide text-muted">
                    Estimated Price
                  </p>

                  <p className="mt-1 text-lg font-bold text-foreground">
                    {product.price}
                  </p>
                </div>

                {/* View Product */}
                <Link
                  href={`/products/${product.slug}`}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-secondary transition-colors hover:text-accent"
                >
                  View Product

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}