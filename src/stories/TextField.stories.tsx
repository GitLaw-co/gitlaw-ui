import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Core/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the text field',
    },
    status: {
      control: 'select',
      options: ['empty', 'populated', 'active'],
      description: 'The current status',
    },
    showStroke: {
      control: 'boolean',
      description: 'Show border stroke',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon in top right',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    rows: {
      control: 'number',
      description: 'Number of rows',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default TextField
export const Default: Story = {
  args: {
    size: 'm',
    placeholder: 'Placeholder text',
    showStroke: true,
  },
};

// Empty state
export const Empty: Story = {
  args: {
    size: 'm',
    status: 'empty',
    placeholder: 'Enter your text here...',
    showStroke: true,
  },
};

// Populated state
export const Populated: Story = {
  args: {
    size: 'm',
    status: 'populated',
    value: 'This is some content that has been entered into the text field.',
    placeholder: 'Placeholder text',
    showStroke: true,
  },
};

// Active state
export const Active: Story = {
  args: {
    size: 'm',
    status: 'active',
    value: 'Currently typing...',
    placeholder: 'Placeholder text',
    showStroke: true,
  },
};

// With icon
export const WithIcon: Story = {
  args: {
    size: 'm',
    placeholder: 'AI-assisted text field',
    showStroke: true,
    showIcon: true,
  },
};

// Without stroke
export const WithoutStroke: Story = {
  args: {
    size: 'm',
    placeholder: 'No border',
    showStroke: false,
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    size: 'm',
    placeholder: 'Disabled text field',
    disabled: true,
    showStroke: true,
  },
};

// Size Variants
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    placeholder: 'Extra Large text field',
    showStroke: true,
  },
};

export const Large: Story = {
  args: {
    size: 'l',
    placeholder: 'Large text field',
    showStroke: true,
  },
};

export const Medium: Story = {
  args: {
    size: 'm',
    placeholder: 'Medium text field',
    showStroke: true,
  },
};

export const Small: Story = {
  args: {
    size: 's',
    placeholder: 'Small text field',
    showStroke: true,
  },
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    placeholder: 'Extra Small text field',
    showStroke: true,
  },
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="Extra Large" showStroke />
      <TextField size="l" placeholder="Large" showStroke />
      <TextField size="m" placeholder="Medium" showStroke />
      <TextField size="s" placeholder="Small" showStroke />
      <TextField size="xs" placeholder="Extra Small" showStroke />
    </div>
  ),
};

// All States Showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold mb-2">Empty</p>
        <TextField size="m" status="empty" placeholder="Placeholder text" showStroke />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Populated</p>
        <TextField size="m" status="populated" value="Some content here" placeholder="Placeholder text" showStroke />
      </div>
      <div>
        <p className="text-sm font-semibold mb-2">Active</p>
        <TextField size="m" status="active" value="Typing..." placeholder="Placeholder text" showStroke />
      </div>
    </div>
  ),
};

// With Icon Showcase
export const WithIconShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <TextField size="xl" placeholder="XL with icon" showStroke showIcon />
      <TextField size="l" placeholder="L with icon" showStroke showIcon />
      <TextField size="m" placeholder="M with icon" showStroke showIcon />
      <TextField size="s" placeholder="S with icon" showStroke showIcon />
      <TextField size="xs" placeholder="XS with icon" showStroke showIcon />
    </div>
  ),
};
