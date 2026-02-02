import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Core/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the select',
    },
    status: {
      control: 'select',
      options: ['empty', 'default'],
      description: 'The current status',
    },
    align: {
      control: 'select',
      options: ['fill', 'hug'],
      description: 'Width behavior',
    },
    labelPosition: {
      control: 'select',
      options: ['top', 'left'],
      description: 'Label position',
    },
    showLabel: {
      control: 'boolean',
      description: 'Show external label',
    },
    showLeftIcon: {
      control: 'boolean',
      description: 'Show left icon',
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

const sampleOptions = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  { value: 'option4', label: 'Option 4' },
];

// Default Select
export const Default: Story = {
  args: {
    size: 'm',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// Empty state
export const Empty: Story = {
  args: {
    size: 'm',
    status: 'empty',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// With selected value
export const WithValue: Story = {
  args: {
    size: 'm',
    value: 'option1',
    status: 'default',
    placeholder: 'Select an option',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// With label on top
export const WithLabelTop: Story = {
  args: {
    size: 'm',
    placeholder: 'Select an option',
    showLabel: true,
    label: 'Choose an option',
    labelPosition: 'top',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// With label on left
export const WithLabelLeft: Story = {
  args: {
    size: 'm',
    placeholder: 'Select an option',
    showLabel: true,
    label: 'Label',
    labelPosition: 'left',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// With left icon
export const WithLeftIcon: Story = {
  args: {
    size: 'm',
    placeholder: 'Select a user',
    showLeftIcon: true,
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// Hug width
export const HugWidth: Story = {
  args: {
    size: 'm',
    placeholder: 'Select an option',
    align: 'hug',
    options: sampleOptions,
  },
};

// Disabled
export const Disabled: Story = {
  args: {
    size: 'm',
    placeholder: 'Disabled select',
    disabled: true,
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// Size Variants
export const ExtraLarge: Story = {
  args: {
    size: 'xl',
    placeholder: 'Extra Large',
    showLabel: true,
    label: 'XL Select',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    size: 'l',
    placeholder: 'Large',
    showLabel: true,
    label: 'L Select',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    size: 'm',
    placeholder: 'Medium',
    showLabel: true,
    label: 'M Select',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    size: 's',
    placeholder: 'Small',
    showLabel: true,
    label: 'S Select',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
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
    label: 'XS Select',
    align: 'fill',
    options: sampleOptions,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '340px' }}>
        <Story />
      </div>
    ),
  ],
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-6 w-[340px]">
      <Select size="xl" placeholder="Extra Large" showLabel label="XL" options={sampleOptions} />
      <Select size="l" placeholder="Large" showLabel label="L" options={sampleOptions} />
      <Select size="m" placeholder="Medium" showLabel label="M" options={sampleOptions} />
      <Select size="s" placeholder="Small" showLabel label="S" options={sampleOptions} />
      <Select size="xs" placeholder="Extra Small" showLabel label="XS" options={sampleOptions} />
    </div>
  ),
};
