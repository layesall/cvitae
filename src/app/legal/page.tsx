"use client";

import { PageTemplate } from "@/components/layout/PageTemplate";
import { LegalSections } from "@/components/legal/LegalSections";
import { useLegalData } from "@/hooks/useLegalData";

export default function LegalPage() {
  const { title, backLabel, sections } = useLegalData();

  return (
    <PageTemplate title={title} backLabel={backLabel}>
      <LegalSections sections={sections} />
    </PageTemplate>
  );
}