import type { Story, StoryDefault } from "@ladle/react";
import { Toast } from "../components/Toast";

export default {
  title: "Components / Feedback / Toast",
  meta: { layout: "centered" },
  argTypes: {
    message: {
      control: { type: "text" },
      description: "Toast message",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "success", "error", "warning"],
      description: "Toast variant",
    },
    actionLabel: {
      control: { type: "text" },
      description: "Action button label",
    },
    showAction: {
      control: { type: "boolean" },
      description: "Show action button",
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

export const Default: Story = (args) => <Toast {...args} />;
Default.args = {
  message: "Reminder added for Service contract. We'll notify you on Sep 21, 2026.",
  actionLabel: "Action",
  showAction: true,
};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-4">
    <Toast
      message="Reminder added for Service contract."
      actionLabel="Action"
      showAction={true}
    />
    <Toast
      message="Document saved successfully."
      showAction={false}
    />
    <Toast
      message="The document 'Employment Agreement - John Smith' has been successfully shared with 5 team members. They will receive an email notification shortly."
      actionLabel="View"
      showAction={true}
    />
  </div>
);
