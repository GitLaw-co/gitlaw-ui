import type { Meta, StoryObj } from "@storybook/react";
import { MenuItem } from "../../components/MenuItem";
import { Icon } from "../../components/Icon";

/**
 * Prototype: Document Menu Item
 *
 * This prototype demonstrates how to use the MenuItem component to create
 * a document attachment row with file info and actions.
 */
const meta: Meta<typeof MenuItem> = {
  title: "Prototypes/DocumentMenuItem",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof MenuItem>;

// Document thumbnail - no stroke, just surface background
const DocumentThumbnail = () => (
  <div className="shrink-0 w-14 h-16 bg-surface rounded-lg flex items-center justify-center">
    <Icon name="file-text" className="size-6 text-subtle" />
  </div>
);

/**
 * Document menu item using MenuItem with:
 * - width="fill" to fill container
 * - Custom left icon (document thumbnail)
 * - Secondary text for file type
 * - Card background via className
 * - Stroke border
 * - RIcon1 for folder action
 * - RButton for open action
 */
export const Default: Story = {
  args: {
    primaryText: "Wsgr engagement letter redlines",
    secondaryText: "Document · DOCX",
    showSecondaryText: true,
    showStroke: false,
    width: "fill",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder",
    showRButton: true,
    rButtonLabel: "Open in Microsoft Word",
  },
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
};

/**
 * PDF document variant
 */
export const PDFDocument: Story = {
  args: {
    primaryText: "Contract Agreement v2",
    secondaryText: "Document · PDF",
    showSecondaryText: true,
    showStroke: false,
    width: "fill",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder",
    showRButton: true,
    rButtonLabel: "Open in Preview",
  },
  decorators: [
    (Story) => (
      <div className="w-[700px]">
        <Story />
      </div>
    ),
  ],
};

/**
 * Hug width variant (default behavior)
 */
export const HugWidth: Story = {
  args: {
    primaryText: "Short filename.docx",
    secondaryText: "Document · DOCX",
    showSecondaryText: true,
    showStroke: false,
    width: "hug",
    className: "bg-card rounded-lg shadow-card",
    leftIcon: <DocumentThumbnail />,
    showRIcon1: true,
    rIcon1: "folder",
  },
};

/**
 * Multiple documents in a list
 */
export const DocumentList: Story = {
  render: () => (
    <div className="w-[700px] space-y-2">
      <MenuItem
        primaryText="Wsgr engagement letter redlines"
        secondaryText="Document · DOCX"
        showSecondaryText
        width="fill"
        className="bg-card rounded-lg shadow-card"
        leftIcon={<DocumentThumbnail />}
        showRIcon1
        rIcon1="folder"
        showRButton
        rButtonLabel="Open in Microsoft Word"
      />
      <MenuItem
        primaryText="Contract Agreement v2"
        secondaryText="Document · PDF"
        showSecondaryText
        width="fill"
        className="bg-card rounded-lg shadow-card"
        leftIcon={<DocumentThumbnail />}
        showRIcon1
        rIcon1="folder"
        showRButton
        rButtonLabel="Open in Preview"
      />
      <MenuItem
        primaryText="NDA Template"
        secondaryText="Document · DOCX"
        showSecondaryText
        width="fill"
        className="bg-card rounded-lg shadow-card"
        leftIcon={<DocumentThumbnail />}
        showRIcon1
        rIcon1="folder"
        showRButton
        rButtonLabel="Open in Microsoft Word"
      />
    </div>
  ),
};
