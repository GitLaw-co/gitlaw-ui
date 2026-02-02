import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Switch } from '../components/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Components/Core/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Current checked state',
    },
    size: {
      control: 'select',
      options: ['s', 'm'],
      description: 'The size of the switch',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// On State
export const On: Story = {
  args: {
    checked: true,
    size: 'm',
  },
};

// Off State
export const Off: Story = {
  args: {
    checked: false,
    size: 'm',
  },
};

// Size Small On
export const SmallOn: Story = {
  args: {
    checked: true,
    size: 's',
  },
};

// Size Small Off
export const SmallOff: Story = {
  args: {
    checked: false,
    size: 's',
  },
};

// Disabled On
export const DisabledOn: Story = {
  args: {
    checked: true,
    size: 'm',
    disabled: true,
  },
};

// Disabled Off
export const DisabledOff: Story = {
  args: {
    checked: false,
    size: 'm',
    disabled: true,
  },
};

// All States
export const AllStates: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Medium On:</span>
        <Switch checked size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Medium Off:</span>
        <Switch checked={false} size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Small On:</span>
        <Switch checked size="s" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Small Off:</span>
        <Switch checked={false} size="s" />
      </div>
    </div>
  ),
};

// Interactive Example
const InteractiveSwitch = () => {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Switch checked={checked} onChange={setChecked} size="m" />
      <span className="text-sm text-text-secondary">
        {checked ? 'On' : 'Off'}
      </span>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveSwitch />,
};

// Usage Example
export const UsageExample: Story = {
  render: () => {
    const SwitchSettings = () => {
      const [notifications, setNotifications] = useState(true);
      const [darkMode, setDarkMode] = useState(false);
      const [autoSave, setAutoSave] = useState(true);

      return (
        <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm min-w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Notifications</span>
            <Switch checked={notifications} onChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dark Mode</span>
            <Switch checked={darkMode} onChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Auto-save</span>
            <Switch checked={autoSave} onChange={setAutoSave} />
          </div>
        </div>
      );
    };

    return <SwitchSettings />;
  },
};
