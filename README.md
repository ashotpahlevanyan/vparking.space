# VParking Armenia — Website

Marketing site for VParking Armenia LLC — vertical lift parking systems for Yerevan and the South Caucasus.

A static website: plain HTML, CSS and JavaScript. No build step, no framework, no dependencies to install. It runs in any modern browser and hosts anywhere.

## Project structure

```
vparking-website/
├── index.html        # All page content and structure
├── css/
│   └── styles.css    # All styling (colors, type, layout, responsive rules)
├── js/
│   └── main.js       # Scroll reveals, sticky header, hero animation
├── assets/           # Drop partner logos / images here
└── README.md
```

## View it locally

Just open `index.html` in a browser. For everything to behave exactly as in production (fonts, relative paths), serve it from a local web server instead of double-clicking:

```bash
# from inside the vparking-website folder
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Deploy

It's a static site, so any static host works. Easiest options:

- **Netlify / Vercel / Cloudflare Pages** — drag the `vparking-website` folder into their dashboard, or connect a Git repo. Free tier is enough.
- **GitHub Pages** — push the folder to a repo and enable Pages.
- **Your own `vparking.space` hosting** — upload the contents of this folder to the web root (e.g. `public_html/`) via FTP/cPanel.

No server-side code is required.

## Customize

**Colors and fonts** live at the top of `css/styles.css` under `:root` as CSS variables — change `--signal` (the amber accent), `--ink` (the dark base), etc. in one place and the whole site updates. Web fonts load from Google Fonts via the `<link>` in `index.html`.

**Text content** is all in `index.html`, organized into clearly commented sections (HERO, PROBLEM, SOLUTIONS, PLANS, PROCESS, etc.).

**Partner logos** — partners currently show as styled text in the "Working with" strip (search `class="client"` in `index.html`). To use real logos, drop image files in `assets/` and replace each `<span class="client">…</span>` with `<img src="assets/your-logo.svg" alt="Partner name" />`.

**Contact links** — WhatsApp (`wa.me/…`) and email (`mailto:…`) links are wired up in the CONTACT section. Update the numbers/addresses there if they change.

## Placeholders to confirm before launch

- Prices are shown as "on request" / "financed purchase" rather than figures — add real pricing if/when you want it public.
- Capability claims (seismic, EV, etc.) are phrased as systems you *specify*; tighten once your supplier and certifications are locked.
- Manufacturer names are intentionally **not** on the public site. Keep them for private B2B decks.
- Single-language (English). Armenian / Russian versions can be added on request.

---

© 2026 VParking Armenia LLC · Yerevan, Armenia · vparking.space
# vparking.space
