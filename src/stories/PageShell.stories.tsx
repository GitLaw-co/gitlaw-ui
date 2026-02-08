import type { Meta, StoryObj } from "@storybook/react";
import { PageShell } from "../components/PageShell";

const meta: Meta<typeof PageShell> = {
  title: "Layout/PageShell",
  component: PageShell,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
  argTypes: {
    title: { control: "text" },
    isSignedIn: { control: "boolean" },
    initialSidebarCollapsed: { control: "boolean" },
    showHeaderStroke: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof PageShell>;

/**
 * Default — collapsed sidebar with basic content.
 */
export const Default: Story = {
  render: (args) => (
    <PageShell {...args}>
      <div className="max-w-[800px]">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Page content goes here
        </h2>
        <p className="text-sm text-secondary">
          PageShell provides Sidebar + TopHeader + a scrollable content area
          with standard padding (84px horizontal, 32px top, 64px bottom).
        </p>
      </div>
    </PageShell>
  ),
  args: {
    title: "Dashboard",
    initialSidebarCollapsed: true,
  },
};

/**
 * With expanded sidebar showing full navigation.
 */
export const ExpandedSidebar: Story = {
  render: (args) => (
    <PageShell {...args}>
      <div className="max-w-[800px]">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          With expanded sidebar
        </h2>
        <p className="text-sm text-secondary">
          The sidebar is expanded by default, showing the full navigation.
        </p>
      </div>
    </PageShell>
  ),
  args: {
    title: "Settings",
    initialSidebarCollapsed: false,
  },
};
