# Component Compatibility Analysis

**Question:** Can we create an npm package from gitlaw-ui and use components in front-law and back-law?

---

## TL;DR

| Target | Can Import? | Blockers |
|--------|-------------|----------|
| **front-law** | ✅ Yes, with work | Tailwind 3→4 gap, no build output currently |
| **back-law (emails)** | ❌ No | Fundamentally different rendering (DOM vs email HTML) |

---

## 1. Technology Stack Comparison

| | gitlaw-ui | front-law | back-law (emails) |
|---|-----------|-----------|-------------------|
| **React** | 18.2 | 19.2 | 19.2 |
| **Tailwind** | 3.4 | 4.1 | 2.0 (via @react-email) |
| **Build tool** | Storybook only | Next.js | NestJS + @react-email/render |
| **Output** | None (dev only) | SSR pages | HTML string |
| **Package type** | Not published | App (not a lib) | App (not a lib) |
| **Module format** | ESM | ESM | ESM |
| **CSS approach** | Tailwind classes | Tailwind classes | Inline styles (email-safe) |

---

## 2. front-law: What's Needed to Import gitlaw-ui

### Current Blockers

1. **No npm package** — gitlaw-ui isn't published, no `dist/` output
2. **No build step** — Components are source-only, not compiled
3. **Tailwind version gap** — gitlaw-ui uses v3, front-law uses v4
4. **CSS not bundled** — Tailwind classes need to be processed by consumer

### Path to npm Package

**Option A: Source distribution (like shadcn/ui)**
```bash
# Consumer copies source files, processes with their own Tailwind
npx gitlaw-ui add button
```
- Pros: No version conflicts, full control
- Cons: Not a true package, manual updates

**Option B: Compiled package with Tailwind preset**
```bash
npm install @gitlaw/ui
```
```tsx
// Consumer's tailwind.config.js
import { gitlawPreset } from '@gitlaw/ui/tailwind';
export default { presets: [gitlawPreset], ... }
```
- Pros: True npm package, versioned
- Cons: Tailwind 3 vs 4 incompatibility

**Option C: CSS-in-JS (no Tailwind dependency)**
- Compile Tailwind to static CSS or use runtime solution
- Pros: No Tailwind version coupling
- Cons: Loses Tailwind ecosystem benefits

### Recommended: Option A (shadcn/ui pattern)

front-law already uses shadcn/ui this way. gitlaw-ui could provide:
1. CLI tool to copy components into front-law
2. Components written for Tailwind 4 (match front-law)
3. Let front-law's build process handle CSS

---

## 3. back-law (Emails): Why Direct Import Won't Work

### Fundamental Constraints

Email HTML is not browser HTML. Email clients strip or ignore:

| Feature | Browser | Email Clients |
|---------|---------|---------------|
| Flexbox | ✅ | ❌ Gmail, Outlook strip it |
| CSS Grid | ✅ | ❌ Stripped |
| SVG | ✅ | ❌ Gmail strips entirely |
| CSS variables | ✅ | ❌ No support |
| External CSS | ✅ | ❌ Must be inline |
| JavaScript | ✅ | ❌ Never executes |
| `:hover` states | ✅ | ⚠️ Limited support |

### What back-law Uses Instead

```tsx
// @react-email/components — renders to email-safe HTML
import { Button, Html, Body } from '@react-email/components';

// Tables for layout (Outlook compatibility)
<table><tr><td>Content</td></tr></table>

// PNG icons (Gmail strips SVG)
<img src="cid:icon" />

// Inline styles (CSS classes become inline)
<Tailwind config={emailConfig}>
  <Button className="bg-primary" />  // → style="background:#5E49D6"
</Tailwind>
```

### Verdict: Separate Component Libraries Required

gitlaw-ui components use:
- Flexbox layouts → Won't render in Outlook
- SVG Icon component → Won't render in Gmail
- CSS hover states → Won't work
- Tailwind classes → Need @react-email/tailwind wrapper

**back-law must maintain its own email-specific components.** The only sharing possible is design tokens (colors, fonts).

---

## 4. What CAN Be Shared

### Design Tokens (colors, spacing, typography)

