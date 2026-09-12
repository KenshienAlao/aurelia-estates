import { Home, Mail, Search } from "lucide-react";
function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <main
        id="main-content"
        className="flex flex-1 items-center justify-center px-5 py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow text-muted-foreground">Page not found</p>
          <h1 className="mt-6 font-display text-8xl leading-none text-foreground sm:text-9xl">
            404
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-8 text-muted-foreground">
            The page you're looking for may have been moved, renamed, or is no
            longer available.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/"
              className="inline-flex h-11 items-center gap-2 rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Home aria-hidden="true" size={16} />
              Return home
            </a>
            <a
              href="#properties"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Search aria-hidden="true" size={16} />
              Explore properties
            </a>
            <a
              href="mailto:hello@aureliaestates.example"
              className="inline-flex h-11 items-center gap-2 rounded-md border border-input bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <Mail aria-hidden="true" size={16} />
              Contact us
            </a>
          </div>
          <div className="mt-12 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">
              Looking for something specific?{" "}
              <a
                href="/"
                className="text-foreground underline underline-offset-4 hover:text-primary"
              >
                Start from the beginning
              </a>
            </p>
          </div>
        </div>
      </main>
      <footer className="bg-foreground py-8 text-center text-background">
        <p className="font-display text-2xl">Aurelia Estates</p>
        <p className="mt-2 text-sm text-background/55">
          Residences worth coming home to.
        </p>
      </footer>
    </div>
  );
}

export default NotFound;
