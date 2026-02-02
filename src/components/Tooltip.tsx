import React, { useState } from 'react';

export type TooltipSize = 's' | 'm' | 'l';
export type TooltipType = 'neutral' | 'purple';
export type TooltipPosition = 'right' | 'top' | 'bottom' | 'left';

export interface TooltipProps {
  /** The content to show in the tooltip */
  content: string;
  /** The element that triggers the tooltip */
  children: React.ReactNode;
  /** Tooltip size - s (12px), m (14px), l (16px) */
  size?: TooltipSize;
  /** Tooltip color type - neutral (white bg) or purple (purple bg) */
  type?: TooltipType;
  /** Whether the tooltip is disabled */
  disabled?: boolean;
  /** Position of the tooltip relative to the trigger */
  position?: TooltipPosition;
}

// Size configuration
const sizeConfig: Record<TooltipSize, { text: string; padding: string }> = {
  s: { text: 'text-xs', padding: 'px-2 py-2' },
  m: { text: 'text-sm', padding: 'px-3 py-2.5' },
  l: { text: 'text-base', padding: 'px-3 py-3' },
};

// Type configuration
const typeConfig: Record<TooltipType, { bg: string; text: string }> = {
  neutral: { bg: 'bg-card', text: 'text-foreground' },
  purple: { bg: 'bg-primary', text: 'text-negative' },
};

// Position configuration - using CSS classes for absolute positioning
const positionConfig: Record<TooltipPosition, string> = {
  right: 'left-full top-1/2 -translate-y-1/2 ml-4',
  left: 'right-full top-1/2 -translate-y-1/2 mr-4',
  top: 'bottom-full left-1/2 -translate-x-1/2 mb-4',
  bottom: 'top-full left-1/2 -translate-x-1/2 mt-4',
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  size = 'm',
  type = 'neutral',
  disabled = false,
  position = 'right',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  if (disabled) {
    return <>{children}</>;
  }

  const { text: textSize, padding } = sizeConfig[size];
  const { bg, text: textColor } = typeConfig[type];
  const positionClasses = positionConfig[position];

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div
          className={`
            absolute z-50 rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
            flex items-center whitespace-nowrap
            ${bg} ${padding} ${positionClasses}
          `}
        >
          <span className={`${textSize} font-normal ${textColor}`}>
            {content}
          </span>
        </div>
      )}
    </div>
  );
};

export default Tooltip;
