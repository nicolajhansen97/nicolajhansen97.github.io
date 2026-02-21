import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "accent";
}

export function Badge({
  className,
  variant = "default",
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium",
        {
          "bg-white/10 text-zinc-300": variant === "default",
          "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20":
            variant === "accent",
        },
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
