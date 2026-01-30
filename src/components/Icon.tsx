import React from 'react';

// CSS filter values to convert black (#1B1B1F) icons to target colors
const colorFilters: Record<string, string> = {
  '#5E49D6': 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)',
  '#5e49d6': 'brightness(0) saturate(100%) invert(28%) sepia(76%) saturate(1927%) hue-rotate(238deg) brightness(91%) contrast(93%)',
  '#989898': 'brightness(0) saturate(100%) invert(64%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(95%) contrast(90%)',
  '#1B1B1F': 'none',
  '#1b1b1f': 'none',
  '#FFFFFF': 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
  '#ffffff': 'brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%)',
  '#F7F6FF': 'brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)',
  '#f7f6ff': 'brightness(0) saturate(100%) invert(97%) sepia(4%) saturate(500%) hue-rotate(206deg) brightness(103%) contrast(100%)',
  '#CFC8F3': 'brightness(0) saturate(100%) invert(83%) sepia(12%) saturate(654%) hue-rotate(206deg) brightness(99%) contrast(95%)',
  '#15803d': 'brightness(0) saturate(100%) invert(35%) sepia(60%) saturate(600%) hue-rotate(100deg) brightness(95%) contrast(90%)',
  'currentColor': 'none',
};

export interface IconProps {
  /** Icon name (kebab-case, e.g., "arrow-right", "chevron-down") */
  name: string;
  /** Tailwind size class (e.g., "size-4", "size-6", "w-5 h-5") */
  className?: string;
  /** Color hex value (e.g., "#5E49D6") or "currentColor" */
  color?: string;
}

/**
 * Icon component that renders SVG icons from the public/icons folder.
 * Supports dynamic coloring via CSS filters.
 *
 * @example
 * <Icon name="check" className="size-6" color="#5E49D6" />
 * <Icon name="arrow-right" className="size-4" />
 */
export const Icon: React.FC<IconProps> = ({
  name,
  className = 'size-6',
  color = '#1B1B1F'
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
