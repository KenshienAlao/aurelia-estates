import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const nav = [
  { label: "Properties", href: "#properties", number: "01" },
  { label: "Locations", href: "#locations", number: "02" },
  { label: "About", href: "#about", number: "03" },
  { label: "Contact", href: "#contact", number: "04" },
];

function Header() {
  return (
    <header className="group absolute inset-x-0 top-0 z-30 border-b border-hero-foreground/30 text-hero-foreground">
      <style>{`
        body:has(#mobile-menu-toggle:checked) {
          overflow: hidden;
        }
      `}</style>

      <input
        type="checkbox"
        id="mobile-menu-toggle"
        aria-label="Toggle navigation menu"
        className="sr-only"
      />

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 md:px-8">
        <a
          href="#top"
          className="font-display text-xl tracking-normal text-hero-foreground transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground"
        >
          Aurelia Estates
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-8 md:flex lg:gap-10"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group/link relative py-1 text-xs uppercase tracking-widest text-hero-foreground/90 transition-colors hover:text-hero-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-hero-foreground transition-transform duration-200 ease-out group-hover/link:scale-x-100" />
            </a>
          ))}
        </nav>

        <Button asChild variant="heroOutline" className="hidden md:inline-flex">
          <a href="mailto:hello@aureliaestates.example">Book a Viewing</a>
        </Button>

        <label
          htmlFor="mobile-menu-toggle"
          aria-hidden="true"
          className="relative -mr-2 flex size-11 cursor-pointer items-center justify-center rounded-full text-hero-foreground transition-colors hover:bg-hero-foreground/10 group-has-checked:hidden md:hidden"
        >
          <div className="flex h-3.5 w-5 flex-col justify-between">
            <span className="h-0.5 w-full rounded-full bg-current" />
            <span className="h-0.5 w-full rounded-full bg-current" />
          </div>
        </label>
      </div>

      <div className="pointer-events-none fixed inset-0 z-50 flex h-dvh -translate-y-2 flex-col bg-[#141210]/98 text-hero-foreground opacity-0 backdrop-blur-2xl transition-all duration-300 group-has-checked:pointer-events-auto group-has-checked:translate-y-0 group-has-checked:opacity-100 md:hidden">
        <div className="flex h-16 shrink-0 items-center justify-end border-b border-hero-foreground/10 px-5 sm:h-20 sm:px-8">
          <label
            htmlFor="mobile-menu-toggle"
            aria-label="Close navigation menu"
            className="flex size-11 cursor-pointer items-center justify-center rounded-full text-hero-foreground transition-colors hover:bg-hero-foreground/10"
          >
            <X className="size-5" />
          </label>
        </div>

        <div className="flex flex-1 flex-col justify-between overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
          <nav aria-label="Mobile navigation" className="space-y-1">
            <p className="mb-3 text-[0.65rem] uppercase tracking-widest text-hero-muted/60">
              Navigation
            </p>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="group/item flex items-baseline justify-between border-b border-hero-foreground/10 py-3.5 font-display text-2xl text-hero-foreground transition-all duration-200 hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hero-foreground sm:py-4.5 sm:text-3xl"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="font-sans text-[0.7rem] tracking-widest text-hero-muted/50">
                        {item.number}
                      </span>
                      <span>{item.label}</span>
                    </span>
                    <ArrowRight className="size-4 opacity-0 transition-opacity duration-200 group-hover/item:opacity-100" />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-6 shrink-0 pt-4 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))]">
            <Button
              asChild
              variant="heroOutline"
              size="lg"
              className="w-full justify-center text-xs tracking-widest"
            >
              <a href="mailto:hello@aureliaestates.example">Book a Viewing</a>
            </Button>
            <div className="mt-4 flex flex-col gap-0.5 text-center text-xs text-hero-muted/70">
              <p>Private showings by appointment</p>
              <a
                href="mailto:hello@aureliaestates.example"
                className="hover:text-hero-foreground hover:underline"
              >
                hello@aureliaestates.example
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
