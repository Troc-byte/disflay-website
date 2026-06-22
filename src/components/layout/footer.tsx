import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";
import { industries } from "@/data/industries";
import { EMAIL, WHATSAPP_DISPLAY } from "@/lib/constants";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const productLinks = [
  { label: "Pricing", href: "/pricing" },
  { label: "Industries", href: "/industries" },
  { label: "Contact", href: "/contact" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const whatsappUrl = buildWhatsAppUrl({
    source: "global",
    medium: "footer",
  });

  return (
    <footer className="border-t border-border bg-foreground text-background">
      <Container className="py-20 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo className="text-background" />
            <p className="mt-4 text-base text-background/50">
              Digital signage for Indian businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Product
            </h3>
            <ul className="mt-4 space-y-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Industries
            </h3>
            <ul className="mt-4 space-y-3">
              {industries.slice(0, 6).map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="text-sm text-background/60 transition-colors hover:text-background"
                  >
                    {industry.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/industries"
                  className="text-sm text-primary transition-colors hover:text-primary/80"
                >
                  View all industries
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-background/40">
              Get in Touch
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  WhatsApp: {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm text-background/60 transition-colors hover:text-background"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 text-center text-sm text-background/40">
          &copy; {new Date().getFullYear()} Screeno. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
