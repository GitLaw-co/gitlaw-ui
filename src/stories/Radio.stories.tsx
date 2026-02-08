import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Radio } from '../components/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/Form/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'boolean',
      description: 'Radio state (on / off)',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    status: false,
    disabled: false,
  },
};

// All States
export const AllStates: Story = {
  render: () => (
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
  ),
};

// Interactive Radio Group
export const RadioGroup: Story = {
  render: () => {
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
  },
};
