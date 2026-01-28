import React from 'react';

interface ChevronRightProps {
  className?: string;
  color?: string;
}

export const ChevronRight: React.FC<ChevronRightProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

export default ChevronRight;
