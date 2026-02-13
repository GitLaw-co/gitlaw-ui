import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { PageShell } from "../../components/PageShell";
import {
  PageNav,
  Section,
  Stack,
  Button,
  MenuItem,
} from "../../components";

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
/*  Service data                                                       */
/* ------------------------------------------------------------------ */

interface Integration {
  id: string;
  name: string;
  description: string;
  logo: string;
  connectedAs?: string;
}

const cloudStorageServices: Integration[] = [
  {
    id: "google-drive",
    name: "Google Drive",
    description: "Import and sync documents from Google Drive",
    logo: "/services/integration-drive.svg",
    connectedAs: "alex.carter@gmail.com",
  },
  {
    id: "dropbox",
    name: "Dropbox",
    description: "Import and sync documents from Dropbox",
    logo: "/services/integration-dropbox.svg",
  },
  {
    id: "onedrive",
    name: "Microsoft OneDrive",
    description: "Import and sync documents from OneDrive",
    logo: "/services/integration-microsoft.svg",
  },
];

const authServices: Integration[] = [
  {
    id: "google",
    name: "Google",
    description: "Sign in with your Google account",
    logo: "/services/service-google.svg",
    connectedAs: "alex.carter@gmail.com",
  },
];

/* ------------------------------------------------------------------ */
/*  Service logo component                                             */
/* ------------------------------------------------------------------ */

const ServiceLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => (
  <div className="size-8 rounded-gitlaw-s bg-white border border-border flex items-center justify-center shrink-0">
    <img src={src} alt={alt} className="size-5" />
  </div>
);

/* ------------------------------------------------------------------ */
/*  Integrations page                                                  */
/* ------------------------------------------------------------------ */

const IntegrationsPage: React.FC = () => {
  const [connected, setConnected] = useState<Record<string, boolean>>({
    "google-drive": true,
    google: true,
  });

  const toggle = (id: string) =>
    setConnected((prev) => ({ ...prev, [id]: !prev[id] }));

  const connect = (id: string) =>
    setConnected((prev) => ({ ...prev, [id]: true }));

  const renderService = (service: Integration) => {
    const isConnected = !!connected[service.id];

    return (
      <MenuItem
        key={service.id}
        primaryText={service.name}
        secondaryText={
          isConnected && service.connectedAs
            ? `Connected as ${service.connectedAs}`
            : service.description
        }
        showSecondaryText
        showLeftElement
        leftIcon={<ServiceLogo src={service.logo} alt={service.name} />}
        width="fill"
        {...(isConnected
          ? {
              showRSwitch: true,
              rSwitchChecked: true,
              rSwitchSize: "m" as const,
              onRSwitchChange: () => toggle(service.id),
            }
          : {
              showRButton: true,
              rButtonLabel: "Connect",
              rButtonIcon: "plus",
            })}
        onClick={() => {
          if (!isConnected) connect(service.id);
        }}
      />
    );
  };

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
          <Stack gap="l">
            {/* ── Cloud Storage ── */}
            <Section title="Cloud Storage" variant="card">
              <Stack gap="none">
                {cloudStorageServices.map(renderService)}
              </Stack>
            </Section>

            {/* ── Sign-In Providers ── */}
            <Section title="Sign-In Providers" variant="card">
              <Stack gap="none">
                {authServices.map(renderService)}
              </Stack>
            </Section>

            {/* ── Danger zone ── */}
            <Section variant="card">
              <div className="p-6">
                <h2 className="text-lg font-bold text-foreground leading-[1.4]">
                  Disconnect all
                </h2>
                <p className="text-sm font-normal text-subtle leading-[1.4] mt-1">
                  Revoke access for all connected services. You can reconnect them at any time.
                </p>
                <div className="mt-4">
                  <Button
                    variant="destructive"
                    size="s"
                    showLeftIcon
                    leftIconName="unplug"
                    onClick={() => setConnected({})}
                  >
                    Disconnect all services
                  </Button>
                </div>
              </div>
            </Section>
          </Stack>
        </div>
      </div>
    </PageShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

/**
 * Integrations settings page — Settings → Integrations.
 *
 * Sections:
 * - **Cloud Storage:** Google Drive, Dropbox, OneDrive — connect/toggle
 * - **Sign-In Providers:** Google SSO — connect/toggle
 * - **Disconnect all:** Bulk disconnect button
 */
export const Default: Story = {
  render: () => <IntegrationsPage />,
};
