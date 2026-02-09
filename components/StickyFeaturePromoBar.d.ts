import { default as React } from '../../node_modules/react';

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
export declare const StickyFeaturePromoBar: React.FC<StickyFeaturePromoBarProps>;
export default StickyFeaturePromoBar;
