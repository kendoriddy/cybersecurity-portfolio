export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Application Security" | "SOC & Detection" | "GRC & Risk";
  tags: string[];
  links: {
    github?: string;
    live?: string;
    documentation?: string;
  };
}

export const projects: Project[] = [
  {
    id: "owasp-diff-lab",
    title: "owasp.diff — Interactive Vulnerability & Remediation Engine",
    subtitle: "Full-Stack Security Education App",
    description:
      "Engineered an educational application using TanStack Start (React 19 + Vite) to demonstrate side-by-side execution differentials between vulnerable code and secure remediation. Developed interactive labs for critical flaws like SQL Injection and Cross-Site Scripting (XSS), detailing how context-aware sanitization maps directly to defensive code patterns.",
    category: "Application Security",
    tags: [
      "React 19",
      "TanStack Start",
      "TypeScript",
      "Vulnerability Analysis",
    ],
    links: {
      github: "https://github.com/kendoriddy/owasp-diff", // Update with your actual repo name if different
      live: "https://owasp-diff.demo",
    },
  },
  {
    id: "automated-triage-pipeline",
    title: "Conversational Bookkeeper & Automated Threat Triage Engine",
    subtitle: "Security Automation & Operations Tooling",
    description:
      "Architected an asynchronous, automated pipeline designed to ingest, process, and enrich contextual operational telemetry. Features structured IOC extraction, threat intelligence API integration, and rule-based parsing to process conversational signals, voice note ingestion via cloud storage, and rapid operational routing with zero manual overhead.",
    category: "SOC & Detection",
    tags: ["Python", "Flask", "Supabase", "API Integration", "Automation"],
    links: {
      github: "https://github.com/kendoriddy",
    },
  },
  {
    id: "wazuh-siem-homelab",
    title: "Enterprise-Grade SIEM Infrastructure & Endpoint Telemetry Lab",
    subtitle: "Detection Engineering & Telemetry Architecture",
    description:
      "Designed and deployed a comprehensive Security Operations environment utilizing Wazuh SIEM and custom Sysmon endpoints. Implemented systematic event tracking, automated alert parsing rules, and active log forwarding architectures to map localized malicious vectors to structured alert dashboards, lowering log-to-alert latency.",
    category: "SOC & Detection",
    tags: [
      "Wazuh SIEM",
      "Sysmon",
      "Log Analysis",
      "Detection Engineering",
      "Home Lab",
    ],
    links: {
      documentation: "https://cyber.kennyonifade.com",
    },
  },
  {
    id: "compliance-control-mapper",
    title: "Engineering Risk & Technical Control Assessment Protocol",
    subtitle: "Governance, Risk & Compliance Framework",
    description:
      "Developed a structured methodology mapping application-level engineering risks to recognized control frameworks. Translates loose operational software requirements into rigid, audit-ready technical evidence pipelines, ensuring compliance safeguards scale dynamically with rapid product feature deployment.",
    category: "GRC & Risk",
    tags: [
      "Control Mapping",
      "Risk Assessment",
      "Audit Evidence",
      "Policy-as-Code",
    ],
    links: {
      documentation: "https://cyber.kennyonifade.com",
    },
  },
];
