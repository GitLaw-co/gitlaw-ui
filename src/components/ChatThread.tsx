import React from "react";
import { ChatInput } from "./ChatInput";
import { ChatUserMessage } from "./ChatUserMessage";
import { ChatAssistantMessage } from "./ChatAssistantMessage";

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

export const ChatThread: React.FC<ChatThreadProps> = ({
  messages = [],
  placeholder = "Ask anything",
  inputValue = "",
  onInputChange,
  onSubmit,
  onAttachmentClick,
  onSettingsClick,
  showSettingsDropdown = false,
  settingsDropdownContent,
  settingsDropdownPosition = "top",
  onSettingsDropdownClose,
  disclaimer = "GitLaw isn't a law firm and may make mistakes. Always review and consult a qualified attorney.",
  className = "",
}) => {
  return (
    <div className={`flex flex-col h-full min-h-0 ${className}`}>
      {/* Scrollable container */}
      <div className="flex-1 basis-0 min-h-0 overflow-y-auto flex flex-col items-stretch">
        {/* Inner flex wrapper */}
        <div className="flex-1 flex flex-col items-stretch">
          {/* Centered content wrapper with horizontal padding */}
          <div className="flex flex-col flex-1 shrink max-w-4xl mx-auto w-full pt-4 px-6">
            {/* Messages area - flex-1 pushes content to fill space */}
            <div className="shrink-0 flex flex-col space-y-4 flex-1">
              {/* Spacer - pushes messages to bottom */}
              <div className="flex-1 basis-0 min-h-0" />
              {messages.map((message) =>
                message.role === "user" ? (
                  <ChatUserMessage key={message.id}>
                    {message.content}
                  </ChatUserMessage>
                ) : (
                  <ChatAssistantMessage key={message.id}>
                    {message.content}
                  </ChatAssistantMessage>
                )
              )}
            </div>

            {/* Sticky bottom: input + disclaimer - INSIDE scroll container */}
            <div className="shrink-0 sticky bottom-0 mt-6 pb-4 bg-page-background">
              <ChatInput
                size="m"
                status={inputValue ? "populated" : "active"}
                value={inputValue}
                onChange={onInputChange}
                onSubmit={onSubmit}
                onAttachmentClick={onAttachmentClick}
                onSettingsClick={onSettingsClick}
                showSettingsDropdown={showSettingsDropdown}
                settingsDropdownContent={settingsDropdownContent}
                settingsDropdownPosition={settingsDropdownPosition}
                onSettingsDropdownClose={onSettingsDropdownClose}
                showQuickActions={false}
                placeholder={placeholder}
                fullWidth
              />
              {disclaimer && (
                <p className="text-xs text-subtle text-center pt-2">
                  {disclaimer}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatThread;
