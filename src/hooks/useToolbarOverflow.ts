import { useState, useEffect, useRef, useCallback, type RefObject } from "react";

/**
 * Toolbar item definition — each button in the toolbar.
 * Items with the same `group` are rendered inside one bordered ToolGroup.
 */
export interface ToolbarItemDef {
  id: string;
  icon: string;
  label: string;
  group: string;
  /** "button" = icon-only tool button, "textStyle" = text dropdown (wider) */
  type: "button" | "textStyle";
  /** Optional keyboard shortcut displayed in tooltip (e.g. "⌘ + Shift + X") */
  shortcut?: string;
}

/** Size-dependent button widths (px) */
const BUTTON_WIDTH = { xs: 24, s: 32 } as const;
/** Approximate width of the "Normal text ▾" dropdown button */
const TEXT_STYLE_WIDTH = { xs: 100, s: 120 } as const;
/** Border around each ToolGroup (1px left + 1px right) */
const GROUP_BORDER = 2;
/** Gap between ToolGroups */
const GROUP_GAP = 4;
/** Toolbar padding (p-2 = 8px each side) */
const TOOLBAR_PADDING = 16;
/** Gap between tools area and right button */
const RIGHT_GAP = 4;

type ToolbarSize = "xs" | "s";

/**
 * Groups items by their `group` field, preserving insertion order.
 */
function groupItems(items: ToolbarItemDef[]): ToolbarItemDef[][] {
  const groups: ToolbarItemDef[][] = [];
  const groupMap = new Map<string, ToolbarItemDef[]>();
  for (const item of items) {
    let arr = groupMap.get(item.group);
    if (!arr) {
      arr = [];
      groupMap.set(item.group, arr);
      groups.push(arr);
    }
    arr.push(item);
  }
  return groups;
}

/**
 * Calculates the pixel width of a single ToolGroup.
 */
function groupWidth(group: ToolbarItemDef[], size: ToolbarSize): number {
  let w = GROUP_BORDER;
  for (const item of group) {
    w += item.type === "textStyle" ? TEXT_STYLE_WIDTH[size] : BUTTON_WIDTH[size];
  }
  return w;
}

export interface UseToolbarOverflowResult {
  /** Ref to attach to the toolbar container (outermost element) */
  containerRef: RefObject<HTMLDivElement | null>;
  /** Groups of items that fit in the visible area */
  visibleGroups: ToolbarItemDef[][];
  /** Flat list of items that overflowed into the "..." menu */
  overflowItems: ToolbarItemDef[];
  /** Whether the overflow "..." button should be shown */
  hasOverflow: boolean;
}

/**
 * useToolbarOverflow — measures toolbar container width via ResizeObserver
 * and determines which tool groups fit vs. which overflow into a "..." menu.
 *
 * @param items - Ordered array of all toolbar items
 * @param size - Current toolbar size ("xs" or "s")
 * @param rightButtonWidth - Measured or estimated width of the right-side button (e.g. "Suggest edits")
 */
export function useToolbarOverflow(
  items: ToolbarItemDef[],
  size: ToolbarSize,
  rightButtonWidth: number = 120
): UseToolbarOverflowResult {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      setContainerWidth(width);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const calculate = useCallback(() => {
    const allGroups = groupItems(items);

    // If no measurement yet, show everything
    if (containerWidth === 0) {
      return {
        visibleGroups: allGroups,
        overflowItems: [] as ToolbarItemDef[],
        hasOverflow: false,
      };
    }

    // Calculate total width needed if all groups are visible
    const totalGroupsWidth = allGroups.reduce(
      (sum, g, i) => sum + groupWidth(g, size) + (i > 0 ? GROUP_GAP : 0),
      0
    );
    const totalNeeded = TOOLBAR_PADDING + totalGroupsWidth + RIGHT_GAP + rightButtonWidth;

    // Everything fits — no overflow
    if (totalNeeded <= containerWidth) {
      return {
        visibleGroups: allGroups,
        overflowItems: [] as ToolbarItemDef[],
        hasOverflow: false,
      };
    }

    // Need overflow: reserve space for the "..." button (same width as a tool button + group border + gap)
    const overflowBtnWidth = BUTTON_WIDTH[size] + GROUP_BORDER + GROUP_GAP;

    // The first group (undo/redo) is always visible
    const pinnedGroup = allGroups[0];
    const pinnedWidth = groupWidth(pinnedGroup, size);

    const availableForGroups =
      containerWidth - TOOLBAR_PADDING - RIGHT_GAP - rightButtonWidth - overflowBtnWidth - pinnedWidth;

    const visibleGroups: ToolbarItemDef[][] = [pinnedGroup];
    let usedWidth = 0;

    for (let i = 1; i < allGroups.length; i++) {
      const gw = groupWidth(allGroups[i], size);
      const gapNeeded = GROUP_GAP;
      if (usedWidth + gapNeeded + gw <= availableForGroups) {
        visibleGroups.push(allGroups[i]);
        usedWidth += gapNeeded + gw;
      } else {
        break;
      }
    }

    // Collect overflow items (all items from groups that didn't fit)
    const visibleCount = visibleGroups.length;
    const overflowItems = allGroups.slice(visibleCount).flat();

    return {
      visibleGroups,
      overflowItems,
      hasOverflow: overflowItems.length > 0,
    };
  }, [items, size, containerWidth, rightButtonWidth]);

  const { visibleGroups, overflowItems, hasOverflow } = calculate();

  return { containerRef, visibleGroups, overflowItems, hasOverflow };
}

export default useToolbarOverflow;
