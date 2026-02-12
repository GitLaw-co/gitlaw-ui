import type { Story, StoryDefault } from "@ladle/react";
import { TopHeader } from "../components/TopHeader";

export default {
  title: "Components / Navigation / TopHeader",
  meta: { layout: "fullscreen" },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Simple page title",
    },
    breadcrumbs: {
      control: { type: "text" },
      description: "Breadcrumb navigation items",
    },
    showStroke: {
      control: { type: "boolean" },
      description: "Show bottom border",
    },
    showFiles: {
      control: { type: "boolean" },
      description: "Show files button",
    },
    fileCount: {
      control: { type: "number" },
      description: "Number of files",
    },
    isSignedIn: {
      control: { type: "boolean" },
      description: "User signed in state",
    },
    isLanding: {
      control: { type: "boolean" },
      description: "Landing page variant",
    },
    showMenu: {
      control: { type: "boolean" },
      description: "Show hamburger menu",
    },
  },
} satisfies StoryDefault;

export const Default: Story = (args) => <TopHeader {...args} />;
Default.args = {
  title: "Influencer Agreement with Blake Logan",
  showStroke: true,
  showFiles: true,
  fileCount: 2,
  isSignedIn: true,
};

/**
 * All variants — signed in, with files, breadcrumbs (2/3/4+ levels), and logged out.
 */
export const AllVariants: Story = () => (
  <div className="flex flex-col">
    {/* Signed in - simple title */}
    <TopHeader
      title="Influencer Agreement with Blake Logan"
      showStroke={true}
      isSignedIn={true}
    />

    {/* Signed in - with files */}
    <TopHeader
      title="Influencer Agreement with Blake Logan"
      showStroke={true}
      showFiles={true}
      fileCount={1}
      isSignedIn={true}
    />

    {/* Signed in - with multiple files */}
    <TopHeader
      title="Influencer Agreement with Blake Logan"
      showStroke={true}
      showFiles={true}
      fileCount={4}
      isSignedIn={true}
    />

    {/* 2-level breadcrumbs */}
    <TopHeader
      breadcrumbs={[
        { id: "1", label: "Level One" },
        { id: "2", label: "Level Two" },
      ]}
      showStroke={true}
      isSignedIn={true}
    />

    {/* 3-level breadcrumbs */}
    <TopHeader
      breadcrumbs={[
        { id: "1", label: "Level One" },
        { id: "2", label: "Level Two" },
        { id: "3", label: "Level Three" },
      ]}
      showStroke={true}
      isSignedIn={true}
    />

    {/* Collapsed breadcrumbs (4+ levels) */}
    <TopHeader
      breadcrumbs={[
        { id: "1", label: "Level One" },
        { id: "2", label: "Level Two" },
        { id: "3", label: "Level Three" },
        { id: "4", label: "Level Four" },
      ]}
      showStroke={true}
      isSignedIn={true}
    />

    {/* Logged out */}
    <TopHeader
      title="Influencer Agreement with Blake Logan"
      showStroke={true}
      isSignedIn={false}
    />
  </div>
);
