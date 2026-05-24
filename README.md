# ConciergeGh Landing Page

Marketing site for **ConciergeGh** — a modern property management system built for property owners in Ghana. Includes rent tracking, tenant records, financial reporting, maintenance logging, a tenant portal, and a full audit trail.

## Tech stack

- Static HTML — no build step required
- Tailwind CSS via CDN
- Inter font from Google Fonts
- Vanilla JavaScript for the pricing toggles and form submission
- Formspree for demo-request submissions

## Project structure

```
concierge-parent-landing/
├── index.html      Single-page landing site (hero, features, modules, pricing, projects, contact)
├── styles.css      Custom CSS — hero gradient, grid pattern, pricing toggle button states
└── README.md       You are here
```

## Running locally

Open `index.html` directly in any browser — no server, build, or install required.

For a more realistic local preview (proper HTTP, hot reload), run any static server from the project folder:

```bash
# Python
python3 -m http.server 8000

# Node (if you have npx)
npx serve
```

Then visit `http://localhost:8000`.

## Editing content

Most content sits in `index.html` under clearly-labelled section comments:

- `<!-- ============== NAV ============== -->`
- `<!-- ============== HERO ============== -->`
- `<!-- ============== WHY / FEATURES ============== -->`
- `<!-- ============== MODULES ============== -->`
- `<!-- ============== PRICING ============== -->`
- `<!-- ============== OTHER PROJECTS / RESTAURANT RECOMMENDER ============== -->`
- `<!-- ============== CONTACT / DEMO ============== -->`
- `<!-- ============== FOOTER ============== -->`

Search for the section comment to jump straight to it.

### Theme colour

The brand green palette is defined inside the Tailwind config block at the top of `index.html` (`tailwind.config`). Change the `brand` colour scale there to re-theme the site.

### Pricing toggles

The pricing section has two interactive controls — a global Monthly/Annual toggle and an inline Basic/Plus toggle on the Starter and Growth cards. Both are driven by a small `pricingState` object in the `<script>` block at the bottom of `index.html`. Elements with `data-billing`, `data-variant`, or `data-tier` attributes are shown/hidden based on the current state.

## Form integration (Formspree)

The demo-request form posts to a Formspree endpoint:

```html
<form action="https://formspree.io/f/xeedlaol" method="POST">
```

Submissions are sent via `fetch()` so the page doesn't reload. On success, the form clears and shows a confirmation message inline. To change the recipient or settings, manage the form at [formspree.io](https://formspree.io).

The honeypot field (`_gotcha`) is in place to catch spam bots.

## Contact details

- **Email:** info@conciergegh.com
- **Phone / WhatsApp:** +233 (0)55 840 4897
- **Location:** Accra, Ghana

These appear in the contact section of `index.html` and the footer — update both places if details change.

## Deployment

The site is static, so it can be deployed to any host that serves static files. Recommended options:

- **Cloudflare Pages** — best performance for African audiences, generous free tier
- **Netlify** — drag-and-drop deploys via [app.netlify.com/drop](https://app.netlify.com/drop)
- **Vercel** — `git push` deploys, good if migrating to Next.js later
- **GitHub Pages** — free, tied to a GitHub repo

No build command is required. Output directory is the project root (`/`).

## License

© ConciergeGh. All rights reserved.
