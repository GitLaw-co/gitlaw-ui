import { default as React } from '../../node_modules/react';

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
export declare const Tag: React.FC<TagProps>;
export default Tag;
