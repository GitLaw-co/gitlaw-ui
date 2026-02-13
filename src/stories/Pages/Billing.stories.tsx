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
  SettingsTableRow,
} from "../../components";
import { colors } from "../../specs";

const meta: Meta<typeof PageShell> = {
  title: "Pages/Billing",
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
  { id: "billing", label: "Billing" },
];

const mobileNavItems = settingsNavItems.map((item) => ({
  id: item.id,
  label: item.label,
  selected: item.id === "billing",
}));

/* ------------------------------------------------------------------ */
/*  Usage data                                                         */
/* ------------------------------------------------------------------ */

interface CreditRow {
  label: string;
  used: number;
  total: number;
}

const creditRows: CreditRow[] = [
  { label: "Remaining monthly credits", used: 0.5, total: 5.0 },
  { label: "Remaining referral credits", used: 0, total: 5.0 },
  { label: "Remaining bonus credits", used: 0, total: 10.0 },
];

const totalUsed = creditRows.reduce((sum, r) => sum + r.used, 0);
const totalCredits = creditRows.reduce((sum, r) => sum + r.total, 0);

/* ------------------------------------------------------------------ */
/*  Invoice data (Stripe-style)                                        */
/* ------------------------------------------------------------------ */

interface Invoice {
  id: string;
  date: string;
  amount: string;
  status: "paid" | "open" | "void";
  description: string;
}

const invoices: Invoice[] = [
  {
    id: "INV-2026-003",
    date: "Feb 1, 2026",
    amount: "$0.00",
    status: "paid",
    description: "Free plan — Feb 2026",
  },
  {
    id: "INV-2026-002",
    date: "Jan 1, 2026",
    amount: "$0.00",
    status: "paid",
    description: "Free plan — Jan 2026",
  },
  {
    id: "INV-2026-001",
    date: "Dec 1, 2025",
    amount: "$0.00",
    status: "paid",
    description: "Free plan — Dec 2025",
  },
];

/* ------------------------------------------------------------------ */
/*  Payment methods data (Stripe-style)                                */
/* ------------------------------------------------------------------ */

interface PaymentMethod {
  id: string;
  brand: string;
  last4: string;
  expiry: string;
  isDefault: boolean;
}

const paymentMethods: PaymentMethod[] = [
  {
    id: "pm_1",
    brand: "Visa",
    last4: "4242",
    expiry: "12/2028",
    isDefault: true,
  },
];

/* ------------------------------------------------------------------ */
/*  Helper components                                                  */
/* ------------------------------------------------------------------ */

