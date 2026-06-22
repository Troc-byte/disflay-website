import { cn } from "@/lib/utils";

type SelectProps = {
  label: string;
  options: { value: string; label: string }[];
  className?: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>;

export function Select({
  label,
  options,
  className,
  id,
  ...props
}: SelectProps) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
        {props.required && <span className="text-primary"> *</span>}
      </label>
      <select
        id={id}
        className="block w-full rounded-lg border border-border bg-white px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
        {...props}
      >
        <option value="">Select...</option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
