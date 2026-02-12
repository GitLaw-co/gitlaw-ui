import type { Story, StoryDefault } from "@ladle/react";
import { MenuItem } from "../components/MenuItem";

export default {
  title: "Components / Actions / MenuItem",
  meta: { layout: "centered" },
  argTypes: {
    leftElement: {
      control: { type: "select" },
      options: ["icon", "avatar", "clause", "select", "mini-users"],
    },
    showLeftElement: { control: { type: "boolean" } },
    showSecondaryText: { control: { type: "boolean" } },
    showBackground: { control: { type: "boolean" } },
    showStroke: { control: { type: "boolean" } },
    showTick: { control: { type: "boolean" } },
    primaryText: { control: { type: "text" } },
    secondaryText: { control: { type: "text" } },
    selected: { control: { type: "boolean" } },
    showRLabel: { control: { type: "boolean" } },
    rLabel: { control: { type: "text" } },
    showRIcon1: { control: { type: "boolean" } },
    rIcon1: { control: { type: "text" } },
    showRIcon2: { control: { type: "boolean" } },
    rIcon2: { control: { type: "text" } },
    showRButton: { control: { type: "boolean" } },
    rButtonLabel: { control: { type: "text" } },
    showRButtonSet: { control: { type: "boolean" } },
    showRBadge: { control: { type: "boolean" } },
    rBadgeCount: { control: { type: "number" } },
    showRSwitch: { control: { type: "boolean" } },
    rSwitchChecked: { control: { type: "boolean" } },
    showRLargeAvatar: { control: { type: "boolean" } },
    showRMediumAvatar: { control: { type: "boolean" } },
    showRTags: { control: { type: "boolean" } },
    rTagLabel: { control: { type: "text" } },
  },
} satisfies StoryDefault;

export const Default: Story = (args) => <MenuItem {...args} />;
Default.args = {
  primaryText: "Primary",
  leftElement: "icon",
  showLeftElement: true,
};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-6 w-[360px]">
    {/* Left element types */}
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Left elements</p>
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>

    {/* Right element types */}
    <div className="flex flex-col gap-1">
      <p className="text-xs font-semibold text-text-secondary uppercase tracking-wider mb-1">Right elements</p>
      <MenuItem primaryText="With label" leftElement="avatar" showLeftElement showRLabel rLabel="Label" showStroke />
      <MenuItem primaryText="With icon" leftElement="avatar" showLeftElement showRIcon1 rIcon1="check" showStroke />
      <MenuItem primaryText="With two icons" leftElement="avatar" showLeftElement showRIcon1 showRIcon2 rIcon1="edit" rIcon2="trash" showStroke />
      <MenuItem primaryText="With button" leftElement="avatar" showLeftElement showRButton rButtonLabel="Action" showStroke />
      <MenuItem primaryText="With button set" leftElement="avatar" showLeftElement showRButtonSet showStroke />
      <MenuItem primaryText="With badge" leftElement="avatar" showLeftElement showRBadge rBadgeCount={7} showStroke />
      <MenuItem primaryText="With switch" leftElement="avatar" showLeftElement showRSwitch rSwitchChecked showStroke />
      <MenuItem primaryText="With large avatar" leftElement="avatar" showLeftElement showRLargeAvatar showStroke />
      <MenuItem primaryText="With tags" leftElement="avatar" showLeftElement showRTags rTagLabel="Label" showStroke />
    </div>
  </div>
);
