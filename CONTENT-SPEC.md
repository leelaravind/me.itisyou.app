# me.itisyou.app — verified content spec

Every claim below is evidence-backed from a repository inventory (2026-09-09).
**Do not add claims that are not in this file.** No invented metrics, testimonials, clients or prices.

---

## Identity / contact (verified)

- **Name:** Leela Aravind Karlapudi
- **Location line:** Based in Chester, UK · Available for remote projects
- **Email (publish):** leelaaravindkarlapudi2002@outlook.com
- **GitHub:** https://github.com/leelaravind
- **LinkedIn:** https://www.linkedin.com/in/karlapudileelaaravind
- **Education:**
  - MSc Artificial Intelligence — Liverpool John Moores University, 2024–2025
  - B.Tech Computer Science Engineering — Jawaharlal Nehru Technological University, Anantapur, India, 2020–2024
- **AI tools used:** Claude Code (primary coding assistant), ChatGPT (architecture, planning, review, debugging strategy), Google AI tools

Do NOT publish: phone number, visa/right-to-work status, financial circumstances, home address, current employment.

---

## 1. Hero

- Eyebrow: `INDEPENDENT BUILDER · CHESTER, ENGLAND`
- H1: **Leela Aravind Karlapudi**
- Headline (sub-h1, large): **I build practical web tools — and check that they actually work.**
- Intro paragraph:
  > I'm an AI graduate and independent builder based in Chester. I turn ideas into scoped projects, direct AI-assisted development, and then investigate how the results actually behave. Most of what I know comes from building and testing my own products end to end.
- Primary button: **Discuss a project** → `#contact`
- Secondary button: **View my work** → `#work`
- Meta line under buttons: `Based in Chester, UK · Available for remote projects`
- Hire-me clarity line: `Available for: small websites and landing pages · website testing and issue reports · AI workflow planning · site updates and fixes`

---

## 2. Services — "What you can hire me for"

Intro line: *No fixed price list. Tell me the goal and I'll scope it.*
Every card ends with the CTA text: **Contact me for a scoped quote**

### Service 1 — Small websites and landing pages
- **Who it helps:** Sole traders, freelancers and small businesses who need a clear, fast page that explains what they do.
- **You get:** A responsive site or landing page, built and deployed, with the content structure agreed up front and one round of revisions.
- **I need from you:** Your text and images (or a clear brief so I can draft them), plus access to wherever the domain is managed.
- **Limits:** Small scope by design — a handful of pages. Not e-commerce platforms, custom dashboards or ongoing content operations.

### Service 2 — Website testing and issue reports
- **Who it helps:** Anyone who suspects their site has problems but wants evidence rather than opinions.
- **You get:** A written report with reproducible steps, screenshots, expected vs actual behaviour, impact, and a suggested fix for each issue — plus an explicit list of what I did *not* test.
- **I need from you:** The URL, and confirmation you own or are authorised to test the site.
- **Limits:** Functional, content and layout checking in a real desktop browser. Not a security audit, not penetration testing, not load testing, and not a certified accessibility conformance statement.

### Service 3 — AI workflow planning and setup
- **Who it helps:** People who know AI could help with a repetitive task but don't know how to break it down or where to put the human checks.
- **You get:** A written workflow: the task split into steps, which step each AI tool handles, where a human reviews, and what "done" looks like — plus a working setup of the parts we agree on.
- **I need from you:** A walkthrough of how the task is done today, and examples of good and bad output.
- **Limits:** Practical workflow design using existing tools. Not custom model training, not production ML systems, and not anything requiring your confidential data to leave your control.

### Service 4 — Website updates and small fixes
- **Who it helps:** Owners of an existing site who need changes made without hiring an agency.
- **You get:** The agreed changes made, tested and deployed, with a short note on what changed and how I checked it.
- **I need from you:** Access to the site or repository, and a clear list of what you want changed.
- **Limits:** Work is capped at the scope we agree before I start. Rescues of badly broken systems get quoted separately after I look.

### On request (small print block, not a card)
> **Short-form video editing** — basic edits from footage you supply. Ask me before assuming availability; I don't currently show public samples.

---

