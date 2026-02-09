import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import { Overlay } from "./Overlay";
import type { SidebarMenuItem, SidebarChatHistoryItem } from "./Sidebar";
import type { BreadcrumbItem } from "./TopHeader";
import type { DropdownItem } from "./Dropdown";

export interface PageShellProps {
  /** Page title displayed in TopHeader */
  title?: string;
  /** Breadcrumbs (overrides title in TopHeader) */
  breadcrumbs?: BreadcrumbItem[];
  /** Whether user is signed in */
  isSignedIn?: boolean;
  /** Sidebar variant */
  sidebarVariant?: "landing" | "inner";
  /** Initial sidebar collapsed state */
  initialSidebarCollapsed?: boolean;
  /** Sidebar menu items */
  menuItems?: SidebarMenuItem[];
  /** Chat history items for sidebar */
  chatHistory?: SidebarChatHistoryItem[];
  /** User display name */
  userName?: string;
  /** User initials for avatar fallback */
  userInitials?: string;
  /** User avatar URL */
  userAvatar?: string;
  /** Show bottom dashed stroke on TopHeader (default true, matching Figma settings pages) */
  showHeaderStroke?: boolean;
  /** Content to render in the main area */
  children: React.ReactNode;
  /** Additional CSS classes on the outer wrapper */
  className?: string;
  /** Page-nav items for mobile dropdown in TopHeader */
  mobileNavItems?: DropdownItem[];
  /** Active page-nav label shown as last breadcrumb on mobile (e.g. "Profile") */
  mobileNavActiveLabel?: string;
  /** Callback when sidebar is toggled */
  onSidebarToggle?: (collapsed: boolean) => void;
}

/**
 * PageShell — App chrome for settings / files pages.
 *
 * Desktop: Sidebar (64px collapsed / 288px expanded) in document flow | TopHeader + scrollable content.
 * Mobile (<768px): Sidebar hidden; hamburger in TopHeader opens sidebar as a sliding overlay.
 */
export const PageShell: React.FC<PageShellProps> = ({
  title = "Settings",
  breadcrumbs,
  isSignedIn = true,
  sidebarVariant = "inner",
  initialSidebarCollapsed = true,
  menuItems,
  chatHistory,
  userName = "Alex Carter",
  userInitials = "AC",
  userAvatar,
  showHeaderStroke = true,
  mobileNavItems,
  mobileNavActiveLabel,
  children,
  className = "",
  onSidebarToggle,
}) => {
  /* Desktop sidebar collapse state */
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    initialSidebarCollapsed
  );

  /* Mobile sidebar overlay state */
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    const next = !sidebarCollapsed;
    setSidebarCollapsed(next);
    onSidebarToggle?.(next);
  };

  const handleMobileSidebarToggle = () => {
    setMobileSidebarOpen((prev) => !prev);
  };

  const handleMobileSidebarClose = () => {
    setMobileSidebarOpen(false);
  };

  const sidebarWidth = sidebarCollapsed ? "w-16" : "w-72";

  /** Shared sidebar props */
  const sidebarProps = {
    variant: sidebarVariant as "landing" | "inner",
    user: (isSignedIn ? "signed-in" : "signed-out") as "signed-in" | "signed-out",
    userName,
    userInitials,
    userAvatar,
    menuItems,
    chatHistory,
  };

  return (
    <div
      className={`flex h-screen max-h-screen w-screen max-w-full overflow-hidden bg-page-background ${className}`}
    >
      {/* Desktop sidebar — in document flow, hidden on mobile */}
      <div
        className={`hidden md:block h-full shrink-0 transition-[width] duration-normal ease-gitlaw ${sidebarWidth}`}
      >
        <Sidebar
          {...sidebarProps}
          status={sidebarCollapsed ? "collapsed" : "expanded"}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Mobile sidebar overlay — visible only below md */}
      <Overlay
        open={mobileSidebarOpen}
        onClose={handleMobileSidebarClose}
        className="md:hidden"
      >
        <div
          className={`
            fixed top-0 left-0 h-full w-72 z-40
            transition-transform duration-normal ease-gitlaw
            ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          <Sidebar
            {...sidebarProps}
            status="expanded"
            onToggle={handleMobileSidebarClose}
          />
        </div>
      </Overlay>

      {/* Main area: header + scrollable content */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        <TopHeader
          title={title}
          breadcrumbs={breadcrumbs}
          showStroke={showHeaderStroke}
          isSignedIn={isSignedIn}
          showMenu={isSignedIn}
          onMenuClick={handleMobileSidebarToggle}
          mobileNavItems={mobileNavItems}
          mobileNavActiveLabel={mobileNavActiveLabel}
        />

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="px-6 md:px-[84px] pt-8 pb-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageShell;
