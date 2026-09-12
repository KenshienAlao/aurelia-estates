import type { Property } from "@/data/properties";
import propertyGrid from "@/assets/property-grid.jpg";
import EditorialImage from "@/components/EditorialImage";
import { TextLink } from "@/components/ui/text-link";

function PropertyCard({
  property,
  index,
}: {
  property: Property;
  index: number;
}) {
  return (
    <article
      className={`group ${index === 0 || index === 3 ? "md:col-span-7" : "md:col-span-5"}`}
    >
      <EditorialImage
        src={propertyGrid}
        quadrant={property.imagePosition}
        alt={`${property.name}, a ${property.type.toLowerCase()} in ${property.location}`}
        className={
          index === 0 || index === 3 ? "aspect-4/3" : "aspect-4/3 md:aspect-3/4"
        }
      />
      <div className="mt-5 flex items-start justify-between gap-4 border-t border-border pt-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            {property.type}
          </p>
          <h3 className="mt-2 font-display text-3xl">{property.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {property.location} · {property.specs}
          </p>
        </div>
        <p className="font-display text-xl">{property.price}</p>
      </div>
      <div className="mt-4">
        <TextLink>View property</TextLink>
      </div>
    </article>
  );
}

export default PropertyCard;
