import { default as React } from '../../node_modules/react';

export interface DropdownItem {
    /** Unique identifier for the item */
    id: string;
    /** Primary label text */
    label: string;
    /** Optional secondary label text */
    secondaryLabel?: string;
    /** Icon name (from lucide icons) */
    icon?: string;
    /** Whether the item is selected/checked */
    selected?: boolean;
    /** Whether the item is disabled */
    disabled?: boolean;
    /** Click handler */
    onClick?: () => void;
}
export interface DropdownProps {
    /** List of dropdown items */
    items: DropdownItem[];
    /** Optional heading text */
    heading?: string;
    /** Whether to show icons */
    showIcons?: boolean;
    /** Whether the dropdown is open (enables fade+scale animation) */
    isOpen?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Dropdown: React.FC<DropdownProps>;
export default Dropdown;
