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

const sizeClasses: Record<ButtonSize, string> = {
  xl: 'gap-3 p-6 text-lg',
  l: 'gap-2 p-4 text-base',
  m: 'gap-2 px-4 py-3 h-10 text-sm',
  s: 'gap-1 px-3 py-2 h-8 text-xs',
  xs: 'gap-1 px-2 py-1 h-6 text-xxs',
};

const iconSizeClasses: Record<ButtonSize, string> = {
  xl: 'size-16 p-4',
  l: 'size-14 p-4',
  m: 'size-10 p-3',
  s: 'size-8 p-2',
  xs: 'size-6 p-2',
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
      {showLeftIcon && !isIcon && (leftIcon || <Icon name="check" className="size-5" color={iconColor} />)}
      {isIcon ? (
        leftIcon || <Icon name="check" className="size-6" color={iconColor} />
      ) : (
        <span>{children}</span>
      )}
      {showRightIcon && !isIcon && (rightIcon || <Icon name="chevron-down" className="size-5" color={iconColor} />)}
    </button>
  );
};

export default Button;
