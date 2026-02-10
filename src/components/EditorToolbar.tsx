import React, { useState, useMemo, useRef, useEffect } from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";
import { Dropdown } from "./Dropdown";
import { Popover } from "./Popover";
import { colors } from "../specs";
import {
  useToolbarOverflow,
  type ToolbarItemDef,
} from "../hooks/useToolbarOverflow";
import type { DropdownItem } from "./Dropdown";

export type EditorToolbarSize = "xs" | "s";
export type EditorToolbarStatus = "editing" | "reviewing";

export interface EditorToolbarProps {
  /** Toolbar size - xs for desktop, s for mobile (easier to tap) */
  size?: EditorToolbarSize;
  /** Toolbar state - editing shows formatting tools, reviewing shows version info */
  status?: EditorToolbarStatus;
  /** Callback when undo is clicked */
  onUndo?: () => void;
  /** Whether undo is disabled */
  undoDisabled?: boolean;
  /** Callback when redo is clicked */
  onRedo?: () => void;
  /** Whether redo is disabled */
  redoDisabled?: boolean;
  /** Callback when text style dropdown is clicked */
  onTextStyle?: () => void;
  /** Callback when bold is clicked */
  onBold?: () => void;
  /** Callback when italic is clicked */
  onItalic?: () => void;
  /** Callback when underline is clicked */
  onUnderline?: () => void;
  /** Callback when strikethrough is clicked */
  onStrikethrough?: () => void;
  /** Callback when bullet list is clicked */
  onList?: () => void;
  /** Callback when ordered list is clicked */
  onOrderedList?: () => void;
  /** Callback when link is clicked */
  onLink?: () => void;
  /** Callback when image is clicked */
  onImage?: () => void;
  /** Callback when table is clicked */
  onTable?: () => void;
  /** Callback when horizontal rule is clicked */
  onHorizontalRule?: () => void;
  /** Callback when quote is clicked */
  onQuote?: () => void;
  /** Callback when mark as smart field is clicked */
  onMarkAsSmartField?: () => void;
  /** Callback when clauses is clicked */
  onClauses?: () => void;
  /** Callback when suggest edits is clicked */
  onSuggestEdits?: () => void;
  /** Callback when back to edit is clicked */
  onBackToEdit?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Sub-components                                                     */
/* ------------------------------------------------------------------ */

/** Tool button with tooltip - uses Button component with icon variant */
const ToolButton: React.FC<{
  icon: string;
  label: string;
  shortcut?: string;
  onClick?: () => void;
  size: EditorToolbarSize;
  isFirst?: boolean;
  disabled?: boolean;
}> = ({ icon, label, shortcut, onClick, size, isFirst = false, disabled = false }) => {
  const buttonSize = size === "xs" ? "xs" : "s";
  const iconSize = size === "xs" ? "size-3" : "size-4";
  const iconColor = disabled ? colors.iconSecondary : colors.iconBlack;
  const tooltipText = shortcut ? `${label}  ${shortcut}` : label;

  return (
    <Tooltip content={tooltipText} type="neutral" position="top" size="s">
      <div className={isFirst ? "" : "border-l border-purple-200"}>
        <Button
          variant="icon"
          size={buttonSize}
          onClick={onClick}
          disabled={disabled}
          leftIcon={<Icon name={icon} className={iconSize} color={iconColor} />}
          className="rounded-none"
        />
      </div>
    </Tooltip>
  );
};

/** Text style dropdown button - uses Button with right icon */
const TextStyleButton: React.FC<{
  onClick?: () => void;
  size: EditorToolbarSize;
}> = ({ onClick, size }) => {
  const buttonSize = size === "xs" ? "xs" : "s";
  const chevronSize = size === "xs" ? "size-3" : "size-4";

  return (
    <Button
      variant="ghost"
      size={buttonSize}
      onClick={onClick}
      showRightIcon
      rightIcon={
        <Icon
          name="chevron-down"
          className={chevronSize}
          color={colors.iconBlack}
        />
      }
      className="rounded-none text-foreground"
    >
      Normal text
    </Button>
  );
};

/** Tool group with border - wraps buttons in a bordered container */
const ToolGroup: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => (
  <div className="flex items-start flex-wrap gap-0 border border-purple-300 rounded">
    {children}
  </div>
);

/* ------------------------------------------------------------------ */
/*  Item definitions                                                   */
/* ------------------------------------------------------------------ */

/** All toolbar items in display order. Callbacks are wired at render time. */
const TOOLBAR_ITEMS: ToolbarItemDef[] = [
  { id: "undo", icon: "undo-2", label: "Undo", group: "undo", type: "button" },
  { id: "redo", icon: "redo-2", label: "Redo", group: "undo", type: "button" },
  { id: "textStyle", icon: "", label: "Normal text", group: "textStyle", type: "textStyle" },
  { id: "bold", icon: "bold", label: "Bold", group: "format", type: "button" },
  { id: "italic", icon: "italic", label: "Italic", group: "format", type: "button" },
  { id: "underline", icon: "underline", label: "Underline", group: "format", type: "button" },
  { id: "strikethrough", icon: "strikethrough", label: "Strikethrough", group: "format", type: "button" },
  { id: "list", icon: "list", label: "Bullet list", group: "list", type: "button" },
  { id: "orderedList", icon: "list-ordered", label: "Numbered list", group: "list", type: "button" },
  { id: "link", icon: "link-2", label: "Insert link", group: "insert", type: "button" },
  { id: "image", icon: "image", label: "Insert image", group: "insert", type: "button" },
  { id: "table", icon: "table", label: "Insert table", group: "insert", type: "button" },
  { id: "horizontalRule", icon: "minus", label: "Horizontal line", group: "insert", type: "button" },
  { id: "quote", icon: "quote", label: "Quote", group: "insert", type: "button" },
  { id: "markAsSmartField", icon: "text-cursor-input", label: "Mark as smart field", shortcut: "⌘ + Shift + X", group: "extra", type: "button" },
  { id: "clauses", icon: "gavel", label: "Clauses", group: "extra", type: "button" },
];

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export const EditorToolbar: React.FC<EditorToolbarProps> = ({
  size = "xs",
  status = "editing",
  onUndo,
  undoDisabled = false,
  onRedo,
  redoDisabled = false,
  onTextStyle,
  onBold,
  onItalic,
  onUnderline,
  onStrikethrough,
  onList,
  onOrderedList,
  onLink,
  onImage,
  onTable,
  onHorizontalRule,
  onQuote,
  onMarkAsSmartField,
  onClauses,
  onSuggestEdits,
  onBackToEdit,
  className = "",
}) => {
  const buttonSize = size === "xs" ? "xs" : "s";

  // Map item IDs to their callbacks and disabled states
  const callbackMap: Record<string, (() => void) | undefined> = useMemo(
    () => ({
      undo: onUndo,
      redo: onRedo,
      textStyle: onTextStyle,
      bold: onBold,
      italic: onItalic,
      underline: onUnderline,
      strikethrough: onStrikethrough,
      list: onList,
      orderedList: onOrderedList,
      link: onLink,
      image: onImage,
      table: onTable,
      horizontalRule: onHorizontalRule,
      quote: onQuote,
      markAsSmartField: onMarkAsSmartField,
      clauses: onClauses,
    }),
    [
      onUndo, onRedo, onTextStyle, onBold, onItalic, onUnderline,
      onStrikethrough, onList, onOrderedList, onLink, onImage,
      onTable, onHorizontalRule, onQuote, onMarkAsSmartField, onClauses,
    ]
  );

  const disabledMap: Record<string, boolean> = useMemo(
    () => ({
      undo: undoDisabled,
      redo: redoDisabled,
    }),
    [undoDisabled, redoDisabled]
  );

  // Measure the right button width
  const rightButtonRef = useRef<HTMLDivElement>(null);
  const [rightButtonWidth, setRightButtonWidth] = useState(120);
  useEffect(() => {
    const el = rightButtonRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setRightButtonWidth(entries[0]?.contentRect.width ?? 120);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Overflow calculation
  const { containerRef, visibleGroups, overflowItems, hasOverflow } =
    useToolbarOverflow(TOOLBAR_ITEMS, size, rightButtonWidth);

  // Overflow menu state
  const [overflowOpen, setOverflowOpen] = useState(false);

  // Build dropdown items for overflow menu
  const dropdownItems: DropdownItem[] = useMemo(
    () =>
      overflowItems
        .filter((item) => item.type !== "textStyle")
        .map((item) => ({
          id: item.id,
          label: item.label,
          icon: item.icon,
          onClick: () => {
            callbackMap[item.id]?.();
            setOverflowOpen(false);
          },
          disabled: disabledMap[item.id] ?? false,
        })),
    [overflowItems, callbackMap, disabledMap]
  );

  /* ---- Reviewing state ---- */
  if (status === "reviewing") {
    const containerHeight = size === "xs" ? "h-10" : "h-12";
    const reviewingTextSize = size === "xs" ? "text-xs" : "text-sm";
    const reviewingIconSize = size === "xs" ? "size-4" : "size-6";

    return (
      <div
        className={`
          p-2 rounded-lg
          flex items-center justify-between
          ${containerHeight}
          ${className}
        `}
      >
        <div className="flex items-center gap-2">
          <Icon
            name="history"
            className={reviewingIconSize}
            color={colors.iconBlack}
          />
          <span className={`${reviewingTextSize} text-foreground`}>
            Reviewing version history
          </span>
        </div>
        <Button
          variant="secondary"
          size={buttonSize}
          showLeftIcon
          leftIconName="x"
          onClick={onBackToEdit}
        >
          Back to edit
        </Button>
      </div>
    );
  }

  /* ---- Editing state ---- */

  /** Renders a single ToolGroup from an array of item defs */
  const renderGroup = (group: ToolbarItemDef[], groupIndex: number) => (
    <ToolGroup key={group[0]?.group ?? groupIndex}>
      {group.map((item, i) => {
        if (item.type === "textStyle") {
          return (
            <TextStyleButton
              key={item.id}
              onClick={callbackMap[item.id]}
              size={size}
            />
          );
        }
        return (
          <ToolButton
            key={item.id}
            icon={item.icon}
            label={item.label}
            shortcut={item.shortcut}
            onClick={callbackMap[item.id]}
            size={size}
            isFirst={i === 0}
            disabled={disabledMap[item.id] ?? false}
          />
        );
      })}
    </ToolGroup>
  );

  return (
    <div
      ref={containerRef}
      className={`
        p-2 rounded-lg
        flex items-center justify-between
        ${className}
      `}
    >
      {/* Left: Formatting tools - 4px gap between groups */}
      <div className="flex items-center gap-1">
        {visibleGroups.map(renderGroup)}

        {/* Overflow "..." button */}
        {hasOverflow && (
          <Popover
            content={
              <Dropdown
                items={dropdownItems}
                showIcons
                isOpen={overflowOpen}
              />
            }
            position="bottom"
            trigger="click"
            isOpen={overflowOpen}
            onOpenChange={setOverflowOpen}
            gap={2}
          >
            <ToolGroup>
              <ToolButton
                icon="ellipsis"
                label="More tools"
                size={size}
                isFirst
              />
            </ToolGroup>
          </Popover>
        )}
      </div>

      {/* Right: Suggest edits button */}
      <div ref={rightButtonRef} className="shrink-0 ml-1">
        <Button
          variant="outline"
          size={buttonSize}
          showLeftIcon
          leftIconName="pencil-line"
          onClick={onSuggestEdits}
        >
          Suggest edits
        </Button>
      </div>
    </div>
  );
};

export default EditorToolbar;
