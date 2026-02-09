import { default as React } from '../../node_modules/react';

export type CheckboxStatus = "off" | "on" | "semi";
export interface CheckboxProps {
    /** Checkbox state */
    status?: CheckboxStatus;
    /** Disabled state */
    disabled?: boolean;
    /** Change handler */
    onChange?: (status: CheckboxStatus) => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
