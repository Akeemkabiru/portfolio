import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <Container className="pt-36 pb-16 md:pt-44 md:pb-20">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-display-lg font-medium text-ink">
          {title}
        </h1>
        {description ? (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            {description}
          </p>
        ) : null}
      </Reveal>
    </Container>
  );
}
