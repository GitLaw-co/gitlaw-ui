import type { Meta, StoryObj } from "@storybook/react";
import { Section } from "../components/Section";
import { Stack, MenuItem, Button } from "../components";

const meta: Meta<typeof Section> = {
  title: "Layout/Section",
  component: Section,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    variant: { control: "select", options: ["default", "card"] },
    showBorder: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

/**
 * Section with title and settings rows.
 */
export const Default: Story = {
  render: (args) => (
    <div className="max-w-[1040px]">
      <Section {...args}>
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
            primaryText="Email"
            showSecondaryText
            secondaryText="alex@example.com"
            showLeftElement={false}
            width="fill"
            showRIcon1
            rIcon1="chevron-right"
          />
        </Stack>
      </Section>
    </div>
  ),
  args: {
    title: "Account details",
  },
};

/**
 * All visual variants — default with border, with action button, card variant.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8 max-w-[1040px]">
      {/* Default with border */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          With border
        </p>
        <Stack gap="l">
          <Section title="Preferences">
            <Stack gap="none">
              <MenuItem
                primaryText="Dark mode"
                showLeftElement={false}
                width="fill"
                showRSwitch
                rSwitchChecked={false}
              />
              <MenuItem
                primaryText="Notifications"
                showSecondaryText
                secondaryText="Enabled"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
            </Stack>
          </Section>
          <Section title="Danger zone" showBorder>
            <Stack gap="none">
              <MenuItem
                primaryText="Delete your Account"
                showSecondaryText
                secondaryText="Once deleted, it cannot be recovered."
                showLeftElement={false}
                width="fill"
                showRButton
                rButtonLabel="Delete Account"
              />
            </Stack>
          </Section>
        </Stack>
      </div>

      {/* With action button */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          With action button
        </p>
        <Section
          title="Team members"
          action={<Button variant="outline" size="s">Invite</Button>}
        >
          <Stack gap="none">
            <MenuItem
              primaryText="John Allen"
              showSecondaryText
              secondaryText="jallen@domain.com"
              showLeftElement
              leftElement="avatar"
              avatarInitials="JA"
              width="fill"
            />
            <MenuItem
              primaryText="Michael Cameron"
              showSecondaryText
              secondaryText="cameron@mailservice.com"
              showLeftElement
              leftElement="avatar"
              avatarInitials="MC"
              width="fill"
            />
          </Stack>
        </Section>
      </div>

      {/* Card variant */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Card variant
        </p>
        <div className="bg-page-background p-6 rounded-lg">
          <Section variant="card">
            <Stack gap="none">
              <MenuItem
                primaryText="Profile picture"
                showLeftElement={false}
                width="fill"
                showRLargeAvatar
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
    </div>
  ),
};

/**
 * Real-world layout — multiple stacked sections (default + card variants).
 */
export const AllLayouts: Story = {
  render: () => (
    <div className="flex flex-col gap-12 max-w-[1040px]">
      {/* Default sections stacked */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Multiple default sections
        </p>
        <Stack gap="l">
          <Section title="General">
            <Stack gap="none">
              <MenuItem
                primaryText="Organization name"
                showSecondaryText
                secondaryText="Whisk"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="Organization ID"
                showSecondaryText
                secondaryText="whisk"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
            </Stack>
          </Section>
          <Section title="Legal details" showBorder>
            <Stack gap="none">
              <MenuItem
                primaryText="Registered name"
                showSecondaryText
                secondaryText="Foodient Ltd."
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
              <MenuItem
                primaryText="Jurisdiction"
                showSecondaryText
                secondaryText="England and Wales"
                showLeftElement={false}
                width="fill"
                showRIcon1
                rIcon1="chevron-right"
              />
            </Stack>
          </Section>
          <Section title="Danger zone" showBorder>
            <MenuItem
              primaryText="Delete organization"
              showSecondaryText
              secondaryText="Once deleted, it will be gone forever. Please be certain."
              showLeftElement={false}
              width="fill"
              showRButton
              rButtonLabel="Delete organization"
            />
          </Section>
        </Stack>
      </div>

      {/* Card sections stacked */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Multiple card sections
        </p>
        <div className="bg-page-background p-6 rounded-lg">
          <Stack gap="l">
            <Section variant="card">
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
              </Stack>
            </Section>
            <Section variant="card">
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
                  primaryText="An innovative platform designed to simplify legal processes..."
                  showLeftElement={false}
                  width="fill"
                />
              </Stack>
            </Section>
            <Section variant="card">
              <MenuItem
                primaryText="Add new Organization"
                showLeftElement
                leftIcon={<span className="text-secondary">+</span>}
                width="fill"
              />
            </Section>
          </Stack>
        </div>
      </div>
    </div>
  ),
};
