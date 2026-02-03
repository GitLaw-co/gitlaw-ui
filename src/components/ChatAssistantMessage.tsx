import React from "react";

export interface ChatAssistantMessageProps {
  children: React.ReactNode;
  className?: string;
}

export const ChatAssistantMessage: React.FC<ChatAssistantMessageProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 mb-4 last:mb-0 ${className}`}>
      <div className="prose prose-sm text-sm text-foreground w-full break-words">
        {children}
      </div>
    </div>
  );
};

export default ChatAssistantMessage;
