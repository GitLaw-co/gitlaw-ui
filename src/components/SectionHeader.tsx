import React, { forwardRef } from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export type SectionHeaderType = "single-action" | "multi-action";

type NativeDivProps = Omit<
  React.HTMLAttributes<HTMLDivElement>,
  "className" | "children"
>;

export interface SectionHeaderProps extends NativeDivProps {
  /** Section title text */
  title: string;
  /** Optional secondary text below the title (e.g. status label) */
  secondaryText?: string;
  /** Show an info icon next to the title */
  showInfo?: boolean;
  /** Show the action slot on the right */
  showAction?: boolean;
  /**
   * Right-side action element.
   *
   * - For `"single-action"`: pass a `<Button>` (rendered as-is).
   * - For `"multi-action"`: pass icon buttons or any React node.
   */
  action?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * SectionHeader — Settings-style header row for page sections.
 *
 * Matches the Figma "Settings header" component (UI-v3 10016:12326):
 * title + optional secondary text on the left, optional action slot on the right.
 *
 * Two Figma variants are supported via the `action` slot:
 * - **single-action**: A single `<Button>` on the right.
 * - **multi-action**: A row of icon buttons on the right.
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  (
    {
      title,
      secondaryText,
      showInfo = false,
      showAction = true,
      action,
      className = "",
      ...nativeProps
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={`flex items-center justify-between px-gitlaw-l py-gitlaw-xl ${className}`}
        {...nativeProps}
      >
        {/* Left: labels */}
        <div className="flex flex-1 flex-col items-start justify-center min-w-0">
          <div className="flex items-center gap-gitlaw-s">
            <h2 className="text-lg font-semibold text-foreground leading-[1.4]">
              {title}
            </h2>
            {showInfo && (
              <Icon
                name="info"
                className="size-6 shrink-0"
                color={colors.iconSecondary}
              />
            )}
          </div>
          {secondaryText && (
            <p className="text-sm font-normal text-subtle leading-[1.4]">
              {secondaryText}
            </p>
          )}
        </div>

        {/* Right: action slot */}
        {showAction && action && (
          <div className="shrink-0 ml-gitlaw-m">{action}</div>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";

export default SectionHeader;
