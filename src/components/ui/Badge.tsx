import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "neutral";
  className?: string;
}

export default function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/10 text-text",
    success: "bg-green-500/15 text-green-400",
    warning: "bg-amber-500/15 text-amber-400",
    neutral: "bg-slate-500/15 text-slate-400",
  };

  return (
    <span className={cn(
      "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider",
      variants[variant],
      className
    )}>
      {variant === "success" && <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />}
      {children}
    </span>
  );
}