import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'destructive', 'disabled', 'icon'],
      description: 'The visual style variant of the button',
    },
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the button',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show the left icon',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Show the right icon',
    },
    children: {
      control: 'text',
      description: 'Button label text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default: Primary with left icon (most common usage)
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Button',
    showLeftIcon: true,
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-text-secondary text-sm mb-2">Variants</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="m">Primary</Button>
          <Button variant="secondary" size="m">Secondary</Button>
          <Button variant="outline" size="m">Outline</Button>
          <Button variant="ghost" size="m">Ghost</Button>
          <Button variant="destructive" size="m">Destructive</Button>
          <Button variant="disabled" size="m">Disabled</Button>
          <Button variant="icon" size="m" />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Sizes</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="xs">XS</Button>
          <Button variant="primary" size="s">Small</Button>
          <Button variant="primary" size="m">Medium</Button>
          <Button variant="primary" size="l">Large</Button>
          <Button variant="primary" size="xl">Extra Large</Button>
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">With Icons</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="m" showLeftIcon>Left Icon</Button>
          <Button variant="primary" size="m" showRightIcon>Right Icon</Button>
          <Button variant="primary" size="m" showLeftIcon showRightIcon>Both Icons</Button>
        </div>
      </div>
    </div>
  ),
};
