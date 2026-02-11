import type { Story, StoryDefault } from "@ladle/react";
import { Select } from "../components/Select";

export default {
  title: "Components / Form / Select",
  meta: { layout: "centered" },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s", "m", "l", "xl"],
      description: "The size of the select",
    },
    status: {
      control: { type: "select" },
      options: ["empty", "default"],
      description: "The current status",
    },
    align: {
      control: { type: "select" },
      options: ["fill", "hug"],
      description: "Width behavior",
    },
    labelPosition: {
      control: { type: "select" },
      options: ["top", "left"],
      description: "Label position",
    },
    showLabel: {
      control: { type: "boolean" },
      description: "Show external label",
    },
    showLeftIcon: {
      control: { type: "boolean" },
      description: "Show left icon",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text",
    },
    label: {
      control: { type: "text" },
      description: "Label text",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Disabled state",
    },
  },
} satisfies StoryDefault;

const sampleOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
];

export const Default: Story = (args) => (
  <div style={{ width: "340px" }}>
    <Select {...args} />
  </div>
);
Default.args = {
  size: "m",
  placeholder: "Select an option",
  align: "fill",
  options: sampleOptions,
};

export const AllSizes: Story = () => (
  <div className="flex flex-col gap-6 w-[340px]">
    <Select size="xl" placeholder="Extra Large" showLabel label="XL" options={sampleOptions} />
    <Select size="l" placeholder="Large" showLabel label="L" options={sampleOptions} />
    <Select size="m" placeholder="Medium" showLabel label="M" options={sampleOptions} />
    <Select size="s" placeholder="Small" showLabel label="S" options={sampleOptions} />
    <Select size="xs" placeholder="Extra Small" showLabel label="XS" options={sampleOptions} />
  </div>
);
