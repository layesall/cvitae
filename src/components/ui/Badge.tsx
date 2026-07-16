import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "success" | "warning" | "danger" | "neutral" | "info" | "primary";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
  dot?: boolean;
}

export default function Badge({ children, variant = "default", className, dot = true }: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    default: "bg-white/10 text-text",
    success: "bg-green-500/15 text-green-400",
    warning: "bg-amber-500/15 text-amber-400",
    danger: "bg-red-500/15 text-red-400",
    neutral: "bg-slate-500/15 text-slate-400",
    info: "bg-blue-500/15 text-blue-400",
    primary: "bg-text/15 text-text",
  };

  const dotColors: Record<BadgeVariant, string> = {
    default: "bg-text", success: "bg-green-400", warning: "bg-amber-400",
    danger: "bg-red-400", neutral: "bg-slate-400", info: "bg-blue-400", primary: "bg-text",
  };

  return (
    <span className={cn("inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider", variants[variant], className)}>
      {dot && <span className={cn("w-2 h-2 rounded-full animate-pulse shrink-0", dotColors[variant])} />}
      {children}
    </span>
  );
}