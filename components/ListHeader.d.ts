import { default as React } from '../../node_modules/react';

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
export declare const ListHeader: React.FC<ListHeaderProps>;
export default ListHeader;
