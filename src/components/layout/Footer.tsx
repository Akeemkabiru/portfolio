import Link from "next/link";
import { site } from "@/data/site";
import { Container } from "@/components/ui/Container";

const socialLinks = [
  { label: "GitHub", href: site.social.github },
  { label: "LinkedIn", href: site.social.linkedin },
  { label: "Twitter", href: site.social.twitter },
  ...(site.social.scholar
    ? [{ label: "Google Scholar", href: site.social.scholar }]
    : []),
  ...(site.social.orcid ? [{ label: "ORCID", href: site.social.orcid }] : []),
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-sm font-medium text-ink">
            {site.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Software Engineer · Computational Biology · Drug Discovery
          </p>
        </div>
        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Social links"
        >
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
