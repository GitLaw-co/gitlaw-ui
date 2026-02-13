import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { PageShell } from "../../components/PageShell";
import {
  PageNav,
  Section,
  Stack,
  Button,
  Icon,
  MenuItem,
  SectionHeader,
} from "../../components";
import { colors } from "../../specs";

const meta: Meta<typeof PageShell> = {
  title: "Pages/Integrations",
  component: PageShell,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof PageShell>;

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

const accounts = [
  { id: "1", name: "Alex Carter", type: "Personal Account", initials: "AC" },
  { id: "2", name: "Whisk", type: "Organization", initials: "WH" },
];

const settingsNavItems = [
  { id: "profile", label: "Profile" },
  { id: "account", label: "Account" },
  { id: "organizations", label: "Organizations" },
  { id: "contacts", label: "Contacts" },
  { id: "api-keys", label: "API keys" },
  { id: "memories", label: "Memories" },
  { id: "integrations", label: "Integrations" },
  { id: "billing", label: "Billing" },
];

const mobileNavItems = settingsNavItems.map((item) => ({
  id: item.id,
  label: item.label,
  selected: item.id === "integrations",
}));

/* ------------------------------------------------------------------ */
/*  Integration data                                                   */
/* ------------------------------------------------------------------ */

interface Integration {
  id: string;
  name: string;
  description: string;
  icon: string;
  connected: boolean;
}

const connectedIntegrations: Integration[] = [
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Sync documents and files from Google Drive.",
    icon: "folder-sync",
    connected: true,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Receive notifications and share documents via Slack.",
    icon: "message-square",
    connected: true,
  },
  {
    id: "github",
    name: "GitHub",
    description: "Version control and collaboration for legal documents.",
    icon: "git-branch",
    connected: true,
  },
];

const availableIntegrations: Integration[] = [
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Import and sync files from Dropbox.",
    icon: "cloud",
    connected: false,
  },
  {
    id: "notion",
    name: "Notion",
    description: "Sync notes and wikis from Notion.",
    icon: "notebook-text",
    connected: false,
  },
  {
    id: "microsoft-teams",
    name: "Microsoft Teams",
    description: "Collaborate and share documents via Teams.",
    icon: "users",
    connected: false,
  },
  {
    id: "docusign",
    name: "DocuSign",
    description: "Send documents for electronic signature.",
    icon: "file-signature",
    connected: false,
  },
  {
    id: "zapier",
    name: "Zapier",
    description: "Automate workflows across your favorite apps.",
    icon: "zap",
    connected: false,
  },
];

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

const IntegrationsPage: React.FC = () => {
  return (
    <PageShell
      title="Settings"
      initialSidebarCollapsed
      mobileNavItems={mobileNavItems}
      mobileNavActiveLabel="Integrations"
    >
      <div className="flex gap-4">
        <PageNav
          activeAccount={accounts[0]}
          accounts={accounts}
          items={settingsNavItems}
          activeItemId="integrations"
          className="hidden md:flex"
        />
        <div className="flex-1 max-w-[1040px]">
          {/* 16px between groups, 0px inside each group (header + card) */}
          <div className="flex flex-col gap-gitlaw-xl">
            {/* ── Connected integrations ── */}
            <div className="flex flex-col">
              <SectionHeader
                title="Connected"
                secondaryText="Integrations you have already connected."
              />
              <Section variant="card">
                <Stack gap="none">
                  {connectedIntegrations.map((integration) => (
                    <MenuItem
                      key={integration.id}
                      primaryText={integration.name}
                      primaryTextWeight="semibold"
                      showSecondaryText
                      secondaryText={integration.description}
                      showLeftElement
                      leftIcon={
                        <Icon
                          name={integration.icon}
                          className="size-5"
                          color={colors.iconPrimary}
                        />
                      }
                      width="fill"
                      showRButton
                      rButtonLabel="Disconnect"
                      rButtonIcon="x"
                    />
                  ))}
                </Stack>
              </Section>
            </div>

            {/* ── Available integrations ── */}
            <div className="flex flex-col">
              <SectionHeader
                title="Available integrations"
                secondaryText="Browse and connect new tools to your workspace."
                action={
                  <Button
                    variant="secondary"
                    size="s"
                    showLeftIcon
                    leftIconName="search"
                  >
                    Browse all
                  </Button>
                }
              />
              <Section variant="card">
                <Stack gap="none">
                  {availableIntegrations.map((integration) => (
                    <MenuItem
                      key={integration.id}
                      primaryText={integration.name}
                      primaryTextWeight="semibold"
                      showSecondaryText
                      secondaryText={integration.description}
                      showLeftElement
                      leftIcon={
                        <Icon
                          name={integration.icon}
                          className="size-5"
                          color={colors.iconSecondary}
                        />
                      }
                      width="fill"
                      showRButton
                      rButtonLabel="Connect"
                      rButtonIcon="plus"
                    />
                  ))}
                </Stack>
              </Section>
            </div>

            {/* ── API access ── */}
            <div className="flex flex-col">
              <SectionHeader
                title="API access"
                secondaryText="Manage API keys and webhooks for custom integrations."
                action={
                  <Button
                    variant="secondary"
                    size="s"
                    showLeftIcon
                    leftIconName="plus"
                  >
                    New API key
                  </Button>
                }
              />
              <Section variant="card">
                <Stack gap="none">
                  <MenuItem
                    primaryText="Production API key"
                    primaryTextWeight="semibold"
                    showSecondaryText
                    secondaryText="sk-prod-****-****-7f3a"
                    showLeftElement
                    leftIcon={
                      <Icon
                        name="key-round"
                        className="size-5"
                        color={colors.iconPrimary}
                      />
                    }
                    width="fill"
                    showRIcon1
                    rIcon1="chevron-right"
                  />
                  <MenuItem
                    primaryText="Development API key"
                    primaryTextWeight="semibold"
                    showSecondaryText
                    secondaryText="sk-dev-****-****-2b1c"
                    showLeftElement
                    leftIcon={
                      <Icon
                        name="key-round"
                        className="size-5"
                        color={colors.iconSecondary}
                      />
                    }
                    width="fill"
                    showRIcon1
                    rIcon1="chevron-right"
                  />
                  <MenuItem
                    primaryText="Webhooks"
                    primaryTextWeight="semibold"
                    showSecondaryText
                    secondaryText="2 active endpoints"
                    showLeftElement
                    leftIcon={
                      <Icon
                        name="webhook"
                        className="size-5"
                        color={colors.iconSecondary}
                      />
                    }
                    width="fill"
                    showRIcon1
                    rIcon1="chevron-right"
                  />
                </Stack>
              </Section>
            </div>
          </div>
        </div>
      </div>
    </PageShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Story                                                              */
/* ------------------------------------------------------------------ */

/**
 * Integrations page — Settings > Integrations.
 *
 * Sections use the new SectionHeader component (from Figma "Action Header"):
 * - **Connected:** Active integrations with disconnect option
 * - **Available integrations:** Browse and connect new tools
 * - **API access:** Manage API keys and webhooks
 */
export const Default: Story = {
  render: () => <IntegrationsPage />,
};
