import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/profile";
import { SectionHeading } from "./About";

export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next security hire"
          description="Reach out for roles in application security, SOC operations, or GRC."
        />

        <div className="grid gap-4 sm:grid-cols-3">
          <ContactCard
            icon={Mail}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
          />
          <ContactCard
            icon={Github}
            label="GitHub"
            value="View repositories"
            href={profile.github}
            external
          />
          <ContactCard
            icon={Linkedin}
            label="LinkedIn"
            value="Connect professionally"
            href={profile.linkedin}
            external
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: typeof Mail;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group rounded-2xl border border-border bg-bg-card p-6 transition hover:border-accent/30 hover:glow-border"
    >
      <Icon
        className="mb-4 h-5 w-5 text-accent transition group-hover:scale-110"
        aria-hidden
      />
      <p className="font-mono text-xs uppercase tracking-wider text-text-dim">
        {label}
      </p>
      <p className="mt-2 text-sm text-text-muted transition group-hover:text-text">
        {value}
      </p>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-text-dim">
          © {new Date().getFullYear()} {profile.name}. Built to demonstrate real
          security skills.
        </p>
        <p className="font-mono text-xs text-text-dim">
          Add projects in{" "}
          <code className="text-accent">src/data/projects.ts</code>
        </p>
      </div>
    </footer>
  );
}
