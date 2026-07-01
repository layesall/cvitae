import { Github, Linkedin, Mail } from "lucide-react";
import { socialLinks, tva } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <div className="flex justify-center gap-4 mb-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:bg-text hover:text-bg hover:border-text hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:bg-text hover:text-bg hover:border-text hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href={socialLinks.email}
            className="w-11 h-11 rounded-full bg-bg-card border border-border flex items-center justify-center text-text-muted hover:bg-text hover:text-bg hover:border-text hover:-translate-y-1 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
        <p className="text-text-dim text-sm mb-1">TVA: {tva}</p>
        <p className="text-text-dim text-sm">
          &copy; {new Date().getFullYear()} Layesall. Développé avec soin à Bruxelles.
        </p>
      </div>
    </footer>
  );
}