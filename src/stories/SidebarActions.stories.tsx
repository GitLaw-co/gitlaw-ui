import type { Meta, StoryObj } from '@storybook/react';
import { SidebarActions } from '../components/SidebarActions';

const meta: Meta<typeof SidebarActions> = {
  title: 'Components/Sidebar/SidebarActions',
  component: SidebarActions,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    collapsed: {
      control: 'boolean',
      description: 'Whether the component is collapsed (icon only)',
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

// Default expanded
export const Default: Story = {
  args: {
    collapsed: false,
  },
};

// Collapsed
export const Collapsed: Story = {
  args: {
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
