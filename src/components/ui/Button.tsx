import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
};

const variants = {
  primary:
    "bg-ink text-bg hover:bg-accent hover:text-accent-ink dark:bg-ink dark:text-bg",
  secondary:
    "border border-border text-ink hover:border-accent hover:text-accent",
  ghost: "text-ink hover:text-accent",
};

export function Button({
  href,
  children,
  variant = "primary",
  external = false,
  className,
}: ButtonProps) {
  const isGhost = variant === "ghost";
  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center gap-2 text-sm font-medium transition-colors duration-300 ease-editorial",
        !isGhost && "rounded-full px-6 py-3",
        variants[variant],
        className,
      )}
    >
      {children}
    </Link>
  );
}
