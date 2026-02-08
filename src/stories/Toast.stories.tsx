import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    message: {
      control: 'text',
      description: 'Toast message',
    },
    variant: {
      control: 'select',
      options: ['default', 'success', 'error', 'warning'],
      description: 'Toast variant',
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label',
    },
    showAction: {
      control: 'boolean',
      description: 'Show action button',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    message: "Reminder added for Service contract. We'll notify you on Sep 21, 2026.",
    actionLabel: 'Action',
    showAction: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Toast
        message="Reminder added for Service contract."
        actionLabel="Action"
        showAction={true}
      />
      <Toast
        message="Document saved successfully."
        showAction={false}
      />
      <Toast
        message="The document 'Employment Agreement - John Smith' has been successfully shared with 5 team members. They will receive an email notification shortly."
        actionLabel="View"
        showAction={true}
      />
    </div>
  ),
};
