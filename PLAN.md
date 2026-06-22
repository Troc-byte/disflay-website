# Screeno Website Implementation Plan

## Context

Screeno is a digital signage product for Indian SMBs. The website is a **lead generation site** (not SaaS) — every page funnels visitors to WhatsApp conversations or demo requests. The stack is Next.js 16.2.9, React 19, Tailwind CSS v4, TypeScript, App Router with `src/` directory. The design follows Apple/Linear/Notion aesthetics: clean, spacious, elegant. Primary color: `#FF8A0E`.

---

## 1. Sitemap

```
/                                     Home
/pricing                              Pricing
/industries                           Industries hub
/industries/hospitals                 Industry detail (x10)
/industries/clinics
/industries/restaurants
/industries/cafes
/industries/retail-stores
/industries/gyms
/industries/hotels
/industries/schools
/industries/coaching-institutes
/industries/shopping-malls
/about                                About
/contact                              Contact + Demo request form
/sitemap.xml                          Auto-generated
/robots.txt                           Auto-generated
```

All 10 industry pages statically generated via `generateStaticParams` from a data file. `dynamicParams = false` so unknown slugs 404.

---

## 2. Component Hierarchy

```
RootLayout (layout.tsx)
├── Navbar
│   ├── Logo
│   ├── NavLinks (Home, Pricing, Industries, About, Contact)
│   ├── MobileMenuButton
│   ├── MobileMenu (client component, slide-down)
│   └── CTAButton ("Book Demo" → /contact)
├── {children}
├── Footer
│   ├── FooterLogo + tagline
│   ├── FooterLinks (4 columns: Product, Industries, Company, Contact)
│   └── FooterCopyright
└── WhatsAppFloatingButton (client component, fixed bottom-right)

Home Page
├── HeroSection ("Turn Any TV Into A Smart Business Display", 2 CTAs)
├── HowItWorksSection (3 step cards)
├── ValuePropsSection (4 value prop cards)
├── IndustryShowcase (10 industry cards linking to /industries/[slug])
├── PricingTeaser (free trial callout + link to /pricing)
└── FinalCTASection (dark bg, WhatsApp + Book Demo buttons)

Pricing Page
├── PricingHero
├── PricingCards (Signage plan + Content Starter Pack)
├── PricingComparison (Screeno vs traditional signage table)
├── PricingFAQ (accordion)
└── PricingCTA

Industries Hub
├── IndustriesHero
└── IndustryGrid (10 cards)

Industry Detail (/industries/[slug])
├── IndustryHero (industry-specific headline + image)
├── IndustryPainPoints (problems solved)
├── IndustryUseCases (content types for that industry)
├── IndustryBenefits
└── IndustryCTA (industry-specific WhatsApp message)

About Page
├── AboutHero
├── MissionSection
├── StorySection
├── WhyScreenoSection
└── AboutCTA

Contact Page
├── ContactHero
├── ContactGrid
│   ├── DemoRequestForm (client component)
│   └── ContactInfo (WhatsApp, email, phone)
└── ContactCTA

Reusable UI Primitives
Button, Container, Section, SectionHeading, Card, Badge,
Accordion, AccordionItem, Input, Textarea, Select,
WhatsAppLink, CTASection
```

---

## 3. Folder Structure

