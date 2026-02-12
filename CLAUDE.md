# Claude Instructions for GitLaw UI

React 18 + TypeScript + Tailwind 3 component library, published as an npm package. Ladle for dev/docs. Figma as design source.

## Quick Start

```bash
npm install          # Node 18+
npm run dev          # http://localhost:6006 (ladle serve)
npm run build-storybook  # build check — run before every PR (ladle build → build/)
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
├── stories/          # Ladle stories
├── templates/        # Page-level templates
└── styles/globals.css # Transition utilities, illustration CSS vars

public/icons/         # 1,475 SVG icons (kebab-case)
public/illustrations/ # 100+ Zest illustrations

assets/               # Source files (not deployed)
├── Icons/            # Icon source files
├── services/         # Service integration logos (Google, Dropbox, etc.)
└── Zest Illustration Set/  # Illustration source files
```

## Existing Components

| Component | Description |
|-----------|-------------|
| Avatar | Images, initials, icons, or empty states |
| Badge | Notification indicators |
| Button | Primary, secondary, outline, ghost, destructive, disabled, icon variants |
| Card | File, template, and folder cards with compact mobile variant |
| ChatAssistantMessage | AI assistant chat bubble |
| ChatInput | AI chat input interface |
| ChatThread | Chat conversation thread |
| ChatUserMessage | User chat bubble |
| Checkbox | Checkbox with indeterminate state |
| Dialog | Modal dialogs |
| Divider | Horizontal separator line |
| Dropdown | Adaptive width dropdown menu |
| EditorHeader | Document title bar with actions |
| EditorPaper | Document editing surface |
| EditorSection | Collapsible content sections |
| EditorToolbar | Responsive formatting toolbar with progressive overflow |
| FileDropdown | File picker dropdown |
| Icon | 1,475 icons with color support |
| Input | Text input with label, icons, validation states |
| ListHeader | Toolbar above file lists with edit layout variants (replace, inline, merged) |
| MenuItem | List items with icons, avatars, checkboxes |
| Overlay | Full-screen overlay backdrop |
| PageNav | Settings navigation with context switcher |
| PageShell | Responsive page shell with sidebar, header, content area |
| Popover | Click/hover triggered popover overlay |
| Radio | Radio button with label |
| Section | Content section with optional header |
| Select | Searchable dropdown with multi-select |
| SettingsTableRow | Settings key-value row |
| Sidebar | Collapsible navigation |
| Stack | Flexbox layout primitive for spacing |
| StarIcon | Filled star icon (active/inactive) |
| StickyFeaturePromoBar | Feature promotion banner |
| Switch | Toggle for boolean settings |
| Tab | Tab navigation with badge support |
| TableListItem | Sortable table rows with selection, starring, menus |
| Tag | Labels with optional icon and close button |
| TextField | Multi-line textarea with character count |
| Toast | Notification messages |
| Tooltip | Contextual hints |
| TopHeader | Top-level page header with breadcrumbs |

## Rules

### Colors

`colors.tokens.js` is the single source of truth. Both `tailwind.config.js` and `colors.ts` import from it.

- **In component JS/TS** — `import { colors } from '../specs'` (goes through `specs/index.ts`), never hardcoded hex
- **In Tailwind classes** — use semantic names:
  - Backgrounds: `bg-primary`, `bg-secondary`, `bg-destructive`, `bg-card`, `bg-page-background`
  - Text: `text-text-primary`, `text-text-secondary`, `text-text-negative`, `text-text-button`
  - Borders: `border-primary`, `border-border`, `border-input-border`
- **To change a color** — edit only `colors.tokens.js`; everything else inherits

Key color tokens:
- `colors.primary` — Main brand purple
- `colors.iconPrimary` — Purple icons
- `colors.iconSecondary` — Grey icons
- `colors.iconDisabled` — Disabled state
- `colors.iconNegative` — Light/white icons
- `colors.textPrimary` — Dark text
- `colors.textSecondary` — Grey text
- `colors.textButtonNegative` — Light text on dark buttons

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

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component files | PascalCase | `Button.tsx` |
| Story files | PascalCase + .stories | `Button.stories.tsx` |
| Spec files | camelCase | `colors.ts` |
| CSS classes | Tailwind (kebab-case) | `bg-primary` |
| Props | camelCase | `showLeftIcon` |
| Color tokens | camelCase | `colors.iconPrimary` |

