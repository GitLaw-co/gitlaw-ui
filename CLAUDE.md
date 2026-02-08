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

Templates/         ← 📋 Planned
  Page layouts, shells

Prototypes/        ← 📋 Planned
  Full interactive flows
```

## Existing Components

| Component | Status | Description |
|-----------|--------|-------------|
| Avatar | ✅ Stable | Images, initials, icons, or empty states |
| Badge | ✅ Stable | Notification indicators |
| Button | ✅ Stable | Primary, secondary, outline, ghost, destructive, disabled, icon variants |
| Card | ✅ Stable | File, template, and folder cards |
| Checkbox | ✅ Stable | Checkbox with indeterminate state |
| ChatInput | ✅ Stable | AI chat interface |
| ChatThread | ✅ Stable | Chat conversation thread |
| Dialog | ✅ Stable | Modal dialogs |
| Dropdown | ✅ Stable | Adaptive width dropdown menu |
| EditorHeader | ✅ Stable | Document title bar with actions |
| EditorPaper | ✅ Stable | Document editing surface |
| EditorSection | ✅ Stable | Collapsible content sections |
| EditorToolbar | ✅ Stable | Formatting toolbar |
| Icon | ✅ Stable | 1,475 icons with color support |
| Input | ✅ Stable | Text input with label, icons, validation states |
| ListHeader | ✅ Stable | Toolbar above file lists with icon actions and edit mode |
| MenuItem | ✅ Stable | List items with icons, avatars, checkboxes |
| PageNav | ✅ Stable | Settings navigation with context switcher |
| Popover | ✅ Stable | Click/hover triggered popover overlay |
| Radio | ✅ Stable | Radio button with label |
| Select | ✅ Stable | Searchable dropdown with multi-select |
| Sidebar | ✅ Stable | Collapsible navigation |
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
├── stories/          # Storybook stories
├── specs/            # Design tokens and constants
│   ├── colors.ts     # Color constants - USE THESE, not hex codes
│   └── index.ts      # Exports all specs
└── styles/
    └── globals.css   # CSS variables and Tailwind config

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
6. **Review against Figma before finalising** - Always verify component matches Figma specs

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
  title: 'Components/ComponentName',
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

- Commit messages should be clear and descriptive
- Always include `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>` in commits
- Push to `main` branch for immediate deployment

## Tidy Up Routine

When asked to "tidy up" the repo, perform these checks:

### 1. Update Documentation
- Update `src/stories/Introduction.mdx` with correct component count
- Ensure all new components are listed in the component navigation sections
- Update the existing components table in this file if needed

### 2. Verify Exports
- Check `src/components/index.ts` exports all components
- Ensure both named exports and types are exported

### 3. Design Token Consistency
- Verify all components use `colors.` constants from `src/specs/colors.ts`
- Check for hardcoded hex colors and replace with tokens
- Verify Tailwind classes use semantic names (e.g., `text-foreground`, `bg-card`)

### 4. Consolidate Repeated Patterns
- Look for repeated inline styles (e.g., shadows, transitions)
- Add utilities to `tailwind.config.js` if pattern appears 3+ times
- Example: `shadow-card` for the standard card shadow

### 5. Build & Deploy
- Run `npm run build-storybook` to verify no errors
- Commit changes with descriptive message
- Run `npm run deploy` to publish
