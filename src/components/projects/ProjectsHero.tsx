"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectsHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  backLabel: string;
  totalCount: number;
}

export default function ProjectsHero({
  tag,
  title,
  subtitle,
  backLabel,
  totalCount,
}: ProjectsHeroProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-40 sm:pb-20 border-b border-border/60 bg-grid">
      <div className="pointer-events-none absolute inset-0 bg-grid-mask" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg" />

      <div className="relative container-page">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              t-mono-sm uppercase tracking-wider
              text-text-dim hover:text-text
              transition-colors
            "
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            {backLabel}
          </Link>
        </motion.div>

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mb-8"
        >
          <span className="section-eyebrow">
            <span className="text-accent">01</span>
            <span className="w-8 h-[1px] bg-text-dim/40" />
            {tag}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="
            font-[family-name:var(--font-display)]
            font-semibold tracking-[-0.035em] leading-[0.98]
            text-[clamp(2.5rem,7vw+0.5rem,5rem)]
            mb-8 max-w-4xl
          "
        >
          {title}
          <span className="dot-accent">.</span>
        </motion.h1>

        {/* Subtitle + count */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap items-end gap-x-8 gap-y-4 max-w-2xl"
        >
          <p className="t-body-lg text-text-muted flex-1 min-w-[260px]">
            {subtitle}
          </p>

          <div className="flex items-center gap-3 shrink-0">
            <span className="font-[family-name:var(--font-display)] text-3xl font-semibold leading-none">
              {String(totalCount).padStart(2, "0")}
            </span>
            <span className="t-mono-sm text-text-dim uppercase tracking-wider">
              projets
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}