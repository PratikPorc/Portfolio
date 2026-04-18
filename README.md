# Pratik Guha Roy — Portfolio

Personal portfolio website built with Next.js, Tailwind CSS, and TypeScript.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS + CSS Variables
- **Language**: TypeScript
- **Fonts**: Syne (display) + Space Mono (monospace)
- **Animations**: CSS keyframes + Intersection Observer

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```
app/
├── components/
│   ├── sections/       # Page sections (Hero, About, Skills, etc.)
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Hackathons.tsx
│   │   ├── Extracurricular.tsx
│   │   └── Contact.tsx
│   └── ui/             # Reusable UI components
│       ├── Cursor.tsx
│       ├── Navbar.tsx
│       ├── Section.tsx
│       ├── SectionHeader.tsx
│       ├── Divider.tsx
│       └── Footer.tsx
├── globals.css         # Global styles & CSS variables
├── layout.tsx          # Root layout with metadata
└── page.tsx            # Main page assembly
lib/
└── data.ts             # All portfolio content/data
```

## Customisation

All personal data lives in `lib/data.ts`. Update:
- `personalInfo` — name, bio, social links
- `projects` — your project list
- `experiences` — work history
- `hackathons` — achievements
- `skillGroups` — tech stack
- `extracurriculars` — hobbies

## Deploying to Vercel

1. Push to GitHub
2. Import repo at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**

No additional configuration needed.
