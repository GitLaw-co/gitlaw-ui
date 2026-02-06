import type { Meta, StoryObj } from "@storybook/react";
import { TopHeader } from "../components/TopHeader";

const meta: Meta<typeof TopHeader> = {
  title: "Components/TopHeader",
  component: TopHeader,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Simple page title",
    },
    breadcrumbs: {
      control: "object",
      description: "Breadcrumb navigation items",
    },
    showStroke: {
      control: "boolean",
      description: "Show bottom border",
    },
    showFiles: {
      control: "boolean",
      description: "Show files button",
    },
    fileCount: {
      control: "number",
      description: "Number of files",
    },
    isSignedIn: {
      control: "boolean",
      description: "User signed in state",
    },
    isLanding: {
      control: "boolean",
      description: "Landing page variant",
    },
    showMenu: {
      control: "boolean",
      description: "Show hamburger menu",
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

export const Default: Story = {
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    isSignedIn: true,
  },
};

export const LoggedOut: Story = {
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    isSignedIn: false,
    isLanding: false,
  },
};

export const Interactive: Story = {
  args: {
    title: "Influencer Agreement with Blake Logan",
    showStroke: true,
    showFiles: true,
    fileCount: 2,
    isSignedIn: true,
    isLanding: false,
  },
};

export const AllVariants: Story = {
  render: () => (
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
  ),
};
