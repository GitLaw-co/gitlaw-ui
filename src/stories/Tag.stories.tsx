import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '../components/Tag';

const meta: Meta<typeof Tag> = {
  title: 'Data Display/Tag',
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

// Bold Tag
export const Bold: Story = {
  args: {
    label: 'Label',
    size: 'm',
    weight: 'bold',
  },
};

// With Icon
export const WithIcon: Story = {
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true,
  },
};

// With Close Button
export const WithClose: Story = {
  args: {
    label: 'Removable',
    size: 'm',
    weight: 'regular',
    showClose: true,
  },
};

// With Icon and Close
export const WithIconAndClose: Story = {
  args: {
    label: 'John Doe',
    size: 'm',
    weight: 'regular',
    showIcon: true,
    showClose: true,
  },
};

// Size Extra Small
export const SizeXXS: Story = {
  args: {
    label: 'Employment Agreement',
    size: 'xxs',
    weight: 'bold',
  },
};

// Size XS
export const SizeXS: Story = {
  args: {
    label: 'Label',
    size: 'xs',
    weight: 'regular',
  },
};

// Size Small
export const SizeSmall: Story = {
  args: {
    label: 'Label',
    size: 's',
    weight: 'regular',
  },
};

// Size Medium
export const SizeMedium: Story = {
  args: {
    label: 'Label',
    size: 'm',
    weight: 'regular',
  },
};

// Size Large
export const SizeLarge: Story = {
  args: {
    label: 'Label',
    size: 'l',
    weight: 'regular',
  },
};

// Size Extra Large
export const SizeXL: Story = {
  args: {
    label: 'Label',
    size: 'xl',
    weight: 'bold',
  },
};

// All Sizes Regular
export const AllSizesRegular: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" label="XXS" />
      <Tag size="xs" label="XS" />
      <Tag size="s" label="Small" />
      <Tag size="m" label="Medium" />
      <Tag size="l" label="Large" />
      <Tag size="xl" label="Extra Large" />
    </div>
  ),
};

// All Sizes Bold
export const AllSizesBold: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Tag size="xxs" weight="bold" label="XXS" />
      <Tag size="xs" weight="bold" label="XS" />
      <Tag size="s" weight="bold" label="Small" />
      <Tag size="m" weight="bold" label="Medium" />
      <Tag size="l" weight="bold" label="Large" />
      <Tag size="xl" weight="bold" label="Extra Large" />
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
