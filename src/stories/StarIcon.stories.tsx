import type { Story, StoryDefault } from "@ladle/react";
import { StarIcon } from "../components/StarIcon";

export default {
  title: "Components / Data Display / StarIcon",
  meta: { layout: "centered" },
  argTypes: {
    starred: {
      control: { type: "boolean" },
      description: "Active (filled purple) or inactive (light purple)",
    },
    className: {
      control: { type: "text" },
      description: "Tailwind size class (e.g. size-5, size-8)",
    },
  },
} satisfies StoryDefault;

export const Default: Story<typeof StarIcon> = (args) => <StarIcon {...args} />;
Default.args = { starred: true, className: "size-8" };

export const AllStates: Story = () => (
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
);