## 3. Selected work — 6 case studies

Header note (must appear): *These are my own independent projects, not paid client commissions.*

Each card has: Problem · What I did · How AI helped · Evidence · Status badge.

### CS1 — Website QA report (sample)
- **Status badge:** `Sample deliverable`
- **Link:** local PDF `ITISYOU-Homepage-Sample-QA-Report.pdf` (7 pages)
- **Problem:** Anyone hiring a tester wants to see the actual output, not a promise.
- **What I did:** Audited my own homepage in a real desktop browser: content consistency, heading structure, link destinations, colour-contrast spot checks and a skip-link markup check. Found three reproducible content defects, each reproduced twice with screenshot evidence — a pricing statement on a product card that contradicted the site's own funding disclosure, a status badge whose tooltip contradicted the completed work described on the same card, and a missing space in a paragraph.
- **How AI helped:** AI-assisted browser automation drove the page inspection and drafted the report; I set the scope, judged which findings were real, and rewrote every conclusion the evidence didn't support.
- **Evidence / limits:** Chrome 152 on Windows at a real 1920×945 viewport. Automated mobile and tablet checks were **not** completed — the tooling couldn't resize the viewport, and the report says so rather than claiming emulated passes. Console errors are recorded as *inconclusive*, not passed.
- **Why it matters:** The report states what wasn't tested as prominently as what was. That's the standard I'd apply to your site.

### CS2 — search.itisyou: finding and stopping a runaway
- **Status badge:** `Paused by design`
- **Problem:** A scheduled rebuild on my own search engine quietly ballooned into roughly 153 million database row writes — against a corpus of only about 2,000 documents.
- **What I did:** Stopped the bleeding first: cleared the cron triggers and paused the crawl queues without deleting anything. Then diagnosed it from read-only analytics. Two faults compounded — every index version stored a complete copy of the corpus, and the rebuild trigger compared two counts whose gap could never close, so it rebuilt everything every 15 minutes forever. I rewrote the index so a build costs only what actually changed, added a lock, a daily write budget, and a refusal to run when that budget is red.
- **How AI helped:** I used AI to work through hypotheses and read the analytics faster; the incident timeline, the decision to stop before investigating, and the budget design were mine.
- **Evidence:** Written up as an architecture decision record with the full timeline, plus free-tier budget and storage-monitoring documents. Scheduled runs remain deliberately off.
- **Why it matters:** Most of engineering is what you do when something is quietly wrong. Stop, preserve evidence, then fix the cause.

### CS3 — clean.itisyou.app
- **Status badge:** `Live`
- **Link:** https://clean.itisyou.app
- **Problem:** Messy PDFs, CSVs and spreadsheets need restructuring, but uploading a financial or personal file to a stranger's server is a real cost.
- **What I did:** Built a browser-first restructuring tool covering all three formats, each with its own detector, parser, transform and export path running in a dedicated web worker. Repeated headers get stripped, ragged tables squared up, every change listed, anything uncertain held for review, and the original bytes never touched.
- **How AI helped:** AI-assisted implementation across the format engines; I designed the pipeline, the change-log/undo model, and the confidence rules for what gets held back.
- **Evidence:** 40 test files spanning unit, integration, golden-file and end-to-end tests. The privacy claim is structural, not marketing: it deploys as static assets with no server-side code path, so there is nowhere for a file to be uploaded to.
- **Latest work:** A 320px reflow fix and adversarial test hardening.

### CS4 — Project Intelligence Agent
- **Status badge:** `Private system`
- **Problem:** I work across a lot of repositories, and the honest answer to "what does this project actually do now?" was usually buried in stale documentation.
- **What I did:** Built a local-first tool that makes a codebase answerable. Point it at a folder or Git repository and it works out what the project is, indexes code and documentation in a structure-aware way, then answers engineering questions with citations back to exact files and line ranges — and refuses to answer when the evidence isn't there. It flags where documentation and code have drifted apart, selects the right tests to run when something changes, and can attempt a bounded fix in an isolated copy, leaving my real working tree untouched and every change reversible.
- **How AI helped:** This is the clearest example of what I actually do — designing where AI is allowed to act, and where it must stop and cite evidence instead.
- **Evidence:** Certified against a 26-point acceptance matrix with recorded evidence for each point, alongside unit, integration, contract, end-to-end and stress test suites.
- **Limits:** Private system, runs entirely on my own machine, no public demo. Described here in outline only.

