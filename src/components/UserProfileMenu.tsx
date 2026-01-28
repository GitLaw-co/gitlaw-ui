import React from 'react';
import { Check } from '../icons/Check';
import { Settings } from '../icons/Settings';
import { LogOut } from '../icons/LogOut';

export interface UserProfileOption {
  id: string;
  name: string;
  avatarInitials?: string;
  avatarSrc?: string;
  selected?: boolean;
}

export interface UserProfileMenuProps {
  /** Current user name */
  userName?: string;
  /** Current user email */
  userEmail?: string;
  /** User avatar initials */
  avatarInitials?: string;
  /** User avatar image source */
  avatarSrc?: string;
  /** Available profiles to switch to */
  profiles?: UserProfileOption[];
  /** Settings click handler */
  onSettingsClick?: () => void;
  /** Logout click handler */
  onLogoutClick?: () => void;
  /** Profile select handler */
  onProfileSelect?: (profileId: string) => void;
  /** Additional CSS classes */
  className?: string;
}

export const UserProfileMenu: React.FC<UserProfileMenuProps> = ({
  userName = 'John Doe',
  userEmail = 'john@example.com',
  avatarInitials = 'JD',
  avatarSrc,
  profiles = [],
  onSettingsClick,
  onLogoutClick,
  onProfileSelect,
  className = '',
}) => {
  return (
    <div
      className={`
        w-64 bg-white rounded-lg shadow-lg border border-input-border
        overflow-hidden
        ${className}
      `}
    >
      {/* User info header */}
      <div className="flex items-center gap-3 p-4 border-b border-input-border">
        <div className="size-10 rounded-full bg-primary flex items-center justify-center shrink-0">
          {avatarSrc ? (
            <img src={avatarSrc} alt="" className="w-full h-full object-cover rounded-full" />
          ) : (
            <span className="text-sm font-black text-text-negative">{avatarInitials}</span>
          )}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-text-primary truncate">{userName}</p>
          <p className="text-xs text-text-secondary truncate">{userEmail}</p>
        </div>
      </div>

      {/* Profile list */}
      {profiles.length > 0 && (
        <div className="py-2 border-b border-input-border">
          <p className="px-4 py-1 text-xs font-medium text-text-secondary uppercase tracking-wide">
            Switch Profile
          </p>
          {profiles.map((profile) => (
            <button
              key={profile.id}
              className="
                flex items-center gap-3 w-full px-4 py-2
                hover:bg-secondary transition-colors
                text-left
              "
              onClick={() => onProfileSelect?.(profile.id)}
            >
              <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
                {profile.avatarSrc ? (
                  <img src={profile.avatarSrc} alt="" className="w-full h-full object-cover rounded" />
                ) : (
                  <span className="text-xs font-black text-text-negative">
                    {profile.avatarInitials || profile.name.substring(0, 2).toUpperCase()}
                  </span>
                )}
              </div>
              <span className="flex-1 text-sm text-text-primary truncate">
                {profile.name}
              </span>
              {profile.selected && (
                <Check className="size-4 shrink-0" color="#5e49d6" />
              )}
            </button>
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="py-2">
        <button
          className="
            flex items-center gap-3 w-full px-4 py-2
            hover:bg-secondary transition-colors
            text-left
          "
          onClick={onSettingsClick}
        >
          <Settings className="size-5" color="#1b1b1f" />
          <span className="text-sm text-text-primary">Settings</span>
        </button>
        <button
          className="
            flex items-center gap-3 w-full px-4 py-2
            hover:bg-secondary transition-colors
            text-left
          "
          onClick={onLogoutClick}
        >
          <LogOut className="size-5" color="#1b1b1f" />
          <span className="text-sm text-text-primary">Log out</span>
        </button>
      </div>
    </div>
  );
};

export default UserProfileMenu;
