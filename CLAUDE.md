# Claude Instructions for GitLaw UI

This is a React component library built with Tailwind CSS, based on the GitLaw Figma design system.

## Roadmap

This library is a **work in progress**. Current focus: building out components.

**Target Structure:**

```
Foundations/       ← 🔄 Evolving (changes frequently as design system matures)
  Colors
  Typography
  Spacing
  Icons
  Illustrations

Components/        ← 🔄 In progress (current focus)
  Button, Card, Input, etc.

Templates/         ← 🔄 In progress (ChatPageTemplate + PageShell)
  Page layouts, shells

Prototypes/        ← 📋 Planned
  Full interactive flows (File List page demo in Pages/)
```

## Existing Components

| Component | Status | Description |
|-----------|--------|-------------|
| Avatar | ✅ Stable | Images, initials, icons, or empty states |
| Badge | ✅ Stable | Notification indicators |
| Button | ✅ Stable | Primary, secondary, outline, ghost, destructive, disabled, icon variants |
| Card | ✅ Stable | File, template, and folder cards with compact mobile variant |
| Checkbox | ✅ Stable | Checkbox with indeterminate state |
| ChatInput | ✅ Stable | AI chat interface |
| ChatThread | ✅ Stable | Chat conversation thread |
| Dialog | ✅ Stable | Modal dialogs |
| Dropdown | ✅ Stable | Adaptive width dropdown menu |
| EditorHeader | ✅ Stable | Document title bar with actions |
| EditorPaper | ✅ Stable | Document editing surface |
| EditorSection | ✅ Stable | Collapsible content sections |
| EditorToolbar | ✅ Stable | Responsive formatting toolbar with progressive overflow |
| FileDropdown | ✅ Stable | File picker dropdown |
| Icon | ✅ Stable | 1,475 icons with color support |
| Input | ✅ Stable | Text input with label, icons, validation states |
| ListHeader | ✅ Stable | Toolbar above file lists with three edit layout variants (replace, inline, merged) |
| MenuItem | ✅ Stable | List items with icons, avatars, checkboxes |
| Overlay | ✅ Stable | Full-screen overlay backdrop |
| PageNav | ✅ Stable | Settings navigation with context switcher |
| PageShell | ✅ Stable | Responsive page shell with sidebar, header, and content area |
| Popover | ✅ Stable | Click/hover triggered popover overlay |
| Radio | ✅ Stable | Radio button with label |
| Section | ✅ Stable | Content section with optional header |
| Select | ✅ Stable | Searchable dropdown with multi-select |
| SettingsTableRow | ✅ Stable | Settings key-value row for settings pages |
| Sidebar | ✅ Stable | Collapsible navigation |
| Stack | ✅ Stable | Flexbox layout primitive for spacing |
| StarIcon | ✅ Stable | Filled star icon (active/inactive) |
| StickyFeaturePromoBar | ✅ Stable | Feature promotion banner |
| Switch | ✅ Stable | Toggle for boolean settings |
| Tab | ✅ Stable | Tab navigation with badge support |
| TableListItem | ✅ Stable | Sortable table rows with selection, starring, menus |
| Tag | ✅ Stable | Labels with optional icon and close button |
| TextField | ✅ Stable | Multi-line textarea with character count |
| Toast | ✅ Stable | Notification messages |
| Tooltip | ✅ Stable | Contextual hints |
| TopHeader | ✅ Stable | Top-level page header with breadcrumbs |

## Setup

```bash
npm install
```

Requires Node.js 18+.

**Note:** MDX table support requires `@storybook/addon-mdx-gfm` (already configured in `.storybook/main.ts`).

## Quick Commands

| Task | Command |
|------|---------|
| Install dependencies | `npm install` |
| Start Storybook | `npm run storybook` |
| Deploy to GitHub Pages | `npm run deploy` |
| Update illustration colors | `node scripts/update-illustration-colors.js` |

## Project Structure

```
src/
├── components/       # React components (Button, Input, etc.)
├── constants/        # Shared constants (breakpoints, etc.)
├── hooks/            # Custom React hooks (useContainerCols, useToolbarOverflow)
├── stories/          # Storybook stories
├── specs/            # Design tokens and constants
│   ├── colors.ts     # Color constants - USE THESE, not hex codes
│   └── index.ts      # Exports all specs
├── templates/        # Page-level templates (ChatPageTemplate)
└── styles/
    └── globals.css   # CSS variables, Tailwind config, utility classes

public/
├── icons/            # 1,475 SVG icons (kebab-case names)
└── illustrations/    # 100+ Zest illustrations

Assets/               # Source files (not deployed)
├── Icons/            # Icon source files
└── Zest Illustration Set/  # Illustration source files
```

