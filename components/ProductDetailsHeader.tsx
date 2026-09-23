import Link from "next/link";

type ProductDetailsHeaderProps = {
  category: string;
  productName: string;
};

export default function ProductDetailsHeader({
  category,
  productName,
}: ProductDetailsHeaderProps) {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <nav
          aria-label="Breadcrumb"
          className="flex flex-wrap items-center gap-2 text-sm"
        >
          <Link
            href="/products"
            className="text-muted transition-colors hover:text-secondary"
          >
            Products
          </Link>

          <span className="text-border">/</span>

          <span className="text-muted">{category}</span>

          <span className="text-border">/</span>

          <span className="font-medium text-foreground">
            {productName}
          </span>
        </nav>
      </div>
    </section>
  );
}