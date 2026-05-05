# Corpus Website — Developer Spec

**Version:** 0.3 (Draft) | **Status:** For developer kickoff | **Owner:** Product

---

## 1. Goal

A small, fast, beautiful marketing + docs site for Corpus (iOS app). Three jobs, in order of priority:

1. **Convert** — visitors understand what Corpus is in 5 seconds and tap "Download on the App Store".
2. **Educate** — existing users find docs that help them get more out of the app.
3. **Comply** — privacy policy is easy to find and easy to read.

Site should feel like a natural extension of the app: dark, calm, typographic, sport-forward.

---

## 2. Scope

### 2.1 Pages

| Route | Purpose |
|---|---|
| `/` | Home — marketing |
| `/docs` | Docs index |
| `/docs/<topic>` | Individual docs articles |
| `/privacy` | Privacy policy |
| `/404` | Not found |

That's it for v1. No blog, no pricing page (free at launch), no login, no contact form.

### 2.2 Languages

English (default) and Spanish, fully mirrored.

- URL pattern: `/en/...` and `/es/...`. Root `/` redirects based on `Accept-Language` (defaulting to English).
- Language switcher in header — preserves the current page when switching.
- `<html lang>` and `hreflang` tags set correctly on every page.

### 2.3 Out of scope (v1)

Blog, newsletter signup, dark/light toggle (dark only), analytics dashboards, user accounts, comments, search across docs (can ship in v1.1 if cheap).

---

## 3. Content

### 3.1 Home

Single scrolling page, sections from top to bottom:

1. **Hero** — App icon + product name + headline + subhead + App Store badge + a hero device shot.
   - App Store URL: `https://apps.apple.com/app/id6761331575` (let Apple auto-localise the landing page based on the visitor — do not hardcode `?l=en-GB`).
   - **Headline (EN):** *"The coach your Apple Watch was waiting for."*
   - **Subhead (EN):** *"Corpus reads your Apple Health data and turns it into a daily plan tuned to you — sleep, training, recovery, energy. No new hardware. No subscription."*
   - **Headline (ES):** *"El entrenador que tu Apple Watch estaba esperando."*
   - **Subhead (ES):** *"Corpus lee tus datos de Apple Salud y los convierte en un plan diario hecho a tu medida: sueño, entrenamiento, recuperación y energía. Sin hardware adicional. Sin suscripción."*
2. **Problem / solution** — Short paragraph contrasting Apple Fitness (data, no coaching) and Whoop/Oura (coaching, but £30+/month and dedicated hardware). Corpus sits in between.
3. **Feature highlights** — 4–6 cards, each with a screenshot:
   - Daily readiness, strain & recovery
   - Goals & weekly roadmap
   - Voice and photo notes
   - Sleep insights & smart wake
   - Built around Apple Health (uses what your iPhone and Apple Watch already track)
   - On-device, private by design
4. **Lifestyle imagery band** — full-bleed photos of people running, lifting, cycling, walking. Quiet, real, not stocky.
5. **How it works** — 3 steps: Connect Apple Health → Set a goal → Get a daily plan.
6. **Privacy callout** — short, bold: *"Your health data never leaves your device. Only an anonymised daily snapshot is sent to generate coaching."* Links to `/privacy`.
7. **Final CTA** — App Store badge, large.
8. **Footer** — Links: Docs · Privacy · Contact (`dvpuchades@gmail.com`) · Language switcher.

### 3.2 Docs

Markdown-based. Side nav with sections, main column with content. v1 articles (titles only — Product will write copy):

- **Getting started**
  - What Corpus is
  - First-day setup (HealthKit permissions)
  - Setting your first goal
- **Daily use**
  - The morning check-in
  - Logging notes (text, voice, photo)
  - Reading your dashboard
- **Training**
  - The weekly plan
  - Goals & roadmap
- **Health signals**
  - Readiness, strain, recovery — what they mean
  - Sleep and smart wake
  - Body composition (smart scales)
- **Privacy & control**
  - Where your data lives
  - Deleting your data
- **FAQ**

Each article: H1 title, short summary, body, "Last updated" date.

### 3.3 Privacy policy

Plain-language, structured, scannable. Sections: data we collect, where it's stored (on-device + Anthropic API for coaching only), what we never collect, third parties (Anthropic only), user rights, contact.

