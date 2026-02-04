import React from "react";
import { Icon } from "./Icon";
import { Switch } from "./Switch";
import { Badge } from "./Badge";
import { colors } from "../specs";

export type MenuItemLeftElement =
  | "icon"
  | "avatar"
  | "clause"
  | "select"
  | "mini-users";

export type MenuItemWidth = "fill" | "hug";

export interface MenuItemProps {
  /** Primary text content */
  primaryText?: string;
  /** Secondary text content */
  secondaryText?: string;
  /** Type of left element to display */
  leftElement?: MenuItemLeftElement;
  /** Show left element */
  showLeftElement?: boolean;
  /** Show secondary text */
  showSecondaryText?: boolean;
  /** Show background highlight */
  showBackground?: boolean;
  /** Show border stroke */
  showStroke?: boolean;
  /** Show tick badge in corner */
  showTick?: boolean;
  /** Custom left icon */
  leftIcon?: React.ReactNode;
  /** Avatar image source (for avatar type) */
  avatarSrc?: string;
  /** Avatar initials (for avatar type) */
  avatarInitials?: string;
  /** Selected state (for select type) */
  selected?: boolean;
  /** Click handler */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Width behavior - fill container or hug content */
  width?: MenuItemWidth;

  // R Element props - all can be shown independently or combined
  /** Show label text in R element */
  showRLabel?: boolean;
  /** Label text for R element */
  rLabel?: string;
  /** Show first icon in R element */
  showRIcon1?: boolean;
  /** First icon name for R element */
  rIcon1?: string;
  /** Show second icon in R element */
  showRIcon2?: boolean;
  /** Second icon name for R element */
  rIcon2?: string;
  /** Show button in R element */
  showRButton?: boolean;
  /** Button label for R element */
  rButtonLabel?: string;
  /** Show button set (x and check) in R element */
  showRButtonSet?: boolean;
  /** Button set cancel handler */
  onRButtonSetCancel?: () => void;
  /** Button set confirm handler */
  onRButtonSetConfirm?: () => void;
  /** Show badge in R element */
  showRBadge?: boolean;
  /** Badge count for R element */
  rBadgeCount?: number;
  /** Show switch in R element */
  showRSwitch?: boolean;
  /** Switch checked state for R element */
  rSwitchChecked?: boolean;
  /** Switch size for R element */
  rSwitchSize?: "s" | "m";
  /** Switch change handler for R element */
  onRSwitchChange?: (checked: boolean) => void;
  /** Show large avatar in R element */
  showRLargeAvatar?: boolean;
  /** Large avatar src for R element */
  rLargeAvatarSrc?: string;
  /** Show medium avatar in R element */
  showRMediumAvatar?: boolean;
  /** Medium avatar src for R element */
  rMediumAvatarSrc?: string;
  /** Show tags in R element */
  showRTags?: boolean;
  /** Tag label for R element */
  rTagLabel?: string;
}

