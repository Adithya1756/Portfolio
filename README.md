# Adithya DS — Portfolio

A production-ready personal portfolio built with Next.js 15 (App Router), TypeScript, Tailwind
CSS, GSAP, Three.js (via React Three Fiber), Framer Motion, and Lenis smooth scrolling.

## Design

- **Palette** — warm paper background (`#F7F6F2`), near-black ink text (`#14151A`), a single
  signal-blue accent (`#3654F5`), and a muted sage green for secondary status/accent moments.
- **Type** — Space Grotesk for display headings, Inter for body copy, JetBrains Mono for
  labels/eyebrows/nav — a nod to the terminal, since this is a developer's site.
- **Signature element** — an ambient Three.js node network (`NetworkBackground`) drifting behind
  every page at low opacity: a quiet nod to systems thinking (ERP architecture, distributed
  ledgers, graphs) without being a literal diagram.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Contact form — email delivery

The contact form posts to `app/api/contact/route.ts`. Configure **one** of the following in a
`.env.local` file (see `.env.example`):

**Option A — Resend (recommended for Vercel)**
```
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=adithya1756@gmail.com
CONTACT_FROM_EMAIL=onboarding@resend.dev
```

**Option B — SMTP via Nodemailer**
```
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASS=your_password
```

If neither is configured, the route logs submissions to the server console and returns a friendly
error asking visitors to email you directly — the site still builds and runs fine without any
email provider configured.

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import the repo in [Vercel](https://vercel.com/new).
3. Add the environment variables above under Project Settings → Environment Variables.
4. Deploy — no further configuration needed.

## Project structure

```
app/                 Routes (App Router) — one folder per page, plus /api/contact
components/          Reusable UI, animation, and layout components
lib/                 Site content (lib/data.ts) and utilities (lib/utils.ts)
types/               Shared TypeScript interfaces
public/               Static assets — profile photo and resume PDF
```

## Updating content

All copy — bio, experience, projects, skills, education — lives in `lib/data.ts`. Update it there
and every page that references it (Home, About, Experience, Projects, Skills) updates
automatically.

To swap the profile photo, replace `public/images/profile.jpg`. To update the resume, replace
`public/Adithya_DS_Resume.pdf` (keep the same filename, or update the references in `app/page.tsx`,
`app/about/page.tsx`, and `app/resume/page.tsx`).