- **Data controller:** David Puchades Todolí
- **Privacy contact:** dvpuchades@gmail.com
- **Effective date:** to be set at launch.

**Product to provide final legally-reviewed copy** before launch — developers should structure it as standard markdown with stable anchor IDs (`#data-we-collect`, `#third-parties`, `#your-rights`, etc.) so we can deep-link from the app.

---

## 4. Design

Match the app's visual language. The app is "Apple Fitness–inspired: dark backgrounds, bold typography, ring-based visualisations, smooth transitions."

### 4.1 Tokens

| Token | Value |
|---|---|
| Background | Deep black (#000) with subtle elevated surfaces (#0E0E10, #1A1A1D) |
| Text primary | #FFFFFF |
| Text secondary | #A1A1A6 |
| Accent | Purple #BF5AF2 (matches app body-composition accent) |
| Success / readiness | System green (#30D158) |
| Strain / warning | System orange (#FF9F0A) |
| Border / hairline | #2C2C2E |
| Font (UI / body / display) | **Inter** (variable, all weights 100–900). Self-hosted via [Fontsource](https://fontsource.org/fonts/inter) — single woff2 file covers every weight. Near-perfect SF Pro substitute, designed for screens, used by GitHub, Mozilla, etc. Licence: SIL OFL 1.1 (free for commercial use). |
| Font (mono) | **JetBrains Mono** (variable). Self-hosted via Fontsource. For any code or data tables in docs. Licence: SIL OFL 1.1. |
| Font stack | `'Inter Variable', 'Inter', system-ui, -apple-system, 'Segoe UI', sans-serif` — falls back to the OS font (SF on macOS/iOS) if Inter fails to load, so first paint is never blank. |
| Radius | 16–20px on cards, 999px on pills |
| Spacing | 8pt grid |

### 4.2 Motion

Subtle. Section reveals on scroll (fade + 8px translate). No parallax, no autoplaying video, no carousel. Respect `prefers-reduced-motion`.

### 4.3 Layout

- Max content width 1100px, generous side padding on desktop.
- Mobile-first. Hero device shot reflows below copy on narrow viewports.
- Screenshots displayed inside a subtle device frame or with a soft drop shadow on a dark surface.

### 4.4 Imagery

- App screenshots: PNG with transparent corners or pre-framed.
- Sports lifestyle: tasteful, ideally consistent grain/treatment so the band feels curated. Provided by Product in the repo under `/public/images/lifestyle/`.

### 4.5 Apple Health & Apple Watch references

Corpus is built on top of Apple Health and Apple Watch — that's a core part of the value prop and the site should say so prominently. **Do not, however, claim a formal partnership with Apple, do not use the Apple logo or "Made for Apple" badging, and do not use the Apple Health heart-and-rings glyph.** Descriptive language is fine and encouraged:

- ✅ "Built for Apple Health and Apple Watch"
- ✅ "Reads your Apple Health data"
- ✅ "Works with Apple Watch Series 4 and later"
- ❌ "Official Apple partner" / "Apple-approved" / Apple logo lockups

Apple's *Marketing Resources and Identity Guidelines* are strict on this — the descriptive references above are safe; visual lockups are not.

---

## 5. Tech

Recommended stack — happy to discuss alternatives:

- **Framework:** Astro (great for content sites, built-in i18n via `astro:i18n`, ships almost zero JS by default — important for SEO and Lighthouse).
- **Styling:** Tailwind CSS with the tokens above mapped to CSS variables.
- **Content:** Markdown (`.md` / `.mdx`) under `src/content/docs/{en,es}/...` using Astro Content Collections. Privacy policy is also markdown.
- **Hosting:** Cloudflare Pages, Vercel, or Netlify — whichever the team prefers. Static output, no server runtime needed.
- **Domain:** `corpus.dvpuchades.com` (confirmed). Configure the apex/root to redirect to `https://corpus.dvpuchades.com` if the parent domain is already in use elsewhere.
- **Repo layout:**
  ```
  /public/images/{app,lifestyle,icon}/    # provided by Product
  /src/content/docs/{en,es}/
  /src/pages/{en,es}/
  /src/i18n/{en.json,es.json}             # UI strings
  /src/components/
  /src/styles/
  ```

---

## 6. SEO & AI discoverability

This is a stated priority — both for traditional search and for being correctly summarised by LLMs (ChatGPT, Claude, Perplexity, Gemini).

### 6.1 Traditional SEO

- Static HTML for every page (no client-side rendering of content).
- Per-page `<title>`, meta description, canonical, OG / Twitter cards (with a default OG image per language).
- `sitemap.xml` (auto-generated, includes both languages with `xhtml:link` hreflang).
- `robots.txt` allowing all reputable crawlers including `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended`.
- `hreflang` alternates on every page (`en`, `es`, `x-default`).
- Lighthouse target: 95+ on Performance, Accessibility, Best Practices, SEO.
- Image `alt` text on every screenshot and lifestyle photo, in the page's language.
- Semantic HTML (`<main>`, `<article>`, `<nav>`, `<h1>` exactly once per page).

### 6.2 Structured data (JSON-LD)

Embed on the relevant pages:

- Home: `SoftwareApplication` (with `applicationCategory: "HealthApplication"`, `operatingSystem: "iOS 26"`, `offers.price: "0"`, `installUrl: "https://apps.apple.com/app/id6761331575"`).
- Home: `Organization` with logo and contact.
- Docs index: `Breadcrumb` and `WebSite` with `SearchAction` (even without on-site search, this is a strong signal).
- FAQ doc: `FAQPage`.

### 6.3 LLM-friendly signals

- Serve a top-level **`/llms.txt`** following [llmstxt.org](https://llmstxt.org) — a concise plain-text summary of what Corpus is, with links to the most important pages and docs. Generate one per language (`/llms.txt` and `/es/llms.txt`).
- Serve **`/llms-full.txt`** — concatenation of all docs as plain markdown for one-shot ingestion.
- Keep doc pages in clean, semantic markdown (LLMs ingest these well). Avoid hiding key facts inside images.
- Each page ends with a short, factual summary paragraph — humans skim it, LLMs quote it.
- FAQ structured as Q in `<h2>` / A in following paragraph — both Google and LLMs handle this format reliably.

---

## 7. Performance & accessibility

- Initial HTML < 50KB on the home page; total page weight including hero image < 500KB.
- Images served as AVIF/WebP with fallbacks, lazy-loaded below the fold, with explicit width/height.
- Self-host fonts (woff2, subsetted to Latin + Latin-Ext for Spanish accents).
- WCAG 2.2 AA: contrast checked against the dark palette, focus rings visible, all interactive elements reachable by keyboard.
- No tracking scripts at launch. If analytics are added later, use a privacy-friendly option (Plausible, Cloudflare Web Analytics) — never Google Analytics on a privacy-positioned product.

---

## 8. Assets Product will provide in the repo

- App icon (SVG + PNG @ multiple sizes, plus 32×32 favicon and 180×180 apple-touch-icon).
- App screenshots (per locale where text differs — EN and ES).
- Lifestyle photography for the home page band.
- Final EN and ES copy for every page (including privacy policy).

App Store URL is fixed: `https://apps.apple.com/app/id6761331575`.

---

## 9. Milestones

| Stage | Deliverable |
|---|---|
| M1 | Repo set up, tokens + layout shell, EN home page with placeholder copy |
| M2 | Docs system live with 2 sample articles, language switcher working end-to-end |
| M3 | All EN content in, SEO + structured data + `llms.txt` |
| M4 | All ES content in, hreflang verified, Lighthouse ≥ 95 across the board |
| M5 | Privacy policy finalised, deployed to production domain |

---

## 10. Decisions log

All v1 blockers resolved. This is now ready to hand to developers.

### Resolved

- ✅ **Domain:** `corpus.dvpuchades.com`
- ✅ **Hero copy (EN + ES):** see §3.1
- ✅ **Legal entity / data controller:** David Puchades Todolí
- ✅ **Privacy contact email:** dvpuchades@gmail.com
- ✅ **App Store URL:** `https://apps.apple.com/app/id6761331575`
- ✅ **Fonts:** Inter (UI/body/display) + JetBrains Mono (code) — both SIL OFL, self-hosted
- ✅ **Strava integration:** out of scope for this site (will revisit in a future version)
- ✅ **Apple Health positioning:** prominent descriptive references, no logo lockups or partnership claims (see §4.5)

### Deferred to v1.x

- Newsletter signup (will be added later if needed; developers may leave a hidden anchor or omit entirely)
- On-site docs search (ship in v1.1 if cheap to add)
- Analytics (none at launch; revisit with a privacy-friendly option if needed)
