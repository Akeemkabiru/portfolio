"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { navLinks } from "@/data/nav";
import { site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-bg/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-content items-center justify-between px-6 md:px-10">
        <Link
          href="/"
          className="font-display text-sm font-medium tracking-tight text-ink"
          onClick={() => setOpen(false)}
        >
          {site.name}
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm transition-colors duration-200",
                  active ? "text-ink" : "text-muted hover:text-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              className="flex h-9 w-9 items-center justify-center md:hidden"
              aria-label="Open menu"
            >
              <span className="relative block h-3.5 w-5">
                <span className="absolute left-0 top-0 h-px w-full bg-ink" />
                <span className="absolute left-0 bottom-0 h-px w-full bg-ink" />
              </span>
            </button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-md data-[state=open]:animate-fade-in" />
            <Dialog.Content
              className="fixed inset-0 z-50 flex flex-col px-6 pt-6"
              aria-describedby={undefined}
            >
              <div className="flex h-16 items-center justify-between">
                <Dialog.Title asChild>
                  <span className="font-display text-sm font-medium text-ink">
                    {site.name}
                  </span>
                </Dialog.Title>
                <Dialog.Close asChild>
                  <button
                    type="button"
                    aria-label="Close menu"
                    className="flex h-9 w-9 items-center justify-center text-2xl text-ink"
                  >
                    ×
                  </button>
                </Dialog.Close>
              </div>
              <nav
                className="mt-6 flex flex-1 flex-col gap-1"
                aria-label="Mobile"
              >
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="border-b border-border py-4 font-display text-lg font-medium text-ink"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
