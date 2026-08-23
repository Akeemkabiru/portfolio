import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectFeature } from "@/components/engineering/ProjectFeature";
import { ExperienceList } from "@/components/experience/ExperienceList";
import { projects } from "@/data/projects";
import { experience } from "@/data/experience";

export const metadata: Metadata = {
  title: "Engineering",
  description:
    "Software engineering profile. Selected production work, architecture decisions, work history, and engineering skills.",
};

const engineeringProjects = projects.filter((p) => !p.flagship);
const engineeringExperience = experience.filter(
  (e) => e.category === "engineering",
);

const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript", "Go"],
  Frontend: [
    "React",
    "Next.js",
    "React Native",
    "Tailwind CSS",
    "Responsive Web Design",
    "Frontend Performance Optimization",
  ],
  "State & Data": [
    "Zustand",
    "Redux Toolkit",
    "TanStack React Query",
    "MongoDB",
  ],
  Backend: ["Node.js", "Express.js", "REST APIs"],
  "Real-Time Systems": ["WebSockets", "Event-driven workflows"],
  "DevOps / Engineering": [
    "Git",
    "GitHub",
    "CI/CD",
    "Deployment",
    "Cloud infrastructure",
  ],
};

export default function EngineeringPage() {
  return (
    <>
      <PageHeader
        eyebrow="Engineering"
        title="The whole system is the job."
        description="I move across the stack by necessity. REST APIs and data models on one end, interfaces on the other, WebSockets and deployment pipelines holding the two together. If a feature needs a schema change, an endpoint, a UI, and a deploy, that's one piece of work to me, not four handoffs."
      />

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Selected work
          </p>
        </Reveal>
        <div className="mt-8 space-y-10">
          {engineeringProjects.map((project, index) => (
            <ProjectFeature
              key={project.slug}
              project={project}
              index={index}
            />
          ))}
        </div>
      </Container>

      <Container className="pb-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
        </Reveal>
        <div className="mt-8">
          <ExperienceList entries={engineeringExperience} />
        </div>
      </Container>

      <Container className="pb-32">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Engineering skills
          </p>
        </Reveal>
        <div className="mt-8 grid grid-cols-1 gap-x-10 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([category, items], index) => (
            <Reveal key={category} delay={index * 0.04}>
              <h3 className="font-display text-base font-medium text-ink">
                {category}
              </h3>
              <ul className="mt-3 space-y-1.5">
                {items.map((item) => (
                  <li key={item} className="text-sm text-muted">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </>
  );
}
