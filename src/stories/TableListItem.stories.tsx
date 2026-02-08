import React, { useState, useRef, useCallback, useEffect } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "../specs";
import { TableListItem } from "../components/TableListItem";
import { Button } from "../components/Button";
import { Icon } from "../components/Icon";
import type { CheckboxStatus } from "../components/Checkbox";
import type { SortDirection } from "../components/TableListItem";

const meta: Meta<typeof TableListItem> = {
  title: "Components/Data Display/TableListItem",
  component: TableListItem,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["item", "header", "skeleton", "drag-and-drop"],
    },
    cols: {
      control: "select",
      options: [0, 2, 4, 6],
    },
    iconName: { control: "text" },
    title: { control: "text" },
    subtitle: { control: "text" },
    visibility: {
      control: "select",
      options: [undefined, "private", "public", "shared", "organization"],
    },
    starCount: { control: "text" },
    spam: { control: "boolean" },
    selected: { control: "boolean" },
    starred: { control: "boolean" },
    selectMode: { control: "boolean" },
    selectStatus: {
      control: "select",
      options: ["off", "on", "semi"],
    },
    sortColumn: { control: "text" },
    sortDirection: {
      control: "select",
      options: [undefined, "asc", "desc"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// ─── Default (controllable via Storybook args panel) ───

export const Default: Story = {
  args: {
    type: "item",
    cols: 6,
    iconName: "folder",
    title: "Employment Agreements",
    subtitle: "8 files in folder",
    visibility: "public",
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 minutes ago", "3 days ago"],
  },
};

// ─── Fixed content width for composite stories ───
const GRID_WIDTH = 1080;

// ─── Rubber band selection helpers (same pattern as Card.stories Interactive) ───

interface SelectionBox {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

interface RowPosition {
  index: number;
  rect: DOMRect;
}

// ─── Interactive ───
// Exact same container tree as Card.stories Interactive:
// bg-page-background p-8 → outer relative → selection rect → inner fixed-width → header bar → content → footer

export const Interactive: Story = {
  parameters: { layout: "centered" },
  render: () => {
    const InteractiveTable = () => {
      const [starredItems, setStarredItems] = useState<Set<number>>(
        new Set([1])
      );
      const [selectedItems, setSelectedItems] = useState<Set<number>>(
        new Set()
      );
      const [sortColumn, setSortColumn] = useState<string>("Name");
      const [sortDirection, setSortDirection] = useState<SortDirection>("desc");
      const [isDragging, setIsDragging] = useState(false);
      const [selectionBox, setSelectionBox] = useState<SelectionBox | null>(null);
      const containerRef = useRef<HTMLDivElement>(null);
      const rowRefs = useRef<Map<number, HTMLDivElement>>(new Map());

      const items = [
        {
          iconName: "folder",
          title: "Employment Agreements",
          subtitle: "8 files in folder",
          visibility: "public" as const,
          starCount: "17K",
          metaValues: [
            "Folder",
            "1 minute ago",
            "3 minutes ago",
            "3 days ago",
          ],
        },
        {
          iconName: "file-text",
          title: "Service Agreement Draft",
          subtitle: "Last edited 2 hours ago",
          visibility: "shared" as const,
          metaValues: [
            "Document",
            "5 minutes ago",
            "2 hours ago",
            "1 week ago",
          ],
        },
        {
          iconName: "file-text",
          title: "NDA Template",
          subtitle: "Created last week",
          visibility: "private" as const,
          metaValues: [
            "Template",
            "1 day ago",
            "3 days ago",
            "2 weeks ago",
          ],
        },
        {
          iconName: "folder",
          title: "Client Documents",
          subtitle: "12 files in folder",
          visibility: "organization" as const,
          metaValues: [
            "Folder",
            "10 minutes ago",
            "1 hour ago",
            "1 month ago",
          ],
        },
        {
          iconName: "file-text",
          title: "Suspicious Document",
          subtitle: "Unknown sender",
          spam: true,
          metaValues: [
            "Document",
            "2 minutes ago",
            "5 minutes ago",
            "Today",
          ],
        },
      ];

      const allSelected = selectedItems.size === items.length;
      const someSelected = selectedItems.size > 0;
      const selectAllStatus: CheckboxStatus = allSelected
        ? "on"
        : someSelected
          ? "semi"
          : "off";

      // ── Rubber band — identical to Card.stories Interactive ──

      const getRowPositions = useCallback((): RowPosition[] => {
        const positions: RowPosition[] = [];
        rowRefs.current.forEach((element, index) => {
          if (element) {
            positions.push({ index, rect: element.getBoundingClientRect() });
          }
        });
        return positions;
      }, []);

      const getRowsInSelection = useCallback(
        (box: SelectionBox): Set<number> => {
          const containerRect = containerRef.current?.getBoundingClientRect();
          if (!containerRect) return new Set();

          const selLeft = Math.min(box.startX, box.endX) + containerRect.left;
          const selRight = Math.max(box.startX, box.endX) + containerRect.left;
          const selTop = Math.min(box.startY, box.endY) + containerRect.top;
          const selBottom = Math.max(box.startY, box.endY) + containerRect.top;

          const selected = new Set<number>();
          const positions = getRowPositions();

          positions.forEach(({ index, rect }) => {
            const intersects = !(
              rect.right < selLeft ||
              rect.left > selRight ||
              rect.bottom < selTop ||
              rect.top > selBottom
            );
            if (intersects) {
              selected.add(index);
            }
          });

          return selected;
        },
        [getRowPositions],
      );

      const handleMouseDown = useCallback((e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.closest('[data-row="true"]') || target.closest("button")) {
          return;
        }

        e.preventDefault();
        const containerRect = containerRef.current?.getBoundingClientRect();
        if (containerRect) {
          const x = e.clientX - containerRect.left;
          const y = e.clientY - containerRect.top;
          setIsDragging(true);
          setSelectionBox({ startX: x, startY: y, endX: x, endY: y });
          setSelectedItems(new Set());
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
            setSelectedItems(getRowsInSelection(newBox));
          }
        },
        [isDragging, selectionBox, getRowsInSelection],
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

      // ── Row interaction ──

      const toggleSelectAll = () => {
        if (allSelected) {
          setSelectedItems(new Set());
        } else {
          setSelectedItems(new Set(items.map((_, i) => i)));
        }
      };

      const toggleSelect = (index: number) => {
        setSelectedItems((prev) => {
          const next = new Set(prev);
          if (next.has(index)) next.delete(index);
          else next.add(index);
          return next;
        });
      };

      const toggleStar = (index: number) => {
        setStarredItems((prev) => {
          const next = new Set(prev);
          if (next.has(index)) next.delete(index);
          else next.add(index);
          return next;
        });
      };

      const handleDoubleClick = (title: string) => {
        alert(`Opening: ${title}`);
      };

      const handleSortChange = (column: string, direction: SortDirection) => {
        setSortColumn(column);
        setSortDirection(direction);
      };

      // ── Render — exact same tree as Card.stories Interactive ──

      return (
        <div className="bg-page-background p-8">
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
                {selectedItems.size > 0
                  ? `${selectedItems.size} file${selectedItems.size > 1 ? "s" : ""} selected`
                  : "Click or drag to select"}
              </p>
              {selectedItems.size > 0 && (
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
                    onClick={() => setSelectedItems(new Set())}
                  >
                    Done
                  </Button>
                </div>
              )}
            </div>

            {/* Table list (replaces Card grid — same position in tree) */}
            <div className="flex flex-col gap-1 w-full">
              <TableListItem
                type="header"
                cols={6}
                selectMode={someSelected}
                selectStatus={selectAllStatus}
                onSelectAllClick={toggleSelectAll}
                sortColumn={sortColumn}
                sortDirection={sortDirection}
                onSortChange={handleSortChange}
              />
              {items.map((item, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) rowRefs.current.set(i, el);
                  }}
                  data-row="true"
                >
                  <TableListItem
                    type="item"
                    cols={6}
                    {...item}
                    selected={selectedItems.has(i)}
                    starred={starredItems.has(i)}
                    onClick={() => toggleSelect(i)}
                    onDoubleClick={() => handleDoubleClick(item.title)}
                    onStarClick={() => toggleStar(i)}
                    onMenuClick={() => alert(`Menu clicked for: ${item.title}`)}
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
        </div>
      );
    };

    return <InteractiveTable />;
  },
};

// ─── All types overview ───

export const AllTypes: Story = {
  render: () => (
    <div style={{ width: GRID_WIDTH }}>
      <div className="flex flex-col gap-2 w-full">
        <p className="text-sm font-semibold text-foreground mb-1">Skeleton</p>
        <TableListItem type="skeleton" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Drag & Drop placeholder
        </p>
        <TableListItem type="drag-and-drop" />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (6 cols)
        </p>
        <TableListItem type="header" cols={6} />
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (4 cols)
        </p>
        <TableListItem type="header" cols={4} />
        <TableListItem
          type="item"
          cols={4}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["3 minutes ago", "3 days ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Header + Items (2 cols)
        </p>
        <TableListItem type="header" cols={2} />
        <TableListItem
          type="item"
          cols={2}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          visibility="public"
          starCount="17K"
          metaValues={["3 minutes ago"]}
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Selected item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
          selected
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Starred item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="folder"
          title="Employment Agreements"
          subtitle="8 files in folder"
          metaValues={["Folder", "1 minute ago", "3 minutes ago", "3 days ago"]}
          starred
        />

        <p className="text-sm font-semibold text-foreground mt-4 mb-1">
          Spam item
        </p>
        <TableListItem
          type="item"
          cols={6}
          iconName="file-text"
          title="Suspicious Document"
          subtitle="Unknown sender"
          spam
          metaValues={["Document", "2 min ago", "5 min ago", "Today"]}
        />
      </div>
    </div>
  ),
};
