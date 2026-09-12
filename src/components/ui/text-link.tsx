import { ArrowRight } from "lucide-react";

const TextLink = ({
  children,
  href = "#contact",
  light = false,
}: {
  children: React.ReactNode;
  href?: string;
  light?: boolean;
}) => (
  <a
    href={href}
    className={`inline-flex items-center gap-3 border-b pb-1 text-xs uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${light ? "border-hero-foreground/60 text-hero-foreground hover:border-hero-foreground" : "border-foreground/35 text-foreground hover:border-primary"}`}
  >
    {children}
    <ArrowRight aria-hidden="true" />
  </a>
);

export { TextLink };
