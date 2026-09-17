"use client";

import PageHeader from "@/components/layout/PageHeader";
import LegalHero from "@/components/legal/LegalHero";
import LegalContent from "@/components/legal/LegalContent";
import { useLegalData } from "@/hooks/useLegalData";

export default function LegalPage() {
  const { title, backLabel, sections } = useLegalData();

  return (
    <main className="relative min-h-[100svh] flex flex-col">
      <PageHeader showCta={false} />

      <LegalHero title={title} backLabel={backLabel} />

      <LegalContent sections={sections} />
    </main>
  );
}