# Reusable components

The design is intentionally built from small, repeatable patterns rather than page-specific one-offs.

## Available patterns

- `btn`, `btn-primary`, `btn-outline`, `btn-sm` — action links and buttons.
- `section`, `container`, `section-head`, `eyebrow` — consistent page rhythm and headings.
- `info-card`, `course-card`, `blog-card`, `help-panel` — content-card variations.
- `grid-2`, `grid-3`, `courses-grid` — responsive content grids; they stack below 860px.
- `template-panel` and `contact-form-card` — conversion/form containers.
- `map-placeholder` — a privacy-friendly location block; replace with an accessible map embed only after choosing a provider.

## Planned extension points

When adding a new feature, keep the data and browser behaviour separate from the markup:

- Courses/Stripe: a `course-card` fed by public course data; the call-to-action should point to a Worker-created Checkout session.
- Testimonials and Google Reviews: use an `info-card`-style component and fetch only public, sanitised review fields from a Worker.
- Blog posts: retain the `blog-card` summary pattern, then add individual semantic article pages or generate them from a CMS.
- Events: keep `js/events.js` as the source-specific adapter; do not put spreadsheet parsing into page markup.
- Newsletter: reuse the existing form pattern with a server-side provider endpoint and explicit consent wording.
- Staff and galleries: use descriptive local image filenames, intrinsic image dimensions, meaningful alt text and lazy loading.