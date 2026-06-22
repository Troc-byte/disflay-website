import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const props: { title: string; description: React.ReactNode; icon: React.ReactNode }[] = [
  {
    title: "No tech skills needed",
    description: "If you can use WhatsApp, you can use Screeno.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "Works offline",
    description: "Content plays even without internet. Perfect for spotty wifi.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
      </svg>
    ),
  },
  {
    title: "~₹10/day per screen",
    description: (<><span className="font-semibold text-primary">60 days free</span>, then ₹299/month. No contracts.</>),
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Content designed for you",
    description: "Our team creates custom visuals for your business.",
    icon: (
      <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
];

export function ValuePropsSection() {
  return (
    <Section className="bg-muted">
      <Container>
        <SectionHeading title="Why businesses choose Screeno" />
        <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 md:gap-10">
          {props.map((prop) => (
            <div key={prop.title} className="rounded-3xl bg-white p-8 md:p-10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light text-primary">
                {prop.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground md:text-2xl">
                {prop.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
