import { default as React } from '../../node_modules/react';

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
export declare const Sidebar: React.FC<SidebarProps>;
export default Sidebar;
