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

// Default story with all controllable args
export const Default: Story = {
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
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
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Medium Size</h3>
        <ChatInput status="active" size="m" />
      </div>
    </div>
  ),
};

// UK Flag component
const UKFlag = () => (
  <img src={ukFlag} alt="UK" className="size-6 rounded-sm object-cover" />
);

// Interactive story with settings dropdown
function ChatInputWithDropdown(): JSX.Element {
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
}

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
