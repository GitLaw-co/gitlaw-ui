import React from 'react';

interface BellProps {
  className?: string;
  color?: string;
}

export const Bell: React.FC<BellProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
  </svg>
);

export default Bell;
