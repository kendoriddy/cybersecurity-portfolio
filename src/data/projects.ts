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
  /** Optional documentation URL */
  documentation?: string;
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
  /** When true, shows a "Featured" badge — use for spotlight projects (max 2–3) */
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
    id: "owasp-diff-lab",
    title: "owasp.diff — Interactive Vulnerability & Remediation Engine",
    links: {
      github: "https://github.com/kendoriddy/secureshift-showcase",
      web: "https://owaspdiff.kennyonifade.com",
      webLabel: "Live",
      documentation: "https://owaspdiff.kennyonifade.com/readme",
    },
    tagline: "Vulnerable vs Secure, side by side",
    description:
      "Engineered an educational application using TanStack Start (React 19 + Vite) to demonstrate side-by-side execution differentials between vulnerable code and secure remediation. Developed interactive labs for critical flaws like SQL Injection and Cross-Site Scripting (XSS), detailing how context-aware sanitization maps directly to defensive code patterns.",
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
    title: "Spot the Bug — Interactive Security Code Review Trainer",
    links: {
      github: "https://github.com/kendoriddy/code-sentinel-quiz",
      web: "https://spotthebug.kennyonifade.com/",
      webLabel: "Live",
      documentation: "https://spotthebug.kennyonifade.com/readme",
    },
    tagline: "Find bugs before an attacker does",
    description:
      "Developed a terminal-styled, time-pressured quiz that drills manual source code review skills against a curated bank of real-world web application vulnerabilities. Train your eyes to find bugs before an attacker does.",
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
      web: "https://triage.kennyonifade.com",
      webLabel: "Live",
      documentation:
        "https://github.com/kendoriddy/phishing-triage-toolkit/blob/main/README.md",
    },
    tagline: "Automated email analysis for SOC workflows",
    description:
      "A Python-based security utility for analyzing suspicious emails. Upload an .eml file or paste raw content — the pipeline extracts IOCs, queries threat intelligence APIs, runs YARA rules, checks domain age, scores risk, and generates structured reports.",
    categories: ["SOC & Incident Response", "Threat Intelligence"],
    tags: ["YARA", "VirusTotal", "IOC", "Flask", "Phishing", "IR Timeline"],
    highlights: [
      "End-to-end triage: parse → extract → enrich → score → report",
      "VirusTotal, Talos, and WHOIS enrichment",
      "Composite 0 to 100 risk scoring with verdict labels",
      "Web UI, CLI, and REST API entry points",
    ],
    techStack: ["Python 3.11", "Flask", "YARA", "SQLite", "Rich"],
    featured: true,
    status: "live",
  },
];
