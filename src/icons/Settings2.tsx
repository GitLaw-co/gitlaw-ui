import React from 'react';

interface Settings2Props {
  className?: string;
  color?: string;
}

export const Settings2: React.FC<Settings2Props> = ({ className = 'size-6', color = 'currentColor' }) => {
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
      <path d="M20 7h-9" />
      <path d="M14 17H5" />
      <circle cx="17" cy="17" r="3" />
      <circle cx="7" cy="7" r="3" />
    </svg>
  );
};

export default Settings2;
