"use client";

import { useState } from "react";
import type { ExperienceEntry } from "@/data/experience";

export function ExperienceItem({ entry }: { entry: ExperienceEntry }) {
  const [open, setOpen] = useState(false);

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
          {entry.supervisor ? `Supervisor — ${entry.supervisor}` : entry.location}
        </p>
      ) : null}
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
        {entry.summary}
      </p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 text-xs font-medium text-ink underline decoration-border underline-offset-4 hover:decoration-accent"
        aria-expanded={open}
      >
        {open ? "Hide details" : "Show details"}
      </button>

      {open ? (
        <ul className="mt-3 space-y-1.5">
          {entry.bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm leading-relaxed text-muted"
            >
              <span className="text-accent">—</span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
