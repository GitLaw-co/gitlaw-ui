import React from 'react';

interface ImageUpProps {
  className?: string;
  color?: string;
}

export const ImageUp: React.FC<ImageUpProps> = ({ className = 'size-4', color = 'currentColor' }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.8 0L13 14" />
    <path d="m14 19.5 3-3 3 3" />
    <path d="M17 22v-5.5" />
    <circle cx="9" cy="9" r="2" />
  </svg>
);

export default ImageUp;
