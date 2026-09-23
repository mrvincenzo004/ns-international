import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "+977 98XXXXXXXX",
    href: "tel:+97798XXXXXXXX",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nsinternationalmachinery.com",
    href: "mailto:info@nsinternationalmachinery.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Butwal, Rupandehi, Lumbini, Nepal",
    href: "#location",
  },
  {
    icon: Clock3,
    label: "Business Hours",
    value: "Sunday – Friday, 10:00 AM – 6:00 PM",
  },
];

export default function ContactInformation() {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
        Get in Touch
      </p>

      <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
        We&apos;re Here to Help
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-muted">
        Whether you are looking for a specific machine, planning a complete
        production setup, or need technical support, our team is ready to
        discuss your requirements.
      </p>

      <div className="mt-8 space-y-5">
        {contactDetails.map((detail) => {
          const Icon = detail.icon;

          const content = (
            <>
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-secondary/10 text-secondary">
                <Icon size={20} strokeWidth={1.8} />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-muted">
                  {detail.label}
                </p>

                <p className="mt-1 text-sm font-medium text-foreground">
                  {detail.value}
                </p>
              </div>
            </>
          );

          if (detail.href) {
            return (
              <a
                key={detail.label}
                href={detail.href}
                className="flex items-start gap-4 rounded-md transition-colors hover:text-secondary"
              >
                {content}
              </a>
            );
          }

          return (
            <div key={detail.label} className="flex items-start gap-4">
              {content}
            </div>
          );
        })}
      </div>

      <a
        href="https://wa.me/97798XXXXXXXX"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary"
      >
        <MessageCircle size={18} />
        Chat on WhatsApp
      </a>
    </div>
  );
}