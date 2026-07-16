"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Badge from "@/components/ui/Badge";
import LocaleToggle from "@/components/ui/LocaleToggle";
import { useProjectsData } from "@/hooks/useLocaleData";

export default function ProjectsPage() {
  const { header, projects, ui } = useProjectsData();

  return (
    <main className="min-h-screen flex flex-col px-4 sm:px-6 lg:px-8 py-4 sm:py-6 relative">
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
        <LocaleToggle />
      </div>

      <div className="max-w-5xl mx-auto w-full flex-1 pt-10 sm:pt-0">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-text-dim">{header.tag}</span>
            <h1 className="font-[family-name:var(--font-display)] text-2xl sm:text-3xl font-semibold mt-1">{header.title}</h1>
          </div>
          <Link href="/" className="inline-flex items-center gap-2 text-sm text-text-muted hover:text-text transition-colors">
            <ArrowLeft className="w-4 h-4" />{ui.backLabel}
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {projects.map((project, i) => (
            <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="bg-bg-card border border-border rounded-xl overflow-hidden group">
              <div className="h-32 sm:h-36 bg-bg-elevated relative overflow-hidden">
                {project.image ? <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity" /> : <div className="absolute inset-0 flex items-center justify-center"><span className="text-text-dim text-xs">{ui.noImageText}</span></div>}
                {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-bg/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"><ExternalLink className="w-3.5 h-3.5" /></a>}
              </div>
              <div className="p-3 sm:p-4">
                <div className="flex items-center justify-between mb-2">
                  <Badge variant={project.status === "active" ? "success" : "warning"} dot={false}>{ui.statusLabels[project.status]}</Badge>
                  <span className="text-text-dim text-xs">{project.year}</span>
                </div>
                <h3 className="font-[family-name:var(--font-display)] font-semibold text-sm mb-1.5">{project.title}</h3>
                <p className="text-text-muted text-xs leading-relaxed mb-3 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-1">{project.tags.map((tag) => <span key={tag} className="text-[10px] text-text-dim bg-bg-elevated border border-border px-1.5 py-0.5 rounded-full">{tag}</span>)}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
  );
}