import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../components/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Data Display/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['image', 'initials', 'icon', 'empty'],
      description: 'The type of avatar content',
    },
    size: {
      control: 'select',
      options: ['S', 'M', 'L', 'XL'],
      description: 'The size of the avatar',
    },
    initials: {
      control: 'text',
      description: 'Initials text (for initials type)',
    },
    showEdit: {
      control: 'boolean',
      description: 'Show edit button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Image Avatar
export const Image: Story = {
  args: {
    type: 'image',
    size: 'M',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'User avatar',
  },
};

// Initials Avatar
export const Initials: Story = {
  args: {
    type: 'initials',
    size: 'M',
    initials: 'AC',
  },
};

// Icon Avatar
export const Icon: Story = {
  args: {
    type: 'icon',
    size: 'M',
  },
};

// Empty Avatar
export const Empty: Story = {
  args: {
    type: 'empty',
    size: 'M',
  },
};

// With Edit Button
export const WithEdit: Story = {
  args: {
    type: 'image',
    size: 'L',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    showEdit: true,
  },
};

// Size Small
export const SizeSmall: Story = {
  args: {
    type: 'initials',
    size: 'S',
    initials: 'JD',
  },
};

// Size Medium
export const SizeMedium: Story = {
  args: {
    type: 'initials',
    size: 'M',
    initials: 'JD',
  },
};

// Size Large
export const SizeLarge: Story = {
  args: {
    type: 'initials',
    size: 'L',
    initials: 'JD',
  },
};

// Size Extra Large
export const SizeExtraLarge: Story = {
  args: {
    type: 'initials',
    size: 'XL',
    initials: 'JD',
  },
};

// All Types Showcase
export const AllTypes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar
        type="image"
        size="L"
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
      />
      <Avatar type="initials" size="L" initials="JD" />
      <Avatar type="icon" size="L" />
      <Avatar type="empty" size="L" />
    </div>
  ),
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Avatar type="initials" size="S" initials="S" />
      <Avatar type="initials" size="M" initials="M" />
      <Avatar type="initials" size="L" initials="L" />
      <Avatar type="initials" size="XL" initials="XL" />
    </div>
  ),
};
