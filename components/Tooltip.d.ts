import { default as React } from '../../node_modules/react';
import { PopoverPosition } from './Popover';

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
export declare const Tooltip: React.FC<TooltipProps>;
export default Tooltip;
