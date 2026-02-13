import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { PageShell } from "../../components/PageShell";
import {
  SectionHeader,
  Section,
  Stack,
  Button,
  Icon,
  MenuItem,
  Tag,
  Badge,
} from "../../components";
import { colors } from "../../specs";

const meta: Meta<typeof PageShell> = {
  title: "Pages/ScanReview",
  component: PageShell,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof PageShell>;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type RowStatus = "pending" | "accepted" | "declined";

interface ReviewRow {
  id: string;
  primary: string;
  secondary: string;
  icon?: string;
  avatarInitials?: string;
  leftElement?: "icon" | "avatar";
  tag?: { label: string; type: "red" | "orange" | "green" };
}

/* ------------------------------------------------------------------ */
/*  Scan data                                                          */
/* ------------------------------------------------------------------ */

const companyDetails: ReviewRow[] = [
  {
    id: "company-name",
    primary: "Company name",
    secondary: "Acme Holdings Ltd.",
    icon: "building-2",
  },
  {
    id: "reg-number",
    primary: "Registration number",
    secondary: "12345678",
    icon: "hash",
  },
  {
    id: "address",
    primary: "Business address",
    secondary: "483 Green Lanes, London, England, N13 4BS",
    icon: "map-pin",
  },
  {
    id: "jurisdiction",
    primary: "Jurisdiction",
    secondary: "England and Wales",
    icon: "landmark",
  },
];

const contacts: ReviewRow[] = [
  {
    id: "contact-1",
    primary: "Sarah Chen",
    secondary: "Company · Acme Holdings Ltd.",
    avatarInitials: "SC",
    leftElement: "avatar",
  },
  {
    id: "contact-2",
    primary: "James Wright",
    secondary: "Individual · External Counsel",
    avatarInitials: "JW",
    leftElement: "avatar",
  },
  {
    id: "contact-3",
    primary: "Maria Rodriguez",
    secondary: "Company · TechCorp Inc.",
    avatarInitials: "MR",
    leftElement: "avatar",
  },
  {
    id: "contact-4",
    primary: "David Kim",
    secondary: "Individual · Board Member",
    avatarInitials: "DK",
    leftElement: "avatar",
  },
  {
    id: "contact-5",
    primary: "Lisa Patel",
    secondary: "Company · Venture Partners",
    avatarInitials: "LP",
    leftElement: "avatar",
  },
];

const contractDates: ReviewRow[] = [
  {
    id: "date-1",
    primary: "Acme Holdings — Service Agreement",
    secondary: "Expires 15 Mar 2025",
    icon: "calendar",
    tag: { label: "Overdue", type: "red" },
  },
  {
    id: "date-2",
    primary: "TechCorp — NDA",
    secondary: "Expires 28 Jun 2025",
    icon: "calendar",
  },
  {
    id: "date-3",
    primary: "Venture Partners — Investment Agreement",
    secondary: "Expires 01 Sep 2025",
    icon: "calendar",
    tag: { label: "Due soon", type: "orange" },
  },
  {
    id: "date-4",
    primary: "Board Advisory — Consulting Agreement",
    secondary: "Expires 12 Dec 2025",
    icon: "calendar",
  },
];

const contractDefaults: ReviewRow[] = [
  {
    id: "default-1",
    primary: "Notification period",
    secondary: "30 days before expiry",
    icon: "bell",
  },
  {
    id: "default-2",
    primary: "Liability cap",
    secondary: "£1,000,000",
    icon: "shield",
  },
  {
    id: "default-3",
    primary: "Governing jurisdiction",
    secondary: "England and Wales",
    icon: "landmark",
  },
  {
    id: "default-4",
    primary: "Default template",
    secondary: "Standard Services Agreement v2",
    icon: "file-text",
  },
];

const pendingContracts: ReviewRow[] = [
  {
    id: "pending-1",
    primary: "Acme — Amended Service Terms",
    secondary: "Uploaded 2 days ago · Awaiting signature",
    icon: "file-pen",
  },
  {
    id: "pending-2",
    primary: "TechCorp — Data Processing Addendum",
    secondary: "Uploaded 5 days ago · Awaiting review",
    icon: "file-pen",
  },
  {
    id: "pending-3",
    primary: "Venture Partners — Side Letter",
    secondary: "Uploaded 1 week ago · Awaiting signature",
    icon: "file-pen",
  },
];

/* ------------------------------------------------------------------ */
/*  Section config                                                     */
/* ------------------------------------------------------------------ */

interface SectionConfig {
  id: string;
  title: string;
  secondaryText: string;
  step: number;
  rows: ReviewRow[];
  bulkAcceptLabel: string;
  icon: string;
}

const sections: SectionConfig[] = [
  {
    id: "company",
    title: "Confirm company details",
    secondaryText: "We found the following company information in your files.",
    step: 1,
    rows: companyDetails,
    bulkAcceptLabel: "Save all",
    icon: "building-2",
  },
  {
    id: "contacts",
    title: "Review contacts found",
    secondaryText:
      "These contacts were identified across your scanned documents.",
    step: 2,
    rows: contacts,
    bulkAcceptLabel: "Save all",
    icon: "users",
  },
  {
    id: "dates",
    title: "Track contract dates",
    secondaryText:
      "Key dates extracted from your contracts. Review and confirm to enable tracking.",
    step: 3,
    rows: contractDates,
    bulkAcceptLabel: "Create all",
    icon: "calendar",
  },
  {
    id: "defaults",
    title: "Apply contract defaults",
    secondaryText:
      "Suggested default values based on your most common contract terms.",
    step: 4,
    rows: contractDefaults,
    bulkAcceptLabel: "Remember all",
    icon: "settings",
  },
  {
    id: "pending",
    title: "Import pending contracts",
    secondaryText:
      "Unsigned contracts found in your drive that can be imported.",
    step: 5,
    rows: pendingContracts,
    bulkAcceptLabel: "Add all",
    icon: "file-plus",
  },
];

/* ------------------------------------------------------------------ */
/*  ReviewSection component                                            */
/* ------------------------------------------------------------------ */

const ReviewSection: React.FC<{
  config: SectionConfig;
  totalSteps: number;
  statuses: Record<string, RowStatus>;
  onAccept: (id: string) => void;
  onDecline: (id: string) => void;
  onBulkAccept: () => void;
  onBulkDecline: () => void;
}> = ({
  config,
  totalSteps,
  statuses,
  onAccept,
  onDecline,
  onBulkAccept,
  onBulkDecline,
}) => {
  const acceptedCount = config.rows.filter(
    (r) => statuses[r.id] === "accepted"
  ).length;
  const declinedCount = config.rows.filter(
    (r) => statuses[r.id] === "declined"
  ).length;

  return (
    <div className="flex flex-col">
      <SectionHeader
        title={config.title}
        secondaryText={`Step ${config.step}/${totalSteps} · ${config.secondaryText}`}
        action={
          <div className="flex items-center gap-2">
            {/* Resolved counter */}
            {(acceptedCount > 0 || declinedCount > 0) && (
              <span className="text-xs text-subtle mr-1">
                {acceptedCount + declinedCount}/{config.rows.length}
              </span>
            )}
            <Button
              variant="ghost"
              size="s"
              showLeftIcon
              leftIconName="x"
              onClick={onBulkDecline}
            >
              Decline all
            </Button>
            <Button
              variant="primary"
              size="s"
              showLeftIcon
              leftIconName="check"
              onClick={onBulkAccept}
            >
              {config.bulkAcceptLabel}
            </Button>
          </div>
        }
      />
      <Section variant="card">
        <Stack gap="none">
          {config.rows.map((row) => {
            const status = statuses[row.id] || "pending";
            return (
              <div
                key={row.id}
                className={`relative transition-all duration-200 ${
                  status === "declined"
                    ? "opacity-40"
                    : status === "accepted"
                      ? "opacity-100"
                      : ""
                }`}
              >
                <MenuItem
                  primaryText={row.primary}
                  primaryTextWeight="semibold"
                  showSecondaryText
                  secondaryText={row.secondary}
                  showLeftElement
                  leftElement={row.leftElement || "icon"}
                  leftIcon={
                    row.icon ? (
                      <Icon
                        name={row.icon}
                        className="size-5"
                        color={
                          status === "accepted"
                            ? colors.positive
                            : colors.iconSecondary
                        }
                      />
                    ) : undefined
                  }
                  avatarInitials={row.avatarInitials}
                  width="fill"
                  showRButtonSet={status === "pending"}
                  onRButtonSetCancel={() => onDecline(row.id)}
                  onRButtonSetConfirm={() => onAccept(row.id)}
                  showRIcon1={status === "accepted"}
                  rIcon1="circle-check"
                  showRLabel={status === "declined"}
                  rLabel="Declined"
                />
                {/* Tag (e.g. "Overdue") shown after secondary text */}
                {row.tag && status !== "declined" && (
                  <div className="absolute left-[3.25rem] top-[2.35rem] pointer-events-none">
                    <Tag
                      label={row.tag.label}
                      size="xxs"
                      weight="bold"
                      className={
                        row.tag.type === "red"
                          ? "!bg-destructive/10 !text-destructive"
                          : row.tag.type === "orange"
                            ? "!bg-alert/10 !text-alert"
                            : ""
                      }
                    />
                  </div>
                )}
              </div>
            );
          })}
        </Stack>
      </Section>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  ScanReviewPage                                                     */
/* ------------------------------------------------------------------ */

const ScanReviewPage: React.FC = () => {
  // Track per-row status
  const [statuses, setStatuses] = useState<Record<string, RowStatus>>(() => {
    const init: Record<string, RowStatus> = {};
    sections.forEach((s) => s.rows.forEach((r) => (init[r.id] = "pending")));
    return init;
  });

  const setRowStatus = (id: string, status: RowStatus) =>
    setStatuses((prev) => ({ ...prev, [id]: status }));

  const setBulkStatus = (sectionId: string, status: RowStatus) => {
    const section = sections.find((s) => s.id === sectionId);
    if (!section) return;
    setStatuses((prev) => {
      const next = { ...prev };
      section.rows.forEach((r) => (next[r.id] = status));
      return next;
    });
  };

  // Summary counts
  const totalRows = sections.reduce((sum, s) => sum + s.rows.length, 0);
  const acceptedTotal = Object.values(statuses).filter(
    (s) => s === "accepted"
  ).length;
  const declinedTotal = Object.values(statuses).filter(
    (s) => s === "declined"
  ).length;
  const pendingTotal = totalRows - acceptedTotal - declinedTotal;

  return (
    <PageShell title="Scan Review" initialSidebarCollapsed>
      <div className="flex-1 max-w-[1040px] mx-auto">
        {/* ── Progress summary bar ── */}
        <div className="flex items-center justify-between px-gitlaw-l py-gitlaw-m mb-gitlaw-m">
          <div className="flex items-center gap-3">
            <Icon
              name="hard-drive"
              className="size-6"
              color={colors.iconPrimary}
            />
            <div>
              <h1 className="text-xl font-semibold text-foreground leading-[1.4]">
                Google Drive scan results
              </h1>
              <p className="text-sm text-subtle">
                Review {totalRows} items found across your files
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5">
              <Badge type="green" count={acceptedTotal} />
              <span className="text-xs text-subtle">accepted</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge type="red" count={declinedTotal} />
              <span className="text-xs text-subtle">declined</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Badge type="secondary" count={pendingTotal} />
              <span className="text-xs text-subtle">pending</span>
            </div>
          </div>
        </div>

        {/* ── Progress bar ── */}
        <div className="px-gitlaw-l mb-gitlaw-xl">
          <div className="h-1.5 w-full bg-secondary rounded-full overflow-hidden flex">
            <div
              className="h-full bg-positive transition-all duration-300"
              style={{
                width: `${(acceptedTotal / totalRows) * 100}%`,
              }}
            />
            <div
              className="h-full bg-destructive transition-all duration-300"
              style={{
                width: `${(declinedTotal / totalRows) * 100}%`,
              }}
            />
          </div>
        </div>

        {/* ── 5 review sections ── */}
        <div className="flex flex-col gap-gitlaw-xl">
          {sections.map((config) => (
            <ReviewSection
              key={config.id}
              config={config}
              totalSteps={sections.length}
              statuses={statuses}
              onAccept={(id) => setRowStatus(id, "accepted")}
              onDecline={(id) => setRowStatus(id, "declined")}
              onBulkAccept={() => setBulkStatus(config.id, "accepted")}
              onBulkDecline={() => setBulkStatus(config.id, "declined")}
            />
          ))}

          {/* ── Final CTA ── */}
          <div className="flex items-center justify-between px-gitlaw-l py-gitlaw-xl border-t border-border">
            <p className="text-sm text-subtle">
              {pendingTotal > 0
                ? `${pendingTotal} item${pendingTotal !== 1 ? "s" : ""} still pending review`
                : "All items reviewed"}
            </p>
            <div className="flex items-center gap-3">
              <Button variant="ghost" size="m">
                Cancel
              </Button>
              <Button
                variant="primary"
                size="m"
                showLeftIcon
                leftIconName="check"
                disabled={pendingTotal > 0}
              >
                Complete review
              </Button>
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
 * Google Drive Scan Review — single-page prototype.
 *
 * Replaces the original 5-step modal flow with a single scrollable page.
 * Each section uses the standard settings group pattern:
 * - `SectionHeader` with step counter + bulk action buttons
 * - `Section variant="card"` wrapping `MenuItem` rows with accept/decline (showRButtonSet)
 *
 * Fully interactive: click ✓/✗ per row or use bulk buttons.
 */
export const Default: Story = {
  render: () => <ScanReviewPage />,
};
