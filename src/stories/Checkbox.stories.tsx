import type { Story, StoryDefault } from "@ladle/react";
import { useState } from 'react';
import { Checkbox } from '../components/Checkbox';
import type { CheckboxStatus } from '../components/Checkbox';

export default {
  title: "Components / Form / Checkbox",
  meta: { layout: "centered" },
  argTypes: {
    status: {
      control: { type: "select" },
      options: ['off', 'on', 'semi'],
      description: 'Checkbox state',
    },
    disabled: {
      control: { type: "boolean" },
      description: 'Disabled state',
    },
  },
} satisfies StoryDefault;

// Default controllable story
export const Default: Story<typeof Checkbox> = (args) => <Checkbox {...args} />;
Default.args = {
  status: 'off',
};

// Interactive with state toggling
function InteractiveCheckbox(): JSX.Element {
  const [status, setStatus] = useState<CheckboxStatus>('off');

  return (
    <div className="flex items-center gap-3">
      <Checkbox status={status} onChange={setStatus} />
      <span className="text-sm text-subtle">Status: {status}</span>
    </div>
  );
}

export const Interactive: Story = () => <InteractiveCheckbox />;

// All states showcase
function AllStatesShowcase(): JSX.Element {
  const [items, setItems] = useState([
    { label: 'Receive email notifications', checked: true },
    { label: 'Share usage data', checked: false },
    { label: 'Auto-save drafts', checked: true },
  ]);

  const allChecked = items.every((i) => i.checked);
  const someChecked = items.some((i) => i.checked);

  function getSelectAllStatus(): CheckboxStatus {
    if (allChecked) return 'on';
    if (someChecked) return 'semi';
    return 'off';
  }

  function toggleAll(): void {
    const newVal = !allChecked;
    setItems(items.map((i) => ({ ...i, checked: newVal })));
  }

  function toggleItem(index: number): void {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, checked: !item.checked } : item
      )
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* State variants */}
      <div className="flex items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <Checkbox status="off" />
          <span className="text-xs text-subtle">Off</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Checkbox status="on" />
          <span className="text-xs text-subtle">On</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Checkbox status="semi" />
          <span className="text-xs text-subtle">Semi</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Checkbox status="off" disabled />
          <span className="text-xs text-subtle">Disabled Off</span>
        </div>
        <div className="flex flex-col items-center gap-2">
          <Checkbox status="on" disabled />
          <span className="text-xs text-subtle">Disabled On</span>
        </div>
      </div>

      {/* With labels example */}
      <div className="flex flex-col gap-3 p-4 bg-card rounded-lg min-w-[280px]">
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <Checkbox status={getSelectAllStatus()} onChange={toggleAll} />
          <span className="text-sm font-semibold text-foreground">
            Select all
          </span>
        </div>
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-3">
            <Checkbox
              status={item.checked ? 'on' : 'off'}
              onChange={() => toggleItem(i)}
            />
            <span className="text-sm text-foreground">{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export const AllStates: Story = () => <AllStatesShowcase />;
