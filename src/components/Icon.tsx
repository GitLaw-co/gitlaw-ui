import React from "react";

// CSS filter values to convert black icons to target colors
// Keys are hex color values from the design system
const colorFilters: Record<string, string> = {
  // Primary (purple/700) - #5E49D6
  "#5E49D6":
    "brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)",

  // Secondary/Grey (grey/50) - #989898
  "#989898":
    "brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)",

  // Black/Primary text (obsidian/950) - #1B1B1F
  "#1B1B1F": "none",

  // White - #FFFFFF
  "#FFFFFF":
    "brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)",

  // Negative/Light purple (purple/50) - #F7F6FF
  "#F7F6FF":
    "brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)",

  // Disabled (purple/300) - #CFC8F3
  "#CFC8F3":
    "brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(654%) hue-rotate(206deg) brightness(99%) contrast(95%)",

  // Secondary / Star inactive (purple/100) - #EBE7FF
  "#EBE7FF":
    "brightness(0) saturate(100%) invert(89%) sepia(10%) saturate(500%) hue-rotate(206deg) brightness(102%) contrast(100%)",

  // Positive (green/700) - #15803D
  "#15803D":
    "brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(600%) hue-rotate(100deg) brightness(95%) contrast(90%)",

  currentColor: "none",
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
  className = "size-6",
  color = "#1B1B1F", // iconBlack/textPrimary
}) => {
  const filter = colorFilters[color] || "none";

  return (
    <img
      src={`${import.meta.env.STORYBOOK_BASE || '/'}icons/${name}.svg`}
      alt={name}
      className={className}
      style={{ filter }}
    />
  );
};

export default Icon;
