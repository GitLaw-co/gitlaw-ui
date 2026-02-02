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
  /** Left icon name (uses correct size automatically) */
  leftIconName?: string;
  /** Right icon name (uses correct size automatically) */
  rightIconName?: string;
  /** Custom left icon (overrides leftIconName, caller handles sizing) */
  leftIcon?: React.ReactNode;
  /** Custom right icon (overrides rightIconName, caller handles sizing) */
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
  primary: 'bg-primary text-negative hover:bg-primary-dark',
  secondary: 'bg-secondary text-foreground-button hover:bg-secondary-dark',
  outline: 'border border-primary text-foreground-button bg-transparent hover:bg-secondary/30',
  ghost: 'text-foreground-button bg-transparent hover:bg-secondary/30',
  destructive: 'bg-destructive text-negative hover:bg-destructive/90',
  disabled: 'bg-secondary text-foreground-button-disabled cursor-not-allowed',
  icon: 'bg-transparent text-foreground-button hover:bg-secondary/30',
};

export const Button: React.FC<ButtonProps> = ({
  children = 'Button',
  variant = 'primary',
  size = 'm',
  showLeftIcon = false,
  showRightIcon = false,
  leftIconName,
  rightIconName,
  leftIcon,
  rightIcon,
  onClick,
  className = '',
  disabled = false,
}) => {
  const isIcon = variant === 'icon';
  const isDisabled = variant === 'disabled' || disabled;

  // Determine icon color based on variant
  const getIconColor = () => {
    if (isDisabled) return colors.iconDisabled;
    if (['primary', 'destructive'].includes(variant)) return colors.textButtonNegative;
    return colors.textButton;
  };
  const iconColor = getIconColor();

  const baseClasses = 'inline-flex items-center justify-center rounded font-normal transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50';
  const sizeClass = isIcon ? iconSizeClasses[size] : sizeClasses[size];
  const variantClass = variantClasses[variant];

  // Render left icon with correct size
  const renderLeftIcon = () => {
    if (leftIcon) return leftIcon; // Custom icon, caller handles sizing
    if (leftIconName) return <Icon name={leftIconName} className={isIcon ? iconOnlyIconSizes[size] : buttonIconSizes[size]} color={iconColor} />;
    return <Icon name="check" className={isIcon ? iconOnlyIconSizes[size] : buttonIconSizes[size]} color={iconColor} />;
  };

  // Render right icon with correct size
  const renderRightIcon = () => {
    if (rightIcon) return rightIcon; // Custom icon, caller handles sizing
    if (rightIconName) return <Icon name={rightIconName} className={buttonIconSizes[size]} color={iconColor} />;
    return <Icon name="chevron-down" className={buttonIconSizes[size]} color={iconColor} />;
  };

  return (
    <button
      className={`${baseClasses} ${sizeClass} ${variantClass} ${className}`}
      onClick={onClick}
      disabled={isDisabled}
      type="button"
    >
      {showLeftIcon && !isIcon && renderLeftIcon()}
      {isIcon ? (
        renderLeftIcon()
      ) : (
        <span>{children}</span>
      )}
      {showRightIcon && !isIcon && renderRightIcon()}
    </button>
  );
};

export default Button;
