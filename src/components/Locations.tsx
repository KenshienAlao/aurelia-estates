import { locations } from "@/data/properties";
import EditorialImage from "@/components/EditorialImage";
import locationGrid from "@/assets/location-grid.jpg";
import { TextLink } from "@/components/ui/text-link";

function Locations() {
  return (
    <section id="locations" className="section-space bg-surface">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            Find your setting
            <h2 className="mt-5 font-display text-5xl md:text-6xl">
              A sense of place
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-muted-foreground">
            From the energy of a city street to the quiet of open country, place
            shapes how home feels.
          </p>
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {locations.map((location) => (
            <article className="group" key={location.name}>
              <EditorialImage
                src={locationGrid}
                quadrant={location.imagePosition}
                alt={`${location.name} residential setting`}
                className="aspect-4/5"
              />
              <h3 className="mt-5 font-display text-3xl">{location.name}</h3>
              <p className="mt-3 min-h-14 text-sm leading-6 text-muted-foreground">
                {location.description}
              </p>
              <div className="mt-4">
                <TextLink href="#properties">View locations</TextLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Locations;
