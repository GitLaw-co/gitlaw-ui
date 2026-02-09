import { default as React } from '../../node_modules/react';

export type SelectSize = "xs" | "s" | "m" | "l" | "xl";
export type SelectStatus = "empty" | "default";
export type SelectAlign = "fill" | "hug";
export type SelectLabelPosition = "top" | "left";
export interface SelectOption {
    value: string;
    label: string;
}
export interface SelectProps {
    /** The size of the select */
    size?: SelectSize;
    /** The current status */
    status?: SelectStatus;
    /** Width behavior */
    align?: SelectAlign;
    /** Label position */
    labelPosition?: SelectLabelPosition;
    /** Placeholder text */
    placeholder?: string;
    /** Current value */
    value?: string;
    /** Options to select from */
    options?: SelectOption[];
    /** Change handler */
    onChange?: (value: string) => void;
    /** Show external label */
    showLabel?: boolean;
    /** Label text */
    label?: string;
    /** Show left icon */
    showLeftIcon?: boolean;
    /** Custom left icon */
    leftIcon?: React.ReactNode;
    /** Custom right icon */
    rightIcon?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
}
export declare const Select: React.FC<SelectProps>;
export default Select;
