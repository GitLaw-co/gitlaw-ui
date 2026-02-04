import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { PopoverPosition } from "./Popover";
import { colors } from "../specs";

export type ChatInputStatus = "active" | "populated" | "working";
export type ChatInputSize = "l" | "m";

export interface QuickAction {
  id: string;
  label: string;
  icon: "draft" | "review" | "summarize";
}

export type SettingsDropdownPosition = PopoverPosition;

export interface ChatInputProps {
  /** Input status */
  status?: ChatInputStatus;
  /** Input size */
  size?: ChatInputSize;
  /** Placeholder text (used if animatedPlaceholders is not provided) */
  placeholder?: string;
  /** Array of placeholders to rotate through with animation */
  animatedPlaceholders?: string[];
  /** Interval in ms between placeholder rotations (default: 3000) */
  placeholderInterval?: number;
  /** Input value */
  value?: string;
  /** Show quick actions */
  showQuickActions?: boolean;
  /** Quick action items */
  quickActions?: QuickAction[];
  /** On value change */
  onChange?: (value: string) => void;
  /** On submit */
  onSubmit?: () => void;
  /** On quick action click */
  onQuickActionClick?: (action: QuickAction) => void;
  /** On attachment click */
  onAttachmentClick?: () => void;
  /** On settings click */
  onSettingsClick?: () => void;
  /** On stop click (when working) */
  onStopClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Allow input to fill full container width */
  fullWidth?: boolean;
  /** Show settings dropdown */
  showSettingsDropdown?: boolean;
  /** Settings dropdown content */
  settingsDropdownContent?: React.ReactNode;
  /** Settings dropdown position */
  settingsDropdownPosition?: SettingsDropdownPosition;
  /** Called when clicking outside the dropdown to close it */
  onSettingsDropdownClose?: () => void;
}

const defaultQuickActions: QuickAction[] = [
  { id: "draft", label: "Draft", icon: "draft" },
  { id: "review", label: "Review", icon: "review" },
  { id: "summarize", label: "Summarize", icon: "summarize" },
];

const quickActionTooltips: Record<string, string> = {
  draft: "Draft a new document",
  review: "Review a document",
  summarize: "Summarize a document",
};

const defaultAnimatedPlaceholders = [
  "Draft a mutual NDA",
  "Review my service contract",
  "Summarize this agreement",
  "Create a privacy policy",
  "Help me with licensing terms",
];

const QuickActionIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case "draft":
      return (
        <Icon name="file-plus" className="size-4" color={colors.iconPrimary} />
      );
    case "review":
      return (
        <Icon
          name="file-search"
          className="size-4"
          color={colors.iconPrimary}
        />
      );
    case "summarize":
      return (
        <Icon name="align-left" className="size-4" color={colors.iconPrimary} />
      );
    default:
      return null;
  }
};

