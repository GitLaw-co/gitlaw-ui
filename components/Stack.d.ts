import { default as React } from '../../node_modules/react';

export type StackGap = "none" | "xs" | "s" | "m" | "l" | "xl";
export type StackDirection = "vertical" | "horizontal";
export interface StackProps {
    /** Spacing between children */
    gap?: StackGap;
    /** Stack direction */
    direction?: StackDirection;
    /** Padding around the stack */
    padding?: StackGap;
    /** Whether to add a divider between items */
    dividers?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Content */
    children: React.ReactNode;
}
/**
 * Stack — Vertical or horizontal list of children with consistent spacing.
 *
 * Default: vertical with 8px (gap-2 / "s") gap, matching the settings page row spacing.
 * With `dividers`, renders a 1px border between each child.
 */
export declare const Stack: React.FC<StackProps>;
export default Stack;
