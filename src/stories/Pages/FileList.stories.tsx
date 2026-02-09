import type { Meta, StoryObj } from "@storybook/react";
import React, { useState, useRef, useCallback, useEffect } from "react";
import { PageShell } from "../../components/PageShell";
import {
  PageNav,
  TableListItem,
  Card,
  Button,
  ListHeader,
  useContainerCols,
} from "../../components";
import type { CheckboxStatus } from "../../components/Checkbox";
import type { SortDirection } from "../../components/TableListItem";
import type { ListHeaderEditLayout } from "../../components/ListHeader";

const meta: Meta<typeof PageShell> = {
  title: "Pages/File List",
  component: PageShell,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof PageShell>;

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface SelectionBox {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
}

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

const accounts = [
  { id: "1", name: "Alex Carter", type: "Personal Account", initials: "AC" },
  { id: "2", name: "Whisk", type: "Organization", initials: "WH" },
];

const navItems = [
  { id: "recent", label: "Recent" },
  { id: "your-files", label: "Your files" },
  { id: "shared", label: "Shared with you" },
  { id: "esign", label: "eSign inbox" },
];

const fileRows = [
  {
    iconName: "folder",
    title: "Employment Agreements",
    subtitle: "8 files in folder",
    metaValues: ["Folder", "1 minute ago", "3 minutes ago", "3 days ago"],
    starred: true,
  },
  {
    iconName: "folder",
    title: "Correspondance",
    subtitle: "8 files in folder",
    metaValues: ["Folder", "1 minute ago", "5 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Contract Template",
    subtitle: "Template for client service contracts",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "10 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Contract Template",
    subtitle: "Template for client service contracts",
    visibility: "public" as const,
    starCount: "17K",
    spam: true,
    metaValues: ["Folder", "1 minute ago", "10 minutes ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Service Design Agreement",
    subtitle: "Contract for design and delivery",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 hours ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Client Engagement Framework",
    subtitle: "Terms for ongoing client relationships",
    visibility: "public" as const,
    starCount: "17K",
    metaValues: ["Folder", "1 minute ago", "3 hours ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Non-poaching agreement",
    subtitle: "Prohibits hiring of competitor employees",
    visibility: "private" as const,
    metaValues: ["Folder", "1 minute ago", "1 day ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Coaching agreement",
    subtitle: "Terms for coaching services delivery",
    visibility: "private" as const,
    metaValues: ["Folder", "1 minute ago", "2 days ago", "3 days ago"],
  },
  {
    iconName: "file-text",
    title: "Wedding Photography Contract",
    subtitle: "Contract for wedding photography services...",
    metaValues: ["Folder", "1 minute ago", "3 days ago", "3 days ago"],
  },
  {
    iconName: "folder",
    title: "Real Estate Documents",
    subtitle: "12 files in folder",
    metaValues: ["Folder", "2 minutes ago", "1 hour ago", "5 days ago"],
    starred: true,
  },
  {
    iconName: "file-text",
    title: "Freelance Retainer Agreement",
    subtitle: "Ongoing retainer terms for freelancers",
    visibility: "private" as const,
    metaValues: ["Document", "5 minutes ago", "2 hours ago", "1 week ago"],
  },
  {
    iconName: "file-text",
    title: "Intellectual Property Assignment",
    subtitle: "Transfer of IP rights between parties",
    visibility: "public" as const,
    starCount: "4.2K",
    metaValues: ["Document", "10 minutes ago", "5 hours ago", "2 weeks ago"],
  },
  {
    iconName: "file-text",
    title: "Data Processing Agreement",
    subtitle: "GDPR-compliant data processing terms",
    visibility: "public" as const,
    starCount: "8.9K",
    metaValues: ["Document", "15 minutes ago", "1 day ago", "3 weeks ago"],
  },
  {
    iconName: "folder",
    title: "Tax Filings 2025",
    subtitle: "4 files in folder",
    metaValues: ["Folder", "30 minutes ago", "2 days ago", "1 month ago"],
  },
  {
    iconName: "file-text",
    title: "Software Licence Agreement",
    subtitle: "End-user licence for SaaS products",
    visibility: "shared" as const,
    metaValues: ["Document", "1 hour ago", "3 days ago", "2 months ago"],
  },
];

/** Mobile nav dropdown items — mirrors navItems with selected state */
const mobileNavItems = (activeId: string) =>
  navItems.map((item) => ({
    id: item.id,
    label: item.label,
    selected: item.id === activeId,
  }));

const cardData = [
  {
    type: "folder" as const,
    title: "Service Contract Template",
    filesCount: 8,
    files: [
      { id: "1", name: "Service Design Agreement" },
      { id: "2", name: "Client Engagement Contract" },
      { id: "3", name: "Non-Disclosure Agreement" },
      { id: "4", name: "Consulting Services Agreement" },
      { id: "5", name: "Consulting Services Agreement" },
      { id: "6", name: "Non-Disclosure Agreement" },
    ],
  },
  {
    type: "file" as const,
    title: "Design Services Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Mutual NDA",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Client Engagement Framework",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Project Collaboration Contract",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Blake Logan",
    ownerInitials: "BL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Design Services Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "John Titor",
    ownerInitials: "JT",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Creative Partnership Agreement",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "Service Contract Template",
    description:
      "Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "private" as const,
  },
  {
    type: "folder" as const,
    title: "Real Estate Documents",
    filesCount: 12,
    files: [
      { id: "r1", name: "Lease Agreement" },
      { id: "r2", name: "Property Inspection Report" },
      { id: "r3", name: "Title Deed Transfer" },
      { id: "r4", name: "Mortgage Application" },
      { id: "r5", name: "Tenant Screening Form" },
    ],
  },
  {
    type: "file" as const,
    title: "Freelance Retainer Agreement",
    description:
      "Standard retainer terms for ongoing freelance engagements with monthly billing cycles.",
    ownerName: "Sam Rivera",
    ownerInitials: "SR",
    visibility: "private" as const,
  },
  {
    type: "file" as const,
    title: "IP Assignment Agreement",
    description:
      "Transfers intellectual property rights from contractor to company upon project completion.",
    ownerName: "Alex Carter",
    ownerInitials: "AC",
    visibility: "public" as const,
  },
  {
    type: "file" as const,
    title: "Data Processing Agreement",
    description:
      "GDPR-compliant terms for processing personal data on behalf of data controllers.",
    ownerName: "Open Legal Library",
    ownerInitials: "OL",
    visibility: "public" as const,
  },
  {
    type: "file" as const,
    title: "Software Licence Agreement",
    description:
      "End-user licence for SaaS products covering usage rights, limitations, and support terms.",
    ownerName: "Blake Logan",
    ownerInitials: "BL",
    visibility: "shared" as const,
  },
];

/* ------------------------------------------------------------------ */
/*  Browse templates FAB                                               */
/* ------------------------------------------------------------------ */

const BrowseTemplatesFab = () => (
  <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
    <Button
      variant="primary"
      size="l"
      showLeftIcon
      leftIconName="layout-grid"
    >
      Browse templates
    </Button>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Selection rectangle style helper                                   */
/* ------------------------------------------------------------------ */

/**
 * Renders the rubber band rectangle using `position: fixed` so it works
 * correctly regardless of scroll position. The selection box coordinates
 * are stored as raw viewport values (clientX / clientY), which map 1-to-1
 * with `position: fixed` and `getBoundingClientRect()` — no scroll offset
 * math required.
 */
const getSelectionBoxStyle = (
  box: SelectionBox | null
): React.CSSProperties | undefined => {
  if (!box) return undefined;
  return {
    position: "fixed",
    left: Math.min(box.startX, box.endX),
    top: Math.min(box.startY, box.endY),
    width: Math.abs(box.endX - box.startX),
    height: Math.abs(box.endY - box.startY),
    backgroundColor: "rgba(94, 73, 214, 0.1)",
    border: "2px solid rgba(94, 73, 214, 0.5)",
    borderRadius: "4px",
    pointerEvents: "none" as const,
    zIndex: 50,
  };
};

/* ------------------------------------------------------------------ */
/*  Edit mode actions for ListHeader                                   */
/* ------------------------------------------------------------------ */

const editActions = [
  { icon: "trash-2", label: "Delete" },
  { icon: "arrow-down-to-line", label: "Download" },
  { icon: "folder-input", label: "Move" },
];

/* ------------------------------------------------------------------ */
/*  Interactive File List component                                    */
/* ------------------------------------------------------------------ */

const DOUBLE_CLICK_THRESHOLD = 250;

const InteractiveFileList = ({
  editLayout = "replace",
}: {
  editLayout?: ListHeaderEditLayout;
}) => {
  // ── View state ──
  const [view, setView] = useState<"list" | "grid">("list");

  // ── Selection state ──
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
  const [starredItems, setStarredItems] = useState<Set<number>>(
    new Set(
      fileRows
        .map((r, i) => (r.starred ? i : -1))
        .filter((i) => i >= 0)
    )
  );

  // ── Sort state (visual only) ──
  const [sortColumn, setSortColumn] = useState<string>("Updated");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  // ── Rubber band state ──
  const [selectionBox, setSelectionBox] = useState<SelectionBox | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<Map<number, HTMLDivElement>>(new Map());
  const cardRefs = useRef<Map<number, HTMLDivElement>>(new Map());

  // Drag threshold — only commit to rubber band after moving ≥5px from origin.
  // This separates clicks (mousedown → mouseup with minimal movement) from
  // drags (mousedown → significant movement → mouseup).
  const DRAG_THRESHOLD = 5;
  const dragOrigin = useRef<{ x: number; y: number } | null>(null);
  const dragCommitted = useRef(false);

  // ── Double-click debounce for TableListItem (Card has built-in) ──
  const lastClickTime = useRef<number>(0);
  const clickTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Responsive cols ──
  // Pass our containerRef directly so useContainerCols observes the same element.
  const { cols } = useContainerCols(containerRef);

  // ── Compact cards flag — true when container < 592px (1–2 card cols) ──
  const [compactCards, setCompactCards] = useState(false);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setCompactCards(width < 592);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // ── Derived state ──
  const itemCount = view === "list" ? fileRows.length : cardData.length;
  const someSelected = selectedItems.size > 0;
  const allSelected = selectedItems.size === itemCount;
  const selectAllStatus: CheckboxStatus = allSelected
    ? "on"
    : someSelected
      ? "semi"
      : "off";

  // ── Clear selection on view switch ──
  const handleViewToggle = useCallback(() => {
    setView((prev) => (prev === "list" ? "grid" : "list"));
    setSelectedItems(new Set());
  }, []);

  const listHeaderActions = [
    { icon: "search" },
    { icon: "arrow-down-wide-narrow" },
    {
      icon: view === "list" ? "layout-grid" : "layout-list",
      onClick: handleViewToggle,
    },
    { icon: "plus" },
  ];

  // ── Selection helpers ──
  const clearSelection = useCallback(() => setSelectedItems(new Set()), []);

  const toggleSelect = useCallback((index: number) => {
    setSelectedItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  const toggleSelectAll = useCallback(() => {
    if (allSelected) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(Array.from({ length: itemCount }, (_, i) => i)));
    }
  }, [allSelected, itemCount]);

  const toggleStar = useCallback((index: number) => {
    setStarredItems((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }, []);

  // ── Table row click with 250ms debounce (mirrors Card.tsx pattern) ──
  const handleRowClick = useCallback(
    (index: number) => {
      const now = Date.now();
      const timeSince = now - lastClickTime.current;

      if (timeSince < DOUBLE_CLICK_THRESHOLD && timeSince > 0) {
        // Double click — cancel pending single click
        if (clickTimeout.current) {
          clearTimeout(clickTimeout.current);
          clickTimeout.current = null;
        }
        lastClickTime.current = 0;
        alert(`Opening: ${fileRows[index].title}`);
      } else {
        // Single click — delay to allow double-click detection
        lastClickTime.current = now;
        if (clickTimeout.current) clearTimeout(clickTimeout.current);
        clickTimeout.current = setTimeout(() => {
          toggleSelect(index);
          clickTimeout.current = null;
        }, DOUBLE_CLICK_THRESHOLD);
      }
    },
    [toggleSelect]
  );

  // Card click/double-click handlers (Card has built-in 250ms debounce)
  const handleCardClick = useCallback(
    (index: number) => toggleSelect(index),
    [toggleSelect]
  );

  const handleCardDoubleClick = useCallback((index: number) => {
    alert(`Opening: ${cardData[index].title}`);
  }, []);

  const handleSortChange = useCallback(
    (column: string, direction: SortDirection) => {
      setSortColumn(column);
      setSortDirection(direction);
    },
    []
  );

  // ── Rubber band selection ──
  //
  // All coordinates are in **viewport space** (clientX / clientY).
  // The selection rectangle uses `position: fixed`, and item rects come
  // from `getBoundingClientRect()` — both return viewport coords, so
  // everything is in the same coordinate space with zero scroll math.

  const getItemsInSelection = useCallback(
    (box: SelectionBox): Set<number> => {
      const left = Math.min(box.startX, box.endX);
      const right = Math.max(box.startX, box.endX);
      const top = Math.min(box.startY, box.endY);
      const bottom = Math.max(box.startY, box.endY);

      const refs = view === "list" ? rowRefs : cardRefs;
      const selected = new Set<number>();

      refs.current.forEach((element, index) => {
        if (!element) return;
        const r = element.getBoundingClientRect();
        const intersects = !(
          r.right < left || r.left > right || r.bottom < top || r.top > bottom
        );
        if (intersects) selected.add(index);
      });

      return selected;
    },
    [view]
  );

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    // Skip rubber band on touch — taps handle selection via onClick
    if (e.pointerType === "touch") return;

    // Only block interactive elements — allow drag from any empty space
    const target = e.target as HTMLElement;
    if (
      target.closest("button") ||
      target.closest("a") ||
      target.closest("input") ||
      target.closest("[role='checkbox']")
    ) {
      return;
    }

    // Store origin but do NOT start dragging yet — wait until mouse
    // moves beyond DRAG_THRESHOLD so single-clicks work normally.
    dragOrigin.current = { x: e.clientX, y: e.clientY };
    dragCommitted.current = false;
  }, []);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      // Nothing to do if no mousedown origin
      if (!dragOrigin.current) return;

      const { x: ox, y: oy } = dragOrigin.current;

      // Before committing: check if we've moved beyond the threshold
      if (!dragCommitted.current) {
        const dx = e.clientX - ox;
        const dy = e.clientY - oy;
        if (Math.abs(dx) < DRAG_THRESHOLD && Math.abs(dy) < DRAG_THRESHOLD) {
          return; // Not far enough yet — keep waiting
        }
        // Commit to rubber band drag
        dragCommitted.current = true;
        setSelectedItems(new Set()); // Clear selection only when drag actually starts
        setSelectionBox({
          startX: ox,
          startY: oy,
          endX: e.clientX,
          endY: e.clientY,
        });
        return;
      }

      // Already dragging — update selection box
      const newBox: SelectionBox = {
        startX: ox,
        startY: oy,
        endX: e.clientX,
        endY: e.clientY,
      };
      setSelectionBox(newBox);
      setSelectedItems(getItemsInSelection(newBox));
    },
    [getItemsInSelection]
  );

  const handleMouseUp = useCallback(() => {
    dragOrigin.current = null;
    dragCommitted.current = false;
    setSelectionBox(null);
  }, []);

  // Attach mousemove/mouseup at document level whenever a mousedown origin exists.
  // We need these listeners even before drag commits (to detect the threshold).
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  // ── Render ──

  return (
    <PageShell
      title="Files"
      initialSidebarCollapsed
      showHeaderStroke
      mobileNavItems={mobileNavItems("recent")}
      mobileNavActiveLabel="Recent"
    >
      {/* Outer drag target — captures mousedown from padding/empty areas too.
          Uses negative margins + matching padding to fill the parent padding
          (px-6 md:px-[84px] pt-8 pb-16 from PageShell) so drags can start
          from anywhere on the visible page. */}
      <div
        className={`-mx-6 md:-mx-[84px] -mt-8 -mb-16 px-6 md:px-[84px] pt-8 pb-16 min-h-full ${selectionBox ? "select-none" : ""}`}
        onPointerDown={handlePointerDown}
      >
        <div className="flex gap-6">
          <PageNav
            activeAccount={accounts[0]}
            accounts={accounts}
            items={navItems}
            activeItemId="recent"
            className="hidden md:flex"
          />
          <div
            ref={containerRef}
            className="relative flex-1 min-w-0 @container"
          >
          {/* Rubber band rectangle — fixed position, viewport coords */}
          {selectionBox && <div style={getSelectionBoxStyle(selectionBox)} />}

          {/* ListHeader — switches between default and edit mode */}
          <ListHeader
            mode={someSelected ? "edit" : "default"}
            editLayout={editLayout}
            label={
              someSelected
                ? `${selectedItems.size} file${selectedItems.size > 1 ? "s" : ""} selected`
                : "234 files"
            }
            selectedCount={selectedItems.size}
            onClose={clearSelection}
            actions={
              someSelected && (editLayout === "inline" || editLayout === "merged")
                ? listHeaderActions.filter((a) => a.icon !== "plus")
                : listHeaderActions
            }
            editActions={editActions}
          />

          {/* List view */}
          {view === "list" && (
            <div className="mt-4 flex flex-col gap-2">
              {cols > 0 && (
                <TableListItem
                  type="header"
                  cols={cols}
                  headerLabels={[
                    "Name",
                    "Type",
                    "Last viewed",
                    "Updated",
                    "Created",
                  ]}
                  sortColumn={sortColumn}
                  sortDirection={sortDirection}
                  onSortChange={handleSortChange}
                  selectMode={someSelected}
                  selectStatus={selectAllStatus}
                  onSelectAllClick={toggleSelectAll}
                />
              )}
              {fileRows.map((row, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) rowRefs.current.set(i, el);
                  }}
                  data-row="true"
                >
                  <TableListItem
                    type="item"
                    cols={cols}
                    iconName={row.iconName}
                    title={row.title}
                    subtitle={row.subtitle}
                    visibility={row.visibility}
                    starCount={row.starCount}
                    spam={row.spam}
                    metaValues={row.metaValues}
                    starred={starredItems.has(i)}
                    selected={selectedItems.has(i)}
                    onClick={() => handleRowClick(i)}
                    onStarClick={() => toggleStar(i)}
                  />
                </div>
              ))}
            </div>
          )}

          {/* Grid view */}
          {view === "grid" && (
            <div className="mt-4 grid grid-cols-1 gap-2 @sm:grid-cols-2 @[592px]:grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] @2xl:gap-3">
              {cardData.map((card, i) => (
                <div
                  key={i}
                  ref={(el) => {
                    if (el) cardRefs.current.set(i, el);
                  }}
                  data-card="true"
                >
                  <Card
                    type={card.type}
                    title={card.title}
                    description={card.description}
                    ownerName={card.ownerName}
                    ownerInitials={card.ownerInitials}
                    visibility={card.visibility}
                    filesCount={card.filesCount}
                    files={card.files}
                    compact={compactCards}
                    selected={selectedItems.has(i)}
                    onClick={() => handleCardClick(i)}
                    onDoubleClick={() => handleCardDoubleClick(i)}
                  />
                </div>
              ))}
            </div>
          )}

          {!someSelected && <BrowseTemplatesFab />}
          </div>
        </div>
      </div>
    </PageShell>
  );
};

/* ------------------------------------------------------------------ */
/*  Story: Default (interactive)                                       */
/* ------------------------------------------------------------------ */

/**
 * Interactive file list page with view switching and selection.
 *
 * **View switching:** Click the grid icon to toggle between list and card views.
 *
 * **Selection:** Single-click a row/card to select (250ms debounce).
 * Double-click to open. Rubber band drag to multi-select.
 *
 * **Edit mode:** When items are selected, ListHeader shows count + action
 * buttons (Delete, Download, Move, Done). Table header shows select-all checkbox.
 */
export const Default: Story = {
  render: () => <InteractiveFileList />,
};

/* ------------------------------------------------------------------ */
/*  Story: Variant B — inline edit actions on the left                  */
/* ------------------------------------------------------------------ */

/**
 * Edit actions appear next to the label on the left (icon-only on narrow
 * screens, labelled on wide). Original right-side actions stay put.
 */
export const VariantB: Story = {
  render: () => <InteractiveFileList editLayout="inline" />,
};

/* ------------------------------------------------------------------ */
/*  Story: Variant C — all icon buttons merged on the right             */
/* ------------------------------------------------------------------ */

/**
 * All buttons on the right as icon-only: original actions (secondary bg)
 * followed by edit actions (primary bg) with tooltips. Label stays visible.
 */
export const VariantC: Story = {
  render: () => <InteractiveFileList editLayout="merged" />,
};
