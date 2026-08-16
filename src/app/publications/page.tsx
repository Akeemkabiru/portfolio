import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { PublicationItem } from "@/components/publications/PublicationItem";
import { publications, manuscriptsInPreparation } from "@/data/publications";
import { presentations } from "@/data/presentations";

export const metadata: Metadata = {
  title: "Publications",
  description: "Publications and scientific presentations by Kabiru Akeem.",
};

export default function PublicationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Published and ongoing scientific work."
      />

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Publications
          </p>
        </Reveal>

        {publications.length > 0 ? (
          <div className="mt-8">
            {publications.map((publication, index) => (
              <PublicationItem
                key={publication.title}
                publication={publication}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="mt-8 border-t border-border pt-8">
            <p className="text-sm text-muted">
              No completed publications yet — the following work is in
              preparation.
            </p>
            <div className="mt-6 space-y-6">
              {manuscriptsInPreparation.map((item) => (
                <Reveal key={item.title}>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                      {item.status}
                    </p>
                    <h3 className="mt-2 max-w-2xl font-display text-lg font-medium text-ink">
                      {item.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </Container>

      <Container className="pb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Presentations &amp; scientific communication
          </p>
        </Reveal>
        <div className="mt-8">
          {presentations.map((presentation, index) => (
            <Reveal key={presentation.title} delay={index * 0.04}>
              <article className="border-t border-border py-8 first:border-t-0 first:pt-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <p className="font-mono text-xs text-faint">{presentation.date}</p>
                  <span className="font-mono text-xs uppercase tracking-[0.1em] text-accent">
                    {presentation.status}
                  </span>
                </div>
                <h3 className="mt-2 max-w-2xl font-display text-lg font-medium text-ink">
                  {presentation.title}
                </h3>
                <p className="mt-2 text-sm text-muted">
                  {presentation.authors.join(", ")}
                </p>
                <p className="mt-1 text-sm italic text-faint">
                  {presentation.venue}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
