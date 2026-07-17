"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Project } from "@/types";
import { ProjectModal } from "./ProjectModal";
import { useI18n } from "@/context/I18nContext";

interface ProjectsGridProps {
  projects: Project[];
  ui: {
    noImageText: string;
  };
}

export function ProjectsGrid({ projects, ui }: ProjectsGridProps) {
  const {locale} = useI18n()
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Délai pour laisser l'animation se faire avant de vider
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {projects.map((project, i) => (
          <motion.article
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            onClick={() => openModal(project)}
            className="bg-bg-card border border-border rounded-xl overflow-hidden group cursor-pointer transition-all hover:border-text/20 hover:shadow-lg"
          >
            {/* Image */}
            <div className="h-32 sm:h-36 bg-bg-elevated relative overflow-hidden">
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-text-dim text-xs">{ui.noImageText}</span>
                </div>
              )}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

            {/* Infos */}
            <div className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-text-dim text-xs">{project.year}</span>
              </div>

              <h3 className="font-[family-name:var(--font-display)] font-semibold text-sm mb-1.5">
                {project.title}
              </h3>

              <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 3).map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-text-dim bg-bg-elevated border border-border px-1.5 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
                {project.tags.length > 3 && (
                  <span className="text-[10px] text-text-dim">+{project.tags.length - 3}</span>
                )}
              </div>

              {/* Indicateur visuel de clic */}
              <div className="mt-2 text-[10px] text-text-dim/50 group-hover:text-text-dim/80 transition-colors text-end">
                {locale === "fr" ? "En savoir plus →" : "Learn more →"}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
}