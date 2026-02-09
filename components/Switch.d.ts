import { default as React } from '../../node_modules/react';

export type SwitchSize = "s" | "m";
export interface SwitchProps {
    /** Current checked state */
    checked?: boolean;
    /** The size of the switch */
    size?: SwitchSize;
    /** Change handler */
    onChange?: (checked: boolean) => void;
    /** Disabled state */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Switch: React.FC<SwitchProps>;
export default Switch;
