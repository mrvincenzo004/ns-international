type ProductFeaturesProps = {
  features: string[];
};

export default function ProductFeatures({
  features,
}: ProductFeaturesProps) {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Key Features
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Built for Reliable Production
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted">
            Designed to support efficient operation, consistent production,
            and practical industrial use.
          </p>
        </div>

        <div className="mt-10 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-start gap-3"
            >
              <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-sm font-bold text-secondary">
                ✓
              </span>

              <p className="text-sm leading-6 text-foreground">
                {feature}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}