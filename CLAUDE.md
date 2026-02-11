# Claude Instructions for GitLaw UI

React 18 + TypeScript + Tailwind 3 component library, published as an npm package. Storybook 8 for dev/docs. Figma as design source.

## Quick Start

```bash
npm install          # Node 18+
npm run storybook    # http://localhost:6006
npm run build-storybook  # build check — run before every PR
```

Before creating anything, check what exists: `ls src/components/*.tsx`

## Project Structure

```
src/
├── components/       # React components (flat: Button.tsx, Input.tsx, …)
├── specs/            # Design tokens + component specs (single source of truth)
│   ├── colors.tokens.js   # All color primitives + semantic tokens (plain JS for Node compat)
│   ├── colors.ts          # Re-exports with TypeScript types
│   ├── button.specs.ts    # Button size/spacing specs from Figma
│   └── index.ts           # Barrel — import from '../specs', not individual files
├── constants/        # Breakpoints (container + viewport)
├── hooks/            # useContainerCols, useToolbarOverflow
├── stories/          # Storybook stories
├── templates/        # Page-level templates
└── styles/globals.css # Transition utilities, illustration CSS vars

public/icons/         # 1,475 SVG icons (kebab-case)
public/illustrations/ # 100+ Zest illustrations
```

## Rules

### Colors

`colors.tokens.js` is the single source of truth. Both `tailwind.config.js` and `colors.ts` import from it.

- **In component JS/TS** — `import { colors } from '../specs'` (goes through `specs/index.ts`), never hardcoded hex
- **In Tailwind classes** — use semantic names: `bg-primary`, `text-foreground`, `border-border`
- **To change a color** — edit only `colors.tokens.js`; everything else inherits

### Spacing & Radius

Custom tokens defined in `tailwind.config.js` — use these instead of Tailwind defaults:

- **Spacing:** `p-gitlaw-m` (8px), `gap-gitlaw-l` (12px), `m-gitlaw-xl` (16px), etc.
  Sizes: `xxs`=1px, `xs`=2px, `s`=4px, `m`=8px, `l`=12px, `xl`=16px, `2xl`=24px, `3xl`=32px, `4xl`=48px
- **Border radius:** `rounded-gitlaw-s` (4px), `rounded-gitlaw-m` (8px), `rounded-gitlaw-full` (pill)
- **Shadow:** `shadow-card`

### Components

All components use `React.forwardRef` and accept native element props. Reference `Button.tsx` as the canonical example.

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

- Export component + types from `src/components/index.ts` (both `export { Foo }` and `export type { FooProps }`)
- Shared types (e.g. `ButtonSize`) live in `specs/` and are re-exported from the component file
- Use `transition-interactive` (color changes) or `transition-fade` (opacity) — not raw `transition-colors duration-fast ease-gitlaw`
- Use `Dropdown` + `Popover` for any popup menu. Never build custom popup lists.

### Don't

- Don't import directly from `colors.tokens.js` or `colors.ts` in components — use `'../specs'`
- Don't add CSS custom properties to `globals.css` for new tokens — add to `colors.tokens.js` or `tailwind.config.js`
- Don't use Tailwind default spacing (`p-2`, `p-4`) — use `gitlaw-*` tokens (`p-gitlaw-m`, `p-gitlaw-xl`)
- Don't use inline `style={}` — use Tailwind classes
- Don't create new directories (`utils/`, `lib/`, `helpers/`) — put hooks in `hooks/`, tokens in `specs/`

### Stories

Max **3–4 stories** per file:

| Story | Purpose | Required |
|-------|---------|----------|
| Default | Controllable with args panel | Always |
| AllVariants | Grid of all visual states | Always |
| Interactive | Stateful demo (selection, forms) | If needed |

Story meta boilerplate:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { MyComponent } from '../components/MyComponent';

const meta: Meta<typeof MyComponent> = {
  title: 'Components/<Category>/MyComponent',
  component: MyComponent,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;
```

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
- If heredoc commit messages fail (shell quoting), use a double-quoted string instead.

## Adding / Changing Components

1. **Figma first** — use `get_design_context` and `get_screenshot` from Figma MCP to extract specs
2. **Recap specs with user** — summarize structure, states, variants, sizing. Get agreement before coding.
3. **Build** — component in `src/components/`, story in `src/stories/`, export in `index.ts`
4. **Verify** — compare against Figma screenshot before finalizing

**Figma MCP notes:**
- 403 error → auth timed out → ask user to restart Claude
- Icon sizes from Figma MCP are often wrong (reports 24px for everything) — deduce from container size or ask user
- Any MCP tool returning connection errors → ask user to restart Claude

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

- **Vercel** (primary) — auto-deploys on push to `main` → https://gitlaw-ui.vercel.app

## Figma

- [UI Components](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)
- [Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)
- [Zest Illustrations](https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations)

## Tidy Up

Run when asked. Each step has a specific command — no guessing.

1. **Exports** — `ls src/components/*.tsx | wc -l` vs `grep -c "^export {" src/components/index.ts`. Every component file needs both `export { Foo }` and `export type { FooProps }` lines.
2. **Story categories** — `grep "title:" src/stories/*.stories.tsx`. Every component story needs `Components/<Category>/Name`.
3. **Story count** — `for f in src/stories/*.stories.tsx; do echo "$(grep -c 'export const' "$f") $f"; done | sort -rn`. Max 3–4 per file.
4. **Hex colors** — `grep -rn '"#[0-9A-Fa-f]' src/components/ src/templates/`. Should be zero (except `Icon.tsx` colorFilters).
5. **Repeated patterns** — `grep -roh 'transition-[a-z]* duration-fast ease-gitlaw' src/components/ | sort | uniq -c`. Extract to `globals.css` if 3+ occurrences.
6. **Build** — `npm run build-storybook`. Zero errors (chunk warnings OK).
7. **Commit** — stage specific files, descriptive message, push.
