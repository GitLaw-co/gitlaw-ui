import React from 'react';
import { Building } from '../icons/Building';
import { ImageUp } from '../icons/ImageUp';

export type AvatarType = 'image' | 'initials' | 'icon' | 'empty';
export type AvatarSize = 'S' | 'M' | 'L' | 'XL';

export interface AvatarProps {
  /** The type of avatar content */
  type?: AvatarType;
  /** The size of the avatar */
  size?: AvatarSize;
  /** Image source URL (for image type) */
  src?: string;
  /** Initials text (for initials type) */
  initials?: string;
  /** Alt text for image */
  alt?: string;
  /** Show edit button */
  showEdit?: boolean;
  /** Edit click handler */
  onEditClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<AvatarSize, { container: string; text: string; icon: string }> = {
  S: {
    container: 'size-6',
    text: 'text-xs',
    icon: 'size-6',
  },
  M: {
    container: 'size-8',
    text: 'text-sm',
    icon: 'size-6',
  },
  L: {
    container: 'size-12',
    text: 'text-xl',
    icon: 'size-6',
  },
  XL: {
    container: 'size-16',
    text: 'text-2xl',
    icon: 'size-6',
  },
};

export const Avatar: React.FC<AvatarProps> = ({
  type = 'image',
  size = 'M',
  src,
  initials = 'AC',
  alt = 'Avatar',
  showEdit = false,
  onEditClick,
  className = '',
}) => {
  const sizeConfig = sizeClasses[size];
  const bgColor = type === 'image' ? '' : 'bg-primary';

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`
          ${sizeConfig.container}
          ${bgColor}
          rounded overflow-hidden
          flex items-center justify-center
        `}
      >
        {type === 'image' && src && (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
          />
        )}

        {type === 'initials' && (
          <span className={`font-black text-text-negative ${sizeConfig.text}`}>
            {initials}
          </span>
        )}

        {type === 'icon' && (
          <Building className={sizeConfig.icon} color="#f7f6ff" />
        )}

        {type === 'empty' && (
          <div className="flex flex-col items-center justify-center gap-1">
            <ImageUp className="size-4" color="#f7f6ff" />
            <span className="text-xxs text-text-negative">Add</span>
          </div>
        )}
      </div>

      {showEdit && (
        <button
          type="button"
          onClick={onEditClick}
          className="
            absolute -bottom-1 -right-1
            size-6 rounded-full
            bg-[#1b1d22]
            flex items-center justify-center
            hover:bg-[#2a2d33] transition-colors
          "
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#f7f6ff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
            <path d="m15 5 4 4" />
          </svg>
        </button>
      )}
    </div>
  );
};

export default Avatar;
