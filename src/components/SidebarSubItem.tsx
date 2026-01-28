import React from 'react';

export type SidebarSubItemState = 'default' | 'hover' | 'active';

export interface SidebarSubItemProps {
  /** Label text */
  label: string;
  /** Current state */
  state?: SidebarSubItemState;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const SidebarSubItem: React.FC<SidebarSubItemProps> = ({
  label,
  state = 'default',
  onClick,
  className = '',
}) => {
  const stateStyles: Record<SidebarSubItemState, string> = {
    default: 'bg-transparent hover:bg-secondary',
    hover: 'bg-secondary',
    active: 'bg-secondary',
  };

  const textStyles: Record<SidebarSubItemState, string> = {
    default: 'text-text-primary',
    hover: 'text-text-primary',
    active: 'text-primary font-medium',
  };

  return (
    <div
      className={`
        flex items-center gap-2 h-9 pl-11 pr-3 rounded cursor-pointer
        ${stateStyles[state]}
        ${className}
      `}
      onClick={onClick}
    >
      <span className={`text-sm ${textStyles[state]} truncate`}>
        {label}
      </span>
    </div>
  );
};

export default SidebarSubItem;
