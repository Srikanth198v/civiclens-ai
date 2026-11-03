# CivicLens AI

An AI-powered civic intelligence and community problem reporting platform concept. CivicLens aims to help residents document local infrastructure concerns and help communities see patterns more clearly.

> **Current status:** this repository is an initial frontend and planning foundation. The landing page is a static concept preview. Report submission, accounts, live maps, AI analysis, database, and dashboard data are not implemented or connected.

## Problem
Residents often encounter potholes, waste issues, water disruptions, drainage problems, broken streetlights, or damaged public infrastructure but lack a simple, organized way to document what they see. Reports can be fragmented and hard for a community to understand collectively.

## Vision
Build a respectful, accessible platform where people can share local concerns with text and optional images, understand how information is handled, and organize reports into a useful community picture. Any future AI should assist with organization, communicate uncertainty, and remain reviewable by people.

## Planned features
- Accessible issue reporting with category, optional photo, and consent-based location.
- Report receipt, status, and correction/deletion processes.
- Community report list with filters and an optional map view.
- Optional AI-assisted classification and summaries behind a trusted server boundary.
- Moderation, privacy controls, and transparent report visibility.

These are roadmap goals, not working features. The current app has only a responsive static landing page with illustrative, clearly labeled concept UI. It does not send or store reports and displays no live civic data.

## Technology
- React 19 and TypeScript in strict mode.
- Vite for local development and production builds.
- Tailwind CSS v4 using `@tailwindcss/vite`.
- Lucide React icons.
- Supabase is a documented backend candidate only; it is not installed or connected.
- AI and map providers have not been selected or integrated.

## Architecture
```text
src/
  components/  reusable presentation components
  pages/       screen-level composition
  layouts/     shared navigation and page shell
  hooks/       reusable UI/browser behavior
  lib/         app constants and cross-cutting helpers
  services/    future external API boundaries
  types/       shared domain contracts
  utils/       small pure helpers
public/        static assets served by Vite
.kiro/
  steering/    durable product, technology, and structure guidance
  specs/       MVP requirements, design, and ordered tasks
```

The current service module is an explicit unavailable boundary, not a functioning submission implementation. Read [`.kiro/steering/`](.kiro/steering/) and [the MVP spec](.kiro/specs/civiclens-mvp/) for the working product plan.

## Local setup
Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
git clone https://github.com/Srikanth198v/civiclens-ai.git
cd civiclens-ai
npm install
cp .env.example .env.local
npm run dev
```

No backend credentials are needed to run the current static concept. The `.env.example` values are placeholders only. Do not put an AI provider secret in a `VITE_*` variable or expose it to the browser. Future server-side integrations must use a protected server environment.

## Development commands

```bash
npm run dev        # start Vite development server
npm run typecheck  # run strict TypeScript checks
npm run build      # type-check and create the production bundle
npm run preview    # preview the production bundle locally
```

## Kiro usage
This repository keeps project guidance and the MVP spec under the root `.kiro/` directory. Use the steering documents as durable context and the `civiclens-mvp` requirements, design, and tasks as planning artifacts when working in Kiro. These files are documentation and specifications only; no Kiro workflow or task completion is claimed by their presence.

## Roadmap
1. Validate user needs, operating model, report lifecycle, and launch region.
2. Define privacy, moderation, retention, and location-precision policies.
3. Select backend, authentication, media storage, mapping, and AI providers.
4. Implement secure API/data foundations and accessible report capture.
5. Add moderated report browsing, status workflows, and optional AI suggestions.
6. Test security, accessibility, operations, and a small community pilot before launch.

## License
This project is licensed under the MIT License. See [`LICENSE`](LICENSE).
