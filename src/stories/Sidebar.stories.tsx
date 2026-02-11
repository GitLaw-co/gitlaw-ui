import React from 'react';
import type { Story, StoryDefault } from "@ladle/react";
import { Sidebar } from '../components/Sidebar';

export default {
  title: "Components / Navigation / Sidebar",
  meta: { layout: "fullscreen" },
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ['landing', 'inner'],
      description: 'Sidebar variant - landing (dark) or inner (light)',
    },
    status: {
      control: { type: "radio" },
      options: ['collapsed', 'expanded'],
      description: 'Sidebar status - collapsed or expanded',
    },
    user: {
      control: { type: "radio" },
      options: ['signed-in', 'signed-out'],
      description: 'User authentication status',
    },
    userName: {
      control: { type: "text" },
      description: 'User name for profile',
    },
    userInitials: {
      control: { type: "text" },
      description: 'User initials for avatar',
    },
  },
  decorators: [
    (Component) => (
      <div style={{ height: '800px', display: 'flex' }}>
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault;

export const Default: Story = (args) => <Sidebar {...args} />;
Default.args = {
  variant: 'inner',
  status: 'expanded',
  user: 'signed-in',
  userName: 'Alex Carter',
  userInitials: 'AC',
};

export const AllVariantsShowcase: Story = () => (
  <div style={{ display: 'flex', gap: '24px', height: '800px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed In - Landing - Collapsed</span>
      <Sidebar variant="landing" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed In - Landing - Expanded</span>
      <Sidebar variant="landing" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed In - Inner - Collapsed</span>
      <Sidebar variant="inner" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed In - Inner - Expanded</span>
      <Sidebar variant="inner" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
    </div>
  </div>
);
AllVariantsShowcase.meta = { layout: "padded" };

export const SignedOutVariantsShowcase: Story = () => (
  <div style={{ display: 'flex', gap: '24px', height: '800px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed Out - Landing - Expanded</span>
      <Sidebar variant="landing" status="expanded" user="signed-out" />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      <span className="text-xs text-text-secondary">Signed Out - Inner - Expanded</span>
      <Sidebar variant="inner" status="expanded" user="signed-out" />
    </div>
  </div>
);
SignedOutVariantsShowcase.meta = { layout: "padded" };

export const Interactive: Story = function InteractiveSidebar() {
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
};
