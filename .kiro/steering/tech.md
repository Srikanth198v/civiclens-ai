# CivicLens AI technical steering

## Foundation stack
- React for the user interface.
- TypeScript in strict mode for application code.
- Vite for development and production bundling.
- Tailwind CSS v4 through the official `@tailwindcss/vite` plugin, with a small global stylesheet for tokens and accessibility defaults.
- Lucide React for consistent interface icons.
- Supabase is the planned backend candidate for authentication, Postgres, and storage. It is not installed or connected in this foundation.

## Planned integration architecture
- Browser app calls a trusted application/API boundary for privileged operations.
- Supabase access, if selected, must use least-privilege policies, validated inputs, and row-level security. The public anon key is not a secret, but authorization must not depend on hiding it.
- AI provider calls must be proxied by a server-side function or backend. Provider API keys must never be placed in `VITE_*` variables or shipped to browsers.
- AI results should carry provenance, model/config version, confidence or uncertainty where available, and a user correction path. Server-side validation and abuse controls are required.
- Mapping provider choice is open. Request location only after consent, minimize precision, and provide a non-map alternative.
- No Supabase, AI, maps, authentication, or report submission integration is functional yet.

## Coding conventions
- Use named exports for reusable components and utilities; keep the root `App` as the default export.
- Use function components, explicit props/types, and strict TypeScript. Avoid `any` and unused code.
- Keep rendering components presentational; put external effects behind `src/services` and domain contracts in `src/types`.
- Keep page-level composition in `src/pages`, shared shells in `src/layouts`, reusable UI in `src/components`.
- Prefer semantic HTML, responsive layouts, clear loading/error/empty states, and small focused modules.
- Use CSS/Tailwind utilities consistently and avoid adding a dependency without a concrete need.

## Security practices
- Commit only placeholders in `.env.example`; ignore local environment files while keeping the root `.kiro` directory tracked.
- Never commit service-role keys, provider secrets, personal report data, or real user uploads.
- Validate and constrain text, file type, file size, and location server-side before future persistence.
- Add authorization, rate limits, abuse reporting, safe image handling, and privacy retention policies before enabling real submissions.
- Treat user-submitted descriptions and images as untrusted input. Escape output and do not execute generated content.

## Testing and quality requirements
- `npm run typecheck` and `npm run build` must pass for changes to the foundation.
- Add unit tests for domain utilities and services when behavior is introduced.
- Add component/accessibility checks for report forms, status, and navigation before those features ship.
- Test responsive layouts, keyboard-only operation, reduced-motion preference, and screen-reader labels.
- Test server authorization and RLS policies independently; a successful browser build does not validate backend security.
