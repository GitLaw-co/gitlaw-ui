# GitLaw UI Component Library

A React + Tailwind CSS component library generated from the GitLaw Figma design system.

## Components

This library includes the following components:

| Component | Description |
|-----------|-------------|
| **Button** | Versatile button with variants: primary, secondary, outline, ghost, destructive, disabled, icon |
| **Input** | Text input with label, icons, and multiple sizes |
| **Avatar** | User avatar supporting images, initials, icons, and empty states |
| **Badge** | Notification badge with color variants (red, orange, green, primary, secondary) |
| **Tag** | Label/tag component with icon and close button support |
| **Tab** | Navigation tab with badge support and selection states |
| **Switch** | Toggle switch for boolean settings |

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
cd gitlaw-storybook
npm install
```

### Development

Start Storybook in development mode:

```bash
npm run storybook
```

This will open Storybook at [http://localhost:6006](http://localhost:6006)

### Build

Build Storybook for production:

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

### Spacing

| Token | Value |
|-------|-------|
| xs/s | 4px |
| m | 8px |
| l | 12px |
| xl | 16px |
| 2xl | 24px |

## Usage

```tsx
import { Button, Input, Avatar, Badge, Tag, Tab, Switch } from './components';

// Button
<Button variant="primary" size="m">Click me</Button>

// Input
<Input placeholder="Enter text..." showLabel label="Email" />

// Avatar
<Avatar type="initials" initials="JD" size="M" />

// Badge
<Badge type="red" count={5} />

// Tag
<Tag label="TypeScript" showClose />

// Tab
<Tab label="Activity" status="selected-underlined" />

// Switch
<Switch checked onChange={(checked) => console.log(checked)} />
```

## Figma Source

- [UI-v2 Library](https://www.figma.com/design/czek1GvIeHMJnnvc3aqWHK/UI-v2)
- [Typography & Icons](https://www.figma.com/design/EhLq6bat0Gx4dRJpYGFGw9/Typography---Icons)

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Storybook 8
- Vite
