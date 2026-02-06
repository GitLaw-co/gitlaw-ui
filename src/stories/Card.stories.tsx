import React, { useState, useRef, useCallback, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../specs";
import { Card } from "../components/Card";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["file", "template", "folder"],
      description: "Card type",
    },
    title: {
      control: "text",
      description: "Card title",
    },
    description: {
      control: "text",
      description: "Card description (for file/template)",
    },
    visibility: {
      control: "select",
      options: ["private", "public", "shared", "organization"],
      description: "Visibility status",
    },
    organizationName: {
      control: "text",
      description: "Organization name (when visibility is organization)",
    },
    starred: {
      control: "boolean",
      description: "Whether card is starred",
    },
    selected: {
      control: "boolean",
      description: "Whether card is selected (shows 2px primary border)",
    },
    onFileClick: {
      action: "file clicked",
      description: "Callback when a file within a folder is clicked",
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Sample data
const sampleFiles = [
  { id: "1", name: "Service Design Agreement" },
  { id: "2", name: "Client Engagement Contract" },
  { id: "3", name: "Non-Disclosure Agreement" },
  { id: "4", name: "Consulting Services Agreement" },
  { id: "5", name: "Partnership Agreement" },
  { id: "6", name: "Employment Contract" },
];

// Default story with controllable args (FileCard variant)
export const Default: Story = {
  args: {
    type: "file",
    title: "Service Contract Template",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Whisk",
    ownerInitials: "WH",
    visibility: "private",
    starred: false,
    selected: false,
  },
  render: (args) => (
    <div style={{ width: "240px" }}>
      <Card {...args} />
    </div>
  ),
};

// All Variants showcase (visibility states + responsive sizes)
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      {/* Visibility States */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Visibility States
        </h3>
        <div className="flex gap-2">
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Private Document"
              description="Only visible to you."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
            />
          </div>
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Public Document"
              description="Accessible to everyone."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="public"
            />
          </div>
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Shared Document"
              description="Shared with specific people."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="shared"
            />
          </div>
          <div style={{ width: "220px" }}>
            <Card
              type="file"
              title="Organization Document"
              description="Shared with organization."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="organization"
              organizationName="Gitlaw"
            />
          </div>
        </div>
      </div>

      {/* Responsive Sizes */}
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          Under 200px (compact: no star, no file count, 16px padding)
        </h3>
        <div className="flex gap-2">
          <div style={{ width: "180px" }}>
            <Card
              type="file"
              title="Compact File"
              description="Smaller card variant."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              starred={true}
            />
          </div>
          <div style={{ width: "180px" }}>
            <Card
              type="folder"
              title="Compact Folder"
              filesCount={5}
              files={sampleFiles}
              starred={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">
          200px+ (full: star visible, file count visible, 24px padding)
        </h3>
        <div className="flex gap-2">
          <div style={{ width: "240px" }}>
            <Card
              type="file"
              title="Standard File"
              description="Standard card variant."
              ownerName="Whisk"
              ownerInitials="WH"
              visibility="private"
              starred={true}
            />
          </div>
          <div style={{ width: "240px" }}>
            <Card
              type="folder"
              title="Standard Folder"
              filesCount={5}
              files={sampleFiles}
              starred={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Interactive Example with selection and rubber band
interface SelectionBox {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface CardPosition {
  id: string;
  rect: DOMRect;
}

const GRID_WIDTH = 1080;

const InteractiveDemo = () => {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [isDragging, setIsDragging] = useState(false);
  const [selectionBox, setSelectionBox] = useState<SelectionBox | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  const cards = [
    {
      id: "1",
      type: "folder" as const,
      title: "Service Contract Template",
      filesCount: 8,
      files: sampleFiles,
    },
    {
      id: "2",
      type: "file" as const,
      title: "Design Services Agreement",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Alex Carter",
      ownerInitials: "AC",
    },
    {
      id: "3",
      type: "file" as const,
      title: "Mutual NDA",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Open Legal Library",
      ownerInitials: "OL",
    },
    {
      id: "4",
      type: "file" as const,
      title: "Client Engagement Framework",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Open Legal Library",
      ownerInitials: "OL",
    },
    {
      id: "5",
      type: "file" as const,
      title: "Project Collaboration Contract",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Blake Logan",
      ownerInitials: "BL",
    },
    {
      id: "6",
      type: "file" as const,
      title: "Design Services Agreement",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "John Titor",
      ownerInitials: "JT",
    },
    {
      id: "7",
      type: "file" as const,
      title: "Creative Partnership Agreement",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Blake Logan",
      ownerInitials: "BL",
    },
    {
      id: "8",
      type: "file" as const,
      title: "Service Contract Template",
      description: "Explains how Mozilla handles minimal personal data.",
      ownerName: "Alex Carter",
      ownerInitials: "AC",
    },
  ];

  const getCardPositions = useCallback((): CardPosition[] => {
    const positions: CardPosition[] = [];
    cardRefs.current.forEach((element, id) => {
      if (element) {
        positions.push({ id, rect: element.getBoundingClientRect() });
      }
    });
    return positions;
  }, []);

  const getCardsInSelection = useCallback(
    (box: SelectionBox): Set<string> => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return new Set();

      // Convert selection box to absolute screen coordinates
      const selectionLeft = Math.min(box.startX, box.endX) + containerRect.left;
      const selectionRight =
        Math.max(box.startX, box.endX) + containerRect.left;
      const selectionTop = Math.min(box.startY, box.endY) + containerRect.top;
      const selectionBottom =
        Math.max(box.startY, box.endY) + containerRect.top;

      const selected = new Set<string>();
      const positions = getCardPositions();

      positions.forEach(({ id, rect }) => {
        // Check if card intersects with selection box (using absolute coordinates)
        const intersects = !(
          rect.right < selectionLeft ||
          rect.left > selectionRight ||
          rect.bottom < selectionTop ||
          rect.top > selectionBottom
        );
        if (intersects) {
          selected.add(id);
        }
      });

      return selected;
    },
    [getCardPositions],
  );

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    // Don't start drag if clicking on a card or a button
    const target = e.target as HTMLElement;
    if (target.closest('[data-card="true"]') || target.closest("button")) {
      return;
    }

    e.preventDefault();
    const containerRect = containerRef.current?.getBoundingClientRect();
    if (containerRect) {
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;
      setIsDragging(true);
      setSelectionBox({ startX: x, startY: y, endX: x, endY: y });
      setSelectedIds(new Set());
    }
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isDragging && selectionBox && containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - containerRect.left;
        const y = e.clientY - containerRect.top;
        const newBox = { ...selectionBox, endX: x, endY: y };
        setSelectionBox(newBox);
        setSelectedIds(getCardsInSelection(newBox));
      }
    },
    [isDragging, selectionBox, getCardsInSelection],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setSelectionBox(null);
  }, []);

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseup", handleMouseUp);
      };
    }
  }, [isDragging, handleMouseMove, handleMouseUp]);

  const toggleSelection = (id: string) => {
    setSelectedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleDoubleClick = (_id: string, title: string) => {
    alert(`Opening: ${title}`);
  };

  const getSelectionBoxStyle = (): React.CSSProperties | undefined => {
    if (!selectionBox) return undefined;
    return {
      position: "absolute",
      left: Math.min(selectionBox.startX, selectionBox.endX),
      top: Math.min(selectionBox.startY, selectionBox.endY),
      width: Math.abs(selectionBox.endX - selectionBox.startX),
      height: Math.abs(selectionBox.endY - selectionBox.startY),
      backgroundColor: "rgba(94, 73, 214, 0.1)",
      border: "2px solid rgba(94, 73, 214, 0.5)",
      borderRadius: "4px",
      pointerEvents: "none",
      zIndex: 50,
    };
  };

  return (
    <div
      ref={containerRef}
      className="relative select-none w-full"
      style={{ minHeight: "800px", minWidth: "1400px" }}
      onMouseDown={handleMouseDown}
    >
      {/* Selection rectangle - rendered at container level */}
      {selectionBox && <div style={getSelectionBoxStyle()} />}

      {/* Content wrapper - fixed width, centered */}
      <div style={{ width: GRID_WIDTH, margin: "0 auto" }}>
        {/* Header - fixed h-8 so content doesn't twitch between states */}
        <div className="flex items-center justify-between mb-6 h-8">
          <p className="text-lg font-semibold text-primary">
            {selectedIds.size > 0
              ? `${selectedIds.size} file${selectedIds.size > 1 ? "s" : ""} selected`
              : "Click or drag to select"}
          </p>
          {selectedIds.size > 0 && (
            <div className="flex items-center gap-1">
              <Button
                variant="secondary"
                size="s"
                showLeftIcon
                leftIcon={
                  <Icon
                    name="trash-2"
                    className="size-4"
                    color={colors.iconPrimary}
                  />
                }
              >
                Delete
              </Button>
              <Button
                variant="secondary"
                size="s"
                showLeftIcon
                leftIcon={
                  <Icon
                    name="arrow-down-to-line"
                    className="size-4"
                    color={colors.iconPrimary}
                  />
                }
              >
                Download
              </Button>
              <Button
                variant="secondary"
                size="s"
                showLeftIcon
                leftIcon={
                  <Icon
                    name="folder-input"
                    className="size-4"
                    color={colors.iconPrimary}
                  />
                }
              >
                Move
              </Button>
              <Button
                variant="primary"
                size="s"
                showLeftIcon
                leftIcon={
                  <Icon name="check" className="size-4" color={colors.white} />
                }
                onClick={() => setSelectedIds(new Set())}
              >
                Done
              </Button>
            </div>
          )}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-4 gap-2">
          {cards.map((card) => (
            <div
              key={card.id}
              ref={(el) => {
                if (el) cardRefs.current.set(card.id, el);
              }}
              data-card="true"
            >
              <Card
                type={card.type}
                title={card.title}
                description={
                  card.type === "file" ? card.description : undefined
                }
                ownerName={card.type === "file" ? card.ownerName : undefined}
                ownerInitials={
                  card.type === "file" ? card.ownerInitials : undefined
                }
                filesCount={
                  card.type === "folder" ? card.filesCount : undefined
                }
                files={card.type === "folder" ? card.files : undefined}
                visibility="private"
                selected={selectedIds.has(card.id)}
                onClick={() => toggleSelection(card.id)}
                onDoubleClick={() => handleDoubleClick(card.id, card.title)}
              />
            </div>
          ))}
        </div>

        {/* Footer hint */}
        <p className="text-xs text-subtle mt-6">
          Click to select/deselect. Drag anywhere for rubber band selection.
          Double click to open.
        </p>
      </div>
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveDemo />,
};
