import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/Button';

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
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

// Primary Variants
export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Primary Button',
  },
};

export const PrimaryWithLeftIcon: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: 'With Icon',
    showLeftIcon: true,
  },
};

export const PrimaryWithRightIcon: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: 'With Icon',
    showRightIcon: true,
  },
};

// Secondary Variants
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'm',
    children: 'Secondary Button',
  },
};

// Outline Variants
export const Outline: Story = {
  args: {
    variant: 'outline',
    size: 'm',
    children: 'Outline Button',
  },
};

// Ghost Variants
export const Ghost: Story = {
  args: {
    variant: 'ghost',
    size: 'm',
    children: 'Ghost Button',
  },
};

// Destructive Variants
export const Destructive: Story = {
  args: {
    variant: 'destructive',
    size: 'm',
    children: 'Delete',
  },
};

// Disabled Variants
export const Disabled: Story = {
  args: {
    variant: 'disabled',
    size: 'm',
    children: 'Disabled Button',
  },
};

// Icon Only Button
export const IconOnly: Story = {
  args: {
    variant: 'icon',
    size: 'm',
  },
};

// Size Variants
export const ExtraLarge: Story = {
  args: {
    variant: 'primary',
    size: 'xl',
    children: 'Extra Large',
  },
};

export const Large: Story = {
  args: {
    variant: 'primary',
    size: 'l',
    children: 'Large',
  },
};

export const Medium: Story = {
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Medium',
  },
};

export const Small: Story = {
  args: {
    variant: 'primary',
    size: 's',
    children: 'Small',
  },
};

export const ExtraSmall: Story = {
  args: {
    variant: 'primary',
    size: 'xs',
    children: 'Extra Small',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Button variant="primary" size="m">Primary</Button>
        <Button variant="secondary" size="m">Secondary</Button>
        <Button variant="outline" size="m">Outline</Button>
        <Button variant="ghost" size="m">Ghost</Button>
        <Button variant="destructive" size="m">Destructive</Button>
        <Button variant="disabled" size="m">Disabled</Button>
      </div>
    </div>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button variant="primary" size="xs">XS</Button>
      <Button variant="primary" size="s">Small</Button>
      <Button variant="primary" size="m">Medium</Button>
      <Button variant="primary" size="l">Large</Button>
      <Button variant="primary" size="xl">Extra Large</Button>
    </div>
  ),
};
