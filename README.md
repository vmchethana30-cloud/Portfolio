# chethana-portfolio

Personal portfolio website for **Chethana Manjunath** — Senior Data Analyst specialising in Power BI, SQL, Python, and enterprise analytics.

## Overview

A production-ready Next.js 14 portfolio site with:

- **Hero** — animated particle field, key stats, availability badge
- **About** — narrative bio + interactive SQL-flavoured toolkit panel
- **Featured Work** — 3 tabbed case studies with measurable impact
- **Experience** — accordion timeline across 4 companies / 6 years
- **Skills** — animated proficiency bars across 3 categories + certifications
- **Contact** — clean CTA with phone/email and availability signals

### Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Fonts | DM Serif Display + DM Sans + DM Mono (Google Fonts) |
| Animations | CSS keyframes + IntersectionObserver |
| Deployment | Any Node.js host (Vercel, Railway, etc.) |

## Local Setup

```bash
# 1. Clone the repository
git clone https://github.com/YOUR_USERNAME/chethana-portfolio.git
cd chethana-portfolio

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build for Production

```bash
npm run build
npm start
```

No environment variables required. The site runs fully static with no external API calls.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout + metadata
│   ├── page.tsx          # Page composition
│   └── globals.css       # Global styles, CSS variables, animations
└── components/
    ├── Navbar.tsx         # Sticky nav with scroll-aware backdrop
    ├── Hero.tsx           # Canvas particle field + stats
    ├── About.tsx          # Bio + SQL toolkit card
    ├── FeaturedWork.tsx   # Tabbed project case studies
    ├── Experience.tsx     # Accordion timeline
    ├── Skills.tsx         # Animated skill bars + certs
    ├── Contact.tsx        # CTA + contact info
    └── Footer.tsx         # Minimal footer
```

## Customisation

- **Content**: Edit text directly inside each component file under `src/components/`
- **Colors**: Modify CSS variables in `globals.css` and color tokens in `tailwind.config.ts`
- **Fonts**: Swap the Google Fonts import URL in `globals.css` and update `--font-*` variables
