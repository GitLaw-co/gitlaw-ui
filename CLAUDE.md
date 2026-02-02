# Claude Instructions for GitLaw UI

This is a React component library built with Tailwind CSS, based on the GitLaw Figma design system.

## Quick Commands

| Task | Command |
|------|---------|
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

### Creating a New Component

1. Create component file: `src/components/ComponentName.tsx`
2. Create story file: `src/stories/ComponentName.stories.tsx`
3. Export from `src/components/index.ts`
4. Use design tokens from `src/specs/`

## Figma Resources

- UI Components: https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3
- Typography & Icons: https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons
- Zest Illustrations: https://www.figma.com/design/ESVXNLwUE88l7lz8xK6st8/Zest-Illustrations

## Deployment

Always deploy after making changes:

```bash
npm run deploy
```

This builds Storybook and deploys to GitHub Pages.

## Git Workflow

- Commit messages should be clear and descriptive
- Always include `Co-Authored-By: Claude Opus 4.5 <noreply@anthropic.com>` in commits
- Push to `main` branch for immediate deployment
