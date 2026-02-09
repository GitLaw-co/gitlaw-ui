/**
 * Button Component Specs
 *
 * Source: Figma UI-v3 design system
 * Last verified: 2025-02-02
 *
 * These specs are the source of truth for button dimensions.
 * When Figma designs change, update this file first, then components will follow.
 */
export type ButtonSize = 'xs' | 's' | 'm' | 'l' | 'xl';
export interface ButtonSizeSpec {
    /** Total button height in pixels */
    height: number;
    /** Horizontal padding in pixels */
    paddingX: number;
    /** Vertical padding in pixels */
    paddingY: number;
    /** Font size in pixels */
    fontSize: number;
    /** Icon size for regular buttons (with text) in pixels */
    iconSize: number;
    /** Icon size for icon-only buttons in pixels */
    iconOnlyIconSize: number;
    /** Gap between icon and text in pixels */
    gap: number;
}
/**
 * Button size specifications from Figma
 *
 * Regular buttons: Have text, optionally with icons
 * Icon-only buttons: Just an icon, no text (square buttons)
 */
export declare const buttonSpecs: Record<ButtonSize, ButtonSizeSpec>;
/**
 * Tailwind class mappings derived from specs
 * These are pre-computed for performance
 */
export declare const buttonTailwindClasses: {
    /** Container classes for each size */
    size: Record<ButtonSize, string>;
    /** Icon sizes for regular buttons (with text) */
    iconSize: Record<ButtonSize, string>;
    /** Icon sizes for icon-only buttons */
    iconOnlySize: Record<ButtonSize, string>;
    /** Container sizes for icon-only buttons (square) */
    iconOnlyContainer: Record<ButtonSize, string>;
};
export default buttonSpecs;
