# CivicLens AI product steering

## Product vision
CivicLens AI is a community-first civic intelligence platform concept. It aims to make it easier for residents to document local infrastructure concerns and help communities organize, understand, and communicate about them. AI is an assistive layer, not an authority or a replacement for public services or human judgment.

## Target users
- Residents who want to report an issue they observe in their neighborhood.
- Community organizers who need a clearer view of recurring local concerns.
- Civic teams and service organizations that may need well-structured, actionable reports.
- Project maintainers who need a safe, accessible, and maintainable foundation.

## Core problems
- Reporting channels can be fragmented, difficult to use, or hard to follow.
- Free-form descriptions and photos are difficult to aggregate into a shared picture.
- Residents may not know whether a report was received or what happens next.
- A map or automated label can create privacy, accuracy, and expectation risks if presented without context.

## MVP features to plan
1. Accessible citizen report submission with description, category, optional image, and user-controlled location.
2. Report review and clear submission status, with no promise of municipal resolution.
3. A browseable dashboard with filters and map/list alternatives.
4. Optional AI assistance for categorization and concise summaries, with uncertainty and correction controls.
5. A minimal, privacy-conscious account and moderation model only where necessary.

These are product goals, not implemented features. The repository foundation currently contains a static frontend concept and planning documents only.

## User experience principles
- Make the primary reporting path understandable, mobile-friendly, and low-friction.
- Use plain language, visible status, and helpful error recovery.
- Do not imply that a report is verified, escalated, or resolved unless the system has evidence.
- Keep AI output reviewable, explain when it is uncertain, and let people correct it.
- Provide list and text alternatives to map-only or visual interactions.
- Distinguish examples and concept mockups from real community data.

## Accessibility requirements
- Target WCAG 2.2 AA for the implemented product surfaces.
- Semantic HTML, keyboard access, visible focus, sufficient contrast, and meaningful labels are required.
- Support zoom/reflow, reduced motion, screen readers, and touch targets.
- Do not use color as the only way to communicate category, priority, or status.
- Ensure image uploads and location controls have accessible alternatives and clear consent.

## Privacy principles
- Collect the minimum data needed for a user-requested purpose, and explain that purpose before collection.
- Make location optional and consent-based; avoid exposing a reporter's precise location by default.
- Define retention, deletion, access, and moderation rules before collecting real reports.
- Strip or control image metadata where feasible and warn about sensitive details in photos.
- Never put provider secrets in browser code, source control, or Vite-exposed environment variables.
- Do not use reports or images for model training without explicit, informed consent and a documented policy.
