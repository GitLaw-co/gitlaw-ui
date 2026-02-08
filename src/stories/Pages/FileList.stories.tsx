import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PageShell } from "../../components/PageShell";
import {
  PageNav,
  TableListItem,
  Card,
  Icon,
  Button,
} from "../../components";
import { colors } from "../../specs";

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
    metaValues: ["Folder", "1 minute ago", "10 minutes a...", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Contract Template",
    subtitle: "Template for client service contracts",
    visibility: "public" as const,
    starCount: "17K",
    spam: true,
    metaValues: ["Folder", "1 minute ago", "10 minutes a...", "3 days ago"],
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
];

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
];

/* ------------------------------------------------------------------ */
/*  Toolbar (shared between views)                                     */
/* ------------------------------------------------------------------ */

const FileListToolbar = ({
  view,
  onViewChange,
}: {
  view: "list" | "grid";
  onViewChange: (v: "list" | "grid") => void;
}) => (
  <div className="flex items-center justify-between mb-4">
    <h2 className="text-lg font-semibold text-primary">234 files</h2>
    <div className="flex items-center gap-2">
      <button
        className="p-2 rounded-gitlaw-m hover:bg-secondary transition-colors duration-fast"
        onClick={() => {}}
      >
        <Icon name="search" className="size-5" color={colors.iconSecondary} />
      </button>
      <button
        className="p-2 rounded-gitlaw-m hover:bg-secondary transition-colors duration-fast"
        onClick={() => {}}
      >
        <Icon
          name="arrow-down"
          className="size-5"
          color={colors.iconSecondary}
        />
      </button>
      <button
        className={`p-2 rounded-gitlaw-m transition-colors duration-fast ${
          view === "grid"
            ? "bg-secondary"
            : "hover:bg-secondary"
        }`}
        onClick={() => onViewChange(view === "list" ? "grid" : "list")}
      >
        <Icon
          name="grid"
          className="size-5"
          color={view === "grid" ? colors.iconPrimary : colors.iconSecondary}
        />
      </button>
      <button
        className="p-2 rounded-gitlaw-m bg-primary hover:bg-primary/90 transition-colors duration-fast"
        onClick={() => {}}
      >
        <Icon name="plus" className="size-5" color={colors.iconNegative} />
      </button>
    </div>
  </div>
);

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
 * File list page — list/table view with sortable columns.
 * Matches the Figma "Files" page with table rows.
 */
export const ListView: Story = {
  render: () => {
    const [view, setView] = useState<"list" | "grid">("list");
    return (
      <PageShell title="Files" initialSidebarCollapsed showHeaderStroke={false}>
        <div className="flex gap-6">
          <PageNav
            activeAccount={accounts[0]}
            accounts={accounts}
            items={navItems}
            activeItemId="recent"
          />
          <div className="flex-1 min-w-0">
            <FileListToolbar view={view} onViewChange={setView} />
            <div>
              <TableListItem
                type="header"
                cols={6}
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
              {fileRows.map((row, i) => (
                <TableListItem
                  key={i}
                  type="item"
                  cols={6}
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
 * File list page — card grid view with folder and file cards.
 * Matches the Figma "Files" page in grid/card mode.
 */
export const CardGridView: Story = {
  render: () => {
    const [view, setView] = useState<"list" | "grid">("grid");
    return (
      <PageShell title="Files" initialSidebarCollapsed showHeaderStroke={false}>
        <div className="flex gap-6">
          <PageNav
            activeAccount={accounts[0]}
            accounts={accounts}
            items={navItems}
            activeItemId="recent"
          />
          <div className="flex-1 min-w-0">
            <FileListToolbar view={view} onViewChange={setView} />
            <div className="grid grid-cols-4 gap-4">
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
