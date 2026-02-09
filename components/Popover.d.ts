import { default as React } from '../../node_modules/react';

export type PopoverPosition = "top" | "bottom" | "left" | "right";
export type PopoverTrigger = "hover" | "click";
export interface PopoverProps {
    /** The element that triggers the popover */
    children: React.ReactNode;
    /** The content to show in the popover */
    content: React.ReactNode;
    /** Position of the popover relative to the trigger */
    position?: PopoverPosition;
    /** How the popover is triggered */
    trigger?: PopoverTrigger;
    /** Whether the popover is visible (controlled mode) */
    isOpen?: boolean;
    /** Callback when popover visibility changes */
    onOpenChange?: (isOpen: boolean) => void;
    /** Whether the popover is disabled */
    disabled?: boolean;
    /** Additional classes for the popover content container */
    contentClassName?: string;
    /** Gap between trigger and popover (in Tailwind spacing units) */
    gap?: 1 | 2 | 3 | 4;
    /** Whether to show fade animation */
    animated?: boolean;
    /** Animation duration in ms */
    animationDuration?: number;
}
export declare const Popover: React.FC<PopoverProps>;
export default Popover;
