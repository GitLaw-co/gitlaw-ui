import React from "react";

export type SwitchSize = "s" | "m";

export interface SwitchProps {
  /** Current checked state */
  checked?: boolean;
  /** The size of the switch */
  size?: SwitchSize;
  /** Change handler */
  onChange?: (checked: boolean) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<SwitchSize, { track: string; thumb: string }> = {
  s: {
    track: "w-8 h-4",
    thumb: "w-3.5 h-3",
  },
  m: {
    track: "w-10 h-5",
    thumb: "w-5 h-4",
  },
};

export const Switch: React.FC<SwitchProps> = ({
  checked = false,
  size = "m",
  onChange,
  disabled = false,
  className = "",
}) => {
  const sizeConfig = sizeClasses[size];

  const handleClick = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={`
        relative inline-flex items-center
        rounded-sm py-0.5
        transition-colors duration-fast ease-gitlaw
        ${sizeConfig.track}
        ${checked ? "bg-primary justify-end pr-0.5" : "bg-secondary justify-start pl-0.5"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
    >
      <span
        className={`
          rounded-sm transition-colors duration-fast ease-gitlaw
          ${sizeConfig.thumb}
          bg-white
        `}
      />
    </button>
  );
};

export default Switch;