```
@gitlaw/tokens (potential shared package)
├── colors.json       # { "primary": "#5E49D6", ... }
├── spacing.json      # { "m": "8px", "l": "12px", ... }
└── build/
    ├── tailwind.js   # For front-law + gitlaw-ui
    ├── email.js      # For back-law
    └── css-vars.css  # For any consumer
```

**This is low-hanging fruit** — extract tokens to shared package, all three repos import.

### TypeScript Types

```tsx
// @gitlaw/types
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
export type Size = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: Size;
  disabled?: boolean;
}
```

Both gitlaw-ui and back-law can implement `ButtonProps` interface, ensuring API alignment even if implementations differ.

---

## 5. Technology Decisions Needed

### Question 1: Should gitlaw-ui target Tailwind 3 or 4?

| Option | Pros | Cons |
|--------|------|------|
| Stay on Tailwind 3 | No migration work | front-law can't use directly |
| Upgrade to Tailwind 4 | Matches front-law | Breaking changes, migration effort |

**Recommendation:** Upgrade to Tailwind 4 if goal is front-law integration.

### Question 2: How should gitlaw-ui be distributed?

| Option | Use Case |
|--------|----------|
| **Source copy (shadcn pattern)** | front-law copies components, owns them |
| **npm package** | front-law imports, gitlaw-ui owns updates |
| **Monorepo** | All UI in one repo, apps import |

**Recommendation:** Start with source copy (lowest friction), evolve to npm package.

### Question 3: Should back-law email components live in gitlaw-ui?

| Option | Pros | Cons |
|--------|------|------|
| Keep in back-law | Close to usage, email team owns | Duplicated design decisions |
| Move to gitlaw-ui | Single component library | Different rendering, confusing |
| Shared tokens only | Clean separation | No component sharing |

**Recommendation:** Keep email components in back-law, share only tokens/types.

---

## 6. Current State of Each Repo

### gitlaw-ui

```json
// package.json (relevant parts)
{
  "name": "gitlaw-ui",
  "private": true,           // ← Not published
  "scripts": {
    "storybook": "...",
    "build-storybook": "..." // ← Only builds Storybook, not components
  },
  "dependencies": {
    "react": "^18.2.0",
    "tailwindcss": "^3.4.17"
  }
}
```

**Missing for npm publish:**
- `"main"` / `"exports"` fields
- Build script (tsup, rollup, or vite library mode)
- `dist/` output with compiled components
- Tailwind preset for consumers

### front-law

```json
{
  "dependencies": {
    "react": "^19.2.3",
    "tailwindcss": "^4.1.18",
    "class-variance-authority": "^0.7.1",  // ← CVA for variants
    "@radix-ui/*": "..."                    // ← Radix primitives
  }
}
```

**Already has:**
- shadcn/ui component pattern
- CVA for variant handling
- Direct file imports (no barrel exports)

**To consume gitlaw-ui:** Would need components matching this pattern.

### back-law

```json
{
  "dependencies": {
    "@react-email/components": "^1.0.5",
    "@react-email/render": "^2.0.3",
    "@react-email/tailwind": "^2.0.3"
  }
}
```

**Constraint:** Must use @react-email primitives, cannot use DOM components.

---

## 7. Recommended Action Plan

### Phase 1: Shared Tokens (1-2 weeks)

1. Create `@gitlaw/tokens` package with colors, spacing, typography
2. All three repos import tokens
3. Single source of truth for design decisions

### Phase 2: gitlaw-ui as Installable Package (2-4 weeks)

1. Add build step (tsup or vite library mode)
2. Upgrade to Tailwind 4
3. Export Tailwind preset
4. Publish to npm (private registry or GitHub Packages)

### Phase 3: front-law Integration (2-4 weeks)

1. Install `@gitlaw/ui` in front-law
2. Import Tailwind preset
3. Migrate components one-by-one (or use alongside shadcn/ui)

### Phase 4: Align Patterns (ongoing)

1. Adopt CVA in gitlaw-ui for variant consistency
2. Document component APIs
3. Set up visual regression testing (Chromatic)

---

## 8. Summary

| Repo | Relationship to gitlaw-ui |
|------|---------------------------|
| **front-law** | Can import with work: need build output, Tailwind 4, npm publish |
| **back-law** | Cannot import components: use shared tokens/types only |

**Key blocker for front-law:** gitlaw-ui has no build/publish pipeline.

**Key blocker for back-law:** Email rendering requires fundamentally different components (@react-email).

