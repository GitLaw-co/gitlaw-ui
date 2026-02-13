import type { Meta, StoryObj } from "@storybook/react";
import { SectionHeader } from "../components/SectionHeader";
import { Button } from "../components";

const meta: Meta<typeof SectionHeader> = {
  title: "Components/Layout/SectionHeader",
  component: SectionHeader,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    secondaryText: { control: "text" },
    showInfo: { control: "boolean" },
    showAction: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof SectionHeader>;

/**
 * Default — controllable via the args panel.
 */
export const Default: Story = {
  args: {
    title: "Personal Memories",
    secondaryText: "Private",
    showInfo: false,
    showAction: true,
  },
  render: (args) => (
    <div className="max-w-[688px]">
      <SectionHeader
        {...args}
        action={
          <Button
            variant="secondary"
            size="s"
            showLeftIcon
            leftIconName="arrow-right"
          >
            Employment Agreement
          </Button>
        }
      />
    </div>
  ),
};

/**
 * All variants — mirrors the two Figma types: single action & multi action.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-[688px]">
      {/* Single action (type=single action in Figma) */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Single action
        </p>
        <SectionHeader
          title="Personal Memories"
          secondaryText="Private"
          action={
            <Button
              variant="secondary"
              size="s"
              showLeftIcon
              leftIconName="arrow-right"
            >
              Employment Agreement
            </Button>
          }
        />
      </div>

      {/* Multi action (type=multi action in Figma) */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Multi action
        </p>
        <SectionHeader
          title="Personal Memories"
          secondaryText="Private"
          action={
            <div className="flex items-center gap-gitlaw-s">
              <Button variant="icon" size="s" leftIconName="search" />
              <Button variant="icon" size="s" leftIconName="arrow-down" />
              <Button variant="icon" size="s" leftIconName="layout-grid" />
              <Button variant="icon" size="s" leftIconName="plus" />
            </div>
          }
        />
      </div>

      {/* Title only — no secondary text, no action */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Title only
        </p>
        <SectionHeader
          title="Account settings"
          showAction={false}
        />
      </div>

      {/* With info icon */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          With info icon
        </p>
        <SectionHeader
          title="Personal Memories"
          secondaryText="Private"
          showInfo
          action={
            <Button
              variant="secondary"
              size="s"
              showLeftIcon
              leftIconName="arrow-right"
            >
              Employment Agreement
            </Button>
          }
        />
      </div>
    </div>
  ),
};
