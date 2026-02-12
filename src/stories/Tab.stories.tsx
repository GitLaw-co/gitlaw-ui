import type { Story, StoryDefault } from "@ladle/react";
import { Tab, Tabs } from "../components/Tab";

export default {
  title: "Components / Navigation / Tab",
  meta: { layout: "centered" },
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "selected", "selected-underlined"],
      description: "The current status of the tab",
    },
    label: {
      control: { type: "text" },
      description: "The label text",
    },
    showBadge: {
      control: { type: "boolean" },
      description: "Show badge",
    },
    badgeCount: {
      control: { type: "number" },
      description: "Badge count",
    },
  },
} satisfies StoryDefault;

// Default Tab
export const Default: Story = (args) => <Tab {...args} />;
Default.args = {
  label: "Activity",
  status: "default",
};

// All States
export const AllStates: Story = () => (
  <div className="flex items-center gap-4">
    <Tab label="Default" status="default" />
    <Tab label="Selected" status="selected" />
    <Tab label="Underlined" status="selected-underlined" />
    <Tab label="With Badge" status="selected-underlined" showBadge badgeCount={5} />
  </div>
);

// Tabs Component
export const TabsComponent: Story = () => (
  <Tabs
    tabs={[
      { label: "Activity", badgeCount: 7 },
      { label: "Documents", badgeCount: 3 },
      { label: "Comments" },
      { label: "Settings" },
    ]}
    selectedIndex={0}
    showBadges
  />
);