### CS5 — Quantum-assisted intrusion detection (DrunkQubit)
- **Status badge:** `Research`
- **Problem:** Would a small quantum classifier beat an equivalent classical one on network intrusion detection — or just look impressive?
- **What I did:** Built a hybrid pipeline: a classical autoencoder compressing traffic features, then a 4-qubit variational classifier, benchmarked against a classical "twin" head on the identical inputs. Pre-registered the prediction before running, then executed on real IBM quantum hardware.
- **How AI helped:** AI-assisted implementation of the pipeline and analysis code; the experimental design, pre-registration and the decision to publish a negative result were mine.
- **Evidence:** Run on IBM's `ibm_marrakesh` backend, 183 seconds of billed QPU time across four recorded job IDs, 1,024 shots, three random seeds.
- **The finding:** A statistical tie, and the repository says so in its own words — *"24 quantum parameters MATCH a classical head on the same 4-number diet"*, not "beat". The hardware also contradicted my pre-registered prediction, and I wrote up the confound rather than hiding it.
- **Why it matters:** I'd rather report a null result accurately than sell a result that doesn't hold.

### CS6 — Thraksha Guardian
- **Status badge:** `Frozen prototype`
- **Problem:** Can a phone examine its own security, explain it in plain language, and act on it reversibly — with nothing leaving the device?
- **What I did:** Built an Android proof of concept where a small language model runs entirely on-device and interprets findings, but never holds authority: it can only propose typed actions that a deterministic policy engine approves or refuses, and every action is snapshotted so it can be undone. Findings are graded by how they were established rather than reduced to a single score, and the audit log is hash-chained.
- **How AI helped:** AI-assisted Android implementation; the separation between interpretation and authority was the design question I set out to answer.
- **Evidence:** A signed private-alpha build, phases 0–12.1 passing, with real-device evidence from a Samsung S20 FE on Android 13.
- **Limits, stated plainly:** Sideload-only with no Play review, all real-world evidence from a single device, no independent security certification, and no encrypted-traffic inspection. Deliberately frozen.

---

## 4. More projects (compact, grouped by status)

Intro: *Independent work. Status is what the evidence supports today, not what was planned.*

**Live**
- **kits.itisyou.app** — Browser-local developer utilities. 135 tools declared in a single canonical registry, 137 pages built, 70 unit test files and 19 browser test specs. → https://kits.itisyou.app
- **qa.itisyou.app** — A toolkit for testers: around 24 tools covering requirements, test-case design, coverage, boundary and pairwise analysis, and evidence building. Version 1.0.1 came out of a deliberate adversarial campaign against my own work that found and fixed 19 defects. → https://qa.itisyou.app
- **space.itisyou.app** — A quiet corner of the web with no streaks, feeds or notifications. Verified live and checked at both desktop and 390px widths. → https://space.itisyou.app
- **dev.itisyou.app** — Cross-vendor engineering playbooks where evidence is attached to a specific revision and environment. Partially complete, and its own status document uses an explicit honesty ladder: *"A successful build is not TESTED. A successful deploy is not VERIFIED."* → https://dev.itisyou.app
- **itisyou.app** — The main network site. → https://itisyou.app

**Built, not released**
- **Bank Format Studio** — Offline Windows converter and validator for MT940, camt.053, CSV and XLSX bank formats. Installer built and checksummed; release held pending an anti-virus vendor review of a false positive.
- **PreflightQC** — Offline video-export spec validator with 12 platform presets. Packaged locally but explicitly not distributable, and never yet run end to end against real media.
- **products.itisyou** — E-commerce implementation with server-side pricing, payment-intent verification, idempotent webhooks and stock enforcement. Passes 994 tests including full checkout journeys in payment test mode. Never launched: no customers, no sales, no revenue.
- **plan.itisyou** — Planning workspace where every value is typed as actual, assumption or calculated, and provenance is enforced at compile time — putting AI in the calculation path is a type error.

