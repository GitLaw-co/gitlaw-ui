import { default as React } from '../../node_modules/react';

export type MenuItemLeftElement = "icon" | "avatar" | "clause" | "select" | "mini-users";
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
    /** Button icon name for R element (default "check") */
    rButtonIcon?: string;
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
export declare const MenuItem: React.FC<MenuItemProps>;
export default MenuItem;
