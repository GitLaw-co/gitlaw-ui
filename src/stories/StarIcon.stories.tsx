import type { Meta, StoryObj } from "@storybook/react";
import { StarIcon } from "../components/StarIcon";

const meta: Meta<typeof StarIcon> = {
  title: "Components/StarIcon",
  component: StarIcon,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    starred: {
      control: "boolean",
      description: "Active (filled purple) or inactive (light purple)",
    },
    className: {
      control: "text",
      description: "Tailwind size class (e.g. size-5, size-8)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { starred: true, className: "size-8" },
};

export const AllStates: Story = {
  render: () => (
    <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-8" />
        <span className="text-xs text-text-secondary">Active</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred={false} className="size-8" />
        <span className="text-xs text-text-secondary">Inactive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-5" />
        <span className="text-xs text-text-secondary">size-5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-4" />
        <span className="text-xs text-text-secondary">size-4</span>
      </div>
    </div>
  ),
};
