import { trajectory } from "@/data/research";
import { Reveal } from "@/components/ui/Reveal";

export function Trajectory() {
  return (
    <div className="relative">
      <div
        className="absolute left-[7px] top-2 bottom-2 hidden w-px bg-border md:block"
        aria-hidden
      />
      <ol className="space-y-10 md:space-y-14">
        {trajectory.map((step, index) => (
          <li key={step.label} className="relative md:pl-12">
            <Reveal delay={index * 0.05}>
              <div className="flex items-start gap-4 md:gap-0">
                <span
                  className="mt-1.5 hidden h-[15px] w-[15px] shrink-0 rounded-full border-2 border-accent bg-bg md:absolute md:left-0 md:top-1.5 md:block"
                  aria-hidden
                />
                <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-accent md:hidden" />
                <div>
                  <p className="font-mono text-xs text-faint">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-1 font-display text-xl font-medium text-ink md:text-2xl">
                    {step.label}
                  </h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  );
}
