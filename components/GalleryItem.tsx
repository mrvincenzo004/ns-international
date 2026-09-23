import { Play } from "lucide-react";

export type GalleryItemData = {
  id: string;
  title: string;
  category: string;
  type: "image" | "video";
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
          <>
            <video
              src={item.src}
              poster={item.thumbnail}
              muted
              playsInline
              preload="metadata"
              className="h-full w-full object-cover"
            />

            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-primary/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-secondary shadow-lg">
                <Play
                  size={22}
                  fill="currentColor"
                  className="ml-0.5"
                />
              </div>
            </div>
          </>
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