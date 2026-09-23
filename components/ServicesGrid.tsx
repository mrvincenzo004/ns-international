import ServiceCard from "./ServiceCard";

const services = [
  {
    number: "01",
    title: "Machinery Supply",
    description:
      "We supply industrial machinery for water treatment, RO systems, bottling, beverage production, packaging, and plastic manufacturing.",
  },
  {
    number: "02",
    title: "Machine Installation & Setup",
    description:
      "Professional installation and setup support to help ensure your machinery is properly configured and ready for operation.",
  },
  {
    number: "03",
    title: "Maintenance & Repair",
    description:
      "Maintenance and repair support to help keep your machinery operating reliably and reduce unnecessary production downtime.",
  },
  {
    number: "04",
    title: "Technical Support",
    description:
      "Practical technical assistance for machinery operation, troubleshooting, maintenance, and general equipment requirements.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.number}
              number={service.number}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}