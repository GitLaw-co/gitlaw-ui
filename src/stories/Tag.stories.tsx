import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Components/Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xxs', 'xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the tag',
    },
    weight: {
      control: 'select',
      options: ['regular', 'bold'],
      description: 'Font weight',
    },
    label: {
      control: 'text',
      description: 'The text label',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon',
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default Tag
export const Default: Story = {
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular',
  },
};

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Regular</p>
        <div className="flex flex-wrap items-center gap-4">
          <Tag size="xxs" label="XXS" />
          <Tag size="xs" label="XS" />
          <Tag size="s" label="Small" />
          <Tag size="m" label="Medium" />
          <Tag size="l" label="Large" />
          <Tag size="xl" label="Extra Large" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Bold</p>
        <div className="flex flex-wrap items-center gap-4">
          <Tag size="xxs" weight="bold" label="XXS" />
          <Tag size="xs" weight="bold" label="XS" />
          <Tag size="s" weight="bold" label="Small" />
          <Tag size="m" weight="bold" label="Medium" />
          <Tag size="l" weight="bold" label="Large" />
          <Tag size="xl" weight="bold" label="Extra Large" />
        </div>
      </div>
    </div>
  ),
};

// Tags List
export const TagsList: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag label="React" showClose />
      <Tag label="TypeScript" showClose />
      <Tag label="Storybook" showClose />
      <Tag label="Tailwind CSS" showClose />
      <Tag label="Figma" showClose />
    </div>
  ),
};
