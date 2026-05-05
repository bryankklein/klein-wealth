@AGENTS.md

# Klein Wealth Management — Project Context

## About This Project

A from-scratch rebuild of klein-wealth.com to replace an existing Webflow site. The current site is functional but feels dated, and Webflow makes content updates (especially blog posts and YouTube embeds) more friction than they need to be. The new site lives entirely in code so Bryan can update it himself, learn modern web development, and build a publication-quality site that establishes credibility with prospects.

**Important:** klein-wealth.com is a live business website for Bryan's wealth management practice. The new build runs on a Vercel staging URL until cutover. **Never modify the live klein-wealth.com domain or its DNS until Phase 10.** The existing Webflow site stays online until the new one is fully reviewed and approved.

## About the Developer

Bryan just shipped his first software project (Cape Launch Tracker, a PWA with push notifications, Upstash Redis, cron jobs, Vercel deploy). He's now familiar with Next.js, TypeScript, Tailwind, Vercel, and git basics. He's not a beginner anymore, but he's still learning — explain new concepts when they come up (CMS schemas, Resend setup, DNS cutover, etc.) rather than assuming knowledge.

He works from home as an independent CFP® professional. The site needs to communicate credibility to prospective clients.

## How to Communicate

- Plain English, no unexplained jargon
- Each phase produces something runnable and visible before moving on
- **Check in before starting each new phase — do not assume approval**
- When making a technical decision, briefly say why
- This is a production business site — be conservative about anything that could break SEO, lose leads, or affect compliance

## Project Goal

Replace klein-wealth.com with a modern editorial site that:
1. Establishes credibility for prospective clients
2. Lets Bryan publish blog posts and embed YouTube videos easily
3. Preserves all required compliance disclosures (CFP, ADV, privacy policy)
4. Lives entirely in code so updates happen via git or a CMS web UI — never Webflow again

## Sitemap

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, value prop, fiduciary promise, recent insights teaser, CTA |
| Who we are | `/team` | Bryan's bio, team |
| What we do | `/services` | Process, services, deliverables |
| Insights | `/insights` | Blog posts AND embedded YouTube videos (inline, not separate page) |
| Contact | `/contact` | Contact form (Resend) |
| Disclosures | `/disclosures` | CFP, ADV links, privacy policy |
| Schwab login | external link | Same as today, links to Schwab portal |

## Tech Stack

- **Framework:** Next.js 16 (App Router, TypeScript)
- **Styling:** Tailwind CSS v4 (uses `@theme inline` block in `app/globals.css`)
- **Typography:** Source Serif 4 (headlines) + Inter (body) via `next/font/google`
- **CMS:** Sanity (free tier, hosted Studio for non-technical blog editing)
- **Contact form:** Resend (form submission → email to Bryan's inbox)
- **Hosting:** Vercel (free tier; staging URL until DNS cutover at Phase 10)
- **Source:** GitHub at `bryankklein/klein-wealth`
- **Production URL:** `klein-wealth.com` (currently Webflow; cutover at Phase 10)
- **Staging URL:** Vercel auto-assigned (likely `klein-wealth.vercel.app`)

## Brand / Design System (locked Phase 0)

**Tagline:** *Wealth, on your terms.*

**Palette — Slate & Cream (editorial)**
- Cream background: `#FAF7F2`
- Charcoal: `#222222`
- Ink (deepest text): `#0F0F0F`
- Dusty blue accent: `#5C7B8A`
- *(No other colors. Photography supplies any additional palette.)*

**Typography**
- Headlines: Source Serif 4, light weight, generous tracking
- Body / UI: Inter
- *(Tailwind utilities `font-serif` and `font-sans` are already wired to these.)*

**Vibe:** modern editorial — magazine-like (think The Atlantic, The New Yorker). Restrained. Photography and typography do the talking. No glossy financial-services tropes.

**Photography:** tasteful stock from Unsplash / Pexels. Cinematic, slightly desaturated, "shot on film" aesthetic. Avoid clichés (no handshakes, no call-center headsets, no golden retrievers with grandparents). Prefer light through trees, books on a shelf, hands holding tea, water surfaces, weathered paper.

## Compliance Notes

The current klein-wealth.com has CFP verification links and SEC ADV filings (2024 Firm ADV + Part 2 Brochures), privacy policy, and code of ethics references in the footer. **All of these must be preserved on the new site.** When Phase 8 (disclosures page) comes up, copy the exact text and links from the current footer rather than rewording — wealth management compliance language is regulated.

If Bryan wants to add or change disclosure language in the new build, he should run it past his compliance officer / CFP Board guidance first.

## Build Philosophy

- Build in small numbered phases — each phase must run and be visible before starting the next
- No over-engineering; keep things simple
- **Never write code until the plan for a phase is approved**
- Prefer straightforward solutions over clever ones
- Bryan does the deploys + GitHub pushes himself (he's earning the muscle memory)
- For a real production site, default to caution on anything that could affect SEO, leads, or compliance

## Phase Plan

| Phase | Status | Ships |
|---|---|---|
| 0 | DONE | Decisions locked (palette, typography, sitemap, CMS, contact form) |
| 1 | DONE | Project scaffolded — homepage live on Vercel staging with brand design system applied |
| **2** | **NEXT** | **Visual mockups generated in v0.dev / Artifacts; pick homepage direction** |
| 3 | | Homepage built for real |
| 4 | | Team page (Bryan's bio) |
| 5 | | Services page |
| 6 | | Sanity CMS set up; Insights blog system + 1–2 sample posts (with embedded YouTube) |
| 7 | | Contact form wired to Resend |
| 8 | | Compliance / Disclosures page (CFP, ADV links, privacy policy ported) |
| 9 | | Side-by-side review with current klein-wealth.com, content polish |
| 10 | | DNS cutover — klein-wealth.com points to Vercel; Webflow decommissioned |
