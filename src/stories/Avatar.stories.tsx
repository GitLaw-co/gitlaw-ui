import type { Story, StoryDefault } from "@ladle/react";
import { Avatar } from '../components/Avatar';

export default {
  title: "Components / Data Display / Avatar",
  meta: { layout: "centered" },
  argTypes: {
    type: {
      control: { type: "select" },
      options: ['image', 'initials', 'icon', 'empty'],
      description: 'The type of avatar content',
    },
    size: {
      control: { type: "select" },
      options: ['S', 'M', 'L', 'XL'],
      description: 'The size of the avatar',
    },
    initials: {
      control: { type: "text" },
      description: 'Initials text (for initials type)',
    },
    showEdit: {
      control: { type: "boolean" },
      description: 'Show edit button',
    },
  },
} satisfies StoryDefault;

export const Default: Story<typeof Avatar> = (args) => <Avatar {...args} />;
Default.args = {
  type: 'image',
  size: 'M',
  src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  alt: 'User avatar',
};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-6">
    <div>
      <p className="mb-2 text-sm font-medium text-text-secondary">Types</p>
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
    </div>
    <div>
      <p className="mb-2 text-sm font-medium text-text-secondary">Sizes</p>
      <div className="flex items-end gap-4">
        <Avatar type="initials" size="S" initials="S" />
        <Avatar type="initials" size="M" initials="M" />
        <Avatar type="initials" size="L" initials="L" />
        <Avatar type="initials" size="XL" initials="XL" />
      </div>
    </div>
  </div>
);
