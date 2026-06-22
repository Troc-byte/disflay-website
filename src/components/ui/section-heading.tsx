import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-16 md:mb-20",
        align === "center" && "mx-auto max-w-2xl text-center",
        className
      )}
    >
      <h2 className="text-3xl font-semibold text-foreground sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-muted-foreground md:text-xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}
