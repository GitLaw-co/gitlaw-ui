import React, { forwardRef } from "react";

/** Native button attributes minus props we control */
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "disabled" | "className" | "onClick" | "type"
>;

export interface RadioProps extends NativeButtonProps {
  /** Radio state */
  status?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (status: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(({
  status = false,
  disabled = false,
  onChange,
  className = "",
  ...nativeProps
}, ref) => {
  const handleClick = () => {
    if (disabled) return;
    onChange?.(!status);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`
        size-4 rounded-full border bg-card shrink-0 relative
        transition-interactive
        ${status ? "border-primary" : "border-border"}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      aria-checked={status}
      role="radio"
      {...nativeProps}
    >
      {/* On: solid purple circle, inset 3px */}
      {status && (
        <div className="absolute inset-[3px] bg-primary rounded-full" />
      )}
    </button>
  );
});

Radio.displayName = "Radio";

export default Radio;
