import React from 'react';
import { PenSquare } from '../icons/PenSquare';
import { FolderClosed } from '../icons/FolderClosed';
import { LayoutGrid } from '../icons/LayoutGrid';
import { Bell } from '../icons/Bell';
import { MessageCircle } from '../icons/MessageCircle';
import { ChevronsLeft } from '../icons/ChevronsLeft';
import { Search } from '../icons/Search';
import { Home } from '../icons/Home';
import { Sparkles } from '../icons/Sparkles';
import { TagIcon } from '../icons/Tag';
import { CircleHelp } from '../icons/CircleHelp';
import { Rss } from '../icons/Rss';
import { ChevronUp } from '../icons/ChevronUp';

// Import logo SVGs as URLs
// Note: File names are swapped - "inner" files have white logos, "landing" files have purple logos
// So we swap them here to use the correct colors for each variant
import innerLogoCollapsed from '../../Assets/landing-logo-collapsed.svg';  // purple logo for light bg
import innerLogoExpanded from '../../Assets/landing-logo-expanded.svg';    // purple logo for light bg
import landingLogoCollapsed from '../../Assets/inner-logo-collapsed.svg';  // white logo for dark bg
import landingLogoExpanded from '../../Assets/inner-logo-expanded.svg';    // white logo for dark bg

export type SidebarVariant = 'landing' | 'inner';
export type SidebarStatus = 'collapsed' | 'expanded';
export type SidebarUser = 'signed-in' | 'signed-out';

export interface SidebarMenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  active?: boolean;
}

export interface SidebarChatHistoryItem {
  id: string;
  label: string;
  isDateHeader?: boolean;
}

export interface SidebarProps {
  /** Sidebar variant - landing (dark) or inner (light) */
  variant?: SidebarVariant;
  /** Sidebar status - collapsed or expanded */
  status?: SidebarStatus;
  /** User authentication status */
  user?: SidebarUser;
  /** Main menu items */
  menuItems?: SidebarMenuItem[];
  /** Chat history items (shown in expanded signed-in state) */
  chatHistory?: SidebarChatHistoryItem[];
  /** User name for profile */
  userName?: string;
  /** User initials for avatar */
  userInitials?: string;
  /** User avatar image */
  userAvatar?: string;
  /** Callback when collapse/expand is toggled */
  onToggle?: () => void;
  /** Callback when menu item is clicked */
  onMenuItemClick?: (id: string) => void;
  /** Callback when chat history item is clicked */
  onChatHistoryClick?: (id: string) => void;
  /** Additional CSS classes */
  className?: string;
}

// Icon size constant - 20x20px as per specs
const ICON_SIZE = 'size-5'; // 20px

// Default menu items for signed-in users
const defaultSignedInMenuItems: SidebarMenuItem[] = [
  { id: 'new-chat', label: 'New chat', icon: <PenSquare className={ICON_SIZE} /> },
  { id: 'files', label: 'Files', icon: <FolderClosed className={ICON_SIZE} /> },
  { id: 'templates', label: 'Templates', icon: <LayoutGrid className={ICON_SIZE} /> },
  { id: 'reminders', label: 'Reminders', icon: <Bell className={ICON_SIZE} /> },
];

// Default menu items for signed-out users
const defaultSignedOutMenuItems: SidebarMenuItem[] = [
  { id: 'home', label: 'Home', icon: <Home className={ICON_SIZE} /> },
  { id: 'features', label: 'Features', icon: <Sparkles className={ICON_SIZE} /> },
  { id: 'pricing', label: 'Pricing', icon: <TagIcon className={ICON_SIZE} /> },
  { id: 'templates', label: 'Templates', icon: <LayoutGrid className={ICON_SIZE} /> },
  { id: 'knowledge-base', label: 'Knowledge base', icon: <CircleHelp className={ICON_SIZE} /> },
  { id: 'news', label: 'News', icon: <Rss className={ICON_SIZE} /> },
];