```
src/
├── app/
│   ├── layout.tsx              Root layout (Navbar, Footer, WhatsApp FAB, fonts, metadata template)
│   ├── page.tsx                Home page
│   ├── globals.css             Tailwind v4 theme + design tokens
│   ├── favicon.ico
│   ├── sitemap.ts              Dynamic sitemap from industry data
│   ├── robots.ts               Robots.txt
│   ├── not-found.tsx           Custom 404
│   ├── pricing/
│   │   └── page.tsx
│   ├── industries/
│   │   ├── page.tsx            Industries hub
│   │   └── [slug]/
│   │       └── page.tsx        Industry detail (generateStaticParams + generateMetadata)
│   ├── about/
│   │   └── page.tsx
│   └── contact/
│       ├── page.tsx
│       └── actions.ts          Server Action for demo form
│
├── components/
│   ├── layout/
│   │   ├── navbar.tsx
│   │   ├── mobile-menu.tsx         (client)
│   │   ├── footer.tsx
│   │   └── whatsapp-floating-button.tsx  (client)
│   ├── ui/
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   ├── section.tsx
│   │   ├── section-heading.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── accordion.tsx           (client)
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   └── select.tsx
│   ├── home/
│   │   ├── hero-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── value-props-section.tsx
│   │   ├── industry-showcase.tsx
│   │   ├── pricing-teaser.tsx
│   │   └── final-cta-section.tsx
│   ├── pricing/
│   │   ├── pricing-hero.tsx
│   │   ├── pricing-cards.tsx
│   │   ├── pricing-comparison.tsx
│   │   ├── pricing-faq.tsx
│   │   └── pricing-cta.tsx
│   ├── industries/
│   │   ├── industries-hero.tsx
│   │   ├── industry-grid.tsx
│   │   ├── industry-card.tsx
│   │   ├── industry-detail-hero.tsx
│   │   ├── industry-pain-points.tsx
│   │   ├── industry-use-cases.tsx
│   │   ├── industry-benefits.tsx
│   │   └── industry-cta.tsx
│   ├── about/
│   │   ├── about-hero.tsx
│   │   ├── mission-section.tsx
│   │   ├── story-section.tsx
│   │   ├── why-screeno-section.tsx
│   │   └── about-cta.tsx
│   ├── contact/
│   │   ├── contact-hero.tsx
│   │   ├── demo-request-form.tsx   (client)
│   │   ├── contact-info.tsx
│   │   └── contact-cta.tsx
│   └── shared/
│       └── cta-section.tsx
│
├── data/
│   ├── industries.ts       All 10 industries: slug, name, description, icon, pain points, use cases, benefits, testimonial
│   ├── pricing.ts          Plans, features, comparison table data
│   ├── faq.ts              Pricing FAQ entries
│   └── navigation.ts       Nav link structure
│
├── lib/
│   ├── constants.ts        Site-wide constants (company name, URLs, contact info, WhatsApp number)
│   ├── utils.ts            cn() helper (clsx + tailwind-merge)
│   ├── whatsapp.ts         WhatsApp URL builder with source tracking
│   ├── metadata.ts         Shared metadata helpers
│   └── structured-data.ts  JSON-LD schema generators
│
└── types/
    └── index.ts            TypeScript interfaces

public/
├── images/
│   ├── hero/               Hero mockup images
│   ├── industries/         10 industry images (webp)
│   ├── icons/              SVG icons (whatsapp, screen, cloud, check, etc.)
│   └── logo/               Screeno logo variants
└── og/
    └── og-default.png      Default Open Graph image (1200x630)
```

---

## 4. Homepage Wireframe

