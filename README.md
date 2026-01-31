# GitLaw UI

An **experimental** React component library built with Tailwind CSS, generated using Claude from the GitLaw Figma design system.

[![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)](https://gitlaw-ui.vercel.app)
[![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

> **Note:** This is a proof-of-concept implementation created with AI assistance. It demonstrates how Claude can translate Figma designs into functional React components. Not intended for production use.

[Live Storybook](https://gitlaw-ui.vercel.app) | [Figma Source](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)

---

## Quick Start

```bash
# Clone and install
git clone https://github.com/GitLaw-co/gitlaw-ui.git
cd gitlaw-ui
npm install

# Run Storybook
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006)

## Usage

```tsx
import { Button, Input, Avatar, Icon } from './components';

<Button variant="primary" size="m">Get Started</Button>

<Input label="Email" placeholder="you@example.com" showLabel />

<Avatar type="initials" initials="JD" size="M" />

<Icon name="check" className="size-6" color="#5E49D6" />
```

## Components

### Core

| Component | Description |
|-----------|-------------|
| **Button** | Primary, secondary, outline, ghost, destructive variants with 5 sizes |
| **Input** | Text input with labels, icons, validation states |
| **TextField** | Multi-line textarea with character count |
| **Select** | Searchable dropdown with multi-select support |
| **Switch** | Toggle for boolean settings |

### Data Display

| Component | Description |
|-----------|-------------|
| **Avatar** | Images, initials, icons, or empty states |
| **Badge** | Notification indicators with color variants |
| **Tag** | Labels with optional icon and close button |
| **Card** | File, template, and folder cards with actions |
| **Tooltip** | Contextual hints in multiple sizes/positions |
| **Toast** | Notification messages |

### Navigation

| Component | Description |
|-----------|-------------|
| **Tab** | Tab navigation with badge support |
| **MenuItem** | List items with icons, avatars, or checkboxes |
| **Sidebar** | Collapsible navigation with user states |

### Feedback

| Component | Description |
|-----------|-------------|
| **Dialog** | Modal dialogs with action buttons |
| **ChatInput** | AI chat interface with quick actions |

### Foundation

| Resource | Count |
|----------|-------|
| **Icons** | 1,474 searchable icons |
| **Illustrations** | 100 Zest illustrations |
| **Colors** | Semantic + primitive palette |
| **Typography** | DM Sans, 7 size scales |

## Design Tokens

```css
/* Primary palette */
--primary: #5e49d6;
--primary-hover: #6f5eec;
--secondary: #ebe7ff;

/* Semantic colors */
--destructive: #e11d48;
--alert: #f97316;
--positive: #15803d;

/* Text */
--text-primary: #1b1b1f;
--text-secondary: #989898;
```

## Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start dev server on :6006 |
| `npm run build-storybook` | Build static Storybook |
| `npm run build` | Build component library |
| `npm run lint` | Run ESLint |

## Tech Stack

| Technology | Version |
|------------|---------|
| React | 18 |
| TypeScript | 5 |
| Tailwind CSS | 3 |
| Storybook | 8 |
| Vite | 5 |

## Project Structure

```
src/
├── components/       # React components
│   ├── Button/
│   ├── Input/
│   └── ...
├── stories/          # Storybook stories
├── assets/           # Icons, illustrations
└── styles/           # Global styles, tokens
```

## Resources

- [Live Storybook](https://gitlaw-ui.vercel.app)
- [Figma UI-v3 Library](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)
- [Figma Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-component`)
3. Commit changes (`git commit -m 'Add new component'`)
4. Push to branch (`git push origin feature/new-component`)
5. Open a Pull Request

## License

MIT
