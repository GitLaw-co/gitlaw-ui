/**
 * Dialog Component Specs
 *
 * Source: Figma UI-v3 design system
 * Last verified: 2025-02-02
 *
 * These specs are the source of truth for dialog dimensions.
 * When Figma designs change, update this file first, then components will follow.
 */
export interface DialogSpec {
    /** Dialog width in pixels */
    width: number;
    /** Padding around content in pixels */
    padding: number;
    /** Border radius in pixels */
    borderRadius: number;
    /** Gap between sections in pixels */
    gap: number;
    /** Shadow specification */
    shadow: string;
    /** Header specifications */
    header: {
        minHeight: number;
        padding: number;
        titleFontSize: number;
        titleFontWeight: number;
        closeIconSize: number;
    };
    /** Message/body text specifications */
    message: {
        fontSize: number;
        fontWeight: number;
        lineHeight: number;
    };
    /** Button container specifications */
    buttonContainer: {
        gap: number;
        paddingY: number;
    };
    /** Button specifications (uses size 'm' from button specs) */
    button: {
        size: 'm';
        iconSize: number;
    };
}
/**
 * Dialog specifications from Figma
 */
export declare const dialogSpecs: DialogSpec;
/**
 * Tailwind class mappings derived from specs
 */
export declare const dialogTailwindClasses: {
    container: string;
    header: string;
    title: string;
    closeButton: string;
    closeIcon: string;
    message: string;
    buttonContainer: string;
    buttonIcon: string;
};
export default dialogSpecs;
