import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import type { ProjectCategory } from "../data/projects";
import { CATEGORIES } from "../data/projects";

interface ProjectFiltersProps {
  search: string;
  onSearchChange: (value: string) => void;
  activeCategory: ProjectCategory | "All";
  onCategoryChange: (category: ProjectCategory | "All") => void;
  resultCount: number;
  totalCount: number;
}

export function ProjectFilters({
  search,
  onSearchChange,
  activeCategory,
  onCategoryChange,
  resultCount,
  totalCount,
}: ProjectFiltersProps) {
  const hasFilters = search.length > 0 || activeCategory !== "All";

  const clearFilters = () => {
    onSearchChange("");
    onCategoryChange("All");
  };

  return (
    <div className="space-y-5">
      <div className="relative">
        <Search
          className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-dim"
          aria-hidden
        />
        <input
          type="search"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Search projects, tags, or tech stack…"
          className="w-full rounded-xl border border-border bg-bg-elevated py-3 pl-11 pr-11 font-mono text-sm text-text placeholder:text-text-dim focus:border-accent/50 focus:outline-none focus:ring-2 focus:ring-accent/20"
          aria-label="Search projects"
        />
        {search && (
          <button
            type="button"
            onClick={() => onSearchChange("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-text-dim transition hover:bg-border hover:text-text"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <CategoryPill
          label="All"
          active={activeCategory === "All"}
          onClick={() => onCategoryChange("All")}
        />
        {CATEGORIES.map((category) => (
          <CategoryPill
            key={category}
            label={category}
            active={activeCategory === category}
            onClick={() => onCategoryChange(category)}
          />
        ))}
      </div>

      <div className="flex items-center justify-between text-sm">
        <p className="font-mono text-text-muted">
          Showing <span className="text-accent">{resultCount}</span>
          {" / "}
          {totalCount} projects
        </p>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="font-mono text-xs text-text-dim underline-offset-2 transition hover:text-accent hover:underline"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}

function CategoryPill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 font-mono text-xs transition ${
        active
          ? "border-accent/40 bg-accent-glow text-accent"
          : "border-border bg-bg-elevated text-text-muted hover:border-border-bright hover:text-text"
      }`}
    >
      {label}
    </button>
  );
}

export function useProjectFilters<
  T extends {
    title: string;
    tagline: string;
    description: string;
    categories: ProjectCategory[];
    tags: string[];
    techStack: string[];
  },
>(items: T[]) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "All">(
    "All",
  );

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();

    return items.filter((project) => {
      const matchesCategory =
        activeCategory === "All" || project.categories.includes(activeCategory);

      if (!matchesCategory) return false;
      if (!query) return true;

      const haystack = [
        project.title,
        project.tagline,
        project.description,
        ...project.categories,
        ...project.tags,
        ...project.techStack,
      ]
        .join(" ")
        .toLowerCase();

      return haystack.includes(query);
    });
  }, [items, search, activeCategory]);

  return {
    search,
    setSearch,
    activeCategory,
    setActiveCategory,
    filtered,
  };
}
