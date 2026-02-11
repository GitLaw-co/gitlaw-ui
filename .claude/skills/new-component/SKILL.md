---
name: new-component
description: Scaffold a new React component with the correct forwardRef pattern, TypeScript types, exports, and a matching Storybook story. Pass the component name as an argument.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Bash, Edit, Write
argument-hint: "<ComponentName>"
---

# New Component

Create a new component named `$ARGUMENTS` following all project conventions.

## Pre-flight

1. Verify `$ARGUMENTS` doesn't already exist: check `src/components/$ARGUMENTS.tsx`
2. If it exists, stop and inform the user

## Step 1: Create the Component File

Create `src/components/$ARGUMENTS.tsx` using this pattern (reference `Button.tsx` as canonical example):

```tsx
import React, { forwardRef } from 'react';

type NativeProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  'onClick' | 'className' | 'children'
>;

export interface $ARGUMENTSProps extends NativeProps {
  /** Additional CSS classes */
  className?: string;
  /** Component content */
  children?: React.ReactNode;
}

export const $ARGUMENTS = forwardRef<HTMLDivElement, $ARGUMENTSProps>(
  ({ className = '', children, ...nativeProps }, ref) => {
    return (
      <div ref={ref} className={`${className}`} {...nativeProps}>
        {children}
      </div>
    );
  }
);

$ARGUMENTS.displayName = '$ARGUMENTS';
```

### Conventions to follow:
- Use `React.forwardRef` always
- Accept native element props via `Omit<>` pattern
- Use string unions for variants, not boolean flags
- Import colors from `'../specs'`, never hardcoded hex
- Use `gitlaw-*` spacing tokens, not Tailwind defaults (`p-gitlaw-m` not `p-2`)
- Use `transition-interactive` or `transition-fade` for transitions
- No inline `style={}` — use Tailwind classes only

## Step 2: Add Exports to index.ts

Add to `src/components/index.ts`:

```ts
export { $ARGUMENTS } from './$ARGUMENTS';
export type { $ARGUMENTSProps } from './$ARGUMENTS';
```

Place it alphabetically among existing exports.

## Step 3: Create the Story File

Create `src/stories/$ARGUMENTS.stories.tsx`.

Ask the user which category to use:
- Actions (Button, MenuItem)
- Form (Input, Select, Checkbox, Switch, Radio, TextField)
- Data Display (TableListItem, Card, Avatar, Badge, Tag)
- Navigation (Sidebar, Tab, PageNav, TopHeader, ListHeader)
- Overlays (Dialog, Dropdown, Popover, Tooltip)
- Feedback (Toast, StickyFeaturePromoBar)

Use this structure:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { $ARGUMENTS } from '../components/$ARGUMENTS';

const meta: Meta<typeof $ARGUMENTS> = {
  title: 'Components/<Category>/$ARGUMENTS',
  component: $ARGUMENTS,
  parameters: { layout: 'centered' },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-gitlaw-xl">
      {/* All visual states */}
    </div>
  ),
};
```

### Story rules:
- Max 3-4 stories: Default, AllVariants, Interactive (if needed)
- Do NOT create individual stories per variant
- Default story must be controllable with args panel
- AllVariants must show a grid of all visual states

## Step 4: Update CLAUDE.md

Add the new component to the "Existing Components" table in `CLAUDE.md`:

```
| $ARGUMENTS | Brief description |
```

Insert alphabetically.

## Step 5: Verify

1. Run `npm run build-storybook` to verify the build passes
2. Report any errors
