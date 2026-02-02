import React from 'react';
import { Icon } from './Icon';
import { Button } from './Button';

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
    <div
      className={`
        bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col gap-4 p-6 w-[360px]
        ${className}
      `}
    >
      {/* Header with title and close button */}
      <div className="flex items-center justify-between min-h-12 p-3">
        <h2 className="text-xl font-semibold text-text-primary leading-[1.4]">
          {title}
        </h2>
        {showCloseButton && (
          <button
            type="button"
            onClick={onClose}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="x" className="size-6" color="#1b1b1f" />
          </button>
        )}
      </div>

      {/* Message */}
      <p className="text-base font-normal text-text-primary leading-[1.4]">
        {message}
      </p>

      {/* Button container */}
      <div className="flex items-center justify-end gap-2 py-2">
        {/* Secondary button (outline) */}
        <Button
          variant="outline"
          size="m"
          showLeftIcon
          leftIcon={<Icon name="x" className="size-4" color="#5E49D6" />}
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
          leftIcon={<Icon name="check" className="size-4" color="#F7F6FF" />}
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
