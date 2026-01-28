import React from 'react';
import { Settings } from '../icons/Settings';
import { HelpCircle } from '../icons/HelpCircle';
import { LogOut } from '../icons/LogOut';

export type SidebarActionType = 'settings' | 'help' | 'logout';
export type SidebarActionState = 'default' | 'hover';

export interface SidebarActionItemProps {
  /** Action type */
  type: SidebarActionType;
  /** Label text */
  label: string;
  /** Current state */
  state?: SidebarActionState;
  /** Whether the component is collapsed (icon only) */
  collapsed?: boolean;
  /** Click handler */
  onClick?: () => void;
}

export interface SidebarActionsProps {
  /** Whether the component is collapsed (icon only) */
  collapsed?: boolean;
  /** Settings click handler */
  onSettingsClick?: () => void;
  /** Help click handler */
  onHelpClick?: () => void;
  /** Logout click handler */
  onLogoutClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const ActionItem: React.FC<SidebarActionItemProps> = ({
  type,
  label,
  state = 'default',
  collapsed = false,
  onClick,
}) => {
  const iconMap: Record<SidebarActionType, React.ReactNode> = {
    settings: <Settings className="size-5" color="#1b1b1f" />,
    help: <HelpCircle className="size-5" color="#1b1b1f" />,
    logout: <LogOut className="size-5" color="#1b1b1f" />,
  };

  const stateStyles: Record<SidebarActionState, string> = {
    default: 'bg-transparent hover:bg-secondary',
    hover: 'bg-secondary',
  };

  if (collapsed) {
    return (
      <div
        className={`
          flex items-center justify-center size-10 rounded cursor-pointer
          ${stateStyles[state]}
        `}
        onClick={onClick}
        title={label}
      >
        {iconMap[type]}
      </div>
    );
  }

  return (
    <div
      className={`
        flex items-center gap-2 h-10 px-3 rounded cursor-pointer
        ${stateStyles[state]}
      `}
      onClick={onClick}
    >
      {iconMap[type]}
      <span className="flex-1 text-sm text-text-primary truncate">
        {label}
      </span>
    </div>
  );
};

export const SidebarActions: React.FC<SidebarActionsProps> = ({
  collapsed = false,
  onSettingsClick,
  onHelpClick,
  onLogoutClick,
  className = '',
}) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <ActionItem
        type="settings"
        label="Settings"
        collapsed={collapsed}
        onClick={onSettingsClick}
      />
      <ActionItem
        type="help"
        label="Help"
        collapsed={collapsed}
        onClick={onHelpClick}
      />
      <ActionItem
        type="logout"
        label="Log out"
        collapsed={collapsed}
        onClick={onLogoutClick}
      />
    </div>
  );
};

export default SidebarActions;
