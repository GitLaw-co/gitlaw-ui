import type { Story, StoryDefault } from "@ladle/react";
import { PageShell } from "../components/PageShell";

export default {
  title: "Layout / PageShell",
  meta: { layout: "fullscreen" },
  argTypes: {
    title: { control: { type: "text" } },
    isSignedIn: { control: { type: "boolean" } },
    initialSidebarCollapsed: { control: { type: "boolean" } },
    showHeaderStroke: { control: { type: "boolean" } },
  },
} satisfies StoryDefault;

/**
 * Default — collapsed sidebar with basic content.
 */
export const Default: Story = (args) => (
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
);
Default.args = {
  title: "Dashboard",
  initialSidebarCollapsed: true,
};

/**
 * With expanded sidebar showing full navigation.
 */
export const ExpandedSidebar: Story = (args) => (
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
);
ExpandedSidebar.args = {
  title: "Settings",
  initialSidebarCollapsed: false,
};
