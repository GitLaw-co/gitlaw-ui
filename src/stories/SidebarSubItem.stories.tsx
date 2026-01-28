import type { Meta, StoryObj } from '@storybook/react';
import { SidebarSubItem } from '../components/SidebarSubItem';

const meta: Meta<typeof SidebarSubItem> = {
  title: 'Components/Sidebar/SidebarSubItem',
  component: SidebarSubItem,
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
    label: {
      control: 'text',
      description: 'Label text',
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
    label: 'Sub Item',
    state: 'default',
  },
};

// Hover state
export const Hover: Story = {
  args: {
    label: 'Sub Item',
    state: 'hover',
  },
};

// Active state
export const Active: Story = {
  args: {
    label: 'Sub Item',
    state: 'active',
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-1">
      <SidebarSubItem label="Default state" state="default" />
      <SidebarSubItem label="Hover state" state="hover" />
      <SidebarSubItem label="Active state" state="active" />
    </div>
  ),
};
