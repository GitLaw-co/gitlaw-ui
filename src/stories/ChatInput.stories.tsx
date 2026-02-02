import type { Meta, StoryObj } from '@storybook/react';
import { ChatInput } from '../components/ChatInput';

const meta: Meta<typeof ChatInput> = {
  title: 'Components/Feedback/ChatInput',
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
      description: 'Placeholder text',
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

// Active state (empty)
export const Active: Story = {
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true,
  },
};

// Populated state (with text)
export const Populated: Story = {
  args: {
    status: 'populated',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
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

// Medium size - Active
export const MediumActive: Story = {
  args: {
    status: 'active',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true,
  },
};

// Medium size - Populated
export const MediumPopulated: Story = {
  args: {
    status: 'populated',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
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
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Active State (Empty)</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
    </div>
  ),
};

// Size comparison
export const SizeComparison: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Large Size</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Medium Size</h3>
        <ChatInput status="active" size="m" placeholder="Draft a mutual NDA" />
      </div>
    </div>
  ),
};
