import { cn } from "@/lib/utils";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className, hover }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-white p-6 md:p-8",
        hover && "transition-shadow hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}
