import type { Meta, StoryObj } from "@storybook/react";
import { PageShell } from "../components/PageShell";
import { PageNav, MenuItem, Stack, Section, Input, Icon } from "../components";
import { colors } from "../specs";

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

const settingsNavItems = [
  { id: "profile", label: "Profile" },
  { id: "account", label: "Account" },
  { id: "organizations", label: "Organizations" },
  { id: "contacts", label: "Contacts" },
  { id: "api-keys", label: "API keys" },
  { id: "memories", label: "Memories" },
  { id: "billing", label: "Billing" },
];

const accounts = [
  { id: "1", name: "Alex Carter", type: "Personal Account", initials: "AC" },
  { id: "2", name: "Whisk", type: "Organization", initials: "WH" },
];

/**
 * Settings Profile page — card variant wrapping list items.
 * Matches the Figma pattern: white bg, 8px padding, 8px rounded.
 */
export const SettingsProfile: Story = {
  render: (args) => (
    <PageShell {...args}>
      <div className="flex gap-4">
        <PageNav
          activeAccount={accounts[0]}
          accounts={accounts}
          items={settingsNavItems}
          activeItemId="profile"
        />
        <div className="flex-1 max-w-[1040px]">
          <Section variant="card">
            <Stack gap="none">
              <MenuItem
                primaryText="Profile picture"
                showLeftElement={false}
                width="fill"
                showRLargeAvatar
              />
              <MenuItem
                primaryText="Public profile"
                showSecondaryText
                secondaryText="user/alexcarter"
                showLeftElement={false}
                width="fill"
                showRButton
                rButtonLabel="View"
              />
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
                primaryText="Bio"
                showSecondaryText
                secondaryText="Alex is the founder of TechWave, a groundbreaking startup..."
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="URL"
                showSecondaryText
                secondaryText="www.abc.com"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="Location"
                showSecondaryText
                secondaryText="Dayton, OH"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="User visibility"
                showSecondaryText
                secondaryText="Public"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="Hide email address"
                showLeftElement={false}
                width="fill"
                showRSwitch
                rSwitchChecked={true}
              />
            </Stack>
          </Section>
        </div>
      </div>
    </PageShell>
  ),
  args: {
    title: "Settings",
    initialSidebarCollapsed: true,
  },
};

/**
 * Organizations page — search + multiple card groups.
 * Matches the Figma Organizations section pattern.
 */
export const SettingsOrganizations: Story = {
  render: (args) => (
    <PageShell {...args}>
      <div className="flex gap-4">
        <PageNav
          activeAccount={accounts[0]}
          accounts={accounts}
          items={settingsNavItems}
          activeItemId="organizations"
        />
        <div className="flex-1 max-w-[1040px]">
          <Stack gap="l">
            <Input
              placeholder="Search organizations"
              showLeftIcon
              leftIcon={
                <Icon
                  name="search"
                  className="size-5"
                  color={colors.iconSecondary}
                />
              }
            />
            <Section
              variant="card"
              onClick={() => alert("Navigate to Whisk org settings")}
            >
              <Stack gap="none">
                <MenuItem
                  primaryText="Whisk"
                  showLeftElement
                  leftElement="avatar"
                  avatarInitials="WH"
                  width="fill"
                  showRIcon1
                  rIcon1="ellipsis"
                />
                <MenuItem
                  primaryText="The Whisk Product Team is dedicated to creating a seamless app experience..."
                  showLeftElement={false}
                  width="fill"
                />
                <div className="grid grid-cols-2 gap-0 px-3">
                  <MenuItem
                    primaryText="Registered name"
                    showSecondaryText
                    secondaryText="Foodient Ltd."
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Registered address"
                    showSecondaryText
                    secondaryText="483 Green Lanes, London, England, N13 4BS"
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Jurisdiction"
                    showSecondaryText
                    secondaryText="England and Wales"
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Entity type"
                    showSecondaryText
                    secondaryText="Limited Company"
                    showLeftElement={false}
                    width="fill"
                  />
                </div>
              </Stack>
            </Section>
            <Section
              variant="card"
              onClick={() => alert("Navigate to GitLaw org settings")}
            >
              <Stack gap="none">
                <MenuItem
                  primaryText="GitLaw"
                  showLeftElement
                  leftElement="avatar"
                  avatarInitials="GL"
                  width="fill"
                  showRIcon1
                  rIcon1="ellipsis"
                />
                <MenuItem
                  primaryText="GitLaw is an innovative platform designed to simplify legal processes..."
                  showLeftElement={false}
                  width="fill"
                />
                <div className="grid grid-cols-2 gap-0 px-3">
                  <MenuItem
                    primaryText="Registered name"
                    showSecondaryText
                    secondaryText="GitLaw LLC"
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Registered address"
                    showSecondaryText
                    secondaryText="San Francisco, California"
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Jurisdiction"
                    showSecondaryText
                    secondaryText="The State of California"
                    showLeftElement={false}
                    width="fill"
                  />
                  <MenuItem
                    primaryText="Entity type"
                    showSecondaryText
                    secondaryText="Limited Liability Company"
                    showLeftElement={false}
                    width="fill"
                  />
                </div>
              </Stack>
            </Section>
            <Section variant="card">
              <MenuItem
                primaryText="Add new Organization"
                showLeftElement
                leftIcon={
                  <Icon
                    name="circle-plus"
                    className="size-5"
                    color={colors.iconSecondary}
                  />
                }
                width="fill"
              />
            </Section>
          </Stack>
        </div>
      </div>
    </PageShell>
  ),
  args: {
    title: "Settings",
    initialSidebarCollapsed: true,
  },
};

/**
 * Minimal shell with just a title and basic content.
 */
export const MinimalShell: Story = {
  render: (args) => (
    <PageShell {...args}>
      <div className="max-w-[800px]">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Welcome to GitLaw
        </h2>
        <p className="text-sm text-secondary">
          This is a minimal PageShell with just a title and content area.
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
 * Shell with expanded sidebar.
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
