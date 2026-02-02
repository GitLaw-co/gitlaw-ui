import React from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type ChatInputStatus = 'active' | 'populated' | 'working';
export type ChatInputSize = 'l' | 'm';

export interface QuickAction {
  id: string;
  label: string;
  icon: 'draft' | 'review' | 'summarize';
}

export interface ChatInputProps {
  /** Input status */
  status?: ChatInputStatus;
  /** Input size */
  size?: ChatInputSize;
  /** Placeholder text */
  placeholder?: string;
  /** Input value */
  value?: string;
  /** Show quick actions */
  showQuickActions?: boolean;
  /** Quick action items */
  quickActions?: QuickAction[];
  /** On value change */
  onChange?: (value: string) => void;
  /** On submit */
  onSubmit?: () => void;
  /** On quick action click */
  onQuickActionClick?: (action: QuickAction) => void;
  /** On attachment click */
  onAttachmentClick?: () => void;
  /** On settings click */
  onSettingsClick?: () => void;
  /** On stop click (when working) */
  onStopClick?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const defaultQuickActions: QuickAction[] = [
  { id: 'draft', label: 'Draft', icon: 'draft' },
  { id: 'review', label: 'Review', icon: 'review' },
  { id: 'summarize', label: 'Summarize', icon: 'summarize' },
];

const QuickActionIcon: React.FC<{ icon: string }> = ({ icon }) => {
  switch (icon) {
    case 'draft':
      return <Icon name="file-plus" className="size-4" color={colors.iconPrimary} />;
    case 'review':
      return <Icon name="file-search" className="size-4" color={colors.iconPrimary} />;
    case 'summarize':
      return <Icon name="align-left" className="size-4" color={colors.iconPrimary} />;
    default:
      return null;
  }
};

export const ChatInput: React.FC<ChatInputProps> = ({
  status = 'active',
  size = 'l',
  placeholder = 'Draft a mutual NDA',
  value = '',
  showQuickActions = true,
  quickActions = defaultQuickActions,
  onChange,
  onSubmit,
  onQuickActionClick,
  onAttachmentClick,
  onSettingsClick,
  onStopClick,
  className = '',
}) => {
  const isWorking = status === 'working';
  const isPopulated = status === 'populated' || value.length > 0;
  const isLarge = size === 'l';

  const paddingClass = isLarge ? 'p-6' : 'p-4';
  const gapClass = isLarge ? 'gap-6' : 'gap-4';
  const roundedClass = isLarge ? 'rounded-xl' : 'rounded-lg';

  // Working state
  if (isWorking) {
    return (
      <div
        className={`
          bg-white border border-border ${roundedClass}
          shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
          flex flex-col ${paddingClass}
          w-full max-w-[624px]
          ${className}
        `}
      >
        <div className="flex items-center gap-2.5 p-4">
          <p className="text-lg font-normal text-primary leading-[1.4]">
            Working on your request...
          </p>
          <button
            type="button"
            onClick={onStopClick}
            className="ml-auto p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="square" className="size-6" color={colors.iconPrimary} />
          </button>
        </div>
      </div>
    );
  }

  // Active or Populated state
  return (
    <div
      className={`
        bg-white ${roundedClass}
        shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col ${gapClass} ${paddingClass}
        w-full max-w-[624px]
        ${className}
      `}
    >
      {/* Input row */}
      <div className="flex items-center gap-2.5 w-full">
        {/* Text input area */}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          placeholder={placeholder}
          className="
            flex-1 text-lg font-normal leading-[1.4]
            text-foreground placeholder:text-purple-300
            bg-transparent outline-none
          "
        />

        {/* Submit button - only show when populated */}
        {isPopulated && (
          <button
            type="button"
            onClick={onSubmit}
            className="
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            "
          >
            <Icon name="arrow-up" className="size-6" color={colors.iconNegative} />
          </button>
        )}
      </div>

      {/* Bottom row */}
      <div className="flex items-center justify-between w-full">
        {/* Left buttons */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={onAttachmentClick}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="paperclip" className="size-6" color={colors.iconPrimary} />
          </button>
          <button
            type="button"
            onClick={onSettingsClick}
            className="p-1 hover:bg-secondary rounded transition-colors"
          >
            <Icon name="settings-2" className="size-6" color={colors.iconPrimary} />
          </button>
        </div>

        {/* Quick actions */}
        {showQuickActions && (
          <div className="flex flex-wrap items-center justify-center gap-2">
            {quickActions.map((action) => (
              <button
                key={action.id}
                type="button"
                onClick={() => onQuickActionClick?.(action)}
                className="
                  bg-secondary hover:bg-secondary-hover
                  flex items-center gap-1 h-8 px-3 py-2 rounded
                  text-xs font-normal text-foreground-button leading-[1.4]
                  transition-colors
                "
              >
                <QuickActionIcon icon={action.icon} />
                <span>{action.label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatInput;
