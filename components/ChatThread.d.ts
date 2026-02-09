import { default as React } from '../../node_modules/react';

export interface ChatMessage {
    id: string;
    role: "user" | "assistant";
    content: React.ReactNode;
}
export interface ChatThreadProps {
    messages?: ChatMessage[];
    placeholder?: string;
    inputValue?: string;
    onInputChange?: (value: string) => void;
    onSubmit?: () => void;
    onAttachmentClick?: () => void;
    onSettingsClick?: () => void;
    /** Show settings dropdown */
    showSettingsDropdown?: boolean;
    /** Settings dropdown content */
    settingsDropdownContent?: React.ReactNode;
    /** Settings dropdown position */
    settingsDropdownPosition?: "top" | "bottom" | "left" | "right";
    /** Called when clicking outside the dropdown to close it */
    onSettingsDropdownClose?: () => void;
    disclaimer?: string;
    className?: string;
}
export declare const ChatThread: React.FC<ChatThreadProps>;
export default ChatThread;
