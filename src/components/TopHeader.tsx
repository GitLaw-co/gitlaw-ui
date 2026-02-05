import React, { useState, useRef, useEffect } from "react";
import { Icon } from "./Icon";
import { Badge } from "./Badge";
import { Button } from "./Button";
import { colors } from "../specs";
import { Tooltip } from "./Tooltip";
import { FileDropdown, FileItem } from "./FileDropdown";

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
export const TopHeader: React.FC<TopHeaderProps> = ({
  title,
  breadcrumbs = [],
  showStroke = true,
  showFiles = false,
  fileCount = 0,
  isSignedIn = true,
  isLanding = false,
  showMenu = false,
  onTitleClick,
  onFilesClick,
  files = [],
  selectedFileId,
  onFileSelect,
  onMenuClick,
  onLoginClick,
  onSignUpClick,
  className = "",
}) => {
  const [isFileDropdownOpen, setIsFileDropdownOpen] = useState(false);
  const fileDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isFileDropdownOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (fileDropdownRef.current && !fileDropdownRef.current.contains(event.target as Node)) {
        setIsFileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isFileDropdownOpen]);

  const handleFilesClick = () => {
    if (files.length > 0) {
      setIsFileDropdownOpen(!isFileDropdownOpen);
    } else {
      onFilesClick?.();
    }
  };

  const handleFileSelect = (file: FileItem) => {
    setIsFileDropdownOpen(false);
    onFileSelect?.(file);
  };
  // Determine background based on landing state
  const bgClass = isLanding ? "bg-landing" : "bg-page-background";

  // Text/icon colors based on landing state
  const textColor = isLanding ? "text-negative" : "text-link";
  const iconColor = isLanding ? colors.iconNegative : colors.iconPrimary;
  const separatorColor = isLanding ? "text-negative/60" : "text-secondary";

  // Render breadcrumb navigation
  const renderBreadcrumbs = () => {
    // If we have a simple title, render it
    if (title && breadcrumbs.length === 0) {
      return (
        <span
          className={`text-base font-normal ${isLanding ? "text-negative" : "text-primary"} text-left truncate`}
        >
          {title}
        </span>
      );
    }

    // If no breadcrumbs, return null
    if (breadcrumbs.length === 0) return null;

    // If 3 or fewer levels, show all
    if (breadcrumbs.length <= 3) {
      return (
        <div className="flex items-center gap-0.5">
          {breadcrumbs.map((item, index) => (
            <React.Fragment key={item.id}>
              <button
                type="button"
                onClick={item.onClick}
                className={`text-base font-normal ${textColor} hover:underline`}
              >
                {item.label}
              </button>
              {index < breadcrumbs.length - 1 && (
                <Icon
                  name="chevron-right"
                  className="size-5"
                  color={isLanding ? colors.iconNegative : colors.iconSecondary}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      );
    }

    // More than 3 levels: show "..." > second-to-last > last
    const lastTwo = breadcrumbs.slice(-2);
    return (
      <div className="flex items-center gap-0.5">
        {/* Ellipsis for collapsed items */}
        <button
          type="button"
          className={`text-base font-normal ${separatorColor} hover:${textColor}`}
          title="View all levels"
        >
          ...
        </button>
        <Icon
          name="chevron-right"
          className="size-5"
          color={isLanding ? colors.iconNegative : colors.iconSecondary}
        />
        {/* Last two items */}
        {lastTwo.map((item, index) => (
          <React.Fragment key={item.id}>
            <button
              type="button"
              onClick={item.onClick}
              className={`text-base font-normal ${textColor} hover:underline`}
            >
              {item.label}
            </button>
            {index < lastTwo.length - 1 && (
              <Icon
                name="chevron-right"
                className="size-5"
                color={isLanding ? colors.iconNegative : colors.iconSecondary}
              />
            )}
          </React.Fragment>
        ))}
      </div>
    );
  };

  // Prepare files with isSelected flag
  const filesWithSelection = files.map((file) => ({
    ...file,
    isSelected: file.id === selectedFileId,
  }));

  // Render right-hand actions for signed-in users
  const renderSignedInActions = () => (
    <div className="flex items-center gap-1">
      {/* Files button with dropdown */}
      {showFiles && (
        <div ref={fileDropdownRef} className="relative">
          <Tooltip content="Files" size="m" type="neutral" disabled={isFileDropdownOpen}>
            <div className="relative">
              <button
                type="button"
                onClick={handleFilesClick}
                className={`size-10 flex items-center justify-center rounded hover:bg-secondary/30 transition-colors duration-fast ease-gitlaw`}
                aria-label="Files"
              >
                <Icon name="file-text" className="size-6" color={iconColor} />
              </button>
              {fileCount > 1 && (
                <div className="absolute -top-1 -right-1">
                  <Badge type="primary" count={fileCount} showNumber />
                </div>
              )}
            </div>
          </Tooltip>

          {/* File dropdown */}
          {filesWithSelection.length > 0 && (
            <div
              className={`
                absolute top-full right-0 mt-2 z-50
                transition-[opacity,transform] duration-fast ease-gitlaw origin-top-right
                ${isFileDropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}
              `}
            >
              <FileDropdown
                files={filesWithSelection}
                onFileClick={handleFileSelect}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );

  // Render right-hand actions for logged-out users
  const renderLoggedOutActions = () => (
    <div className="flex items-center gap-4">
      <Button variant="ghost" size="m" onClick={onLoginClick}>
        Log In
      </Button>
      <Button variant="primary" size="m" onClick={onSignUpClick}>
        Sign Up
      </Button>
    </div>
  );

  return (
    <header
      className={`
        h-16 w-full
        flex items-center gap-2 px-4 py-1.5
        ${bgClass}
        ${showStroke && !isLanding ? "border-b-dashed" : ""}
        ${className}
      `}
    >
      {/* Left section */}
      <div className="flex-1 flex items-center justify-start gap-1 min-w-0 relative">
        {/* Menu button (logged out landing only) */}
        {showMenu && !isSignedIn && isLanding && (
          <button
            type="button"
            onClick={onMenuClick}
            className="size-10 flex items-center justify-center rounded hover:bg-white/10 transition-colors duration-fast ease-gitlaw shrink-0"
            aria-label="Menu"
          >
            <Icon name="menu" className="size-6" color={colors.iconNegative} />
          </button>
        )}

        {/* Breadcrumbs / Title */}
        {renderBreadcrumbs()}
      </div>

      {/* Right section */}
      <div className="flex items-center h-[52px] shrink-0 relative">
        {isSignedIn ? renderSignedInActions() : renderLoggedOutActions()}
      </div>
    </header>
  );
};

export default TopHeader;
