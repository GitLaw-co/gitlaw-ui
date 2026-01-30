import React, { useState } from 'react';
import { Star } from '../icons/Star';
import { Ellipsis } from '../icons/Ellipsis';
import { FileText } from '../icons/FileText';
import { Lock } from '../icons/Lock';
import { ArrowRight } from '../icons/ArrowRight';
import { FolderClosed } from '../icons/FolderClosed';
import { Earth } from '../icons/Earth';
import { UsersRound } from '../icons/UsersRound';
import { Building2 } from '../icons/Building2';

export type CardType = 'file' | 'template' | 'folder';
export type CardVisibility = 'private' | 'public' | 'shared' | 'organization';

export interface CardOwner {
  name: string;
  initials: string;
  avatar?: string;
}

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
  /** Owner info (for file/template) */
  owner?: CardOwner;
  /** Visibility status (for file/template) */
  visibility?: CardVisibility;
  /** Organization name (required when visibility is 'organization') */
  organizationName?: string;
  /** Whether card is starred */
  starred?: boolean;
  /** Files count (for folder) */
  filesCount?: number;
  /** Files in folder (for folder type) */
  files?: CardFileItem[];
  /** Action button label on hover */
  actionLabel?: string;
  /** On card click */
  onClick?: () => void;
  /** On star click */
  onStarClick?: () => void;
  /** On menu click */
  onMenuClick?: () => void;
  /** On action button click (file/template only) */
  onActionClick?: () => void;
  /** On file click within folder */
  onFileClick?: (file: CardFileItem) => void;
  /** Additional CSS classes */
  className?: string;
}

// Icon size constant
const ICON_SIZE = 'size-5';

export const Card: React.FC<CardProps> = ({
  type = 'file',
  title,
  description,
  owner,
  visibility = 'private',
  organizationName,
  starred = false,
  filesCount = 0,
  files = [],
  actionLabel = 'Open',
  onClick,
  onStarClick,
  onMenuClick,
  onActionClick,
  onFileClick,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFolder = type === 'folder';

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
        return <Lock className="size-6 shrink-0" color="#989898" />;
      case 'public':
        return <Earth className="size-6 shrink-0" color="#989898" />;
      case 'shared':
        return <UsersRound className="size-6 shrink-0" color="#989898" />;
      case 'organization':
        return <Building2 className="size-6 shrink-0" color="#989898" />;
      default:
        return <Lock className="size-6 shrink-0" color="#989898" />;
    }
  };

  const renderFileTemplate = () => (
    <div className="flex flex-col gap-4 w-full h-full">
      {/* Owner row with actions */}
      <div className="flex items-center justify-between w-full">
        {/* Owner */}
        {owner && (
          <div className="flex items-center gap-1.5">
            <div className="size-6 rounded bg-primary flex items-center justify-center shrink-0">
              {owner.avatar ? (
                <img src={owner.avatar} alt={owner.name} className="w-full h-full object-cover rounded" />
              ) : (
                <span className="text-[10px] font-black text-text-negative">{owner.initials}</span>
              )}
            </div>
            <span className="text-xs font-normal text-text-primary leading-[1.4]">{owner.name}</span>
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
            <Star className={ICON_SIZE} color={starred ? '#5E49D6' : '#CFC8F3'} filled={starred} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Ellipsis className={ICON_SIZE} color="#989898" />
          </button>
        </div>
      </div>

      {/* Title - DM Serif Text, 24px, primary-text */}
      <h3 className="font-serif text-2xl font-normal text-text-primary leading-[1.4]">{title}</h3>

      {/* Description - sm (14px), secondary-text */}
      {description && (
        <p className="text-sm font-normal text-text-secondary leading-[1.4]">
          {description}
        </p>
      )}
    </div>
  );

  const renderFolder = () => (
    <div className="flex flex-col gap-3 w-full h-full">
      {/* Folder header - clickable to open folder */}
      <div
        className="flex items-center gap-2 p-3 w-full hover:bg-secondary/50 rounded transition-colors cursor-pointer"
        onClick={(e) => {
          e.stopPropagation();
          onClick?.();
        }}
      >
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <FolderClosed className="size-6 shrink-0" color="#5E49D6" />
          <div className="flex flex-col flex-1 min-w-0">
            <h3 className="text-base font-normal text-text-primary leading-[1.4] truncate">{title}</h3>
            {/* File count hidden under 200px */}
            <span className="text-xs font-normal text-text-secondary leading-[1.4] hidden @[200px]:block">
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
            <Star className={ICON_SIZE} color={starred ? '#5E49D6' : '#CFC8F3'} filled={starred} />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMenuClick?.();
            }}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Ellipsis className={ICON_SIZE} color="#989898" />
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
            <FileText className="size-6 shrink-0" color="#CFC8F3" />
            <span className="text-base font-normal text-text-primary truncate">{file.name}</span>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div
      className={`
        @container bg-card rounded-lg overflow-hidden relative cursor-pointer
        w-full min-w-[160px] max-w-[248px]
        ${isFolder ? 'px-4 py-6' : 'p-4 @[200px]:p-6'}
        ${className}
      `}
      style={{
        aspectRatio: '3/4', // 4/3 height/width ratio = 3/4 width/height
      }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Content */}
      {isFolder ? renderFolder() : renderFileTemplate()}

      {/* Sticky bottom visibility status with gradient (file/template only) */}
      {/* Gradient: 68px tall, top 16px fades from transparent to white, bottom 52px is solid white */}
      {!isFolder && (
        <div
          className="absolute bottom-0 left-0 right-0 h-[68px] pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, white 16px, white 100%)',
          }}
        >
          {/* Visibility row: 16px padding under 200px, 24px at 200px+ */}
          <div className="absolute bottom-4 @[200px]:bottom-6 left-0 right-0 px-4 @[200px]:px-6 flex items-center gap-2">
            {getVisibilityIcon()}
            <span className="text-sm font-normal text-text-secondary leading-[1.4]">
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

      {/* Hover overlay - only for file/template cards */}
      {!isFolder && isHovered && (
        <>
          <div className="absolute inset-0 bg-[#111] opacity-10" />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onActionClick?.();
            }}
            className="
              absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
              bg-primary text-text-negative
              px-3 py-2 rounded
              flex items-center gap-1
              text-xs font-normal
              hover:bg-primary-hover transition-colors
              z-10
            "
          >
            <ArrowRight className="size-5" color="#F7F6FF" />
            <span>{actionLabel}</span>
          </button>
        </>
      )}
    </div>
  );
};

export default Card;
