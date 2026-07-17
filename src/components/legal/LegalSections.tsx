"use client";

import { LegalSection } from "@/types";

interface LegalSectionsProps {
  sections: LegalSection[];
}

export function LegalSections({ sections }: LegalSectionsProps) {
  return (
    <div className="space-y-6">
      {sections.map((section) => (
        <section
          key={section.id}
          className="border-b border-border pb-4 last:border-0"
        >
          <h2 className="font-[family-name:var(--font-display)] text-lg font-medium mb-2">
            {section.title}
          </h2>
          {section.items.map((item) => (
            <p
              key={item.id}
              className="text-text-muted text-sm leading-relaxed"
              dangerouslySetInnerHTML={{ __html: item.content }}
            />
          ))}
        </section>
      ))}
    </div>
  );
}