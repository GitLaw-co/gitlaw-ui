import { default as React } from '../../node_modules/react';

export interface EditorHeaderProps {
    /** Document title */
    title?: string;
    /** Show the Share button */
    showShare?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Callback when title/breadcrumb is clicked */
    onTitleClick?: () => void;
    /** Callback when ellipsis menu is clicked */
    onMenuClick?: () => void;
    /** Callback when share button is clicked */
    onShare?: () => void;
    /** Callback when eSign button is clicked */
    onESign?: () => void;
    /** Callback when download button is clicked */
    onDownload?: () => void;
    /** Callback when history/versions button is clicked */
    onVersions?: () => void;
    /** Callback when overflow menu is clicked */
    onMore?: () => void;
    /** Additional CSS classes */
    className?: string;
}
export declare const EditorHeader: React.FC<EditorHeaderProps>;
export default EditorHeader;