const StatusBadge: React.FC<{ status: Invoice["status"] }> = ({ status }) => {
  const styles: Record<
    Invoice["status"],
    { bg: string; text: string; label: string }
  > = {
    paid: { bg: "bg-[#EBFAEE]", text: "text-[#1B7A2E]", label: "Paid" },
    open: { bg: "bg-[#FFF8E1]", text: "text-[#B8860B]", label: "Open" },
    void: { bg: "bg-gray-100", text: "text-gray-500", label: "Void" },
  };
  const s = styles[status];
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${s.bg} ${s.text}`}
    >
      {s.label}
    </span>
  );
};

const fmt = (n: number) => `$${n.toFixed(2)}`;

/* ------------------------------------------------------------------ */
/*  Billing page                                                       */
/* ------------------------------------------------------------------ */

const BillingPage: React.FC = () => {
  return (
    <PageShell
      title="Settings"
      initialSidebarCollapsed
      mobileNavItems={mobileNavItems}
      mobileNavActiveLabel="Billing"
    >
      <div className="flex gap-4">
        <PageNav
          activeAccount={accounts[0]}
          accounts={accounts}
          items={settingsNavItems}
          activeItemId="billing"
          className="hidden md:flex"
        />
        <div className="flex-1 max-w-[1040px]">
          {/* 16px between groups */}
          <Stack gap="l">
            {/* ── Plan ── */}
            <Section variant="card">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-lg font-bold text-foreground leading-[1.4]">
                      Free plan
                    </h2>
                    <div className="flex gap-8">
                      <div className="flex flex-col">
                        <span className="text-sm font-normal text-subtle leading-[1.4]">
                          Price/month
                        </span>
                        <span className="text-sm font-semibold text-foreground leading-[1.4]">
                          Free
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-normal text-subtle leading-[1.4]">
                          Price/month
                        </span>
                        <span className="text-sm font-semibold text-foreground leading-[1.4]">
                          Free
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-sm font-normal text-subtle leading-[1.4]">
                          Price/month
                        </span>
                        <span className="text-sm font-semibold text-foreground leading-[1.4]">
                          Free
                        </span>
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="primary"
                    size="m"
                    showLeftIcon
                    leftIconName="chevrons-right-left"
                  >
                    View Plans
                  </Button>
                </div>
              </div>
            </Section>

            {/* ── Usage ── */}
            <Section variant="card">
              <div className="flex items-center justify-between p-6 pb-2">
                <div>
                  <h2 className="text-lg font-bold text-foreground leading-[1.4]">
                    Usage
                  </h2>
                  <p className="text-sm font-normal text-subtle leading-[1.4]">
                    Your monthly credits reset in{" "}
                    <span className="font-semibold text-foreground">
                      15 days
                    </span>
                    .
                  </p>
                </div>
                <Button
                  variant="primary"
                  size="m"
                  showLeftIcon
                  leftIconName="chevrons-right-left"
                >
                  View Plans
                </Button>
              </div>

              {/* Settings Table rows */}
              <div className="px-6 pt-4 pb-8">
                <div className="flex flex-col">
                  {creditRows.map((row, i) => (
                    <SettingsTableRow
                      key={row.label}
                      index={i}
                      cells={[
                        <span>{row.label}</span>,
                        <span className="text-right">
                          {fmt(row.total - row.used)} / {fmt(row.total)}
                        </span>,
                      ]}
                    />
                  ))}
                  <SettingsTableRow
                    index={creditRows.length}
                    bold
                    cells={[
                      <span>Total remaining credits</span>,
                      <span className="text-right">
                        {fmt(totalCredits - totalUsed)} / {fmt(totalCredits)}
                      </span>,
                    ]}
                  />
                </div>
              </div>
            </Section>

            {/* ── Invoices (Stripe) ── */}
            <Section variant="card">
              <div className="flex items-center justify-between p-6 pb-2">
                <h2 className="text-lg font-bold text-foreground leading-[1.4]">
                  Invoices
                </h2>
                <Button variant="secondary" size="s">
                  View all in Stripe
                </Button>
              </div>

              <div className="px-6 pt-4 pb-8">
                <div className="flex flex-col">
                  {invoices.map((inv, i) => (
                    <SettingsTableRow
                      key={inv.id}
                      index={i}
                      cells={[
                        <span className="truncate">{inv.description}</span>,
                        <span className="flex items-center gap-2">
                          {inv.amount}
                          <Icon
                            name="info"
                            className="size-4"
                            color={colors.iconPrimary}
                          />
                        </span>,
                        <span>{inv.date}</span>,
                        <StatusBadge status={inv.status} />,
                      ]}
                      action={
                        <button
                          type="button"
                          className="p-1 hover:bg-secondary rounded transition-interactive"
                          title={`Download ${inv.id}`}
                        >
                          <Icon
                            name="arrow-down-to-line"
                            className="size-4"
                            color={colors.iconSecondary}
                          />
                        </button>
                      }
                    />
                  ))}
                </div>

                {invoices.length === 0 && (
                  <div className="py-8 text-center">
                    <p className="text-sm text-subtle">No invoices yet.</p>
                  </div>
                )}
              </div>
            </Section>

            {/* ── Payment Methods (Stripe) ── */}
            <Section variant="card">
              <div className="flex items-center justify-between p-6 pb-2">
                <h2 className="text-lg font-bold text-foreground leading-[1.4]">
                  Payment methods
                </h2>
                <Button
                  variant="secondary"
                  size="s"
                  showLeftIcon
                  leftIconName="plus"
                >
                  Add method
                </Button>
              </div>

              <div className="px-6 pt-4 pb-8">
                <div className="flex flex-col">
                  {paymentMethods.map((pm, i) => (
                    <SettingsTableRow
                      key={pm.id}
                      index={i}
                      cells={[
                        <span>
                          {pm.brand} •••• {pm.last4}
                          {pm.isDefault && (
                            <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-primary/10 text-primary">
                              Default
                            </span>
                          )}
                        </span>,
                        <span>Expires {pm.expiry}</span>,
                      ]}
                      action={
                        <div className="flex items-center gap-1">
                          <button
                            type="button"
                            className="p-1 hover:bg-secondary rounded transition-interactive"
                            title={`Edit ${pm.brand} ${pm.last4}`}
                          >
                            <Icon
                              name="pencil"
                              className="size-4"
                              color={colors.iconSecondary}
                            />
                          </button>
                          <button
                            type="button"
                            className="p-1 hover:bg-destructive/10 rounded transition-interactive"
                            title={`Remove ${pm.brand} ${pm.last4}`}
                          >
                            <Icon
                              name="trash-2"
                              className="size-4"
                              color={colors.iconSecondary}
                            />
                          </button>
                        </div>
                      }
                    />
                  ))}
                </div>

                {paymentMethods.length === 0 && (
                  <div className="py-8 text-center">
                    <Icon
                      name="credit-card"
                      className="size-8 mx-auto mb-2"
                      color={colors.iconDisabled}
                    />
                    <p className="text-sm text-subtle">
                      No payment methods added.
                    </p>
                    <p className="text-xs text-subtle mt-1">
                      Add a card to upgrade your plan.
                    </p>
                  </div>
                )}
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
 * Billing page prototype — Settings → Billing.
 *
 * Sections:
 * - **Plan:** Current plan info with upgrade CTA
 * - **Usage:** Monthly credit breakdown with progress bars
 * - **Invoices:** Stripe-powered invoice history with download
 * - **Payment methods:** Stripe-stored cards with edit/remove
 */
export const Default: Story = {
  render: () => <BillingPage />,
};
