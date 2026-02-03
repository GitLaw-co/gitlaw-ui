import React from "react";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { colors as dsColors } from "../specs";

// Import logo SVGs as URLs
// Note: File names are swapped - "inner" files have white logos, "landing" files have purple logos
// So we swap them here to use the correct colors for each variant
import innerLogoCollapsed from "../../Assets/landing-logo-collapsed.svg"; // purple logo for light bg
import innerLogoExpanded from "../../Assets/landing-logo-expanded.svg"; // purple logo for light bg
import landingLogoCollapsed from "../../Assets/inner-logo-collapsed.svg"; // white logo for dark bg
import landingLogoExpanded from "../../Assets/inner-logo-expanded.svg"; // white logo for dark bg

export type SidebarVariant = "landing" | "inner";
export type SidebarStatus = "collapsed" | "expanded";
export type SidebarUser = "signed-in" | "signed-out";

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
const ICON_SIZE = "size-5"; // 20px

// Default menu items for signed-in users
const defaultSignedInMenuItems: SidebarMenuItem[] = [
  {
    id: "new-chat",
    label: "New chat",
    icon: <Icon name="message-circle-plus" className={ICON_SIZE} />,
  },
  {
    id: "files",
    label: "Files",
    icon: <Icon name="folder-closed" className={ICON_SIZE} />,
  },
  {
    id: "templates",
    label: "Templates",
    icon: <Icon name="layout-grid" className={ICON_SIZE} />,
  },
  {
    id: "reminders",
    label: "Reminders",
    icon: <Icon name="bell" className={ICON_SIZE} />,
  },
];

// Default menu items for signed-out users
const defaultSignedOutMenuItems: SidebarMenuItem[] = [
  {
    id: "home",
    label: "Home",
    icon: <Icon name="home" className={ICON_SIZE} />,
  },
  {
    id: "features",
    label: "Features",
    icon: <Icon name="sparkles" className={ICON_SIZE} />,
  },
  {
    id: "pricing",
    label: "Pricing",
    icon: <Icon name="tag" className={ICON_SIZE} />,
  },
  {
    id: "templates",
    label: "Templates",
    icon: <Icon name="layout-grid" className={ICON_SIZE} />,
  },
  {
    id: "knowledge-base",
    label: "Knowledge base",
    icon: <Icon name="circle-help" className={ICON_SIZE} />,
  },
  {
    id: "news",
    label: "News",
    icon: <Icon name="rss" className={ICON_SIZE} />,
  },
];

// Default chat history
const defaultChatHistory: SidebarChatHistoryItem[] = [
  { id: "today", label: "Chat history", isDateHeader: true },
  { id: "1", label: "BlueCrate Studio Case: Freelanc..." },
  { id: "2", label: "MNDA with Nick Logan" },
  { id: "3", label: "Sarah Tan: Employee Offer Letter" },
  { id: "4", label: "MNDA with John Carter" },
  { id: "5", label: "Alpha Tech: Software Developme..." },
  { id: "6", label: "CloudSmith Solutions: Service-L..." },
  { id: "7", label: "MNDA with John Carter" },
  { id: "8", label: "Partnership Agreement: TechFlow" },
  { id: "9", label: "NDA Review: Quantum Labs" },
  { id: "10", label: "Employment Contract: Mike Chen" },
  { id: "11", label: "Vendor Agreement: DataSync Inc" },
  { id: "12", label: "IP Assignment: Creative Works" },
  { id: "13", label: "Lease Agreement: Office Space" },
  { id: "14", label: "Consulting Agreement: J. Smith" },
  { id: "15", label: "Terms of Service Review" },
  { id: "16", label: "Privacy Policy Draft" },
  { id: "17", label: "SaaS Agreement: CloudNine" },
];

