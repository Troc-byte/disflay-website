"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[64px] items-center justify-between">
          <div
            className="origin-top-left transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: scrolled ? "scale(1)" : "scale(1.5)" }}
          >
            <Logo
              className="text-foreground"
              iconClassName="h-[39px] w-auto shrink-0 md:h-[45px]"
            />
          </div>

          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[15px] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block">
            <Button href="/contact" size="sm">
              Book Demo
            </Button>
          </div>

          <MobileMenu />
        </nav>
      </Container>
    </header>
  );
}
