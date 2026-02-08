import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '../components/Badge';

const meta: Meta<typeof Badge> = {
  title: 'Components/Data Display/Badge',
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

export const Default: Story = {
  args: {
    type: 'primary',
    showNumber: true,
    count: 7,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-text-secondary text-sm mb-2">With Number</p>
        <div className="flex items-center gap-4">
          <Badge type="primary" count={7} />
          <Badge type="secondary" count={5} />
          <Badge type="red" count={3} />
          <Badge type="orange" count={12} />
          <Badge type="green" count={1} />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Dot Only</p>
        <div className="flex items-center gap-4">
          <Badge type="primary" showNumber={false} />
          <Badge type="secondary" showNumber={false} />
          <Badge type="red" showNumber={false} />
          <Badge type="orange" showNumber={false} />
          <Badge type="green" showNumber={false} />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Usage Example</p>
        <div className="flex gap-4">
          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
              Notifications
            </button>
            <Badge type="red" count={3} className="absolute -top-1 -right-1" />
          </div>
          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
              Messages
            </button>
            <Badge type="primary" count={12} className="absolute -top-1 -right-1" />
          </div>
        </div>
      </div>
    </div>
  ),
};