export const MenuItem: React.FC<MenuItemProps> = ({
  primaryText = "Primary",
  secondaryText = "2 minutes ago",
  leftElement = "icon",
  showLeftElement = true,
  showSecondaryText = false,
  showBackground = false,
  showStroke = false,
  showTick = false,
  leftIcon,
  avatarSrc,
  avatarInitials = "AC",
  selected = false,
  onClick,
  className = "",
  width = "hug",
  // R Element props
  showRLabel = false,
  rLabel = "Label",
  showRIcon1 = false,
  rIcon1 = "check",
  showRIcon2 = false,
  rIcon2 = "check",
  showRButton = false,
  rButtonLabel = "Action",
  showRButtonSet = false,
  onRButtonSetCancel,
  onRButtonSetConfirm,
  showRBadge = false,
  rBadgeCount = 7,
  showRSwitch = false,
  rSwitchChecked = false,
  rSwitchSize = "m",
  onRSwitchChange,
  showRLargeAvatar = false,
  rLargeAvatarSrc,
  showRMediumAvatar = false,
  rMediumAvatarSrc,
  showRTags = false,
  rTagLabel = "Label",
}) => {
  const widthClass = width === "fill" ? "w-full" : "w-fit";
  // Check if any R element is shown
  const hasRElement =
    showRLabel ||
    showRIcon1 ||
    showRIcon2 ||
    showRButton ||
    showRButtonSet ||
    showRBadge ||
    showRSwitch ||
    showRLargeAvatar ||
    showRMediumAvatar ||
    showRTags;
  const renderLeftElement = () => {
    if (!showLeftElement) return null;

    switch (leftElement) {
      case "icon":
        return (
          leftIcon || (
            <Icon
              name="circle-dashed"
              className="size-6"
              color={colors.textPrimary}
            />
          )
        );

      case "avatar":
        return (
          <div className="size-8 rounded bg-primary flex items-center justify-center shrink-0">
            {avatarSrc ? (
              <img
                src={avatarSrc}
                alt=""
                className="w-full h-full object-cover rounded"
              />
            ) : (
              <span className="text-sm font-black text-negative">
                {avatarInitials}
              </span>
            )}
          </div>
        );

      case "clause":
        return (
          <div className="size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0">
            <Icon name="info" className="size-6" color={colors.positive} />
          </div>
        );

      case "select":
        return (
          <div
            className={`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${selected ? "bg-primary border-primary" : "bg-white border-secondary"}
            `}
          >
            {selected && (
              <Icon
                name="check"
                className="size-3"
                color={colors.iconNegative}
              />
            )}
          </div>
        );

      case "mini-users":
        return (
          <div className="flex items-center -space-x-1 shrink-0">
            <div className="size-4 rounded bg-gray-300 border-2 border-white z-10" />
            <div className="size-4 rounded bg-primary flex items-center justify-center">
              <span className="text-[8px] font-black text-negative">AC</span>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div
      className={`
        relative flex items-center gap-2 min-h-12 p-3 ${widthClass} cursor-pointer
        hover:bg-secondary rounded transition-colors
        ${className}
      `}
      onClick={onClick}
    >
      {showBackground && (
        <div className="absolute inset-0 bg-secondary rounded" />
      )}
      {showStroke && (
        <div className="absolute inset-0 border border-card-idle-border rounded" />
      )}

      <div className="relative flex items-center gap-2 flex-1 min-h-px min-w-px">
        {renderLeftElement()}

        <div className="flex flex-col flex-1 min-w-0">
          <p className="text-base font-normal text-foreground truncate leading-[1.4]">
            {primaryText}
          </p>
          {showSecondaryText && (
            <p className="text-sm font-normal text-subtle leading-[1.4]">
              {secondaryText}
            </p>
          )}
        </div>
      </div>

      {hasRElement && (
        <div className="relative flex items-center gap-2 justify-end min-h-6 shrink-0">
          {showRBadge && <Badge type="red" count={rBadgeCount} />}
          {showRLabel && (
            <span className="text-sm text-subtle min-w-6">{rLabel}</span>
          )}
          {showRButton && (
            <button className="flex items-center gap-1 px-3 py-2 h-8 rounded bg-secondary text-xs text-foreground-button">
              <Icon
                name="check"
                className="size-6"
                color={colors.iconPrimary}
              />
              <span>{rButtonLabel}</span>
            </button>
          )}
          {showRButtonSet && (
            <div className="flex items-center gap-2">
              <button
                className="flex items-center justify-center size-8 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  onRButtonSetCancel?.();
                }}
              >
                <Icon name="x" className="size-6" color={colors.iconPrimary} />
              </button>
              <button
                className="flex items-center justify-center size-8 rounded"
                onClick={(e) => {
                  e.stopPropagation();
                  onRButtonSetConfirm?.();
                }}
              >
                <Icon
                  name="check"
                  className="size-6"
                  color={colors.iconPrimary}
                />
              </button>
            </div>
          )}
          {showRTags && (
            <div className="flex items-center gap-2 px-4 py-2 rounded bg-backgrounds-tag-background">
              <Icon
                name="user-round"
                className="size-6"
                color={colors.positive}
              />
              <span className="text-sm text-foreground-tag">{rTagLabel}</span>
            </div>
          )}
          {showRLargeAvatar && (
            <div className="size-16 rounded overflow-hidden shrink-0">
              {rLargeAvatarSrc ? (
                <img
                  src={rLargeAvatarSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary" />
              )}
            </div>
          )}
          {showRMediumAvatar && (
            <div className="size-8 rounded overflow-hidden shrink-0">
              {rMediumAvatarSrc ? (
                <img
                  src={rMediumAvatarSrc}
                  alt=""
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-primary" />
              )}
            </div>
          )}
          {showRIcon1 && (
            <Icon name={rIcon1} className="size-6" color={colors.iconPrimary} />
          )}
          {showRIcon2 && (
            <Icon name={rIcon2} className="size-6" color={colors.iconPrimary} />
          )}
          {showRSwitch && (
            <Switch checked={rSwitchChecked} size={rSwitchSize} onChange={onRSwitchChange} />
          )}
        </div>
      )}

      {showTick && (
        <div className="absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center">
          <Icon name="check" className="size-6" color={colors.iconNegative} />
        </div>
      )}
    </div>
  );
};

export default MenuItem;
