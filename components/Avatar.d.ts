import { default as React } from '../../node_modules/react';

export type AvatarType = "image" | "initials" | "icon" | "empty";
export type AvatarSize = "S" | "M" | "L" | "XL";
export interface AvatarProps {
    /** The type of avatar content */
    type?: AvatarType;
    /** The size of the avatar */
    size?: AvatarSize;
    /** Image source URL (for image type) */
    src?: string;
    /** Initials text (for initials type) */
    initials?: string;
    /** Alt text for image */
    alt?: string;
    /** Show edit button */
    showEdit?: boolean;
    /** Edit click handler */
    onEditClick?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
