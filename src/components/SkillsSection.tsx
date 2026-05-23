import { skills } from "../data/profile";
import { SectionHeading } from "./About";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Capabilities across AppSec, SOC, and GRC"
          description="From finding bugs in code to triaging incidents to mapping risk and controls."
        />

        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((group) => (
            <div
              key={group.area}
              className="rounded-2xl border border-border bg-bg-card p-6 transition hover:border-accent/20"
            >
              <h3 className="mb-4 font-mono text-sm font-semibold text-accent">
                {group.area}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-lg border border-border bg-bg-elevated px-3 py-1.5 font-mono text-xs text-text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
