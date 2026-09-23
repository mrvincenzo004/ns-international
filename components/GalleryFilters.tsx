const categories = [
  "All",
  "Machinery",
  "Installation",
  "Projects",
  "Maintenance",
  "Videos",
];

type GalleryFiltersProps = {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
};

export default function GalleryFilters({
  selectedCategory,
  onCategoryChange,
}: GalleryFiltersProps) {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex gap-2 overflow-x-auto py-4">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => onCategoryChange(category)}
                className={`whitespace-nowrap rounded-md px-4 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-primary text-white"
                    : "bg-background text-muted hover:bg-primary/5 hover:text-secondary"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}