import type { Meta, StoryObj } from '@storybook/react';
import { SidebarProfileSwitch } from '../components/SidebarProfileSwitch';

const meta: Meta<typeof SidebarProfileSwitch> = {
  title: 'Components/Sidebar/SidebarProfileSwitch',
  component: SidebarProfileSwitch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['default', 'hover', 'active'],
      description: 'Current state',
    },
    collapsed: {
      control: 'boolean',
      description: 'Whether the component is collapsed (icon only)',
    },
    name: {
      control: 'text',
      description: 'Profile/company name',
    },
    avatarInitials: {
      control: 'text',
      description: 'Avatar initials',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '264px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default state
export const Default: Story = {
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'default',
    collapsed: false,
  },
};

// Hover state
export const Hover: Story = {
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'hover',
    collapsed: false,
  },
};

// Active state
export const Active: Story = {
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'active',
    collapsed: false,
  },
};

// Collapsed
export const Collapsed: Story = {
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'default',
    collapsed: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: 'auto' }}>
        <Story />
      </div>
    ),
  ],
};

// Long name (truncation)
export const LongName: Story = {
  args: {
    name: 'Very Long Company Name That Should Truncate',
    avatarInitials: 'VL',
    state: 'default',
    collapsed: false,
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <SidebarProfileSwitch name="Default state" avatarInitials="DS" state="default" />
      <SidebarProfileSwitch name="Hover state" avatarInitials="HS" state="hover" />
      <SidebarProfileSwitch name="Active state" avatarInitials="AS" state="active" />
    </div>
  ),
};
