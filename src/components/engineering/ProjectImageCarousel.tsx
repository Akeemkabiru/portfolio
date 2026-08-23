"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function ProjectImageCarousel({
  images,
  alt,
  interval = 4000,
}: {
  images: string[];
  alt: string;
  interval?: number;
}) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (images.length <= 1 || paused) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, interval);
    return () => clearInterval(id);
  }, [images.length, paused, interval]);

  if (images.length === 0) return null;

  return (
    <div
      className="relative aspect-[16/9] w-full overflow-hidden bg-surface"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          priority={i === 0}
          className={cn(
            "object-cover transition-opacity duration-700 ease-editorial",
            i === index ? "opacity-100" : "opacity-0",
          )}
        />
      ))}

      {images.length > 1 ? (
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              aria-label={`Show screenshot ${i + 1} of ${images.length}`}
              aria-current={i === index}
              onClick={() => setIndex(i)}
              className={cn(
                "h-1.5 rounded-full bg-white transition-all duration-300",
                i === index ? "w-5 opacity-100" : "w-1.5 opacity-50",
              )}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
