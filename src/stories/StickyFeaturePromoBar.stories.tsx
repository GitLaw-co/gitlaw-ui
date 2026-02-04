import type { Meta, StoryObj } from "@storybook/react";
import { StickyFeaturePromoBar } from "../components/StickyFeaturePromoBar";

const meta: Meta<typeof StickyFeaturePromoBar> = {
  title: "Components/StickyFeaturePromoBar",
  component: StickyFeaturePromoBar,
  parameters: { layout: "centered" },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    avatarSrc: { control: "text" },
    actionLabel: { control: "text" },
    showAction: { control: "boolean" },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Word export is now live",
    subtitle: "Try downloading your contract in .docx",
    avatarSrc: "/illustrations/word-icon.png",
    actionLabel: "Create contract",
    showAction: true,
  },
};

export const WithoutAction: Story = {
  args: {
    title: "New feature available",
    subtitle: "Check out the latest updates",
    avatarSrc: "/illustrations/word-icon.png",
    showAction: false,
  },
};

export const WithoutSubtitle: Story = {
  args: {
    title: "Your document has been saved",
    avatarSrc: "/illustrations/word-icon.png",
    actionLabel: "View",
    showAction: true,
  },
};

export const WithoutAvatar: Story = {
  args: {
    title: "Export complete",
    subtitle: "Your file is ready for download",
    actionLabel: "Download",
    showAction: true,
  },
};
