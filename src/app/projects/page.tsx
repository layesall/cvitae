"use client";

import { PageTemplate } from "@/components/layout/PageTemplate";
import { ProjectsGrid } from "@/components/projects/ProjectsGrid";
import { useProjectsData } from "@/hooks/useLocaleData";

export default function ProjectsPage() {
  const { header, projects, ui } = useProjectsData();

  return (
    <PageTemplate title={header.title} backLabel={ui.backLabel}>
      <ProjectsGrid projects={projects} ui={ui} />
    </PageTemplate>
  );
}