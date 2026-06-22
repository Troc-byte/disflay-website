import Link from "next/link";
import { navLinks } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/80 backdrop-blur-xl">
      <Container>
        <nav className="flex h-[64px] items-center justify-between">
          <Logo className="text-foreground" />

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
