import React, { useState, useRef, useEffect, useId, useCallback } from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export type SelectSize = "xs" | "s" | "m" | "l" | "xl";
export type SelectStatus = "empty" | "default";
export type SelectAlign = "fill" | "hug";
export type SelectLabelPosition = "top" | "left";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  /** The size of the select */
  size?: SelectSize;
  /** The current status */
  status?: SelectStatus;
  /** Width behavior */
  align?: SelectAlign;
  /** Label position */
  labelPosition?: SelectLabelPosition;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Options to select from */
  options?: SelectOption[];
  /** Change handler */
  onChange?: (value: string) => void;
  /** Show external label */
  showLabel?: boolean;
  /** Label text */
  label?: string;
  /** Show left icon */
  showLeftIcon?: boolean;
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
  SelectSize,
  { container: string; text: string; label: string; gap: string }
> = {
  xl: {
    container: "gap-3 p-4 min-h-14",
    text: "text-base",
    label: "text-base",
    gap: "gap-2",
  },
  l: {
    container: "gap-2 p-3 min-h-12",
    text: "text-sm",
    label: "text-sm",
    gap: "gap-2",
  },
  m: {
    container: "gap-2 p-2 min-h-9",
    text: "text-sm",
    label: "text-sm",
    gap: "gap-1",
  },
  s: {
    container: "gap-1 px-2 py-1 min-h-7",
    text: "text-sm",
    label: "text-sm",
    gap: "gap-1",
  },
  xs: {
    container: "gap-1 px-2 py-1 min-h-6",
    text: "text-xs",
    label: "text-xs",
    gap: "gap-1",
  },
};

export const Select: React.FC<SelectProps> = ({
  size = "m",
  status: controlledStatus,
  align = "fill",
  labelPosition = "top",
  placeholder = "Select an option",
  value: controlledValue,
  options = [],
  onChange,
  showLabel = false,
  label = "Label",
  showLeftIcon = false,
  leftIcon,
  rightIcon,
  className = "",
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const selectRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const autoId = useId();
  const listboxId = `${autoId}-listbox`;

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const status = controlledStatus || (value ? "default" : "empty");
  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Reset highlight when opening
  useEffect(() => {
    if (isOpen) {
      const idx = options.findIndex((opt) => opt.value === value);
      setHighlightedIndex(idx >= 0 ? idx : 0);
    }
  }, [isOpen]);

  const handleSelect = (optionValue: string) => {
    if (controlledValue === undefined) {
      setInternalValue(optionValue);
    }
    onChange?.(optionValue);
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (disabled) return;

      switch (e.key) {
        case "Enter":
        case " ":
          e.preventDefault();
          if (isOpen && highlightedIndex >= 0 && highlightedIndex < options.length) {
            handleSelect(options[highlightedIndex].value);
          } else {
            setIsOpen(!isOpen);
          }
          break;
        case "ArrowDown":
          e.preventDefault();
          if (!isOpen) {
            setIsOpen(true);
          } else {
            setHighlightedIndex((prev) =>
              prev < options.length - 1 ? prev + 1 : prev
            );
          }
          break;
        case "ArrowUp":
          e.preventDefault();
          if (isOpen) {
            setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : prev));
          }
          break;
        case "Escape":
          e.preventDefault();
          setIsOpen(false);
          triggerRef.current?.focus();
          break;
        case "Tab":
          setIsOpen(false);
          break;
      }
    },
    [disabled, isOpen, highlightedIndex, options, value]
  );

  const sizeConfig = sizeClasses[size];
  const widthClass = align === "fill" ? "w-full" : "w-auto";
  const isHorizontal = labelPosition === "left";

  const textColorClass = status === "empty" ? "text-subtle" : "text-foreground";

  const triggerId = `${autoId}-trigger`;

  const renderLabel = () => {
    if (!showLabel) return null;
    return (
      <label
        htmlFor={triggerId}
        className={`font-semibold text-foreground ${sizeConfig.label} ${isHorizontal ? "shrink-0" : ""}`}
      >
        {label}
      </label>
    );
  };

  const renderDropdown = () => (
    <button
      ref={triggerRef}
      id={triggerId}
      type="button"
      role="combobox"
      aria-expanded={isOpen}
      aria-haspopup="listbox"
      aria-controls={isOpen ? listboxId : undefined}
      aria-disabled={disabled}
      className={`
        flex items-center bg-white rounded overflow-hidden text-left
        border border-input-border
        ${sizeConfig.container}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${align === "fill" && isHorizontal ? "flex-1" : widthClass}
      `}
      onClick={() => !disabled && setIsOpen(!isOpen)}
      onKeyDown={handleKeyDown}
    >
      <div className={`flex items-center flex-1 min-w-0 ${sizeConfig.gap}`}>
        {showLeftIcon && (
          <span className="shrink-0 text-foreground">
            {leftIcon || (
              <Icon name="user" className="size-6" color={colors.textPrimary} />
            )}
          </span>
        )}
        <span
          className={`flex-1 truncate font-normal ${sizeConfig.text} ${textColorClass}`}
        >
          {selectedOption?.label || placeholder}
        </span>
      </div>
      <span className="shrink-0 text-foreground">
        {rightIcon || (
          <Icon
            name="chevron-down"
            className="size-6"
            color={colors.textPrimary}
          />
        )}
      </span>
    </button>
  );

  return (
    <div
      ref={selectRef}
      className={`
        relative flex rounded-lg
        ${isHorizontal ? `flex-row items-center ${sizeConfig.gap}` : `flex-col ${sizeConfig.gap}`}
        ${widthClass}
        ${className}
      `}
    >
      {labelPosition === "top" && renderLabel()}
      {labelPosition === "left" && renderLabel()}
      {renderDropdown()}

      {options.length > 0 && (
        <div
          id={listboxId}
          role="listbox"
          aria-label={label}
          className={`
            absolute top-full left-0 right-0 mt-1 bg-white border border-input-border rounded shadow-card z-50 max-h-60 overflow-auto
            transition-[opacity,transform] duration-fast ease-gitlaw origin-top
            ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'}
          `}
        >
          {options.map((option, index) => (
            <div
              key={option.value}
              role="option"
              aria-selected={option.value === value}
              className={`
                px-3 py-2 cursor-pointer transition-interactive
                ${sizeConfig.text}
                ${option.value === value ? "bg-secondary text-foreground" : index === highlightedIndex ? "bg-secondary/50 text-foreground" : "text-foreground hover:bg-secondary/50"}
              `}
              onClick={() => handleSelect(option.value)}
              onMouseEnter={() => setHighlightedIndex(index)}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
