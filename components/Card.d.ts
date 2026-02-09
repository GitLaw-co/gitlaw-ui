import { default as React } from '../../node_modules/react';

export type CardType = "file" | "template" | "folder";
export type CardVisibility = "private" | "public" | "shared" | "organization";
export interface CardFileItem {
    id: string;
    name: string;
}
export interface CardProps {
    /** Card type - file, template (same format), or folder */
    type?: CardType;
    /** Card title */
    title: string;
    /** Card description (for file/template) */
    description?: string;
    /** Owner name */
    ownerName?: string;
    /** Owner initials */
    ownerInitials?: string;
    /** Owner avatar URL */
    ownerAvatar?: string;
    /** Visibility status */
    visibility?: CardVisibility;
    /** Organization name (required when visibility is 'organization') */
    organizationName?: string;
    /** Whether card is starred */
    starred?: boolean;
    /** Whether card is selected */
    selected?: boolean;
    /** Files count (for folder) */
    filesCount?: number;
    /** Files in folder (for folder type) */
    files?: CardFileItem[];
    /** On card click (single click selects) */
    onClick?: () => void;
    /** On card double click (opens document/folder) */
    onDoubleClick?: () => void;
    /** On star click */
    onStarClick?: () => void;
    /** On menu click */
    onMenuClick?: () => void;
    /** On file click within folder */
    onFileClick?: (file: CardFileItem) => void;
    /** Double click threshold in ms (default: 250ms) */
    doubleClickThreshold?: number;
    /** Compact mode — square (1:1), full-width, no min/max-w constraints. Use for mobile / narrow grids. */
    compact?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Card: React.FC<CardProps>;
export default Card;