```
┌──────────────────────────────────────────────────────────────────────┐
│ NAVBAR                                                               │
│ [Screeno Logo]     Home  Pricing  Industries  About  Contact   [Book Demo] │
│ (mobile: [Logo]                                        [☰])         │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                          HERO SECTION                                │
│                      (full viewport height)                          │
│                                                                      │
│  Turn Any TV Into A                                                  │
│  Smart Business Display                                              │
│                                                                      │
│  Display menus, promotions, schedules, and announcements             │
│  on any screen — starting free for 60 days.                          │
│                                                                      │
│  [🟠 WhatsApp Us]              [ Book a Demo ]                      │
│    (primary, filled)             (secondary, outline)                │
│                                                                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                       HOW IT WORKS                                   │
│               "Up and running in 3 simple steps"                     │
│                                                                      │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐         │
│  │      01        │  │      02        │  │      03        │         │
│  │    [Icon]      │  │    [Icon]      │  │    [Icon]      │         │
│  │                │  │                │  │                │         │
│  │ Connect Your   │  │ Upload Your    │  │ Go Live        │         │
│  │ Screen         │  │ Content        │  │                │         │
│  │                │  │                │  │ Your screen    │         │
│  │ Plug in any    │  │ Use our dash-  │  │ starts showing │         │
│  │ TV or monitor. │  │ board or let   │  │ content in-    │         │
│  │ All brands     │  │ us design for  │  │ stantly. Up-   │         │
│  │ supported.     │  │ you.           │  │ date anytime.  │         │
│  └────────────────┘  └────────────────┘  └────────────────┘         │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    VALUE PROPOSITIONS                                 │
│            "Why Indian businesses choose Screeno"                     │
│                                                                      │
│  ┌───────────────────────┐   ┌───────────────────────┐              │
│  │ [Icon]                │   │ [Icon]                │              │
│  │ No Tech Skills Needed │   │ Works Offline         │              │
│  │                       │   │                       │              │
│  │ If you can use        │   │ Content plays even    │              │
│  │ WhatsApp, you can     │   │ without internet.     │              │
│  │ use Screeno.          │   │ Perfect for spotty    │              │
│  │                       │   │ wifi areas.           │              │
│  └───────────────────────┘   └───────────────────────┘              │
│                                                                      │
│  ┌───────────────────────┐   ┌───────────────────────┐              │
│  │ [Icon]                │   │ [Icon]                │              │
│  │ Affordable for Every  │   │ Content Designed      │              │
│  │ Business              │   │ for You               │              │
│  │                       │   │                       │              │
│  │ Just ~₹10/day per     │   │ Don't have content?   │              │
│  │ screen. Less than a   │   │ Our design team       │              │
│  │ cup of chai.          │   │ creates it for your   │              │
│  │                       │   │ business.             │              │
│  └───────────────────────┘   └───────────────────────┘              │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                    INDUSTRY SHOWCASE                                  │
│             "Built for every kind of business"                        │
│                                                                      │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │  │
│  │Hospitals │ │ Clinics  │ │Restaurants│ │  Cafes   │ │ Retail   │  │
│  │    →     │ │    →     │ │    →     │ │    →     │ │ Stores → │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐  │
│  │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │ │ [Image]  │  │
│  │  Gyms    │ │ Hotels   │ │ Schools  │ │ Coaching │ │ Shopping │  │
│  │    →     │ │    →     │ │    →     │ │ Inst. →  │ │ Malls →  │  │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘ └──────────┘  │
│                                                                      │
│  Each card: image + name + one-line desc + arrow. Links to detail.   │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                     PRICING TEASER                                    │
│              (light orange #FFF3E5 background)                        │
│                                                                      │
│         Start free. Stay affordable.                                 │
│                                                                      │
│  ┌────────────────────────────────────────┐                          │
│  │  ✦ 60 Days Free Trial                  │                          │
│  │  Then just ₹299/screen/month           │                          │
│  │  (~₹10/day per screen)                 │                          │
│  │                                        │                          │
│  │  [See Full Pricing →]                  │                          │
│  └────────────────────────────────────────┘                          │
│                                                                      │
│  No credit card required. No contracts. Cancel anytime.              │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│                      FINAL CTA SECTION                               │
│                (dark #0a0a0a bg, white text)                          │
│                                                                      │
│         Ready to transform your business?                            │
│                                                                      │
│  [🟠 WhatsApp Us]             [ Book a Demo ]                       │
│      (primary, filled)          (white outline)                      │
└──────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────────────┐
│ FOOTER                                                               │
│                                                                      │
│ [Screeno Logo]                                                       │
│ Digital signage for Indian businesses.                                │
│                                                                      │
│ Product         Industries        Company        Get in Touch        │
│ ─────────       ──────────        ─────────      ─────────────       │
│ Pricing         Hospitals         About Us       WhatsApp            │
│ How it Works    Clinics           Contact        support@screeno..   │
│ Content Pack    Restaurants                                          │
│                 Cafes                                                 │
│                 Retail Stores                                         │
│                 + 5 more...                                           │
│                                                                      │
│ © 2026 Screeno. All rights reserved.                                 │
└──────────────────────────────────────────────────────────────────────┘

  ┌─────┐
  │ [W] │  ← WhatsApp Floating Button (fixed, always visible)
  └─────┘     bottom-right corner, green #25D366, pulse on load
```

---

## 5. SEO Strategy

### Metadata Template (root layout)
```
title.default: "Screeno — Digital Signage for Indian Businesses"
title.template: "%s | Screeno"
metadataBase: https://www.screenoapp.com
```

### Per-Page Titles & Descriptions

| Page | Title | Description |
|---|---|---|
| Home | (default) | Turn any TV into a digital signage display. Engage customers and grow your business. 60 days free, then ₹299/month. |
| Pricing | Pricing | Start free for 60 days. Screeno digital signage is just ₹299/screen/month. No contracts, no hidden fees. |
| Industries | Digital Signage for Every Industry | Screeno powers digital signage for hospitals, restaurants, retail stores, gyms, hotels, schools, and more. |
| /industries/[slug] | Digital Signage for {Name} | {Industry-specific, 150-160 chars, mentioning use cases and Screeno.} |
| About | About Screeno | Building India's most affordable digital signage solution. Our mission to digitise every Indian business. |
| Contact | Contact Us | Chat on WhatsApp, request a demo, or email us. We respond within 2 hours. |

### Structured Data (JSON-LD)
- **Home**: `LocalBusiness` schema (name, email, phone, priceRange)
- **Pricing**: `Product` with `Offer` (both plans) + `FAQPage`
- **Industry pages**: `Product` with industry-specific description
- Generators in `src/lib/structured-data.ts`, injected via `<script type="application/ld+json">` in each page

### Open Graph
- Every page: `og:type`, `og:locale` (en_IN), `og:site_name`, `og:title`, `og:description`, `og:image`
- Default OG image: 1200x630 branded graphic in `/public/og/og-default.png`
- Twitter card: `summary_large_image`

