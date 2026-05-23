import { ArrowDown, Github, Mail, Terminal } from "lucide-react";
import { profile, stats } from "../data/profile";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-category/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-bg-elevated/80 px-3 py-1.5 font-mono text-xs text-text-muted backdrop-blur">
          <Terminal className="h-3.5 w-3.5 text-accent" aria-hidden />
          <span>{profile.title}</span>
          <span className="text-text-dim">·</span>
          <span className="text-success">Available for opportunities</span>
        </div>

        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          <span className="block text-text">{profile.name}</span>
          <span className="mt-2 block text-gradient">{profile.headline}</span>
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
          {profile.bio}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-3 font-mono text-sm font-medium text-bg transition hover:bg-accent/90"
          >
            View Projects
            <ArrowDown className="h-4 w-4" aria-hidden />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-5 py-3 font-mono text-sm text-text-muted transition hover:border-accent/30 hover:text-accent"
          >
            <Github className="h-4 w-4" aria-hidden />
            GitHub Profile
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-bg-elevated px-5 py-3 font-mono text-sm text-text-muted transition hover:border-accent/30 hover:text-accent"
          >
            <Mail className="h-4 w-4" aria-hidden />
            Contact
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border bg-bg-card/60 p-4 backdrop-blur"
            >
              <dt className="font-mono text-xs text-text-dim">{stat.label}</dt>
              <dd className="mt-1 font-mono text-2xl font-semibold text-accent">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
