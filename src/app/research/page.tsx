import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Trajectory } from "@/components/research/Trajectory";
import { SerifAccent } from "@/components/ui/SerifAccent";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { researchInterests, engineeringForScience, affiliations } from "@/data/research";
import { experience } from "@/data/experience";
import { projects } from "@/data/projects";
import Image from "next/image";

const researchExperience = experience.filter((entry) => entry.category === "research");
const proteinVisualizer = projects.find((p) => p.slug === "protein-visualizer")!;

export const metadata: Metadata = {
  title: "Research",
  description:
    "Computational approaches to understanding biology and designing better therapeutics — research interests, experience, and trajectory toward computational drug discovery.",
};

export default function ResearchPage() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title={
          <>
            Computational approaches to understanding biology and{" "}
            <SerifAccent>designing better therapeutics</SerifAccent>.
          </>
        }
        description="A scientific trajectory in progress — from biological sciences toward computational drug discovery."
      />

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Research interests
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-t border-border pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {researchInterests.map((interest, index) => (
            <Reveal key={interest} delay={index * 0.03}>
              <p className="text-sm text-ink">{interest}</p>
            </Reveal>
          ))}
        </div>
      </Container>

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Research experience
          </p>
        </Reveal>
        <div className="mt-8 max-w-2xl">
          <ExperienceList entries={researchExperience} />
        </div>
      </Container>

      <section className="border-y border-border bg-surface py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Software × structural biology
            </p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              {proteinVisualizer.name}
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              {proteinVisualizer.summary} The clearest evidence of where
              engineering and research already meet in my work.
            </p>
            <div className="mt-6 flex gap-4">
              <Link
                href={proteinVisualizer.liveUrl!}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
              >
                Live project ↗
              </Link>
              <Link
                href="/engineering"
                className="text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
              >
                Full engineering write-up ↗
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-10 overflow-hidden rounded-2xl border border-border">
              <Image
                src={proteinVisualizer.image!}
                alt={`${proteinVisualizer.name} screenshot`}
                width={1600}
                height={900}
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
        </Container>
      </section>

      <Container className="pb-24 pt-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Research trajectory
          </p>
          <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
            Biochemistry &amp; Molecular Biology → Computational Drug Discovery
          </h2>
        </Reveal>
        <div className="mt-14">
          <Trajectory />
        </div>
      </Container>

      <section className="border-t border-border bg-surface py-24">
        <Container>
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Engineering for science
            </p>
            <h2 className="mt-4 max-w-xl font-display text-display-md font-medium text-ink">
              Software I want to eventually build for scientific problems.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted">
              Software engineering gives me the ability to build computational
              tools for scientific problems — starting with problems like
              these.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-4">
            {engineeringForScience.map((item, index) => (
              <Reveal key={item} delay={index * 0.03}>
                <p className="border-t border-border pt-4 text-sm text-ink">
                  {item}
                </p>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <Container className="pb-16">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Affiliations
          </p>
        </Reveal>
        <div className="mt-6 flex flex-wrap gap-x-10 gap-y-2 border-t border-border pt-6">
          {affiliations.map((affiliation) => (
            <div key={affiliation.org}>
              <p className="text-sm text-ink">{affiliation.org}</p>
              <p className="text-xs text-faint">
                {affiliation.role} · {affiliation.period}
              </p>
            </div>
          ))}
        </div>
      </Container>

      <Container className="pb-16">
        <Reveal>
          <Link
            href="/publications"
            className="text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
          >
            View publications ↗
          </Link>
        </Reveal>
      </Container>
    </>
  );
}
