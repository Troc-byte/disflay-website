import { cn } from "@/lib/utils";

type InputProps = {
  label: string;
  className?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, className, id, ...props }: InputProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-primary"> *</span>}
      </label>
      <input
        id={id}
        className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        {...props}
      />
    </div>
  );
}
