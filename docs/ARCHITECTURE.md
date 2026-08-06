# Parent Club architecture

## Current approach

The site is deliberately static: plain HTML, CSS, and browser JavaScript. It is fast, inexpensive to host on Cloudflare Pages, and has no framework upgrade burden. `js/site.js` owns shared browser behaviour; page-specific code lives in its own file, such as `js/events.js`.

## Content management

Keep public, non-sensitive content in a simple source that non-technical editors can update:

- Events and course dates: a Google Sheet or a headless CMS.
- Page copy, FAQs, testimonials and blog posts: a headless CMS once editing these in files becomes inconvenient.
- Images: Cloudflare Images or a managed media library, with descriptive alt text and compressed WebP/AVIF derivatives.

Google Sheets are suitable for public schedules during the concept phase. Do not place attendee details, payment information, private notes, or API secrets in a public sheet or expose them to the browser.

## Integrations

Use server-side endpoints (Cloudflare Workers) as the boundary for real integrations:

1. A course booking button calls a Worker endpoint.
2. The Worker validates availability and creates a Stripe Checkout Session.
3. Stripe webhooks notify the Worker after payment; the Worker sends confirmations and records bookings.
4. The site only receives the resulting checkout URL and public booking status.

The same approach applies to contact/newsletter providers and Google reviews: keep keys on the Worker, apply rate limits, and return only the data the page needs.

## Before launch

- Replace the temporary local logo and generated concept image with the approved, licensed Parent Club assets when ready.
- Replace concept-only form feedback with a real provider endpoint.
- Add redirects for the existing Squarespace URLs, `sitemap.xml`, `robots.txt`, canonical URLs, analytics consent, and a privacy/cookie policy.
- Configure a Content Security Policy and image optimisation in Cloudflare.
- Test on real iOS and Android devices, keyboard-only navigation, and a screen reader.