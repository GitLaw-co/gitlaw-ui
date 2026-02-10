import React, { useState, useEffect, useRef } from "react";

export type PopoverPosition = "top" | "bottom" | "left" | "right";
export type PopoverTrigger = "hover" | "click";

export interface PopoverProps {
  /** The element that triggers the popover */
  children: React.ReactNode;
  /** The content to show in the popover */
  content: React.ReactNode;
  /** Position of the popover relative to the trigger */
  position?: PopoverPosition;
  /** How the popover is triggered */
  trigger?: PopoverTrigger;
  /** Whether the popover is visible (controlled mode) */
  isOpen?: boolean;
  /** Callback when popover visibility changes */
  onOpenChange?: (isOpen: boolean) => void;
  /** Whether the popover is disabled */
  disabled?: boolean;
  /** Additional classes for the popover content container */
  contentClassName?: string;
  /** Gap between trigger and popover (in Tailwind spacing units) */
  gap?: 1 | 2 | 3 | 4;
  /** Whether to show fade animation */
  animated?: boolean;
  /** Animation duration in ms */
  animationDuration?: number;
}

// Position configuration - using CSS classes for absolute positioning
const getPositionClasses = (position: PopoverPosition, gap: number): string => {
  const positionConfig: Record<PopoverPosition, string> = {
    top: `bottom-full left-1/2 -translate-x-1/2 mb-${gap}`,
    bottom: `top-full left-1/2 -translate-x-1/2 mt-${gap}`,
    left: `right-full top-1/2 -translate-y-1/2 mr-${gap}`,
    right: `left-full top-1/2 -translate-y-1/2 ml-${gap}`,
  };

  return positionConfig[position];
};

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  position = "bottom",
  trigger = "click",
  isOpen: controlledIsOpen,
  onOpenChange,
  disabled = false,
  contentClassName = "",
  gap = 2,
  animated = true,
  animationDuration = 200,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Support both controlled and uncontrolled modes
  const isControlled = controlledIsOpen !== undefined;
  const isOpen = isControlled ? controlledIsOpen : internalIsOpen;

  const setIsOpen = (value: boolean) => {
    if (!isControlled) {
      setInternalIsOpen(value);
    }
    onOpenChange?.(value);
  };

  // Reset visibility when disabled
  useEffect(() => {
    if (disabled && isOpen) {
      setIsOpen(false);
    }
  }, [disabled]);

  // Click outside detection for click trigger
  useEffect(() => {
    if (trigger !== "click" || !isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [trigger, isOpen]);

  const handleMouseEnter = () => {
    if (trigger === "hover" && !disabled) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (trigger === "hover") {
      setIsOpen(false);
    }
  };

  const handleClick = () => {
    if (trigger === "click" && !disabled) {
      setIsOpen(!isOpen);
    }
  };

  const positionClasses = getPositionClasses(position, gap);

  // When disabled, still render wrapper for consistent layout
  if (disabled) {
    return <div className="relative inline-flex">{children}</div>;
  }

  const showContent = animated ? true : isOpen;
  const animationClasses = animated
    ? `transition-fade ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`
    : "";

  return (
    <div
      ref={containerRef}
      className="relative inline-flex"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={trigger === "click" ? handleClick : undefined}
    >
      {children}
      {showContent && content && (
        <div
          className={`
            absolute z-50
            ${positionClasses}
            ${animationClasses}
            ${contentClassName}
          `}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
