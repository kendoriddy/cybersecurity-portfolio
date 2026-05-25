import { projects } from "./projects";

/** Personal info — updated for international remote positioning */
export const profile = {
  name: "Kenny Onifade",
  title: "Security Engineer & Code Auditor",
  headline:
    "Bridging the gap between code and compliance — AppSec engineering, automated triage, and risk remediation.",
  bio: "Software engineer turned Security Engineer specializing in Application Security (AppSec) and Security Operations. I build secure coding labs, design adversarial code review tools, and engineer automated SOC triage workflows. My focus is delivering actionable, remediation-first security that helps engineering teams ship secure code without losing velocity.",
  email: "onifkay@gmail.com",
  location: "Remote (UTC-1 to UTC+3 preferred) / Open to Relocation",
  github: "https://github.com/kendoriddy",
  linkedin: "https://www.linkedin.com/in/kehindeonifade/",
  resumeUrl: "https://cyber.kennyonifade.com",
};

export const focusAreas = [
  {
    label: "Application Security",
    description:
      "Static and dynamic code analysis, adversarial code review, and designing automated remediation patterns that seamlessly integrate into modern CI/CD pipelines.",
  },
  {
    label: "SOC & Detection Engineering",
    description:
      "Engineering automated phishing triage pipelines, IOC extraction, threat intelligence enrichment via APIs, and authoring custom YARA/Sysmon detection rules.",
  },
  {
    label: "Risk & Compliance (GRC)",
    description:
      "Translating complex compliance frameworks into practical engineering controls, mapping risks, and generating audit-ready technical documentation.",
  },
];

export const skills = [
  {
    area: "Application Security",
    items: [
      "Adversarial Code Review",
      "OWASP Top 10 / CWE Mapping",
      "Secure Remediation Design",
      "Vulnerability Triage (CVSS)",
    ],
  },
  {
    area: "SOC & Detection",
    items: [
      "SIEM & Endpoint Monitoring",
      "Automated Triage Pipelines",
      "YARA Rules & Sysmon Configuration",
      "Threat Intel API Integration",
    ],
  },
  {
    area: "GRC & Engineering Risk",
    items: [
      "Technical Control Mapping",
      "Risk Assessment & Mitigation",
      "Security Policy as Code",
      "Audit Evidence Gathering",
    ],
  },
  {
    area: "Security & Dev Stack",
    items: [
      "Wazuh SIEM / Sysmon",
      "Python / Flask",
      "TypeScript / React / TanStack Start",
      "Supabase / SQLite",
    ],
  },
];

export const stats = [
  { label: "Security Projects", value: String(projects.length) },
  { label: "Core Domains", value: "3" },
  { label: "Vulnerability Classes Covered", value: "14+" },
  { label: "Automated Triage Signals", value: "20+" },
];
