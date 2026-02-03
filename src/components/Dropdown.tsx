import React from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export interface DropdownItem {
  /** Unique identifier for the item */
  id: string;
  /** Primary label text */
  label: string;
  /** Optional secondary label text */
  secondaryLabel?: string;
  /** Icon name (from lucide icons) */
  icon?: string;
  /** Whether the item is selected/checked */
  selected?: boolean;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export interface DropdownProps {
  /** List of dropdown items */
  items: DropdownItem[];
  /** Optional heading text */
  heading?: string;
  /** Whether to show icons */
  showIcons?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  items,
  heading,
  showIcons = true,
  className = "",
}) => {
  return (
    <div
      className={`
        w-[220px] max-w-[360px] p-2 rounded-lg
        bg-card shadow-card
        flex flex-col gap-px
        ${className}
      `}
      style={{ width: "max-content", minWidth: "220px", maxWidth: "360px" }}
    >
      {heading && (
        <div className="px-3 py-2 text-base font-semibold text-foreground">
          {heading}
        </div>
      )}
      {items.map((item) => (
        <button
          key={item.id}
          onClick={item.onClick}
          disabled={item.disabled}
          className={`
            w-full px-3 py-3 rounded-none
            flex items-center gap-2 text-left
            transition-colors
            ${item.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-secondary/30 cursor-pointer"}
            ${item.selected ? "bg-secondary/20" : ""}
          `}
        >
          {showIcons && item.icon && (
            <Icon
              name={item.icon}
              className="size-5"
              color={colors.iconBlack}
            />
          )}
          <div className="flex flex-col flex-1">
            <span className="text-base text-foreground">{item.label}</span>
            {item.secondaryLabel && (
              <span className="text-sm text-subtle">{item.secondaryLabel}</span>
            )}
          </div>
          {item.selected && (
            <Icon name="check" className="size-5" color={colors.iconBlack} />
          )}
        </button>
      ))}
    </div>
  );
};

export default Dropdown;
