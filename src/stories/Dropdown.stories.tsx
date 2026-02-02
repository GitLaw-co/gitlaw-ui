import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    backgrounds: { default: 'light' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '40px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {
    showIcons: {
      control: 'boolean',
      description: 'Whether to show icons in menu items',
    },
    heading: {
      control: 'text',
      description: 'Optional heading text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default dropdown with icons
export const Default: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'Primary', icon: 'star' },
      { id: '2', label: 'Restore', icon: 'rotate-ccw' },
      { id: '3', label: 'Duplicate', icon: 'copy' },
      { id: '4', label: 'Get link', icon: 'link' },
    ],
  },
};

// Dropdown without icons
export const WithoutIcons: Story = {
  args: {
    showIcons: false,
    items: [
      { id: '1', label: 'Option 1' },
      { id: '2', label: 'Option 2' },
      { id: '3', label: 'Option 3' },
      { id: '4', label: 'Option 4' },
    ],
  },
};

// Dropdown with heading
export const WithHeading: Story = {
  args: {
    showIcons: true,
    heading: 'Actions',
    items: [
      { id: '1', label: 'Edit', icon: 'pencil' },
      { id: '2', label: 'Delete', icon: 'trash-2' },
      { id: '3', label: 'Archive', icon: 'archive' },
    ],
  },
};

// Dropdown with selected item
export const WithSelectedItem: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'Small', icon: 'type', selected: false },
      { id: '2', label: 'Medium', icon: 'type', selected: true },
      { id: '3', label: 'Large', icon: 'type', selected: false },
    ],
  },
};

// Dropdown with secondary labels
export const WithSecondaryLabels: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'John Doe', secondaryLabel: 'john@example.com', icon: 'user' },
      { id: '2', label: 'Jane Smith', secondaryLabel: 'jane@example.com', icon: 'user' },
      { id: '3', label: 'Bob Wilson', secondaryLabel: 'bob@example.com', icon: 'user' },
    ],
  },
};

// Dropdown with disabled items
export const WithDisabledItems: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'Available', icon: 'check-circle' },
      { id: '2', label: 'Disabled', icon: 'x-circle', disabled: true },
      { id: '3', label: 'Also available', icon: 'check-circle' },
    ],
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'Primary', icon: 'star', onClick: () => console.log('Primary clicked') },
      { id: '2', label: 'Restore', icon: 'rotate-ccw', onClick: () => console.log('Restore clicked') },
      { id: '3', label: 'Duplicate', icon: 'copy', onClick: () => console.log('Duplicate clicked') },
      { id: '4', label: 'Get link', icon: 'link', onClick: () => console.log('Get link clicked') },
    ],
  },
  render: (args) => (
    <div>
      <p className="text-sm text-subtle mb-4">Click items to see console logs.</p>
      <Dropdown {...args} />
    </div>
  ),
};

// Document actions menu (like in editor)
export const DocumentActions: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'Rename', icon: 'pencil' },
      { id: '2', label: 'Duplicate', icon: 'copy' },
      { id: '3', label: 'Move to folder', icon: 'folder' },
      { id: '4', label: 'Download as PDF', icon: 'file-down' },
      { id: '5', label: 'Delete', icon: 'trash-2' },
    ],
  },
};

// Text style selector (like in editor toolbar)
export const TextStyleSelector: Story = {
  args: {
    showIcons: false,
    items: [
      { id: '1', label: 'Normal text', selected: true },
      { id: '2', label: 'Heading 1' },
      { id: '3', label: 'Heading 2' },
      { id: '4', label: 'Heading 3' },
      { id: '5', label: 'Quote' },
      { id: '6', label: 'Code block' },
    ],
  },
};

// Version history menu
export const VersionHistory: Story = {
  args: {
    showIcons: true,
    heading: 'Version History',
    items: [
      { id: '1', label: 'Current version', secondaryLabel: 'Just now', icon: 'file-check', selected: true },
      { id: '2', label: 'Auto-saved', secondaryLabel: '5 minutes ago', icon: 'save' },
      { id: '3', label: 'Manual save', secondaryLabel: '1 hour ago', icon: 'save' },
      { id: '4', label: 'Initial draft', secondaryLabel: 'Yesterday', icon: 'file' },
    ],
  },
};

// Share permissions menu
export const SharePermissions: Story = {
  args: {
    showIcons: true,
    heading: 'Share with',
    items: [
      { id: '1', label: 'Anyone with the link', secondaryLabel: 'Can view', icon: 'globe' },
      { id: '2', label: 'Only people invited', secondaryLabel: 'Restricted', icon: 'lock', selected: true },
      { id: '3', label: 'Team members', secondaryLabel: 'Can edit', icon: 'users' },
    ],
  },
};

// Long labels example (tests max width)
export const LongLabels: Story = {
  args: {
    showIcons: true,
    items: [
      { id: '1', label: 'This is a very long label that should expand the dropdown', icon: 'info' },
      { id: '2', label: 'Another lengthy option to demonstrate width behavior', icon: 'info' },
      { id: '3', label: 'Short', icon: 'info' },
    ],
  },
};

// Minimal example (tests min width)
export const MinimalLabels: Story = {
  args: {
    showIcons: false,
    items: [
      { id: '1', label: 'A' },
      { id: '2', label: 'B' },
      { id: '3', label: 'C' },
    ],
  },
};