---

## 9. Transformation Layer: Can Components Target Both Web and Email?

**Short answer:** No generic solution exists. The rendering constraints are too different.

### Why Automatic Transformation Won't Work

Comparing the actual Button implementations:

| Aspect | gitlaw-ui (web) | back-law (email) |
|--------|-----------------|------------------|
| Element | `<button>` | `<a href>` (via @react-email) |
| Layout | `inline-flex items-center` | `display: inline-block` |
| Icons | SVG via `<Icon>` component | PNG via `<img src="cid:...">` |
| Interaction | `onClick` handler | `href` only (no JS in email) |
| Hover states | `hover:bg-primary-dark` | Not supported |
| Borders | Tailwind `border` class | Inline `style={{ border: '...' }}` |
| Focus states | `focus:ring-2 focus:ring-primary/50` | Not applicable |

These aren't style differences — they're fundamental rendering model differences.

### What Would Be Required

A transformation layer would need to:

1. **Replace elements** — `<button>` → `<a>`, `<div>` → `<table>`
2. **Strip unsupported features** — flexbox, grid, SVG, CSS variables, hover/focus states
3. **Convert icons** — SVG → PNG with CID references for inline attachments
4. **Inline all styles** — Tailwind classes → `style={}` attributes
5. **Add email scaffolding** — `<Html>`, `<Head>`, `<Body>`, `<Tailwind>` wrappers

No generic tool does this. Email HTML is essentially a different language.

### Practical Alternatives

#### Option A: Shared Props Interface (Current Approach)

```tsx
// @gitlaw/types (shared)
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  children: React.ReactNode;
}

// gitlaw-ui (web) - implements ButtonProps
export const Button: React.FC<ButtonProps & { onClick?: () => void }> = ...

// back-law (email) - implements ButtonProps
export const EmailButton: React.FC<ButtonProps & { href: string }> = ...
```

Same API shape, different implementations. This is what exists today (mostly aligned already).

#### Option B: Build-Time Code Generation

Write components once with annotations, generate email versions:

```tsx
// Source component with email hints
export const Button = ({ variant, size, children }) => (
  <button
    className="inline-flex items-center" // ← stripped for email
    data-email-element="a"               // ← becomes <a> in email
    data-email-style="display: inline-block"
  >
    {children}
  </button>
);
```

**Complexity:** High. Would need custom Babel/compiler plugin. Not worth it for ~13 email components.

#### Option C: Dual Export from Single File

```tsx
// Button.universal.tsx
export const Button = ({ variant, children, onClick, href }) => {
  const isEmail = useRenderContext() === 'email';

  if (isEmail) {
    return <EmailButton href={href} variant={variant}>{children}</EmailButton>;
  }
  return <WebButton onClick={onClick} variant={variant}>{children}</WebButton>;
};
```

**Problem:** Bundles both implementations. Email code in web bundle, web code in email bundle.

### Recommendation

**Keep implementations separate.** The overlap is only ~13 email components, and they require email-specific logic (inline attachments, table layouts, PNG icons).

**What to share:**
- TypeScript interfaces (`ButtonProps`, `Size`, `Variant` types)
- Design tokens (colors, spacing values)
- Naming conventions (variant names, size scale)

**What not to share:**
- Component implementations
- Rendering logic
- Style application

This matches the meeting discussion — Dmitry suggested a "conversion layer" specifically for emails, not a universal component system.

---

## 10. Storybook Alternatives Analysis

Research on alternatives to Storybook 8 for gitlaw-ui.

### Quick Comparison

| Tool | Viable? | Best For | Key Tradeoff |
|------|---------|----------|--------------|
| **Ladle** | ✅ Yes | Speed-focused teams | No addon ecosystem |
| **Histoire** | ❌ No | Vue/Svelte only | No React support |
| **Bit.dev** | ⚠️ Different | Component distribution | Overkill for 2-3 repos |
| **Styleguidist** | ❌ No | Simpler needs | Fewer features, declining |
| **Docusaurus** | ⚠️ Complement | User-facing docs | DIY playground setup |

---

### Ladle — Best Alternative If Speed Is the Priority

**What it is:** Vite-based, React-only Storybook alternative focused on performance.

