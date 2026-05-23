import { profile, focusAreas } from "../data/profile";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="About"
          title="One portfolio, three security domains"
          description="AppSec, SOC, and GRC — each project maps to work you can inspect, run, and hire for."
        />

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-4 text-sm leading-relaxed text-text-muted sm:text-base">
            <p>
              I work across{" "}
              <strong className="font-medium text-text">
                application security, security operations, and governance, risk
                & compliance
              </strong>
              . The projects here are deliberately hands-on — not slide decks or
              cert badges — so you can see how I think in each domain.
            </p>
            <p>
              Today the catalog leans AppSec and SOC: secure coding labs, timed
              code review drills, and a full phishing triage pipeline. GRC work
              lands here as it ships — risk assessments, control mapping, and
              compliance-ready tooling alongside the rest.
            </p>
            <p className="font-mono text-xs text-text-dim">
              {profile.location}
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-bg-card p-6 font-mono text-sm">
            <p className="mb-3 text-xs uppercase tracking-wider text-text-dim">
              Focus areas
            </p>
            <ul className="space-y-4 text-text-muted">
              {focusAreas.map((area, index) => (
                <li key={area.label} className="flex gap-3">
                  <span className="text-accent">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-text">{area.label}</p>
                    <p className="mt-1 text-xs leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {eyebrow}
      </p>
      <h2 className="text-2xl font-bold text-text sm:text-3xl">{title}</h2>
      {description && (
        <p className="mt-3 text-sm text-text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}

export { SectionHeading };
