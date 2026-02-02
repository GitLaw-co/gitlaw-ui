import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from '../components/Sidebar';

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Navigation/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'radio',
      options: ['landing', 'inner'],
      description: 'Sidebar variant - landing (dark) or inner (light)',
    },
    status: {
      control: 'radio',
      options: ['collapsed', 'expanded'],
      description: 'Sidebar status - collapsed or expanded',
    },
    user: {
      control: 'radio',
      options: ['signed-in', 'signed-out'],
      description: 'User authentication status',
    },
    userName: {
      control: 'text',
      description: 'User name for profile',
    },
    userInitials: {
      control: 'text',
      description: 'User initials for avatar',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ height: '800px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Signed In - Landing - Collapsed
export const SignedInLandingCollapsed: Story = {
  args: {
    variant: 'landing',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC',
  },
};

// Signed In - Landing - Expanded
export const SignedInLandingExpanded: Story = {
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC',
  },
};

// Signed In - Inner - Collapsed
export const SignedInInnerCollapsed: Story = {
  args: {
    variant: 'inner',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC',
  },
};

// Signed In - Inner - Expanded (Default)
export const SignedInInnerExpanded: Story = {
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC',
  },
};

// Signed Out - Landing - Expanded
export const SignedOutLandingExpanded: Story = {
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-out',
  },
};

// Signed Out - Inner - Expanded (Optional variant)
export const SignedOutInnerExpanded: Story = {
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-out',
  },
};

// Default story
export const Default: Story = {
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC',
  },
};

// All variants showcase
export const AllVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', height: '800px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed In - Landing - Collapsed</span>
        <Sidebar variant="landing" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed In - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed In - Inner - Collapsed</span>
        <Sidebar variant="inner" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed In - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Signed Out variants showcase
export const SignedOutVariantsShowcase: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', height: '800px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed Out - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-out" />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontSize: '12px', color: '#666' }}>Signed Out - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-out" />
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
  },
};

// Interactive example with toggle
export const Interactive: Story = {
  render: function InteractiveSidebar() {
    const [status, setStatus] = React.useState<'collapsed' | 'expanded'>('expanded');
    const [variant, setVariant] = React.useState<'landing' | 'inner'>('inner');

    return (
      <div style={{ display: 'flex', height: '800px' }}>
        <Sidebar
          variant={variant}
          status={status}
          user="signed-in"
          userName="Alex Carter"
          userInitials="AC"
          onToggle={() => setStatus(status === 'collapsed' ? 'expanded' : 'collapsed')}
        />
        <div style={{ padding: '16px', flex: 1 }}>
          <h3>Controls</h3>
          <div style={{ marginTop: '8px' }}>
            <button
              onClick={() => setStatus(status === 'collapsed' ? 'expanded' : 'collapsed')}
              style={{ marginRight: '8px', padding: '8px 16px' }}
            >
              Toggle: {status}
            </button>
            <button
              onClick={() => setVariant(variant === 'landing' ? 'inner' : 'landing')}
              style={{ padding: '8px 16px' }}
            >
              Variant: {variant}
            </button>
          </div>
        </div>
      </div>
    );
  },
};

// We need to import React for the Interactive story
import React from 'react';
