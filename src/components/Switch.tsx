import React, { forwardRef } from "react";

export type SwitchSize = "s" | "m";

/** Native button attributes minus props we control */
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "disabled" | "className" | "onClick" | "type"
>;

export interface SwitchProps extends NativeButtonProps {
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

export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(({
  checked = false,
  size = "m",
  onChange,
  disabled = false,
  className = "",
  ...nativeProps
}, ref) => {
  const sizeConfig = sizeClasses[size];

  const handleClick = () => {
    if (!disabled) {
      onChange?.(!checked);
    }
  };

  return (
    <button
      ref={ref}
      type="button"
      role="switch"
      aria-checked={checked}
      disabled={disabled}
      onClick={handleClick}
      className={`
        relative inline-flex items-center
        rounded-sm py-0.5
        transition-interactive
        ${sizeConfig.track}
        ${checked ? "bg-primary justify-end pr-0.5" : "bg-secondary justify-start pl-0.5"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      {...nativeProps}
    >
      <span
        className={`
          rounded-sm transition-interactive
          ${sizeConfig.thumb}
          bg-white
        `}
      />
    </button>
  );
});

Switch.displayName = "Switch";

export default Switch;
