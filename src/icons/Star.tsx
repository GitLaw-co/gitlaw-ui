import React from 'react';

interface StarProps {
  className?: string;
  color?: string;
  filled?: boolean;
}

export const Star: React.FC<StarProps> = ({ className = 'size-6', color = 'currentColor', filled = false }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={filled ? color : 'none'}
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
};

export default Star;
