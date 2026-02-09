import React from "react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export interface SettingsTableRowProps {
  /** Array of cell contents — each cell gets equal flex width */
  cells: React.ReactNode[];
  /** Row index (0-based) — controls zebra striping. Odd rows are white, even rows are page-background */
  index: number;
  /** Use semibold text (e.g. for total/summary rows) */
  bold?: boolean;
  /** Optional trailing action element (e.g. download button) — rendered outside the flex columns */
  action?: React.ReactNode;
  /** Additional CSS classes on the row container */
  className?: string;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

/**
 * Settings Table Row — matches the Figma "Settings Table" component.
 *
 * Zebra-striped rows with alternating `bg-page-background` (even) / white (odd).
 * Fixed 36px height, 8px vertical padding, 16px gap between flex columns.
 * Each cell gets `flex-1` for equal distribution.
 *
 * Usage:
 * ```tsx
 * <SettingsTableRow
 *   index={0}
 *   cells={[<span>Label</span>, <span>Value</span>]}
 * />
 * ```
 */
export const SettingsTableRow: React.FC<SettingsTableRowProps> = ({
  cells,
  index,
  bold = false,
  action,
  className = "",
}) => {
  const bg = index % 2 === 0 ? "bg-page-background" : "bg-card";
  const weight = bold ? "font-semibold" : "font-normal";

  return (
    <div
      className={`flex gap-4 h-9 items-center px-2 ${bg} ${className}`}
    >
      {cells.map((cell, i) => (
        <div
          key={i}
          className={`flex-1 min-w-0 text-sm leading-[1.4] text-text-primary ${weight}`}
        >
          {cell}
        </div>
      ))}
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
};

export default SettingsTableRow;