// Default chat history
const defaultChatHistory: SidebarChatHistoryItem[] = [
  { id: 'today', label: 'Chat history', isDateHeader: true },
  { id: '1', label: 'BlueCrate Studio Case: Freelanc...' },
  { id: '2', label: 'MNDA with Nick Logan' },
  { id: '3', label: 'Sarah Tan: Employee Offer Letter' },
  { id: '4', label: 'MNDA with John Carter' },
  { id: '5', label: 'Alpha Tech: Software Developme...' },
  { id: '6', label: 'CloudSmith Solutions: Service-L...' },
  { id: '7', label: 'MNDA with John Carter' },
  { id: '8', label: 'Partnership Agreement: TechFlow' },
  { id: '9', label: 'NDA Review: Quantum Labs' },
  { id: '10', label: 'Employment Contract: Mike Chen' },
  { id: '11', label: 'Vendor Agreement: DataSync Inc' },
  { id: '12', label: 'IP Assignment: Creative Works' },
  { id: '13', label: 'Lease Agreement: Office Space' },
  { id: '14', label: 'Consulting Agreement: J. Smith' },
  { id: '15', label: 'Terms of Service Review' },
  { id: '16', label: 'Privacy Policy Draft' },
  { id: '17', label: 'SaaS Agreement: CloudNine' },
];

