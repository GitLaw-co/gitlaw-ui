import { default as React } from '../../node_modules/react';

export interface FileItem {
    /** Unique identifier */
    id: string;
    /** File name to display */
    name: string;
    /** Whether this file is currently selected/open */
    isSelected?: boolean;
}
export interface FileDropdownProps {
    /** List of files to display */
    files: FileItem[];
    /** Callback when a file is clicked */
    onFileClick?: (file: FileItem) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * FileDropdown - Dropdown menu showing a list of files
 *
 * Used in TopHeader to show attached/available files.
 * Shows document icon, file name, and checkmark for selected file.
 */
export declare const FileDropdown: React.FC<FileDropdownProps>;
export default FileDropdown;
