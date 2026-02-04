import React from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

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
export const FileDropdown: React.FC<FileDropdownProps> = ({
  files,
  onFileClick,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-card rounded-lg shadow-card
        flex flex-col gap-px p-2
        min-w-[280px]
        ${className}
      `}
    >
      {files.map((file) => (
        <button
          key={file.id}
          type="button"
          onClick={() => onFileClick?.(file)}
          className="
            flex items-center gap-2 p-3 min-h-[48px]
            hover:bg-secondary/30 rounded transition-colors
            w-full text-left
          "
        >
          {/* Document icon */}
          <Icon name="file-text" className="size-6 shrink-0" color={colors.iconPrimary} />

          {/* File name */}
          <span className="flex-1 text-base font-normal text-foreground leading-[1.4]">
            {file.name}
          </span>

          {/* Checkmark for selected file */}
          {file.isSelected && (
            <Icon name="check" className="size-5 shrink-0" color={colors.iconPrimary} />
          )}
        </button>
      ))}
    </div>
  );
};

export default FileDropdown;
