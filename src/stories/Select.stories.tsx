import type { Meta, StoryObj } from '@storybook/react';
import { Select } from '../components/Select';

const meta: Meta<typeof Select> = {
  title: 'Components/Form/Select',
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
