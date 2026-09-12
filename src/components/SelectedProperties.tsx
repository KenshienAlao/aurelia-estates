import { properties } from "@/data/properties";
import PropertyCard from "@/components/PropertyCard";

function SelectedProperties() {
  return (
    <section id="properties" className="section-space border-t border-border">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-5 md:grid-cols-12">
          <div className="md:col-span-7">
            Our selection
            <h2 className="mt-5 font-display text-5xl md:text-6xl">
              Selected residences
            </h2>
          </div>
          <p className="self-end leading-7 text-muted-foreground md:col-span-4 md:col-start-9">
            Homes chosen for their architecture, setting, and the quality of
            life they make possible.
          </p>
        </div>
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-12">
          {properties.map((property, index) => (
            <PropertyCard
              key={property.name}
              property={property}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default SelectedProperties;
