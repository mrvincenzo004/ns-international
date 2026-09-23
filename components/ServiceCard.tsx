type ServiceCardProps = {
  number: string;
  title: string;
  description: string;
};

export default function ServiceCard({
  number,
  title,
  description,
}: ServiceCardProps) {
  return (
    <article className="group rounded-lg border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg">
      <span className="text-sm font-bold tracking-wider text-accent">
        {number}
      </span>

      <h2 className="mt-5 text-xl font-semibold text-foreground transition-colors group-hover:text-secondary">
        {title}
      </h2>

      <p className="mt-3 text-sm leading-6 text-muted">
        {description}
      </p>

      <div className="mt-6 h-1 w-10 bg-secondary transition-all duration-300 group-hover:w-16 group-hover:bg-accent" />
    </article>
  );
}