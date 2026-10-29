export type GalleryItemData = {
  id: string;
  title: string;
  category: string;
  type: "image" | "youtube";
  src: string;
  thumbnail?: string;
  description?: string;
};

type GalleryItemProps = {
  item: GalleryItemData;
};

export default function GalleryItem({ item }: GalleryItemProps) {
  return (
    <article className="group overflow-hidden rounded-lg border border-border bg-background">
      <div className="relative aspect-[4/3] overflow-hidden bg-surface">
        {item.type === "image" ? (
          <img
            src={item.src}
            alt={item.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <iframe
            src={item.src}
            title={item.title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="h-full w-full"
          />
        )}

        <div className="absolute left-3 top-3">
          <span className="rounded-md bg-primary/90 px-3 py-1.5 text-xs font-semibold text-white">
            {item.category}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-lg font-semibold text-foreground transition-colors group-hover:text-secondary">
          {item.title}
        </h2>

        {item.description && (
          <p className="mt-2 text-sm leading-6 text-muted">
            {item.description}
          </p>
        )}
      </div>
    </article>
  );
}
