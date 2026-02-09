import { default as React } from '../../node_modules/react';

export type InputSize = "xs" | "s" | "m" | "l" | "xl";
export type InputStatus = "empty" | "populated" | "active";
export type InputAlign = "fill" | "hug";
/** Context for styling - 'default' for standard inputs, 'document-empty' for yellow bg, 'document-filled' for purple bg */
export type InputContext = "default" | "document-empty" | "document-filled";
export interface InputProps {
    /** The size of the input */
    size?: InputSize;
    /** The current status */
    status?: InputStatus;
    /** Width behavior */
    align?: InputAlign;
    /** Context for document inputs - affects background color */
    context?: InputContext;
    /** Placeholder text */
    placeholder?: string;
    /** Current value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Show external label */
    showLabel?: boolean;
    /** Label text */
    label?: string;
    /** Show left icon */
    showLeftIcon?: boolean;
    /** Show right icon */
    showRightIcon?: boolean;
    /** Custom left icon */
    leftIcon?: React.ReactNode;
    /** Custom right icon */
    rightIcon?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
}
export declare const Input: React.FC<InputProps>;
export default Input;
