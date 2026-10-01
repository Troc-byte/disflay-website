import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    number: "01",
    title: "Connect your screen",
    description:
      "Install Disflay on your Android TV and just connect to Disflay app on phone.",
  },
  {
    number: "02",
    title: "Upload your content",
    description:
      "Add images, videos, and schedules from your phone — or let us design for you.",
  },
  {
    number: "03",
    title: "Go live",
    description:
      "Your screen starts displaying content instantly. Update anytime, from anywhere.",
  },
];

export function HowItWorksSection() {
  return (
    <Section>
      <Container>
        <SectionHeading title="Three steps to get started" />
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="text-center">
              <span className="inline-block text-5xl font-semibold text-primary/20 md:text-6xl">
                {step.number}
              </span>
              <h3 className="mt-4 text-xl font-semibold text-foreground md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-base text-muted-foreground md:text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
