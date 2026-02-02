import React, { useRef, useCallback } from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type CardType = 'file' | 'template' | 'folder';
export type CardVisibility = 'private' | 'public' | 'shared' | 'organization';

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
  /** Additional CSS classes */
  className?: string;
}

// Icon size constant
const ICON_SIZE = 'size-5';

export const Card: React.FC<CardProps> = ({
  type = 'file',
  title,
  description,
  ownerName,
  ownerInitials,
  ownerAvatar,
  visibility = 'private',
  organizationName,
  starred = false,
  selected = false,
  filesCount = 0,
  files = [],
  onClick,
  onDoubleClick,
  onStarClick,
  onMenuClick,
  onFileClick,
  doubleClickThreshold = 250,
  className = '',
}) => {
  const isFolder = type === 'folder';
  const lastClickTime = useRef<number>(0);
  const clickTimeout = useRef<NodeJS.Timeout | null>(null);

  // Custom click handler with configurable double-click threshold
  const handleClick = useCallback(() => {
    const now = Date.now();
    const timeSinceLastClick = now - lastClickTime.current;

    if (timeSinceLastClick < doubleClickThreshold && timeSinceLastClick > 0) {
      // Double click detected - cancel pending single click and trigger double click
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
        clickTimeout.current = null;
      }
      lastClickTime.current = 0;
      onDoubleClick?.();
    } else {
      // Potential single click - wait to see if another click comes
      lastClickTime.current = now;
      if (clickTimeout.current) {
        clearTimeout(clickTimeout.current);
      }
      clickTimeout.current = setTimeout(() => {
        onClick?.();
        clickTimeout.current = null;
      }, doubleClickThreshold);
    }
  }, [onClick, onDoubleClick, doubleClickThreshold]);

  const getVisibilityLabel = () => {
    switch (visibility) {
      case 'private':
        return 'Private';
      case 'public':
        return 'Public';
      case 'shared':
        return 'Shared';
      case 'organization':
        return organizationName || 'Organization';
      default:
        return 'Private';
    }
  };

  const getVisibilityIcon = () => {
    switch (visibility) {
      case 'private':
        return <Icon name="lock" className="size-6 shrink-0" color={colors.iconSecondary} />;
      case 'public':
        return <Icon name="earth" className="size-6 shrink-0" color={colors.iconSecondary} />;
      case 'shared':
        return <Icon name="users-round" className="size-6 shrink-0" color={colors.iconSecondary} />;
      case 'organization':
        return <Icon name="building-2" className="size-6 shrink-0" color={colors.iconSecondary} />;
      default:
        return <Icon name="lock" className="size-6 shrink-0" color={colors.iconSecondary} />;
    }
  };

  const renderFileTemplate = () => (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Owner row with actions */}
      <div className="flex items-center justify-between w-full">
        {/* Owner */}
        {ownerName && (
          <div className="flex items-center gap-1.5">
            <div className="size-6 rounded bg-primary flex items-center justify-center shrink-0">
              {ownerAvatar ? (
                <img src={ownerAvatar} alt={ownerName} className="w-full h-full object-cover rounded" />
              ) : (
                <span className="text-[10px] font-black text-negative">{ownerInitials}</span>
              )}
            </div>
            <span className="text-xs font-normal text-foreground leading-[1.4]">{ownerName}</span>
          </div>
        )}

        {/* Actions (star + menu) - star hidden under 200px */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStarClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block"
          >
            <Icon name="star" className={ICON_SIZE} color={starred ? colors.iconPrimary : colors.iconDisabled} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="ellipsis" className={ICON_SIZE} color={colors.iconSecondary} />
          </button>
        </div>
      </div>

      {/* Title - DM Serif Text, 24px, primary-text */}
      <h3 className="font-serif text-2xl font-normal text-foreground leading-[1.4]">{title}</h3>

      {/* Description - sm (14px), secondary-text */}
      {description && (
        <p className="text-sm font-normal text-subtle leading-[1.4]">
          {description}
        </p>
      )}
    </div>
  );

  const renderFolder = () => (
    <div className="flex flex-col gap-3 w-full h-full">
      {/* Folder header */}
      <div className="flex items-center gap-2 p-3 w-full">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <Icon name="folder-closed" className="size-6 shrink-0" color={colors.iconPrimary} />
          <div className="flex flex-col flex-1 min-w-0">
            <h3 className="text-base font-normal text-foreground leading-[1.4] truncate">{title}</h3>
            {/* File count hidden under 200px */}
            <span className="text-xs font-normal text-subtle leading-[1.4] hidden @[200px]:block">
              {filesCount} files
            </span>
          </div>
        </div>

        {/* Actions - star hidden under 200px */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onStarClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors hidden @[200px]:block"
          >
            <Icon name="star" className={ICON_SIZE} color={starred ? colors.iconPrimary : colors.iconDisabled} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="ellipsis" className={ICON_SIZE} color={colors.iconSecondary} />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-border" />

      {/* Files list - each file clickable to open in editor */}
      <div className="flex flex-col w-full flex-1 overflow-hidden">
        {files.slice(0, 6).map((file) => (
          <div
            key={file.id}
            className="flex items-center gap-2 min-h-12 p-3 hover:bg-secondary/50 transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              onFileClick?.(file);
            }}
          >
            <Icon name="file-text" className="size-6 shrink-0" color={colors.iconDisabled} />
            <span className="text-base font-normal text-foreground truncate">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`
        @container bg-card rounded-lg shadow-card overflow-hidden relative cursor-pointer
        w-full min-w-[160px]
        p-4 @[200px]:p-6
        transition-all
        ${selected ? 'ring-2 ring-primary' : ''}
        ${className}
      `}
      style={{
        aspectRatio: '3/4',
      }}
      onClick={handleClick}
      data-card="true"
    >
      {/* Content */}
      {isFolder ? renderFolder() : renderFileTemplate()}

      {/* Sticky bottom visibility status with gradient (file/template only) */}
      {!isFolder && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[68px] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, white 16px, white 100%)',
          }}
        >
          {/* Visibility row */}
          <div className="absolute bottom-4 @[200px]:bottom-6 left-0 right-0 px-4 @[200px]:px-6 flex items-center gap-2">
            {getVisibilityIcon()}
            <span className="text-sm font-normal text-subtle leading-[1.4]">
              {getVisibilityLabel()}
            </span>
          </div>
        </div>
      )}

      {/* Bottom fade gradient for folder */}
      {isFolder && (
        <div
          className="absolute bottom-0 left-0 right-0 h-11 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, white 0%, transparent 100%)',
          }}
        />
      )}
    </div>
  );
};

export default Card;
