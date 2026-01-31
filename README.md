# GitLaw UI

A React + Tailwind CSS component library built from the GitLaw Figma design system.

**Live**: [gitlaw-ui.vercel.app](https://gitlaw-ui.vercel.app)

## Components

| Component | Description |
|-----------|-------------|
| **Button** | Versatile button with variants: primary, secondary, outline, ghost, destructive, disabled, icon |
| **Input** | Text input with label, icons, and multiple sizes |
| **Avatar** | User avatar supporting images, initials, icons, and empty states |
| **Badge** | Notification badge with color variants (red, orange, green, primary, secondary) |
| **Tag** | Label/tag component with icon and close button support |
| **Tab** | Navigation tab with badge support and selection states |
| **Switch** | Toggle switch for boolean settings |
| **MenuItem** | List item with multiple left element types |
| **Select** | Dropdown select with search and validation |
| **TextField** | Multi-line text area with label support |
| **Sidebar** | Navigation sidebar with collapsed/expanded states |
| **Tooltip** | Hover tooltip with multiple sizes and positions |
| **Card** | Content card for files, templates, and folders |
| **Dialog** | Modal dialog with action buttons |
| **ChatInput** | AI chat input with quick actions |
| **Toast** | Notification toast component |
| **Icon** | Dynamic icon component (1474 icons) |

## Foundations

| Category | Description |
|----------|-------------|
| **Colors** | Semantic and primitive color palette |
| **Typography** | Font families, sizes, and weights |
| **Spacing** | Spacing scale and border radius tokens |
| **Icons** | 1474 searchable icons with categories |
| **Illustrations** | 100 Zest illustrations with search |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run storybook
```

Opens at [http://localhost:6006](http://localhost:6006)

### Build

```bash
npm run build-storybook
```

## Design Tokens

### Colors

```css
--primary: #5e49d6;
--secondary: #ebe7ff;
--destructive: #e11d48;
--alert: #f97316;
--positive: #15803d;
```

### Typography

Font: **DM Sans**

| Size | Value |
|------|-------|
| xxs | 10px |
| xs | 12px |
| sm | 14px |
| base | 16px |
| lg | 18px |
| xl | 20px |
| 2xl | 24px |

## Usage

```tsx
import { Button, Input, Avatar, Icon } from './components';

// Button
<Button variant="primary" size="m">Click me</Button>

// Input
<Input placeholder="Enter text..." showLabel label="Email" />

// Avatar
<Avatar type="initials" initials="JD" size="M" />

// Icon
<Icon name="check" className="size-6" color="#5E49D6" />
```

## Figma Source

- [UI-v3 Library](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v3)
- [Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Storybook 8
- Vite
