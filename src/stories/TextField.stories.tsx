import type { Meta, StoryObj } from '@storybook/react';
import { TextField } from '../components/TextField';

const meta: Meta<typeof TextField> = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the text field',
    },
    status: {
      control: 'select',
      options: ['empty', 'populated', 'active'],
      description: 'The current status',
    },
    showStroke: {
      control: 'boolean',
      description: 'Show border stroke',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show icon in top right',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    rows: {
      control: 'number',
      description: 'Number of rows',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: 'm',
    placeholder: 'Placeholder text',
    showStroke: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="text-sm font-semibold mb-4">Sizes</p>
        <div className="flex flex-col gap-4">
          <TextField size="xl" placeholder="Extra Large" showStroke />
          <TextField size="l" placeholder="Large" showStroke />
          <TextField size="m" placeholder="Medium" showStroke />
          <TextField size="s" placeholder="Small" showStroke />
          <TextField size="xs" placeholder="Extra Small" showStroke />
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold mb-4">States</p>
        <div className="flex flex-col gap-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Empty</p>
            <TextField size="m" status="empty" placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Populated</p>
            <TextField size="m" status="populated" value="Some content here" placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Active</p>
            <TextField size="m" status="active" value="Typing..." placeholder="Placeholder text" showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Disabled</p>
            <TextField size="m" placeholder="Disabled text field" disabled showStroke />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Without Stroke</p>
            <TextField size="m" placeholder="No border" showStroke={false} />
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">With Icon</p>
            <TextField size="m" placeholder="AI-assisted text field" showStroke showIcon />
          </div>
        </div>
      </div>
    </div>
  ),
};
