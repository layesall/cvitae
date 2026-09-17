"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { HomeData } from "@/types";

interface HeroProps {
  data: Pick<
    HomeData,
    "badge" | "title" | "subtitle" | "image" | "actions" | "heroBadges"
  >;
}

export default function Hero({ data }: HeroProps) {
  const { badge, title, subtitle, image, actions, heroBadges } = data;
  const { primary, secondary } = actions;

  return (
    <section className="relative min-h-[100svh] flex flex-col bg-grid">
      {/* Masques et dégradés */}
      <div className="pointer-events-none absolute inset-0 bg-grid-mask" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/0 via-bg/0 to-bg" />

      <div className="relative container-page flex-1 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-center py-32 lg:py-40">

          {/* ──────── LEFT : typo ──────── */}
          <div className="flex flex-col gap-8 max-w-2xl">

            {/* Badge dispo */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 w-fit"
            >
              <span className="relative flex w-2 h-2">
                <span className="absolute inline-flex w-full h-full rounded-full bg-accent opacity-60 animate-ping" />
                <span className="relative inline-flex w-2 h-2 rounded-full bg-accent" />
              </span>
              <span className="t-mono-sm text-text-muted uppercase">
                {badge.text}
              </span>
            </motion.div>

            {/* Titre GÉANT */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="t-display font-[family-name:var(--font-display)] font-semibold"
            >
              {title.main}
              <span className="block text-text-muted">{title.highlight}</span>
            </motion.h1>

            {/* Sous-texte court */}
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="t-body-lg text-text-muted max-w-md"
            >
              {subtitle}
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              {primary && (
                <Link href={primary.href} className="btn-accent">
                  {primary.text}
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              )}
              {secondary && (
                <Link href={secondary.href} className="btn-ghost">
                  {secondary.text}
                </Link>
              )}
            </motion.div>
          </div>

          {/* ──────── RIGHT : portrait épuré ──────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative flex items-center justify-center"
          >
            <div className="hero-img-wrap relative w-full max-w-[420px]">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border-strong bg-bg-card">
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`hero-img w-full h-full object-cover object-top ${
                    image.flipX ? "flip-x" : ""
                  }`}
                />
                {/* Vignette douce bas */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Halo accent discret */}
              <div className="absolute -inset-8 -z-10 rounded-full bg-accent/[0.06] blur-3xl" />
            </div>

            {/* Badge 1 : dispo */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -left-3 top-12 hidden sm:block"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-full bg-accent text-bg font-mono text-[11px] font-semibold tracking-wide shadow-xl">
                <span className="w-1.5 h-1.5 rounded-full bg-bg" />
                {heroBadges.availability.toUpperCase()}
              </div>
            </motion.div>

            {/* Badge 2 : devis */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute -right-3 bottom-16 hidden sm:block"
            >
              <div className="flex items-center gap-2 px-3 py-2 rounded-full border border-border-strong bg-bg-card/90 backdrop-blur text-text font-mono text-[11px] tracking-wide">
                <span className="text-accent">→</span>
                {heroBadges.quote.toUpperCase()}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}