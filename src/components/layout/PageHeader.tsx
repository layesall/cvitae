
"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useHomeData } from "@/hooks/useLocaleData";

interface PageHeaderProps {
  showCta?: boolean;
}

export default function PageHeader({ showCta = true }: PageHeaderProps) {
  const { identity, actions } = useHomeData();

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-bg/60 border-b border-border/60">
      <div className="container-page flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight"
        >
          {identity.name.replace(".", "")}
          <span className="dot-accent">.</span>
        </Link>

        <div className="flex items-center gap-3">
          <LocaleToggle />
          {showCta && actions.primary && (
            <Link
              href={actions.primary.href}
              className="hidden sm:inline-flex btn-accent !py-2 !px-4 !text-xs"
            >
              {actions.primary.text}
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}