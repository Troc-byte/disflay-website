import { Container } from "@/components/ui/container";
import { Logo } from "@/components/ui/logo";

type Cell = {
  type: "yes" | "no" | "text";
  text?: string;
};

const rows: {
  feature: string;
  disflay: Cell;
  pendrive: Cell;
  offline: Cell;
  cloud: Cell;
}[] = [
  {
    feature: "Update from your phone",
    disflay: { type: "yes", text: "1 click" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "text", text: "Complicated" },
  },
  {
    feature: "Remote updates",
    disflay: { type: "yes" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "yes" },
  },
  {
    feature: "Works without internet",
    disflay: { type: "yes" },
    pendrive: { type: "yes" },
    offline: { type: "yes" },
    cloud: { type: "text", text: "Limited" },
  },
  {
    feature: "Unlimited changes",
    disflay: { type: "yes" },
    pendrive: { type: "yes" },
    offline: { type: "yes" },
    cloud: { type: "yes" },
  },
  {
    feature: "Auto-start after power on",
    disflay: { type: "yes" },
    pendrive: { type: "text", text: "Depends" },
    offline: { type: "yes" },
    cloud: { type: "text", text: "Depends" },
  },
  {
    feature: "Update multiple screens",
    disflay: { type: "yes" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "yes" },
  },
  {
    feature: "Manage multiple locations",
    disflay: { type: "yes" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "yes" },
  },
  {
    feature: "Content scheduling",
    disflay: { type: "yes" },
    pendrive: { type: "text", text: "Basic" },
    offline: { type: "yes" },
    cloud: { type: "text", text: "Depends on plan" },
  },
  {
    feature: "Cable free setup",
    disflay: { type: "yes" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "yes" },
  },
  {
    feature: "Manage from anywhere",
    disflay: { type: "yes" },
    pendrive: { type: "no" },
    offline: { type: "no" },
    cloud: { type: "yes" },
  },
];

function Status({ cell }: { cell: Cell }) {
  if (cell.type === "yes") {
    return (
      <span className="inline-flex items-center justify-center gap-1.5 font-semibold text-green-600">
        <span className="text-xl leading-none">✓</span>
        {cell.text && (
          <span className="text-xs font-semibold text-foreground">
            {cell.text}
          </span>
        )}
      </span>
    );
  }

  if (cell.type === "no") {
    return (
      <span className="inline-flex items-center justify-center font-semibold text-red-500">
        <span className="text-xl leading-none">✕</span>
      </span>
    );
  }

  return (
    <span className="text-xs font-semibold text-muted-foreground">
      {cell.text}
    </span>
  );
}

export function PricingComparison() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 md:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Compare your options
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            From USB to Cloud — Signage Made Simple
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to run your screens, without the complexity.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-3xl border border-border bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="w-[28%] bg-muted/50 px-5 py-5 text-left text-sm font-semibold text-foreground">
                    FEATURE
                  </th>

                  <th className="w-[18%] bg-primary px-5 py-5 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Logo
                        showText={false}
                        className="text-white"
                        iconClassName="h-8 w-auto"
                      />
                      <span className="mt-1 text-xs font-normal text-white/75">
                        Mobile-first
                      </span>
                    </div>
                  </th>

                  <th className="w-[18%] bg-muted/50 px-5 py-5 text-center text-sm font-semibold text-muted-foreground">
                    PENDRIVE
                  </th>

                  <th className="w-[18%] bg-muted/50 px-5 py-5 text-center text-sm font-semibold text-muted-foreground">
                    OFFLINE HARDWARE
                    <span className="mt-1 block text-xs font-normal">
                      Hardware + software
                    </span>
                  </th>

                  <th className="w-[18%] bg-muted/50 px-5 py-5 text-center text-sm font-semibold text-muted-foreground">
                    CLOUD SIGNAGE
                  </th>
                </tr>
              </thead>

              <tbody>
                {rows.map((row) => (
                  <tr
                    key={row.feature}
                    className="border-b border-border last:border-0"
                  >
                    <td className="px-5 py-4 text-sm font-semibold text-foreground">
                      {row.feature}
                    </td>

                    <td className="bg-primary/[0.04] px-5 py-4 text-center">
                      <Status cell={row.disflay} />
                    </td>

                    <td className="px-5 py-4 text-center">
                      <Status cell={row.pendrive} />
                    </td>

                    <td className="px-5 py-4 text-center">
                      <Status cell={row.offline} />
                    </td>

                    <td className="px-5 py-4 text-center">
                      <Status cell={row.cloud} />
                    </td>
                  </tr>
                ))}

                {/* Pricing comparison */}
                <tr className="border-t-2 border-border">
                  <td className="bg-muted/30 px-5 py-6 text-sm font-semibold text-foreground">
                    1 Screen
                  </td>

                  <td className="bg-primary/[0.06] px-5 py-6 text-center">
                    <span className="text-lg font-semibold text-primary">
                      ₹299/mo
                    </span>
                  </td>

                  <td className="px-5 py-6 text-center text-sm text-foreground">
                    One time
                  </td>

                  <td className="px-5 py-6 text-center text-sm text-foreground">
                    Very expensive
                  </td>

                  <td className="px-5 py-6 text-center">
                    <span className="text-base font-medium text-foreground">
                      Starts at ₹600
                    </span>
                    <span className="mt-1 block text-xs font-normal text-muted-foreground">
                      2× of Disflay
                    </span>
                  </td>
                </tr>

                <tr className="border-t border-border">
                  <td className="bg-muted/30 px-5 py-6 text-sm font-semibold text-foreground">
                    Add-on Screen
                  </td>

                  <td className="bg-primary/[0.06] px-5 py-6 text-center">
                    <span className="text-lg font-semibold text-primary">
                      ₹50/mo
                    </span>
                  </td>

                  <td className="px-5 py-6 text-center text-sm text-foreground">
                    One time
                  </td>

                  <td className="px-5 py-6 text-center text-sm text-foreground">
                    Very expensive
                  </td>

                  <td className="px-5 py-6 text-center">
                    <span className="text-base font-medium text-foreground">
                      Starts at ₹600
                    </span>
                    <span className="mt-1 block text-xs font-normal text-muted-foreground">
                      12× of Disflay
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-5 text-center text-xs leading-5 text-muted-foreground">
          *Pricing varies by hardware, licence, provider, plan, and billing
          period. Cloud pricing shown is illustrative based on publicly listed
          Indian plans.
        </p>
      </Container>
    </section>
  );
}
