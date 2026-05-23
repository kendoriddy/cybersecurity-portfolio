# Cybersecurity Portfolio

A modern, searchable portfolio showcasing cybersecurity work across **application security**, **SOC operations**, and **GRC** — built to impress recruiters and hiring managers.

## Features

- **Category filtering** — browse by AppSec, SOC, GRC, Threat Intel, and more
- **Full-text search** — search projects, tags, tech stack, and descriptions
- **GitHub & live site links** — per-project `links.github` and `links.web` in one place
- **Extensible project catalog** — add new projects in one file
- **Responsive dark SOC aesthetic** — mobile-friendly, professional layout

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Customize

### Personal info

Edit `src/data/profile.ts`:

- Name, title, bio, email
- GitHub, LinkedIn, resume URL

### Projects

Edit `src/data/projects.ts` to add or update projects:

```ts
{
  id: "my-new-project",
  title: "Project Name",
  tagline: "One-line summary",
  description: "Longer description for the card",
  categories: ["Application Security"], // pick from CATEGORIES
  tags: ["OWASP", "Python"],
  highlights: ["Key feature 1", "Key feature 2"],
  techStack: ["React", "Python"],
  links: {
    github: "https://github.com/yourusername/repo",
    web: "https://your-live-site.vercel.app",
    webLabel: "Live Site", // optional — e.g. "Live Demo", "Try It"
  },
  featured: true,
  status: "live", // or "in-progress"
}
```

To add a **new category**, extend the `ProjectCategory` type and `CATEGORIES` array in the same file (e.g. `"GRC & Compliance"`).

## Deploy

Build for production:

```bash
npm run build
npm run preview
```

Deploy the `dist/` folder to **Vercel**, **Netlify**, or **GitHub Pages**.

### Vercel

1. Push this repo to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite**
4. Deploy

## Project structure

```
src/
├── data/
│   ├── profile.ts      # Your personal info & skills
│   └── projects.ts     # Project catalog (add more here)
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectFilters.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   └── ContactSection.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## License

MIT
