import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/Sidebar';
import { FileText } from '../icons/FileText';
import { FolderClosed } from '../icons/FolderClosed';
import { Building } from '../icons/Building';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'landing'],
      description: 'Visual variant',
    },
    state: {
      control: 'select',
      options: ['expanded', 'collapsed'],
      description: 'Expanded or collapsed state',
    },
    profileName: {
      control: 'text',
      description: 'Profile/company name',
    },
    avatarInitials: {
      control: 'text',
      description: 'Avatar initials',
    },
    isSignedIn: {
      control: 'boolean',
      description: 'Whether user is signed in (affects landing variant)',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '600px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultNavItems = [
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="size-5" />,
    children: [
      { id: 'contracts', label: 'Contracts' },
      { id: 'agreements', label: 'Agreements' },
    ],
  },
  {
    id: 'others',
    label: 'Others',
    icon: <FolderClosed className="size-5" />,
  },
  {
    id: 'company',
    label: 'Company',
    icon: <Building className="size-5" />,
  },
];

// Default expanded sidebar
export const Default: Story = {
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true,
  },
};

// Collapsed sidebar
export const Collapsed: Story = {
  args: {
    variant: 'default',
    state: 'collapsed',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true,
  },
};

// Landing variant (purple background)
export const LandingSignedIn: Story = {
  args: {
    variant: 'landing',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true,
  },
};

// Landing variant signed out
export const LandingSignedOut: Story = {
  args: {
    variant: 'landing',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: false,
  },
};

// With active item
export const WithActiveItem: Story = {
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: [
      {
        id: 'documents',
        label: 'Documents',
        icon: <FileText className="size-5" />,
        active: true,
        children: [
          { id: 'contracts', label: 'Contracts', active: true },
          { id: 'agreements', label: 'Agreements' },
        ],
      },
      {
        id: 'others',
        label: 'Others',
        icon: <FolderClosed className="size-5" />,
      },
    ],
    isSignedIn: true,
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true,
  },
  render: (args) => {
    const [state, setState] = React.useState<'expanded' | 'collapsed'>(args.state || 'expanded');
    return (
      <Sidebar
        {...args}
        state={state}
        onCollapseToggle={() => setState(state === 'expanded' ? 'collapsed' : 'expanded')}
      />
    );
  },
};

// Need to import React for the interactive story
import React from 'react';
