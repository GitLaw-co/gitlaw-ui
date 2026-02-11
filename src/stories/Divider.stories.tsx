import type { Story, StoryDefault } from "@ladle/react";
import { Divider } from '../components/Divider';

export default {
  title: "Components / Layout / Divider",
  meta: { layout: "padded" },
} satisfies StoryDefault;

export const Default: Story<typeof Divider> = (args) => <Divider {...args} />;
Default.args = {};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-gitlaw-2xl w-[400px]">
    <div>
      <p className="text-sm text-text-secondary mb-gitlaw-m">Default divider</p>
      <Divider />
    </div>
    <div>
      <p className="text-sm text-text-secondary mb-gitlaw-m">Between content blocks</p>
      <div className="flex flex-col">
        <p className="text-sm text-text-primary px-gitlaw-l py-gitlaw-m">Section above</p>
        <Divider />
        <p className="text-sm text-text-primary px-gitlaw-l py-gitlaw-m">Section below</p>
      </div>
    </div>
    <div>
      <p className="text-sm text-text-secondary mb-gitlaw-m">Full width (no horizontal margin)</p>
      <Divider className="w-full border-0 border-t border-border mx-0 my-gitlaw-m" />
    </div>
  </div>
);
