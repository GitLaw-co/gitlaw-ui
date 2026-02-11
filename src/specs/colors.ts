/**
 * Color Constants
 *
 * Re-exports semantic color tokens from the single source of truth
 * (colors.tokens.js) with TypeScript types.
 *
 * Use these constants when passing color props to components (e.g., Icon color).
 * For className-based styling, use the Tailwind color classes instead.
 *
 * ⚠️  To change colors, edit `colors.tokens.js` — not this file.
 */

import { semantic } from './colors.tokens.js';

export const colors = {
  // Primary
  primary: semantic.primary,
  primaryLight: semantic.primaryLight,
  primaryHover: semantic.primaryHover,

  // Secondary
  secondary: semantic.secondary,
  secondaryHover: semantic.secondaryHover,

  // Status colors
  destructive: semantic.destructive,
  alert: semantic.alert,
  positive: semantic.positive,

  // Text colors
  textPrimary: semantic.textPrimary,
  textSecondary: semantic.textSecondary,
  textNegative: semantic.textNegative,
  textButton: semantic.textButton,
  textButtonNegative: semantic.textButtonNegative,
  textButtonDisabled: semantic.textButtonDisabled,

  // Icon colors
  iconPrimary: semantic.iconPrimary,
  iconSecondary: semantic.iconSecondary,
  iconDisabled: semantic.iconDisabled,
  iconNegative: semantic.iconNegative,
  iconBlack: semantic.iconBlack,

  // Background colors
  white: semantic.white,
  card: semantic.card,
  pageBackground: semantic.pageBackground,

  // Purple palette (convenience aliases)
  purple50: semantic.textNegative,     // #F7F6FF
  purple100: semantic.secondary,       // #EBE7FF
  purple200: semantic.secondaryHover,  // #E2DDFF
  purple300: semantic.textButtonDisabled, // #CFC8F3
  purple700: semantic.primary,         // #5E49D6
} as const;

// Semantic aliases for common use cases
export const iconColors = {
  default: colors.iconPrimary,
  secondary: colors.iconSecondary,
  disabled: colors.iconDisabled,
  negative: colors.iconNegative,
  dark: colors.iconBlack,
} as const;

export const starColors = {
  inactive: colors.secondary,   // #EBE7FF — filled star, light purple
  active: colors.primary,       // #5E49D6 — filled star, solid purple
} as const;

export const buttonIconColors = {
  primary: colors.textButtonNegative,  // White icon on primary button
  secondary: colors.textButton,         // Purple icon on secondary button
  outline: colors.textButton,           // Purple icon on outline button
  ghost: colors.textButton,             // Purple icon on ghost button
  destructive: colors.textButtonNegative, // White icon on destructive button
} as const;

export default colors;
