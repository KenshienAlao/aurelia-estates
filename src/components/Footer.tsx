function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-display text-3xl">Aurelia Estates</p>
            <p className="mt-3 max-w-xs text-sm text-background/65">
              Thoughtfully selected residences for a life well lived.
            </p>
          </div>
          <nav
            aria-label="Footer navigation"
            className="grid grid-cols-2 gap-3 text-sm md:col-span-2"
          >
            <a href="#properties" className="hover:text-background/65">
              Properties
            </a>
            <a href="#locations" className="hover:text-background/65">
              Locations
            </a>
            <a href="#about" className="hover:text-background/65">
              About
            </a>
            <a href="#contact" className="hover:text-background/65">
              Contact
            </a>
          </nav>
          <div className="text-sm md:col-span-3">
            <p className="mb-3 text-xs uppercase tracking-widest text-background/45">
              Contact
            </p>

            <a
              href="mailto:hello@aureliaestates.example"
              className="hover:text-background/65"
            >
              hello@aureliaestates.example
            </a>

            <p className="mt-2 text-background/65">+63 2 8123 4567</p>

            <p className="mt-2 text-background/65">
              18 Aurelia Avenue
              <br />
              Metro Manila, Philippines
            </p>
          </div>
          <div className="text-sm md:col-span-3 md:text-right">
            <p className="mb-3 text-xs uppercase tracking-widest text-background/45">
              Office Hours
            </p>

            <p className="text-background/65">
              Monday – Friday
              <br />
              9:00 AM – 6:00 PM
            </p>

            <div className="mt-5 flex gap-5 md:justify-end">
              <a href="#contact" className="hover:text-background/65">
                Instagram
              </a>
              <a href="#contact" className="hover:text-background/65">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-background/20 pt-5 text-xs text-background/55 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Aurelia Estates. All rights
            reserved.
          </p>

          <p>Fictional brand created for portfolio purposes.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
