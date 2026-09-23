export default function ProductsHeader() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Our Products
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Industrial Machinery
            <span className="block text-secondary">
              & Equipment
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Explore our range of industrial machinery for water treatment,
            RO systems, water bottling, juice and beverage production,
            packaging, and plastic manufacturing.
          </p>
        </div>
      </div>
    </section>
  );
}