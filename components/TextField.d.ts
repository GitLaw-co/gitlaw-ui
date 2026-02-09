import { default as React } from '../../node_modules/react';

export type TextFieldSize = "xs" | "s" | "m" | "l" | "xl";
export type TextFieldStatus = "empty" | "populated" | "active";
export interface TextFieldProps {
    /** The size of the text field */
    size?: TextFieldSize;
    /** The current status */
    status?: TextFieldStatus;
    /** Placeholder text */
    placeholder?: string;
    /** Current value */
    value?: string;
    /** Change handler */
    onChange?: (value: string) => void;
    /** Show border stroke */
    showStroke?: boolean;
    /** Show icon in top right */
    showIcon?: boolean;
    /** Custom icon */
    icon?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
    /** Number of rows */
    rows?: number;
}
export declare const TextField: React.FC<TextFieldProps>;
export default TextField;
