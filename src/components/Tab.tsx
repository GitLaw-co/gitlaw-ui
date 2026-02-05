import React from "react";
import { Badge } from "./Badge";

export type TabStatus = "default" | "selected" | "selected-underlined";

export interface TabProps {
  /** The label text */
  label?: string;
  /** The current status */
  status?: TabStatus;
  /** Show badge */
  showBadge?: boolean;
  /** Badge count */
  badgeCount?: number;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Tab: React.FC<TabProps> = ({
  label = "Activity",
  status = "default",
  showBadge = false,
  badgeCount = 7,
  onClick,
  className = "",
}) => {
  const isSelected = status === "selected" || status === "selected-underlined";
  const hasUnderline = status === "selected-underlined";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        inline-flex items-center justify-center gap-2
        px-2 py-4
        transition-colors duration-fast ease-gitlaw
        ${hasUnderline ? "border-b-2 border-primary" : ""}
        ${className}
      `}
    >
      <span
        className={`
          font-semibold text-base text-primary
          overflow-hidden text-ellipsis
          ${!isSelected ? "opacity-30" : ""}
        `}
      >
        {label}
      </span>
      {showBadge && <Badge type="secondary" count={badgeCount} />}
    </button>
  );
};

export interface TabsProps {
  /** The tabs to display */
  tabs: Array<{
    label: string;
    badgeCount?: number;
  }>;
  /** Currently selected tab index */
  selectedIndex?: number;
  /** Selection change handler */
  onSelect?: (index: number) => void;
  /** Show badges */
  showBadges?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  selectedIndex = 0,
  onSelect,
  showBadges = false,
  className = "",
}) => {
  return (
    <div className={`inline-flex items-center ${className}`}>
      {tabs.map((tab, index) => (
        <Tab
          key={index}
          label={tab.label}
          status={index === selectedIndex ? "selected-underlined" : "default"}
          showBadge={showBadges && tab.badgeCount !== undefined}
          badgeCount={tab.badgeCount}
          onClick={() => onSelect?.(index)}
        />
      ))}
    </div>
  );
};

export default Tab;
