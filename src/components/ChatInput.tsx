import React, { useState, useEffect, useRef } from "react";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { colors } from "../specs";

export type ChatInputStatus = "active" | "populated" | "working";
export type ChatInputSize = "l" | "m";

export interface QuickAction {
  id: string;
  label: string;
  icon: "draft" | "review" | "summarize";
}

export type SettingsDropdownPosition = "top" | "bottom" | "left" | "right";

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

  // Ref for dropdown click-outside detection
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Track if tooltip should be suppressed (after dropdown closes)
  const [suppressTooltip, setSuppressTooltip] = useState(false);

  // Animated placeholder state
  const [currentPlaceholderIndex, setCurrentPlaceholderIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!showSettingsDropdown) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        // Suppress tooltip briefly when closing dropdown
        setSuppressTooltip(true);
        setTimeout(() => setSuppressTooltip(false), 150);
        onSettingsDropdownClose?.();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showSettingsDropdown, onSettingsDropdownClose]);

  // Use static placeholder if provided, otherwise use animated placeholders
  const useAnimatedPlaceholders = !placeholder && animatedPlaceholders.length > 0;
  const currentPlaceholder = useAnimatedPlaceholders
    ? animatedPlaceholders[currentPlaceholderIndex]
    : placeholder || "Draft a mutual NDA";

  // Rotate placeholders with animation
  useEffect(() => {
    if (!useAnimatedPlaceholders || isPopulated) return;

    const interval = setInterval(() => {
      // Start fade out
      setIsAnimating(true);

      // After fade out, change text and fade in
      setTimeout(() => {
        setCurrentPlaceholderIndex(
          (prev) => (prev + 1) % animatedPlaceholders.length
        );
        setIsAnimating(false);
      }, 200); // Half of the transition duration
    }, placeholderInterval);

    return () => clearInterval(interval);
  }, [useAnimatedPlaceholders, isPopulated, animatedPlaceholders.length, placeholderInterval]);

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
        {/* Text input area with animated placeholder */}
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
          {/* Custom animated placeholder */}
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

        {/* Submit button - only show when populated */}
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
        {/* Left buttons */}
        <div className="flex items-center gap-1">
          <Tooltip content="Add a file" type="purple" position="bottom" size="s">
            <button
              type="button"
              onClick={onAttachmentClick}
              className="p-1 hover:bg-secondary rounded transition-colors"
            >
              <Icon
                name="paperclip"
                className="size-6"
                color={colors.iconPrimary}
              />
            </button>
          </Tooltip>

          {/* Settings button with optional dropdown */}
          <div className="relative" ref={dropdownRef}>
            {/* Use Tooltip's disabled prop to hide tooltip when dropdown is shown */}
            <Tooltip
              content="Jurisdiction and settings"
              type="purple"
              position="bottom"
              size="s"
              disabled={showSettingsDropdown}
            >
              <button
                type="button"
                onClick={onSettingsClick}
                className="p-1 hover:bg-secondary rounded transition-colors"
              >
                <Icon
                  name="settings-2"
                  className="size-6"
                  color={colors.iconPrimary}
                />
              </button>
            </Tooltip>

            {/* Dropdown positioned relative to button */}
            {settingsDropdownContent && (
              <div
                className={`
                  absolute z-10 transition-opacity duration-100
                  ${showSettingsDropdown ? "opacity-100" : "opacity-0 pointer-events-none"}
                  ${settingsDropdownPosition === "top" ? "bottom-full mb-2 left-1/2 -translate-x-1/2" : ""}
                  ${settingsDropdownPosition === "bottom" ? "top-full mt-2 left-1/2 -translate-x-1/2" : ""}
                  ${settingsDropdownPosition === "left" ? "right-full mr-2 top-1/2 -translate-y-1/2" : ""}
                  ${settingsDropdownPosition === "right" ? "left-full ml-2 top-1/2 -translate-y-1/2" : ""}
                `}
              >
                {settingsDropdownContent}
              </div>
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
