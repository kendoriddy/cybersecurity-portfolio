# Spot the Bug — Interactive Security Code Review Trainer

> **Train your eyes to find vulnerabilities in production code — before an attacker does.**

A terminal-styled, time-pressured quiz that drills manual source code review skills against a curated bank of real-world web application vulnerabilities. Built to prove one thing: **I can read code adversarially and identify security anti-patterns without leaning on automated scanners.**

---

## Why this exists

Static analyzers (Semgrep, CodeQL, Snyk, SonarQube) are excellent — and they all miss things. They miss business-logic flaws, novel sink/source pairings, framework-specific quirks, and any vulnerability that doesn't match a pre-written rule. The engineers who catch those bugs are the ones who can read a diff and instantly feel that something is wrong.

That skill is a muscle. This tool is the gym.

**Spot the Bug** puts you in the seat of a security reviewer with a 15–30 line snippet of vulnerable production-shaped code and a countdown timer. Your job: click the vulnerable line, classify the vulnerability class, and survive the audit.

---

## What it trains

The challenge bank covers **14 high-impact vulnerability classes** drawn from the OWASP Top 10, CWE Top 25, and real-world incident postmortems. Each challenge ships with a CVSS score, CWE reference, exploit payload, impact narrative, and the remediated code:

| Vulnerability | CWE | Representative Impact |
| --- | --- | --- |
| SQL Injection | CWE-89 | Authentication bypass, full DB exfiltration |
| Cross-Site Scripting (XSS) | CWE-79 | Session theft, account takeover |
| Cross-Site Request Forgery (CSRF) | CWE-352 | Silent account hijack via email rebind |
| Command Injection | CWE-78 | Remote code execution as the app user |
| Path Traversal | CWE-22 | Arbitrary file read (`/etc/passwd`, cloud creds) |
| Hardcoded Secret | CWE-798 | Production key leakage via git history |
| Broken Authentication | CWE-287 | Plaintext passwords + timing oracle |
| Insecure Deserialization | CWE-502 | RCE from a single HTTP POST |
| Weak Cryptography | CWE-327 | Rainbow-table password recovery |
| Server-Side Request Forgery (SSRF) | CWE-918 | Cloud IAM credential theft via metadata service |
| Open Redirect | CWE-601 | Phishing with your domain's trust signal |
| Insecure Direct Object Reference (IDOR) | CWE-639 | Cross-tenant data breach |
| Prototype Pollution | CWE-1321 | Global `isAdmin` injection, auth bypass |
| Insecure Randomness | CWE-338 | Forgeable password-reset tokens |

Every snippet is realistic — Express handlers, Flask routes, PHP-style sinks — not toy code.

---

## Game modes

Two pressure profiles, calibrated to mirror real review conditions:

- **Developer Review** — 45 seconds per challenge, full syntax highlighting, line numbers, contextual hints. The mode you'd want during a pull request review.
- **Security Auditor** — 22 seconds per challenge, syntax highlighting stripped to raw monochrome. Simulates a rapid pre-pentest triage where you're staring at 50 repos in an afternoon.

Difficulty filters (Easy / Medium / Hard / All) let you ramp from textbook patterns into harder finds like prototype pollution and insecure deserialization gadget chains.

---

## Scoring

Each round scores two independent dimensions:

1. **Line accuracy** — did you click the exact vulnerable line?
2. **Classification accuracy** — did you correctly name the vulnerability class?

A **Perfect** round requires both. The summary screen reports line accuracy, classification accuracy, perfect-round rate, and an aggregate grade ranging up to **Red Team Ready**.

---

## Reveal screen (the educational payoff)

After every round you get a full breakdown:

- **CVSS v3.1 score and severity band** — calibrate intuition for blast radius
- **CWE reference** — linked to MITRE for canonical reading
- **Exploit payload** — the actual string/request that pops the bug
- **Impact narrative** — what a real attacker does with this in production
- **Fixed code** — the minimal, correct remediation pattern

This is the part that converts pattern recognition into durable knowledge.

---

## Tech stack

- **TanStack Start v1** (React 19, Vite 7, file-based routing, SSR-ready)
- **Tailwind CSS v4** with an OKLCH security palette (CRT amber, danger crimson, success phosphor green) and scanline overlay
- **Custom regex-based syntax highlighter** (`src/lib/highlight.ts`) — no `highlight.js`, no `prism`, zero runtime dependency for tokenization
- **Lucide icons**, shadcn/ui primitives
- **Deployable** on [Vercel](https://vercel.com) (Nitro) and [Netlify](https://netlify.com) (`@netlify/vite-plugin-tanstack-start`)

Architecture highlights:

```
src/
├── data/challenges.ts        # 14 vulnerabilities, fully typed Challenge[]
├── lib/highlight.ts          # Dependency-free JS/Python/PHP tokenizer
├── components/quiz/
│   ├── CodeViewer.tsx        # Line-click mechanics, reveal highlighting
│   ├── VulnSidebar.tsx       # Vulnerability classification UI
│   └── CountdownTimer.tsx    # Pressure visualization
└── routes/index.tsx          # Finite-state machine: intro → playing → reveal → summary
```

---

## Running locally

```bash
bun install
bun dev
```

The dev server boots on `http://localhost:3000`. No backend, no database, no environment variables required — the entire challenge bank is statically compiled into the bundle so you can clone it onto a hardened airgapped laptop and it just works.

### Deploy

| Platform | Build command | Notes |
| --- | --- | --- |
| **Vercel** | `bun run build` | Uses the Nitro plugin (auto-detected). Connect the repo and deploy. |
| **Netlify** | `bun run build` | Sets `NETLIFY=true` during CI so the Netlify TanStack Start plugin runs. `netlify.toml` is included. |

---

## Roadmap

- [ ] Community-contributed challenge packs (per-language, per-framework)
- [ ] Daily challenge with a deterministic seed and global leaderboard
- [ ] Diff mode — review two versions of a function and identify the regression
- [ ] CTF mode — chained vulnerabilities across multiple files
- [ ] Export results as a shareable "audit card" for LinkedIn / portfolio

---

## Why this matters for hiring

If you're evaluating me for a role on an **AppSec, product security, or secure software engineering** team, this project is intentional evidence:

- I can **identify** vulnerabilities by class on sight (this tool)
- I can **remediate** vulnerabilities with the correct primitive (Project 1)
- I can **explain** the exploit, impact, and fix to a non-security engineer (the reveal screen is written for them)

Automated scanners catch the easy 60%. The other 40% is human judgment. This is me sharpening mine in public.

---

## License

MIT. Use it to train your team, fork it to add your own challenge packs, embed it in your onboarding curriculum. If it helps someone catch a bug in production, that's the whole point.
