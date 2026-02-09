import { default as React } from '../../node_modules/react';

export interface DialogProps {
    /** Dialog title */
    title: string;
    /** Dialog message/description */
    message: string;
    /** Primary button label */
    primaryLabel?: string;
    /** Secondary button label */
    secondaryLabel?: string;
    /** Show close button */
    showCloseButton?: boolean;
    /** Primary button click handler */
    onPrimaryClick?: () => void;
    /** Secondary button click handler */
    onSecondaryClick?: () => void;
    /** Close button click handler */
    onClose?: () => void;
    /** Whether dialog is open */
    open?: boolean;
    /** Additional CSS classes */
    className?: string;
}
export declare const Dialog: React.FC<DialogProps>;
export default Dialog;
