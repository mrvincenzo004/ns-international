import GalleryItem, { type GalleryItemData } from "./GalleryItem";

const galleryItems: GalleryItemData[] = [
  {
    id: "1",
    title: "RO Plant Installation",
    category: "Installation",
    type: "image",
    src: "/gallery/ro-plant-installation.png",
    description:
      "Installation and setup of an industrial RO water treatment system.",
  },
  {
    id: "2",
    title: "Water Bottling Machine",
    category: "Machinery",
    type: "image",
    src: "/gallery/water-bottling-machine.jpg",
    description:
      "Industrial water bottle filling machinery supplied for commercial production.",
  },
  {
    id: "3",
    title: "Bottle Filling Machine Operation",
    category: "Videos",
    type: "video",
    src: "/gallery/bottle-filling-machine.mp4",
    thumbnail: "/gallery/bottle-filling-machine-thumbnail.jpg",
    description:
      "Demonstration of an industrial bottle filling machine in operation.",
  },
  {
    id: "4",
    title: "Juice Plant Installation",
    category: "Installation",
    type: "image",
    src: "/gallery/juice-plant-installation.jpg",
    description:
      "Juice processing machinery installation and production line setup.",
  },
  {
    id: "5",
    title: "Completed Water Treatment Project",
    category: "Projects",
    type: "image",
    src: "/gallery/water-treatment-project.jpg",
    description:
      "Completed water treatment and production system installation.",
  },
  {
    id: "6",
    title: "Machine Maintenance",
    category: "Maintenance",
    type: "image",
    src: "/gallery/machine-maintenance.jpg",
    description:
      "Technical maintenance and servicing of industrial machinery.",
  },
  {
    id: "7",
    title: "PET Bottle Blowing Machine",
    category: "Machinery",
    type: "image",
    src: "/gallery/pet-bottle-blowing-machine.jpg",
    description:
      "PET bottle blowing machinery for water and beverage production.",
  },
  {
    id: "8",
    title: "Production Line Demonstration",
    category: "Videos",
    type: "video",
    src: "/gallery/production-line.mp4",
    thumbnail: "/gallery/production-line-thumbnail.jpg",
    description:
      "Production line demonstration showing machinery operation and workflow.",
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