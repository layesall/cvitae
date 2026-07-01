"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Badge from "@/components/ui/Badge";
import { projects } from "@/lib/data";

const statusConfig = {
  active: { label: "En ligne", variant: "success" as const },
  development: { label: "Développement", variant: "warning" as const },
  archived: { label: "Archivé", variant: "neutral" as const },
};

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 340;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="projets" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          tag="Portfolio"
          title="Projets récents"
          description="Une sélection de mes réalisations les plus pertinentes"
        />

        <div className="flex items-center justify-end gap-2 mb-6">
          <button
            onClick={() => scroll("left")}
            className="w-9 h-9 rounded-full border border-border bg-bg-card flex items-center justify-center text-text-muted hover:bg-text hover:text-bg transition-all"
            aria-label="Défiler à gauche"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-9 h-9 rounded-full border border-border bg-bg-card flex items-center justify-center text-text-muted hover:bg-text hover:text-bg transition-all"
            aria-label="Défiler à droite"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, i) => {
            const status = statusConfig[project.status];
            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[320px] max-w-[320px] bg-bg-card border border-border rounded-2xl overflow-hidden card-hover group snap-start flex-shrink-0"
              >
                <div className="h-48 bg-bg-elevated relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-text-dim text-sm">Aperçu à venir</span>
                    </div>
                  )}
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-bg/60"
                    >
                      <ExternalLink className="w-6 h-6 text-text" />
                    </a>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant={status.variant}>{status.label}</Badge>
                    <span className="text-text-dim text-sm font-medium">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold mb-2 group-hover:text-text-muted transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs text-text-dim bg-bg-elevated border border-border px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.note && (
                    <p className="text-text-dim text-xs italic">{project.note}</p>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}