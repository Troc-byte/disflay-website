import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { comparisonData } from "@/data/pricing";

export function PricingComparison() {
  return (
    <Section>
      <Container>
        <SectionHeading title="Screeno vs traditional signage" />
        <div className="mx-auto max-w-4xl overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b-2 border-foreground/10">
                {comparisonData.headers.map((header) => (
                  <th
                    key={header}
                    className="whitespace-nowrap px-6 py-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonData.rows.map((row) => (
                <tr key={row[0]} className="border-b border-border">
                  <td className="px-6 py-5 text-base font-medium text-foreground">
                    {row[0]}
                  </td>
                  <td className="px-6 py-5 text-base text-muted-foreground">
                    {row[1]}
                  </td>
                  <td className="px-6 py-5 text-base font-medium text-primary">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
}
