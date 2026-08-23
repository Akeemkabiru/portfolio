"use client";

import type { ExperienceEntry } from "@/data/experience";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  return (
    <div className="border-t border-border pt-6">
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
        <h3 className="font-display text-lg font-medium text-ink">
          {entry.role} · {entry.org}
        </h3>
        <p className="font-mono text-xs text-faint">{entry.period}</p>
      </div>
      {entry.location || entry.supervisor ? (
        <p className="mt-1 text-xs text-faint">
          {entry.supervisor
            ? `Supervisor — ${entry.supervisor}`
            : entry.location}
        </p>
      ) : null}
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        {entry.summary}
      </p>
    </div>
  );
}
