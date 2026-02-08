import React from "react";

export type SectionVariant = "default" | "card";

export interface SectionProps {
  /** Section heading text (optional — renders as a small uppercase label) */
  title?: string;
  /** Right-side action element next to the title (e.g. a button or link) */
  action?: React.ReactNode;
  /** Visual variant: "default" (no background) or "card" (white card with rounded corners) */
  variant?: SectionVariant;
  /** Whether to show a top border above the section */
  showBorder?: boolean;
  /** Click handler for the entire card area (card variant only) */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Section content */
  children: React.ReactNode;
}

/**
 * Section — Labeled group within a page, matching the "Authors Section" pattern from Figma.
 *
 * Renders an optional heading row (title + action) and its children.
 * Use `variant="card"` for the white card background seen on settings list groups.
 *
 * With `onClick`, the entire card becomes a single interactive area (cursor pointer, hover state).
 * Use MenuItem's `showRIcon1 rIcon1="ellipsis"` on the first row for a three-dot menu.
 */
export const Section: React.FC<SectionProps> = ({
  title,
  action,
  variant = "default",
  showBorder = false,
  onClick,
  className = "",
  children,
}) => {
  const isCard = variant === "card";
  const isClickable = isCard && !!onClick;

  return (
    <div
      className={`${showBorder ? "border-t border-border pt-4" : ""} ${className}`}
    >
      {title && (
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-secondary">
            {title}
          </h3>
          {action && <div>{action}</div>}
        </div>
      )}
      {isCard ? (
        <div
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : undefined}
          onClick={isClickable ? onClick : undefined}
          onKeyDown={
            isClickable
              ? (e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onClick?.();
                  }
                }
              : undefined
          }
          className={`
            bg-card rounded-lg p-2 relative group
            ${isClickable ? "cursor-pointer transition-shadow duration-fast ease-gitlaw hover:shadow-card" : ""}
          `}
        >
          {children}
        </div>
      ) : (
        children
      )}
    </div>
  );
};

export default Section;
