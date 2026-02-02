import React from 'react';

export type BadgeType = 'primary' | 'secondary' | 'red' | 'orange' | 'green';

export interface BadgeProps {
  /** The color type of the badge */
  type?: BadgeType;
  /** Show number in badge */
  showNumber?: boolean;
  /** The number to display */
  count?: number;
  /** Additional CSS classes */
  className?: string;
}

const typeClasses: Record<BadgeType, { bg: string; text: string }> = {
  primary: {
    bg: 'bg-primary',
    text: 'text-negative',
  },
  secondary: {
    bg: 'bg-secondary',
    text: 'text-foreground-button',
  },
  red: {
    bg: 'bg-destructive',
    text: 'text-negative',
  },
  orange: {
    bg: 'bg-alert',
    text: 'text-negative',
  },
  green: {
    bg: 'bg-positive',
    text: 'text-negative',
  },
};

export const Badge: React.FC<BadgeProps> = ({
  type = 'red',
  showNumber = true,
  count = 7,
  className = '',
}) => {
  const typeConfig = typeClasses[type];

  if (!showNumber) {
    return (
      <div
        className={`
          size-3 rounded-full
          ${typeConfig.bg}
          ${className}
        `}
      />
    );
  }

  return (
    <div
      className={`
        size-[17px] rounded-full
        flex items-center justify-center
        ${typeConfig.bg}
        ${className}
      `}
    >
      <span className={`text-xxs font-normal ${typeConfig.text}`}>
        {count > 99 ? '99+' : count}
      </span>
    </div>
  );
};

export default Badge;
