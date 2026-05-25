import { FolderGit2 } from "lucide-react";
import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectFilters, useProjectFilters } from "./ProjectFilters";
import { SectionHeading } from "./About";

export function ProjectsSection() {
  const { search, setSearch, activeCategory, setActiveCategory, filtered } =
    useProjectFilters(projects);

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Labs & Tooling"
          title="Security engineering artifacts"
          description="Explore functional implementations, detection rules, and vulnerability remediation labs filtered by domain or technical stack."
        />

        <div className="mb-10">
          <ProjectFilters
            search={search}
            onSearchChange={setSearch}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            resultCount={filtered.length}
            totalCount={projects.length}
          />
        </div>

        {filtered.length > 0 ? (
          <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <EmptyState
            onClear={() => {
              setSearch("");
              setActiveCategory("All");
            }}
          />
        )}
      </div>
    </section>
  );
}

function EmptyState({ onClear }: { onClear: () => void }) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-bg-elevated/50 px-6 py-16 text-center">
      <FolderGit2
        className="mx-auto mb-4 h-10 w-10 text-text-dim"
        aria-hidden
      />
      <p className="font-mono text-sm text-text-muted">
        No engineering artifacts match the selected criteria.
      </p>
      <button
        type="button"
        onClick={onClear}
        className="mt-4 font-mono text-xs text-accent underline-offset-2 hover:underline"
      >
        Reset active filters
      </button>
    </div>
  );
}
