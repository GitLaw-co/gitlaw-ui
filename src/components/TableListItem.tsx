import React from "react";
import { Icon } from "./Icon";
import { StarIcon } from "./StarIcon";
import { Checkbox } from "./Checkbox";
import { colors } from "../specs";
import type { CheckboxStatus } from "./Checkbox";

export type TableListItemType = "item" | "header" | "skeleton" | "drag-and-drop";
export type TableListItemCols = 0 | 2 | 4 | 6;
export type TableListItemVisibility = "private" | "public" | "shared" | "organization";
export type SortDirection = "asc" | "desc";

export interface TableListItemProps {
  /** Row type */
  type?: TableListItemType;
  /** Number of visible columns (responsive) */
  cols?: TableListItemCols;
  /** Icon name for the row (e.g. "folder", "file-text") */
  iconName?: string;
  /** Row title */
  title?: string;
  /** Secondary text below title */
  subtitle?: string;
  /** Sharing visibility — determines which tag icon to show (same as Card) */
  visibility?: TableListItemVisibility;
  /** Star count — shown as tag for public documents (e.g. "17K") */
  starCount?: string;
  /** Whether the item is spam — shows a red spam tag */
  spam?: boolean;
  /** Metadata values for visible columns (ordered by column) */
  metaValues?: string[];
  /** Selected state — shows purple border ring */
  selected?: boolean;
  /** Starred state */
  starred?: boolean;
  /** Star click handler */
  onStarClick?: () => void;
  /** Menu click handler */
  onMenuClick?: () => void;
  /** Row click handler */
  onClick?: () => void;
  /** Row double-click handler */
  onDoubleClick?: () => void;
  /** Column header labels (for header type) */
  headerLabels?: string[];
  /** Show select-all checkbox in header */
  selectMode?: boolean;
  /** Checkbox state for select-all */
  selectStatus?: CheckboxStatus;
  /** Select-all checkbox handler */
  onSelectAllClick?: () => void;
  /** Currently sorted column key (matches label text, e.g. "Name", "Type") */
  sortColumn?: string;
  /** Sort direction */
  sortDirection?: SortDirection;
  /** Sort change handler — called when a header label is clicked */
  onSortChange?: (column: string, direction: SortDirection) => void;
  /** Additional CSS classes */
  className?: string;
}

// ─── Constants ───

const visibilityIcons: Record<TableListItemVisibility, string> = {
  private: "lock",
  public: "earth",
  shared: "users-round",
  organization: "building-2",
};

const defaultHeaderLabels: Record<number, string[]> = {
  6: ["Name", "Type", "Last viewed", "Updated", "Created"],
  4: ["Name", "Updated", "Created"],
  2: ["Name", "Updated"],
};

// ─── Sub-components ───

const SkeletonBar: React.FC<{ width: string; height?: string }> = ({
  width,
  height = "h-4",
}) => (
  <div
    className={`bg-secondary ${height} rounded-gitlaw-s shrink-0`}
    style={{ width }}
  />
);

/** Star button — uses StarIcon (filled star, the one icon exception) */
const StarButton: React.FC<{
  starred?: boolean;
  onClick?: () => void;
}> = ({ starred = false, onClick }) => (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    className="flex items-center justify-center size-8 rounded-gitlaw-s shrink-0 transition-colors duration-fast ease-gitlaw"
  >
    <StarIcon starred={starred} className="size-5" />
  </button>
);

/** Menu button — hidden by default, shown on row hover via group */
const MenuButton: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    className="flex items-center justify-center size-8 rounded-gitlaw-s shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-fast ease-gitlaw hover:bg-secondary"
  >
    <Icon name="ellipsis" className="size-5" color={colors.iconSecondary} />
  </button>
);