## Design System Rules

### Colors - Always Use Token Constants

Never use hardcoded hex colors. Import from specs:

```tsx
import { colors } from '../specs';

// Good
color={colors.iconPrimary}
color={colors.textButtonNegative}

// Bad
color="#5E49D6"
color="#F7F6FF"
```

Key color tokens:
- `colors.primary` - Main brand purple (#5E49D6)
- `colors.iconPrimary` - Purple icons
- `colors.iconSecondary` - Grey icons (#989898)
- `colors.iconDisabled` - Disabled state (#CFC8F3)
- `colors.iconNegative` - Light/white icons (#F7F6FF)
- `colors.textPrimary` - Dark text (#1B1B1F)
- `colors.textSecondary` - Grey text
- `colors.textButtonNegative` - Light text on dark buttons

### Tailwind Classes

Use semantic color classes from `tailwind.config.js`:

```tsx
// Backgrounds
bg-primary, bg-secondary, bg-destructive, bg-card, bg-page-background

// Text
text-text-primary, text-text-secondary, text-text-negative, text-text-button

// Borders
border-primary, border-border, border-input-border
```

### Transition Utilities

Use the reusable transition classes defined in `globals.css`:

```tsx
// Interactive color transitions (hover states, focus states)
transition-interactive    // → transition-colors duration-fast ease-gitlaw

// Fade in/out transitions (opacity changes)
transition-fade           // → transition-opacity duration-fast ease-gitlaw
```

### Spacing Tokens

Use GitLaw spacing scale:
- `gitlaw-xxs` = 1px
- `gitlaw-xs` = 2px
- `gitlaw-s` = 4px
- `gitlaw-m` = 8px
- `gitlaw-l` = 12px
- `gitlaw-xl` = 16px
- `gitlaw-2xl` = 24px
- `gitlaw-3xl` = 32px
- `gitlaw-4xl` = 48px

### Responsive Layouts with @container Queries

This project uses `@tailwindcss/container-queries` for component-level responsive design. Container queries adapt to the **container width** (not viewport), making layouts work correctly inside sidebars, split views, and varying page shells.

**Setup:** Add `@container` class to the parent element, then use `@`-prefixed breakpoints on children.

**Container breakpoints** (defined in `src/constants/breakpoints.ts`):

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

**CSS-only pattern** (card grids):

```tsx
<div className="@container">
  <div className="grid grid-cols-1 gap-2 @lg:grid-cols-2 @2xl:gap-3 @4xl:grid-cols-3 @5xl:grid-cols-4">
    {cards.map(card => <Card key={card.id} {...card} />)}
  </div>
</div>
```

**JS + ResizeObserver pattern** (when a component needs a JS prop, e.g. `TableListItem cols`):

```tsx
import { useContainerCols } from '../hooks/useContainerCols';

const { cols, containerRef } = useContainerCols();
// cols: 0 (<672px) | 2 (672–896) | 4 (896–1024) | 6 (≥1024)

<div className="@container" ref={containerRef}>
  {cols > 0 && <TableListItem type="header" cols={cols} ... />}
  {rows.map(row => <TableListItem cols={cols} ... />)}
</div>
```

**When to use which:**
- Pure CSS `@container` classes — when layout is entirely CSS-driven (grid columns, gaps, visibility)
- `useContainerCols` hook — when a React component needs a JS value derived from container width (e.g. `TableListItem cols` prop)

## Component API Patterns

### Props Structure

Components use consistent prop patterns:

```tsx
// Variants via string union (not boolean flags)
<Button variant="primary" />    // ✅ Good
<Button isPrimary />            // ❌ Bad

// Size props: 'xs' | 's' | 'm' | 'l' | 'xl'
<Button size="m" />

// Common prop patterns:
variant    // Visual style variant
size       // Component size
disabled   // Disabled state (boolean)
className  // Additional Tailwind classes
onClick    // Click handler
children   // Content
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Component files | PascalCase | `Button.tsx` |
| Story files | PascalCase + .stories | `Button.stories.tsx` |
| Spec files | camelCase | `colors.ts` |
| CSS classes | Tailwind (kebab-case) | `bg-primary` |
| Props | camelCase | `showLeftIcon` |
| Color tokens | camelCase | `colors.iconPrimary` |

## Interaction Patterns

### Dropdown Menus

Always use the `Dropdown` component (with `Popover` for positioning) for any popup menu or list:
- Toolbar overflow menus
- Context menus
- Action menus
- Sort/filter dropdowns

Do NOT build custom popup lists — use `Dropdown` with its `DropdownItem[]` API.

### File Selection & Edit Mode

Both `TableListItem` and `Card` component Interactive stories implement the same selection pattern:

| Action | Behaviour |
|--------|-----------|
| **Single click** | Select / deselect an item (enters edit mode on first selection) |
| **Double click** | Open the item |
| **Rubber band drag** | Multi-select via drag rectangle |
| **Select All** (table only) | Checkbox in header row toggles all items (`selectMode`, `selectStatus`, `onSelectAllClick` props) |

**Edit mode header** (appears when ≥1 item selected):
- **Left:** `"N files selected"` — `text-lg font-semibold text-primary`
- **Right:** Action buttons — `Delete` (trash-2), `Download` (arrow-down-to-line), `Move` (folder-input) as `Button variant="secondary" size="s"`, plus `Done` (check) as `Button variant="primary" size="s"`
- Done button clears selection and exits edit mode

**Key props:**
- `TableListItem`: `selected`, `selectMode`, `selectStatus`, `onSelectAllClick`, `onClick`, `onDoubleClick`
- `Card`: `selected`, `onClick`, `onDoubleClick`

**Double-click timing (⚠️ not yet implemented in component demos):**
- Single click toggles selection; double click opens the item
- Current demos pass raw `onClick` + `onDoubleClick` with no debounce — a double-click fires both handlers, causing a select/deselect flicker
- **Fix:** use a timeout-based approach: on single click, delay the select toggle; if a second click arrives within the window, cancel the toggle and fire the double-click handler instead
- Use the browser's default double-click threshold (~250ms on most OS) — do not hardcode a custom value; detect via `event.detail === 2` or use `setTimeout` with `250ms` to match native feel
- `Card` component already implements this internally via `doubleClickThreshold` prop (default `250ms`) using `setTimeout` + `useRef` — see `Card.tsx` lines 80–107
- `TableListItem` does NOT have this yet — the page story should implement the same timeout pattern at the story level when wiring up `onClick`/`onDoubleClick` for table rows

**Rubber band selection:**
- Uses `ref` maps (`rowRefs` / `cardRefs`) to track element positions
- `mousedown` → `mousemove` → `mouseup` on a container div
- Selection rectangle styled with `rgba(94, 73, 214, 0.1)` bg + `rgba(94, 73, 214, 0.5)` border
- Both stories use identical tree structure: `bg-page-background p-8 → outer relative → selection rect → inner fixed-width → header bar → content → footer`

## Adding Components

### Adding an Icon

Icons are already in `public/icons/`. Use the Icon component:

```tsx
import { Icon } from './Icon';
import { colors } from '../specs';

<Icon name="check" className="size-5" color={colors.iconPrimary} />
```

### Adding an Illustration

1. Copy SVG to `Assets/Zest Illustration Set/`
2. Copy to `public/illustrations/`
3. Run `node scripts/update-illustration-colors.js` to convert colors to CSS variables
4. It will appear automatically in the Illustrations story

### Creating or Amending a Component

**Iterative process (always follow this order):**

1. **Recap understanding** — After reviewing Figma designs or the requested change, write a clear summary of the specs or amendments (structure, states, variants, sizing, behaviour). Share with user for review.
2. **Agree on specs** — Iterate on the recap with the user until both sides agree on exactly what will be built or changed. Do not start coding until specs are confirmed.
3. **Build locally** — Only after agreement, implement the component and story files.

**Build steps:**

1. **Get specs from Figma first** - Use Figma MCP to fetch design context and screenshots
2. Create component file: `src/components/ComponentName.tsx`
3. Create story file: `src/stories/ComponentName.stories.tsx`
4. Export from `src/components/index.ts`
5. Use design tokens from `src/specs/`
6. **Categorize the story** — Set the story `title` to `"Components/<Category>/ComponentName"` using the correct category (see table below)
7. **Review against Figma before finalising** - Always verify component matches Figma specs

**⚠️ Story Categorization (Required):**

Every component story **must** be placed in one of these Storybook categories:

| Category | What belongs here | Examples |
|----------|-------------------|----------|
| **Actions** | Buttons, clickable triggers | Button |
| **Form** | Inputs, selects, toggles, checkboxes | Input, Select, Checkbox, Switch, Radio, TextField |
| **Data Display** | Tables, lists, cards, badges, tags | TableListItem, Card, SettingsTableRow, Tag, Badge, Avatar |
| **Navigation** | Menus, tabs, sidebars, headers | Sidebar, Tab, PageNav, TopHeader, ListHeader |
| **Overlays** | Modals, popovers, tooltips, dropdowns | Dialog, Popover, Tooltip, Dropdown, Overlay |
| **Feedback** | Toasts, status indicators | Toast |

Use `title: "Components/<Category>/ComponentName"` in the story meta. **Never** place a component story at the top-level `"Components/ComponentName"` without a category.

**Figma Workflow (Required):**
- Always use `get_design_context` and `get_screenshot` from Figma MCP to extract exact specs
- Verify sizes, spacing, colors, borders, and all visual properties match Figma
- Check both variants and states (hover, active, disabled, etc.)
- Never guess specs - if unclear, fetch from Figma again

**⚠️ Figma MCP 403 Error:**
If Figma MCP was previously working and you receive a 403 error, this means the authentication has timed out. Ask the user to restart Claude to refresh the Figma authentication. If Figma MCP has never been connected, ask the user to set up and authorize the Figma MCP integration first.

**⚠️ Icon Size Note (Figma MCP Bug):**
Figma MCP has a known bug where it often reports icon sizes as 24px regardless of actual size. **Always double-check icon sizes** - never trust the Figma MCP icon size values directly. Deduce correct icon size from:
1. **Ask the user** - if unsure, confirm with the user
2. **Container/button size** - icon should fit with appropriate padding
3. **Visual ratio** - check screenshot to see icon-to-container proportion
4. **Existing specs** - refer to established component specs:
   - Input icons: xs=12px, s=16px, m=20px, l=24px, xl=24px
   - Button icons: xs=12px, s=16px, m=16-24px, l=20-48px
   - TableListItem row icon: 20px (size-5)

**Component Template:**

```tsx
// src/components/ComponentName.tsx
import React from 'react';

export type ComponentNameVariant = 'primary' | 'secondary';

export interface ComponentNameProps {
  /** Description of prop */
  variant?: ComponentNameVariant;
  /** Additional CSS classes */
  className?: string;
}

const variantClasses: Record<ComponentNameVariant, string> = {
  primary: 'bg-primary text-text-negative',
  secondary: 'bg-secondary text-text-button',
};

export const ComponentName: React.FC<ComponentNameProps> = ({
  variant = 'primary',
  className = '',
}) => {
  return (
    <div className={`${variantClasses[variant]} ${className}`}>
      {/* Component content */}
    </div>
  );
};

export default ComponentName;
```

**Story Pattern — Keep stories to a minimum:**

Every story file should have **at most 3-4 stories**:

| Story | Purpose | Required? |
|-------|---------|-----------|
| **Default** | Single controllable story with args — replaces all individual variant/state stories | ✅ Always |
| **AllVariants** / **AllStates** | Grid/showcase of all visual states in one view | ✅ Always |
| **Interactive** | Stateful real-world usage demo (selection, toggles, forms, etc.) | Only if component has interactive behaviour |
| *(domain-specific)* | E.g. `RadioGroup`, `DocumentInputs` — only if it shows a genuinely different use case | Rare |

**Do NOT create** individual stories for each variant or state (e.g. `Primary`, `Secondary`, `DisabledOn`, `DisabledOff`). Those belong in the AllVariants/AllStates showcase.

```tsx
// src/stories/ComponentName.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from '../components/ComponentName';

const meta: Meta<typeof ComponentName> = {
  title: 'Components/<Category>/ComponentName',  // e.g. 'Components/Form/ComponentName'
  component: ComponentName,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Default — single controllable story
export const Default: Story = {
  args: { variant: 'primary' },
};

// 2. AllVariants — visual showcase grid
export const AllVariants: Story = {
  render: () => (
    <div className="flex gap-4">
      <ComponentName variant="primary" />
      <ComponentName variant="secondary" />
    </div>
  ),
};
```

### Page Stories (`Pages/` directory)

Page stories live in `src/stories/Pages/` and demonstrate full-page layouts using templates and layout primitives (PageShell, etc.). They follow a different pattern from component stories:

**Structure rules:**
- Title: `"Pages/Page Name"`
- Layout: `fullscreen` (no centering)
- Use `render:` functions (not `args:`)
- Extract shared data (files, messages, users) as top-level constants
- Use section divider comments between logical blocks
- Keep to 2-3 stories max: **Default** + key alternate states (e.g. `EmptyChat`, `CardGridView`)

```tsx
// src/stories/Pages/ExamplePage.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { ExamplePageTemplate } from "../../templates/ExamplePageTemplate";

const meta: Meta<typeof ExamplePageTemplate> = {
  title: "Pages/Example Page",
  component: ExamplePageTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof ExamplePageTemplate>;

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

const files = [
  { id: "1", name: "Document A" },
  { id: "2", name: "Document B" },
];

const sharedProps = {
  title: "Example Page",
  files,
  userName: "Ava Campbell",
  userInitials: "AC",
};

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

export const Default: Story = {
  render: () => <ExamplePageTemplate {...sharedProps} />,
};

/* ------------------------------------------------------------------ */
/*  Story: Empty State                                                 */
/* ------------------------------------------------------------------ */

export const EmptyState: Story = {
  render: () => (
    <ExamplePageTemplate {...sharedProps} files={[]} />
  ),
};
```

## Figma Resources

- UI Components: https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3
- Typography & Icons: https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons
- Zest Illustrations: https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations

## Deployment

**Vercel (automatic):**
- Pushes to `main` branch auto-deploy to Vercel
- Live at: https://gitlaw-ui.vercel.app

**GitHub Pages (manual):**
```bash
npm run deploy
```

## Git Workflow

- **Always create a new branch** when starting a new task (e.g. `feature/`, `fix/`, `chore/`)
- Never commit directly to `main` — use PRs to merge
- Commit messages should be clear and descriptive
- Always include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>` in commits
- Push branch and create PR for review; merge to `main` triggers auto-deploy to Vercel

## Tidy Up Routine

When asked to "tidy up" the repo, run through these checks in order. Each step has a specific command or search to run — no guessing.

### 1. Exports & Count

```bash
# Count component files
ls src/components/*.tsx | wc -l

# Count exports in index.ts
grep -c "^export {" src/components/index.ts
```

- Compare counts — every `.tsx` in `src/components/` must have a matching export in `index.ts` (both component and types)
- Update `src/stories/Introduction.mdx` component count if it changed
- Update the "Existing Components" table in this file if components were added/removed

### 2. Story Categories

```bash
# List all story titles
grep "title:" src/stories/*.stories.tsx src/stories/**/*.stories.tsx
```

- Verify every component story uses `Components/<Category>/Name` format (see category table above)
- Verify Chat stories use `Chat/`, Editor stories use `Editor/`, Layout stories use `Layout/`
- Fix any miscategorized stories
- Update story links in `Introduction.mdx` if titles changed (links are kebab-case of title: `Components/Data Display/Card` → `?path=/docs/components-data-display-card--docs`)

### 3. Story Consolidation

```bash
# Find stories with too many exports
for f in src/stories/*.stories.tsx; do echo "$(grep -c 'export const' "$f") $f"; done | sort -rn
```

- Max 3-4 stories per file: Default + AllVariants + Interactive (optional) + 1 domain-specific (rare)
- Merge individual variant stories (e.g. `Primary`, `Secondary`, `Disabled`) into a single `AllVariants` grid
- Remove redundant stories that duplicate what Default + controls already provide

### 4. Design Token Consistency

```bash
# Find hardcoded hex colors in components (exclude specs, config, CSS)
grep -rn '"#[0-9A-Fa-f]' src/components/ src/templates/
```

- Every hex color in components should come from `colors.*` tokens in `src/specs/colors.ts`
- Exception: `Icon.tsx` uses hex keys in its `colorFilters` lookup table (intentional)
- Check Tailwind classes use semantic names (`bg-primary`, `text-text-secondary`) not raw colors

### 5. Repeated Patterns

```bash
# Find repeated Tailwind patterns across components
grep -roh 'transition-[a-z]* duration-fast ease-gitlaw' src/components/ | sort | uniq -c | sort -rn
```

- If a Tailwind class combo appears 3+ times, extract to `src/styles/globals.css` as a `@layer utilities` class
- Existing utilities: `transition-interactive`, `transition-fade`, `shadow-card`
- When adding a new utility, do a bulk replace across all files, then verify with grep that no old pattern remains

### 6. Build & Verify

```bash
npm run build-storybook
```

- Must complete with zero errors (chunk size warnings are expected and OK)
- Spot-check a few stories in the browser if Storybook is running

### 7. Commit & Push

- Stage all changed files explicitly (not `git add -A`)
- Write a descriptive commit message summarizing what was tidied
- Push to `main` for auto-deploy to Vercel
