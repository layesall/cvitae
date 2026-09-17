"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";

interface ProjectShowcaseProps {
  project: Project;
  index: number;       // 0-based
  noImageText: string;
}

export default function ProjectShowcase({
  project,
  index,
  noImageText,
}: ProjectShowcaseProps) {
  const isReversed = index % 2 === 1; // image à droite sur projets impairs
  const number = String(index + 1).padStart(2, "0");
  const isExternal = project.link?.startsWith("http");

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`
        relative
        grid grid-cols-1 lg:grid-cols-12
        gap-8 lg:gap-14
        items-center
        py-16 lg:py-24
        border-b border-border/60
      `}
    >
      {/* ── IMAGE ── */}
      <div
        className={`
          lg:col-span-7
          ${isReversed ? "lg:order-2 lg:col-start-6" : "lg:order-1"}
        `}
      >
        <Link
          href={project.link ?? "#"}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="group hero-img-wrap block relative"
        >
          {/* Numéro géant en filigrane */}
          <span
            className="
              absolute -top-12 -left-2 lg:-top-16 lg:-left-6
              font-[family-name:var(--font-display)]
              font-semibold leading-none
              text-[clamp(5rem,12vw,9rem)]
              text-text/[0.04]
              select-none pointer-events-none
              tracking-tighter
            "
          >
            {number}
          </span>

          <div
            className="
              relative rounded-3xl overflow-hidden
              border border-border
              bg-bg-card
              transition-all duration-500
              group-hover:border-border-strong
              group-hover:-translate-y-1
              group-hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]
            "
          >
            {/* Image */}
            <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    hero-img
                    w-full h-full object-cover
                    transition-transform duration-700 ease-out
                    group-hover:scale-[1.03]
                  "
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-bg-elevated to-bg-card">
                  <span className="font-[family-name:var(--font-display)] text-6xl font-semibold text-text-dim/30">
                    {project.title.charAt(0)}
                  </span>
                  <span className="t-mono-sm text-text-dim uppercase">
                    {noImageText}
                  </span>
                </div>
              )}

              {/* Status chip en haut à gauche */}
              {project.status && (
                <span
                  className="
                    absolute top-4 left-4
                    inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-full
                    bg-bg/80 backdrop-blur
                    border border-border-strong
                    t-mono-sm uppercase tracking-[0.12em]
                    text-text/90
                  "
                >
                  <span
                    className={`
                      w-1.5 h-1.5 rounded-full
                      ${
                        project.status.toLowerCase().includes("live") ||
                        project.status === "Live"
                          ? "bg-accent"
                          : "bg-text-dim"
                      }
                    `}
                  />
                  {project.status}
                </span>
              )}

              {/* Flèche accent au hover */}
              <span
                className="
                  absolute top-4 right-4
                  w-10 h-10 rounded-full
                  bg-accent text-bg
                  flex items-center justify-center
                  opacity-0 -translate-y-1
                  transition-all duration-300
                  group-hover:opacity-100 group-hover:translate-y-0
                "
              >
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
              </span>
            </div>
          </div>
        </Link>
      </div>

      {/* ── DÉTAILS ── */}
      <div
        className={`
          lg:col-span-5
          flex flex-col gap-6
          ${isReversed ? "lg:order-1 lg:col-start-1 lg:row-start-1" : "lg:order-2"}
        `}
      >
        {/* Catégorie */}
        {project.category && (
          <span className="t-mono-sm text-text-dim uppercase tracking-[0.15em]">
            {project.category}
          </span>
        )}

        {/* Titre */}
        <h2
          className="
            font-[family-name:var(--font-display)]
            font-semibold tracking-[-0.03em] leading-[1.02]
            text-[clamp(1.75rem,2.5vw+1rem,2.75rem)]
          "
        >
          {project.title}
        </h2>

        {/* Sous-titre */}
        {project.subtitle && (
          <p className="t-body-lg text-text-muted leading-snug -mt-3">
            {project.subtitle}
          </p>
        )}

        {/* Description */}
        <p className="t-body text-text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Meta grid : rôle · durée · année */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 border-t border-border/60 pt-6">
          {project.role && (
            <div className="col-span-2 sm:col-span-1 flex flex-col gap-1">
              <span className="t-mono-sm text-text-dim uppercase tracking-wider">
                Rôle
              </span>
              <span className="t-body text-text/90 leading-snug">
                {project.role}
              </span>
            </div>
          )}
          {project.duration && (
            <div className="flex flex-col gap-1">
              <span className="t-mono-sm text-text-dim uppercase tracking-wider">
                Durée
              </span>
              <span className="t-body text-text/90">{project.duration}</span>
            </div>
          )}
          <div className="flex flex-col gap-1">
            <span className="t-mono-sm text-text-dim uppercase tracking-wider">
              Année
            </span>
            <span className="t-body text-text/90">{project.year}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="
                px-2.5 py-1 rounded-md
                bg-bg-elevated border border-border
                t-mono-sm text-text-dim uppercase tracking-wider
              "
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTA */}
        {project.link && (
          <Link
            href={project.link}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noopener noreferrer" : undefined}
            className="
              group inline-flex items-center gap-2 w-fit
              t-mono-sm uppercase tracking-[0.15em]
              text-text hover:text-accent
              transition-colors pt-2
            "
          >
            <span className="border-b border-border-strong group-hover:border-accent/60 pb-1 transition-colors">
              {isExternal ? "Voir le projet" : "Découvrir"}
            </span>
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        )}
      </div>
    </motion.article>
  );
}