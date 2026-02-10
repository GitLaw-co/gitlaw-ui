import type { Meta, StoryObj } from '@storybook/react';
import { MenuItem } from '../components/MenuItem';

const meta: Meta<typeof MenuItem> = {
  title: 'Components/Actions/MenuItem',
  component: MenuItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    leftElement: {
      control: 'select',
      options: ['icon', 'avatar', 'clause', 'select', 'mini-users'],
    },
    showLeftElement: { control: 'boolean' },
    showSecondaryText: { control: 'boolean' },
    showBackground: { control: 'boolean' },
    showStroke: { control: 'boolean' },
    showTick: { control: 'boolean' },
    primaryText: { control: 'text' },
    secondaryText: { control: 'text' },
    selected: { control: 'boolean' },
    showRLabel: { control: 'boolean' },
    rLabel: { control: 'text' },
    showRIcon1: { control: 'boolean' },
    rIcon1: { control: 'text' },
    showRIcon2: { control: 'boolean' },
    rIcon2: { control: 'text' },
    showRButton: { control: 'boolean' },
    rButtonLabel: { control: 'text' },
    showRButtonSet: { control: 'boolean' },
    showRBadge: { control: 'boolean' },
    rBadgeCount: { control: 'number' },
    showRSwitch: { control: 'boolean' },
    rSwitchChecked: { control: 'boolean' },
    showRLargeAvatar: { control: 'boolean' },
    showRMediumAvatar: { control: 'boolean' },
    showRTags: { control: 'boolean' },
    rTagLabel: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true,
  },
};

export const AllVariants: Story = {
  render: () => (
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
  ),
};
