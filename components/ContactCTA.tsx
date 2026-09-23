import Link from "next/link";

export default function ContactCTA() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl border border-white/10 px-6 py-14 text-center sm:px-12">
          {/* Decorative Elements */}
          <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />

          <div className="absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-highlight/20 blur-3xl" />

          {/* Content */}
          <div className="relative z-10 mx-auto max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-highlight">
              Need Industrial Machinery?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Let's Find the Right
              <span className="block text-secondary">
                Solution for You.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-white/70">
              Tell us about your machinery requirements and our team will help
              you find the right solution for your business.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-primary"
              >
                Contact Us
                <span className="ml-2">→</span>
              </Link>

              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-md border border-white/20 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-primary"
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}