import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['primary', 'secondary', 'red', 'orange', 'green'],
      description: 'The color type of the badge',
    },
    showNumber: {
      control: 'boolean',
      description: 'Show number in badge',
    },
    count: {
      control: 'number',
      description: 'The number to display',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Badge
export const Primary: Story = {
  args: {
    type: 'primary',
    showNumber: true,
    count: 7,
  },
};

// Secondary Badge
export const Secondary: Story = {
  args: {
    type: 'secondary',
    showNumber: true,
    count: 5,
  },
};

// Red Badge
export const Red: Story = {
  args: {
    type: 'red',
    showNumber: true,
    count: 3,
  },
};

// Orange Badge
export const Orange: Story = {
  args: {
    type: 'orange',
    showNumber: true,
    count: 12,
  },
};

// Green Badge
export const Green: Story = {
  args: {
    type: 'green',
    showNumber: true,
    count: 1,
  },
};

// Without Number
export const DotOnly: Story = {
  args: {
    type: 'red',
    showNumber: false,
  },
};

// All Types with Number
export const AllTypesWithNumber: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge type="primary" count={7} />
      <Badge type="secondary" count={5} />
      <Badge type="red" count={3} />
      <Badge type="orange" count={12} />
      <Badge type="green" count={1} />
    </div>
  ),
};

// All Types Dot Only
export const AllTypesDotOnly: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Badge type="primary" showNumber={false} />
      <Badge type="secondary" showNumber={false} />
      <Badge type="red" showNumber={false} />
      <Badge type="orange" showNumber={false} />
      <Badge type="green" showNumber={false} />
    </div>
  ),
};

// Usage Example
export const UsageExample: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-secondary rounded text-text-button">
          Notifications
        </button>
        <Badge type="red" count={3} className="absolute -top-1 -right-1" />
      </div>
      <div className="relative inline-flex">
        <button className="px-4 py-2 bg-secondary rounded text-text-button">
          Messages
        </button>
        <Badge type="primary" count={12} className="absolute -top-1 -right-1" />
      </div>
    </div>
  ),
};
