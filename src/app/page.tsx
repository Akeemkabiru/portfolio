import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { SerifAccent } from "@/components/ui/SerifAccent";
import { site } from "@/data/site";
import { shortTrajectory } from "@/data/research";
import { projects } from "@/data/projects";

const proteinVisualizer = projects.find((p) => p.slug === "protein-visualizer")!;

const featuredAreas = [
  {
    index: "01",
    title: "Software Engineering",
    description:
      "Production software, scalable interfaces, real-time systems, APIs, AI-powered applications, performance optimization, and DevOps.",
    href: "/engineering",
  },
  {
    index: "02",
    title: "Computational Biology",
    description:
      "Bioinformatics, molecular docking, molecular dynamics, computational vaccine design, protein–ligand interactions, and structural biology.",
    href: "/research",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-28">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              {site.positioning}
            </p>
            <h1 className="mt-6 max-w-4xl text-balance font-display text-display-xl font-medium text-ink">
              {site.name}
            </h1>
            <p className="mt-8 font-display text-display-md font-medium leading-[1.1] text-ink">
              Software Engineering
              <br />
              <SerifAccent className="not-italic">
                for Computational Drug Discovery
              </SerifAccent>
            </p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
              {site.tagline}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/engineering" variant="primary">
                Engineering →
              </Button>
              <Button href="/research" variant="secondary">
                Research →
              </Button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              <Link
                href="/publications"
                className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-ink hover:decoration-accent"
              >
                Publications
              </Link>
              <Link
                href="/cv"
                className="text-sm text-muted underline decoration-border underline-offset-4 hover:text-ink hover:decoration-accent"
              >
                CV
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Central narrative strip */}
      <section className="border-y border-border bg-surface py-8">
        <Container>
          <Reveal>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-xs uppercase tracking-[0.1em] text-muted">
              {shortTrajectory.map((step, index) => (
                <span key={step} className="flex items-center gap-2">
                  <span className={index === shortTrajectory.length - 1 ? "text-accent" : ""}>
                    {step}
                  </span>
                  {index < shortTrajectory.length - 1 ? (
                    <span className="text-faint">→</span>
                  ) : null}
                </span>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Three featured areas */}
      <section className="py-24 md:py-32">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Where engineering meets science
            </p>
          </Reveal>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
            {featuredAreas.map((area, index) => (
              <Reveal key={area.title} delay={index * 0.05}>
                <Link
                  href={area.href}
                  className="group flex h-full flex-col bg-bg p-8 transition-colors duration-300 hover:bg-surface"
                >
                  <p className="font-mono text-xs text-faint">{area.index}</p>
                  <h3 className="mt-3 font-display text-lg font-medium text-ink">
                    {area.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    {area.description}
                  </p>
                  <span className="mt-4 text-sm font-medium text-ink underline decoration-border underline-offset-4 group-hover:decoration-accent">
                    Explore ↗
                  </span>
                </Link>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <Link
                href="/research"
                className="group flex h-full flex-col bg-bg"
              >
                <div className="relative h-32 w-full overflow-hidden border-b border-border">
                  <Image
                    src={proteinVisualizer.image!}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="flex items-center gap-3">
                    <p className="font-mono text-xs text-faint">03</p>
                    <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
                      Flagship
                    </span>
                  </div>
                  <h3 className="mt-3 font-display text-lg font-medium text-ink">
                    Scientific Software
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                    Building software that makes biological and molecular
                    data easier to explore and analyze — {proteinVisualizer.name}{" "}
                    is the clearest example.
                  </p>
                  <span className="mt-4 text-sm font-medium text-ink underline decoration-border underline-offset-4 group-hover:decoration-accent">
                    Explore ↗
                  </span>
                </div>
              </Link>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
