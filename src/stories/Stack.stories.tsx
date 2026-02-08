import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "../components/Stack";
import { MenuItem } from "../components";

const meta: Meta<typeof Stack> = {
  title: "Layout/Stack",
  component: Stack,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    gap: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    direction: {
      control: "select",
      options: ["vertical", "horizontal"],
    },
    padding: {
      control: "select",
      options: ["none", "xs", "s", "m", "l", "xl"],
    },
    dividers: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

const DemoBox = ({ label }: { label: string }) => (
  <div className="px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground">
    {label}
  </div>
);

/**
 * Default vertical stack with small (8px) gap — matches settings row spacing.
 */
export const Default: Story = {
  render: (args) => (
    <div className="max-w-[600px]">
      <Stack {...args}>
        <DemoBox label="First item" />
        <DemoBox label="Second item" />
        <DemoBox label="Third item" />
      </Stack>
    </div>
  ),
  args: {
    gap: "s",
    direction: "vertical",
  },
};

/**
 * Stack with dividers between items.
 */
export const WithDividers: Story = {
  render: (args) => (
    <div className="max-w-[600px]">
      <Stack {...args}>
        <DemoBox label="Profile" />
        <DemoBox label="Account" />
        <DemoBox label="Billing" />
      </Stack>
    </div>
  ),
  args: {
    gap: "s",
    dividers: true,
    direction: "vertical",
  },
};

/**
 * Horizontal stack — useful for card grids or button groups.
 */
export const Horizontal: Story = {
  render: (args) => (
    <Stack {...args}>
      <DemoBox label="A" />
      <DemoBox label="B" />
      <DemoBox label="C" />
    </Stack>
  ),
  args: {
    gap: "m",
    direction: "horizontal",
  },
};

/**
 * Settings rows — real-world usage with MenuItems.
 */
export const SettingsRows: Story = {
  render: () => (
    <div className="max-w-[1040px]">
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
          primaryText="Email"
          showSecondaryText
          secondaryText="alex@example.com"
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
  ),
};

/**
 * All gap sizes for comparison.
 */
export const GapSizes: Story = {
  render: () => (
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
  ),
};
