# Parent Club website concept

A lightweight, accessible replacement for the current Squarespace site. It uses plain HTML, CSS and JavaScript so it can be hosted cheaply on Cloudflare Pages and maintained without a framework build step.

## Project layout

- `*.html` — public pages
- `styles.css` — shared design system and responsive styles
- `js/site.js` — shared navigation, progressive reveal and concept-form behaviour
- `js/events.js` — public events feed from Google Sheets
- `Images/` — local image assets and replacement notes
- `docs/ARCHITECTURE.md` — content, payment and integration plan
- `docs/COMPONENTS.md` — reusable UI patterns for future features

## Editing content

Most page content is currently written directly in the relevant HTML file. Events are loaded from the published Google Sheet configured in `js/events.js`; only public event information should be kept there.

The newsletter and contact forms are deliberately concept-only: they show the intended confirmation state but do not send data. Connect them to a server-side endpoint before launch.

## Local preview

Serve the folder with any static web server, then open `index.html`. For example, with Node installed:

```sh
npx serve .
```

## Deployment

Deploy the repository to Cloudflare Pages. Add redirects from the existing site before changing the domain, and complete the launch checklist in [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

## Guardrails for future work

- Keep browser code modular: shared behaviour in `js/site.js`, page-specific behaviour in a separate file.
- Keep payment, forms, newsletters, reviews and secrets behind Cloudflare Worker endpoints.
- Store images locally or in a controlled media service rather than a Squarespace CDN.
- Preserve semantic HTML, visible focus states and mobile layouts as new components are added.