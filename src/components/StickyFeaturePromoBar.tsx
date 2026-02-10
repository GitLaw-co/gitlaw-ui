import React from "react";
import { Icon } from "./Icon";
import { colors } from "../specs";

export interface StickyFeaturePromoBarProps {
  /** Title text (bold) */
  title: string;
  /** Subtitle text */
  subtitle?: string;
  /** Avatar image source URL */
  avatarSrc?: string;
  /** Avatar alt text */
  avatarAlt?: string;
  /** Action button label */
  actionLabel?: string;
  /** Show action button */
  showAction?: boolean;
  /** Action button click handler */
  onActionClick?: () => void;
  /** Close button click handler */
  onClose?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const StickyFeaturePromoBar: React.FC<StickyFeaturePromoBarProps> = ({
  title,
  subtitle,
  avatarSrc,
  avatarAlt = "",
  actionLabel = "Action",
  showAction = true,
  onActionClick,
  onClose,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-card rounded-gitlaw-m shadow-card
        flex items-center gap-gitlaw-2xl
        min-h-[48px] p-gitlaw-m
        ${className}
      `}
    >
      {/* Left content: avatar + labels */}
      <div className="flex items-center gap-gitlaw-m">
        {/* Avatar */}
        {avatarSrc && (
          <div className="size-8 rounded-gitlaw-s overflow-hidden shrink-0">
            <img
              src={avatarSrc}
              alt={avatarAlt}
              className="size-full object-cover"
            />
          </div>
        )}

        {/* Labels */}
        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold leading-[1.4] text-text-primary">
            {title}
          </p>
          {subtitle && (
            <p className="text-sm font-normal leading-[1.4] text-text-secondary">
              {subtitle}
            </p>
          )}
        </div>
      </div>

      {/* Right content: action button + close */}
      <div className="flex items-center gap-gitlaw-m min-h-[24px]">
        {showAction && (
          <button
            type="button"
            onClick={onActionClick}
            className="
              bg-primary hover:bg-primary-hover
              flex items-center justify-center gap-gitlaw-s
              h-8 px-gitlaw-l py-gitlaw-m
              rounded-gitlaw-s
              text-xs font-normal leading-[1.2]
              text-foreground-button-negative
              transition-interactive shrink-0
            "
          >
            {actionLabel}
          </button>
        )}

        <button
          type="button"
          onClick={onClose}
          className="shrink-0 hover:opacity-70 transition-fade"
        >
          <Icon
            name="x"
            className="size-6"
            color={colors.iconBlack}
          />
        </button>
      </div>
    </div>
  );
};

export default StickyFeaturePromoBar;
