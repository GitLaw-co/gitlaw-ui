import type { Story, StoryDefault } from "@ladle/react";
import { Dialog } from "../components/Dialog";

export default {
  title: "Components / Overlays / Dialog",
  meta: { layout: "centered" },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Dialog title",
    },
    message: {
      control: { type: "text" },
      description: "Dialog message/description",
    },
    primaryLabel: {
      control: { type: "text" },
      description: "Primary button label",
    },
    secondaryLabel: {
      control: { type: "text" },
      description: "Secondary button label",
    },
    showCloseButton: {
      control: { type: "boolean" },
      description: "Show close button",
    },
    open: {
      control: { type: "boolean" },
      description: "Whether dialog is open",
    },
  },
  decorators: [
    (Component) => (
      <div className="bg-page-background p-8">
        <Component />
      </div>
    ),
  ],
} satisfies StoryDefault;

// Default Dialog (Unsaved changes)
export const Default: Story = (args) => <Dialog {...args} />;
Default.args = {
  title: "Unsaved changes",
  message: "This document has unsaved changes. Save them now before moving on.",
  primaryLabel: "Save changes",
  secondaryLabel: "Discard changes",
  showCloseButton: true,
  open: true,
};

// All variants showcase
export const AllVariants: Story = () => (
  <div className="flex flex-col gap-8">
    <Dialog
      title="Unsaved changes"
      message="This document has unsaved changes. Save them now before moving on."
      primaryLabel="Save changes"
      secondaryLabel="Discard changes"
      showCloseButton={true}
      open={true}
    />
    <Dialog
      title="Delete document"
      message="Are you sure you want to delete this document? This action cannot be undone."
      primaryLabel="Delete"
      secondaryLabel="Cancel"
      showCloseButton={true}
      open={true}
    />
    <Dialog
      title="Session expired"
      message="Your session has expired. Please log in again to continue."
      primaryLabel="Log in"
      secondaryLabel="Cancel"
      showCloseButton={false}
      open={true}
    />
  </div>
);
