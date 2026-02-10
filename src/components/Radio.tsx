import React from "react";

export interface RadioProps {
  /** Radio state */
  status?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler */
  onChange?: (status: boolean) => void;
  /** Additional CSS classes */
  className?: string;
}

export const Radio: React.FC<RadioProps> = ({
  status = false,
  disabled = false,
  onChange,
  className = "",
}) => {
  const handleClick = () => {
    if (disabled) return;
    onChange?.(!status);
  };

  return (
    <button
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
    >
      {/* On: solid purple circle, inset 3px */}
      {status && (
        <div className="absolute inset-[3px] bg-primary rounded-full" />
      )}
    </button>
  );
};

export default Radio;
