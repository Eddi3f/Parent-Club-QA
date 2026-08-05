# Parent Club Website

A modern, lightweight replacement for the existing Parent Club Squarespace website.

The project is built using plain HTML, CSS and JavaScript with dynamic content loaded from Google Sheets. The aim is to create a fast, maintainable website that is easy for non-technical users to update while avoiding ongoing platform costs.

---

## Project Goals

- Replace the existing Squarespace website
- Improve website speed and responsiveness
- Reduce ongoing hosting costs
- Make courses and events easy to update without editing HTML
- Keep SEO and existing URLs where possible
- Build a scalable platform for future features

---

## Tech Stack

Frontend
- HTML5
- CSS3
- Vanilla JavaScript

Hosting
- GitHub (source control)
- Cloudflare Pages (planned production hosting)

Content Management
- Google Sheets
- OpenSheet API (JSON)

Future Integrations
- Stripe Checkout
- Cloudflare Workers
- Google Reviews
- Google Analytics
- Google Search Console

---

## Project Structure

```text
Parent Club/
│
├── index.html
├── about.html
├── events.html
├── our-services.html
├── blog.html
├── contact.html
├── faq.html
├── courses-store.html
│
├── styles.css
│
├── Images/
│
├── js/
│   ├── app.js
│   ├── events.js
│   └── courses.js (future)
│
└── README.md
```

---

## Dynamic Content

The website loads dynamic information from Google Sheets.

Current:

- Events

Planned:

- Courses
- Testimonials
- Blog summaries
- FAQs

Google Sheets are converted to JSON using:

https://opensheet.elk.sh/

Example:

```
https://opensheet.elk.sh/SPREADSHEET_ID/SheetName
```

---

## Development Workflow

1. Open the project in Visual Studio Code.
2. Make changes.
3. Test locally using Live Server.
4. Commit changes.
5. Push to GitHub.
6. Cloudflare Pages automatically deploys the latest version.

---

## Git Workflow

Current development uses the `main` branch.

Future workflow:

- `main` → Production website
- `development` → New features before publishing

Commit messages should be meaningful.

Examples:

```
Added Google Sheets event integration

Updated About page

Improved mobile navigation

Fixed event card spacing
```

---

## Future Roadmap

### Phase 1

- Complete website redesign
- Responsive layouts
- Google Sheets event integration
- Google Sheets course integration

### Phase 2

- Replace Squarespace payments
- Stripe Checkout
- Better booking flow
- Contact forms

### Phase 3

- Cloudflare Workers
- Automatic booking confirmations
- Email notifications
- Availability tracking
- Calendar integration

---

## SEO

Keep existing URLs wherever possible.

Example:

```
/about
/events
/contact
```

Do not change URLs unless absolutely necessary.

Future additions:

- sitemap.xml
- robots.txt
- Open Graph metadata
- Structured data

---

## Assets

Images are stored locally inside:

```
Images/
```

Avoid linking to Squarespace CDN where possible.

Preferred filenames:

```
logo.png

social.png

sarah-bond.png

clarissa-smith.png
```

Use lowercase filenames with hyphens.

---

## Code Style

- Use semantic HTML.
- Keep CSS reusable.
- Avoid inline styles unless necessary.
- Keep JavaScript modular.
- Comment complex logic.
- Prefer reusable components over duplicated code.

---

## Future Improvements

- Google Reviews integration
- Blog search
- Course filtering
- Admin dashboard
- Newsletter signup
- Booking management
- Waiting lists
- Image optimisation
- Accessibility improvements

---

## Production Checklist

- Custom domain connected
- SSL enabled
- Google Analytics
- Search Console
- Favicon
- Sitemap
- Robots.txt
- Cookie banner
- Broken link check
- Mobile testing
- Accessibility review

---

## Notes

This project aims to replace the existing Squarespace website while retaining the Parent Club branding and improving flexibility, performance and maintainability.

The long-term goal is to allow non-technical users to manage events and courses through Google Sheets while using modern services such as Cloudflare and Stripe for hosting, security and payments.
