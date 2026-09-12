import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/aurelia-hero.jpg";
import { Button } from "@/components/ui/button";

function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-165 overflow-hidden text-hero-foreground md:min-h-180 md:h-[88vh]"
    >
      <img
        src={heroImage}
        alt="Casa Aurelia overlooking a forested hillside at sunset"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 size-full object-cover object-[66%_center] sm:object-center"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex h-full min-h-165 max-w-7xl flex-col justify-end px-5 pb-24 pt-32 md:min-h-180 md:justify-center md:px-8 md:pb-28 md:pt-36">
        <div className="max-w-2xl">
          Aurelia Estates
          <h1 className="mt-5 max-w-xl font-display text-5xl leading-[0.98] sm:text-6xl md:text-7xl">
            Find a place worth coming home to.
          </h1>
          <p className="mt-6 max-w-md text-base leading-7 text-hero-muted md:text-lg">
            Thoughtfully selected residences for a life shaped by comfort,
            character, and place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href="#properties">Explore Properties</a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="mailto:hello@aureliaestates.example">Book a Viewing</a>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-7 left-5 right-5 flex items-end justify-between border-t border-hero-foreground/35 pt-4 md:left-8 md:right-8">
          <div className="hidden gap-8 text-xs sm:flex">
            <div>
              <span className="block text-hero-muted">Residence</span>Casa
              Aurelia
            </div>
            <div>
              <span className="block text-hero-muted">Location</span>Antipolo
            </div>
            <div>
              <span className="block text-hero-muted">Guide</span>$1.2M
            </div>
            <div className="hidden md:block">
              <span className="block text-hero-muted">Details</span>4 Beds · 3
              Baths · 280 sqm
            </div>
          </div>
          <a
            href="#featured"
            className="ml-auto flex items-center gap-2 text-[0.65rem] uppercase tracking-widest"
          >
            <ArrowDown aria-hidden="true" /> Discover
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
