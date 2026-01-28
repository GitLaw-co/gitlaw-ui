import React from 'react';

interface ChevronsLeftProps {
  className?: string;
  color?: string;
}

export const ChevronsLeft: React.FC<ChevronsLeftProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m11 17-5-5 5-5" />
    <path d="m18 17-5-5 5-5" />
  </svg>
);

export default ChevronsLeft;
