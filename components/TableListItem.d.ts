import { default as React } from '../../node_modules/react';
import { CheckboxStatus } from './Checkbox';

export type TableListItemType = "item" | "header" | "skeleton" | "drag-and-drop";
export type TableListItemCols = 0 | 2 | 4 | 6;
export type TableListItemVisibility = "private" | "public" | "shared" | "organization";
export type SortDirection = "asc" | "desc";
export interface TableListItemProps {
    /** Row type */
    type?: TableListItemType;
    /** Number of visible columns (responsive) */
    cols?: TableListItemCols;
    /** Icon name for the row (e.g. "folder", "file-text") */
    iconName?: string;
    /** Row title */
    title?: string;
    /** Secondary text below title */
    subtitle?: string;
    /** Sharing visibility — determines which tag icon to show (same as Card) */
    visibility?: TableListItemVisibility;
    /** Star count — shown as tag for public documents (e.g. "17K") */
    starCount?: string;
    /** Whether the item is spam — shows a red spam tag */
    spam?: boolean;
    /** Metadata values for visible columns (ordered by column) */
    metaValues?: string[];
    /** Selected state — shows purple border ring */
    selected?: boolean;
    /** Starred state */
    starred?: boolean;
    /** Star click handler */
    onStarClick?: () => void;
    /** Menu click handler */
    onMenuClick?: () => void;
    /** Row click handler */
    onClick?: () => void;
    /** Row double-click handler */
    onDoubleClick?: () => void;
    /** Column header labels (for header type) */
    headerLabels?: string[];
    /** Show select-all checkbox in header */
    selectMode?: boolean;
    /** Checkbox state for select-all */
    selectStatus?: CheckboxStatus;
    /** Select-all checkbox handler */
    onSelectAllClick?: () => void;
    /** Number of selected items (shown in header when selectMode is true) */
    selectedCount?: number;
    /** Currently sorted column key (matches label text, e.g. "Name", "Type") */
    sortColumn?: string;
    /** Sort direction */
    sortDirection?: SortDirection;
    /** Sort change handler — called when a header label is clicked */
    onSortChange?: (column: string, direction: SortDirection) => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const TableListItem: React.FC<TableListItemProps>;
export default TableListItem;
