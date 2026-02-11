import React, { forwardRef } from "react";

export type CheckboxStatus = "off" | "on" | "semi";

/** Native button attributes minus props we control */
type NativeButtonProps = Omit<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  "onChange" | "disabled" | "className" | "onClick" | "type"
>;

export interface CheckboxProps extends NativeButtonProps {
  /** Checkbox state */
  status?: CheckboxStatus;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (status: CheckboxStatus) => void;
  /** Additional CSS classes */
  className?: string;
}

const borderClasses: Record<CheckboxStatus, string> = {
  off: "border-border",
  on: "border-primary",
  semi: "border-primary",
};

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(({
  status = "off",
  disabled = false,
  onChange,
  className = "",
  ...nativeProps
}, ref) => {
  const handleClick = () => {
    if (disabled) return;
    // off → on, on → off, semi → on
    const next: CheckboxStatus = status === "on" ? "off" : "on";
    onChange?.(next);
  };

  return (
    <button
      ref={ref}
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`
        size-4 rounded-sm border bg-card shrink-0 relative
        transition-interactive
        ${borderClasses[status]}
        ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        ${className}
      `}
      aria-checked={status === "on" ? true : status === "semi" ? "mixed" : false}
      role="checkbox"
      {...nativeProps}
    >
      {/* On: solid purple square, inset 3px */}
      {status === "on" && (
        <div className="absolute inset-[3px] bg-primary rounded-[1px]" />
      )}
      {/* Semi: horizontal purple dash, vertically centered */}
      {status === "semi" && (
        <div className="absolute left-[3px] right-[3px] top-1/2 -translate-y-1/2 h-[2px] bg-primary rounded-[1px]" />
      )}
    </button>
  );
});

Checkbox.displayName = "Checkbox";

export default Checkbox;
