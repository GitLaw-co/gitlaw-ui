import type { Story, StoryDefault } from "@ladle/react";
import { useState } from 'react';
import { Switch } from '../components/Switch';

export default {
  title: "Components / Form / Switch",
  meta: { layout: "centered" },
  argTypes: {
    checked: {
      control: { type: "boolean" },
      description: 'Current checked state',
    },
    size: {
      control: { type: "select" },
      options: ['s', 'm'],
      description: 'The size of the switch',
    },
    disabled: {
      control: { type: "boolean" },
      description: 'Disabled state',
    },
  },
} satisfies StoryDefault;

export const Default: Story<typeof Switch> = (args) => <Switch {...args} />;
Default.args = {
  checked: false,
  size: 'm',
  disabled: false,
};

export const AllStates: Story = () => (
  <div className="flex flex-col gap-4">
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Medium On:</span>
      <Switch checked size="m" />
    </div>
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Medium Off:</span>
      <Switch checked={false} size="m" />
    </div>
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Small On:</span>
      <Switch checked size="s" />
    </div>
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Small Off:</span>
      <Switch checked={false} size="s" />
    </div>
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Disabled On:</span>
      <Switch checked disabled size="m" />
    </div>
    <div className="flex items-center gap-4">
      <span className="w-32 text-sm">Disabled Off:</span>
      <Switch checked={false} disabled size="m" />
    </div>
  </div>
);

function InteractiveSwitch(): JSX.Element {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex items-center gap-4">
      <Switch checked={checked} onChange={setChecked} size="m" />
      <span className="text-sm text-subtle">{checked ? 'On' : 'Off'}</span>
    </div>
  );
}

export const Interactive: Story = () => <InteractiveSwitch />;
