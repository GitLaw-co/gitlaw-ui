import React from "react";
import { starColors } from "../specs";

export interface StarIconProps {
  /** Whether the star is active (filled primary) or inactive (filled secondary) */
  starred?: boolean;
  /** Tailwind size class (e.g., "size-4", "size-5") */
  className?: string;
}

/**
 * StarIcon — filled star icon using star color tokens.
 *
 * This is the ONE exception to the outline icon set: stars are always
 * rendered as a solid fill (no stroke) using the star design tokens.
 *
 * @example
 * <StarIcon starred className="size-5" />
 * <StarIcon className="size-4" />
 */
export const StarIcon: React.FC<StarIconProps> = ({
  starred = false,
  className = "size-5",
}) => {
  const fill = starred ? starColors.active : starColors.inactive;

  return (
    <svg
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    </svg>
  );
};

export default StarIcon;
