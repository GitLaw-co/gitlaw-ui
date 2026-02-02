import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Data Display/Toast',
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

// Default Toast
export const Default: Story = {
  args: {
    message: "Reminder added for Service contract. We'll notify you on Sep 21, 2026.",
    actionLabel: 'Action',
    showAction: true,
  },
};

// Toast without action
export const WithoutAction: Story = {
  args: {
    message: 'Your changes have been saved successfully.',
    showAction: false,
  },
};

// Toast with custom action
export const WithCustomAction: Story = {
  args: {
    message: 'Document has been moved to trash.',
    actionLabel: 'Undo',
    showAction: true,
  },
};

// Long message
export const LongMessage: Story = {
  args: {
    message: 'The document "Employment Agreement - John Smith" has been successfully shared with 5 team members. They will receive an email notification shortly.',
    actionLabel: 'View',
    showAction: true,
  },
};

// Multiple toasts showcase
export const ToastExamples: Story = {
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
        message="File uploaded to folder 'Contracts'."
        actionLabel="View"
        showAction={true}
      />
    </div>
  ),
};
