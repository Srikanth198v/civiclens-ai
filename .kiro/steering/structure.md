# CivicLens AI repository structure

## Root
- `index.html`: Vite document shell, metadata, and app mount point.
- `package.json`: scripts and JavaScript dependencies.
- `tsconfig*.json`: strict application and tooling type-check configuration.
- `vite.config.ts`: React and Tailwind Vite plugins.
- `.env.example`: safe configuration names and non-secret example values.
- `README.md`: project status, local setup, architecture, and roadmap.
- `.kiro/steering/`: durable product, technology, and structure guidance for Kiro.
- `.kiro/specs/civiclens-mvp/`: scoped MVP requirements, design, and implementation checklist.

## `public/`
Static assets served as-is from the site root. `favicon.svg` is the minimal app identity. `images/` is reserved for reviewed, licensed static imagery; do not place user-submitted reports here.

## `src/`
- `App.tsx`: app-level route/layout composition.
- `main.tsx`: browser entry point and root mount.
- `index.css`: Tailwind import, global styles, design defaults, and accessible focus/reduced-motion behavior.
- `components/`: reusable, focused UI pieces such as `FeatureCard`.
- `pages/`: screen-level content and composition, currently the landing page.
- `layouts/`: shared page shell, navigation, and footer.
- `hooks/`: reusable React hooks for browser/UI behavior.
- `lib/`: application constants and cross-cutting configuration helpers.
- `services/`: boundaries to future external APIs; no backend integration is active.
- `types/`: shared domain and API contracts.
- `utils/`: small pure helpers with no React or external-service coupling.

## Component organization
Build reusable components around clear responsibilities and typed props. Keep domain side effects out of presentation components. Pages compose layouts and UI; services encapsulate network access; types describe validated contracts, not assumptions. Add tests adjacent to modules or in a documented `tests/` location when behavioral features are implemented.
