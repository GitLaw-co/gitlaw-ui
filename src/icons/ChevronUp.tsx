import React from 'react';

interface ChevronUpProps {
  className?: string;
  color?: string;
}

export const ChevronUp: React.FC<ChevronUpProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
);

export default ChevronUp;
