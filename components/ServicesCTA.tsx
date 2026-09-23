import Link from "next/link";

export default function ServicesCTA() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-primary px-6 py-12 sm:px-12 sm:py-14">
          <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-secondary/20 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-highlight">
              Need Machinery Support?
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Let&apos;s Discuss Your Requirements
            </h2>

            <p className="mt-4 text-base leading-7 text-white/70">
              Whether you need machinery supply, installation, maintenance,
              or technical support, contact us to discuss your project and
              equipment requirements.
            </p>

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
                View Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}