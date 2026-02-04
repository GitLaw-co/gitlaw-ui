import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Popover } from "../components/Popover";
import { Button } from "../components/Button";
import { MenuItem } from "../components/MenuItem";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Popover> = {
  title: "Components/Popover",
  component: Popover,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Popover>;

// Simple popover content
const SimpleContent = () => (
  <div className="p-3 bg-card rounded-lg shadow-card">
    <p className="text-sm text-foreground">This is a popover content</p>
  </div>
);

// Menu content
const MenuContent = () => (
  <div className="w-[240px] p-2 bg-card rounded-lg shadow-card">
    <MenuItem
      primaryText="Edit"
      showLeftElement
      leftIcon={<Icon name="pencil" className="size-5" />}
      width="fill"
    />
    <MenuItem
      primaryText="Duplicate"
      showLeftElement
      leftIcon={<Icon name="copy" className="size-5" />}
      width="fill"
    />
    <MenuItem
      primaryText="Delete"
      showLeftElement
      leftIcon={<Icon name="trash-2" className="size-5" />}
      width="fill"
    />
  </div>
);

export const ClickTrigger: Story = {
  render: () => (
    <Popover
      content={<SimpleContent />}
      trigger="click"
      position="bottom"
    >
      <Button variant="secondary" size="m">Click me</Button>
    </Popover>
  ),
};

export const HoverTrigger: Story = {
  render: () => (
    <Popover
      content={<SimpleContent />}
      trigger="hover"
      position="bottom"
    >
      <Button variant="secondary" size="m">Hover me</Button>
    </Popover>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className="flex flex-col items-center gap-16 p-16">
      <Popover content={<SimpleContent />} trigger="click" position="bottom">
        <Button variant="secondary" size="m">Bottom</Button>
      </Popover>

      <div className="flex gap-32">
        <Popover content={<SimpleContent />} trigger="click" position="right">
          <Button variant="secondary" size="m">Right</Button>
        </Popover>
        <Popover content={<SimpleContent />} trigger="click" position="left">
          <Button variant="secondary" size="m">Left</Button>
        </Popover>
      </div>

      <Popover content={<SimpleContent />} trigger="click" position="top">
        <Button variant="secondary" size="m">Top</Button>
      </Popover>
    </div>
  ),
};

export const WithMenuContent: Story = {
  render: () => (
    <Popover
      content={<MenuContent />}
      trigger="click"
      position="bottom"
    >
      <Button variant="secondary" size="m">
        Options
      </Button>
    </Popover>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div className="flex flex-col items-center gap-4">
        <Popover
          content={<SimpleContent />}
          trigger="click"
          position="bottom"
          isOpen={isOpen}
          onOpenChange={setIsOpen}
        >
          <Button variant="secondary" size="m">
            {isOpen ? "Close" : "Open"}
          </Button>
        </Popover>
        <p className="text-sm text-subtle">
          Popover is {isOpen ? "open" : "closed"}
        </p>
      </div>
    );
  },
};

export const WithAnimation: Story = {
  render: () => (
    <Popover
      content={<SimpleContent />}
      trigger="click"
      position="bottom"
      animated={true}
      animationDuration={100}
    >
      <Button variant="secondary" size="m">Animated (100ms)</Button>
    </Popover>
  ),
};

export const NoAnimation: Story = {
  render: () => (
    <Popover
      content={<SimpleContent />}
      trigger="click"
      position="bottom"
      animated={false}
    >
      <Button variant="secondary" size="m">No animation</Button>
    </Popover>
  ),
};

export const CustomGap: Story = {
  render: () => (
    <div className="flex gap-8">
      <Popover content={<SimpleContent />} trigger="click" position="bottom" gap={1}>
        <Button variant="secondary" size="m">Gap 1</Button>
      </Popover>
      <Popover content={<SimpleContent />} trigger="click" position="bottom" gap={2}>
        <Button variant="secondary" size="m">Gap 2</Button>
      </Popover>
      <Popover content={<SimpleContent />} trigger="click" position="bottom" gap={4}>
        <Button variant="secondary" size="m">Gap 4</Button>
      </Popover>
    </div>
  ),
};
