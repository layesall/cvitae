"use client";

import { FooterData } from "@/types";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const { copyright, socials } = data;

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dim">
      <span className="text-center sm:text-left">{copyright}</span>
      <div className="flex items-center gap-4">
        {socials.map((social, i) => (
          <span key={social.id} className="flex items-center gap-4">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-text transition-colors"
            >
              {social.label}
            </a>
            {i < socials.length - 1 && (
              <span className="text-border">·</span>
            )}
          </span>
        ))}
      </div>
    </footer>
  );
}