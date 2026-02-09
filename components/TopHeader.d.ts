import { default as React } from '../../node_modules/react';
import { DropdownItem } from './Dropdown';
import { FileItem } from './FileDropdown';

export interface BreadcrumbItem {
    /** Unique identifier */
    id: string;
    /** Display label */
    label: string;
    /** Click handler */
    onClick?: () => void;
}
export interface TopHeaderProps {
    /** Page title (simple single-level navigation) */
    title?: string;
    /** Breadcrumb items for multi-level navigation */
    breadcrumbs?: BreadcrumbItem[];
    /** Show bottom border/stroke */
    showStroke?: boolean;
    /** Show files icon button */
    showFiles?: boolean;
    /** Number of files (shown as badge when > 1) */
    fileCount?: number;
    /** Whether user is signed in */
    isSignedIn?: boolean;
    /** Whether this is the landing page variant (purple background) */
    isLanding?: boolean;
    /** Show hamburger menu (for logged out landing) */
    showMenu?: boolean;
    /** Click handler for title/breadcrumb */
    onTitleClick?: () => void;
    /** Click handler for files button (deprecated - use files array instead) */
    onFilesClick?: () => void;
    /** List of files to show in dropdown */
    files?: FileItem[];
    /** ID of currently selected/open file */
    selectedFileId?: string;
    /** Callback when a file is selected from dropdown */
    onFileSelect?: (file: FileItem) => void;
    /** Click handler for menu button */
    onMenuClick?: () => void;
    /** Click handler for login button */
    onLoginClick?: () => void;
    /** Click handler for sign up button */
    onSignUpClick?: () => void;
    /** Page-nav items for mobile dropdown (shown below last breadcrumb on mobile) */
    mobileNavItems?: DropdownItem[];
    /** Active page-nav item label (e.g. "Profile") — appended as last breadcrumb on mobile */
    mobileNavActiveLabel?: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * TopHeader component - Main page header with breadcrumb navigation and actions
 *
 * Features:
 * - Simple title or multi-level breadcrumb navigation
 * - Breadcrumbs auto-collapse with "..." when more than 3 levels
 * - Files button with optional count badge
 * - Landing page variant with purple background
 * - Logged out state with login/signup buttons
 */
export declare const TopHeader: React.FC<TopHeaderProps>;
export default TopHeader;
