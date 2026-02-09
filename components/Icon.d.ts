import { default as React } from '../../node_modules/react';

export interface IconProps {
    /** Icon name (kebab-case, e.g., "arrow-right", "chevron-down") */
    name: string;
    /** Tailwind size class (e.g., "size-4", "size-6", "w-5 h-5") */
    className?: string;
    /** Color from design system (use colors.iconPrimary, colors.textNegative, etc.) or "currentColor" */
    color?: string;
}
/**
 * Icon component that renders SVG icons from the public/icons folder.
 * Supports dynamic coloring via CSS filters.
 *
 * @example
 * import { colors } from '../specs';
 * <Icon name="check" className="size-6" color={colors.iconPrimary} />
 * <Icon name="arrow-right" className="size-4" />
 */
export declare const Icon: React.FC<IconProps>;
export default Icon;
