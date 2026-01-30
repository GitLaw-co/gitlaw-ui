import React from 'react';

interface AlignLeftProps {
  className?: string;
  color?: string;
}

export const AlignLeft: React.FC<AlignLeftProps> = ({ className = 'size-6', color = 'currentColor' }) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 6H3" />
      <path d="M15 12H3" />
      <path d="M17 18H3" />
    </svg>
  );
};

export default AlignLeft;
