import React, { useState, useEffect, useRef } from "react";
import { MenuItem } from "./MenuItem";
import { Avatar } from "./Avatar";

export interface PageNavAccount {
  /** Unique identifier */
  id: string;
  /** Display name */
  name: string;
  /** Account type label (e.g. "Personal account", "Organization") */
  type: string;
  /** Avatar image URL (optional — falls back to initials) */
  avatar?: string;
  /** Initials for avatar fallback */
  initials?: string;
}

export interface PageNavItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
}

export interface PageNavProps {
  /** Currently selected account */
  activeAccount: PageNavAccount;
  /** All available accounts for the context switcher */
  accounts: PageNavAccount[];
  /** Navigation items to display */
  items: PageNavItem[];
  /** Currently active nav item id */
  activeItemId?: string;
  /** Callback when a nav item is clicked */
  onItemClick?: (item: PageNavItem) => void;
  /** Callback when account is switched */
  onAccountSwitch?: (account: PageNavAccount) => void;
  /** Additional CSS classes */
  className?: string;
}

export const PageNav: React.FC<PageNavProps> = ({
  activeAccount,
  accounts,
  items,
  activeItemId,
  onItemClick,
  onAccountSwitch,
  className = "",
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Click outside to close dropdown
  useEffect(() => {
    if (!isDropdownOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isDropdownOpen]);

  const handleAccountSelect = (account: PageNavAccount) => {
    setIsDropdownOpen(false);
    onAccountSwitch?.(account);
  };

  /** Render an Avatar for a given account */
  const renderAvatar = (account: PageNavAccount) => (
    <Avatar
      type={account.avatar ? "image" : "initials"}
      src={account.avatar}
      initials={account.initials}
      size="M"
    />
  );

  return (
    <div className={`flex flex-col w-[224px] ${className}`}>
      {/* Context Switcher */}
      <div ref={dropdownRef} className="relative">
        {/* Trigger — always rendered to keep height in the flow */}
        <MenuItem
          primaryText={activeAccount.name}
          secondaryText={activeAccount.type}
          showSecondaryText
          showLeftElement
          leftIcon={renderAvatar(activeAccount)}
          showRIcon1
          rIcon1="chevron-down"
          width="fill"
          onClick={() => setIsDropdownOpen(true)}
        />

        {/* Dropdown — overlays on top of the trigger, animated */}
        <div
          className={`
            absolute -top-2 -left-3 z-50
            bg-card rounded-lg shadow-card p-2
            w-[calc(100%+24px)]
            transition-[opacity,transform] duration-fast ease-gitlaw origin-top
            ${isDropdownOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-95 pointer-events-none"}
          `}
        >
          {accounts.map((account) => (
            <MenuItem
              key={account.id}
              primaryText={account.name}
              secondaryText={account.type}
              showSecondaryText
              showLeftElement
              leftIcon={renderAvatar(account)}
              width="fill"
              onClick={() => handleAccountSelect(account)}
            />
          ))}
        </div>
      </div>

      {/* Nav Items */}
      <div className="flex flex-col">
        {items.map((item) => {
          const isActive = item.id === activeItemId;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onItemClick?.(item)}
              className={`
                relative flex items-center w-full min-h-[48px] px-3 py-3 text-left
                text-sm font-normal leading-[1.4] text-primary
                transition-colors duration-fast ease-gitlaw
                cursor-pointer
                ${isActive ? "bg-secondary rounded" : "hover:bg-secondary/30 rounded"}
              `}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PageNav;
