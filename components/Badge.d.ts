import { default as React } from '../../node_modules/react';

export type BadgeType = "primary" | "secondary" | "red" | "orange" | "green";
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
export declare const Badge: React.FC<BadgeProps>;
export default Badge;
