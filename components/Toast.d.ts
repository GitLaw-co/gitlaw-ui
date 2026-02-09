import { default as React } from '../../node_modules/react';

export type ToastVariant = "default" | "success" | "error" | "warning";
export interface ToastProps {
    /** Toast message */
    message: string;
    /** Toast variant */
    variant?: ToastVariant;
    /** Action button label */
    actionLabel?: string;
    /** Show action button */
    showAction?: boolean;
    /** Action button click handler */
    onActionClick?: () => void;
    /** Close button click handler */
    onClose?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const Toast: React.FC<ToastProps>;
export default Toast;
