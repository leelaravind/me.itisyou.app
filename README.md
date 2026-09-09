# me.itisyou.app

Personal freelance portfolio for Leela Aravind Karlapudi — independent builder, Chester, UK.

A single static page. No build step, no framework, no dependencies, no server-side code.

## Layout

```
public/
  index.html      the whole site
  styles.css      design tokens mirroring itisyou.app identity (dark default + light)
  main.js         theme toggle, scroll reveal, pointer parallax (all motion-gated)
  assets/         real screenshots, favicon, sample QA report PDF
wrangler.jsonc    Cloudflare Workers static-assets config
CONTENT-SPEC.md   the verified source copy every claim on the page traces back to
```

## Local preview

Open `public/index.html` directly, or serve it:

```bash
python -m http.server 8791 --directory public
```

## Deploy

Serves `public/` as static assets from a Cloudflare Worker — the same pattern the
`clean` project uses. There is no server-side code path.

```bash
wrangler deploy
```

`wrangler.jsonc` claims `me.itisyou.app` as a **custom domain**, which makes Cloudflare
create the DNS record for the `me` subdomain on first deploy. Note that `itisyou-main`
deliberately uses *routes* rather than custom domains, to avoid taking ownership of
pre-existing proxied DNS records — that concern does not apply here, because `me` is a
new subdomain with no existing record. If a record for `me` does already exist, switch
to the route form instead:

```jsonc
"routes": [{ "pattern": "me.itisyou.app/*", "zone_name": "itisyou.app" }]
```

Cost: £0 on the existing Workers plan. No new services, APIs or backend.

## Content rules

`CONTENT-SPEC.md` is the source of truth. Every service, case study and status badge on
the page was checked against repository evidence before being written, and several
claims were deliberately narrowed to match what the evidence actually supports.

When editing, keep to these:

- No invented testimonials, client logos, revenue figures or user counts.
- No prices — services say "contact me for a scoped quote".
- Project status badges (Live / Prototype / Research / Private / Frozen) must reflect
  reality, not intent.
- Independent projects are labelled as such, never implied to be client commissions.
- The contact link is a real `mailto:` — no form, so there is no way to show a false
  "message sent" state.

## Accessibility and testing notes

Verified in Chrome at a 1568×726 viewport: renders in both themes, theme toggle
persists, anchor navigation works, no console errors, no horizontal overflow, and
contrast ratios pass WCAG AA in both themes (measured, not assumed).

Not verified: true mobile/tablet rendering. The automation environment could not
resize the viewport below 1920px, so small-screen behaviour was reviewed in CSS
(fluid `clamp()`, `auto-fit` grids, no fixed pixel widths) rather than seen. Worth a
real device check before sharing the link widely.
