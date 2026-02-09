import { default as React } from '../../node_modules/react';
import { PopoverPosition } from './Popover';

export type ChatInputStatus = "active" | "populated" | "working";
export type ChatInputSize = "l" | "m";
export interface QuickAction {
    id: string;
    label: string;
    icon: "draft" | "review" | "summarize";
}
export type SettingsDropdownPosition = PopoverPosition;
export interface ChatInputProps {
    /** Input status */
    status?: ChatInputStatus;
    /** Input size */
    size?: ChatInputSize;
    /** Placeholder text (used if animatedPlaceholders is not provided) */
    placeholder?: string;
    /** Array of placeholders to rotate through with animation */
    animatedPlaceholders?: string[];
    /** Interval in ms between placeholder rotations (default: 3000) */
    placeholderInterval?: number;
    /** Input value */
    value?: string;
    /** Show quick actions */
    showQuickActions?: boolean;
    /** Quick action items */
    quickActions?: QuickAction[];
    /** On value change */
    onChange?: (value: string) => void;
    /** On submit */
    onSubmit?: () => void;
    /** On quick action click */
    onQuickActionClick?: (action: QuickAction) => void;
    /** On attachment click */
    onAttachmentClick?: () => void;
    /** On settings click */
    onSettingsClick?: () => void;
    /** On stop click (when working) */
    onStopClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Allow input to fill full container width */
    fullWidth?: boolean;
    /** Show settings dropdown */
    showSettingsDropdown?: boolean;
    /** Settings dropdown content */
    settingsDropdownContent?: React.ReactNode;
    /** Settings dropdown position */
    settingsDropdownPosition?: SettingsDropdownPosition;
    /** Called when clicking outside the dropdown to close it */
    onSettingsDropdownClose?: () => void;
}
export declare const ChatInput: React.FC<ChatInputProps>;
export default ChatInput;
