# CivicLens MVP requirements

## Status and scope
This spec is planning documentation for a future MVP. The current repository implements only a static React/Vite landing-page foundation. Requirements below are not delivered functionality. The MVP is a citizen-facing, privacy-conscious way to submit and review community infrastructure reports, with optional assistive AI and a browseable dashboard.

## Actors
- **Resident:** creates and manages their own report, if authentication and ownership are selected.
- **Visitor:** views only reports explicitly made public under the privacy policy.
- **Moderator:** reviews abuse, sensitive content, and report visibility.
- **Administrator:** configures categories, access, and retention under documented controls.
- **AI service:** processes minimized report content through a trusted server boundary and returns suggestions, never authoritative decisions.

## Functional requirements

### Report capture
- **FR-01:** A resident can enter a plain-language description of a local infrastructure issue.
- **FR-02:** A resident can choose one supported category: road damage/potholes, garbage/waste, water supply, drainage/sewage, streetlight, or public infrastructure damage. An explicit unknown/other path must be considered.
- **FR-03:** A resident can attach optional image evidence. The app must state accepted file types/limits and reject invalid uploads accessibly.
- **FR-04:** Location is optional, requested with clear consent, and may be entered or adjusted without requiring browser geolocation.
- **FR-05:** Before submission, the resident can review the description, category, attachments, and location sharing choice.
- **FR-06:** After successful submission, the app displays an accurate receipt/status and does not promise agency response or resolution.
- **FR-07:** The resident can correct or delete their report where policy and authorization permit.

### Browse and status
- **FR-08:** The dashboard can list permitted reports with category, approximate location when consented, status, and submission time.
- **FR-09:** Users can filter the list by category and status; list view is available independent of maps.
- **FR-10:** Report status and status changes are explicit, auditable, and never represented as a municipal commitment without evidence.
- **FR-11:** Reports with personal or sensitive information can be held for moderation and omitted from public views.

### AI assistance (optional, gated)
- **FR-12:** A trusted server-side service may propose a category or concise summary from minimized text and, only if approved, image inputs.
- **FR-13:** The UI labels AI-generated suggestions, communicates uncertainty, allows correction, and keeps a human responsible for publication/status decisions.
- **FR-14:** Failure, timeout, or low confidence leaves a usable manual report path. AI is never required to submit.
- **FR-15:** No user report is used for model training unless a separate, explicit informed-consent policy is adopted.

### Identity, administration, and data rights
- **FR-16:** The team must decide whether reports can be submitted anonymously before launch; any account requirement needs a clear purpose and privacy explanation.
- **FR-17:** Moderators can review flagged content, restrict visibility, and record a reason without silently rewriting a resident's report.
- **FR-18:** Data access, correction, deletion, retention, and appeal procedures must be published before live collection.

## Non-functional requirements
- **NFR-01 Accessibility:** Target WCAG 2.2 AA, with semantic markup, keyboard access, visible focus, contrast, labels, screen-reader support, and non-map alternatives.
- **NFR-02 Responsive:** Support narrow mobile screens, touch interaction, zoom, and reflow.
- **NFR-03 Privacy:** Minimize collection, make exact location optional, explain visibility, and document retention/deletion.
- **NFR-04 Security:** Keep privileged credentials server-side; enforce authorization and row-level access in the backend; validate input and uploads server-side; rate-limit abusive access.
- **NFR-05 Reliability:** Submission errors must not silently discard a draft. Retry behavior must avoid duplicate reports or clearly identify duplicate risk.
- **NFR-06 Performance:** Optimize image upload and delivery, avoid blocking the reporting path on AI, and monitor client bundle size.
- **NFR-07 Transparency:** Separate verified agency status from user/community observations and from AI suggestions.
- **NFR-08 Maintainability:** Strict TypeScript, typed domain boundaries, documented schema changes, automated type/build checks, and tests for business-critical behavior.
- **NFR-09 Safety:** Avoid exposing reporter identity or precise home/work location; provide abuse reporting and moderation controls before public launch.

## Acceptance criteria
- A first-time resident can understand what data is collected, submit a report without AI, and receive an accurate status confirmation.
- Keyboard and screen-reader users can complete the same core flow without a map.
- Anonymous/public visibility rules and location precision are explicit and enforced server-side.
- AI failure does not block reporting; suggestions are visibly identified and editable.
- A moderation and deletion/retention process exists before real community data is collected.
- Build, type checks, automated tests, and security review pass for the implementation.
