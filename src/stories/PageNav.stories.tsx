import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PageNav } from "../components/PageNav";
import type { PageNavAccount, PageNavItem } from "../components/PageNav";

// ─── Sample data ────────────────────────────────────────────────────────────

const personalAccount: PageNavAccount = {
  id: "personal",
  name: "Alex Carter",
  type: "Personal Account",
  initials: "AC",
};

const orgWhisk: PageNavAccount = {
  id: "whisk",
  name: "Whisk",
  type: "Organization",
  avatar: "https://placehold.co/32x32/2cb67d/ffffff?text=W",
};

const orgAcme: PageNavAccount = {
  id: "acme",
  name: "Acme Corp",
  type: "Organization",
  avatar: "https://placehold.co/32x32/6366f1/ffffff?text=A",
};

const orgNova: PageNavAccount = {
  id: "nova",
  name: "Nova Labs",
  type: "Organization",
  avatar: "https://placehold.co/32x32/f59e0b/ffffff?text=N",
};

const allAccounts: PageNavAccount[] = [personalAccount, orgWhisk, orgAcme, orgNova];

const personalItems: PageNavItem[] = [
  { id: "profile", label: "Profile" },
  { id: "account", label: "Account" },
  { id: "organizations", label: "Organizations" },
  { id: "contacts", label: "Contacts" },
  { id: "api-keys", label: "API keys" },
  { id: "memories", label: "Memories" },
  { id: "billing", label: "Billing" },
];

const orgItems: PageNavItem[] = [
  { id: "organization", label: "Organization" },
  { id: "people", label: "People" },
  { id: "contacts", label: "Contacts" },
  { id: "memories", label: "Memories" },
  { id: "billing", label: "Billing" },
];

// ─── Meta ───────────────────────────────────────────────────────────────────

const meta: Meta<typeof PageNav> = {
  title: "Components/PageNav",
  component: PageNav,
  parameters: {
    layout: "centered",
    backgrounds: {
      default: "page",
      values: [{ name: "page", value: "#F7F6FF" }],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageNav>;

// ─── Static stories ─────────────────────────────────────────────────────────

/** Personal account with Profile selected */
export const PersonalProfile: Story = {
  args: {
    activeAccount: personalAccount,
    accounts: allAccounts,
    items: personalItems,
    activeItemId: "profile",
  },
};

/** Personal account with Billing selected */
export const PersonalBilling: Story = {
  args: {
    activeAccount: personalAccount,
    accounts: allAccounts,
    items: personalItems,
    activeItemId: "billing",
  },
};

/** Organization account with Organization selected */
export const OrganizationDefault: Story = {
  args: {
    activeAccount: orgWhisk,
    accounts: allAccounts,
    items: orgItems,
    activeItemId: "organization",
  },
};

/** Organization account with People selected */
export const OrganizationPeople: Story = {
  args: {
    activeAccount: orgWhisk,
    accounts: allAccounts,
    items: orgItems,
    activeItemId: "people",
  },
};

// ─── Interactive story with context switching ───────────────────────────────

/**
 * Fully interactive PageNav demonstrating:
 * - Click the context switcher to open the account dropdown
 * - Switch between Personal and Organization accounts
 * - Nav items update to match the selected context
 * - Click nav items to change active state
 */
export const Interactive: Story = {
  render: () => {
    /* eslint-disable react-hooks/rules-of-hooks */
    const [activeAccount, setActiveAccount] = useState<PageNavAccount>(personalAccount);
    const [activeItemId, setActiveItemId] = useState("profile");
    /* eslint-enable react-hooks/rules-of-hooks */

    const isPersonal = activeAccount.id === "personal";
    const currentItems = isPersonal ? personalItems : orgItems;

    const handleAccountSwitch = (account: PageNavAccount) => {
      setActiveAccount(account);
      // Reset to first item when switching context
      setActiveItemId(account.id === "personal" ? "profile" : "organization");
    };

    return (
      <div className="p-8">
        <PageNav
          activeAccount={activeAccount}
          accounts={allAccounts}
          items={currentItems}
          activeItemId={activeItemId}
          onItemClick={(item) => setActiveItemId(item.id)}
          onAccountSwitch={handleAccountSwitch}
        />
      </div>
    );
  },
};
