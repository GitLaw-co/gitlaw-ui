import React, { useState } from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type TextFieldSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type TextFieldStatus = 'empty' | 'populated' | 'active';

export interface TextFieldProps {
  /** The size of the text field */
  size?: TextFieldSize;
  /** The current status */
  status?: TextFieldStatus;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Show border stroke */
  showStroke?: boolean;
  /** Show icon in top right */
  showIcon?: boolean;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Number of rows */
  rows?: number;
}

const sizeClasses: Record<TextFieldSize, { container: string; text: string; secondaryText: string }> = {
  xl: {
    container: 'p-4 min-h-24',
    text: 'text-base',
    secondaryText: 'text-xs',
  },
  l: {
    container: 'p-3 min-h-20',
    text: 'text-sm',
    secondaryText: 'text-xxs',
  },
  m: {
    container: 'p-2 min-h-20',
    text: 'text-sm',
    secondaryText: 'text-xxs',
  },
  s: {
    container: 'p-2 min-h-16',
    text: 'text-sm',
    secondaryText: 'text-xxs',
  },
  xs: {
    container: 'px-2 py-1 min-h-16',
    text: 'text-xs',
    secondaryText: 'text-xxs',
  },
};

const iconPositions: Record<TextFieldSize, string> = {
  xl: 'top-4 right-4',
  l: 'top-3 right-3',
  m: 'top-2 right-2',
  s: 'top-2 right-2',
  xs: 'top-1 right-2',
};

export const TextField: React.FC<TextFieldProps> = ({
  size = 'm',
  status: controlledStatus,
  placeholder = 'Placeholder text',
  value: controlledValue,
  onChange,
  showStroke = true,
  showIcon = false,
  icon,
  className = '',
  disabled = false,
  rows = 3,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const value = controlledValue !== undefined ? controlledValue : internalValue;
  const status = controlledStatus || (isFocused ? 'active' : value ? 'populated' : 'empty');
  const isActive = status === 'active';
  const isEmpty = status === 'empty';

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const sizeConfig = sizeClasses[size];
  const iconPosition = iconPositions[size];

  return (
    <div
      className={`
        relative flex items-start bg-white rounded overflow-hidden w-[369px]
        ${sizeConfig.container}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        ${className}
      `}
    >
      {showStroke && (
        <div
          className={`
            absolute inset-0 border rounded pointer-events-none
            ${isActive ? 'border-primary' : 'border-input-border'}
          `}
        />
      )}

      <div className="flex flex-col flex-1 min-h-px min-w-px relative">
        {isEmpty ? (
          <p className={`font-normal text-muted leading-[1.4] ${sizeConfig.text}`}>
            {placeholder}
          </p>
        ) : (
          <>
            <textarea
              value={value}
              onChange={handleChange}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={placeholder}
              disabled={disabled}
              rows={rows}
              className={`
                flex-1 bg-transparent outline-none font-normal resize-none
                text-foreground placeholder:text-muted leading-[1.4]
                ${sizeConfig.text}
                ${disabled ? 'cursor-not-allowed' : ''}
              `}
            />
            {status === 'populated' && (
              <p className={`font-normal text-muted leading-[1.4] ${sizeConfig.secondaryText}`}>
                {placeholder}
              </p>
            )}
          </>
        )}
      </div>

      {showIcon && (
        <div className={`absolute ${iconPosition}`}>
          {icon || <Icon name="sparkles" className="size-6" color={colors.iconPrimary} />}
        </div>
      )}
    </div>
  );
};

export default TextField;
