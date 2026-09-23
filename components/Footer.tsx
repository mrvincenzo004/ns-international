import Link from "next/link";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact Us", href: "/contact" },
];

const phoneNumbers = [
  "9867164689",
  "9821582046",
  "9849719360",
  "9800680330",
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/logo/ns-international-logo.png"
                alt="NS International Machinery Pvt. Ltd."
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-white/60">
              NS International Machinery Pvt. Ltd. provides industrial
              machinery and equipment for businesses across Nepal.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-highlight"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-3 text-sm text-white/60">
              {phoneNumbers.map((number) => (
                <a
                  key={number}
                  href={`tel:${number}`}
                  className="block transition-colors hover:text-highlight"
                >
                  +977 {number}
                </a>
              ))}

              <a
                href="mailto:n_s_int_machinery022@gmail.com"
                className="block break-words transition-colors hover:text-highlight"
              >
                n_s_int_machinery022@gmail.com
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Location
            </h3>

            <div className="mt-5 space-y-4">
              <p className="text-sm leading-6 text-white/60">
                Butwal, Rupandehi
                <br />
                Lumbini Province, Nepal
              </p>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Butwal%2C%20Rupandehi%2C%20Nepal"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-semibold text-highlight transition-colors hover:text-white"
              >
                View on Google Maps
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-white/10 pt-6">
          <div className="flex flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} NS International Machinery Pvt.
              Ltd. All rights reserved.
            </p>

            <p>Industrial Machinery & Equipment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}