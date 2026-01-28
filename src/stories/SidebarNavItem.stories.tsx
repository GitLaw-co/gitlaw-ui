import type { Meta, StoryObj } from '@storybook/react';
import { SidebarNavItem } from '../components/SidebarNavItem';
import { FileText } from '../icons/FileText';
import { FolderClosed } from '../icons/FolderClosed';

const meta: Meta<typeof SidebarNavItem> = {
  title: 'Components/Sidebar/SidebarNavItem',
  component: SidebarNavItem,
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
      description: 'Whether the item is collapsed (icon only)',
    },
    showExpandArrow: {
      control: 'boolean',
      description: 'Whether to show expand arrow',
    },
    expanded: {
      control: 'boolean',
      description: 'Whether the expand arrow is rotated',
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
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false,
  },
};

// Hover state
export const Hover: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'hover',
    collapsed: false,
  },
};

// Active state
export const Active: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'active',
    collapsed: false,
  },
};

// With expand arrow
export const WithExpandArrow: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false,
    showExpandArrow: true,
    expanded: false,
  },
};

// With expand arrow expanded
export const WithExpandArrowExpanded: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false,
    showExpandArrow: true,
    expanded: true,
  },
};

// Collapsed
export const Collapsed: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
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

// Collapsed hover
export const CollapsedHover: Story = {
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'hover',
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

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <SidebarNavItem label="Default" icon={<FileText className="size-5" />} state="default" />
      <SidebarNavItem label="Hover" icon={<FileText className="size-5" />} state="hover" />
      <SidebarNavItem label="Active" icon={<FileText className="size-5" />} state="active" />
      <SidebarNavItem label="With Arrow" icon={<FolderClosed className="size-5" />} state="default" showExpandArrow expanded={false} />
      <SidebarNavItem label="Arrow Expanded" icon={<FolderClosed className="size-5" />} state="default" showExpandArrow expanded />
    </div>
  ),
};
