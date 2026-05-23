import {
  ExternalLink,
  Github,
  Globe,
  Shield,
  ChevronRight,
} from "lucide-react";
import type { Project } from "../data/projects";
import { normalizeUrl } from "../lib/url";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { github, web, webLabel = "Live Site" } = project.links;
  const webUrl = normalizeUrl(web);
  const githubUrl = normalizeUrl(github);
  const hasWebLink = webUrl.length > 0;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-bg-card transition duration-300 hover:border-accent/30 hover:glow-border">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <header className="mb-4 flex items-start justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              {project.featured && (
                <span className="rounded-md bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                  Featured
                </span>
              )}
              <StatusBadge status={project.status} />
            </div>
            <h3 className="font-mono text-xl font-semibold text-text transition group-hover:text-accent">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-accent/80">{project.tagline}</p>
          </div>
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-bg-elevated text-accent">
            <Shield className="h-5 w-5" aria-hidden />
          </div>
        </header>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-text-muted">
          {project.description}
        </p>

        <ul className="mb-5 space-y-2">
          {project.highlights.slice(0, 3).map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-xs text-text-muted"
            >
              <ChevronRight
                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent"
                aria-hidden
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.categories.map((cat) => (
            <span
              key={cat}
              className="rounded-md border border-category/20 bg-category/10 px-2 py-0.5 font-mono text-[10px] text-category"
            >
              {cat}
            </span>
          ))}
        </div>

        <div className="mb-6 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 5).map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-border bg-bg-elevated px-2 py-0.5 font-mono text-[10px] text-text-dim"
            >
              {tag}
            </span>
          ))}
        </div>

        <ProjectLinks
          github={githubUrl}
          webLabel={webLabel}
          hasWebLink={hasWebLink}
          web={webUrl}
        />
      </div>
    </article>
  );
}

function ProjectLinks({
  github,
  web,
  webLabel,
  hasWebLink,
}: {
  github: string;
  web: string;
  webLabel: string;
  hasWebLink: boolean;
}) {
  return (
    <div className="mt-auto space-y-3 border-t border-border pt-5">
      <p className="font-mono text-[10px] uppercase tracking-wider text-text-dim">
        Links
      </p>
      <div className="flex flex-wrap gap-3">
        {hasWebLink && (
          <LinkButton href={web} icon={Globe} label={webLabel} primary />
        )}
        <LinkButton
          href={github}
          icon={Github}
          label="GitHub"
          primary={!hasWebLink}
        />
      </div>
      {!hasWebLink && (
        <p className="font-mono text-[10px] text-text-dim">
          Add a live URL in <code className="text-accent">links.web</code>{" "}
          inside <code className="text-accent">src/data/projects.ts</code>
        </p>
      )}
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const styles =
    status === "live"
      ? "bg-success/10 text-success border-success/20"
      : "bg-warning/10 text-warning border-warning/20";

  return (
    <span
      className={`rounded-md border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider ${styles}`}
    >
      {status === "live" ? "Live" : "In Progress"}
    </span>
  );
}

function LinkButton({
  href,
  icon: Icon,
  label,
  primary = false,
}: {
  href: string;
  icon: typeof Github;
  label: string;
  primary?: boolean;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 rounded-lg px-4 py-2 font-mono text-xs transition ${
        primary
          ? "bg-accent text-bg hover:bg-accent/90"
          : "border border-border bg-bg-elevated text-text-muted hover:border-accent/30 hover:text-accent"
      }`}
    >
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {label}
      <ExternalLink className="h-3 w-3 opacity-60" aria-hidden />
    </a>
  );
}
