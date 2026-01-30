import React from 'react';

interface SquareProps {
  className?: string;
  color?: string;
}

export const Square: React.FC<SquareProps> = ({ className = 'size-6', color = 'currentColor' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill={color}
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="14" x="5" y="5" rx="2" />
    </svg>
  );
};

export default Square;
