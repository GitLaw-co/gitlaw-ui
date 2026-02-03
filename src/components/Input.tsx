import React, { useState } from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export type InputSize = "xs" | "s" | "m" | "l" | "xl";
export type InputStatus = "empty" | "populated" | "active";
export type InputAlign = "fill" | "hug";
/** Context for styling - 'default' for standard inputs, 'document-empty' for yellow bg, 'document-filled' for purple bg */
export type InputContext = "default" | "document-empty" | "document-filled";

export interface InputProps {
  /** The size of the input */
  size?: InputSize;
  /** The current status */
  status?: InputStatus;
  /** Width behavior */
  align?: InputAlign;
  /** Context for document inputs - affects background color */
  context?: InputContext;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Show external label */
  showLabel?: boolean;
  /** Label text */
  label?: string;
  /** Show left icon */
  showLeftIcon?: boolean;
  /** Show right icon */
  showRightIcon?: boolean;
  /** Custom left icon */
  leftIcon?: React.ReactNode;
  /** Custom right icon */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

const sizeClasses: Record<
  InputSize,
  { container: string; input: string; label: string; icon: string }
> = {
  xl: {
    container: "gap-3 p-4 min-h-14",
    input: "text-base",
    label: "text-base",
    icon: "size-6", // 24px
  },
  l: {
    container: "gap-2 p-3 min-h-12",
    input: "text-base",
    label: "text-sm",
    icon: "size-6", // 24px
  },
  m: {
    container: "gap-2 p-2 min-h-9",
    input: "text-sm",
    label: "text-sm",
    icon: "size-5", // 20px
  },
  s: {
    container: "gap-1 px-2 py-1 min-h-7",
    input: "text-sm",
    label: "text-sm",
    icon: "size-4", // 16px
  },
  xs: {
    container: "gap-1 px-2 py-1 min-h-6",
    input: "text-xs",
    label: "text-xs",
    icon: "size-3", // 12px
  },
};

// Background classes based on context
const contextClasses: Record<
  InputContext,
  { bg: string; border: string; activeBorder: string }
> = {
  default: {
    bg: "bg-white",
    border: "border-input-border",
    activeBorder: "border-primary",
  },
  "document-empty": {
    bg: "bg-input-yellow", // Yellow background for empty/new document inputs
    border: "border-transparent",
    activeBorder: "border-primary",
  },
  "document-filled": {
    bg: "bg-secondary", // Purple background for populated/edited document inputs
    border: "border-transparent",
    activeBorder: "border-primary",
  },
};

// Default icon and placeholder for document context
const getDocumentDefaults = (context: InputContext) => {
  if (context === "document-empty" || context === "document-filled") {
    return {
      defaultIcon: "calendar",
      defaultPlaceholder: "Agreement date",
    };
  }
  return {
    defaultIcon: "search",
    defaultPlaceholder: "Placeholder text",
  };
};

export const Input: React.FC<InputProps> = ({
  size = "m",
  status: controlledStatus,
  align = "fill",
  context = "default",
  placeholder: placeholderProp,
  value: controlledValue,
  onChange,
  showLabel = false,
  label = "Label",
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const status =
    controlledStatus || (isFocused ? "active" : value ? "populated" : "empty");
  const isActive = status === "active";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue("");
    }
    onChange?.("");
  };

  const sizeConfig = sizeClasses[size];
  const contextConfig = contextClasses[context];

  // Document context: always show left icon, never show label, hug content with max-width
  const isDocumentContext =
    context === "document-empty" || context === "document-filled";
  const widthClass = isDocumentContext
    ? "w-auto max-w-40"
    : align === "fill"
      ? "w-full"
      : "w-auto";
  const shouldShowLabel = showLabel && !isDocumentContext;
  const shouldShowLeftIcon = showLeftIcon || isDocumentContext;

  // Get defaults based on context
  const { defaultIcon, defaultPlaceholder } = getDocumentDefaults(context);
  const placeholder = placeholderProp ?? defaultPlaceholder;

  const iconClass = sizeConfig.icon;

  return (
    <div className={`flex flex-col gap-2 ${widthClass} ${className}`}>
      {shouldShowLabel && (
        <label className={`font-semibold text-foreground ${sizeConfig.label}`}>
          {label}
        </label>
      )}
      <div
        className={`
          flex items-center rounded overflow-hidden
          border transition-colors
          ${contextConfig.bg}
          ${sizeConfig.container}
          ${isActive ? contextConfig.activeBorder : contextConfig.border}
          ${disabled ? "opacity-50 cursor-not-allowed" : ""}
        `}
      >
        {shouldShowLeftIcon && (
          <span className="shrink-0 text-foreground">
            {leftIcon || (
              <Icon
                name={defaultIcon}
                className={iconClass}
                color={colors.textPrimary}
              />
            )}
          </span>
        )}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          size={align === "hug" && !isDocumentContext ? (value?.length || placeholder?.length || 10) : undefined}
          className={`
            ${align === "hug" && !isDocumentContext ? "w-auto min-w-[60px]" : "flex-1"} bg-transparent outline-none font-normal
            text-foreground placeholder:text-subtle
            ${sizeConfig.input}
            ${disabled ? "cursor-not-allowed" : ""}
          `}
        />
        {showRightIcon && value && (
          <button
            type="button"
            onClick={handleClear}
            className="shrink-0 text-foreground hover:text-subtle transition-colors"
          >
            {rightIcon || (
              <Icon name="x" className={iconClass} color={colors.textPrimary} />
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
