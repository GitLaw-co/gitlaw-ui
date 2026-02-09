import { default as React } from '../../node_modules/react';

export type EditorToolbarSize = "xs" | "s";
export type EditorToolbarStatus = "editing" | "reviewing";
export interface EditorToolbarProps {
    /** Toolbar size - xs for desktop, s for mobile (easier to tap) */
    size?: EditorToolbarSize;
    /** Toolbar state - editing shows formatting tools, reviewing shows version info */
    status?: EditorToolbarStatus;
    /** Callback when undo is clicked */
    onUndo?: () => void;
    /** Whether undo is disabled */
    undoDisabled?: boolean;
    /** Callback when redo is clicked */
    onRedo?: () => void;
    /** Whether redo is disabled */
    redoDisabled?: boolean;
    /** Callback when text style dropdown is clicked */
    onTextStyle?: () => void;
    /** Callback when bold is clicked */
    onBold?: () => void;
    /** Callback when italic is clicked */
    onItalic?: () => void;
    /** Callback when underline is clicked */
    onUnderline?: () => void;
    /** Callback when strikethrough is clicked */
    onStrikethrough?: () => void;
    /** Callback when bullet list is clicked */
    onList?: () => void;
    /** Callback when ordered list is clicked */
    onOrderedList?: () => void;
    /** Callback when link is clicked */
    onLink?: () => void;
    /** Callback when image is clicked */
    onImage?: () => void;
    /** Callback when table is clicked */
    onTable?: () => void;
    /** Callback when horizontal rule is clicked */
    onHorizontalRule?: () => void;
    /** Callback when quote is clicked */
    onQuote?: () => void;
    /** Callback when code is clicked */
    onCode?: () => void;
    /** Callback when highlight dropdown is clicked */
    onHighlight?: () => void;
    /** Callback when suggest edits is clicked */
    onSuggestEdits?: () => void;
    /** Callback when back to edit is clicked */
    onBackToEdit?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const EditorToolbar: React.FC<EditorToolbarProps>;
export default EditorToolbar;
