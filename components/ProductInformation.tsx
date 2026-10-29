import Link from "next/link";

type ProductInformationProps = {
  name: string;
  category: string;
  description: string;
  slug: string;
};

export default function ProductInformation({
  name,
  category,
  description,
  slug,
}: ProductInformationProps) {
  return (
    <div className="flex flex-col">
      <p className="text-sm font-semibold uppercase tracking-[0.15em] text-secondary">
        {category}
      </p>

      <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {name}
      </h1>

      <p className="mt-5 text-base leading-7 text-muted">
        {description}
      </p>

      <div className="mt-8 border-y border-border py-6">
        <p className="text-xs font-medium uppercase tracking-wide text-muted">
          Warranty
        </p>

        <p className="mt-2 text-2xl font-bold text-foreground">
          1 Year Warranty
        </p>

        <p className="mt-2 text-sm text-muted">
          Every machine includes a one-year warranty. Contact us for a tailored quotation.
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href={`/contact?product=${encodeURIComponent(slug)}`}
          className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
        >
          Contact Seller
          <span className="ml-2">→</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary"
        >
          Request Information
        </Link>
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
        <span>✓ Supply Available</span>
        <span>✓ Installation Support</span>
        <span>✓ Technical Support</span>
      </div>
    </div>
  );
}
