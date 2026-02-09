import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";
import { Tooltip } from "./Tooltip";
import { colors } from "../specs";

export type ListHeaderMode = "default" | "edit";
export type ListHeaderEditLayout = "replace" | "inline" | "merged";

export interface ListHeaderIconAction {
  icon: string;
  onClick?: () => void;
  active?: boolean;
}

export interface ListHeaderEditAction {
  icon: string;
  label: string;
  onClick?: () => void;
}

export interface ListHeaderProps {
  mode?: ListHeaderMode;
  editLayout?: ListHeaderEditLayout;
  label: string;
  actions?: ListHeaderIconAction[];
  editActions?: ListHeaderEditAction[];
  className?: string;
}

const iconBtnClass =
  "inline-flex items-center justify-center size-8 rounded bg-secondary hover:bg-secondary-hover transition-colors duration-fast ease-gitlaw";
const editIconBtnClass =
  "inline-flex items-center justify-center size-8 rounded bg-primary hover:bg-primary-hover transition-colors duration-fast ease-gitlaw";

export const ListHeader: React.FC<ListHeaderProps> = ({
  mode = "default",
  editLayout = "replace",
  label,
  actions = [],
  editActions = [],
  className = "",
}) => {
  const isEdit = mode === "edit";

  const renderIconBtn = (action: ListHeaderIconAction, i: number) => (
    <button key={i} type="button" className={iconBtnClass} onClick={action.onClick}>
      <Icon name={action.icon} className="size-4" color={colors.iconPrimary} />
    </button>
  );

  const renderEditIconBtn = (action: ListHeaderEditAction, i: number) => (
    <Tooltip key={i} content={action.label} size="s" position="top">
      <button type="button" className={editIconBtnClass} onClick={action.onClick}>
        <Icon name={action.icon} className="size-4" color={colors.iconNegative} />
      </button>
    </Tooltip>
  );

  const iconButtons = <div className="flex items-center gap-1">{actions.map(renderIconBtn)}</div>;

  const labelledEditButtons = (
    <div className="flex items-center gap-1">
      {editActions.map((action, i) => (
        <Button
          key={i}
          variant="primary"
          size="s"
          showLeftIcon
          leftIconName={action.icon}
          onClick={action.onClick}
        >
          {action.label}
        </Button>
      ))}
    </div>
  );

  const iconOnlyEditButtons = (
    <div className="flex items-center gap-1">{editActions.map(renderEditIconBtn)}</div>
  );

  const root = `@container flex items-center px-3 py-4 h-[68px] ${className}`;

  /* ── replace: edit actions replace right-side actions ── */
  if (editLayout === "replace") {
    return (
      <div className={root}>
        <h2 className="flex-1 text-lg font-semibold text-primary leading-[1.4]">{label}</h2>
        {isEdit ? labelledEditButtons : iconButtons}
      </div>
    );
  }

  /* ── inline: [edit actions] ———— [icon actions] ── */
  if (editLayout === "inline") {
    return (
      <div className={root}>
        <div className="flex-1 flex items-center gap-2">
          {isEdit ? (
            <>
              <div className="hidden @3xl:flex items-center gap-1">{labelledEditButtons}</div>
              <div className="flex @3xl:hidden items-center gap-1">{iconOnlyEditButtons}</div>
            </>
          ) : (
            <h2 className="text-lg font-semibold text-primary leading-[1.4]">{label}</h2>
          )}
        </div>
        {iconButtons}
      </div>
    );
  }

  /* ── merged: all icon buttons on the right (secondary + primary) ── */
  return (
    <div className={root}>
      <h2 className="flex-1 text-lg font-semibold text-primary leading-[1.4]">{label}</h2>
      {isEdit ? (
        <div className="flex items-center gap-1">
          {actions.map(renderIconBtn)}
          {editActions.map(renderEditIconBtn)}
        </div>
      ) : (
        iconButtons
      )}
    </div>
  );
};

export default ListHeader;
