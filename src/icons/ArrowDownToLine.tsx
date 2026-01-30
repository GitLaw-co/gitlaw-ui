import React from 'react';

interface ArrowDownToLineProps {
  className?: string;
  color?: string;
}

export const ArrowDownToLine: React.FC<ArrowDownToLineProps> = ({ className = 'size-6', color = 'currentColor' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 17V3" />
      <path d="m6 11 6 6 6-6" />
      <path d="M19 21H5" />
    </svg>
  );
};
