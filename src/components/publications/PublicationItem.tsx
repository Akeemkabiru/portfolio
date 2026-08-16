import Link from "next/link";
import type { Publication } from "@/data/publications";
import { Reveal } from "@/components/ui/Reveal";

export function PublicationItem({
  publication,
  index,
}: {
  publication: Publication;
  index: number;
}) {
  return (
    <Reveal delay={index * 0.04}>
      <article className="border-t border-border py-8 first:border-t-0 first:pt-0">
        <p className="font-mono text-xs text-faint">{publication.year}</p>
        <h3 className="mt-2 font-display text-xl font-medium text-ink">
          {publication.title}
        </h3>
        <p className="mt-2 text-sm text-muted">
          {publication.authors.join(", ")}
        </p>
        <p className="mt-1 text-sm italic text-faint">{publication.venue}</p>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
          {publication.description}
        </p>
        {publication.contribution ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">
            <span className="text-faint">Contribution — </span>
            {publication.contribution}
          </p>
        ) : null}
        {publication.url || publication.doi ? (
          <Link
            href={publication.url || `https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            View publication ↗
          </Link>
        ) : (
          <p className="mt-4 text-sm text-faint">
            PLACEHOLDER — add DOI / link
          </p>
        )}
      </article>
    </Reveal>
  );
}
