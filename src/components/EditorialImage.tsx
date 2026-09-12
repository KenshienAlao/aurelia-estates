import type { ImageQuadrant } from "@/data/properties";
import { cn } from "@/lib/utils";

const positions: Record<ImageQuadrant, string> = {
  "top-left": "left-0 top-0",
  "top-right": "right-0 top-0",
  "bottom-left": "bottom-0 left-0",
  "bottom-right": "bottom-0 right-0",
};

function EditorialImage({
  src,
  alt,
  quadrant,
  className,
}: {
  src: string;
  alt: string;
  quadrant: ImageQuadrant;
  className?: string;
}) {
  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        width={1920}
        height={1920}
        className={cn(
          "absolute size-[200%] max-w-none object-cover transition-transform duration-300 group-hover:scale-[1.02]",
          positions[quadrant],
        )}
      />
    </div>
  );
}

export default EditorialImage;
