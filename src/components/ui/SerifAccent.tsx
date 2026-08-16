import { cn } from "@/lib/utils";

export function SerifAccent({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("font-serif italic text-accent", className)}>
      {children}
    </span>
  );
}
