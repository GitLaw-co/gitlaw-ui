import type { Meta, StoryObj } from "@storybook/react";
import { TableListItem } from "../components/TableListItem";

const meta: Meta<typeof TableListItem> = {
  title: "Components/Data Display/TableListItem",
  component: TableListItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["item", "header", "skeleton", "drag-and-drop"],
    },
    cols: {
      control: "select",
      options: [0, 2, 4, 6],
    },
    iconName: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    visibility: {
      control: "select",
      options: [undefined, "private", "public", "shared", "organization"],
    },
    starCount: { control: "text" },
    spam: { control: "boolean" },
    selected: { control: "boolean" },
    starred: { control: "boolean" },
    selectMode: { control: "boolean" },
    selectStatus: {
      control: "select",
      options: ["off", "on", "semi"],
    },
    sortColumn: { control: "text" },
    sortDirection: {
      control: "select",
      options: [undefined, "asc", "desc"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (controllable via Storybook args panel) ───

export const Default: Story = {
  args: {
    type: "item",
    cols: 6,
    iconName: "folder",
    title: "Employment Agreements",
    subtitle: "8 files in folder",
    visibility: "public",
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 minutes ago", "3 days ago"],
  },
};

// ─── Fixed content width for composite stories ───
const GRID_WIDTH = 1080;

/* Interactive selection demo has been moved to Pages/FileList story */

// ─── All types overview ───

export const AllTypes: Story = {
  render: () => (
    <div style={{ width: GRID_WIDTH }}>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm font-semibold text-foreground mb-1">Skeleton</p>
        <TableListItem type="skeleton" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Drag & Drop placeholder
        </p>
        <TableListItem type="drag-and-drop" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (6 cols)
        </p>
        <TableListItem type="header" cols={6} />
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (4 cols)
        </p>
        <TableListItem type="header" cols={4} />
        <TableListItem
          type="item"
          cols={4}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["3 minutes ago", "3 days ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (2 cols)
        </p>
        <TableListItem type="header" cols={2} />
        <TableListItem
          type="item"
          cols={2}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["3 minutes ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Selected item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
          selected
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Starred item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
          starred
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Spam item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="file-text"
          title="Suspicious Document"
          subtitle="Unknown sender"
          spam
          metaValues={["Document", "2 min ago", "5 min ago", "Today"]}
        />
      </div>
    </div>
  ),
};
