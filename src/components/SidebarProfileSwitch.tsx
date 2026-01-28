import React from 'react';
import { ChevronDown } from '../icons/ChevronDown';

export type SidebarProfileSwitchState = 'default' | 'hover' | 'active';

export interface SidebarProfileSwitchProps {
  /** Profile/company name */
  name: string;
  /** Avatar image source */
  avatarSrc?: string;
  /** Avatar initials (if no image) */
  avatarInitials?: string;
  /** Current state */
  state?: SidebarProfileSwitchState;
  /** Whether the component is collapsed (icon only) */
  collapsed?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const SidebarProfileSwitch: React.FC<SidebarProfileSwitchProps> = ({
  name,
  avatarSrc,
  avatarInitials = 'AC',
  state = 'default',
  collapsed = false,
  onClick,
  className = '',
}) => {
  const stateStyles: Record<SidebarProfileSwitchState, string> = {
    default: 'bg-transparent hover:bg-secondary',
    hover: 'bg-secondary',
    active: 'bg-secondary',
  };

  const renderAvatar = () => (
    <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
      {avatarSrc ? (
        <img src={avatarSrc} alt="" className="w-full h-full object-cover rounded" />
      ) : (
        <span className="text-sm font-black text-text-negative">{avatarInitials}</span>
      )}
    </div>
  );

  if (collapsed) {
    return (
      <div
        className={`
          flex items-center justify-center p-2 rounded cursor-pointer
          ${stateStyles[state]}
          ${className}
        `}
        onClick={onClick}
        title={name}
      >
        {renderAvatar()}
      </div>
    );
  }

  return (
    <div
      className={`
        flex items-center gap-2 h-12 px-3 rounded cursor-pointer
        ${stateStyles[state]}
        ${className}
      `}
      onClick={onClick}
    >
      {renderAvatar()}
      <span className="flex-1 text-sm font-medium text-text-primary truncate">
        {name}
      </span>
      <ChevronDown className="size-4 shrink-0" color="#1b1b1f" />
    </div>
  );
};

export default SidebarProfileSwitch;
