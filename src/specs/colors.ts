/**
 * Color Constants
 *
 * Source: Figma UI-v3 design system / Tailwind config
 * Last verified: 2025-02-02
 *
 * Use these constants when passing color props to components (e.g., Icon color).
 * For className-based styling, use the Tailwind color classes instead.
 */

// Primary brand colors
export const colors = {
  // Primary
  primary: '#5E49D6',
  primaryLight: '#EBE7FF',
  primaryHover: '#6F5EEC',

  // Secondary
  secondary: '#EBE7FF',
  secondaryHover: '#E2DDFF',

  // Status colors
  destructive: '#E11D48',
  alert: '#F97316',
  positive: '#15803D',

  // Text colors
  textPrimary: '#1B1B1F',
  textSecondary: '#989898',
  textNegative: '#F7F6FF',
  textButton: '#5E49D6',
  textButtonNegative: '#F7F6FF',
  textButtonDisabled: '#CFC8F3',

  // Icon colors
  iconPrimary: '#5E49D6',
  iconSecondary: '#989898',
  iconDisabled: '#CFC8F3',
  iconNegative: '#F7F6FF',
  iconBlack: '#1B1B1F',

  // Background colors
  white: '#FFFFFF',
  card: '#FFFFFF',
  pageBackground: '#F7F6FF',

  // Purple palette
  purple50: '#F7F6FF',
  purple100: '#EBE7FF',
  purple200: '#E2DDFF',
  purple300: '#CFC8F3',
  purple700: '#5E49D6',
} as const;

// Semantic aliases for common use cases
export const iconColors = {
  default: colors.iconPrimary,
  secondary: colors.iconSecondary,
  disabled: colors.iconDisabled,
  negative: colors.iconNegative,
  dark: colors.iconBlack,
} as const;

export const buttonIconColors = {
  primary: colors.textButtonNegative,  // White icon on primary button
  secondary: colors.textButton,         // Purple icon on secondary button
  outline: colors.textButton,           // Purple icon on outline button
  ghost: colors.textButton,             // Purple icon on ghost button
  destructive: colors.textButtonNegative, // White icon on destructive button
} as const;

export default colors;