### Don't

- Don't import directly from `colors.tokens.js` or `colors.ts` in components — use `'../specs'`
- Don't add CSS custom properties to `globals.css` for new tokens — add to `colors.tokens.js` or `tailwind.config.js`
- Don't use Tailwind default spacing (`p-2`, `p-4`) — use `gitlaw-*` tokens (`p-gitlaw-m`, `p-gitlaw-xl`)
- Don't use inline `style={}` — use Tailwind classes
- Don't create new directories (`utils/`, `lib/`, `helpers/`) — put hooks in `hooks/`, tokens in `specs/`

### Stories

Max **3-4 stories** per file:

| Story | Purpose | Required |
|-------|---------|----------|
| Default | Controllable with args panel | Always |
| AllVariants | Grid of all visual states | Always |
| Interactive | Stateful demo (selection, forms) | If needed |

**Do NOT create** individual stories for each variant or state (e.g. `Primary`, `Secondary`, `DisabledOn`). Those belong in AllVariants.

Story boilerplate (Ladle):

```tsx
import type { Story, StoryDefault } from "@ladle/react";
import { MyComponent } from '../components/MyComponent';

export default {
  title: "Components / <Category> / MyComponent",
  meta: { layout: "centered" },
  argTypes: { ... },
} satisfies StoryDefault;

export const Default: Story = (args) => <MyComponent {...args} />;
Default.args = { variant: 'primary' };

export const AllVariants: Story = () => (<div>...</div>);
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

### Page Stories

Page stories live in `src/stories/Pages/` and follow a different pattern:

- Title: `"Pages / Page Name"`
- Layout: `fullscreen` via `meta: { layout: "fullscreen" }`
- Use arrow functions (not args)
- Extract shared data as top-level constants (`sharedProps` pattern)
- Use section divider comments between logical blocks
- Keep to 2-3 stories max: **Default** + key alternate states

```tsx
export default {
  title: "Pages / My Page",
  meta: { layout: "fullscreen" },
} satisfies StoryDefault;

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */
const sharedProps = { title: "My Page", files, userName: "Ava Campbell" };

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */
export const Default: Story = () => <MyTemplate {...sharedProps} />;
```

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

**Icon size reference** (since Figma MCP can't be trusted on this):
- Input icons: xs=12px, s=16px, m=20px, l=24px, xl=24px
- Button icons: xs=12px, s=16px, m=16-24px, l=20-48px
- TableListItem row icon: 20px (size-5)

## Adding Icons / Illustrations

**Icons** — already in `public/icons/`. Just use the Icon component:
```tsx
<Icon name="check" className="size-5" color={colors.iconPrimary} />
```

**Illustrations** — copy SVG to `assets/Zest Illustration Set/` and `public/illustrations/`, then run `node scripts/update-illustration-colors.js`.

## Responsive Layouts

Uses `@tailwindcss/container-queries`. Breakpoints in `src/constants/breakpoints.ts`.

| Prefix | Width | Typical use |
|--------|-------|-------------|
| `@xs:` | 320px | — |
| `@sm:` | 384px | — |
| `@md:` | 448px | — |
| `@lg:` | 512px | 2-col card grid |
| `@xl:` | 576px | — |
| `@2xl:` | 672px | 2-col table (Name + Updated) |
| `@3xl:` | 768px | — |
| `@4xl:` | 896px | 3-col card grid, 4-col table |
| `@5xl:` | 1024px | 4-col card grid, 6-col table |
| `@6xl:` | 1152px | — |
| `@7xl:` | 1280px | — |

- **CSS-only** (`@container` classes) — for grid columns, gaps, visibility:
  ```tsx
  <div className="@container">
    <div className="grid grid-cols-1 gap-2 @lg:grid-cols-2 @2xl:gap-3 @4xl:grid-cols-3 @5xl:grid-cols-4">
      {cards.map(card => <Card key={card.id} {...card} />)}
    </div>
  </div>
  ```
- **JS** (`useContainerCols` hook) — when a component needs a width-derived prop (e.g. `TableListItem cols`):
  ```tsx
  import { useContainerCols } from '../hooks/useContainerCols';
  const { cols, containerRef } = useContainerCols();
  // cols: 0 (<672px) | 2 (672-896) | 4 (896-1024) | 6 (>=1024)
  <div className="@container" ref={containerRef}>
    {cols > 0 && <TableListItem type="header" cols={cols} ... />}
    {rows.map(row => <TableListItem cols={cols} ... />)}
  </div>
  ```

## Interaction Patterns

### Dropdown Menus

Always use `Dropdown` + `Popover` for any popup menu or list (toolbar overflow, context menus, sort/filter). Never build custom popup lists.

### File Selection & Edit Mode

Both `TableListItem` and `Card` Interactive stories implement the same selection pattern:

| Action | Behaviour |
|--------|-----------|
| Single click | Select / deselect (enters edit mode on first selection) |
| Double click | Open the item |
| Rubber band drag | Multi-select via drag rectangle |
| Select All (table) | Header checkbox toggles all |

**Key props:**
- `TableListItem`: `selected`, `selectMode`, `selectStatus`, `onSelectAllClick`, `onClick`, `onDoubleClick`
- `Card`: `selected`, `onClick`, `onDoubleClick`

**Edit mode header** (when >= 1 item selected):
- Left: `"N files selected"` — `text-lg font-semibold text-primary`
- Right: Delete, Download, Move as `Button variant="secondary" size="s"`, plus Done as `Button variant="primary" size="s"`

**Double-click timing:**
- `Card` has this built-in via `doubleClickThreshold` prop (default 250ms) using `setTimeout` + `useRef`
- `TableListItem` does NOT have this yet — implement timeout pattern at story level
- Use `event.detail === 2` or `setTimeout` with 250ms to match native feel

**Rubber band selection:**
- Uses `ref` maps (`rowRefs` / `cardRefs`) to track element positions
- `mousedown` → `mousemove` → `mouseup` on a container div
- Selection rect: `rgba(94, 73, 214, 0.1)` bg + `rgba(94, 73, 214, 0.5)` border
- DOM structure: `bg-page-background p-8` → outer relative → selection rect → inner fixed-width → header bar → content → footer

## Deployment

- **Vercel** (primary) — auto-deploys on push to `main` → https://gitlaw-ui.vercel.app (build output: `build/`)
- **GitHub Pages** (manual) — `npm run deploy` (builds to `build/`, deploys via gh-pages)

## Figma

- [UI Components](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)
- [Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)
- [Zest Illustrations](https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations)

## Tidy Up

Run when asked.

1. **Exports** — `ls src/components/*.tsx | wc -l` vs `grep -c "^export {" src/components/index.ts`. Every component file needs both `export { Foo }` and `export type { FooProps }` lines. Update `Introduction.stories.tsx` component count if changed. Update the "Existing Components" table in this file if components were added/removed.
2. **Story categories** — `grep "title:" src/stories/*.stories.tsx`. Every component story needs `Components / <Category> / Name`.
3. **Story count** — `for f in src/stories/*.stories.tsx; do echo "$(grep -c 'export const' "$f") $f"; done | sort -rn`. Max 3-4 per file.
4. **Hex colors** — `grep -rn '"#[0-9A-Fa-f]' src/components/ src/templates/`. Should be zero (except `Icon.tsx` colorFilters).
5. **Repeated patterns** — `grep -roh 'transition-[a-z]* duration-fast ease-gitlaw' src/components/ | sort | uniq -c`. If a Tailwind class combo appears 3+ times, extract to `globals.css` as a `@layer utilities` class. Existing utilities: `transition-interactive`, `transition-fade`, `shadow-card`. After adding a new utility, bulk-replace across all files and verify with grep.
6. **Build** — `npm run build-storybook`. Zero errors (chunk warnings OK).
7. **Commit** — stage specific files (not `git add -A`), descriptive message, push.

## After Every Task

Always check whether this file (`CLAUDE.md`) needs updating. Keep edits minimal — one-line table rows, not paragraphs.
- New or removed component → add/remove one row in "Existing Components" table
- New directory or renamed path → update "Project Structure" tree
- New pattern or convention → add to relevant "Rules" section
- New hook, template, or spec → mention in the appropriate section
- Don't add lengthy descriptions — the table is a quick-reference index, not documentation

## MCP Tools & Error Handling

When encountering errors accessing MCP tools (Figma MCP, or any other MCP server tools), ask the user to restart Claude rather than trying workarounds.
