import React from "react";
import { Icon } from "./Icon";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";
import { colors } from "../specs";

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
  /** Callback when code is clicked */
  onCode?: () => void;
  /** Callback when highlight dropdown is clicked */
  onHighlight?: () => void;
  /** Callback when suggest edits is clicked */
  onSuggestEdits?: () => void;
  /** Callback when back to edit is clicked */
  onBackToEdit?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/** Tool button with tooltip - uses Button component with icon variant */
const ToolButton: React.FC<{
  icon: string;
  label: string;
  onClick?: () => void;
  size: EditorToolbarSize;
  isFirst?: boolean;
  disabled?: boolean;
}> = ({ icon, label, onClick, size, isFirst = false, disabled = false }) => {
  // Map toolbar size to button size: xs -> xs, s -> s
  const buttonSize = size === "xs" ? "xs" : "s";
  // Icon size matches button.specs: xs=12px, s=16px (iconOnlyIconSize)
  const iconSize = size === "xs" ? "size-3" : "size-4";
  // Icon color: black when enabled, secondary (grey) when disabled
  const iconColor = disabled ? colors.iconSecondary : colors.iconBlack;

  return (
    <Tooltip content={label} type="purple" position="bottom" size="s">
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

/** Tool button with dropdown chevron - uses Button with both icons */
const ToolButtonWithDropdown: React.FC<{
  icon: string;
  label: string;
  onClick?: () => void;
  size: EditorToolbarSize;
  isFirst?: boolean;
}> = ({ icon, label, onClick, size, isFirst = false }) => {
  // Container height: xs=24px, s=32px
  const buttonHeight = size === "xs" ? "h-6" : "h-8";
  // Icon size matches button.specs: xs=12px, s=16px
  const iconSize = size === "xs" ? "size-3" : "size-4";
  // Chevron: xs=10px, s=12px (slightly smaller than main icon)
  const chevronSize = size === "xs" ? "size-2.5" : "size-3";

  return (
    <Tooltip content={label} type="purple" position="bottom" size="s">
      <button
        onClick={onClick}
        className={`
          ${buttonHeight} flex items-center justify-center gap-0 px-1
          hover:bg-secondary/30 transition-colors rounded-none
          ${isFirst ? "" : "border-l border-purple-200"}
        `}
      >
        <Icon name={icon} className={iconSize} color={colors.iconBlack} />
        <Icon
          name="chevron-down"
          className={chevronSize}
          color={colors.iconBlack}
        />
      </button>
    </Tooltip>
  );
};

/** Text style dropdown button - uses Button with right icon */
const TextStyleButton: React.FC<{
  onClick?: () => void;
  size: EditorToolbarSize;
}> = ({ onClick, size }) => {
  // Map toolbar size to button size
  const buttonSize = size === "xs" ? "xs" : "s";
  // Chevron size matches button.specs iconSize: xs=12px, s=16px
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
  <div className="flex items-start flex-wrap gap-0 border border-purple-300 rounded overflow-clip">
    {children}
  </div>
);

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
  onCode,
  onHighlight,
  onSuggestEdits,
  onBackToEdit,
  className = "",
}) => {
  // Button sizes based on Figma: xs=24px height, s=32px height
  const buttonSize = size === "xs" ? "xs" : "s";

  if (status === "reviewing") {
    // Match height to editing variant: xs=40px (h-10), s=48px (h-12)
    const containerHeight = size === "xs" ? "h-10" : "h-12";
    // Text size: xs=12px (text-xs), s=14px (text-sm)
    const reviewingTextSize = size === "xs" ? "text-xs" : "text-sm";
    // Icon size: xs=16px, s=24px
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
        {/* Left: Reviewing message - matches menu item styling from Figma */}
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

        {/* Right: Back to edit button - secondary with X icon on LEFT */}
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

  return (
    <div
      className={`
        p-2 rounded-lg
        flex items-center justify-between
        ${className}
      `}
    >
      {/* Left: Formatting tools - 4px gap between groups */}
      <div className="flex items-center gap-1">
        {/* Undo/Redo group */}
        <ToolGroup>
          <ToolButton
            icon="undo-2"
            label="Undo"
            onClick={onUndo}
            size={size}
            isFirst
            disabled={undoDisabled}
          />
          <ToolButton
            icon="redo-2"
            label="Redo"
            onClick={onRedo}
            size={size}
            disabled={redoDisabled}
          />
        </ToolGroup>

        {/* Text style dropdown */}
        <ToolGroup>
          <TextStyleButton onClick={onTextStyle} size={size} />
        </ToolGroup>

        {/* Text formatting group: B I U S */}
        <ToolGroup>
          <ToolButton
            icon="bold"
            label="Bold"
            onClick={onBold}
            size={size}
            isFirst
          />
          <ToolButton
            icon="italic"
            label="Italic"
            onClick={onItalic}
            size={size}
          />
          <ToolButton
            icon="underline"
            label="Underline"
            onClick={onUnderline}
            size={size}
          />
          <ToolButton
            icon="strikethrough"
            label="Strikethrough"
            onClick={onStrikethrough}
            size={size}
          />
        </ToolGroup>

        {/* Lists group */}
        <ToolGroup>
          <ToolButton
            icon="list"
            label="Bullet list"
            onClick={onList}
            size={size}
            isFirst
          />
          <ToolButton
            icon="list-ordered"
            label="Numbered list"
            onClick={onOrderedList}
            size={size}
          />
        </ToolGroup>

        {/* Insert group: link, image, table, hr, quote */}
        <ToolGroup>
          <ToolButton
            icon="link-2"
            label="Insert link"
            onClick={onLink}
            size={size}
            isFirst
          />
          <ToolButton
            icon="image"
            label="Insert image"
            onClick={onImage}
            size={size}
          />
          <ToolButton
            icon="table"
            label="Insert table"
            onClick={onTable}
            size={size}
          />
          <ToolButton
            icon="minus"
            label="Horizontal rule"
            onClick={onHorizontalRule}
            size={size}
          />
          <ToolButton
            icon="quote"
            label="Block quote"
            onClick={onQuote}
            size={size}
          />
        </ToolGroup>

        {/* Code & highlight group */}
        <ToolGroup>
          <ToolButton
            icon="code"
            label="Code"
            onClick={onCode}
            size={size}
            isFirst
          />
          <ToolButtonWithDropdown
            icon="highlighter"
            label="Highlight"
            onClick={onHighlight}
            size={size}
          />
        </ToolGroup>
      </div>

      {/* Right: Suggest edits button - outline with pencil-line icon */}
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
  );
};

export default EditorToolbar;
