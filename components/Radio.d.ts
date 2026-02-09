import { default as React } from '../../node_modules/react';

export interface RadioProps {
    /** Radio state */
    status?: boolean;
    /** Disabled state */
    disabled?: boolean;
    /** Change handler */
    onChange?: (status: boolean) => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const Radio: React.FC<RadioProps>;
export default Radio;
