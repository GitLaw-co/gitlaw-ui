import React from 'react';

interface ChevronsRightProps {
  className?: string;
  color?: string;
}

export const ChevronsRight: React.FC<ChevronsRightProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m6 17 5-5-5-5" />
    <path d="m13 17 5-5-5-5" />
  </svg>
);

export default ChevronsRight;
