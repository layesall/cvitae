"use client";

import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "danger";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  icon?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  target?: string;
}

export default function Button({ children, variant = "primary", href, onClick, className, icon = false, disabled = false, type = "button", target }: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-text text-bg hover:bg-white hover:-translate-y-0.5 active:translate-y-0",
    secondary: "bg-transparent text-text border border-border hover:bg-bg-card hover:border-white/20 hover:-translate-y-0.5 active:translate-y-0",
    outline: "bg-transparent text-text border-2 border-text hover:bg-text hover:text-bg hover:-translate-y-0.5 active:translate-y-0",
    ghost: "bg-transparent text-text hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0",
    danger: "bg-red-500/15 text-red-400 border border-red-500/30 hover:bg-red-500/25 hover:-translate-y-0.5 active:translate-y-0",
  };

  if (href) {
    return <a href={href} onClick={onClick} target={target} className={cn(baseStyles, variants[variant], className)}>{children}{icon && <ArrowRight className="w-4 h-4" />}</a>;
  }
  return <button type={type} onClick={onClick} disabled={disabled} className={cn(baseStyles, variants[variant], className)}>{children}{icon && <ArrowRight className="w-4 h-4" />}</button>;
}