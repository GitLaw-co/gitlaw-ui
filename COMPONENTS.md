# Component API Reference

Quick reference for all GitLaw UI components. Use this when composing prototypes.

**Import pattern:**
```tsx
import { Button, Input, Select, Icon } from '../components';
import { colors } from '../specs';
```

---

## Layout Primitives

### PageShell

App chrome for settings/files pages: Sidebar + TopHeader + scrollable content area.

```tsx
<PageShell
  title="Settings"                             // TopHeader title
  breadcrumbs={[{ id: "1", label: "Settings" }]} // overrides title
  isSignedIn={true}
  sidebarVariant="inner"                       // "landing" | "inner"
  initialSidebarCollapsed={true}
  showHeaderStroke={true}                      // bottom dashed border (default: true)
  userName="Alex Carter"
  userInitials="AC"
  onSidebarToggle={(collapsed) => {}}
>
  {/* Content area: px-[84px] pt-8 pb-16, scrollable */}
  <div className="flex gap-4">
    <PageNav ... />
    <div className="flex-1 max-w-[1040px]">
      <Stack gap="none">
        <MenuItem ... />
      </Stack>
    </div>
  </div>
</PageShell>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | `"Settings"` |
| `breadcrumbs` | `BreadcrumbItem[]` | — |
| `isSignedIn` | `boolean` | `true` |
| `sidebarVariant` | `"landing" \| "inner"` | `"inner"` |
| `initialSidebarCollapsed` | `boolean` | `true` |
| `menuItems` | `SidebarMenuItem[]` | — |
| `chatHistory` | `SidebarChatHistoryItem[]` | — |
| `userName` | `string` | `"Alex Carter"` |
| `userInitials` | `string` | `"AC"` |
| `userAvatar` | `string` | — |
| `showHeaderStroke` | `boolean` | `true` |
| `children` | `ReactNode` | **required** |
| `onSidebarToggle` | `(collapsed: boolean) => void` | — |

---

### Stack

Vertical or horizontal list of children with consistent spacing.

```tsx
<Stack gap="s" direction="vertical" padding="none" dividers={false}>
  <MenuItem ... />
  <MenuItem ... />
  <MenuItem ... />
</Stack>
```

| Prop | Type | Default |
|------|------|---------|
| `gap` | `"none" \| "xs" \| "s" \| "m" \| "l" \| "xl"` | `"s"` |
| `direction` | `"vertical" \| "horizontal"` | `"vertical"` |
| `padding` | `"none" \| "xs" \| "s" \| "m" \| "l" \| "xl"` | `"none"` |
| `dividers` | `boolean` | `false` |
| `children` | `ReactNode` | **required** |

**Gap values:** none=0, xs=4px, s=8px, m=12px, l=16px, xl=24px

---

### Section

Labeled group within a page. Use inside a Stack to group related rows.

```tsx
// Default — no background
<Section title="Danger zone" showBorder={true}>
  <Stack gap="none"><MenuItem ... /></Stack>
</Section>

// Card variant — white card background (matches Figma settings list groups)
<Section variant="card">
  <Stack gap="none"><MenuItem ... /></Stack>
</Section>

// Clickable card with three-dot menu (use MenuItem's rIcon1 for the ellipsis)
<Section variant="card" onClick={() => navigate("/org/whisk")}>
  <Stack gap="none">
    <MenuItem primaryText="Whisk" showLeftElement leftElement="avatar" avatarInitials="WH" width="fill"
      showRIcon1 rIcon1="ellipsis" />
    <MenuItem primaryText="Description text..." showLeftElement={false} width="fill" />
  </Stack>
</Section>

// With action slot
<Section title="Team members" action={<Button size="s">Invite</Button>}>
  <Stack gap="none"><MenuItem ... /></Stack>
</Section>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | — |
| `action` | `ReactNode` | — |
| `variant` | `"default" \| "card"` | `"default"` |
| `showBorder` | `boolean` | `false` |
| `onClick` | `() => void` | — |
| `children` | `ReactNode` | **required** |

---

## Layout & Navigation

### TopHeader

Top-level page header with breadcrumbs, file dropdown, and auth actions.