export const Sidebar: React.FC<SidebarProps> = ({
  variant = "inner",
  status = "expanded",
  user = "signed-in",
  menuItems,
  chatHistory = defaultChatHistory,
  userName = "Alex Carter",
  userInitials = "AC",
  userAvatar,
  onToggle,
  onMenuItemClick,
  onChatHistoryClick,
  className = "",
}) => {
  const isLanding = variant === "landing";
  const isCollapsed = status === "collapsed";
  const isSignedIn = user === "signed-in";

  // Use appropriate default menu items based on user state
  const items =
    menuItems ||
    (isSignedIn ? defaultSignedInMenuItems : defaultSignedOutMenuItems);

  // Get the correct logo based on variant and status
  const getLogo = () => {
    if (isLanding) {
      return isCollapsed ? landingLogoCollapsed : landingLogoExpanded;
    }
    return isCollapsed ? innerLogoCollapsed : innerLogoExpanded;
  };

  // Color configuration based on variant
  // Landing: dark purple background (primary) with light text/icons
  // Inner: light purple background (sidebar-background) with dark text/icons
  const themeColors = {
    bg: isLanding ? "bg-primary" : "bg-sidebar-background",
    // Main menu item text: button-negative-text for landing, button-text for inner
    menuText: isLanding
      ? "text-foreground-button-negative"
      : "text-foreground-button",
    // Main menu icon colors (using design system constants)
    menuIcon: isLanding ? dsColors.iconNegative : dsColors.iconPrimary,
    // Chat history heading: ai-chat-placeholder for landing, secondary-text for inner
    chatHeadingText: isLanding
      ? "text-foreground-ai-placeholder"
      : "text-subtle",
    // Chat history item text: negative-text for landing, primary-text for inner
    chatItemText: isLanding ? "text-negative" : "text-foreground",
    // Chat history icon colors (using design system constants)
    chatIcon: isLanding ? dsColors.iconNegative : dsColors.iconSecondary,
    // Hover states
    hoverBg: isLanding ? "hover:bg-purple-600" : "hover:bg-sidebar-hover",
    selectedBg: isLanding ? "bg-secondary" : "bg-secondary",
    // Text primary for chevron icon
    textPrimary: dsColors.textPrimary,
  };

  const width = isCollapsed ? "w-16" : "w-72";

  return (
    <div
      className={`
        ${themeColors.bg} ${width}
        flex flex-col h-full min-h-[600px]
        px-2 py-3 relative
        transition-all duration-200
        ${className}
      `}
    >
      {/* Header / Logo Area (only for signed-in users) */}
      {isSignedIn && (
        <div
          className={`flex items-center shrink-0 ${isCollapsed ? "justify-center" : "justify-between"} h-12`}
        >
          {isCollapsed ? (
            // Collapsed: Logo is a button that expands the sidebar
            <Tooltip content="Open sidebar" size="m" type="neutral">
              <button
                type="button"
                onClick={onToggle}
                className={`flex items-center justify-center h-12 p-3 rounded ${themeColors.hoverBg} transition-colors`}
                aria-label="Open sidebar"
              >
                <img src={getLogo()} alt="GitLaw" className="h-8" />
              </button>
            </Tooltip>
          ) : (
            // Expanded: Show logo and controls
            <>
              <div className="flex items-center gap-2 px-3 h-12">
                <img src={getLogo()} alt="GitLaw" className="h-8" />
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  className={`size-10 flex items-center justify-center rounded ${themeColors.hoverBg} transition-colors`}
                  aria-label="Search"
                >
                  <Icon
                    name="search"
                    className={ICON_SIZE}
                    color={themeColors.menuIcon}
                  />
                </button>
                <button
                  type="button"
                  onClick={onToggle}
                  className={`size-10 flex items-center justify-center rounded ${themeColors.hoverBg} transition-colors`}
                  aria-label="Collapse sidebar"
                >
                  <Icon
                    name="chevrons-left"
                    className={ICON_SIZE}
                    color={themeColors.menuIcon}
                  />
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
        {items.map((item) => {
          const buttonContent = (
            <button
              key={item.id}
              type="button"
              onClick={() => onMenuItemClick?.(item.id)}
              className={`
                flex items-center gap-2 min-h-12 p-3 rounded w-full
                ${themeColors.hoverBg} transition-colors
                ${item.active ? themeColors.selectedBg : ""}
                ${isCollapsed ? "justify-center" : ""}
              `}
            >
              {item.icon && (
                <span className="shrink-0">
                  {React.cloneElement(item.icon as React.ReactElement, {
                    color: themeColors.menuIcon,
                    className: ICON_SIZE,
                  })}
                </span>
              )}
              {!isCollapsed && (
                <span
                  className={`text-base font-normal ${themeColors.menuText} truncate`}
                >
                  {item.label}
                </span>
              )}
            </button>
          );

          // Show tooltips only for collapsed signed-in state
          if (isCollapsed && isSignedIn) {
            return (
              <Tooltip
                key={item.id}
                content={item.label}
                size="m"
                type="neutral"
              >
                {buttonContent}
              </Tooltip>
            );
          }

          return <React.Fragment key={item.id}>{buttonContent}</React.Fragment>;
        })}
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
                <div
                  className={`px-3 py-3 text-sm font-normal ${themeColors.chatHeadingText}`}
                >
                  {chat.label}
                </div>
              ) : (
                // Chat history item: sm size, negative-text in landing, primary-text in inner
                <button
                  type="button"
                  onClick={() => onChatHistoryClick?.(chat.id)}
                  className={`
                    flex items-center gap-2 min-h-12 p-3 rounded
                    ${themeColors.hoverBg} transition-colors text-left
                  `}
                >
                  <Icon
                    name="message-circle"
                    className={ICON_SIZE}
                    color={themeColors.chatIcon}
                  />
                  <span
                    className={`text-sm font-normal ${themeColors.chatItemText} truncate`}
                  >
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
        <div
          className={`shrink-0 pt-2 ${isCollapsed ? "flex justify-center" : ""}`}
        >
          {isCollapsed ? (
            <Tooltip content={userName} size="m" type="neutral">
              <button
                type="button"
                className="flex items-center justify-center min-h-12 p-3 rounded transition-colors"
              >
                {/* Avatar */}
                <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
                  {userAvatar ? (
                    <img
                      src={userAvatar}
                      alt={userName}
                      className="w-full h-full object-cover rounded"
                    />
                  ) : (
                    <span className="text-sm font-black text-negative">
                      {userInitials}
                    </span>
                  )}
                </div>
              </button>
            </Tooltip>
          ) : (
            <button
              type="button"
              className="flex items-center gap-2 min-h-12 p-3 rounded transition-colors w-full bg-card"
            >
              {/* Avatar */}
              <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
                {userAvatar ? (
                  <img
                    src={userAvatar}
                    alt={userName}
                    className="w-full h-full object-cover rounded"
                  />
                ) : (
                  <span className="text-sm font-black text-negative">
                    {userInitials}
                  </span>
                )}
              </div>
              <span className="text-base font-normal text-foreground truncate flex-1 text-left">
                {userName}
              </span>
              <Icon
                name="chevron-up"
                className={ICON_SIZE}
                color={themeColors.textPrimary}
              />
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
