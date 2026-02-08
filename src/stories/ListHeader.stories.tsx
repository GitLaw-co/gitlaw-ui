import type { Meta, StoryObj } from "@storybook/react";
import { ListHeader } from "../components/ListHeader";

const meta: Meta<typeof ListHeader> = {
  title: "Components/Navigation/ListHeader",
  component: ListHeader,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    mode: { control: "select", options: ["default", "edit"] },
    label: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof ListHeader>;

const defaultActions = [
  { icon: "search" },
  { icon: "arrow-down-wide-narrow" },
  { icon: "layout-grid" },
  { icon: "plus" },
];

const editActions = [
  { icon: "trash-2", label: "Delete" },
  { icon: "arrow-down-to-line", label: "Download" },
  { icon: "folder-input", label: "Move" },
  { icon: "check", label: "Done" },
];

/**
 * Default mode — file count with icon action buttons.
 */
export const Default: Story = {
  args: {
    mode: "default",
    label: "234 files",
    actions: defaultActions,
  },
};

/**
 * All variants — default and edit modes side by side.
 */
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-6 max-w-[1046px]">
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Default
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader
            mode="default"
            label="234 files"
            actions={defaultActions}
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Edit — 0 selected
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader
            mode="edit"
            label="0 files selected"
            editActions={editActions}
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Edit — 3 selected
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader
            mode="edit"
            label="3 files selected"
            editActions={editActions}
          />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Default — with active grid toggle
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader
            mode="default"
            label="234 files"
            actions={[
              { icon: "search" },
              { icon: "arrow-down-wide-narrow" },
              { icon: "layout-grid", active: true },
              { icon: "plus" },
            ]}
          />
        </div>
      </div>
    </div>
  ),
};
