"use client";

import { useState } from "react";
import Link from "next/link";

import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50 md:hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition-colors hover:bg-muted"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-navigation"
      >
        {open ? (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      {open && (
        <div
          id="mobile-navigation"
          className="absolute right-0 top-12 z-50 w-[calc(100vw-2rem)] max-w-sm rounded-2xl border border-border bg-white p-6 shadow-xl"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            <Button
              href="/contact"
              size="md"
              className="mt-2 w-full"
              onClick={() => setOpen(false)}
            >
              Book Demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