**Performance gains:**
- Production builds: **4x faster**
- Dev server startup: **Near-instant** (vs seconds for Storybook)
- Bundle size: **4.6 MB** vs Storybook's 16.1 MB (71% smaller)
- Large projects (30+ components): **71x faster** incremental builds

**Compatibility:**
- ✅ CSF 2 stories work with minimal/no changes (~99% compatible)
- ✅ TypeScript, Tailwind CSS, React 18 fully supported
- ✅ Built-in accessibility testing (axe)
- ⚠️ CSF 3 support in progress
- ⚠️ MDX support is basic/experimental

**What you lose:**
- ❌ No third-party addon ecosystem
- ❌ Limited auto-generated documentation
- ❌ Smaller community (2.8K stars vs 88K for Storybook)

**Migration effort:** Low — 1-2 days to test, swap packages, verify stories.

**Used by:** Uber (335 internal projects, 15,896 stories)

**Verdict:** Strong candidate if Storybook build times are a pain point. Test in a branch first.

---

### Histoire — Not Viable

**What it is:** Vite-based component documentation tool, similar philosophy to Storybook.

**Critical blocker:** **No React support.** Vue 3 and Svelte only.

React support has been requested (GitHub issues #199, #752) but is not planned.

**Verdict:** Not an option for gitlaw-ui.

---

### Bit.dev — Different Purpose

**What it is:** Component composition and distribution platform, not a Storybook replacement.

**Core value:** Independently version and publish components as separate npm packages.

**What it solves:**
- Component-level versioning (e.g., `@gitlaw/button@1.2.0` separate from `@gitlaw/input@2.0.0`)
- Cross-repo component sharing with native npm registry
- Team collaboration on component ownership

**Pricing:** Free tier for up to 10 users, unlimited components.

**Is it overkill for gitlaw-ui?**
- Current: 1 component library → 1-2 consuming apps
- Bit shines: 1 component library → 5+ consuming apps with independent versioning
- **For now: Overkill.** Revisit if scaling to more consumers.

**Verdict:** Not a Storybook replacement. Consider later for distribution if npm package management becomes complex.

---

### React Styleguidist — Not Recommended

**What it is:** Documentation-focused component development environment with living style guide.

**Philosophy:** "Storefront" (docs-first) vs Storybook's "workshop" (dev-first).

**Pros:**
- Simpler API, Markdown-based examples
- Auto-generates prop tables from PropTypes/JSDoc

**Cons:**
- ❌ Smaller community (61K weekly downloads vs 8M for Storybook)
- ❌ No interactive Controls addon equivalent
- ❌ Performance issues with large component sets
- ❌ Fewer features overall

**Migration effort:** High — would need to rewrite 40+ stories to Markdown format.

**Verdict:** Not worth the migration. Storybook is more capable.

---

### Docusaurus + MDX — Complement, Not Replacement

**What it is:** Documentation framework that can embed live React components.

**Best for:** User-facing design system documentation alongside Storybook.

**What it does well:**
- ✅ Rich documentation with sidebars, search, versioning
- ✅ SEO-friendly (static HTML, not SPA)
- ✅ Live code blocks via `react-live` or Sandpack
- ✅ Design guides, usage patterns, component hierarchy

**What it lacks:**
- ❌ No interactive Controls (users edit code instead)
- ❌ No visual regression testing
- ❌ No accessibility auditing
- ❌ DIY setup for component playgrounds

**Industry pattern:** Mature design systems (Chakra UI, Mantine, Ant Design) use **both**:
- Storybook = internal (devs, QA, visual regression)
- Docusaurus = external (users, integrators, design guides)

**Verdict:** Add as a complement for user-facing docs. Don't replace Storybook.

---

### Recommendation for gitlaw-ui

**Stay with Storybook 8** for now. It's working well with 40+ components, Tailwind, TypeScript, and Vercel deploy.

**If build speed becomes a problem:** Test Ladle in a branch. Migration is low-effort and reversible.

**If you need user-facing documentation:** Add Docusaurus as a separate docs site, linking to Storybook for interactive playgrounds.

**Don't pursue:** Histoire (no React), Styleguidist (declining), Bit.dev (overkill for current scale).

---

*Document created 2026-02-11*
*Related: [Process Automation IDEAS.md #7](https://www.notion.so/2f82b1889d1d8160a3bae86fe4b14d74) — Design System Single Source of Truth*
