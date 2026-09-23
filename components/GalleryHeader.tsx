export default function GalleryHeader() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-10 bg-accent" />

            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">
              Gallery
            </span>
          </div>

          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Our Machinery,
            <span className="block text-secondary">
              Projects & Installations
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-muted sm:text-lg">
            Explore our machinery, completed installations, production
            setups, maintenance work, and projects through photos and videos.
          </p>
        </div>
      </div>
    </section>
  );
}