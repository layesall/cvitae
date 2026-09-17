"use client";

import PageHeader from "@/components/layout/PageHeader";
import ProjectsHero from "@/components/projects/ProjectsHero";
import ProjectShowcase from "@/components/projects/ProjectShowcase";
import ProjectsCta from "@/components/projects/ProjectsCta";
import { useProjectsData } from "@/hooks/useLocaleData";
import { useI18n } from "@/context/I18nContext";

export default function ProjectsPage() {
  const { header, projects, ui } = useProjectsData();
  const { locale } = useI18n();

  const heroSubtitle =
    locale === "fr"
      ? "Une sélection de projets récents — e-commerce, SaaS, outils internes. Chacun avec son contexte, son rôle et ses choix techniques."
      : "A selection of recent work — e-commerce, SaaS, internal tools. Each with its context, role and technical decisions.";

  const ctaCopy =
    locale === "fr"
      ? {
          title: "Un projet similaire en tête ?",
          subtitle:
            "15 minutes pour en parler. Devis gratuit, réponse sous 24h.",
          buttonText: "Réserver un appel",
          buttonHref: "/#contact",
        }
      : {
          title: "Got a similar project in mind?",
          subtitle:
            "15 minutes to talk it through. Free quote, reply within 24h.",
          buttonText: "Book a call",
          buttonHref: "/#contact",
        };

  return (
    <main className="relative min-h-[100svh] flex flex-col">
      <PageHeader />

      <ProjectsHero
        tag={header.tag}
        title={header.title}
        subtitle={heroSubtitle}
        backLabel={ui.backLabel}
        totalCount={projects.length}
      />

      {/* Showcases alternées */}
      <div className="container-page">
        {projects.map((project, i) => (
          <ProjectShowcase
            key={project.id}
            project={project}
            index={i}
            noImageText={ui.noImageText}
          />
        ))}
      </div>

      <ProjectsCta
        title={ctaCopy.title}
        subtitle={ctaCopy.subtitle}
        buttonText={ctaCopy.buttonText}
        buttonHref={ctaCopy.buttonHref}
      />
    </main>
  );
}