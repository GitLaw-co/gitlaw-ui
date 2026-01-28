import React from 'react';

interface TextCursorProps {
  className?: string;
  color?: string;
}

export const TextCursor: React.FC<TextCursorProps> = ({ className = 'size-6', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1" />
    <path d="M7 22h1a4 4 0 0 0 4-4v-1" />
    <path d="M7 2h1a4 4 0 0 1 4 4v1" />
    <rect x="8" y="10" width="8" height="4" rx="1" />
  </svg>
);

export default TextCursor;
