import React from "react";
import { Button } from "./Button";
import { Tooltip } from "./Tooltip";

export interface EditorHeaderProps {
  /** Document title */
  title?: string;
  /** Show the Share button */
  showShare?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Callback when title/breadcrumb is clicked */
  onTitleClick?: () => void;
  /** Callback when ellipsis menu is clicked */
  onMenuClick?: () => void;
  /** Callback when share button is clicked */
  onShare?: () => void;
  /** Callback when eSign button is clicked */
  onESign?: () => void;
  /** Callback when download button is clicked */
  onDownload?: () => void;
  /** Callback when history/versions button is clicked */
  onVersions?: () => void;
  /** Callback when overflow menu is clicked */
  onMore?: () => void;
  /** Additional CSS classes */
  className?: string;
}

/** Icon button with tooltip for right-side actions */
const ActionButton: React.FC<{
  icon: string;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => (
  <Tooltip content={label} type="purple" position="bottom" size="s">
    <div>
      <Button variant="icon" size="m" onClick={onClick} leftIconName={icon} />
    </div>
  </Tooltip>
);

export const EditorHeader: React.FC<EditorHeaderProps> = ({
  title = "Untitled document",
  showShare = true,
  onClose,
  onTitleClick,
  onMenuClick,
  onShare,
  onESign,
  onDownload,
  onVersions,
  onMore,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-card border-b border-dashed border-border
        flex h-16 items-center justify-between
        px-gitlaw-xl py-gitlaw-m
        ${className}
      `}
    >
      {/* Left section: Close button + Title + Ellipsis - 4px gaps */}
      <div className="flex items-center gap-1">
        {/* Close button */}
        <Button variant="icon" size="m" onClick={onClose} leftIconName="x" />

        {/* Title/Breadcrumb - 4px gap */}
        <div className="flex items-center gap-1">
          <button
            onClick={onTitleClick}
            className="text-base font-normal text-primary hover:underline"
          >
            {title}
          </button>
          <Button
            variant="icon"
            size="s"
            onClick={onMenuClick}
            leftIconName="ellipsis"
          />
        </div>
      </div>

      {/* Right section: Share button + Icon buttons */}
      <div className="flex items-center gap-2">
        {/* Share button */}
        {showShare && (
          <Button
            variant="outline"
            size="m"
            showLeftIcon
            leftIconName="lock"
            onClick={onShare}
          >
            Share
          </Button>
        )}

        {/* Icon buttons - 4px gaps */}
        <div className="flex items-center gap-1">
          <ActionButton
            icon="signature"
            label="Start eSign"
            onClick={onESign}
          />
          <ActionButton
            icon="arrow-down-to-line"
            label="Download"
            onClick={onDownload}
          />
          <ActionButton icon="history" label="Versions" onClick={onVersions} />
          <ActionButton icon="menu" label="More" onClick={onMore} />
        </div>
      </div>
    </div>
  );
};

export default EditorHeader;
