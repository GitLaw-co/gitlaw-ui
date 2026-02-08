import React from "react";

export type StackGap = "none" | "xs" | "s" | "m" | "l" | "xl";
export type StackDirection = "vertical" | "horizontal";

export interface StackProps {
  /** Spacing between children */
  gap?: StackGap;
  /** Stack direction */
  direction?: StackDirection;
  /** Padding around the stack */
  padding?: StackGap;
  /** Whether to add a divider between items */
  dividers?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Content */
  children: React.ReactNode;
}

const gapMap: Record<StackGap, string> = {
  none: "gap-0",
  xs: "gap-1",
  s: "gap-2",
  m: "gap-3",
  l: "gap-4",
  xl: "gap-6",
};

const paddingMap: Record<StackGap, string> = {
  none: "p-0",
  xs: "p-1",
  s: "p-2",
  m: "p-3",
  l: "p-4",
  xl: "p-6",
};

/**
 * Stack — Vertical or horizontal list of children with consistent spacing.
 *
 * Default: vertical with 8px (gap-2 / "s") gap, matching the settings page row spacing.
 * With `dividers`, renders a 1px border between each child.
 */
export const Stack: React.FC<StackProps> = ({
  gap = "s",
  direction = "vertical",
  padding = "none",
  dividers = false,
  className = "",
  children,
}) => {
  const dirClass = direction === "vertical" ? "flex-col" : "flex-row";

  if (dividers) {
    const items = React.Children.toArray(children).filter(Boolean);
    return (
      <div
        className={`flex ${dirClass} ${paddingMap[padding]} ${className}`}
      >
        {items.map((child, i) => (
          <React.Fragment key={i}>
            {i > 0 && (
              <div
                className={
                  direction === "vertical"
                    ? "border-t border-border"
                    : "border-l border-border"
                }
              />
            )}
            <div className={i < items.length - 1 ? gapMap[gap].replace("gap-", "pb-") : ""}>
              {child}
            </div>
          </React.Fragment>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex ${dirClass} ${gapMap[gap]} ${paddingMap[padding]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Stack;
