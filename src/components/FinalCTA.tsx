import { Button } from "@/components/ui/button";

function FinalCTA() {
  return (
    <section id="contact" className="section-space text-center">
      <div className="mx-auto max-w-3xl px-5">
        Begin your search
        <h2 className="mt-5 font-display text-5xl leading-tight md:text-6xl">
          Your next chapter starts with the right place.
        </h2>
        <p className="mx-auto mt-6 max-w-xl leading-7 text-muted-foreground">
          Explore residences selected with care, or speak with our team about
          finding one that feels like home.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <a href="#properties">Explore Properties</a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="mailto:hello@aureliaestates.example">Book a Viewing</a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
