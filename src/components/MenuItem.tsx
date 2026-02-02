import React from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type MenuItemLeftElement = 'icon' | 'avatar' | 'clause' | 'select' | 'mini-users';

export interface MenuItemProps {
  /** Primary text content */
  primaryText?: string;
  /** Secondary text content */
  secondaryText?: string;
  /** Type of left element to display */
  leftElement?: MenuItemLeftElement;
  /** Show left element */
  showLeftElement?: boolean;
  /** Show secondary text */
  showSecondaryText?: boolean;
  /** Show right element (check icon) */
  showRightElement?: boolean;
  /** Show background highlight */
  showBackground?: boolean;
  /** Show border stroke */
  showStroke?: boolean;
  /** Show tick badge in corner */
  showTick?: boolean;
  /** Custom left icon */
  leftIcon?: React.ReactNode;
  /** Avatar image source (for avatar type) */
  avatarSrc?: string;
  /** Avatar initials (for avatar type) */
  avatarInitials?: string;
  /** Selected state (for select type) */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  primaryText = 'Primary',
  secondaryText = '2 minutes ago',
  leftElement = 'icon',
  showLeftElement = true,
  showSecondaryText = false,
  showRightElement = false,
  showBackground = false,
  showStroke = false,
  showTick = false,
  leftIcon,
  avatarSrc,
  avatarInitials = 'AC',
  selected = false,
  onClick,
  className = '',
}) => {
  const renderLeftElement = () => {
    if (!showLeftElement) return null;

    switch (leftElement) {
      case 'icon':
        return leftIcon || <Icon name="circle-dashed" className="size-6" color={colors.textPrimary} />;

      case 'avatar':
        return (
          <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
            {avatarSrc ? (
              <img src={avatarSrc} alt="" className="w-full h-full object-cover rounded" />
            ) : (
              <span className="text-sm font-black text-text-negative">{avatarInitials}</span>
            )}
          </div>
        );

      case 'clause':
        return (
          <div className="size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0">
            <Icon name="info" className="size-6" color={colors.positive} />
          </div>
        );

      case 'select':
        return (
          <div
            className={`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${selected ? 'bg-primary border-primary' : 'bg-white border-secondary'}
            `}
          >
            {selected && <Icon name="check" className="size-3" color={colors.iconNegative} />}
          </div>
        );

      case 'mini-users':
        return (
          <div className="flex items-center -space-x-1 shrink-0">
            <div className="size-4 rounded bg-gray-300 border-2 border-white z-10" />
            <div className="size-4 rounded bg-primary flex items-center justify-center">
              <span className="text-[8px] font-black text-text-negative">AC</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        relative flex items-center gap-2 min-h-12 p-3 w-[310px] cursor-pointer
        ${className}
      `}
      onClick={onClick}
    >
      {showBackground && (
        <div className="absolute inset-0 bg-secondary rounded" />
      )}
      {showStroke && (
        <div className="absolute inset-0 border border-card-idle-border rounded" />
      )}

      <div className="relative flex items-center gap-2 flex-1 min-h-px min-w-px">
        {renderLeftElement()}

        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-base font-normal text-text-primary truncate leading-[1.4]">
            {primaryText}
          </p>
          {showSecondaryText && (
            <p className="text-sm font-normal text-text-secondary truncate leading-[1.4]">
              {secondaryText}
            </p>
          )}
        </div>
      </div>

      {showRightElement && (
        <div className="relative flex items-center justify-end min-h-6 shrink-0">
          <Icon name="check" className="size-6" color={colors.iconPrimary} />
        </div>
      )}

      {showTick && (
        <div className="absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center">
          <Icon name="check" className="size-6" color={colors.iconNegative} />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