export const Sidebar: React.FC<SidebarProps> = ({
  variant = 'inner',
  status = 'expanded',
  user = 'signed-in',
  menuItems,
  chatHistory = defaultChatHistory,
  userName = 'Alex Carter',
  userInitials = 'AC',
  userAvatar,
  onToggle,
  onMenuItemClick,
  onChatHistoryClick,
  className = '',
}) => {
  const isLanding = variant === 'landing';
  const isCollapsed = status === 'collapsed';
  const isSignedIn = user === 'signed-in';

  // Use appropriate default menu items based on user state
  const items = menuItems || (isSignedIn ? defaultSignedInMenuItems : defaultSignedOutMenuItems);

  // Get the correct logo based on variant and status
  const getLogo = () => {
    if (isLanding) {
      return isCollapsed ? landingLogoCollapsed : landingLogoExpanded;
    }
    return isCollapsed ? innerLogoCollapsed : innerLogoExpanded;
  };

  // Color configuration based on variant
  // Landing: dark purple background (#5E49D6) with light text/icons
  // Inner: light purple background (#F3F1FF) with dark text/icons
  const colors = {
    bg: isLanding ? 'bg-[#5E49D6]' : 'bg-sidebar-background',
    // Main menu item text: button-negative-text (#F7F6FF) for landing, button-text (#5E49D6) for inner
    menuText: isLanding ? 'text-text-button-negative' : 'text-text-button',
    // Main menu icon colors
    menuIcon: isLanding ? '#F7F6FF' : '#5E49D6',
    // Chat history heading: ai-chat-placeholder (#CFC8F3) for landing, secondary-text (#989898) for inner
    chatHeadingText: isLanding ? 'text-text-ai-chat-placeholder' : 'text-text-secondary',
    // Chat history item text: negative-text (#F7F6FF) for landing, primary-text (#1B1B1F) for inner
    chatItemText: isLanding ? 'text-text-negative' : 'text-text-primary',
    // Chat history icon colors
    chatIcon: isLanding ? '#F7F6FF' : '#989898',
    // Hover states
    hoverBg: isLanding ? 'hover:bg-purple-600' : 'hover:bg-sidebar-hover',
    selectedBg: isLanding ? 'bg-secondary' : 'bg-secondary',
  };

  const width = isCollapsed ? 'w-16' : 'w-72';

  return (
    <div
      className={`
        ${colors.bg} ${width}
        flex flex-col h-full min-h-[600px]
        px-2 py-3 relative
        transition-all duration-200
        ${className}
      `}
    >
      {/* Header / Logo Area (only for signed-in users) */}
      {isSignedIn && (
        <div className={`flex items-center shrink-0 ${isCollapsed ? 'justify-center' : 'justify-between'} h-12`}>
          {isCollapsed ? (
            // Collapsed: Show only logo icon
            <div className="flex items-center justify-center h-12">
              <img src={getLogo()} alt="GitLaw" className="h-8" />
            </div>
          ) : (
            // Expanded: Show logo and controls
            <>
              <div className="flex items-center px-3 h-12">
                <img src={getLogo()} alt="GitLaw" className="h-8" />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className={`size-10 flex items-center justify-center rounded ${colors.hoverBg} transition-colors`}
                  aria-label="Search"
                >
                  <Search className={ICON_SIZE} color={colors.menuIcon} />
                </button>
                <button
                  type="button"
                  onClick={onToggle}
                  className={`size-10 flex items-center justify-center rounded ${colors.hoverBg} transition-colors`}
                  aria-label="Collapse sidebar"
                >
                  <ChevronsLeft className={ICON_SIZE} color={colors.menuIcon} />
                </button>
              </div>
            </>
          )}
        </div>
      )}

      {/* Main Menu Items */}
      {/* For signed-out: vertically centered with flex-1 spacers */}
      {!isSignedIn && <div className="flex-1" />}
      <nav className="flex flex-col shrink-0">
        {items.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onMenuItemClick?.(item.id)}
            className={`
              flex items-center gap-2 min-h-12 p-3 rounded
              ${colors.hoverBg} transition-colors
              ${item.active ? colors.selectedBg : ''}
              ${isCollapsed ? 'justify-center' : ''}
            `}
          >
            {item.icon && (
              <span className="shrink-0">
                {React.cloneElement(item.icon as React.ReactElement, {
                  color: colors.menuIcon,
                  className: ICON_SIZE,
                })}
              </span>
            )}
            {!isCollapsed && (
              <span className={`text-base font-normal ${colors.menuText} truncate`}>
                {item.label}
              </span>
            )}
          </button>
        ))}
      </nav>
      {!isSignedIn && <div className="flex-1" />}

      {/* Chat History (only in expanded signed-in state) */}
      {/* 16px (mt-4) vertical margin between main nav and chat history */}
      {!isCollapsed && isSignedIn && chatHistory.length > 0 && (
        <div className="flex flex-col mt-4 flex-1 min-h-0 overflow-y-auto">
          {chatHistory.map((chat) => (
            <React.Fragment key={chat.id}>
              {chat.isDateHeader ? (
                // Chat history heading: sm size, ai-chat-placeholder in landing, secondary-text in inner
                <div className={`px-3 py-3 text-sm font-normal ${colors.chatHeadingText}`}>
                  {chat.label}
                </div>
              ) : (
                // Chat history item: sm size, negative-text in landing, primary-text in inner
                <button
                  type="button"
                  onClick={() => onChatHistoryClick?.(chat.id)}
                  className={`
                    flex items-center gap-2 min-h-12 p-3 rounded
                    ${colors.hoverBg} transition-colors text-left
                  `}
                >
                  <MessageCircle className={ICON_SIZE} color={colors.chatIcon} />
                  <span className={`text-sm font-normal ${colors.chatItemText} truncate`}>
                    {chat.label}
                  </span>
                </button>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {/* Spacer for collapsed state (signed-in only) */}
      {isCollapsed && isSignedIn && <div className="flex-1" />}

      {/* Profile Section (only for signed-in users) */}
      {/* Expanded: white background (card), collapsed: no background (just avatar) */}
      {/* Always sticks to bottom - shrink-0 ensures it never shrinks */}
      {isSignedIn && (
        <div className={`shrink-0 pt-2 ${isCollapsed ? 'flex justify-center' : ''}`}>
          <button
            type="button"
            className={`
              flex items-center gap-2 min-h-12 p-3 rounded
              transition-colors
              ${isCollapsed ? 'justify-center' : 'w-full bg-card'}
            `}
          >
            {/* Avatar */}
            <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
              {userAvatar ? (
                <img src={userAvatar} alt={userName} className="w-full h-full object-cover rounded" />
              ) : (
                <span className="text-sm font-black text-text-negative">{userInitials}</span>
              )}
            </div>
            {!isCollapsed && (
              <>
                <span className="text-base font-normal text-text-primary truncate flex-1 text-left">
                  {userName}
                </span>
                <ChevronUp className={ICON_SIZE} color="#1B1B1F" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
