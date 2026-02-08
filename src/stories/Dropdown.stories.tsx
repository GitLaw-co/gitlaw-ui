import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../components/Dropdown';

const meta: Meta<typeof Dropdown> = {
  title: 'Components/Actions/Dropdown',
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
};

export const AllVariants: Story = {
  args: {
    showIcons: true,
    heading: 'All Features',
    items: [
      { id: '1', label: 'Selected item', secondaryLabel: 'With secondary label', icon: 'check-circle', selected: true },
      { id: '2', label: 'Normal item', secondaryLabel: 'Also has secondary', icon: 'circle' },
      { id: '3', label: 'Disabled item', icon: 'x-circle', disabled: true },
      { id: '4', label: 'Another option', icon: 'star' },
    ],
  },
};

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
