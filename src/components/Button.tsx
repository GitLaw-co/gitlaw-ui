import React from 'react';
import { Icon } from './Icon';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'disabled' | 'icon';
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';

export interface ButtonProps {
  /** The content to display in the button */
  children?: React.ReactNode;
  /** The visual style variant */
  variant?: ButtonVariant;
  /** The size of the button */
  size?: ButtonSize;
  /** Show left icon */
  showLeftIcon?: boolean;
  /** Show right icon */
  showRightIcon?: boolean;
  /** Custom left icon */
  leftIcon?: React.ReactNode;
  /** Custom right icon */
  rightIcon?: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

// Figma specs: Normal buttons with text
const sizeClasses: Record<ButtonSize, string> = {
  xs: 'gap-1 px-2 py-1 h-6 text-xxs',      // 73×24, px-8, py-4, 10px font, 12px icon
  s: 'gap-1 px-3 py-2 h-8 text-xs',        // 93×32, px-12, py-8, 12px font, 16px icon
  m: 'gap-2 px-4 py-3 h-10 text-sm',       // 114×40, px-16, py-12, 14px font, 16px icon
  l: 'gap-2 p-4 text-base',                // 127×54, p-16, 16px font, 20px icon
  xl: 'gap-3 p-6 text-lg',                 // 164×73, p-24, 18px font, 24px icon
};

// Figma specs: Icon-only buttons (square)
const iconSizeClasses: Record<ButtonSize, string> = {
  xs: 'size-6',           // 24×24, 12px icon
  s: 'size-8 p-1',        // 32×32, 16px icon
  m: 'size-10 p-2',       // 40×40, 24px icon
  l: 'size-14 p-4',       // 56×56, 48px icon
  xl: 'size-16 p-5',      // 64×64, 60px icon
};

// Icon sizes for regular buttons
const buttonIconSizes: Record<ButtonSize, string> = {
  xs: 'size-3',    // 12px
  s: 'size-4',     // 16px
  m: 'size-4',     // 16px
  l: 'size-5',     // 20px
  xl: 'size-6',    // 24px
};

// Icon sizes for icon-only buttons
const iconOnlyIconSizes: Record<ButtonSize, string> = {
  xs: 'size-3',    // 12px
  s: 'size-4',     // 16px
  m: 'size-6',     // 24px
  l: 'size-12',    // 48px
  xl: 'size-[60px]', // 60px
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-primary text-text-negative hover:bg-primary-dark',
  secondary: 'bg-secondary text-text-button hover:bg-secondary-dark',
  outline: 'border border-primary text-text-button bg-transparent hover:bg-secondary/30',
  ghost: 'text-text-button bg-transparent hover:bg-secondary/30',
  destructive: 'bg-destructive text-text-negative hover:bg-destructive/90',
  disabled: 'bg-secondary text-text-button-disabled cursor-not-allowed',
  icon: 'bg-transparent text-text-button hover:bg-secondary/30',
};

export const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  variant = 'primary',
  size = 'm',
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  disabled = false,
}) => {
  const isIcon = variant === 'icon';
  const isDisabled = variant === 'disabled' || disabled;
  const iconColor = ['primary', 'destructive'].includes(variant) ? '#f7f6ff' : '#5e49d6';

  const baseClasses = 'inline-flex items-center justify-center rounded font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50';
  const sizeClass = isIcon ? iconSizeClasses[size] : sizeClasses[size];
  const variantClass = variantClasses[variant];

  return (
    <button
      className={`${baseClasses} ${sizeClass} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
    >
      {showLeftIcon && !isIcon && (leftIcon || <Icon name="check" className={buttonIconSizes[size]} color={iconColor} />)}
      {isIcon ? (
        leftIcon || <Icon name="check" className={iconOnlyIconSizes[size]} color={iconColor} />
      ) : (
        <span>{children}</span>
      )}
      {showRightIcon && !isIcon && (rightIcon || <Icon name="chevron-down" className={buttonIconSizes[size]} color={iconColor} />)}
    </button>
  );
};

export default Button;
