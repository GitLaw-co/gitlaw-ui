import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PageShell } from "../../components/PageShell";
import {
  PageNav,
  TableListItem,
  Card,
  Button,
  ListHeader,
  useContainerCols,
} from "../../components";

const meta: Meta<typeof PageShell> = {
  title: "Pages/File List",
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

const navItems = [
  { id: "recent", label: "Recent" },
  { id: "your-files", label: "Your files" },
  { id: "shared", label: "Shared with you" },
  { id: "esign", label: "eSign inbox" },
];

const fileRows = [
  {
    iconName: "folder",
    title: "Employment Agreements",
    subtitle: "8 files in folder",
    metaValues: ["Folder", "1 minute ago", "3 minutes ago", "3 days ago"],
    starred: true,
  },
  {
    iconName: "folder",
    title: "Correspondance",
    subtitle: "8 files in folder",
    metaValues: ["Folder", "1 minute ago", "5 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Contract Template",
    subtitle: "Template for client service contracts",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "10 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Contract Template",
    subtitle: "Template for client service contracts",
    visibility: "public" as const,
    starCount: "17K",
    spam: true,
    metaValues: ["Folder", "1 minute ago", "10 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Design Agreement",
    subtitle: "Contract for design and delivery",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 hours ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Client Engagement Framework",
    subtitle: "Terms for ongoing client relationships",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 hours ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Non-poaching agreement",
    subtitle: "Prohibits hiring of competitor employees",
    visibility: "private" as const,
    metaValues: ["Folder", "1 minute ago", "1 day ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Coaching agreement",
    subtitle: "Terms for coaching services delivery",
    visibility: "private" as const,
    metaValues: ["Folder", "1 minute ago", "2 days ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Wedding Photography Contract",
    subtitle: "Contract for wedding photography services...",
    metaValues: ["Folder", "1 minute ago", "3 days ago", "3 days ago"],
  },
  {
    iconName: "folder",
    title: "Real Estate Documents",
    subtitle: "12 files in folder",
    metaValues: ["Folder", "2 minutes ago", "1 hour ago", "5 days ago"],
    starred: true,
  },
  {
    iconName: "file-text",
    title: "Freelance Retainer Agreement",
    subtitle: "Ongoing retainer terms for freelancers",
    visibility: "private" as const,
    metaValues: ["Document", "5 minutes ago", "2 hours ago", "1 week ago"],
  },
  {
    iconName: "file-text",
    title: "Intellectual Property Assignment",
    subtitle: "Transfer of IP rights between parties",
    visibility: "public" as const,
    starCount: "4.2K",
    metaValues: ["Document", "10 minutes ago", "5 hours ago", "2 weeks ago"],
  },
  {
    iconName: "file-text",
    title: "Data Processing Agreement",
    subtitle: "GDPR-compliant data processing terms",
    visibility: "public" as const,
    starCount: "8.9K",
    metaValues: ["Document", "15 minutes ago", "1 day ago", "3 weeks ago"],
  },
  {
    iconName: "folder",
    title: "Tax Filings 2025",
    subtitle: "4 files in folder",
    metaValues: ["Folder", "30 minutes ago", "2 days ago", "1 month ago"],
  },
  {
    iconName: "file-text",
    title: "Software Licence Agreement",
    subtitle: "End-user licence for SaaS products",
    visibility: "shared" as const,
    metaValues: ["Document", "1 hour ago", "3 days ago", "2 months ago"],
  },
];

/** Mobile nav dropdown items — mirrors navItems with selected state */
const mobileNavItems = (activeId: string) =>
  navItems.map((item) => ({
    id: item.id,
    label: item.label,
    selected: item.id === activeId,
  }));

const cardData = [
  {
    type: "folder" as const,
    title: "Service Contract Template",
    filesCount: 8,
    files: [
      { id: "1", name: "Service Design Agreement" },
      { id: "2", name: "Client Engagement Contract" },
      { id: "3", name: "Non-Disclosure Agreement" },
      { id: "4", name: "Consulting Services Agreement" },
      { id: "5", name: "Consulting Services Agreement" },
      { id: "6", name: "Non-Disclosure Agreement" },
    ],
  },
  {
    type: "file" as const,
    title: "Design Services Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Mutual NDA",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Client Engagement Framework",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Project Collaboration Contract",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Blake Logan",
    ownerInitials: "BL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Design Services Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "John Titor",
    ownerInitials: "JT",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Creative Partnership Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Service Contract Template",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "private" as const,
  },
  {
    type: "folder" as const,
    title: "Real Estate Documents",
    filesCount: 12,
    files: [
      { id: "r1", name: "Lease Agreement" },
      { id: "r2", name: "Property Inspection Report" },
      { id: "r3", name: "Title Deed Transfer" },
      { id: "r4", name: "Mortgage Application" },
      { id: "r5", name: "Tenant Screening Form" },
    ],
  },
  {
    type: "file" as const,
    title: "Freelance Retainer Agreement",
    description:
      "Standard retainer terms for ongoing freelance engagements with monthly billing cycles.",
    ownerName: "Sam Rivera",
    ownerInitials: "SR",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "IP Assignment Agreement",
    description:
      "Transfers intellectual property rights from contractor to company upon project completion.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "public" as const,
  },
  {
    type: "file" as const,
    title: "Data Processing Agreement",
    description:
      "GDPR-compliant terms for processing personal data on behalf of data controllers.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "public" as const,
  },
  {
    type: "file" as const,
    title: "Software Licence Agreement",
    description:
      "End-user licence for SaaS products covering usage rights, limitations, and support terms.",
    ownerName: "Blake Logan",
    ownerInitials: "BL",
    visibility: "shared" as const,
  },
];

/* ------------------------------------------------------------------ */
/*  Shared action buttons                                              */
/* ------------------------------------------------------------------ */

const listHeaderActions = (
  view: "list" | "grid",
  setView: (v: "list" | "grid") => void
) => [
  { icon: "search" },
  { icon: "arrow-down-wide-narrow" },
  {
    icon: "layout-grid",
    active: view === "grid",
    onClick: () => setView(view === "list" ? "grid" : "list"),
  },
  { icon: "plus" },
];

/* ------------------------------------------------------------------ */
/*  Browse templates FAB                                               */
/* ------------------------------------------------------------------ */

const BrowseTemplatesFab = () => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <Button
      variant="primary"
      size="l"
      showLeftIcon
      leftIconName="layout-grid"
    >
      Browse templates
    </Button>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Story: List View                                                   */
/* ------------------------------------------------------------------ */

/**
 * File list page — list/table view with responsive columns.
 * Columns adapt to container width via useContainerCols hook:
 * - < 672px: name only (no header row)
 * - 672–896px: Name + Updated
 * - 896–1024px: Name + 3 meta columns
 * - ≥ 1024px: all 6 columns
 */
export const ListView: Story = {
  render: () => {
    const [view, setView] = useState<"list" | "grid">("list");
    const { cols, containerRef } = useContainerCols();
    return (
      <PageShell
        title="Files"
        initialSidebarCollapsed
        showHeaderStroke
        mobileNavItems={mobileNavItems("recent")}
        mobileNavActiveLabel="Recent"
      >
        <div className="flex gap-6">
          <PageNav
            activeAccount={accounts[0]}
            accounts={accounts}
            items={navItems}
            activeItemId="recent"
            className="hidden md:flex"
          />
          <div className="flex-1 min-w-0 @container" ref={containerRef}>
            <ListHeader
              label="234 files"
              actions={listHeaderActions(view, setView)}
            />
            <div className="mt-4 flex flex-col gap-2">
              {cols > 0 && (
                <TableListItem
                  type="header"
                  cols={cols}
                  headerLabels={[
                    "Name",
                    "Type",
                    "Last viewed",
                    "Updated",
                    "Created",
                  ]}
                  sortColumn="Updated"
                  sortDirection="desc"
                />
              )}
              {fileRows.map((row, i) => (
                <TableListItem
                  key={i}
                  type="item"
                  cols={cols}
                  iconName={row.iconName}
                  title={row.title}
                  subtitle={row.subtitle}
                  visibility={row.visibility}
                  starCount={row.starCount}
                  spam={row.spam}
                  metaValues={row.metaValues}
                  starred={row.starred || false}
                />
              ))}
            </div>
            <BrowseTemplatesFab />
          </div>
        </div>
      </PageShell>
    );
  },
};

/* ------------------------------------------------------------------ */
/*  Story: Card Grid View                                              */
/* ------------------------------------------------------------------ */

/**
 * File list page — card grid view with responsive columns.
 * Grid adapts to container width via @container queries:
 * - Default: 1 column, gap 8px
 * - @lg (512px): 2 columns, gap 8px
 * - @2xl (672px): 2 columns, gap 12px
 * - @4xl (896px): 3 columns, gap 12px
 * - @5xl (1024px): 4 columns, gap 12px
 */
export const CardGridView: Story = {
  render: () => {
    const [view, setView] = useState<"list" | "grid">("grid");
    return (
      <PageShell
        title="Files"
        initialSidebarCollapsed
        showHeaderStroke
        mobileNavItems={mobileNavItems("recent")}
        mobileNavActiveLabel="Recent"
      >
        <div className="flex gap-6">
          <PageNav
            activeAccount={accounts[0]}
            accounts={accounts}
            items={navItems}
            activeItemId="recent"
            className="hidden md:flex"
          />
          <div className="flex-1 min-w-0 @container">
            <ListHeader
              label="234 files"
              actions={listHeaderActions(view, setView)}
            />
            <div className="mt-4 grid grid-cols-1 gap-2 @lg:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] @2xl:gap-3">
              {cardData.map((card, i) => (
                <Card
                  key={i}
                  type={card.type}
                  title={card.title}
                  description={card.description}
                  ownerName={card.ownerName}
                  ownerInitials={card.ownerInitials}
                  visibility={card.visibility}
                  filesCount={card.filesCount}
                  files={card.files}
                />
              ))}
            </div>
            <BrowseTemplatesFab />
          </div>
        </div>
      </PageShell>
    );
  },
};
