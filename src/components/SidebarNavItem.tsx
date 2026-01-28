import React from 'react';
import { ChevronRight } from '../icons/ChevronRight';

export type SidebarNavItemState = 'default' | 'hover' | 'active';

export interface SidebarNavItemProps {
  /** Label text */
  label: string;
  /** Icon element to display */
  icon?: React.ReactNode;
  /** Current state */
  state?: SidebarNavItemState;
  /** Whether the item is collapsed (icon only) */
  collapsed?: boolean;
  /** Whether to show expand arrow (for items with children) */
  showExpandArrow?: boolean;
  /** Whether the expand arrow is rotated (expanded state) */
  expanded?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
  label,
  icon,
  state = 'default',
  collapsed = false,
  showExpandArrow = false,
  expanded = false,
  onClick,
  className = '',
}) => {
  const stateStyles: Record<SidebarNavItemState, string> = {
    default: 'bg-transparent hover:bg-secondary',
    hover: 'bg-secondary',
    active: 'bg-secondary',
  };

  const textStyles: Record<SidebarNavItemState, string> = {
    default: 'text-text-primary',
    hover: 'text-text-primary',
    active: 'text-primary font-medium',
  };

  if (collapsed) {
    return (
      <div
        className={`
          flex items-center justify-center size-10 rounded cursor-pointer
          ${stateStyles[state]}
          ${className}
        `}
        onClick={onClick}
        title={label}
      >
        <div className={state === 'active' ? 'text-primary' : 'text-text-primary'}>
          {icon}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        flex items-center gap-2 h-10 px-3 rounded cursor-pointer
        ${stateStyles[state]}
        ${className}
      `}
      onClick={onClick}
    >
      <div className={state === 'active' ? 'text-primary' : 'text-text-primary'}>
        {icon}
      </div>
      <span className={`flex-1 text-sm ${textStyles[state]} truncate`}>
        {label}
      </span>
      {showExpandArrow && (
        <ChevronRight
          className={`size-4 transition-transform ${expanded ? 'rotate-90' : ''}`}
          color={state === 'active' ? '#5e49d6' : '#1b1b1f'}
        />
      )}
    </div>
  );
};

export default SidebarNavItem;
