import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from '../components/Tooltip';
import { Button } from '../components/Button';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to show in the tooltip',
    },
    size: {
      control: 'select',
      options: ['s', 'm', 'l'],
      description: 'Tooltip size - s (12px), m (14px), l (16px)',
    },
    type: {
      control: 'select',
      options: ['neutral', 'purple'],
      description: 'Tooltip color type',
    },
    position: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the tooltip relative to the trigger',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tooltip is disabled',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tooltip>;

// Default tooltip
export const Default: Story = {
  args: {
    content: 'Jurisdiction: England & Wales',
    size: 'm',
    type: 'neutral',
    position: 'right',
    children: (
      <Button variant="secondary" size="m">
        Hover me
      </Button>
    ),
  },
};

// All variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 p-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Neutral Tooltips</h3>
        <div className="flex gap-4">
          <Tooltip content="Small tooltip (12px)" size="s" type="neutral" position="bottom">
            <Button variant="secondary" size="s">Small</Button>
          </Tooltip>
          <Tooltip content="Medium tooltip (14px)" size="m" type="neutral" position="bottom">
            <Button variant="secondary" size="m">Medium</Button>
          </Tooltip>
          <Tooltip content="Large tooltip (16px)" size="l" type="neutral" position="bottom">
            <Button variant="secondary" size="l">Large</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Purple Tooltips</h3>
        <div className="flex gap-4">
          <Tooltip content="Small tooltip (12px)" size="s" type="purple" position="bottom">
            <Button variant="primary" size="s">Small</Button>
          </Tooltip>
          <Tooltip content="Medium tooltip (14px)" size="m" type="purple" position="bottom">
            <Button variant="primary" size="m">Medium</Button>
          </Tooltip>
          <Tooltip content="Large tooltip (16px)" size="l" type="purple" position="bottom">
            <Button variant="primary" size="l">Large</Button>
          </Tooltip>
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">Position Variants</h3>
        <div className="flex gap-4 items-center justify-center">
          <Tooltip content="Top position" size="m" type="neutral" position="top">
            <Button variant="secondary" size="m">Top</Button>
          </Tooltip>
          <Tooltip content="Right position" size="m" type="neutral" position="right">
            <Button variant="secondary" size="m">Right</Button>
          </Tooltip>
          <Tooltip content="Bottom position" size="m" type="neutral" position="bottom">
            <Button variant="secondary" size="m">Bottom</Button>
          </Tooltip>
          <Tooltip content="Left position" size="m" type="neutral" position="left">
            <Button variant="secondary" size="m">Left</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  ),
};
