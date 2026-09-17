"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Project } from "@/types";

interface FeaturedProjectsProps {
  eyebrow: string;
  titleMain: string;
  titleHighlight: string;
  subtitle: string;
  ctaText: string;
  ctaHref: string;
  items: Project[];
}

export default function FeaturedProjects({
  eyebrow,
  titleMain,
  titleHighlight,
  subtitle,
  ctaText,
  ctaHref,
  items,
}: FeaturedProjectsProps) {
  return (
    <section
      id="projects"
      className="relative section-pad border-t border-border/60"
    >
      <div className="container-page">

        {/* ── En-tête ── */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 lg:mb-20">
          <div className="flex flex-col gap-6 max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4 }}
            >
              <span className="section-eyebrow">
                <span className="text-accent">04</span>
                <span className="w-8 h-[1px] bg-text-dim/40" />
                {eyebrow}
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="t-h2 font-[family-name:var(--font-display)] font-semibold"
            >
              {titleMain}{" "}
              <span className="text-text-muted">{titleHighlight}</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="t-body-lg text-text-muted max-w-xl"
            >
              {subtitle}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="hidden lg:block shrink-0"
          >
            <Link href={ctaHref} className="btn-ghost">
              {ctaText}
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* ── Grille de projets ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {items.map((project, i) => {
            const isExternal = project.link?.startsWith("http");

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group"
              >
                <Link
                  href={project.link ?? "#"}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="block"
                >
                  {/* ── Carte ── */}
                  <div
                    className="
                      hero-img-wrap
                      relative flex flex-col
                      bg-bg-card border border-border rounded-3xl
                      overflow-hidden
                      transition-all duration-300
                      hover:border-border-strong
                      hover:-translate-y-0.5
                    "
                  >
                    {/* Image */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-bg-elevated">
                      {project.image ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          className="
                            hero-img
                            w-full h-full object-cover
                            transition-transform duration-700 ease-out
                            group-hover:scale-[1.04]
                          "
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-bg-elevated to-bg-card">
                          <span className="font-[family-name:var(--font-display)] text-6xl font-semibold text-text-dim/40">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                      )}

                      {/* Overlay dégradé bas */}
                      <div className="absolute inset-0 bg-gradient-to-t from-bg-card/95 via-bg-card/20 to-transparent pointer-events-none" />

                      {/* Catégorie en haut à gauche */}
                      {project.category && (
                        <span
                          className="
                            absolute top-4 left-4
                            inline-flex items-center gap-1.5
                            px-3 py-1.5 rounded-full
                            bg-bg/70 backdrop-blur
                            border border-border-strong
                            font-[family-name:var(--font-mono)]
                            text-[10px] tracking-[0.12em] uppercase
                            text-text/90
                          "
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {project.category}
                        </span>
                      )}

                      {/* Flèche en haut à droite (apparition hover) */}
                      <span
                        className="
                          absolute top-4 right-4
                          w-9 h-9 rounded-full
                          bg-accent text-bg
                          flex items-center justify-center
                          opacity-0 -translate-y-1
                          transition-all duration-300
                          group-hover:opacity-100 group-hover:translate-y-0
                        "
                      >
                        <ArrowUpRight className="w-4 h-4" strokeWidth={2.4} />
                      </span>

                      {/* Titre + année en bas de l'image */}
                      <div className="absolute bottom-0 left-0 right-0 p-5 flex items-end justify-between gap-3">
                        <h3 className="font-[family-name:var(--font-display)] text-xl font-semibold leading-tight">
                          {project.title}
                        </h3>
                        <span className="font-[family-name:var(--font-mono)] text-xs text-text-muted tracking-wider shrink-0">
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* Contenu bas : description + tags */}
                    <div className="p-5 flex flex-col gap-4">
                      <p className="t-body text-text-muted leading-relaxed line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {project.tags.slice(0, 4).map((tag) => (
                          <span
                            key={tag}
                            className="
                              px-2.5 py-1 rounded-md
                              bg-bg-elevated border border-border
                              font-[family-name:var(--font-mono)]
                              text-[10px] tracking-wider uppercase
                              text-text-dim
                            "
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            );
          })}
        </div>

        {/* ── CTA mobile ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:hidden flex justify-center mt-12"
        >
          <Link href={ctaHref} className="btn-ghost">
            {ctaText}
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}