### Heading Hierarchy
- Each page has exactly **one H1** (unique across site)
- H2s for major sections, H3s for sub-items (industry cards, FAQ questions)

### Internal Linking
- Navbar links all 5 main pages
- Footer links all pages including all 10 industries
- Home industry cards → industry detail pages
- Industry detail pages cross-link related industries (e.g., Hospital ↔ Clinic)
- Pricing teaser → /pricing, every CTA → /contact or WhatsApp

### Technical SEO
- `src/app/sitemap.ts`: generates sitemap.xml from static pages + all industry slugs
- `src/app/robots.ts`: allow all, point to sitemap
- All images use descriptive alt text; decorative icons use `alt=""`
- Canonical URLs auto-set by Next.js `metadataBase`

---

## 6. Conversion Strategy

### WhatsApp as Primary Channel
- **Floating button**: green circle, fixed bottom-right, always visible, pulse on load, 56px (64px mobile)
- Links to `wa.me/918290420287?text={encoded_message}`
- Every page's WhatsApp links use tracked messages via `src/lib/whatsapp.ts`:
  ```
  "Hi, I'm interested in Screeno digital signage.\n\n[Source: home, Medium: hero-cta]"
  ```
  Sales team sees lead source directly in the chat.

### CTA Placement (every section has a conversion path)
| Location | CTA | Action |
|---|---|---|
| Navbar | "Book Demo" button | /contact |
| Hero | Two buttons | "WhatsApp Us" (primary) + "Book a Demo" (secondary) |
| How It Works | "WhatsApp Us →" | WhatsApp |
| Pricing Teaser | "WhatsApp Us" + "See Pricing →" | WhatsApp + /pricing |
| Final CTA | Two buttons | "WhatsApp Us" + "Book a Demo" |
| Footer | Direct links | WhatsApp + email |
| Floating button | Always visible | WhatsApp |

### Demo Request Form (Contact page)
| Field | Type | Required |
|---|---|---|
| Full Name | text | Yes |
| Business Name | text | Yes |
| Phone Number | tel (+91) | Yes |
| Email | email | No |
| Industry | select (10 + Other) | Yes |
| Number of Screens | select (1, 2-5, 6-10, 10+) | No |
| Message | textarea | No |

- Server Action in `src/app/contact/actions.ts`
- Success message: "We'll reach out within 2 hours" + WhatsApp shortcut CTA

### Pricing Psychology
- **Lead with free**: "60 Days Free" is always the headline; ₹299 is secondary
- **Daily framing**: "~₹10/day per screen — less than a cup of chai"
- **Single plan**: one subscription (₹299/mo) avoids decision paralysis; Content Pack is an optional add-on
- **Comparison table**: Screeno vs traditional printed signage (cost, flexibility, updates, reach)
- **Trust removers**: "No credit card required. No contracts. Cancel anytime."

### Industry-Specific CTAs
Each industry page uses contextual WhatsApp messages:
- Hospitals: "Hi, I run a hospital and I'm interested in Screeno."
- Restaurants: "Hi, I run a restaurant and I'm interested in digital menu boards."
- (etc. for all 10)

### Mobile-First
- WhatsApp is dominant CTA on mobile (opens native app)
- Phone number is tap-to-call: `<a href="tel:+918290420287">`
- Navbar CTA on mobile: WhatsApp icon only (no text)
- Floating button slightly larger on mobile for touch targets

---

## Implementation Sequence

1. **Foundation**: constants, utils, `cn()`, whatsapp URL builder, Tailwind v4 theme in globals.css
2. **Data layer**: industries, pricing, FAQ, navigation data files + types
3. **Layout**: Navbar, Footer, WhatsApp floating button, root layout assembly
4. **UI primitives**: Button, Container, Section, SectionHeading, Card, Badge, Accordion, form inputs
5. **Home page**: all 6 sections + shared CTA component
6. **Pricing page**: hero, cards, comparison, FAQ, CTA
7. **Industries**: hub page + detail page with generateStaticParams
8. **About + Contact**: pages, demo request form with Server Action
9. **SEO**: sitemap.ts, robots.ts, structured data, OG images, not-found.tsx

### Dependencies to Install
```
npm install clsx tailwind-merge
```
No other runtime deps. CSS animations only (no framer-motion). Inline SVGs for icons. Native HTML5 form validation.

### Verification
- Run `npm run dev`, visit every page at localhost:3000
- Test all WhatsApp links open wa.me correctly with tracked messages
- Test demo form submission and success state
- Test mobile responsive at 375px, 768px, 1024px, 1440px
- Run `npm run build` — all pages should statically generate
- Validate HTML semantics and heading hierarchy in browser DevTools
- Check OG tags with browser extensions or sharing debugger tools
