import Link from "next/link";

export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  description: string;
  price: string;
  image: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-background transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
      <Link href={`/products/${product.slug}`}>
        <div className="relative aspect-[4/3] overflow-hidden bg-surface">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
          {product.category}
        </p>

        <Link href={`/products/${product.slug}`}>
          <h2 className="mt-2 text-lg font-semibold text-foreground transition-colors group-hover:text-secondary">
            {product.name}
          </h2>
        </Link>

        <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted">
          {product.description}
        </p>

        <div className="mt-5 border-t border-border pt-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            Estimated Price
          </p>

          <p className="mt-1 text-lg font-bold text-foreground">
            {product.price}
          </p>
        </div>

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
  );
}