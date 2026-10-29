import GalleryItem, { type GalleryItemData } from "./GalleryItem";

const galleryItems: GalleryItemData[] = [
  {
    id: "9",
    title: "Carbonated Beverage Filling Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/c2RDfty2TYg",
    description:
      "NS International Carbonated Beverage Filling Machine for hygienic, precise, and efficient soft drink and sparkling beverage production.",
  },
  {
    id: "10",
    title: "Injection Moulding Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/5TZX1-u6bj0",
    description:
      "NS International Injection Moulding Machine for precise, reliable, and efficient plastic product manufacturing.",
  },
  {
    id: "11",
    title: "Water Bottle Filling Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/HX9fOE0gv_o",
    description:
      "NS International Water Bottle Filling Machine for fast, hygienic, and efficient bottled water production.",
  },
  {
    id: "12",
    title: "Injection Moulding Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/O5I_EkjZ6zk",
    description:
      "NS International Injection Moulding Machine for bottle caps, containers, fittings, and industrial plastic components.",
  },
  {
    id: "13",
    title: "Automatic Label Applicator Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/0PnlWRWeP98",
    description:
      "NS International Automatic Label Applicator Machine for fast, accurate, and consistent bottle and container labeling.",
  },
  {
    id: "14",
    title: "Water Bottle Filling Machine",
    category: "Videos",
    type: "youtube",
    src: "https://www.youtube.com/embed/KroAhnBzjcY",
    description:
      "NS International Water Bottle Filling Machine for accurate, hygienic, and reliable mineral and packaged drinking water production.",
  },
];

type GalleryGridProps = {
  selectedCategory: string;
};

export default function GalleryGrid({
  selectedCategory,
}: GalleryGridProps) {
  const filteredItems =
    selectedCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) => item.category === selectedCategory,
        );

  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {filteredItems.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <GalleryItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="rounded-lg border border-border bg-background px-6 py-16 text-center">
            <h2 className="text-xl font-semibold text-foreground">
              No Gallery Items Found
            </h2>

            <p className="mt-2 text-sm text-muted">
              There are currently no gallery items available in this
              category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
