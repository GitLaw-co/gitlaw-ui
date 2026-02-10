import React from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export type TagSize = "xxs" | "xs" | "s" | "m" | "l" | "xl";
export type TagWeight = "regular" | "bold";

export interface TagProps {
  /** The text label */
  label?: string;
  /** The size of the tag */
  size?: TagSize;
  /** Font weight */
  weight?: TagWeight;
  /** Show icon */
  showIcon?: boolean;
  /** Custom icon */
  icon?: React.ReactNode;
  /** Show close button */
  showClose?: boolean;
  /** Close click handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

const sizeClasses: Record<
  TagSize,
  { container: string; text: string; icon: string }
> = {
  xxs: {
    container: "gap-1 px-2 py-1.5",
    text: "text-xxs",
    icon: "size-4",
  },
  xs: {
    container: "gap-2 px-2 py-1",
    text: "text-sm",
    icon: "size-5",
  },
  s: {
    container: "gap-2 px-4 py-2",
    text: "text-sm",
    icon: "size-6",
  },
  m: {
    container: "gap-2 px-4 py-2",
    text: "text-base",
    icon: "size-6",
  },
  l: {
    container: "gap-2 px-4 py-3",
    text: "text-base",
    icon: "size-6",
  },
  xl: {
    container: "gap-2 p-4",
    text: "text-lg",
    icon: "size-6",
  },
};

export const Tag: React.FC<TagProps> = ({
  label = "Label",
  size = "m",
  weight = "regular",
  showIcon = false,
  icon,
  showClose = false,
  onClose,
  className = "",
}) => {
  const sizeConfig = sizeClasses[size];
  const fontWeight = weight === "bold" ? "font-semibold" : "font-normal";

  return (
    <div
      className={`
        inline-flex items-center justify-center
        bg-backgrounds-tag-background rounded
        ${sizeConfig.container}
        ${className}
      `}
    >
      {showIcon && (
        <span className="shrink-0 text-foreground-tag">
          {icon || (
            <Icon
              name="user"
              className={sizeConfig.icon}
              color={colors.iconPrimary}
            />
          )}
        </span>
      )}
      <span
        className={`text-foreground-tag ${sizeConfig.text} ${fontWeight} overflow-hidden text-ellipsis`}
      >
        {label}
      </span>
      {showClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 text-foreground-tag hover:opacity-70 transition-fade"
        >
          <Icon
            name="x"
            className={sizeConfig.icon}
            color={colors.iconPrimary}
          />
        </button>
      )}
    </div>
  );
};

export default Tag;
