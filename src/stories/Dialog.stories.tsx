import type { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '../components/Dialog';

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Dialog title',
    },
    message: {
      control: 'text',
      description: 'Dialog message/description',
    },
    primaryLabel: {
      control: 'text',
      description: 'Primary button label',
    },
    secondaryLabel: {
      control: 'text',
      description: 'Secondary button label',
    },
    showCloseButton: {
      control: 'boolean',
      description: 'Show close button',
    },
    open: {
      control: 'boolean',
      description: 'Whether dialog is open',
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
type Story = StoryObj<typeof Dialog>;

// Default Dialog (Unsaved changes)
export const Default: Story = {
  args: {
    title: 'Unsaved changes',
    message: 'This document has unsaved changes. Save them now before moving on.',
    primaryLabel: 'Save changes',
    secondaryLabel: 'Discard changes',
    showCloseButton: true,
    open: true,
  },
};

// Delete confirmation
export const DeleteConfirmation: Story = {
  args: {
    title: 'Delete document',
    message: 'Are you sure you want to delete this document? This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true,
  },
};

// Share document
export const ShareDocument: Story = {
  args: {
    title: 'Share document',
    message: 'Share this document with your team members. They will receive an email notification.',
    primaryLabel: 'Share',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true,
  },
};

// Without close button
export const WithoutCloseButton: Story = {
  args: {
    title: 'Session expired',
    message: 'Your session has expired. Please log in again to continue.',
    primaryLabel: 'Log in',
    secondaryLabel: 'Cancel',
    showCloseButton: false,
    open: true,
  },
};

// Dialog variants showcase
export const DialogExamples: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <Dialog
        title="Unsaved changes"
        message="This document has unsaved changes. Save them now before moving on."
        primaryLabel="Save changes"
        secondaryLabel="Discard changes"
        open={true}
      />
      <Dialog
        title="Delete document"
        message="Are you sure you want to delete this document? This action cannot be undone."
        primaryLabel="Delete"
        secondaryLabel="Cancel"
        open={true}
      />
    </div>
  ),
};
