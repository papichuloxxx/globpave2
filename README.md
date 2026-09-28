# Globpave Construction

The public website for Globpave Construction, a Zimbabwean construction company providing civil works, building construction, paving, plumbing, roofing, interiors, fencing, electrical installation and property maintenance.

## Highlights

- Responsive editorial design using Globpave's project photography
- Six complete service categories and project gallery
- Project planner with a review-first WhatsApp and email enquiry flow
- Local business structured data, canonical URLs, route-specific metadata, sitemap and robots directives
- Accessible navigation, descriptive image text and mobile contact controls

## Local development

Use Node.js 20.9 or newer.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run check
```

This runs ESLint followed by a production Next.js build. GitHub Actions runs the same checks for pushes and pull requests.

## Important routes

- `/` — landing page and project planner
- `/services` — construction capabilities
- `/projects` — filterable project gallery
- `/process` — project process
- `/about` — company approach
- `/contact` — telephone, email, WhatsApp and office address
- `/quote` — detailed enquiry review flow

## Deployment

Pushes to `main` publish a static export to [GitHub Pages](https://papichuloxxx.github.io/globpave2/). The deployment workflow sets the `/globpave2` base path used by GitHub project pages.

After connecting the final domain, verify it in Google Search Console and submit `/sitemap.xml`.

The canonical production URL is `https://www.globpaveconstruction.co.zw`.
