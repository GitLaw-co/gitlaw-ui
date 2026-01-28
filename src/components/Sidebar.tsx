import React from 'react';
import { ChevronsLeft } from '../icons/ChevronsLeft';
import { FileText } from '../icons/FileText';
import { FolderClosed } from '../icons/FolderClosed';
import { Plus } from '../icons/Plus';
import { SidebarNavItem } from './SidebarNavItem';
import { SidebarSubItem } from './SidebarSubItem';
import { SidebarProfileSwitch } from './SidebarProfileSwitch';
import { SidebarActions } from './SidebarActions';

export type SidebarVariant = 'default' | 'landing';
export type SidebarState = 'expanded' | 'collapsed';

export interface SidebarNavItemConfig {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
  children?: { id: string; label: string; active?: boolean }[];
}

export interface SidebarProps {
  /** Visual variant */
  variant?: SidebarVariant;
  /** Expanded or collapsed state */
  state?: SidebarState;
  /** Profile/company name */
  profileName?: string;
  /** Avatar initials */
  avatarInitials?: string;
  /** Avatar image source */
  avatarSrc?: string;
  /** Navigation items */
  navItems?: SidebarNavItemConfig[];
  /** Whether user is signed in (affects landing variant) */
  isSignedIn?: boolean;
  /** Collapse toggle handler */
  onCollapseToggle?: () => void;
  /** Profile switch click handler */
  onProfileClick?: () => void;
  /** Settings click handler */
  onSettingsClick?: () => void;
  /** Help click handler */
  onHelpClick?: () => void;
  /** Logout click handler */
  onLogoutClick?: () => void;
  /** Nav item click handler */
  onNavItemClick?: (itemId: string) => void;
  /** Sub item click handler */
  onSubItemClick?: (parentId: string, itemId: string) => void;
  /** New document click handler */
  onNewDocumentClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const defaultNavItems: SidebarNavItemConfig[] = [
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="size-5" />,
    children: [
      { id: 'sub1', label: 'Sub Item' },
      { id: 'sub2', label: 'Sub Item' },
    ],
  },
  {
    id: 'others',
    label: 'Others',
    icon: <FolderClosed className="size-5" />,
  },
];

export const Sidebar: React.FC<SidebarProps> = ({
  variant = 'default',
  state = 'expanded',
  profileName = 'Acme Corporation',
  avatarInitials = 'AC',
  avatarSrc,
  navItems = defaultNavItems,
  isSignedIn = true,
  onCollapseToggle,
  onProfileClick,
  onSettingsClick,
  onHelpClick,
  onLogoutClick,
  onNavItemClick,
  onSubItemClick,
  onNewDocumentClick,
  className = '',
}) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(new Set(['documents']));

  const isCollapsed = state === 'collapsed';
  const isLanding = variant === 'landing';

  const toggleExpand = (itemId: string) => {
    setExpandedItems((prev) => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  };

  const handleNavItemClick = (item: SidebarNavItemConfig) => {
    if (item.children && item.children.length > 0) {
      toggleExpand(item.id);
    }
    onNavItemClick?.(item.id);
  };

  const baseStyles = isLanding
    ? 'bg-primary-light'
    : 'bg-white';

  const widthStyles = isCollapsed ? 'w-16' : 'w-72';

  // Landing variant when signed out shows minimal UI
  if (isLanding && !isSignedIn) {
    return (
      <div
        className={`
          flex flex-col h-full ${widthStyles} ${baseStyles}
          border-r border-secondary-dark
          ${className}
        `}
      >
        {/* Logo area */}
        <div className="flex items-center justify-center h-16 border-b border-secondary-dark">
          <div className="size-8 rounded bg-primary flex items-center justify-center">
            <span className="text-sm font-black text-text-negative">GL</span>
          </div>
        </div>

        {/* Empty state / CTA area */}
        <div className="flex-1 flex items-center justify-center p-4">
          {!isCollapsed && (
            <p className="text-sm text-text-secondary text-center">
              Sign in to access your documents
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`
        flex flex-col h-full ${widthStyles} ${baseStyles}
        border-r border-secondary-dark transition-all duration-200
        ${className}
      `}
    >
      {/* Header with profile switch and collapse toggle */}
      <div className={`flex items-center ${isCollapsed ? 'flex-col gap-2 p-2' : 'p-3'} border-b border-secondary-dark`}>
        <div className={isCollapsed ? '' : 'flex-1'}>
          <SidebarProfileSwitch
            name={profileName}
            avatarInitials={avatarInitials}
            avatarSrc={avatarSrc}
            collapsed={isCollapsed}
            onClick={onProfileClick}
          />
        </div>
        <button
          className={`
            flex items-center justify-center size-8 rounded
            hover:bg-secondary transition-colors
            ${isCollapsed ? 'rotate-180' : ''}
          `}
          onClick={onCollapseToggle}
          title={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          <ChevronsLeft className="size-5" color="#1b1b1f" />
        </button>
      </div>

      {/* New Document button */}
      {!isCollapsed && (
        <div className="p-3 border-b border-secondary-dark">
          <button
            className="
              flex items-center justify-center gap-2 w-full h-10 px-4
              bg-primary text-text-negative rounded
              hover:bg-primary-dark transition-colors
              text-sm font-medium
            "
            onClick={onNewDocumentClick}
          >
            <Plus className="size-5" color="#f7f6ff" />
            New Document
          </button>
        </div>
      )}
      {isCollapsed && (
        <div className="p-2 border-b border-secondary-dark">
          <button
            className="
              flex items-center justify-center size-10 mx-auto
              bg-primary text-text-negative rounded
              hover:bg-primary-dark transition-colors
            "
            onClick={onNewDocumentClick}
            title="New Document"
          >
            <Plus className="size-5" color="#f7f6ff" />
          </button>
        </div>
      )}

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-2">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <div key={item.id}>
              <SidebarNavItem
                label={item.label}
                icon={item.icon}
                state={item.active ? 'active' : 'default'}
                collapsed={isCollapsed}
                showExpandArrow={!isCollapsed && item.children && item.children.length > 0}
                expanded={expandedItems.has(item.id)}
                onClick={() => handleNavItemClick(item)}
              />
              {/* Sub items */}
              {!isCollapsed && item.children && expandedItems.has(item.id) && (
                <div className="mt-1">
                  {item.children.map((child) => (
                    <SidebarSubItem
                      key={child.id}
                      label={child.label}
                      state={child.active ? 'active' : 'default'}
                      onClick={() => onSubItemClick?.(item.id, child.id)}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* Footer actions */}
      <div className="p-2 border-t border-secondary-dark">
        <SidebarActions
          collapsed={isCollapsed}
          onSettingsClick={onSettingsClick}
          onHelpClick={onHelpClick}
          onLogoutClick={onLogoutClick}
        />
      </div>
    </div>
  );
};

export default Sidebar;