**Research and paused**
- **AI-native phone OS** — A frozen architecture specification for a phone where agents propose and deterministic code authorises, with no inbound endpoints and egress denied by default. Setup-stage work only on real hardware; no OS exists.
- **itisyou-os** — An experimental x86_64 Rust operating system that boots under emulation. Research only — explicitly not for real hardware.
- **browse.itisyou** — A privacy-first desktop browser shell with AI off by default. Phase 1 of 4, paused. No downloadable browser.
- **Video production pipeline** — A local-first automated video pipeline using Remotion, FFmpeg and local text-to-speech, producing rendered drafts with per-scene quality frames for review. Nothing has been published or monetised.
- **Chaty** — A conversational-AI platform with a human-in-the-loop training review queue. Retired over hosting costs; kept as a case study.

---

## 5. Skills and approach

**Grouped by outcome — no percentages, no bars, no "expert" badges.**

- **Building** — Small websites, landing pages, browser-based tools, and content or feature changes to sites that already exist.
- **Checking** — Reproducible issue reports, user-journey walkthroughs, boundary and edge-case thinking, and being explicit about what was not tested.
- **Organising** — Turning a vague goal into a scoped brief, breaking work into tasks, coordinating AI agents, and putting review checkpoints where they matter.
- **Investigating** — Debugging, incident response, root-cause work, and reading evidence rather than trusting a status document.
- **Writing** — Technical documentation, architecture decision records, and honest status reporting.

**Tools I've used in my own projects** (separate list, plainly labelled):
`Python` `JavaScript / TypeScript` `React` `Next.js` `Node` `FastAPI` `Cloudflare Workers, Pages & D1` `Supabase` `Stripe (test mode)` `Resend` `SQLite` `Playwright` `Kotlin / Android` `PyTorch` `Qiskit` `Remotion / FFmpeg`

Caveat line under the tools list (must appear):
> Used in my own projects, at the depth those projects needed. I direct and review AI-assisted development rather than claiming expert command of every framework here.

---

## 6. How I work

1. **Understand your goal** — What outcome are you actually after, and who is it for?
2. **Agree a small, clear scope** — Written down, including what's out of scope, before anything starts.
3. **Build or investigate** — AI-assisted, reviewed by me at each step.
4. **Verify and show evidence** — You see what I checked, and what I didn't.
5. **Deliver and revise** — Handover plus the agreed round of revisions.

Honest note (must appear):
> I use AI tools throughout my work and I review everything they produce. Anything you share with me may pass through those tools, so please don't send me material you can't share with a third-party AI service.

---

## 7. About

> I finished an MSc in Artificial Intelligence at Liverpool John Moores University in 2025, after a B.Tech in Computer Science Engineering in India. Since then most of my learning has come from building my own products and then trying to break them.
>
> What I enjoy is understanding how a system actually works — spotting where it will fail, splitting a messy problem into tasks a machine can do reliably, and deciding where a person still has to look. I use AI heavily, but I don't hand it authority: the interesting design question is always where the evidence has to be checked.
>
> That's the same habit I bring to client work. I'd rather tell you what I haven't verified than hand over something that looks finished.

---

## 8. Contact

- Heading: **Discuss a project**
- Body: *Tell me what you're trying to achieve and I'll tell you honestly whether I can help.*
- Prompt list — "It helps if you include:"
  - What you want built, fixed or checked
  - A link to your existing site, if you have one
  - Any deadline you're working to
  - Roughly what budget you have in mind
- **Email link:** `mailto:leelaaravindkarlapudi2002@outlook.com` (must be a real mailto, no form)
- GitHub and LinkedIn links as above.
- Honest note: *I'm a one-person operation, so replies may take a day or two. No guaranteed turnaround until we've agreed a scope.*

**Must NOT appear anywhere:** prices, invented testimonials, client logos, revenue or user statistics, fake "message sent" states, guaranteed response times, stock-photo portraits.

---

## Footer
`© 2026 Leela Aravind Karlapudi · Chester, England` + the three links.
Small line: *Independent projects shown here are my own work, not client commissions.*
