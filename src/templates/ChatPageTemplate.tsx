import React, { useState, useRef, useCallback } from "react";
import {
  Sidebar,
  TopHeader,
  ChatThread,
  EditorHeader,
  EditorToolbar,
  EditorPaper,
  MenuItem,
  Icon,
} from "../components";
import type {
  SidebarMenuItem,
  SidebarChatHistoryItem,
  ChatMessage,
  FileItem,
  PartyInfo,
} from "../components";
import ukFlag from "../assets/flags/uk-uk.svg";

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
export const ChatPageTemplate: React.FC<ChatPageTemplateProps> = ({
  title = "Influencer Agreement with Blake Logan",
  fileCount,
  files = [],
  userName = "Ava Campbell",
  userInitials = "AC",
  userAvatar,
  menuItems,
  chatHistory,
  messages = [],
  documentContent,
  documentTitle = "Influencer agreement",
  documentSubtitle,
  agreementDate,
  effectiveDate,
  party1,
  party2,
  preambleText,
  partiesConnector,
  party1Role,
  party2Role,
  initialSidebarCollapsed = true,
  onSidebarToggle,
  onSendMessage,
  onFileSelect,
  className = "",
}) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(initialSidebarCollapsed);
  const [inputValue, setInputValue] = useState("");
  const [chatWidth, setChatWidth] = useState(400); // Default chat width
  const [chatCollapsed, setChatCollapsed] = useState(false); // Chat section collapsed state
  const [editorCollapsed, setEditorCollapsed] = useState(false); // Editor section collapsed state
  const [selectedFileId, setSelectedFileId] = useState<string | undefined>(
    files.length > 0 ? files[0].id : undefined
  );
  const [isDragging, setIsDragging] = useState(false);
  const [showSettingsDropdown, setShowSettingsDropdown] = useState(false);
  const [reviewAgentChanges, setReviewAgentChanges] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Compute effective file count from files array or prop
  const effectiveFileCount = fileCount ?? files.length;

  // Threshold for collapsing chat section
  const COLLAPSE_THRESHOLD = 160;

  const handleSidebarToggle = () => {
    const newState = !sidebarCollapsed;
    setSidebarCollapsed(newState);
    onSidebarToggle?.(newState);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      onSendMessage?.(inputValue);
      setInputValue("");
    }
  };

  const handleEditorClose = () => {
    setEditorCollapsed(true);
  };

  const handleFileSelect = (file: FileItem) => {
    setSelectedFileId(file.id);
    // Reopen editor when a file is selected
    if (editorCollapsed) {
      setEditorCollapsed(false);
    }
    onFileSelect?.(file);
  };

  // Handle drag start
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  // Handle drag move
  const handleDragMove = useCallback((e: MouseEvent) => {
    if (!isDragging || !containerRef.current || !sidebarRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const sidebarRect = sidebarRef.current.getBoundingClientRect();
    const newChatWidth = e.clientX - sidebarRect.right;
    const distanceFromRight = containerRect.right - e.clientX;

    // If chat is collapsed and dragging right, uncollapse it
    if (chatCollapsed && newChatWidth >= COLLAPSE_THRESHOLD) {
      setChatCollapsed(false);
    }

    // If editor is collapsed and dragging left (away from right edge), uncollapse it
    if (editorCollapsed && distanceFromRight >= COLLAPSE_THRESHOLD) {
      setEditorCollapsed(false);
    }

    // While dragging, allow any width (visual feedback)
    // Clamp to a minimum visual width during drag, but track actual position
    const visualWidth = Math.max(newChatWidth, 0);
    setChatWidth(visualWidth);
  }, [isDragging, chatCollapsed, editorCollapsed]);

  // Handle drag end - check if should collapse chat or editor
  const handleDragEnd = useCallback(() => {
    if (!containerRef.current || !sidebarRef.current) {
      setIsDragging(false);
      return;
    }

    const containerRect = containerRef.current.getBoundingClientRect();
    const sidebarRect = sidebarRef.current.getBoundingClientRect();
    const availableWidth = containerRect.width - sidebarRect.width - 4; // minus divider width
    const editorWidth = availableWidth - chatWidth;

    setIsDragging(false);

    // If chat dropped below threshold, collapse it
    if (chatWidth < COLLAPSE_THRESHOLD) {
      setChatCollapsed(true);
      setChatWidth(0);
    } else if (chatWidth < 280) {
      // If above collapse threshold but below min width, snap to min
      setChatWidth(280);
    }

    // If editor would be too small, collapse it
    if (editorWidth < COLLAPSE_THRESHOLD && !editorCollapsed) {
      setEditorCollapsed(true);
    }
  }, [chatWidth, editorCollapsed]);

  // Attach mouse event listeners when dragging
  React.useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleDragMove);
      window.addEventListener('mouseup', handleDragEnd);
      document.body.style.cursor = 'col-resize';
      document.body.style.userSelect = 'none';
    } else {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    }

    return () => {
      window.removeEventListener('mousemove', handleDragMove);
      window.removeEventListener('mouseup', handleDragEnd);
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
  }, [isDragging, handleDragMove, handleDragEnd]);

  // Sidebar width: 64px collapsed, 288px (w-72) expanded
  const sidebarWidth = sidebarCollapsed ? "w-16" : "w-72";

  // UK Flag component for jurisdiction dropdown
  const UKFlag = () => (
    <img src={ukFlag} alt="UK" className="size-6 rounded-sm object-cover" />
  );

  // Jurisdiction dropdown content
  const jurisdictionDropdownContent = (
    <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      <MenuItem
        primaryText="Review agent changes"
        secondaryText="Review AI changes before applying"
        showSecondaryText
        showLeftElement
        leftIcon={<Icon name="text-search" className="size-6" />}
        width="fill"
        showRSwitch
        rSwitchChecked={reviewAgentChanges}
        rSwitchSize="s"
        onRSwitchChange={setReviewAgentChanges}
      />
      <MenuItem
        primaryText="Your jurisdiction"
        secondaryText="England & Wales"
        showSecondaryText
        showLeftElement
        leftIcon={<UKFlag />}
        width="fill"
        showRIcon1
        rIcon1="chevron-right"
      />
    </div>
  );

  return (
    <div
      ref={containerRef}
      className={`flex h-screen max-h-screen w-screen max-w-full overflow-hidden ${className}`}
    >
      {/* Sidebar - fixed width */}
      <div
        ref={sidebarRef}
        className={`h-full shrink-0 transition-[width] duration-normal ease-gitlaw ${sidebarWidth}`}
      >
        <Sidebar
          variant="inner"
          status={sidebarCollapsed ? "collapsed" : "expanded"}
          user="signed-in"
          userName={userName}
          userInitials={userInitials}
          userAvatar={userAvatar}
          menuItems={menuItems}
          chatHistory={chatHistory}
          onToggle={handleSidebarToggle}
        />
      </div>

      {/* Chat Section - middle, resizable width (clips content when small) */}
      {!chatCollapsed && (
        <div
          className={`h-full overflow-hidden ${editorCollapsed ? 'flex-1' : 'shrink-0'}`}
          style={editorCollapsed ? undefined : { width: chatWidth }}
        >
          {/* Inner container with minimum width - slides under editor when dragged small */}
          <div
            className="flex flex-col h-full bg-page-background"
            style={editorCollapsed ? undefined : { minWidth: Math.max(chatWidth, 280) }}
          >
            {/* Top Header */}
            <TopHeader
              title={title}
              showFiles={effectiveFileCount > 0}
              fileCount={effectiveFileCount}
              files={files}
              selectedFileId={selectedFileId}
              onFileSelect={handleFileSelect}
              showStroke={true}
            />

            {/* Chat Thread - includes messages and input */}
            <div className="flex-1 min-h-0">
              <ChatThread
                messages={messages}
                placeholder="Ask anything"
                inputValue={inputValue}
                onInputChange={setInputValue}
                onSubmit={handleSubmit}
                onSettingsClick={() => setShowSettingsDropdown(true)}
                showSettingsDropdown={showSettingsDropdown}
                settingsDropdownContent={jurisdictionDropdownContent}
                settingsDropdownPosition="top"
                onSettingsDropdownClose={() => setShowSettingsDropdown(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Draggable Divider - 1px visible line with 4px hit area */}
      {!editorCollapsed && (
        <div
          onMouseDown={handleDragStart}
          className="relative h-full shrink-0 cursor-col-resize group"
          style={{ width: 4 }}
        >
          {/* Visible 1px line centered in 4px hit area */}
          <div
            className={`
              absolute left-1/2 -translate-x-1/2 w-px h-full transition-interactive
              ${isDragging ? 'bg-primary' : 'bg-border group-hover:bg-primary/50'}
            `}
          />
        </div>
      )}

      {/* Editor Section - right side, takes remaining space */}
      {!editorCollapsed && (
        <div className="flex flex-col flex-1 min-w-0 h-full bg-card shadow-card z-10">

        {/* Editor Header */}
        <EditorHeader title={documentTitle} onClose={handleEditorClose} />

        {/* Editor Toolbar */}
        <EditorToolbar />

        {/* Editor Paper - scrollable */}
        <div className="flex-1 min-h-0 overflow-y-auto px-6">
          <EditorPaper
            title={documentTitle}
            subtitle={documentSubtitle}
            status="default"
            showToolbar={false}
            agreementDate={agreementDate}
            effectiveDate={effectiveDate}
            party1={party1}
            party2={party2}
            preambleText={preambleText}
            partiesConnector={partiesConnector}
            party1Role={party1Role}
            party2Role={party2Role}
          >
            {documentContent}
          </EditorPaper>
        </div>
      </div>
      )}
    </div>
  );
};

export default ChatPageTemplate;
