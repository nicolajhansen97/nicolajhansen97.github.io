import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("text-center mb-16", className)}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted max-w-2xl mx-auto text-lg">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
    </div>
  );
}
