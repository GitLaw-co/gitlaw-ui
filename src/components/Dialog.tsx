import React from 'react';
import { Icon } from './Icon';
import { Button } from './Button';
import { dialogTailwindClasses, colors } from '../specs';

export interface DialogProps {
  /** Dialog title */
  title: string;
  /** Dialog message/description */
  message: string;
  /** Primary button label */
  primaryLabel?: string;
  /** Secondary button label */
  secondaryLabel?: string;
  /** Show close button */
  showCloseButton?: boolean;
  /** Primary button click handler */
  onPrimaryClick?: () => void;
  /** Secondary button click handler */
  onSecondaryClick?: () => void;
  /** Close button click handler */
  onClose?: () => void;
  /** Whether dialog is open */
  open?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const Dialog: React.FC<DialogProps> = ({
  title,
  message,
  primaryLabel = 'Save changes',
  secondaryLabel = 'Discard changes',
  showCloseButton = true,
  onPrimaryClick,
  onSecondaryClick,
  onClose,
  open = true,
  className = '',
}) => {
  if (!open) return null;

  return (
    <div className={`${dialogTailwindClasses.container} ${className}`}>
      {/* Header with title and close button */}
      <div className={dialogTailwindClasses.header}>
        <h2 className={dialogTailwindClasses.title}>
          {title}
        </h2>
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className={dialogTailwindClasses.closeButton}
          >
            <Icon name="x" className={dialogTailwindClasses.closeIcon} color={colors.textPrimary} />
          </button>
        )}
      </div>

      {/* Message */}
      <p className={dialogTailwindClasses.message}>
        {message}
      </p>

      {/* Button container */}
      <div className={dialogTailwindClasses.buttonContainer}>
        {/* Secondary button (outline) */}
        <Button
          variant="outline"
          size="m"
          showLeftIcon
          leftIcon={<Icon name="x" className={dialogTailwindClasses.buttonIcon} color={colors.iconPrimary} />}
          onClick={onSecondaryClick}
          className="flex-1"
        >
          {secondaryLabel}
        </Button>

        {/* Primary button (filled) */}
        <Button
          variant="primary"
          size="m"
          showLeftIcon
          leftIcon={<Icon name="check" className={dialogTailwindClasses.buttonIcon} color={colors.iconNegative} />}
          onClick={onPrimaryClick}
          className="flex-1"
        >
          {primaryLabel}
        </Button>
      </div>
    </div>
  );
};

export default Dialog;
