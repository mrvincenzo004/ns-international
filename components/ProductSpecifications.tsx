type ProductSpecification = {
  label: string;
  value: string;
};

type ProductSpecificationsProps = {
  specifications: ProductSpecification[];
};

export default function ProductSpecifications({
  specifications,
}: ProductSpecificationsProps) {
  return (
    <section className="border-t border-border bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Technical Details
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Product Specifications
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted">
            Technical specifications may vary depending on the machine
            configuration and production requirements.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <div className="divide-y divide-border">
            {specifications.map((specification) => (
              <div
                key={specification.label}
                className="grid gap-2 px-5 py-4 sm:grid-cols-2 sm:px-6"
              >
                <dt className="text-sm font-medium text-foreground">
                  {specification.label}
                </dt>

                <dd className="text-sm text-muted sm:text-right">
                  {specification.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}