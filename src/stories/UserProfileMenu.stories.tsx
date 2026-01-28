import type { Meta, StoryObj } from '@storybook/react';
import { UserProfileMenu } from '../components/UserProfileMenu';

const meta: Meta<typeof UserProfileMenu> = {
  title: 'Components/UserProfileMenu',
  component: UserProfileMenu,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    userName: {
      control: 'text',
      description: 'Current user name',
    },
    userEmail: {
      control: 'text',
      description: 'Current user email',
    },
    avatarInitials: {
      control: 'text',
      description: 'User avatar initials',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default without profiles
export const Default: Story = {
  args: {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    avatarInitials: 'JD',
    profiles: [],
  },
};

// With profile switcher
export const WithProfiles: Story = {
  args: {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    avatarInitials: 'JD',
    profiles: [
      { id: '1', name: 'Acme Corporation', avatarInitials: 'AC', selected: true },
      { id: '2', name: 'Personal Workspace', avatarInitials: 'PW' },
      { id: '3', name: 'Startup Inc', avatarInitials: 'SI' },
    ],
  },
};

// Multiple profiles
export const MultipleProfiles: Story = {
  args: {
    userName: 'Jane Smith',
    userEmail: 'jane@company.com',
    avatarInitials: 'JS',
    profiles: [
      { id: '1', name: 'Company A', avatarInitials: 'CA' },
      { id: '2', name: 'Company B', avatarInitials: 'CB', selected: true },
      { id: '3', name: 'Company C', avatarInitials: 'CC' },
      { id: '4', name: 'Personal', avatarInitials: 'PE' },
    ],
  },
};
