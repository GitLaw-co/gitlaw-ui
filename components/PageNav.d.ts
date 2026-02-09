import { default as React } from '../../node_modules/react';

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
export declare const PageNav: React.FC<PageNavProps>;
export default PageNav;
