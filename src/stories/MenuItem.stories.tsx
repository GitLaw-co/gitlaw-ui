import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '../components/MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leftElement: {
      control: 'select',
      options: ['icon', 'avatar', 'clause', 'select', 'mini-users'],
      description: 'Type of left element to display',
    },
    showLeftElement: {
      control: 'boolean',
      description: 'Show the left element',
    },
    showSecondaryText: {
      control: 'boolean',
      description: 'Show secondary text',
    },
    showBackground: {
      control: 'boolean',
      description: 'Show background highlight',
    },
    showStroke: {
      control: 'boolean',
      description: 'Show border stroke',
    },
    showTick: {
      control: 'boolean',
      description: 'Show tick badge in corner',
    },
    primaryText: {
      control: 'text',
      description: 'Primary text content',
    },
    secondaryText: {
      control: 'text',
      description: 'Secondary text content',
    },
    selected: {
      control: 'boolean',
      description: 'Selected state (for select type)',
    },
    // R Element controls
    showRLabel: { control: 'boolean', description: 'Show label in R element' },
    rLabel: { control: 'text', description: 'Label text for R element' },
    showRIcon1: { control: 'boolean', description: 'Show first icon in R element' },
    rIcon1: { control: 'text', description: 'First icon name' },
    showRIcon2: { control: 'boolean', description: 'Show second icon in R element' },
    rIcon2: { control: 'text', description: 'Second icon name' },
    showRButton: { control: 'boolean', description: 'Show button in R element' },
    rButtonLabel: { control: 'text', description: 'Button label' },
    showRButtonSet: { control: 'boolean', description: 'Show button set (x and check)' },
    showRBadge: { control: 'boolean', description: 'Show badge in R element' },
    rBadgeCount: { control: 'number', description: 'Badge count' },
    showRSwitch: { control: 'boolean', description: 'Show switch in R element' },
    rSwitchChecked: { control: 'boolean', description: 'Switch checked state' },
    showRLargeAvatar: { control: 'boolean', description: 'Show large avatar in R element' },
    showRMediumAvatar: { control: 'boolean', description: 'Show medium avatar in R element' },
    showRTags: { control: 'boolean', description: 'Show tags in R element' },
    rTagLabel: { control: 'text', description: 'Tag label' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default MenuItem with icon
export const Default: Story = {
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true,
  },
};

// With secondary text
export const WithSecondaryText: Story = {
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true,
  },
};

// With avatar
export const WithAvatar: Story = {
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD',
  },
};

// With clause (info icon)
export const WithClause: Story = {
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true,
  },
};

// With select checkbox
export const WithSelectUnselected: Story = {
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false,
  },
};

export const WithSelectSelected: Story = {
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true,
  },
};

// With mini users
export const WithMiniUsers: Story = {
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true,
  },
};

// With R element - icon
export const WithRIcon: Story = {
  args: {
    primaryText: 'Selected item',
    leftElement: 'avatar',
    showLeftElement: true,
    showRIcon1: true,
    rIcon1: 'check',
    showStroke: true,
  },
};

// With R element - label
export const WithRLabel: Story = {
  args: {
    primaryText: 'Item with label',
    leftElement: 'avatar',
    showLeftElement: true,
    showRLabel: true,
    rLabel: 'Label',
    showStroke: true,
  },
};

// With R element - button
export const WithRButton: Story = {
  args: {
    primaryText: 'Item with action',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButton: true,
    rButtonLabel: 'Action',
    showStroke: true,
  },
};

// With R element - button set
export const WithRButtonSet: Story = {
  args: {
    primaryText: 'Item with button set',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButtonSet: true,
    showStroke: true,
  },
};

// With R element - badge
export const WithRBadge: Story = {
  args: {
    primaryText: 'Notifications',
    leftElement: 'avatar',
    showLeftElement: true,
    showRBadge: true,
    rBadgeCount: 7,
    showStroke: true,
  },
};

// With R element - switch
export const WithRSwitch: Story = {
  args: {
    primaryText: 'Toggle setting',
    leftElement: 'avatar',
    showLeftElement: true,
    showRSwitch: true,
    rSwitchChecked: true,
    showStroke: true,
  },
};

// With R element - large avatar
export const WithRLargeAvatar: Story = {
  args: {
    primaryText: 'Item with avatar',
    secondaryText: 'Secondary text',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRLargeAvatar: true,
    showStroke: true,
  },
};

// With R element - tags
export const WithRTags: Story = {
  args: {
    primaryText: 'Item with tags',
    leftElement: 'avatar',
    showLeftElement: true,
    showRTags: true,
    rTagLabel: 'Label',
    showStroke: true,
  },
};

// With background
export const WithBackground: Story = {
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true,
  },
};

// With stroke
export const WithStroke: Story = {
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true,
  },
};

// With tick badge
export const WithTick: Story = {
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true,
  },
};

// All left element types showcase
export const AllLeftElements: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
  ),
};

// All R element types showcase
export const AllRElements: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <MenuItem primaryText="With label" leftElement="avatar" showLeftElement showRLabel rLabel="Label" showStroke />
      <MenuItem primaryText="With icon" leftElement="avatar" showLeftElement showRIcon1 rIcon1="check" showStroke />
      <MenuItem primaryText="With two icons" leftElement="avatar" showLeftElement showRIcon1 showRIcon2 rIcon1="edit" rIcon2="trash" showStroke />
      <MenuItem primaryText="With button" leftElement="avatar" showLeftElement showRButton rButtonLabel="Action" showStroke />
      <MenuItem primaryText="With button set" leftElement="avatar" showLeftElement showRButtonSet showStroke />
      <MenuItem primaryText="With badge" leftElement="avatar" showLeftElement showRBadge rBadgeCount={7} showStroke />
      <MenuItem primaryText="With switch" leftElement="avatar" showLeftElement showRSwitch rSwitchChecked showStroke />
      <MenuItem primaryText="With large avatar" leftElement="avatar" showLeftElement showRLargeAvatar showStroke />
      <MenuItem primaryText="With tags" leftElement="avatar" showLeftElement showRTags rTagLabel="Label" showStroke />
    </div>
  ),
};

// Full example
export const FullExample: Story = {
  args: {
    primaryText: 'Complete menu item',
    secondaryText: 'With all features enabled',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRightElement: true,
    showBackground: true,
    avatarInitials: 'FE',
  },
};
