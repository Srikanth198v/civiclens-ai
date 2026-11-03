# CivicLens MVP design

## Status
This document describes a proposed design, not a deployed backend or working product. The current code is a static frontend concept. Stack choices, data retention, and civic partnerships require validation before implementation.

## Application architecture
- **Web client:** React + TypeScript + Vite. Pages present report capture and browse experiences. Components remain mostly presentational.
- **Trusted API boundary:** proposed server-side routes or edge functions validate identity, input, uploads, authorization, AI calls, and rate limits. Browser clients never receive provider secrets.
- **Data layer:** Supabase is a candidate for Postgres, authentication, object storage, and row-level security. Configure migrations and policies as code if chosen.
- **AI adapter:** server-only provider adapter, isolated from UI and persistence. It returns schema-validated suggestions with confidence/provenance; provider selection is a future decision.
- **Location/map adapter:** optional provider abstraction. Geocoding and map rendering are consented and need an accessible list equivalent. Provider selection remains open.

## Proposed data model
- `profiles`: auth subject, optional display name, consent/preferences, created/updated timestamps. Store no unnecessary sensitive profile fields.
- `reports`: UUID, owner subject nullable only if approved anonymous flow, description, category, visibility, status, approximate location fields or coarse geocell, created/updated timestamps, optional idempotency key.
- `report_media`: UUID, report ID, private object key, media type/size, sanitized metadata state, upload timestamp. Public delivery should use controlled derivatives or signed access where appropriate.
- `report_events`: report ID, actor, previous/new status, reason, timestamp. Immutable audit semantics should be evaluated; never expose moderator-only notes publicly.
- `ai_suggestions`: report ID, suggestion type/value, confidence, provider/model/config version, created timestamp, acceptance/correction state. Keep suggestions distinct from resident-provided fields.
- `moderation_flags`: report ID, reporter/reason, review state, moderator action and timestamp; restrict access.

These tables are conceptual. Define retention, ownership, deletion, and public visibility rules before migrations. Avoid storing exact location or identities unless necessary and consented.

## Authentication and authorization
Authentication method and anonymous reporting are open product decisions. If Supabase is selected, use its auth subject as identity, server-side checks for sensitive operations, and row-level security policies for every table and storage bucket. Public read access should be limited to explicitly published, moderated reports and coarse location. Service-role credentials stay only in a protected server environment. Test policies using representative user roles before production.

## Report submission workflow
1. Explain data use and ask for optional location permission only when the user chooses location sharing.
2. Collect description, category, optional photo, and optional location; validate UX constraints client-side for clarity.
3. Show a review step that makes visibility and location precision understandable.
4. Send request to the trusted API with an idempotency key. Server validates authorization, size/type, text, location bounds, quotas, and malware/safety processing requirements.
5. Store original media privately, remove/limit EXIF metadata, and create safe derivatives if needed.
6. Persist the report with an initial explicit status and return a receipt only after durable success.
7. On failure, preserve the draft and show recoverable, non-sensitive error details.

## AI analysis workflow
1. Trigger only under documented consent/product policy, after server-side input minimization.
2. Send selected content through a server-only provider adapter. Do not log secrets or raw sensitive content unnecessarily.
3. Validate output against a strict schema and apply timeouts, quotas, and abuse controls.
4. Save suggestions separately from source report fields with provider/model/version provenance and uncertainty metadata.
5. Present suggestions for user review and correction. Do not auto-publish, reject, rank people, or change civic status solely based on a model output.
6. If the provider fails or confidence is insufficient, continue with manual categorization and submission.

## API boundary (proposed)
- `POST /api/reports`: create validated report and return report ID/status after durable save.
- `GET /api/reports`: return permitted, moderated reports with coarse location and pagination/filter support.
- `GET /api/reports/:id`: return authorized detail with visibility controls.
- `PATCH /api/reports/:id`: owner correction or authorized status workflow with audit record.
- `DELETE /api/reports/:id`: apply documented deletion/tombstone policy for authorized requester.
- `POST /api/reports/:id/ai-suggestions`: request an optional suggestion through server-side AI adapter.
- `POST /api/moderation/flags`: flag unsafe/sensitive content for review.

Endpoints are proposals, not implemented routes. Define schemas, errors, authorization, and rate limits before coding.

## Operational and privacy considerations
Set a data retention schedule, deletion process, breach response, backup policy, abuse response, and moderator access controls before collecting live data. Avoid exposing exact coordinates or image metadata. Obtain legal/product review appropriate for launch regions. Observe consent and local data protection requirements.
