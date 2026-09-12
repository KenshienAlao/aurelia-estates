import { TextLink } from "./ui/text-link";
import storyImage from "@/assets/aurelia-story.jpg";

function BrandStory() {
  return (
    <section id="about" className="section-space">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-12 md:gap-8 md:px-8">
        <div className="md:col-span-5">
          Our approach
          <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">
            More than a property. A place that feels right.
          </h2>
          <div className="mt-9 space-y-5 leading-7 text-muted-foreground">
            <p>
              We believe the most meaningful homes have a clear sense of
              character—an honest relationship between architecture, landscape,
              and daily life.
            </p>
            <p>
              Our role is to find those places, present them thoughtfully, and
              offer personal guidance without pressure.
            </p>
          </div>
          <div className="mt-8">
            <TextLink>Discover Aurelia</TextLink>
          </div>
        </div>
        <div className="md:col-span-6 md:col-start-7 md:pt-24">
          <div className="aspect-7/5 overflow-hidden">
            <img
              src={storyImage}
              alt="Warm natural materials and garden views inside an Aurelia residence"
              loading="lazy"
              width={1600}
              height={1104}
              className="size-full object-cover"
            />
          </div>
          <p className="mt-3 text-xs text-muted-foreground">
            Spaces with warmth, clarity, and room for life to unfold.
          </p>
        </div>
      </div>
    </section>
  );
}

export default BrandStory;
