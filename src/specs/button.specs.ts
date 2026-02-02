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
export const buttonSpecs: Record<ButtonSize, ButtonSizeSpec> = {
  xs: {
    height: 24,
    paddingX: 8,
    paddingY: 4,
    fontSize: 10,
    iconSize: 12,
    iconOnlyIconSize: 12,
    gap: 4,
  },
  s: {
    height: 32,
    paddingX: 12,
    paddingY: 8,
    fontSize: 12,
    iconSize: 16,
    iconOnlyIconSize: 16,
    gap: 4,
  },
  m: {
    height: 40,
    paddingX: 16,
    paddingY: 12,
    fontSize: 14,
    iconSize: 16,
    iconOnlyIconSize: 24,
    gap: 8,
  },
  l: {
    height: 54,
    paddingX: 16,
    paddingY: 16,
    fontSize: 16,
    iconSize: 20,
    iconOnlyIconSize: 48,
    gap: 8,
  },
  xl: {
    height: 73,
    paddingX: 24,
    paddingY: 24,
    fontSize: 18,
    iconSize: 24,
    iconOnlyIconSize: 60,
    gap: 12,
  },
};

/**
 * Tailwind class mappings derived from specs
 * These are pre-computed for performance
 */
export const buttonTailwindClasses = {
  /** Container classes for each size */
  size: {
    xs: 'gap-1 px-2 py-1 h-6 text-xxs',      // 24px height, 8px px, 4px py, 10px font
    s: 'gap-1 px-3 py-2 h-8 text-xs',        // 32px height, 12px px, 8px py, 12px font
    m: 'gap-2 px-4 py-3 h-10 text-sm',       // 40px height, 16px px, 12px py, 14px font
    l: 'gap-2 p-4 text-base',                // 54px height, 16px p, 16px font
    xl: 'gap-3 p-6 text-lg',                 // 73px height, 24px p, 18px font
  } as Record<ButtonSize, string>,

  /** Icon sizes for regular buttons (with text) */
  iconSize: {
    xs: 'size-3',    // 12px
    s: 'size-4',     // 16px
    m: 'size-4',     // 16px
    l: 'size-5',     // 20px
    xl: 'size-6',    // 24px
  } as Record<ButtonSize, string>,

  /** Icon sizes for icon-only buttons */
  iconOnlySize: {
    xs: 'size-3',       // 12px
    s: 'size-4',        // 16px
    m: 'size-6',        // 24px
    l: 'size-12',       // 48px
    xl: 'size-[60px]',  // 60px
  } as Record<ButtonSize, string>,

  /** Container sizes for icon-only buttons (square) */
  iconOnlyContainer: {
    xs: 'size-6',        // 24px
    s: 'size-8',         // 32px
    m: 'size-10',        // 40px
    l: 'size-[54px]',    // 54px
    xl: 'size-[73px]',   // 73px
  } as Record<ButtonSize, string>,
};

export default buttonSpecs;
