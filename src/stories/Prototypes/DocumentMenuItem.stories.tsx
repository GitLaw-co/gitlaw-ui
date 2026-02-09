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
  title: "Pages/Patterns/Document Menu Item",
  component: MenuItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
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
 * Document menu item — fill width with thumbnail, file type, folder action, and open button.
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
 * All variants — PDF, hug width, and multi-document list.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* PDF variant */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          PDF document
        </p>
        <div className="w-[700px]">
          <MenuItem
            primaryText="Contract Agreement v2"
            secondaryText="Document · PDF"
            showSecondaryText
            showStroke={false}
            width="fill"
            className="bg-card rounded-lg shadow-card"
            leftIcon={<DocumentThumbnail />}
            showRIcon1
            rIcon1="folder"
            showRButton
            rButtonLabel="Open in Preview"
          />
        </div>
      </div>

      {/* Hug width */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Hug width
        </p>
        <MenuItem
          primaryText="Short filename.docx"
          secondaryText="Document · DOCX"
          showSecondaryText
          showStroke={false}
          width="hug"
          className="bg-card rounded-lg shadow-card"
          leftIcon={<DocumentThumbnail />}
          showRIcon1
          rIcon1="folder"
        />
      </div>

      {/* Document list */}
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Document list
        </p>
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
      </div>
    </div>
  ),
};
