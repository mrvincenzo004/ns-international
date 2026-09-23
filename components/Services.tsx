const services = [
  {
    number: "01",
    title: "Machine Installation",
    description:
      "Professional installation and setup to ensure your machinery operates safely and efficiently.",
  },
  {
    number: "02",
    title: "Maintenance",
    description:
      "Reliable maintenance support to keep your machinery running smoothly and reduce downtime.",
  },
  {
    number: "03",
    title: "Technical Support",
    description:
      "Practical technical assistance for machinery operation, troubleshooting, and maintenance.",
  },
];

export default function Services() {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Our Services
            </span>
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Support Beyond
            <span className="block text-secondary">
              Machinery Supply
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-muted">
            From installation to ongoing technical support, we help you get
            the most out of your machinery.
          </p>
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-lg border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
            >
              {/* Number */}
              <span className="text-sm font-bold tracking-wider text-accent">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="mt-5 text-xl font-semibold text-foreground transition-colors group-hover:text-secondary">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm leading-6 text-muted">
                {service.description}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-10 bg-secondary transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}