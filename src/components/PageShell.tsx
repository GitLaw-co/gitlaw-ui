import React, { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopHeader } from "./TopHeader";
import type { SidebarMenuItem, SidebarChatHistoryItem } from "./Sidebar";
import type { BreadcrumbItem } from "./TopHeader";

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
  /** Callback when sidebar is toggled */
  onSidebarToggle?: (collapsed: boolean) => void;
}

/**
 * PageShell — App chrome for settings / files pages.
 *
 * Layout: Sidebar (64px collapsed / 288px expanded) | TopHeader + scrollable content area.
 * Content area starts at 84px from left (sidebar 64px + 20px gap) and 96px from top (header 64px + 32px gap).
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
  children,
  className = "",
  onSidebarToggle,
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    initialSidebarCollapsed
  );

  const handleSidebarToggle = () => {
    const next = !sidebarCollapsed;
    setSidebarCollapsed(next);
    onSidebarToggle?.(next);
  };

  const sidebarWidth = sidebarCollapsed ? "w-16" : "w-72";

  return (
    <div
      className={`flex h-screen max-h-screen w-screen max-w-full overflow-hidden bg-page-background ${className}`}
    >
      {/* Sidebar */}
      <div
        className={`h-full shrink-0 transition-[width] duration-normal ease-gitlaw ${sidebarWidth}`}
      >
        <Sidebar
          variant={sidebarVariant}
          status={sidebarCollapsed ? "collapsed" : "expanded"}
          user={isSignedIn ? "signed-in" : "signed-out"}
          userName={userName}
          userInitials={userInitials}
          userAvatar={userAvatar}
          menuItems={menuItems}
          chatHistory={chatHistory}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Main area: header + scrollable content */}
      <div className="flex flex-col flex-1 min-w-0 h-full">
        <TopHeader
          title={title}
          breadcrumbs={breadcrumbs}
          showStroke={showHeaderStroke}
          isSignedIn={isSignedIn}
        />

        <div className="flex-1 min-h-0 overflow-y-auto">
          <div className="px-[84px] pt-8 pb-16">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageShell;
