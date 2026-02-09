import { default as React } from '../../node_modules/react';

export type TabStatus = "default" | "selected" | "selected-underlined";
export interface TabProps {
    /** The label text */
    label?: string;
    /** The current status */
    status?: TabStatus;
    /** Show badge */
    showBadge?: boolean;
    /** Badge count */
    badgeCount?: number;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const Tab: React.FC<TabProps>;
export interface TabsProps {
    /** The tabs to display */
    tabs: Array<{
        label: string;
        badgeCount?: number;
    }>;
    /** Currently selected tab index */
    selectedIndex?: number;
    /** Selection change handler */
    onSelect?: (index: number) => void;
    /** Show badges */
    showBadges?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Tabs: React.FC<TabsProps>;
export default Tab;
