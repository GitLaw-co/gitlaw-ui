import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { colors } from "../specs";

export type ListHeaderMode = "default" | "edit";

export interface ListHeaderIconAction {
  /** Icon name (lucide) */
  icon: string;
  /** Click handler */
  onClick?: () => void;
  /** Whether this action is visually active/highlighted */
  active?: boolean;
}

export interface ListHeaderEditAction {
  /** Icon name (lucide) */
  icon: string;
  /** Button label text */
  label: string;
  /** Click handler */
  onClick?: () => void;
}

export interface ListHeaderProps {
  /** Display mode */
  mode?: ListHeaderMode;
  /** Label text — e.g. "234 files" or "3 files selected" */
  label: string;
  /** Icon buttons shown in default mode (search, sort, grid, add) */
  actions?: ListHeaderIconAction[];
  /** Text buttons shown in edit mode (Delete, Download, Move, Done) */
  editActions?: ListHeaderEditAction[];
  /** Additional CSS classes */
  className?: string;
}

/**
 * ListHeader — Toolbar above file lists / card grids.
 *
 * Two modes:
 * - **default**: count label + icon-only action buttons (size-8 / 32px, secondary bg)
 * - **edit**: selected count label + labelled Button[s] actions (Delete, Download, Move, Done)
 *
 * Height: 68px. Padding: 12px horizontal, 16px vertical.
 */
export const ListHeader: React.FC<ListHeaderProps> = ({
  mode = "default",
  label,
  actions = [],
  editActions = [],
  className = "",
}) => {
  const isEdit = mode === "edit";

  return (
    <div
      className={`flex items-center justify-between px-3 py-4 h-[68px] ${className}`}
    >
      {/* Left: label */}
      <h2 className="text-lg font-semibold text-primary leading-[1.4]">
        {label}
      </h2>

      {/* Right: default mode — icon-only buttons with secondary bg */}
      {!isEdit && (
        <div className="flex items-center gap-1">
          {actions.map((action, i) => (
            <button
              key={i}
              type="button"
              className="inline-flex items-center justify-center size-8 rounded bg-secondary hover:bg-secondary-dark transition-colors duration-fast ease-gitlaw"
              onClick={action.onClick}
            >
              <Icon
                name={action.icon}
                className="size-4"
                color={colors.iconPrimary}
              />
            </button>
          ))}
        </div>
      )}

      {/* Right: edit mode — labelled buttons */}
      {isEdit && (
        <div className="flex items-center gap-1">
          {editActions.map((action, i) => {
            const isLast = i === editActions.length - 1;
            return (
              <Button
                key={i}
                variant={isLast ? "primary" : "secondary"}
                size="s"
                showLeftIcon
                leftIconName={action.icon}
                onClick={action.onClick}
              >
                {action.label}
              </Button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ListHeader;