```tsx
<TopHeader
  title="Documents"                          // simple title (or use breadcrumbs)
  breadcrumbs={[                             // multi-level nav (overrides title)
    { id: "home", label: "Home", onClick: () => {} },
    { id: "docs", label: "Documents" },
  ]}
  showStroke={true}                          // bottom border
  showFiles={false}                          // file dropdown button
  files={[{ id: "1", name: "NDA.pdf", isSelected: true }]}
  isSignedIn={true}                          // false shows login/signup buttons
  isLanding={false}                          // true = purple background variant
/>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | — |
| `breadcrumbs` | `BreadcrumbItem[]` | `[]` |
| `showStroke` | `boolean` | `true` |
| `showFiles` | `boolean` | `false` |
| `fileCount` | `number` | `0` |
| `files` | `FileItem[]` | `[]` |
| `selectedFileId` | `string` | — |
| `onFileSelect` | `(file: FileItem) => void` | — |
| `isSignedIn` | `boolean` | `true` |
| `isLanding` | `boolean` | `false` |
| `showMenu` | `boolean` | `false` |
| `onTitleClick`, `onLoginClick`, `onSignUpClick`, `onMenuClick` | `() => void` | — |

**Types:** `BreadcrumbItem = { id, label, onClick? }`, `FileItem = { id, name, isSelected? }`

---

### Sidebar

Collapsible navigation sidebar with logo, menu items, chat history, and user profile.

```tsx
<Sidebar
  variant="inner"                            // "landing" (dark) | "inner" (light)
  status="expanded"                          // "collapsed" | "expanded"
  user="signed-in"                           // "signed-in" | "signed-out"
  menuItems={[
    { id: "home", label: "Home", icon: <Icon name="home" className="size-5" />, active: true },
    { id: "docs", label: "Documents", icon: <Icon name="file-text" className="size-5" /> },
  ]}
  chatHistory={[
    { id: "date1", label: "Today", isDateHeader: true },
    { id: "chat1", label: "Draft NDA for Acme Corp" },
  ]}
  userName="Alex Carter"
  userInitials="AC"
  onToggle={() => {}}
  onMenuItemClick={(id) => {}}
  onChatHistoryClick={(id) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `variant` | `"landing" \| "inner"` | `"inner"` |
| `status` | `"collapsed" \| "expanded"` | `"expanded"` |
| `user` | `"signed-in" \| "signed-out"` | `"signed-in"` |
| `menuItems` | `SidebarMenuItem[]` | — |
| `chatHistory` | `SidebarChatHistoryItem[]` | default list |
| `userName` | `string` | `"Alex Carter"` |
| `userInitials` | `string` | `"AC"` |
| `userAvatar` | `string` | — |
| `onToggle`, `onMenuItemClick`, `onChatHistoryClick` | callbacks | — |

**Types:** `SidebarMenuItem = { id, label, icon?, active? }`, `SidebarChatHistoryItem = { id, label, isDateHeader? }`

---

### PageNav

Settings navigation sidebar with account context switcher and nav items.

```tsx
<PageNav
  activeAccount={{ id: "1", name: "Alex Carter", type: "Personal account", initials: "AC" }}
  accounts={[
    { id: "1", name: "Alex Carter", type: "Personal account", initials: "AC" },
    { id: "2", name: "Acme Corp", type: "Organization", initials: "AC" },
  ]}
  items={[
    { id: "general", label: "General" },
    { id: "members", label: "Members" },
    { id: "billing", label: "Billing" },
  ]}
  activeItemId="general"
  onItemClick={(item) => {}}
  onAccountSwitch={(account) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `activeAccount` | `PageNavAccount` | **required** |
| `accounts` | `PageNavAccount[]` | **required** |
| `items` | `PageNavItem[]` | **required** |
| `activeItemId` | `string` | — |
| `onItemClick` | `(item: PageNavItem) => void` | — |
| `onAccountSwitch` | `(account: PageNavAccount) => void` | — |

**Types:** `PageNavAccount = { id, name, type, avatar?, initials? }`, `PageNavItem = { id, label }`

---

### Tab / Tabs

Tab navigation with optional badge counts.

```tsx
// Single tab
<Tab label="Activity" status="selected" showBadge badgeCount={3} />

// Tab group (managed)
<Tabs
  tabs={[
    { label: "Activity", badgeCount: 3 },
    { label: "Documents" },
    { label: "Settings" },
  ]}
  selectedIndex={0}
  showBadges={true}
  onSelect={(index) => {}}
/>
```

| Prop (Tab) | Type | Default |
|------------|------|---------|
| `label` | `string` | `"Activity"` |
| `status` | `"default" \| "selected" \| "selected-underlined"` | `"default"` |
| `showBadge` | `boolean` | `false` |
| `badgeCount` | `number` | `7` |

| Prop (Tabs) | Type | Default |
|-------------|------|---------|
| `tabs` | `Array<{ label, badgeCount? }>` | **required** |
| `selectedIndex` | `number` | `0` |
| `showBadges` | `boolean` | `false` |
| `onSelect` | `(index: number) => void` | — |

---

## Form Controls

### Button

```tsx
<Button
  variant="primary"                          // "primary" | "secondary" | "outline" | "ghost" | "destructive" | "disabled" | "icon"
  size="m"                                   // "xs" | "s" | "m" | "l" | "xl"
  showLeftIcon leftIconName="plus"
  showRightIcon rightIconName="chevron-down"
  disabled={false}
  onClick={() => {}}
>
  Create Document
</Button>
```

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | `"Button"` |
| `variant` | `ButtonVariant` | `"primary"` |
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` |
| `showLeftIcon` | `boolean` | `false` |
| `showRightIcon` | `boolean` | `false` |
| `leftIconName` | `string` | — |
| `rightIconName` | `string` | — |
| `leftIcon` | `ReactNode` | — (overrides leftIconName) |
| `rightIcon` | `ReactNode` | — (overrides rightIconName) |
| `disabled` | `boolean` | `false` |
| `onClick` | `() => void` | — |

---

### Input

Text input with optional label, left/right icons, and document context styling.

```tsx
<Input
  size="m"                                   // "xs" | "s" | "m" | "l" | "xl"
  placeholder="Search documents..."
  value={value}
  onChange={(val) => setValue(val)}
  showLabel label="Email"
  showLeftIcon leftIcon={<Icon name="search" className="size-5" color={colors.iconSecondary} />}
  context="default"                          // "default" | "document-empty" | "document-filled"
/>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` |
| `align` | `"fill" \| "hug"` | `"fill"` |
| `context` | `"default" \| "document-empty" \| "document-filled"` | `"default"` |
| `placeholder` | `string` | `"Placeholder text"` |
| `value` | `string` | — (uncontrolled if omitted) |
| `onChange` | `(value: string) => void` | — |
| `showLabel` | `boolean` | `false` |
| `label` | `string` | `"Label"` |
| `showLeftIcon` | `boolean` | `false` |
| `showRightIcon` | `boolean` | `false` |
| `leftIcon` / `rightIcon` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |

---

### TextField

Multi-line textarea with optional border and icon.

```tsx
<TextField
  size="m"
  placeholder="Enter description..."
  value={text}
  onChange={(val) => setText(val)}
  rows={4}
  showStroke={true}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` |
| `placeholder` | `string` | `"Placeholder text"` |
| `value` | `string` | — (uncontrolled if omitted) |
| `onChange` | `(value: string) => void` | — |
| `showStroke` | `boolean` | `true` |
| `showIcon` | `boolean` | `false` |
| `icon` | `ReactNode` | — |
| `rows` | `number` | `3` |
| `disabled` | `boolean` | `false` |

---

### Select

Dropdown select with optional label, left icon, and searchable options.

```tsx
<Select
  size="m"
  placeholder="Select jurisdiction..."
  options={[
    { value: "us", label: "United States" },
    { value: "uk", label: "United Kingdom" },
  ]}
  value="us"
  onChange={(val) => {}}
  showLabel label="Jurisdiction"
  labelPosition="top"                        // "top" | "left"
/>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `"xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` |
| `align` | `"fill" \| "hug"` | `"fill"` |
| `labelPosition` | `"top" \| "left"` | `"top"` |
| `placeholder` | `string` | `"Select an option"` |
| `options` | `SelectOption[]` | `[]` |
| `value` | `string` | — (uncontrolled if omitted) |
| `onChange` | `(value: string) => void` | — |
| `showLabel` | `boolean` | `false` |
| `label` | `string` | `"Label"` |
| `showLeftIcon` | `boolean` | `false` |
| `leftIcon` / `rightIcon` | `ReactNode` | — |
| `disabled` | `boolean` | `false` |

**Types:** `SelectOption = { value, label }`

---

### Checkbox

```tsx
<Checkbox
  status="off"                               // "off" | "on" | "semi" (indeterminate)
  disabled={false}
  onChange={(status) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `status` | `"off" \| "on" \| "semi"` | `"off"` |
| `disabled` | `boolean` | `false` |
| `onChange` | `(status: CheckboxStatus) => void` | — |

---

### Radio

```tsx
<Radio
  status={true}                              // true = selected, false = unselected
  disabled={false}
  onChange={(status) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `status` | `boolean` | `false` |
| `disabled` | `boolean` | `false` |
| `onChange` | `(status: boolean) => void` | — |

---

### Switch

```tsx
<Switch
  checked={false}
  size="m"                                   // "s" | "m"
  disabled={false}
  onChange={(checked) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `checked` | `boolean` | `false` |
| `size` | `"s" \| "m"` | `"m"` |
| `disabled` | `boolean` | `false` |
| `onChange` | `(checked: boolean) => void` | — |

---

## Data Display

### Icon

Renders SVG from `public/icons/` with CSS filter coloring. 1,475 icons available (kebab-case names).

```tsx
<Icon name="file-text" className="size-5" color={colors.iconPrimary} />
<Icon name="search" className="size-4" color={colors.iconSecondary} />
<Icon name="chevron-down" className="size-3" color={colors.iconDisabled} />
```

| Prop | Type | Default |
|------|------|---------|
| `name` | `string` | **required** |
| `className` | `string` (Tailwind size) | `"size-6"` |
| `color` | `string` (hex or `"currentColor"`) | `"#1B1B1F"` |

**Common icon names:** `home`, `file-text`, `folder`, `search`, `plus`, `x`, `check`, `chevron-down`, `chevron-right`, `arrow-left`, `arrow-right`, `settings`, `user`, `users`, `star`, `trash-2`, `edit-2`, `copy`, `download`, `upload`, `share-2`, `lock`, `unlock`, `eye`, `eye-off`, `bell`, `mail`, `calendar`, `clock`, `filter`, `more-horizontal`, `more-vertical`, `external-link`, `link`, `image`, `bold`, `italic`, `underline`, `list`, `hash`

---

### Avatar

```tsx
<Avatar type="image" size="M" src="/avatar.jpg" />
<Avatar type="initials" size="L" initials="AC" />
<Avatar type="icon" size="S" />
<Avatar type="empty" size="XL" showEdit onEditClick={() => {}} />
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `"image" \| "initials" \| "icon" \| "empty"` | `"image"` |
| `size` | `"S" \| "M" \| "L" \| "XL"` | `"M"` |
| `src` | `string` | — |
| `initials` | `string` | `"AC"` |
| `alt` | `string` | `"Avatar"` |
| `showEdit` | `boolean` | `false` |
| `onEditClick` | `() => void` | — |

---

### Badge

```tsx
<Badge type="red" showNumber count={3} />
<Badge type="primary" showNumber={false} />  // dot only
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `"primary" \| "secondary" \| "red" \| "orange" \| "green"` | `"red"` |
| `showNumber` | `boolean` | `true` |
| `count` | `number` | `7` |

---

### Tag

```tsx
<Tag label="Draft" size="m" />
<Tag label="Urgent" size="s" weight="bold" showIcon icon={<Icon name="alert-circle" className="size-3" />} />
<Tag label="NDA" showClose onClose={() => {}} />
```

| Prop | Type | Default |
|------|------|---------|
| `label` | `string` | `"Label"` |
| `size` | `"xxs" \| "xs" \| "s" \| "m" \| "l" \| "xl"` | `"m"` |
| `weight` | `"regular" \| "bold"` | `"regular"` |
| `showIcon` | `boolean` | `false` |
| `icon` | `ReactNode` | — |
| `showClose` | `boolean` | `false` |
| `onClose` | `() => void` | — |

---

### StarIcon

```tsx
<StarIcon starred={true} className="size-5" />
```

| Prop | Type | Default |
|------|------|---------|
| `starred` | `boolean` | `false` |
| `className` | `string` | `"size-5"` |

---

### Card

File, template, or folder card with selection, starring, and double-click.

```tsx
<Card
  type="file"                                // "file" | "template" | "folder"
  title="Mutual NDA"
  description="Standard mutual non-disclosure agreement"
  ownerName="Alex Carter"
  ownerInitials="AC"
  visibility="private"                       // "private" | "public" | "shared" | "organization"
  starred={false}
  selected={false}
  onClick={() => {}}
  onDoubleClick={() => {}}
  onStarClick={() => {}}
/>

<Card
  type="folder"
  title="Employment Agreements"
  filesCount={8}
  files={[{ id: "1", name: "NDA.pdf" }, { id: "2", name: "Offer.pdf" }]}
  onFileClick={(file) => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `"file" \| "template" \| "folder"` | `"file"` |
| `title` | `string` | **required** |
| `description` | `string` | — |
| `ownerName` | `string` | — |
| `ownerInitials` | `string` | — |
| `ownerAvatar` | `string` | — |
| `visibility` | `"private" \| "public" \| "shared" \| "organization"` | `"private"` |
| `organizationName` | `string` | — |
| `starred` | `boolean` | `false` |
| `selected` | `boolean` | `false` |
| `filesCount` | `number` | `0` |
| `files` | `CardFileItem[]` | `[]` |
| `onClick`, `onDoubleClick`, `onStarClick`, `onMenuClick` | `() => void` | — |
| `onFileClick` | `(file: CardFileItem) => void` | — |

**Types:** `CardFileItem = { id, name }`

---

### TableListItem

Sortable table row with header, item, skeleton, and drag-and-drop types.

```tsx
// Header row
<TableListItem
  type="header"
  cols={6}                                   // 0 | 2 | 4 | 6 visible meta columns
  headerLabels={["Name", "Type", "Owner", "Last modified", "Jurisdiction", "Visibility"]}
  selectMode={true}
  selectStatus="off"                         // "off" | "on" | "semi"
  sortColumn="Name"
  sortDirection="asc"
  onSortChange={(col, dir) => {}}
/>

// Data row
<TableListItem
  type="item"
  cols={6}
  iconName="file-text"
  title="Mutual NDA"
  subtitle="Last edited 2 days ago"
  visibility="private"
  metaValues={["Contract", "Alex Carter", "Jan 15, 2025", "California", "Private"]}
  selected={false}
  starred={false}
  onStarClick={() => {}}
  onMenuClick={() => {}}
  onClick={() => {}}
/>

// Loading skeleton
<TableListItem type="skeleton" cols={6} />
```

| Prop | Type | Default |
|------|------|---------|
| `type` | `"item" \| "header" \| "skeleton" \| "drag-and-drop"` | `"item"` |
| `cols` | `0 \| 2 \| 4 \| 6` | `6` |
| `iconName` | `string` | `"folder"` |
| `title` | `string` | `"Employment Agreements"` |
| `subtitle` | `string` | `"8 files in folder"` |
| `visibility` | `"private" \| "public" \| "shared" \| "organization"` | — |
| `starCount` | `string` | — |
| `spam` | `boolean` | `false` |
| `metaValues` | `string[]` | `[]` |
| `selected` | `boolean` | `false` |
| `starred` | `boolean` | `false` |
| `headerLabels` | `string[]` | — |
| `selectMode` | `boolean` | `false` |
| `selectStatus` | `CheckboxStatus` | `"off"` |
| `sortColumn` | `string` | — |
| `sortDirection` | `"asc" \| "desc"` | — |
| `onSortChange` | `(column, direction) => void` | — |
| `onStarClick`, `onMenuClick`, `onClick`, `onDoubleClick` | `() => void` | — |

---

### MenuItem

Versatile list/menu row with configurable left element and rich right element area.

```tsx
// Simple icon menu item
<MenuItem
  primaryText="Settings"
  leftElement="icon"
  showLeftElement
  leftIcon={<Icon name="settings" className="size-5" color={colors.iconSecondary} />}
  onClick={() => {}}
/>

// With right-side elements
<MenuItem
  primaryText="Dark mode"
  showSecondaryText secondaryText="Enable dark theme"
  showLeftElement leftElement="icon"
  leftIcon={<Icon name="moon" className="size-5" />}
  showRSwitch rSwitchChecked={true} onRSwitchChange={(checked) => {}}
  width="fill"                               // "fill" | "hug"
/>

// Avatar menu item with label
<MenuItem
  primaryText="Alex Carter"
  showLeftElement leftElement="avatar"
  avatarInitials="AC"
  showRLabel rLabel="Owner"
/>
```

| Prop | Type | Default |
|------|------|---------|
| `primaryText` | `string` | `"Primary"` |
| `secondaryText` | `string` | `"2 minutes ago"` |
| `leftElement` | `"icon" \| "avatar" \| "clause" \| "select" \| "mini-users"` | `"icon"` |
| `showLeftElement` | `boolean` | `true` |
| `showSecondaryText` | `boolean` | `false` |
| `showBackground` | `boolean` | `false` |
| `showStroke` | `boolean` | `false` |
| `showTick` | `boolean` | `false` |
| `leftIcon` | `ReactNode` | — |
| `avatarSrc` / `avatarInitials` | `string` | — / `"AC"` |
| `selected` | `boolean` | `false` |
| `width` | `"fill" \| "hug"` | `"hug"` |
| `onClick` | `() => void` | — |

**Right element props** (all independently toggleable):

| Prop | Type | Default |
|------|------|---------|
| `showRLabel` / `rLabel` | `boolean` / `string` | `false` / `"Label"` |
| `showRIcon1` / `rIcon1` | `boolean` / `string` | `false` / `"check"` |
| `showRIcon2` / `rIcon2` | `boolean` / `string` | `false` / `"check"` |
| `showRButton` / `rButtonLabel` | `boolean` / `string` | `false` / `"Action"` |
| `showRButtonSet` | `boolean` | `false` |
| `showRBadge` / `rBadgeCount` | `boolean` / `number` | `false` / `7` |
| `showRSwitch` / `rSwitchChecked` / `rSwitchSize` | `boolean` / `boolean` / `"s" \| "m"` | `false` / `false` / `"m"` |
| `showRLargeAvatar` / `showRMediumAvatar` | `boolean` | `false` |
| `showRTags` / `rTagLabel` | `boolean` / `string` | `false` / `"Label"` |

---

## Overlays & Feedback

### Dialog

Modal dialog with title, message, and action buttons.

```tsx
<Dialog
  title="Delete document?"
  message="This action cannot be undone."
  primaryLabel="Delete"
  secondaryLabel="Cancel"
  showCloseButton={true}
  open={true}
  onPrimaryClick={() => {}}
  onSecondaryClick={() => {}}
  onClose={() => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | **required** |
| `message` | `string` | **required** |
| `primaryLabel` | `string` | `"Save changes"` |
| `secondaryLabel` | `string` | `"Discard changes"` |
| `showCloseButton` | `boolean` | `true` |
| `open` | `boolean` | `true` |
| `onPrimaryClick`, `onSecondaryClick`, `onClose` | `() => void` | — |

---

### Dropdown

Adaptive-width dropdown menu with optional heading and icons.

```tsx
<Dropdown
  items={[
    { id: "edit", label: "Edit", icon: "edit-2" },
    { id: "copy", label: "Duplicate", icon: "copy" },
    { id: "delete", label: "Delete", icon: "trash-2", disabled: true },
  ]}
  heading="Actions"
  showIcons={true}
  isOpen={true}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `items` | `DropdownItem[]` | **required** |
| `heading` | `string` | — |
| `showIcons` | `boolean` | `true` |
| `isOpen` | `boolean` | — (always visible if omitted) |

**Types:** `DropdownItem = { id, label, secondaryLabel?, icon?, selected?, disabled?, onClick? }`

---

### Popover

Positioned overlay triggered by hover or click.

```tsx
<Popover
  content={<div>Popover content here</div>}
  position="bottom"                          // "top" | "bottom" | "left" | "right"
  trigger="click"                            // "click" | "hover"
  gap={2}                                    // 1 | 2 | 3 | 4
  animated={true}
>
  <Button>Click me</Button>
</Popover>
```

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | **required** (trigger element) |
| `content` | `ReactNode` | **required** |
| `position` | `"top" \| "bottom" \| "left" \| "right"` | `"bottom"` |
| `trigger` | `"click" \| "hover"` | `"click"` |
| `isOpen` | `boolean` | — (uncontrolled if omitted) |
| `onOpenChange` | `(isOpen: boolean) => void` | — |
| `disabled` | `boolean` | `false` |
| `gap` | `1 \| 2 \| 3 \| 4` | `2` |
| `animated` | `boolean` | `true` |
| `animationDuration` | `number` (ms) | `200` |

---

### Tooltip

Hover-triggered tooltip wrapping Popover.

```tsx
<Tooltip content="Delete this document" position="top" size="m" type="neutral">
  <Button variant="icon"><Icon name="trash-2" /></Button>
</Tooltip>
```

| Prop | Type | Default |
|------|------|---------|
| `content` | `string` | **required** |
| `children` | `ReactNode` | **required** |
| `size` | `"s" \| "m" \| "l"` | `"m"` |
| `type` | `"neutral" \| "purple"` | `"neutral"` |
| `position` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` |
| `disabled` | `boolean` | `false` |

---

### Toast

Notification message bar.

```tsx
<Toast
  message="Document saved successfully"
  variant="default"                          // "default" | "success" | "error" | "warning"
  showAction actionLabel="Undo"
  onActionClick={() => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `message` | `string` | **required** |
| `variant` | `"default" \| "success" \| "error" \| "warning"` | `"default"` |
| `showAction` | `boolean` | `true` |
| `actionLabel` | `string` | `"Action"` |
| `onActionClick` | `() => void` | — |

---

### StickyFeaturePromoBar

Horizontal feature promotion banner.

```tsx
<StickyFeaturePromoBar
  title="Try AI Review"
  subtitle="Get instant feedback on your contracts"
  avatarSrc="/promo-avatar.png"
  showAction actionLabel="Try now"
  onActionClick={() => {}}
  onClose={() => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | **required** |
| `subtitle` | `string` | — |
| `avatarSrc` | `string` | — |
| `showAction` | `boolean` | `true` |
| `actionLabel` | `string` | `"Action"` |
| `onActionClick`, `onClose` | `() => void` | — |

---

## Chat Components

### ChatThread

Full chat conversation with messages, input, and disclaimer.

```tsx
<ChatThread
  messages={[
    { id: "1", role: "user", content: "Draft a mutual NDA" },
    { id: "2", role: "assistant", content: <p>Here's a draft NDA...</p> },
  ]}
  inputValue={value}
  onInputChange={(val) => setValue(val)}
  onSubmit={() => {}}
  disclaimer="GitLaw isn't a law firm. Always consult a qualified attorney."
/>
```

| Prop | Type | Default |
|------|------|---------|
| `messages` | `ChatMessage[]` | `[]` |
| `placeholder` | `string` | `"Ask anything"` |
| `inputValue` | `string` | `""` |
| `onInputChange` | `(value: string) => void` | — |
| `onSubmit` | `() => void` | — |
| `onAttachmentClick`, `onSettingsClick` | `() => void` | — |
| `showSettingsDropdown` | `boolean` | `false` |
| `settingsDropdownContent` | `ReactNode` | — |
| `settingsDropdownPosition` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` |
| `disclaimer` | `string` | default legal text |

**Types:** `ChatMessage = { id, role: "user" | "assistant", content: ReactNode }`

---

### ChatInput

Standalone AI chat input with animated placeholders and quick actions.

```tsx
<ChatInput
  status="active"                            // "active" | "populated" | "working"
  size="l"                                   // "l" | "m"
  value="" onChange={(val) => {}}
  onSubmit={() => {}}
  showQuickActions
  quickActions={[
    { id: "draft", label: "Draft", icon: "draft" },
    { id: "review", label: "Review", icon: "review" },
  ]}
  fullWidth={false}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `status` | `"active" \| "populated" \| "working"` | `"active"` |
| `size` | `"l" \| "m"` | `"l"` |
| `value` | `string` | `""` |
| `placeholder` | `string` | — |
| `animatedPlaceholders` | `string[]` | default legal prompts |
| `placeholderInterval` | `number` (ms) | `3000` |
| `showQuickActions` | `boolean` | `true` |
| `quickActions` | `QuickAction[]` | Draft, Review, Summarize |
| `fullWidth` | `boolean` | `false` |
| `onChange`, `onSubmit`, `onQuickActionClick`, `onAttachmentClick`, `onStopClick` | callbacks | — |

---

### ChatAssistantMessage / ChatUserMessage

```tsx
<ChatAssistantMessage>Here's the NDA draft...</ChatAssistantMessage>
<ChatUserMessage>Draft a mutual NDA</ChatUserMessage>
```

| Prop | Type | Default |
|------|------|---------|
| `children` | `ReactNode` | **required** |

---

## Editor Components

### EditorHeader

Document title bar with action buttons.

```tsx
<EditorHeader
  title="Mutual NDA"
  showShare={true}
  onClose={() => {}} onShare={() => {}} onESign={() => {}}
  onDownload={() => {}} onVersions={() => {}} onMore={() => {}}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `title` | `string` | `"Untitled document"` |
| `showShare` | `boolean` | `true` |
| `onClose`, `onTitleClick`, `onMenuClick`, `onShare`, `onESign`, `onDownload`, `onVersions`, `onMore` | `() => void` | — |

---

### EditorToolbar

Formatting toolbar with undo/redo, text styling, lists, and reviewing mode.

```tsx
<EditorToolbar
  size="xs"                                  // "xs" | "s"
  status="editing"                           // "editing" | "reviewing"
  onBold={() => {}} onItalic={() => {}} onUnderline={() => {}}
  onList={() => {}} onOrderedList={() => {}}
  onUndo={() => {}} undoDisabled={false}
  onRedo={() => {}} redoDisabled={true}
/>
```

| Prop | Type | Default |
|------|------|---------|
| `size` | `"xs" \| "s"` | `"xs"` |
| `status` | `"editing" \| "reviewing"` | `"editing"` |
| `undoDisabled` / `redoDisabled` | `boolean` | `false` |
| All `on*` callbacks | `() => void` | — |

---

### EditorPaper

Document canvas with party fields, dates, and body content.

```tsx
<EditorPaper
  status="default"                           // "default" | "view" | "diff"
  title="Mutual Non-Disclosure Agreement"
  subtitle="MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)"
  showToolbar={true}
  agreementDate="January 15, 2025"
  party1={{ name: "Acme Corp", address: "123 Main St", role: "Disclosing Party" }}
  party2={{ name: "Beta Inc", address: "456 Oak Ave", role: "Receiving Party" }}
  effectiveDate="February 1, 2025"
>
  <p>Document body content here...</p>
</EditorPaper>
```

| Prop | Type | Default |
|------|------|---------|
| `status` | `"default" \| "view" \| "diff"` | `"default"` |
| `children` | `ReactNode` | — |
| `showToolbar` | `boolean` | `true` |
| `title` | `string` | `"Mutual Non-Disclosure Agreement"` |
| `subtitle` | `string` | default subtitle |
| `agreementDate` | `string` | `""` |
| `effectiveDate` | `string` | `""` |
| `party1` / `party2` | `PartyInfo` | `{}` |
| `onAgreementDateChange`, `onEffectiveDateChange` | `(value: string) => void` | — |
| `onParty1Change`, `onParty2Change` | `(party: PartyInfo) => void` | — |
| `preambleText` | `string` | `"This Agreement is entered into on"` |
| `partiesConnector` | `string` | `"and"` |
| `party1Role` / `party2Role` | `string` | `"Party 1"` / `"Party 2"` |

**Types:** `PartyInfo = { name?, address?, role? }`

---

### EditorSection

Resizable editor panel (fixed-position, right side) with draggable width.

```tsx
<EditorSection
  isOpen={true}
  initialWidth={window.innerWidth * 0.5}
  minWidth={400}
  headerProps={{ title: "Mutual NDA", showShare: true }}
  onClose={() => {}}
>
  <EditorPaper>...</EditorPaper>
</EditorSection>
```

| Prop | Type | Default |
|------|------|---------|
| `isOpen` | `boolean` | `true` |
| `initialWidth` | `number` | — |
| `minWidth` | `number` | `400` |
| `maxWidth` | `number` | — |
| `onWidthChange` | `(width: number) => void` | — |
| `headerProps` | `EditorHeaderProps` (minus onClose) | `{}` |
| `children` | `ReactNode` | — |
| `onClose` | `() => void` | — |

---

## Templates

### ChatPageTemplate

Full-page 3-column layout: sidebar + chat + document editor with resizable panels.

```tsx
import { ChatPageTemplate } from '../templates';

<ChatPageTemplate
  title="Mutual NDA"
  breadcrumbs={[{ id: "1", label: "Documents" }, { id: "2", label: "Mutual NDA" }]}
  sidebarVariant="inner"
  sidebarStatus="expanded"
  messages={[
    { id: "1", role: "user", content: "Draft a mutual NDA" },
    { id: "2", role: "assistant", content: <p>Here's your draft...</p> },
  ]}
  documentContent={<p>Agreement text here...</p>}
  party1={{ name: "Acme Corp" }}
  party2={{ name: "Beta Inc" }}
  files={[{ id: "1", name: "NDA.pdf", isSelected: true }]}
/>
```

Located at `src/templates/ChatPageTemplate.tsx`. See source for full prop list (~30 props covering sidebar, chat, editor, and layout configuration).
