import { default as React } from '../../node_modules/react';
import { EditorHeaderProps } from './EditorHeader';

export interface EditorSectionProps {
    /** Whether the section is open/visible */
    isOpen?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Initial width of the section (default: 50% of viewport) */
    initialWidth?: number;
    /** Minimum width in pixels */
    minWidth?: number;
    /** Maximum width in pixels (or percentage of viewport) */
    maxWidth?: number;
    /** Callback when width changes during drag */
    onWidthChange?: (width: number) => void;
    /** EditorHeader props */
    headerProps?: Omit<EditorHeaderProps, "onClose">;
    /** Content to render (EditorPaper with toolbar inside) */
    children?: React.ReactNode;
    /** Additional CSS classes */
    className?: string;
}
/**
 * EditorSection - Resizable document editing panel
 *
 * Contains EditorHeader, EditorToolbar, and content area (EditorPaper).
 * Positioned on the right side with a draggable left edge for resizing.
 * Can be closed via the X button in EditorHeader.
 */
export declare const EditorSection: React.FC<EditorSectionProps>;
export default EditorSection;
