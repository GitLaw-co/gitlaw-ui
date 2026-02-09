import { default as React } from '../../node_modules/react';
import { SidebarMenuItem, SidebarChatHistoryItem } from './Sidebar';
import { BreadcrumbItem } from './TopHeader';
import { DropdownItem } from './Dropdown';

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
export declare const PageShell: React.FC<PageShellProps>;
export default PageShell;
