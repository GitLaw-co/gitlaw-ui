import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ChatInput } from '../components/ChatInput';
import { MenuItem } from '../components/MenuItem';
import { Icon } from '../components/Icon';
import ukFlag from '../../Assets/flags/uk-uk.svg';

const meta: Meta<typeof ChatInput> = {
  title: 'Components/Chat/ChatInput',
  component: ChatInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['active', 'populated', 'working'],
      description: 'Input status',
    },
    size: {
      control: 'select',
      options: ['l', 'm'],
      description: 'Input size',
    },
    placeholder: {
      control: 'text',
      description: 'Static placeholder text (overrides animated placeholders)',
    },
    animatedPlaceholders: {
      control: 'object',
      description: 'Array of placeholders to rotate through with animation',
    },
    placeholderInterval: {
      control: 'number',
      description: 'Interval in ms between placeholder rotations (default: 3000)',
    },
    value: {
      control: 'text',
      description: 'Input value',
    },
    showQuickActions: {
      control: 'boolean',
      description: 'Show quick actions',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8" style={{ width: '700px' }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof ChatInput>;

// Active state with animated placeholders (default)
export const Active: Story = {
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
  },
};

// Populated state (with text) - animated placeholder hidden when value exists
export const Populated: Story = {
  args: {
    status: 'populated',
    size: 'l',
    value: 'User is typing here',
    showQuickActions: true,
  },
};

// Working state
export const Working: Story = {
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false,
  },
};

// Medium size - Active with animated placeholders
export const MediumActive: Story = {
  args: {
    status: 'active',
    size: 'm',
    value: '',
    showQuickActions: true,
  },
};

// Medium size - Populated
export const MediumPopulated: Story = {
  args: {
    status: 'populated',
    size: 'm',
    value: 'User is typing here',
    showQuickActions: true,
  },
};

// Without quick actions
export const WithoutQuickActions: Story = {
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false,
  },
};

// Custom quick actions
export const CustomQuickActions: Story = {
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'What would you like to do?',
    value: '',
    showQuickActions: true,
    quickActions: [
      { id: 'draft', label: 'Create contract', icon: 'draft' },
      { id: 'review', label: 'Review document', icon: 'review' },
      { id: 'summarize', label: 'Summarize', icon: 'summarize' },
    ],
  },
};

// All states showcase
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Active State (Animated Placeholders)</h3>
        <ChatInput status="active" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
    </div>
  ),
};

// Animated placeholders (default behavior)
export const AnimatedPlaceholders: Story = {
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
    placeholderInterval: 3000,
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, the ChatInput cycles through animated placeholder suggestions every 3 seconds with a smooth fade transition.',
      },
    },
  },
};

// Custom animated placeholders
export const CustomAnimatedPlaceholders: Story = {
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
    animatedPlaceholders: [
      'Ask about contract clauses',
      'Explain indemnification terms',
      'Find similar agreements',
      'Check for compliance issues',
    ],
    placeholderInterval: 2500,
  },
  parameters: {
    docs: {
      description: {
        story: 'You can provide custom placeholder messages and adjust the rotation interval.',
      },
    },
  },
};

// Static placeholder (overrides animation)
export const StaticPlaceholder: Story = {
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Type your question here...',
    value: '',
    showQuickActions: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Providing a static `placeholder` prop disables the animated rotation.',
      },
    },
  },
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Large Size (with animated placeholders)</h3>
        <ChatInput status="active" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Medium Size (with animated placeholders)</h3>
        <ChatInput status="active" size="m" />
      </div>
    </div>
  ),
};

// UK Flag component
const UKFlag = () => (
  <img src={ukFlag} alt="UK" className="size-6 rounded-sm object-cover" />
);

// With Settings Dropdown
const ChatInputWithDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [reviewChanges, setReviewChanges] = useState(true);

  const dropdownContent = (
    <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      <MenuItem
        primaryText="Review agent changes"
        secondaryText="Review AI changes before applying"
        showSecondaryText
        showLeftElement
        leftIcon={<Icon name="text-search" className="size-6" />}
        width="fill"
        showRSwitch
        rSwitchChecked={reviewChanges}
        rSwitchSize="s"
        onRSwitchChange={(checked) => setReviewChanges(checked)}
      />
      <MenuItem
        primaryText="Your jurisdiction"
        secondaryText="England & Wales"
        showSecondaryText
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        showRIcon1
        rIcon1="chevron-right"
      />
    </div>
  );

  return (
    <ChatInput
      status="active"
      size="l"
      onSettingsClick={() => setShowDropdown(!showDropdown)}
      showSettingsDropdown={showDropdown}
      settingsDropdownContent={dropdownContent}
      settingsDropdownPosition="top"
      onSettingsDropdownClose={() => setShowDropdown(false)}
    />
  );
};

export const WithSettingsDropdown: Story = {
  render: () => <ChatInputWithDropdown />,
  parameters: {
    docs: {
      description: {
        story: 'Click the settings icon to toggle the jurisdiction and settings dropdown.',
      },
    },
  },
};
