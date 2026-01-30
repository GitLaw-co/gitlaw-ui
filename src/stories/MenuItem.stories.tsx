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
    showRightElement: {
      control: 'boolean',
      description: 'Show right element (check icon)',
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

// With right element (check)
export const WithRightElement: Story = {
  args: {
    primaryText: 'Selected item',
    leftElement: 'icon',
    showLeftElement: true,
    showRightElement: true,
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
