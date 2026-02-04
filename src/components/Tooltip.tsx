import React from "react";
import { Popover, PopoverPosition } from "./Popover";

export type TooltipSize = "s" | "m" | "l";
export type TooltipType = "neutral" | "purple";
export type TooltipPosition = PopoverPosition;

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
  s: { text: "text-xs", padding: "px-2 py-2" },
  m: { text: "text-sm", padding: "px-3 py-2.5" },
  l: { text: "text-base", padding: "px-3 py-3" },
};

// Type configuration
const typeConfig: Record<TooltipType, { bg: string; text: string }> = {
  neutral: { bg: "bg-card", text: "text-foreground" },
  purple: { bg: "bg-primary", text: "text-negative" },
};

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  size = "m",
  type = "neutral",
  disabled = false,
  position = "right",
}) => {
  const { text: textSize, padding } = sizeConfig[size];
  const { bg, text: textColor } = typeConfig[type];

  const tooltipContent = (
    <div
      className={`
        rounded-lg shadow-card
        flex items-center whitespace-nowrap
        ${bg} ${padding}
      `}
    >
      <span className={`${textSize} font-normal ${textColor}`}>{content}</span>
    </div>
  );

  return (
    <Popover
      content={tooltipContent}
      position={position}
      trigger="hover"
      disabled={disabled}
      gap={4}
      animated={true}
      animationDuration={200}
    >
      {children}
    </Popover>
  );
};

export default Tooltip;
