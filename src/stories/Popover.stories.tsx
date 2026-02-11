import type { Story, StoryDefault } from "@ladle/react";
import { useState } from "react";
import { Popover } from "../components/Popover";
import { Button } from "../components/Button";
import { MenuItem } from "../components/MenuItem";
import { Icon } from "../components/Icon";

export default {
  title: "Components / Overlays / Popover",
  meta: { layout: "centered" },
  argTypes: {
    trigger: {
      control: { type: "select" },
      options: ["click", "hover"],
      description: "How the popover is triggered",
    },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
      description: "Position of the popover relative to trigger",
    },
    animated: {
      control: { type: "boolean" },
      description: "Enable/disable animation",
    },
    animationDuration: {
      control: { type: "number" },
      description: "Animation duration in milliseconds",
    },
    gap: {
      control: { type: "number" },
      description: "Gap between trigger and popover",
    },
  },
} satisfies StoryDefault;

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

export const Default: Story = ({ trigger, content: _content, ...rest }) => (
  <Popover content={<SimpleContent />} trigger={trigger} {...rest}>
    <Button variant="secondary" size="m">
      {trigger === "hover" ? "Hover me" : "Click me"}
    </Button>
  </Popover>
);
Default.args = {
  trigger: "click",
  position: "bottom",
  animated: true,
  animationDuration: 100,
  gap: 2,
};

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-12">
    {/* Positions */}
    <div>
      <h3 className="text-sm font-medium text-subtle mb-6">Positions</h3>
      <div className="flex flex-col items-center gap-16 p-8">
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
    </div>

    {/* Triggers */}
    <div>
      <h3 className="text-sm font-medium text-subtle mb-6">Triggers</h3>
      <div className="flex gap-8">
        <Popover content={<SimpleContent />} trigger="click" position="bottom">
          <Button variant="secondary" size="m">Click trigger</Button>
        </Popover>
        <Popover content={<SimpleContent />} trigger="hover" position="bottom">
          <Button variant="secondary" size="m">Hover trigger</Button>
        </Popover>
      </div>
    </div>

    {/* Menu content example */}
    <div>
      <h3 className="text-sm font-medium text-subtle mb-6">Menu Content</h3>
      <Popover content={<MenuContent />} trigger="click" position="bottom">
        <Button variant="secondary" size="m">Options menu</Button>
      </Popover>
    </div>
  </div>
);

export const Interactive: Story = () => {
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
};
