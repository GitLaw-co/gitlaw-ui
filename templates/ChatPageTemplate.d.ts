import { default as React } from '../../node_modules/react';
import { SidebarMenuItem, SidebarChatHistoryItem, ChatMessage, FileItem, PartyInfo } from '../components';

export interface ChatPageTemplateProps {
    /** Document/chat title */
    title?: string;
    /** Number of files attached (deprecated - use files array) */
    fileCount?: number;
    /** List of files available in this chat */
    files?: FileItem[];
    /** User name for sidebar */
    userName?: string;
    /** User initials for avatar */
    userInitials?: string;
    /** User avatar URL */
    userAvatar?: string;
    /** Sidebar menu items */
    menuItems?: SidebarMenuItem[];
    /** Chat history items for sidebar */
    chatHistory?: SidebarChatHistoryItem[];
    /** Chat messages */
    messages?: ChatMessage[];
    /** Document content for editor */
    documentContent?: React.ReactNode;
    /** Document title for editor header */
    documentTitle?: string;
    /** Document subtitle */
    documentSubtitle?: string;
    /** Agreement date */
    agreementDate?: string;
    /** Effective date */
    effectiveDate?: string;
    /** Party 1 info */
    party1?: PartyInfo;
    /** Party 2 info */
    party2?: PartyInfo;
    /** Preamble text */
    preambleText?: string;
    /** Parties connector text */
    partiesConnector?: string;
    /** Party 1 role label */
    party1Role?: string;
    /** Party 2 role label */
    party2Role?: string;
    /** Initial sidebar collapsed state */
    initialSidebarCollapsed?: boolean;
    /** Callback when sidebar toggle */
    onSidebarToggle?: (collapsed: boolean) => void;
    /** Callback when send message */
    onSendMessage?: (message: string) => void;
    /** Callback when a file is selected from dropdown */
    onFileSelect?: (file: FileItem) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * ChatPageTemplate - Full page layout for chat with document editor
 *
 * Desktop layout (constrained to viewport):
 * - Sidebar (left): 64px collapsed, 288px expanded
 * - Chat Section (middle): resizable width (280-600px, default 400px)
 *   - Content maintains min 280px width and "slides under" editor when dragged smaller
 *   - Collapses completely when dropped below 160px threshold
 * - Draggable divider: 1px visible line with 4px hit area for usability
 * - Editor Section (right): flex-grow, takes remaining space
 *   - Expands to full width when chat is collapsed
 *
 * All sections are constrained to viewport height/width with internal scrolling.
 */
export declare const ChatPageTemplate: React.FC<ChatPageTemplateProps>;
export default ChatPageTemplate;
