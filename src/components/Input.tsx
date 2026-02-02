import React, { useState } from 'react';
import { Icon } from './Icon';
import { colors } from '../specs';

export type InputSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export type InputStatus = 'empty' | 'populated' | 'active';
export type InputAlign = 'fill' | 'hug';

export interface InputProps {
  /** The size of the input */
  size?: InputSize;
  /** The current status */
  status?: InputStatus;
  /** Width behavior */
  align?: InputAlign;
  /** Placeholder text */
  placeholder?: string;
  /** Current value */
  value?: string;
  /** Change handler */
  onChange?: (value: string) => void;
  /** Show external label */
  showLabel?: boolean;
  /** Label text */
  label?: string;
  /** Show left icon */
  showLeftIcon?: boolean;
  /** Show right icon */
  showRightIcon?: boolean;
  /** Custom left icon */
  leftIcon?: React.ReactNode;
  /** Custom right icon */
  rightIcon?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

const sizeClasses: Record<InputSize, { container: string; input: string; label: string }> = {
  xl: {
    container: 'gap-3 p-4 min-h-14',
    input: 'text-base',
    label: 'text-base',
  },
  l: {
    container: 'gap-2 p-3 min-h-12',
    input: 'text-base',
    label: 'text-sm',
  },
  m: {
    container: 'gap-2 p-2 min-h-9',
    input: 'text-sm',
    label: 'text-sm',
  },
  s: {
    container: 'gap-1 px-2 py-1 min-h-7',
    input: 'text-sm',
    label: 'text-sm',
  },
  xs: {
    container: 'gap-1 px-2 py-1 min-h-6',
    input: 'text-xs',
    label: 'text-xs',
  },
};

export const Input: React.FC<InputProps> = ({
  size = 'm',
  status: controlledStatus,
  align = 'fill',
  placeholder = 'Placeholder text',
  value: controlledValue,
  onChange,
  showLabel = false,
  label = 'Label',
  showLeftIcon = false,
  showRightIcon = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled = false,
}) => {
  const [internalValue, setInternalValue] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const status = controlledStatus || (isFocused ? 'active' : value ? 'populated' : 'empty');
  const isActive = status === 'active';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    if (controlledValue === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  const handleClear = () => {
    if (controlledValue === undefined) {
      setInternalValue('');
    }
    onChange?.('');
  };

  const sizeConfig = sizeClasses[size];
  const widthClass = align === 'fill' ? 'w-full' : 'w-auto';

  return (
    <div className={`flex flex-col gap-2 ${widthClass} ${className}`}>
      {showLabel && (
        <label className={`font-semibold text-foreground ${sizeConfig.label}`}>
          {label}
        </label>
      )}
      <div
        className={`
          flex items-center bg-white rounded overflow-hidden
          border transition-colors
          ${sizeConfig.container}
          ${isActive ? 'border-primary' : 'border-input-border'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        `}
      >
        {showLeftIcon && (
          <span className="shrink-0 text-foreground">
            {leftIcon || <Icon name="search" className="size-6" color={colors.textPrimary} />}
          </span>
        )}
        <input
          type="text"
          value={value}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          disabled={disabled}
          className={`
            flex-1 bg-transparent outline-none font-normal
            text-foreground placeholder:text-muted
            ${sizeConfig.input}
            ${disabled ? 'cursor-not-allowed' : ''}
          `}
        />
        {showRightIcon && value && (
          <button
            type="button"
            onClick={handleClear}
            className="shrink-0 text-foreground hover:text-muted transition-colors"
          >
            {rightIcon || <Icon name="x" className="size-6" color={colors.textPrimary} />}
          </button>
        )}
      </div>
    </div>
  );
};

export default Input;
