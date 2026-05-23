export type ProjectCategory =
  | "Application Security"
  | "Secure Coding"
  | "Code Review"
  | "SOC & Incident Response"
  | "Threat Intelligence"
  | "GRC & Compliance"
  | "Educational Tools";

export interface ProjectLinks {
  /** GitHub repository URL */
  github: string;
  /** Live site or demo URL — domain or full URL (https:// added automatically) */
  web: string;
  /** Optional button label (defaults to "Live Site") */
  webLabel?: string;
}

export interface Project {
  id: string;
  title: string;
  links: ProjectLinks;
  tagline: string;
  description: string;
  categories: ProjectCategory[];
  tags: string[];
  highlights: string[];
  techStack: string[];
  featured: boolean;
  status: "live" | "in-progress";
}

export const CATEGORIES: ProjectCategory[] = [
  "Application Security",
  "Secure Coding",
  "Code Review",
  "SOC & Incident Response",
  "Threat Intelligence",
  "GRC & Compliance",
  "Educational Tools",
];

export const projects: Project[] = [
  {
    id: "owasp-diff",
    title: "owasp.diff",
    links: {
      github: "https://github.com/kendoriddy/owasp-diff",
      web: "owaspdiff.kennyonifade.com",
      webLabel: "Live Site",
    },
    tagline: "Vulnerable vs Secure, side by side",
    description:
      "An educational web app that shows the same feature implemented two ways — Vulnerable and Secure — for 8 vulnerabilities from the OWASP Top 10. Each lesson has a working exploit you can run in your browser and the hardened fix that blocks the same payload.",
    categories: ["Application Security", "Secure Coding", "Educational Tools"],
    tags: ["OWASP Top 10", "XSS", "SQLi", "CSRF", "IDOR", "SSRF", "React"],
    highlights: [
      "8 OWASP Top 10 lessons with live exploit demos",
      "Side-by-side vulnerable vs secure code diffs",
      "Sandboxed server functions — no real data persists",
      "Plain-English explainers for production context",
    ],
    techStack: ["TanStack Start", "React 19", "Vite", "TypeScript"],
    featured: true,
    status: "live",
  },
  {
    id: "spot-the-bug",
    title: "Spot the Bug",
    links: {
      github: "https://github.com/kendoriddy/spot-the-bug",
      web: "spotthebug.kennyonifade.com",
      webLabel: "Live Site",
    },
    tagline: "Interactive Security Code Review Trainer",
    description:
      "A terminal-styled, time-pressured quiz that drills manual source code review skills against a curated bank of real-world web application vulnerabilities. Train your eyes to find bugs before an attacker does.",
    categories: ["Code Review", "Application Security", "Educational Tools"],
    tags: ["CWE", "CVSS", "OWASP", "Code Review", "14 Vuln Classes"],
    highlights: [
      "14 high-impact vulnerability classes with CVSS scoring",
      "Developer Review & Security Auditor game modes",
      "Custom dependency-free syntax highlighter",
      "Full reveal screen with exploit payload and remediation",
    ],
    techStack: ["TanStack Start", "React 19", "Tailwind CSS v4", "TypeScript"],
    featured: true,
    status: "live",
  },
  {
    id: "phishing-triage",
    title: "Phishing Triage Toolkit",
    links: {
      github: "https://github.com/kendoriddy/phishing-triage-toolkit",
      web: "triage.kennyonifade.com",
      webLabel: "Live Demo",
    },
    tagline: "Automated email analysis for SOC workflows",
    description:
      "A Python-based security utility for analyzing suspicious emails. Upload an .eml file or paste raw content — the pipeline extracts IOCs, queries threat intelligence APIs, runs YARA rules, checks domain age, scores risk, and generates structured reports.",
    categories: ["SOC & Incident Response", "Threat Intelligence"],
    tags: ["YARA", "VirusTotal", "IOC", "Flask", "Phishing", "IR Timeline"],
    highlights: [
      "End-to-end triage: parse → extract → enrich → score → report",
      "VirusTotal, Talos, and WHOIS enrichment",
      "Composite 0–100 risk scoring with verdict labels",
      "Web UI, CLI, and REST API entry points",
    ],
    techStack: ["Python 3.11", "Flask", "YARA", "SQLite", "Rich"],
    featured: true,
    status: "live",
  },
];
