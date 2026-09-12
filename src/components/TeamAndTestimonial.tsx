import { TextLink } from "@/components/ui/text-link";
import portraitImage from "@/assets/elena-portrait.jpg";

function TeamAndTestimonial() {
  return (
    <section className="border-y border-border">
      <div className="mx-auto grid max-w-7xl md:grid-cols-2">
        <div className="grid items-center gap-8 border-b border-border px-5 py-16 sm:grid-cols-2 md:border-b-0 md:border-r md:px-8 md:py-24">
          <img
            src={portraitImage}
            alt="Elena Marquez, founding advisor at Aurelia Estates"
            loading="lazy"
            width={1024}
            height={1280}
            className="aspect-4/5 size-full object-cover"
          />
          <div>
            Our team
            <h2 className="mt-5 font-display text-3xl">Elena Marquez</h2>
            <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
              Founding advisor
            </p>
            <p className="mt-5 text-sm leading-6 text-muted-foreground">
              Elena brings a patient eye and a deeply personal approach to every
              search.
            </p>
            <div className="mt-6">
              <TextLink>Meet our team</TextLink>
            </div>
          </div>
        </div>
        <figure className="flex flex-col justify-center bg-muted px-5 py-16 md:px-14 md:py-24">
          Client story
          <blockquote className="mt-7 font-display text-3xl leading-snug md:text-4xl">
            “Aurelia made the entire process feel thoughtful and personal. We
            found a home that felt right from the moment we walked in.”
          </blockquote>
          <figcaption className="mt-8 text-xs uppercase tracking-widest text-muted-foreground">
            Maria &amp; Daniel
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

export default TeamAndTestimonial;
