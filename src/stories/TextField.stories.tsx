import type { Story, StoryDefault } from "@ladle/react";
import { TextField } from "../components/TextField";

export default {
  title: "Components / Form / TextField",
  meta: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl"],
      description: "The size of the text field",
    },
    status: {
      control: { type: "select" },
      options: ["empty", "populated", "active"],
      description: "The current status",
    },
    showStroke: {
      control: { type: "boolean" },
      description: "Show border stroke",
    },
    showIcon: {
      control: { type: "boolean" },
      description: "Show icon in top right",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
    rows: {
      control: { type: "number" },
      description: "Number of rows",
    },
  },
} satisfies StoryDefault;

export const Default: Story = (args) => <TextField {...args} />;
Default.args = {
  size: "m",
  placeholder: "Placeholder text",
  showStroke: true,
};

export const AllVariants: Story = () => (
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
);
