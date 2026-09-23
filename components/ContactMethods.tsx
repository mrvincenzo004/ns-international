import { Mail, MessageCircle, Phone } from "lucide-react";

const methods = [
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our sales team.",
    action: "Call Now",
    href: "tel:+97798XXXXXXXX",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Send us your machinery requirements.",
    action: "Chat on WhatsApp",
    href: "https://wa.me/97798XXXXXXXX",
  },
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us a detailed inquiry.",
    action: "Send Email",
    href: "mailto:info@nsinternationalmachinery.com",
  },
];

export default function ContactMethods() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Quick Contact
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Choose How You&apos;d Like to Reach Us
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted">
            For quick inquiries, you can contact our team directly by phone,
            WhatsApp, or email.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {methods.map((method) => {
            const Icon = method.icon;

            return (
              <div
                key={method.title}
                className="group rounded-lg border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:shadow-lg"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-foreground">
                  {method.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {method.description}
                </p>

                <a
                  href={method.href}
                  target={method.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    method.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="mt-5 inline-flex text-sm font-semibold text-secondary transition-colors hover:text-accent"
                >
                  {method.action}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}