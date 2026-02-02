import React from 'react';
import { Icon } from './Icon';
import { buttonTailwindClasses, colors, type ButtonSize } from '../specs';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'disabled' | 'icon';
export type { ButtonSize };

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

// Use specs from centralized source of truth
const { size: sizeClasses, iconSize: buttonIconSizes, iconOnlySize: iconOnlyIconSizes, iconOnlyContainer: iconSizeClasses } = buttonTailwindClasses;

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
  const iconColor = ['primary', 'destructive'].includes(variant) ? colors.textButtonNegative : colors.textButton;

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
