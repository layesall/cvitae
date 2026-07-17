"use client";

import { FooterData } from "@/types";
import Link from "next/link";

interface FooterProps {
  data: FooterData;
}

export default function Footer({ data }: FooterProps) {
  const { copyright, socials, legalLink } = data;

  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-text-dim">
      <span className="text-center sm:text-left">{copyright}</span>
      <div className="flex items-center gap-4">
        {/* Liens sociaux */}
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
            {/* Séparateur : entre les sociaux, ou après le dernier social s'il y a legalLink */}
            {i < socials.length - 1 && <span className="text-border">·</span>}
          </span>
        ))}

        {/* Lien Mentions légales */}
        {legalLink && (
          <>
            <span className="text-border">·</span>
            <Link href={legalLink.href} className="hover:text-text transition-colors">
              {legalLink.label}
            </Link>
          </>
        )}
      </div>
    </footer>
  );
}