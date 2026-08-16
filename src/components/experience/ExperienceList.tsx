import type { ExperienceEntry } from "@/data/experience";
import { Reveal } from "@/components/ui/Reveal";
import { ExperienceItem } from "@/components/experience/ExperienceItem";

export function ExperienceList({ entries }: { entries: ExperienceEntry[] }) {
  return (
    <ol className="space-y-10">
      {entries.map((entry, index) => (
        <li key={entry.id}>
          <Reveal delay={index * 0.04}>
            <ExperienceItem entry={entry} />
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
