import type { Story, StoryDefault } from "@ladle/react";
import { useState } from 'react';
import { Radio } from '../components/Radio';

export default {
  title: "Components / Form / Radio",
  meta: { layout: "centered" },
  argTypes: {
    status: {
      control: { type: "boolean" },
      description: 'Radio state (on / off)',
    },
    disabled: {
      control: { type: "boolean" },
      description: 'Disabled state',
    },
  },
} satisfies StoryDefault;

// Default
export const Default: Story<typeof Radio> = (args) => <Radio {...args} />;
Default.args = {
  status: false,
  disabled: false,
};

// All States
export const AllStates: Story = () => (
  <div className="flex items-center gap-6">
    <div className="flex flex-col items-center gap-2">
      <Radio status={false} />
      <span className="text-xs text-subtle">Off</span>
    </div>
    <div className="flex flex-col items-center gap-2">
      <Radio status={true} />
      <span className="text-xs text-subtle">On</span>
    </div>
  </div>
);

// Interactive Radio Group
export const RadioGroup: Story = () => {
  const RadioGroupExample = () => {
    const [selected, setSelected] = useState(0);
    const options = ['Option A', 'Option B', 'Option C'];

    return (
      <div className="flex flex-col gap-3 p-4 bg-card rounded-lg min-w-[240px]">
        {options.map((label, i) => (
          <div
            key={i}
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => setSelected(i)}
          >
            <Radio status={selected === i} onChange={() => setSelected(i)} />
            <span className="text-sm text-foreground">{label}</span>
          </div>
        ))}
      </div>
    );
  };

  return <RadioGroupExample />;
};
