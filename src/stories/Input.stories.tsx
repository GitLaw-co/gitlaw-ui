import type { Story, StoryDefault } from "@ladle/react";
import { Input } from '../components/Input';

export default {
  title: "Components / Form / Input",
  meta: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ['xs', 's', 'm', 'l', 'xl'],
      description: 'The size of the input',
    },
    status: {
      control: { type: "select" },
      options: ['empty', 'populated', 'active'],
      description: 'The current status of the input',
    },
    align: {
      control: { type: "select" },
      options: ['fill', 'hug'],
      description: 'Width behavior',
    },
    showLabel: {
      control: { type: "boolean" },
      description: 'Show external label',
    },
    showLeftIcon: {
      control: { type: "boolean" },
      description: 'Show left icon',
    },
    showRightIcon: {
      control: { type: "boolean" },
      description: 'Show right icon (clear button)',
    },
    placeholder: {
      control: { type: "text" },
      description: 'Placeholder text',
    },
    label: {
      control: { type: "text" },
      description: 'Label text',
    },
    disabled: {
      control: { type: "boolean" },
      description: 'Disabled state',
    },
    context: {
      control: { type: "select" },
      options: ['default', 'document-empty', 'document-filled'],
      description: 'Context for document inputs - affects background color',
    },
  },
  decorators: [(Component) => (
    <div style={{ width: '360px' }}>
      <Component />
    </div>
  )],
} satisfies StoryDefault;

// Default Input
export const Default: Story<typeof Input> = (args) => <Input {...args} />;
Default.args = {
  size: 'm',
  placeholder: 'Enter text...',
  align: 'fill',
};

// All Sizes Showcase
export const AllSizes: Story = () => (
  <div className="flex flex-col gap-6 w-[360px]">
    <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
    <Input size="l" placeholder="Large" showLabel label="L" />
    <Input size="m" placeholder="Medium" showLabel label="M" />
    <Input size="s" placeholder="Small" showLabel label="S" />
    <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
  </div>
);

// Document Inputs Showcase
export const DocumentInputs: Story = () => (
  <div className="flex flex-col gap-6 w-[360px]">
    <div>
      <p className="text-sm text-subtle mb-2">Empty (yellow background - new input)</p>
      <div className="flex flex-wrap gap-2">
        <Input size="xs" placeholder="Placeholder text" context="document-empty" align="hug" />
        <Input size="xs" placeholder="Agreement date" context="document-empty" align="hug" />
      </div>
    </div>
    <div>
      <p className="text-sm text-subtle mb-2">Filled (purple background - edited input)</p>
      <div className="flex flex-wrap gap-2">
        <Input size="xs" value="Contents" context="document-filled" align="hug" />
        <Input size="xs" value="March 27, 2026" context="document-filled" align="hug" />
      </div>
    </div>
    <div>
      <p className="text-sm text-subtle mb-2">Full width variants</p>
      <div className="flex flex-col gap-2">
        <Input size="xs" placeholder="Empty full width" context="document-empty" align="fill" />
        <Input size="xs" value="Filled full width" context="document-filled" align="fill" />
      </div>
    </div>
  </div>
);
