import React from "react";

export interface OverlayProps {
  /** Whether the overlay is open */
  open: boolean;
  /** Called when backdrop is clicked */
  onClose: () => void;
  /** Content rendered on top of the backdrop */
  children: React.ReactNode;
  /** Additional CSS classes on the outer wrapper (e.g. "md:hidden" for mobile-only) */
  className?: string;
}

/**
 * Overlay — Reusable backdrop + content layer.
 *
 * Renders a semi-transparent backdrop with animated opacity.
 * Children are placed on top of the backdrop (same z-level, DOM order wins).
 * Use `className` to scope visibility (e.g. `md:hidden` for mobile-only overlays).
 */
export const Overlay: React.FC<OverlayProps> = ({
  open,
  onClose,
  children,
  className = "",
}) => {
  return (
    <div className={className}>
      {/* Backdrop */}
      <div
        className={`
          fixed inset-0 bg-black/30 z-40
          transition-opacity duration-normal ease-gitlaw
          ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={onClose}
        aria-hidden="true"
      />
      {/* Content */}
      {children}
    </div>
  );
};

export default Overlay;
