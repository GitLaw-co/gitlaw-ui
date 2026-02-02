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
  xs: 'gap-1 px-2 py-1 h-6 text-xxs',      // 73×24, px-8, py-4, 10px font
  s: 'gap-1 px-3 py-2 h-8 text-xs',        // 93×32, px-12, py-8, 12px font
  m: 'gap-2 px-4 py-3 h-10 text-sm',       // 114×40, px-16, py-12, 14px font
  l: 'gap-2 p-4 text-base',                // 127×54, p-16, 16px font
  xl: 'gap-3 p-6 text-lg',                 // 164×73, p-24, 18px font
};

// Figma specs: Icon-only buttons (square)
const iconSizeClasses: Record<ButtonSize, string> = {
  xs: 'size-6',           // 24×24
  s: 'size-8 p-1',        // 32×32, 4px padding
  m: 'size-10 p-2',       // 40×40, 8px padding
  l: 'size-14 p-4',       // 56×56, 16px padding
  xl: 'size-16 p-5',      // 64×64, 20px padding
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
      {showLeftIcon && !isIcon && (leftIcon || <Icon name="check" className="size-6" color={iconColor} />)}
      {isIcon ? (
        leftIcon || <Icon name="check" className="size-6" color={iconColor} />
      ) : (
        <span>{children}</span>
      )}
      {showRightIcon && !isIcon && (rightIcon || <Icon name="chevron-down" className="size-6" color={iconColor} />)}
    </button>
  );
};

export default Button;
