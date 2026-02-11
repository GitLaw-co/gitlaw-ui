import { useState } from "react";
import type { Story, StoryDefault } from "@ladle/react";
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

export default {
  title: "Components / Navigation / PageNav",
  meta: { layout: "centered" },
} satisfies StoryDefault;

// ─── Stories ────────────────────────────────────────────────────────────────

/** Single controllable story with args */
export const Default: Story = (args) => <PageNav {...args} />;
Default.args = {
  activeAccount: personalAccount,
  accounts: allAccounts,
  items: personalItems,
  activeItemId: "profile",
};

/** Showcase showing both contexts side by side */
export const AllVariants: Story = () => (
  <div className="flex gap-12">
    <div>
      <p className="mb-4 text-sm font-medium text-text-secondary">Personal Account</p>
      <PageNav
        activeAccount={personalAccount}
        accounts={allAccounts}
        items={personalItems}
        activeItemId="profile"
      />
    </div>
    <div>
      <p className="mb-4 text-sm font-medium text-text-secondary">Organization Account</p>
      <PageNav
        activeAccount={orgWhisk}
        accounts={allAccounts}
        items={orgItems}
        activeItemId="organization"
      />
    </div>
  </div>
);

/**
 * Fully interactive PageNav demonstrating:
 * - Click the context switcher to open the account dropdown
 * - Switch between Personal and Organization accounts
 * - Nav items update to match the selected context
 * - Click nav items to change active state
 */
export const Interactive: Story = () => {
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
};
