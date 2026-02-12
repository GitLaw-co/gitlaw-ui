import type { Story, StoryDefault } from "@ladle/react";
import { Stack } from "../components/Stack";
import { MenuItem } from "../components";

export default {
  title: "Layout / Stack",
  meta: { layout: "padded" },
  argTypes: {
    gap: {
      control: { type: "select" },
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    direction: {
      control: { type: "select" },
      options: ["vertical", "horizontal"],
    },
    padding: {
      control: { type: "select" },
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    dividers: { control: { type: "boolean" } },
  },
} satisfies StoryDefault;

const DemoBox = ({ label }: { label: string }) => (
  <div className="px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground">
    {label}
  </div>
);

/**
 * Default vertical stack with small (8px) gap -- matches settings row spacing.
 */
export const Default: Story = (args) => (
  <div className="max-w-[600px]">
    <Stack {...args}>
      <DemoBox label="First item" />
      <DemoBox label="Second item" />
      <DemoBox label="Third item" />
    </Stack>
  </div>
);
Default.args = {
  gap: "s",
  direction: "vertical",
};

/**
 * All layout variants -- vertical, horizontal, with dividers, and real-world settings rows.
 */
export const AllVariants: Story = () => (
  <div className="flex flex-col gap-8 max-w-[1040px]">
    {/* Vertical with dividers */}
    <div>
      <p className="text-xs font-semibold text-secondary mb-2 uppercase">
        With dividers
      </p>
      <div className="max-w-[600px]">
        <Stack gap="s" dividers>
          <DemoBox label="Profile" />
          <DemoBox label="Account" />
          <DemoBox label="Billing" />
        </Stack>
      </div>
    </div>

    {/* Horizontal */}
    <div>
      <p className="text-xs font-semibold text-secondary mb-2 uppercase">
        Horizontal
      </p>
      <Stack gap="m" direction="horizontal">
        <DemoBox label="A" />
        <DemoBox label="B" />
        <DemoBox label="C" />
      </Stack>
    </div>

    {/* Settings rows (real-world usage) */}
    <div>
      <p className="text-xs font-semibold text-secondary mb-2 uppercase">
        Settings rows
      </p>
      <Stack gap="none">
        <MenuItem
          primaryText="Username"
          showSecondaryText
          secondaryText="alexcarter"
          showLeftElement={false}
          width="fill"
          showRIcon1
          rIcon1="chevron-right"
        />
        <MenuItem
          primaryText="Full name"
          showSecondaryText
          secondaryText="Alex Carter"
          showLeftElement={false}
          width="fill"
          showRIcon1
          rIcon1="chevron-right"
        />
        <MenuItem
          primaryText="Dark mode"
          showLeftElement={false}
          width="fill"
          showRSwitch
          rSwitchChecked={false}
        />
      </Stack>
    </div>
  </div>
);

/**
 * All gap sizes for comparison.
 */
export const AllGapSizes: Story = () => (
  <div className="flex gap-8">
    {(["none", "xs", "s", "m", "l", "xl"] as const).map((gap) => (
      <div key={gap}>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          {gap}
        </p>
        <Stack gap={gap}>
          <DemoBox label="A" />
          <DemoBox label="B" />
          <DemoBox label="C" />
        </Stack>
      </div>
    ))}
  </div>
);
