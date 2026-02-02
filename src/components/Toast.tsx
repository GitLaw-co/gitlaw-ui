import React from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type ToastVariant = 'default' | 'success' | 'error' | 'warning';

export interface ToastProps {
  /** Toast message */
  message: string;
  /** Toast variant */
  variant?: ToastVariant;
  /** Action button label */
  actionLabel?: string;
  /** Show action button */
  showAction?: boolean;
  /** Action button click handler */
  onActionClick?: () => void;
  /** Close button click handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  message,
  variant = 'default',
  actionLabel = 'Action',
  showAction = true,
  onActionClick,
  onClose,
  className = '',
}) => {
  return (
    <div
      className={`
        bg-primary rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex items-center gap-4 px-4 py-2
        ${className}
      `}
    >
      {/* Message */}
      <p className="text-sm font-normal text-negative leading-[1.4] max-w-[480px]">
        {message}
      </p>

      {/* Action button */}
      {showAction && (
        <button
          type="button"
          onClick={onActionClick}
          className="
            bg-primary hover:bg-primary-hover
            flex items-center gap-2 h-10 px-4 py-3 rounded
            text-sm font-normal text-negative leading-[1.4]
            transition-colors shrink-0
          "
        >
          <Icon name="check" className="size-6" color={colors.iconNegative} />
          <span>{actionLabel}</span>
        </button>
      )}
    </div>
  );
};

export default Toast;
