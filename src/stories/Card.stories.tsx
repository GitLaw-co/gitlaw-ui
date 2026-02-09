import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "../components/Card";

const meta: Meta<typeof Card> = {
  title: "Components/Data Display/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["file", "template", "folder"],
      description: "Card type",
    },
    title: {
      control: "text",
      description: "Card title",
    },
    description: {
      control: "text",
      description: "Card description (for file/template)",
    },
    visibility: {
      control: "select",
      options: ["private", "public", "shared", "organization"],
      description: "Visibility status",
    },
    organizationName: {
      control: "text",
      description: "Organization name (when visibility is organization)",
    },
    starred: {
      control: "boolean",
      description: "Whether card is starred",
    },
    selected: {
      control: "boolean",
      description: "Whether card is selected (shows 2px primary border)",
    },
    compact: {
      control: "boolean",
      description: "Compact mode — square (1:1), full-width, no min/max-w constraints",
    },
    onFileClick: {
      action: "file clicked",
      description: "Callback when a file within a folder is clicked",
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Sample data
const sampleFiles = [
  { id: "1", name: "Service Design Agreement" },
  { id: "2", name: "Client Engagement Contract" },
  { id: "3", name: "Non-Disclosure Agreement" },
  { id: "4", name: "Consulting Services Agreement" },
  { id: "5", name: "Partnership Agreement" },
  { id: "6", name: "Employment Contract" },
];

// Default story with controllable args (FileCard variant)
export const Default: Story = {
  args: {
    type: "file",
    title: "Service Contract Template",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Whisk",
    ownerInitials: "WH",
    visibility: "private",
    starred: false,
    selected: false,
    compact: false,
  },
  render: (args) => (
    <div style={{ width: "240px" }}>
      <Card {...args} />
    </div>
  ),
};

// All Variants showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* File cards — standard (3:4) vs compact (1:1) */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">File cards</h3>
        <div className="flex gap-3 items-start">
          <div style={{ width: "240px" }}>
            <Card
              type="file"
              title="Service Contract Template"
              description="Explains how Mozilla handles minimal personal data."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              starred
            />
          </div>
          <div style={{ width: "192px" }}>
            <Card
              type="file"
              title="Service Contract Template"
              description="This description is hidden in compact mode."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              starred
              compact
            />
          </div>
        </div>
      </div>

      {/* Folder cards — standard vs compact */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Folder cards
        </h3>
        <div className="flex gap-3 items-start">
          <div style={{ width: "240px" }}>
            <Card
              type="folder"
              title="Client Contracts"
              filesCount={6}
              files={sampleFiles}
            />
          </div>
          <div style={{ width: "192px" }}>
            <Card
              type="folder"
              title="Client Contracts"
              filesCount={6}
              files={sampleFiles}
              compact
            />
          </div>
        </div>
      </div>

      {/* Visibility states */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Visibility</h3>
        <div className="flex gap-3">
          {(
            [
              ["private", "Private Doc", undefined],
              ["public", "Public Doc", undefined],
              ["shared", "Shared Doc", undefined],
              ["organization", "Org Doc", "Gitlaw"],
            ] as const
          ).map(([vis, title, org]) => (
            <div key={vis} style={{ width: "200px" }}>
              <Card
                type="file"
                title={title}
                description="Short description."
                ownerName="Whisk"
                ownerInitials="WH"
                visibility={vis}
                organizationName={org}
              />
            </div>
          ))}
        </div>
      </div>

      {/* States — selected, starred */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">States</h3>
        <div className="flex gap-3 items-start">
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Selected Card"
              description="Shows a 2px primary border."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              selected
            />
          </div>
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Starred Card"
              description="Star icon is filled."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              starred
            />
          </div>
          <div style={{ width: "192px" }}>
            <Card
              type="file"
              title="Selected Compact"
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="shared"
              selected
              compact
            />
          </div>
        </div>
      </div>
    </div>
  ),
};
