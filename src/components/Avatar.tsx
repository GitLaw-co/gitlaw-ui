import React from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

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
          <Icon name="building" className={sizeConfig.icon} color={colors.iconNegative} />
        )}

        {type === 'empty' && (
          <div className="flex flex-col items-center justify-center gap-1">
            <Icon name="image-up" className="size-4" color={colors.iconNegative} />
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
          <Icon name="pencil" className="size-4" color={colors.iconNegative} />
        </button>
      )}
    </div>
  );
};

export default Avatar;
