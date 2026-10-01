"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";

const slides = [
  { src: "/images/hero/hero-1.webp", alt: "Disflay digital signage in a hospital lobby displaying patient information" },
  { src: "/images/hero/hero-2.webp", alt: "Disflay digital menu board in a restaurant showing daily specials" },
  { src: "/images/hero/hero-3.webp", alt: "Disflay digital signage in a retail store showcasing promotions" },
  { src: "/images/hero/hero-4.webp", alt: "Disflay digital display in a gym showing class schedules" },
  { src: "/images/hero/hero-5.webp", alt: "Disflay digital notice board in a school displaying announcements" },
  { src: "/images/hero/hero-6.webp", alt: "Disflay digital signage in a clinic showing doctor availability" },
];

export function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }
    intervalRef.current = setInterval(next, 3000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused, next]);

  const goTo = (index: number) => {
    setActive(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) {
      intervalRef.current = setInterval(next, 3000);
    }
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="relative"
    >
      {/* Slides container */}
      <div className="relative aspect-[3/2] w-full overflow-hidden rounded-2xl border border-border bg-muted shadow-2xl shadow-black/5 md:rounded-3xl">
        {slides.map((slide, i) => (
          <div
            key={slide.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === active ? 1 : 0 }}
            aria-hidden={i !== active}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
              className="object-cover transition-transform duration-[6000ms] ease-out"
              style={{
                transform: i === active ? "scale(1.06)" : "scale(1)",
              }}
              priority={i === 0}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation dots */}
      <div className="mt-6 flex items-center justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="group relative flex h-6 w-6 items-center justify-center"
          >
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === active
                  ? "h-2.5 w-2.5 bg-primary"
                  : "h-2 w-2 bg-foreground/15 group-hover:bg-foreground/30"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