// Position classes for dropdown (matches Popover positioning)
const dropdownPositionClasses: Record<PopoverPosition, string> = {
  top: "bottom-full left-0 mb-2",
  bottom: "top-full left-0 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

// Icon button component for consistent styling
const IconButton: React.FC<{
  icon: string;
  onClick?: () => void;
}> = ({ icon, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="p-1 hover:bg-secondary rounded transition-colors"
  >
    <Icon name={icon} className="size-6" color={colors.iconPrimary} />
  </button>
);

export const ChatInput: React.FC<ChatInputProps> = ({
  status = "active",
  size = "l",
  placeholder,
  animatedPlaceholders = defaultAnimatedPlaceholders,
  placeholderInterval = 3000,
  value = "",
  showQuickActions = true,
  quickActions = defaultQuickActions,
  onChange,
  onSubmit,
  onQuickActionClick,
  onAttachmentClick,
  onSettingsClick,
  onStopClick,
  className = "",
  fullWidth = false,
  showSettingsDropdown = false,
  settingsDropdownContent,
  settingsDropdownPosition = "top",
  onSettingsDropdownClose,
}) => {
  const isWorking = status === "working";
  const isPopulated = status === "populated" || value.length > 0;
  const isLarge = size === "l";

  // Ref for settings dropdown click-outside detection
  const settingsRef = useRef<HTMLDivElement>(null);
  const settingsButtonRef = useRef<HTMLDivElement>(null);

  // Tooltip visibility for settings button (hide when dropdown is open)
  const [showSettingsTooltip, setShowSettingsTooltip] = useState(false);

  // Dropdown position for fixed positioning
  const [dropdownPosition, setDropdownPosition] = useState<{ top: number; left: number } | null>(null);

  // Animated placeholder state
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Click outside detection for settings dropdown
  useEffect(() => {
    if (!showSettingsDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        settingsRef.current &&
        !settingsRef.current.contains(event.target as Node)
      ) {
        onSettingsDropdownClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSettingsDropdown, onSettingsDropdownClose]);

  // Calculate dropdown position when it opens
  useEffect(() => {
    if (showSettingsDropdown && settingsButtonRef.current) {
      const rect = settingsButtonRef.current.getBoundingClientRect();
      if (settingsDropdownPosition === "top") {
        setDropdownPosition({
          top: rect.top - 8, // 8px margin above button
          left: rect.left,
        });
      } else {
        setDropdownPosition({
          top: rect.bottom + 8,
          left: rect.left,
        });
      }
    }
  }, [showSettingsDropdown, settingsDropdownPosition]);

  // Use static placeholder if provided, otherwise use animated placeholders
  const useAnimatedPlaceholders =
    !placeholder && animatedPlaceholders.length > 0;
  const currentPlaceholder = useAnimatedPlaceholders
    ? animatedPlaceholders[currentPlaceholderIndex]
    : placeholder || "Draft a mutual NDA";

  // Rotate placeholders with animation
  useEffect(() => {
    if (!useAnimatedPlaceholders || isPopulated) return;

    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPlaceholderIndex(
          (prev) => (prev + 1) % animatedPlaceholders.length
        );
        setIsAnimating(false);
      }, 200);
    }, placeholderInterval);

    return () => clearInterval(interval);
  }, [
    useAnimatedPlaceholders,
    isPopulated,
    animatedPlaceholders.length,
    placeholderInterval,
  ]);

  const paddingClass = isLarge ? "p-6" : "p-4";
  const gapClass = isLarge ? "gap-6" : "gap-4";
  const roundedClass = isLarge ? "rounded-xl" : "rounded-lg";
  const textSizeClass = isLarge ? "text-lg" : "text-base";

  // Working state
  if (isWorking) {
    return (
      <div
        className={`
          bg-white border border-border ${roundedClass}
          shadow-card
          flex flex-col ${paddingClass}
          w-full ${fullWidth ? "" : "max-w-[624px]"}
          ${className}
        `}
      >
        <div className="flex items-center gap-2.5 p-4">
          <p className="text-lg font-normal text-primary leading-[1.4]">
            Working on your request...
          </p>
          <button
            type="button"
            onClick={onStopClick}
            className="ml-auto p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="square" className="size-6" color={colors.iconPrimary} />
          </button>
        </div>
      </div>
    );
  }

  // Active or Populated state
  return (
    <div
      className={`
        bg-white ${roundedClass}
        shadow-card
        flex flex-col ${gapClass} ${paddingClass}
        w-full ${fullWidth ? "" : "max-w-[624px]"}
        ${className}
      `}
    >
      {/* Input row */}
      <div className="flex items-center gap-2.5 w-full">
        <div className="flex-1 relative">
          <input
            type="text"
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            placeholder=""
            className={`
              w-full ${textSizeClass} font-normal leading-[1.4]
              text-foreground
              bg-transparent outline-none
            `}
          />
          {!value && (
            <span
              className={`
                absolute left-0 top-1/2 -translate-y-1/2
                ${textSizeClass} font-normal leading-[1.4]
                text-purple-300 pointer-events-none
                transition-opacity duration-200 ease-in-out
                ${isAnimating ? "opacity-0" : "opacity-100"}
              `}
            >
              {currentPlaceholder}
            </span>
          )}
        </div>

        {isPopulated && (
          <button
            type="button"
            onClick={onSubmit}
            className="
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            "
          >
            <Icon
              name="arrow-up"
              className="size-6"
              color={colors.iconNegative}
            />
          </button>
        )}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between w-full">
        {/* Left buttons - using flexbox with items-center for alignment */}
        <div className="flex items-center gap-1">
          {/* Attachment button */}
          <Tooltip
            content="Add a file"
            type="purple"
            position="bottom"
            size="s"
          >
            <IconButton icon="paperclip" onClick={onAttachmentClick} />
          </Tooltip>

          {/* Settings button with optional dropdown */}
          <div
            ref={settingsRef}
            className="relative inline-flex"
            onMouseEnter={() => !showSettingsDropdown && setShowSettingsTooltip(true)}
            onMouseLeave={() => setShowSettingsTooltip(false)}
          >
            <div ref={settingsButtonRef}>
              <IconButton
                icon="settings-2"
                onClick={() => {
                  if (settingsDropdownContent) {
                    if (showSettingsDropdown) {
                      onSettingsDropdownClose?.();
                    } else {
                      onSettingsClick?.();
                    }
                  } else {
                    onSettingsClick?.();
                  }
                  setShowSettingsTooltip(false);
                }}
              />
            </div>

            {/* Settings tooltip - manual implementation to avoid nesting issues */}
            {showSettingsTooltip && !showSettingsDropdown && (
              <div
                className="
                  absolute z-50 top-full left-1/2 -translate-x-1/2 mt-4
                  rounded-lg shadow-card bg-primary px-2 py-2
                  flex items-center whitespace-nowrap
                "
              >
                <span className="text-xs font-normal text-negative">
                  Jurisdiction and settings
                </span>
              </div>
            )}

            {/* Settings dropdown - uses portal to escape overflow:hidden containers */}
            {settingsDropdownContent && showSettingsDropdown && dropdownPosition && createPortal(
              <div
                className="fixed z-[9999] transition-opacity duration-100"
                style={{
                  top: settingsDropdownPosition === "top" ? undefined : dropdownPosition.top,
                  bottom: settingsDropdownPosition === "top" ? `calc(100vh - ${dropdownPosition.top}px)` : undefined,
                  left: dropdownPosition.left,
                }}
              >
                {settingsDropdownContent}
              </div>,
              document.body
            )}
          </div>
        </div>

        {/* Quick actions */}
        {showQuickActions && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickActions.map((action) => (
              <Tooltip
                key={action.id}
                content={quickActionTooltips[action.icon] || action.label}
                type="purple"
                position="bottom"
                size="s"
              >
                <button
                  type="button"
                  onClick={() => onQuickActionClick?.(action)}
                  className="
                    bg-secondary hover:bg-secondary-hover
                    flex items-center gap-1 h-8 px-3 py-2 rounded
                    text-xs font-normal text-foreground-button leading-[1.4]
                    transition-colors
                  "
                >
                  <QuickActionIcon icon={action.icon} />
                  <span>{action.label}</span>
                </button>
              </Tooltip>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
