import React from "react";

export interface ChatUserMessageProps {
  children: React.ReactNode;
  className?: string;
}

export const ChatUserMessage: React.FC<ChatUserMessageProps> = ({
  children,
  className = "",
}) => {
  return (
    <div className={`flex flex-col gap-4 items-end mb-4 last:mb-0 ${className}`}>
      <div className="p-4 bg-secondary text-secondary-foreground max-w-[80%] rounded-lg text-sm break-words">
        {children}
      </div>
    </div>
  );
};

export default ChatUserMessage;
