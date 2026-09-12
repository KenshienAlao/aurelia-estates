import casaImage from "@/assets/casa-aurelia.jpg";
import { Button } from "@/components/ui/button";

function FeaturedResidence() {
  return (
    <section id="featured" className="section-space">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:grid-cols-[1.08fr_0.92fr] md:gap-20 md:px-8">
        <div className="aspect-4/5 overflow-hidden">
          <img
            src={casaImage}
            alt="Casa Aurelia set into a lush hillside"
            loading="lazy"
            width={1280}
            height={1536}
            className="size-full object-cover transition-transform duration-300 hover:scale-[1.02]"
          />
        </div>
        <div className="md:max-w-md">
          <p className="text-muted-foreground">Featured residence</p>
          <h2 className="mt-5 font-display text-4xl md:text-6xl">
            Casa Aurelia
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Antipolo · Hillside residence
          </p>
          <p className="mt-8 font-display text-3xl">$1.2M</p>
          <div className="mt-6 grid grid-cols-3 border-y border-border py-5 text-sm">
            <span>4 Beds</span>
            <span>3 Baths</span>
            <span>280 sqm</span>
          </div>
          <p className="mt-7 leading-7 text-muted-foreground">
            A quiet study in stone, timber, and light. Casa Aurelia opens to the
            surrounding landscape while keeping everyday life intimate and
            grounded.
          </p>
          <div className="mt-8">
            <Button asChild size="lg">
              <a href="#contact">View Property</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturedResidence;
