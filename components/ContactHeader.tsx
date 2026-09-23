export default function ContactHeader() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Contact Us
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Let&apos;s Discuss Your
            <span className="block text-secondary">
              Machinery Requirements
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Get in touch with NS International Machinery for machinery
            inquiries, pricing, installation, technical support, and
            project requirements.
          </p>
        </div>
      </div>
    </section>
  );
}