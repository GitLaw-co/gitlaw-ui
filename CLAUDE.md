# Claude Instructions for GitLaw UI

React + TypeScript + Tailwind CSS component library. Storybook for dev/docs. Figma as design source.

## Quick Start

```bash
npm install        # Node 18+
npm run storybook  # http://localhost:6006
```

## Project Structure

```
src/
├── components/       # React components (flat: Button.tsx, Input.tsx, …)
├── specs/            # Design tokens — single source of truth
│   ├── colors.tokens.js   # All color primitives + semantic tokens
│   ├── colors.ts          # Re-exports with TypeScript types
│   └── index.ts
├── constants/        # Breakpoints
├── hooks/            # useContainerCols, useToolbarOverflow
├── stories/          # Storybook stories
├── templates/        # Page-level templates
└── styles/globals.css # Utilities, illustration CSS vars

public/icons/         # 1,475 SVG icons (kebab-case)
public/illustrations/ # 100+ Zest illustrations
```

## Rules

### Colors

`colors.tokens.js` is the single source of truth. Both `tailwind.config.js` and `colors.ts` import from it.

- **In component JS/TS** — use `import { colors } from '../specs'`, never hardcoded hex
- **In Tailwind classes** — use semantic names: `bg-primary`, `text-foreground`, `border-border`
- **To change a color** — edit only `colors.tokens.js`; everything else inherits

### Components

All form controls use `React.forwardRef` and accept native element props:

```tsx
import React, { forwardRef } from 'react';

type NativeProps = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'disabled' | 'className' | 'type'>;

export interface MyComponentProps extends NativeProps {
  variant?: 'primary' | 'secondary';  // String unions, not boolean flags
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  disabled?: boolean;
  className?: string;
}

export const MyComponent = forwardRef<HTMLButtonElement, MyComponentProps>(({
  variant = 'primary',
  className = '',
  ...nativeProps
}, ref) => (
  <button ref={ref} className={`... ${className}`} {...nativeProps} />
));

MyComponent.displayName = 'MyComponent';
```

- Export component + types from `src/components/index.ts`
- Use `transition-interactive` (color changes) or `transition-fade` (opacity) — not raw `transition-colors duration-fast ease-gitlaw`
- Use `Dropdown` + `Popover` for any popup menu. Never build custom popup lists.

### Stories

Max **3–4 stories** per file:

| Story | Purpose | Required |
|-------|---------|----------|
| Default | Controllable with args panel | Always |
| AllVariants | Grid of all visual states | Always |
| Interactive | Stateful demo (selection, forms) | If needed |

Category is required — use `title: "Components/<Category>/Name"`:

| Category | Examples |
|----------|----------|
| Actions | Button, MenuItem |
| Form | Input, Select, Checkbox, Switch, Radio, TextField |
| Data Display | TableListItem, Card, Avatar, Badge, Tag |
| Navigation | Sidebar, Tab, PageNav, TopHeader, ListHeader |
| Overlays | Dialog, Dropdown, Popover, Tooltip |
| Feedback | Toast, StickyFeaturePromoBar |

Other title prefixes: `Chat/`, `Editor/`, `Layout/`, `Pages/`.

### Git

- **Always branch** — `feature/`, `fix/`, `chore/`. Never commit to `main` directly.
- Merge via PR (squash). Merge to `main` triggers Vercel deploy.
- Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` in commits.

## Adding / Changing Components

1. **Figma first** — use `get_design_context` and `get_screenshot` from Figma MCP to extract specs
2. **Recap specs with user** — summarize structure, states, variants, sizing. Get agreement before coding.
3. **Build** — component in `src/components/`, story in `src/stories/`, export in `index.ts`
4. **Verify** — compare against Figma screenshot before finalizing

**Figma MCP notes:**
- 403 error → auth timed out → ask user to restart Claude
- Icon sizes from Figma MCP are often wrong (reports 24px for everything) — deduce from container size or ask user

## Adding Icons / Illustrations

**Icons** — already in `public/icons/`. Just use the Icon component:
```tsx
<Icon name="check" className="size-5" color={colors.iconPrimary} />
```

**Illustrations** — copy SVG to `public/illustrations/`, run `node scripts/update-illustration-colors.js`.

## Responsive Layouts

Uses `@tailwindcss/container-queries`. Breakpoints in `src/constants/breakpoints.ts`.

- **CSS-only** (`@container` classes) — for grid columns, gaps, visibility
- **JS** (`useContainerCols` hook) — when a component needs a width-derived prop (e.g. `TableListItem cols`)

## Deployment

- **Vercel** — auto-deploys on push to `main` → https://gitlaw-ui.vercel.app
- **GitHub Pages** — `npm run deploy`

## Figma

- [UI Components](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)
- [Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)
- [Zest Illustrations](https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations)

## Tidy Up

Run when asked. Each step has a specific command — no guessing.

1. **Exports** — `ls src/components/*.tsx | wc -l` vs `grep -c "^export {" src/components/index.ts`. Must match.
2. **Story categories** — `grep "title:" src/stories/*.stories.tsx`. Every component story needs `Components/<Category>/Name`.
3. **Story count** — `for f in src/stories/*.stories.tsx; do echo "$(grep -c 'export const' "$f") $f"; done | sort -rn`. Max 3–4 per file.
4. **Hex colors** — `grep -rn '"#[0-9A-Fa-f]' src/components/ src/templates/`. Should be zero (except `Icon.tsx` colorFilters).
5. **Repeated patterns** — `grep -roh 'transition-[a-z]* duration-fast ease-gitlaw' src/components/ | sort | uniq -c`. Extract to `globals.css` if 3+ occurrences.
6. **Build** — `npm run build-storybook`. Zero errors (chunk warnings OK).
7. **Commit** — stage specific files, descriptive message, push.

## MCP Tools

If Figma MCP or any other MCP tool returns connection errors, ask the user to restart Claude.
