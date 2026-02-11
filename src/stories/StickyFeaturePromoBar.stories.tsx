import type { Story, StoryDefault } from "@ladle/react";
import { StickyFeaturePromoBar } from "../components/StickyFeaturePromoBar";

export default {
  title: "Components / Feedback / StickyFeaturePromoBar",
  meta: { layout: "centered" },
  argTypes: {
    title: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    avatarSrc: { control: { type: "text" } },
    actionLabel: { control: { type: "text" } },
    showAction: { control: { type: "boolean" } },
  },
  decorators: [
    (Component) => (
      <div className="bg-page-background p-8">
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault;

export const Default: Story = (args) => <StickyFeaturePromoBar {...args} />;
Default.args = {
  title: "Word export is now live",
  subtitle: "Try downloading your contract in .docx",
  avatarSrc: "/illustrations/word-icon.png",
  actionLabel: "Create contract",
  showAction: true,
};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-4 w-[600px]">
    <StickyFeaturePromoBar
      title="Word export is now live"
      subtitle="Try downloading your contract in .docx"
      avatarSrc="/illustrations/word-icon.png"
      actionLabel="Create contract"
      showAction
    />
    <StickyFeaturePromoBar
      title="New feature available"
      subtitle="Check out the latest updates"
      avatarSrc="/illustrations/word-icon.png"
      showAction={false}
    />
    <StickyFeaturePromoBar
      title="Your document has been saved"
      avatarSrc="/illustrations/word-icon.png"
      actionLabel="View"
      showAction
    />
    <StickyFeaturePromoBar
      title="Export complete"
      subtitle="Your file is ready for download"
      actionLabel="Download"
      showAction
    />
  </div>
);
