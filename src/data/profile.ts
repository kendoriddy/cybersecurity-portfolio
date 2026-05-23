import { projects } from "./projects";

/** Personal info — update these fields with your details */
export const profile = {
  name: "Kenny Onifade",
  title: "Cybersecurity Professional",
  headline:
    "AppSec, SOC, and GRC — finding risk in code, triaging threats, and helping teams act on it.",
  bio: "Cybersecurity professional working across application security, security operations, and governance, risk & compliance. Current projects span secure coding labs, adversarial code review tooling, and SOC-grade phishing triage — with GRC and operations work expanding here over time.",
  email: "onifkay@gmail.com",
  location: "Open to remote & hybrid roles",
  github: "https://github.com/kendoriddy",
  linkedin: "https://www.linkedin.com/in/kehindeonifade/",
  resumeUrl: "https://cyber.kennyonifade.com",
};

export const focusAreas = [
  {
    label: "Application Security",
    description:
      "Secure coding, adversarial code review, OWASP vulnerability classes, and remediation patterns teams can ship.",
  },
  {
    label: "SOC & Operations",
    description:
      "Phishing triage, IOC extraction, threat intel enrichment, YARA matching, and incident response workflows.",
  },
  {
    label: "GRC",
    description:
      "Risk assessment, control mapping, compliance frameworks, and documentation that turns findings into action.",
  },
];

export const skills = [
  {
    area: "Application Security",
    items: [
      "Manual code review",
      "OWASP Top 10",
      "Secure remediation",
      "CVSS triage",
    ],
  },
  {
    area: "SOC & Operations",
    items: [
      "Phishing triage",
      "IOC extraction",
      "YARA rules",
      "Threat intel APIs",
    ],
  },
  {
    area: "GRC & Risk",
    items: [
      "Risk assessment",
      "Control frameworks",
      "Policy & standards",
      "Audit evidence",
    ],
  },
  {
    area: "Stack",
    items: ["TypeScript / React", "Python / Flask", "TanStack Start", "SQLite"],
  },
];

export const stats = [
  { label: "Projects", value: String(projects.length) },
  { label: "Domains", value: "3" },
  { label: "Vuln Classes", value: "14+" },
  { label: "Triage Signals", value: "20+" },
];
