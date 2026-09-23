import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-8 lg:py-20">
        {/* Content */}
        <div className="relative z-10 max-w-2xl">
          {/* Label */}
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Industrial Machinery in Nepal
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            RO, Water & Liquid
            <span className="block text-secondary">
              Processing Machinery
            </span>
            in Nepal
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-muted sm:text-lg">
            NS International supplies and installs reliable RO plants, water
            treatment systems, water bottle filling machines, liquid
            processing machinery, juice plants, and beverage production
            equipment across Nepal.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary"
            >
              Explore Products
              <span className="ml-2">→</span>
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-secondary hover:text-secondary"
            >
              Contact Us
            </Link>
          </div>

          {/* Supporting keywords / trust points */}
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
            <span>✓ Supply & Installation</span>
            <span>✓ Water & RO Solutions</span>
            <span>✓ Liquid & Beverage Machinery</span>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          {/* Decorative shapes */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-highlight/10 blur-3xl" />

          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" />

          {/* Image container */}
          <div className="relative overflow-hidden rounded-xl border border-border bg-surface">
            <img
              src="/hero/hero-machine.jpeg"
              alt="RO plant and water treatment machinery in Nepal"
              className="h-[400px] w-full object-cover sm:h-[500px]"
            />

            {/* Bottom information */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent px-6 pb-6 pt-16">
              <p className="text-sm font-medium text-white/80">
                NS International
              </p>

              <p className="mt-1 text-lg font-semibold text-white">
                RO, Water & Liquid Processing Solutions
              </p>
            </div>
          </div>

          {/* Accent line */}
          <div className="absolute -bottom-3 left-8 h-1 w-24 bg-accent" />

          <div className="absolute -bottom-3 left-32 h-1 w-12 bg-highlight" />
        </div>
      </div>
    </section>
  );
}