import { default as React } from '../../node_modules/react';

export interface StarIconProps {
    /** Whether the star is active (filled primary) or inactive (filled secondary) */
    starred?: boolean;
    /** Tailwind size class (e.g., "size-4", "size-5") */
    className?: string;
}
/**
 * StarIcon — filled star icon using star color tokens.
 *
 * This is the ONE exception to the outline icon set: stars are always
 * rendered as a solid fill (no stroke) using the star design tokens.
 *
 * @example
 * <StarIcon starred className="size-5" />
 * <StarIcon className="size-4" />
 */
export declare const StarIcon: React.FC<StarIconProps>;
export default StarIcon;
