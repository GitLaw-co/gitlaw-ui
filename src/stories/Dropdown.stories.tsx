import type { Story, StoryDefault } from "@ladle/react";
import { Dropdown } from "../components/Dropdown";

export default {
  title: "Components / Overlays / Dropdown",
  meta: { layout: "centered" },
  decorators: [
    (Component) => (
      <div style={{ padding: "40px" }}>
        <Component />
      </div>
    ),
  ],
  argTypes: {
    showIcons: { control: { type: "boolean" } },
    heading: { control: { type: "text" } },
  },
} satisfies StoryDefault;

export const Default: Story = (args) => <Dropdown {...args} />;
Default.args = {
  showIcons: true,
  items: [
    { id: "1", label: "Primary", icon: "star" },
    { id: "2", label: "Restore", icon: "rotate-ccw" },
    { id: "3", label: "Duplicate", icon: "copy" },
    { id: "4", label: "Get link", icon: "link" },
  ],
};

export const AllVariants: Story = () => (
  <div className="flex gap-8 items-start">
    {/* With heading, selected, disabled */}
    <Dropdown
      showIcons
      heading="All Features"
      items={[
        { id: "1", label: "Selected item", secondaryLabel: "With secondary label", icon: "check-circle", selected: true },
        { id: "2", label: "Normal item", secondaryLabel: "Also has secondary", icon: "circle" },
        { id: "3", label: "Disabled item", icon: "x-circle", disabled: true },
        { id: "4", label: "Another option", icon: "star" },
      ]}
    />

    {/* Without icons */}
    <Dropdown
      showIcons={false}
      items={[
        { id: "1", label: "No icons variant" },
        { id: "2", label: "Plain text items" },
        { id: "3", label: "Minimal style" },
      ]}
    />

    {/* Long labels (adaptive width) */}
    <Dropdown
      showIcons
      items={[
        { id: "1", label: "This is a very long label that should expand the dropdown", icon: "info" },
        { id: "2", label: "Another lengthy option to demonstrate width behavior", icon: "info" },
        { id: "3", label: "Short", icon: "info" },
      ]}
    />
  </div>
);
