export default function ContactMap() {
  const mapUrl =
    "https://www.google.com/maps/search/?api=1&query=Butwal%2C%20Rupandehi%2C%20Nepal";

  return (
    <section id="location" className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
            Find Us
          </p>

          <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Our Location
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted">
            Visit or contact NS International Machinery in Butwal, Rupandehi,
            Lumbini, Nepal.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-lg border border-border">
          <div className="flex min-h-[360px] items-center justify-center bg-surface px-6 py-12">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-7 w-7"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                  />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">
                NS International Machinery
              </h3>

              <p className="mt-2 text-sm text-muted">
                Butwal, Rupandehi, Lumbini, Nepal
              </p>

              <a
                href={mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center rounded-md bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary"
              >
                Get Directions
                <span className="ml-2">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}