import React from 'react';
import { colors } from '../specs';

// CSS filter values to convert black icons to target colors
// Keys use semantic color names from the design system
const colorFilters: Record<string, string> = {
  // Primary (purple/700) - #5E49D6
  [colors.primary]: 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)',
  [colors.iconPrimary]: 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)',
  [colors.textButton]: 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)',

  // Secondary/Grey (grey/50) - #989898
  [colors.iconSecondary]: 'brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
  [colors.textSecondary]: 'brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',

  // Black/Primary text (obsidian/950) - #1B1B1F
  [colors.iconBlack]: 'none',
  [colors.textPrimary]: 'none',

  // White - #FFFFFF
  [colors.white]: 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',

  // Negative/Light purple (purple/50) - #F7F6FF
  [colors.iconNegative]: 'brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)',
  [colors.textNegative]: 'brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)',
  [colors.textButtonNegative]: 'brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)',

  // Disabled (purple/300) - #CFC8F3
  [colors.iconDisabled]: 'brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(654%) hue-rotate(206deg) brightness(99%) contrast(95%)',
  [colors.textButtonDisabled]: 'brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(654%) hue-rotate(206deg) brightness(99%) contrast(95%)',

  // Positive (green/700) - #15803D
  [colors.positive]: 'brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(600%) hue-rotate(100deg) brightness(95%) contrast(90%)',

  'currentColor': 'none',
};

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
export const Icon: React.FC<IconProps> = ({
  name,
  className = 'size-6',
  color = colors.iconBlack
}) => {
  const filter = colorFilters[color] || 'none';

  return (
    <img
      src={`/icons/${name}.svg`}
      alt={name}
      className={className}
      style={{ filter }}
    />
  );
};

export default Icon;
