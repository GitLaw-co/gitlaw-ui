import { default as React } from '../../node_modules/react';
import { ButtonSize } from '../specs';

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive" | "disabled" | "icon";
export type { ButtonSize };
export interface ButtonProps {
    /** The content to display in the button */
    children?: React.ReactNode;
    /** The visual style variant */
    variant?: ButtonVariant;
    /** The size of the button */
    size?: ButtonSize;
    /** Show left icon */
    showLeftIcon?: boolean;
    /** Show right icon */
    showRightIcon?: boolean;
    /** Left icon name (uses correct size automatically) */
    leftIconName?: string;
    /** Right icon name (uses correct size automatically) */
    rightIconName?: string;
    /** Custom left icon (overrides leftIconName, caller handles sizing) */
    leftIcon?: React.ReactNode;
    /** Custom right icon (overrides rightIconName, caller handles sizing) */
    rightIcon?: React.ReactNode;
    /** Click handler */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Disabled state */
    disabled?: boolean;
}
export declare const Button: React.FC<ButtonProps>;
export default Button;
