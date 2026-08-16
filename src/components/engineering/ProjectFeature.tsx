import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-faint">
        {label}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted">{value}</p>
    </div>
  );
}

export function ProjectFeature({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <Reveal>
      <article className="border-t border-border py-14 first:border-t-0 first:pt-0">
        {project.image ? (
          <div className="mb-10 overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.image}
              alt={`${project.name} screenshot`}
              width={1600}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>
        ) : null}
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="flex items-center gap-3">
              <p className="font-mono text-xs text-faint">
                {String(index + 1).padStart(2, "0")}
              </p>
              {project.flagship ? (
                <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
                  Flagship project
                </span>
              ) : null}
            </div>
            <h3 className="mt-3 font-display text-2xl font-medium text-ink">
              {project.name}
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {project.summary}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.length > 0 ? (
                project.technologies.map((tech) => (
                  <Tag key={tech}>{tech}</Tag>
                ))
              ) : (
                <Tag>PLACEHOLDER — add stack</Tag>
              )}
            </div>

            <div className="mt-6 flex gap-4">
              {project.liveUrl ? (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                  Live project ↗
                </Link>
              ) : null}
              {project.githubUrl ? (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
                >
                  GitHub ↗
                </Link>
              ) : null}
            </div>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-8 sm:grid-cols-2">
            <Field label="Problem" value={project.problem} />
            <Field label="Approach" value={project.approach} />
            <Field label="Architecture" value={project.architecture} />
            <Field label="Result" value={project.result} />
          </div>
        </div>
      </article>
    </Reveal>
  );
}
