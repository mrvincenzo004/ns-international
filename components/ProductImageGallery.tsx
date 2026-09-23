type ProductImageGalleryProps = {
  productName: string;
  images: string[];
};

export default function ProductImageGallery({
  productName,
  images,
}: ProductImageGalleryProps) {
  const mainImage = images[0];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="overflow-hidden rounded-lg border border-border bg-surface">
        <div className="aspect-[4/3]">
          <img
            src={mainImage}
            alt={productName}
            className="h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Image Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-4 gap-3">
          {images.map((image, index) => (
            <div
              key={`${image}-${index}`}
              className="aspect-square overflow-hidden rounded-md border border-border bg-surface"
            >
              <img
                src={image}
                alt={`${productName} ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}