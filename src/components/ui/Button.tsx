import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
}

export default function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className,
  icon = false,
}: ButtonProps) {
  const baseStyles = "inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer";
  
  const variants = {
    primary: "bg-text text-bg hover:bg-white hover:-translate-y-0.5",
    secondary: "bg-transparent text-text border border-border hover:bg-bg-card hover:border-white/20",
  };

  const Component = href ? "a" : "button";
  
  return (
    <Component
      href={href}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
    >
      {children}
      {icon && <ArrowRight className="w-4 h-4" />}
    </Component>
  );
}