const InlineTag: React.FC<{
  label: string;
  iconName?: string;
  /** Custom icon node — overrides iconName when provided */
  icon?: React.ReactNode;
  variant?: "default" | "spam";
}> = ({ label, iconName, icon, variant = "default" }) => {
  const isSpam = variant === "spam";
  return (
    <div
      className={`
        flex items-center gap-1 px-2 py-1.5 rounded-gitlaw-s shrink-0
        ${isSpam ? "bg-red-50" : "bg-backgrounds-tag-background"}
      `}
    >
      {icon
        ? icon
        : iconName && (
            <Icon
              name={iconName}
              className="size-4"
              color={isSpam ? colors.destructive : colors.iconPrimary}
            />
          )}
      {label && (
        <span
          className={`text-xxs font-semibold leading-[1.4] ${isSpam ? "text-red-600" : "text-foreground-tag"}`}
        >
          {label}
        </span>
      )}
    </div>
  );
};

// ─── Sortable header label ───

const SortableLabel: React.FC<{
  label: string;
  isActive: boolean;
  direction?: SortDirection;
  onClick?: () => void;
  /** Use base size for Name column, sm for meta columns */
  size?: "base" | "sm";
}> = ({ label, isActive, direction, onClick, size = "sm" }) => {
  const textSize = size === "base" ? "text-base" : "text-sm";
  // Active sorted column: semibold + foreground; inactive: regular + subtle
  const textStyle = isActive
    ? `${textSize} font-semibold text-foreground`
    : `${textSize} font-normal text-subtle`;

  const arrow = isActive
    ? direction === "desc"
      ? " ↓"
      : " ↑"
    : "";

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${textStyle} leading-[1.4] cursor-pointer hover:text-foreground transition-colors duration-fast ease-gitlaw shrink-0 whitespace-nowrap`}
    >
      {label}{arrow}
    </button>
  );
};

// ─── Shared meta columns renderer ───
// Used by BOTH header and item to guarantee identical column widths.

const MetaCols: React.FC<{
  cols: TableListItemCols;
  values: string[];
  /** If true, renders as sortable header labels */
  isHeader?: boolean;
  sortColumn?: string;
  sortDirection?: SortDirection;
  onSortChange?: (column: string, direction: SortDirection) => void;
}> = ({ cols, values, isHeader = false, sortColumn, sortDirection, onSortChange }) => {
  const handleSort = (label: string) => {
    if (!onSortChange) return;
    // Toggle direction if same column, default to desc for new column
    const newDir: SortDirection =
      sortColumn === label && sortDirection === "desc" ? "asc" : "desc";
    onSortChange(label, newDir);
  };

  if (cols === 6) {
    return (
      <>
        {values.map((v, i) => (
          <div key={i} className="flex flex-1 items-center min-h-[48px] min-w-0">
            {isHeader ? (
              <SortableLabel
                label={v}
                isActive={sortColumn === v}
                direction={sortColumn === v ? sortDirection : undefined}
                onClick={() => handleSort(v)}
              />
            ) : (
              <p className="text-sm font-normal text-subtle leading-[1.4] truncate min-w-0">
                {v}
              </p>
            )}
          </div>
        ))}
      </>
    );
  }

  if (cols === 4) {
    return (
      <>
        {values.map((v, i) => (
          <div key={i} className="flex items-center min-h-[48px] w-[144px] shrink-0">
            {isHeader ? (
              <SortableLabel
                label={v}
                isActive={sortColumn === v}
                direction={sortColumn === v ? sortDirection : undefined}
                onClick={() => handleSort(v)}
              />
            ) : (
              <p className="text-sm font-normal text-subtle leading-[1.4] truncate min-w-0">
                {v}
              </p>
            )}
          </div>
        ))}
      </>
    );
  }

  if (cols === 2 && values.length > 0) {
    return (
      <div className="flex items-center min-h-[48px] w-[140px] shrink-0">
        {isHeader ? (
          <SortableLabel
            label={values[0]}
            isActive={sortColumn === values[0]}
            direction={sortColumn === values[0] ? sortDirection : undefined}
            onClick={() => handleSort(values[0])}
          />
        ) : (
          <p className="text-sm font-normal text-subtle leading-[1.4]">
            {values[0]}
          </p>
        )}
      </div>
    );
  }

  return null;
};

// ─── Row shell ───
// Both header and item render inside this shell to guarantee alignment.

const RowShell: React.FC<{
  nameContent: React.ReactNode;
  cols: TableListItemCols;
  metaValues: string[];
  metaProps?: {
    isHeader?: boolean;
    sortColumn?: string;
    sortDirection?: SortDirection;
    onSortChange?: (column: string, direction: SortDirection) => void;
  };
  rightSlot?: React.ReactNode;
  bg?: string;
  height?: string;
  padding?: string;
  selected?: boolean;
  isGroup?: boolean;
  onClick?: () => void;
  onDoubleClick?: () => void;
  className?: string;
}> = ({
  nameContent,
  cols,
  metaValues,
  metaProps,
  rightSlot,
  bg = "",
  height = "",
  padding = "px-gitlaw-xl",
  selected = false,
  isGroup = false,
  onClick,
  onDoubleClick,
  className = "",
}) => (
  <div
    className={`
      relative flex items-center gap-gitlaw-m rounded-gitlaw-m w-full
      ${bg} ${height} ${padding}
      ${onClick ? "cursor-pointer" : ""}
      ${isGroup ? "group" : ""}
      ${className}
    `}
    data-row="true"
    onClick={onClick}
    onDoubleClick={onDoubleClick}
  >
    {/* Name column — always flex-1 */}
    <div className="flex flex-1 items-center gap-2 min-h-[48px] min-w-0">
      {nameContent}
    </div>

    {/* Meta columns — flex-1 for 6 cols (equal split with name), shrink-0 for 4/2 */}
    <div
      className={`flex items-center gap-gitlaw-m ${cols === 6 ? "flex-1 min-w-0" : "shrink-0"}`}
    >
      <MetaCols cols={cols} values={metaValues} {...metaProps} />
      {rightSlot}
    </div>

    {/* Selection ring */}
    {selected && (
      <div className="absolute inset-0 border-2 border-primary rounded-gitlaw-m pointer-events-none" />
    )}
  </div>
);

// ─── Header type ───

const HeaderRow: React.FC<TableListItemProps> = ({
  cols = 6,
  headerLabels,
  selectMode = false,
  selectStatus = "off",
  onSelectAllClick,
  sortColumn,
  sortDirection,
  onSortChange,
  className = "",
}) => {
  const labels = headerLabels || defaultHeaderLabels[cols] || defaultHeaderLabels[6];
  const nameLabel = selectMode ? "Select all" : labels[0];
  const metaLabels = labels.slice(1);

  const handleNameSort = () => {
    if (!onSortChange) return;
    const newDir: SortDirection =
      sortColumn === labels[0] && sortDirection === "desc" ? "asc" : "desc";
    onSortChange(labels[0], newDir);
  };

  const isNameSorted = sortColumn === labels[0];

  return (
    <RowShell
      cols={cols}
      metaValues={metaLabels}
      metaProps={{
        isHeader: true,
        sortColumn,
        sortDirection,
        onSortChange,
      }}
      className={className}
      nameContent={
        <div className="flex items-center gap-2 min-w-0">
          {selectMode && (
            <Checkbox
              status={selectStatus}
              onChange={() => onSelectAllClick?.()}
            />
          )}
          <button
            type="button"
            onClick={selectMode ? undefined : handleNameSort}
            className={`text-base font-semibold text-foreground leading-[1.4] shrink-0 whitespace-nowrap ${selectMode ? "" : "cursor-pointer"}`}
          >
            {nameLabel}
            {isNameSorted && !selectMode
              ? sortDirection === "desc"
                ? " \u2193"
                : " \u2191"
              : ""}
          </button>
        </div>
      }
      rightSlot={
        <>
          <div className="size-8 shrink-0" />
          <div className="size-8 shrink-0" />
        </>
      }
    />
  );
};

// ─── Skeleton type ───

const SkeletonRow: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`
      flex items-center bg-card h-[80px] p-gitlaw-xl rounded-gitlaw-m w-full
      ${className}
    `}
  >
    <div className="flex flex-1 gap-2 items-center min-w-0">
      <SkeletonBar width="24px" height="h-[18px]" />
      <div className="flex flex-col gap-gitlaw-s min-w-0">
        <SkeletonBar width="280px" />
        <SkeletonBar width="77px" height="h-3" />
      </div>
    </div>
  </div>
);

// ─── Drag-and-drop type ───

const DragAndDropRow: React.FC<{ className?: string }> = ({
  className = "",
}) => (
  <div
    className={`
      flex items-center bg-secondary h-[80px] p-gitlaw-xl rounded-gitlaw-m w-full
      ${className}
    `}
  >
    <div className="flex flex-1 gap-2 items-center min-w-0">
      <SkeletonBar width="24px" height="h-[18px]" />
      <div className="flex flex-col gap-gitlaw-s min-w-0">
        <SkeletonBar width="280px" />
        <SkeletonBar width="77px" height="h-3" />
      </div>
    </div>
  </div>
);

// ─── Item type ───

const ItemRow: React.FC<TableListItemProps> = ({
  cols = 6,
  iconName = "folder",
  title = "Employment Agreements",
  subtitle = "8 files in folder",
  visibility,
  starCount,
  spam = false,
  metaValues = [],
  selected = false,
  starred = false,
  onStarClick,
  onMenuClick,
  onClick,
  onDoubleClick,
  className = "",
}) => {
  const hasTags = !!visibility || !!starCount || spam;

  return (
    <RowShell
      cols={cols}
      metaValues={metaValues}
      bg="bg-card"
      height="h-[80px]"
      padding="p-gitlaw-xl"
      selected={selected}
      isGroup
      onClick={onClick}
      onDoubleClick={onDoubleClick}
      className={className}
      nameContent={
        <div className="flex flex-1 gap-2 items-center min-w-0">
          <Icon
            name={iconName}
            className="size-5 shrink-0"
            color={colors.iconPrimary}
          />
          <div className="flex flex-col flex-1 justify-center min-w-0">
            <div className="flex items-center gap-gitlaw-s w-full">
              <p className="text-base font-semibold text-foreground leading-[1.4] shrink-0">
                {title}
              </p>
              {hasTags && (
                <div className="flex items-center gap-1 shrink-0">
                  {visibility && (
                    <InlineTag
                      label=""
                      iconName={visibilityIcons[visibility]}
                    />
                  )}
                  {starCount && (
                    <InlineTag
                      label={starCount}
                      icon={<StarIcon starred className="size-4" />}
                    />
                  )}
                  {spam && <InlineTag label="Spam" variant="spam" />}
                </div>
              )}
            </div>
            <p className="text-sm font-normal text-subtle leading-[1.4] truncate w-full">
              {subtitle}
            </p>
          </div>
        </div>
      }
      rightSlot={
        <>
          <StarButton starred={starred} onClick={onStarClick} />
          <MenuButton onClick={onMenuClick} />
        </>
      }
    />
  );
};

// ─── Main component ───

export const TableListItem: React.FC<TableListItemProps> = (props) => {
  const { type = "item" } = props;

  switch (type) {
    case "header":
      return <HeaderRow {...props} />;
    case "skeleton":
      return <SkeletonRow className={props.className} />;
    case "drag-and-drop":
      return <DragAndDropRow className={props.className} />;
    case "item":
    default:
      return <ItemRow {...props} />;
  }
};

export default TableListItem;
