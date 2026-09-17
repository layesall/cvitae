"use client";

import Link from "next/link";
import { ArrowUpRight, } from "lucide-react";
import { motion } from "framer-motion";
import { useHomeData } from "@/hooks/useLocaleData";

export default function Footer() {
  const { footer } = useHomeData();
  const {
    tagline,
    copyright,
    socials,
    pagesLabel,
    pages,
    quickCta,
    madeIn,
    legalLink,
  } = footer;

  return (
    <footer className="relative pt-20 pb-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="
          relative
          bg-bg-card border border-border rounded-3xl
          overflow-hidden
        "
      >
        {/* Liseré accent en haut */}
        <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

        {/* ── Corps : 3 colonnes ── */}
        <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1fr] gap-10 md:gap-8 p-8 sm:p-10 lg:p-12">

          {/* ── Colonne 1 : logo + tagline + email + socials ── */}
          <div className="flex flex-col gap-6 md:pr-8">
            <Link
              href="/"
              className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-tight w-fit"
            >
              Layesall
              <span className="dot-accent">.</span>
            </Link>

            <p className="t-body text-text-muted leading-relaxed max-w-xs">
              {tagline}
            </p>

            <div className="flex items-center gap-2 pt-2">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-full
                    bg-bg-elevated border border-border
                    t-mono-sm text-text-muted uppercase
                    hover:border-border-strong hover:text-text
                    transition-colors
                  "
                >
                  {social.label}
                  <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Colonne 2 : Pages ── */}
          <div className="flex flex-col gap-4">
            <span className="t-mono-sm text-text-dim uppercase tracking-[0.15em]">
              {pagesLabel}
            </span>
            <ul className="flex flex-col gap-2.5">
              {pages.map((page) => (
                <li key={page.id}>
                  <Link
                    href={page.href}
                    className="t-body text-text-muted hover:text-text transition-colors"
                  >
                    {page.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Colonne 3 : CTA rapide ── */}
          <div className="flex flex-col gap-4 md:items-end md:text-right">
            <span className="t-mono-sm text-text-dim uppercase tracking-[0.15em]">
              {quickCta.title}
            </span>

            <p className="t-body text-text-muted max-w-[200px] md:ml-auto">
              {quickCta.description}
            </p>

            <Link
              href="/#contact"
              className="
                group inline-flex items-center gap-2
                px-5 py-3 rounded-full
                bg-accent text-bg
                font-semibold text-sm tracking-tight
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_15px_40px_-12px_rgba(240,235,224,0.4)]
                w-fit
              "
            >
              {quickCta.buttonText}
              <span
                className="
                  w-6 h-6 rounded-full bg-bg/10
                  flex items-center justify-center
                  transition-transform duration-300
                  group-hover:rotate-45
                "
              >
                <ArrowUpRight className="w-3 h-3" strokeWidth={2.5} />
              </span>
            </Link>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-border/60 px-8 sm:px-10 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <span className="t-mono-sm text-text-dim">
            {copyright}
          </span>

          <div className="flex items-center gap-4">
            {legalLink && (
              <Link
                href={legalLink.href}
                className="t-mono-sm text-text-dim hover:text-text transition-colors"
              >
                {legalLink.label}
              </Link>
            )}
            <span className="text-text-dim/40 text-[10px]">·</span>
            <span className="t-mono-sm text-text-dim">
              <span className="text-accent">●</span> {madeIn}
            </span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}