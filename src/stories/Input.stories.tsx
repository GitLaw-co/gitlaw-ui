import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '../components/Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Core/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the input',
    },
    status: {
      control: 'select',
      options: ['empty', 'populated', 'active'],
      description: 'The current status of the input',
    },
    align: {
      control: 'select',
      options: ['fill', 'hug'],
      description: 'Width behavior',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show external label',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show left icon',
    },
    showRightIcon: {
      control: 'boolean',
      description: 'Show right icon (clear button)',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    label: {
      control: 'text',
      description: 'Label text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Input
export const Default: Story = {
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// With Label
export const WithLabel: Story = {
  args: {
    size: 'm',
    placeholder: 'Enter your email',
    showLabel: true,
    label: 'Email Address',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// With Search Icon
export const WithSearchIcon: Story = {
  args: {
    size: 'm',
    placeholder: 'Search...',
    showLeftIcon: true,
    showRightIcon: true,
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// Populated State
export const Populated: Story = {
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    value: 'Some content',
    status: 'populated',
    showRightIcon: true,
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// Active State
export const Active: Story = {
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    status: 'active',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// Disabled
export const Disabled: Story = {
  args: {
    size: 'm',
    placeholder: 'Disabled input',
    disabled: true,
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// Size Variants
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    placeholder: 'Extra Large Input',
    showLabel: true,
    label: 'Extra Large',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    size: 'l',
    placeholder: 'Large Input',
    showLabel: true,
    label: 'Large',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    size: 'm',
    placeholder: 'Medium Input',
    showLabel: true,
    label: 'Medium',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: 's',
    placeholder: 'Small Input',
    showLabel: true,
    label: 'Small',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    placeholder: 'Extra Small',
    showLabel: true,
    label: 'Extra Small',
    align: 'fill',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '360px' }}>
        <Story />
      </div>
    ),
  ],
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
  ),
};
