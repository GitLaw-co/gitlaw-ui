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
export const dialogSpecs: DialogSpec = {
  width: 360,
  padding: 24,
  borderRadius: 8,
  gap: 16,
  shadow: '0px 10px 40px 0px rgba(0,0,0,0.05)',
  header: {
    minHeight: 48,
    padding: 12,
    titleFontSize: 20,
    titleFontWeight: 600,
    closeIconSize: 24,
  },
  message: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: 1.4,
  },
  buttonContainer: {
    gap: 8,
    paddingY: 8,
  },
  button: {
    size: 'm',
    iconSize: 16, // Uses standard button icon size for size 'm'
  },
};

/**
 * Tailwind class mappings derived from specs
 */
export const dialogTailwindClasses = {
  container: 'bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-6 w-[360px]',
  header: 'flex items-center justify-between min-h-12 p-3',
  title: 'text-xl font-semibold text-text-primary leading-[1.4]',
  closeButton: 'p-1 hover:bg-secondary rounded transition-colors',
  closeIcon: 'size-6', // 24px
  message: 'text-base font-normal text-text-primary leading-[1.4]',
  buttonContainer: 'flex items-center justify-end gap-2 py-2',
  buttonIcon: 'size-4', // 16px - matches button size 'm' icon spec
};

export default dialogSpecs;
