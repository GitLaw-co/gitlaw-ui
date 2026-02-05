import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Tooltip, Icon } from "../../components";
import type { EditorHeaderProps } from "../../components/EditorHeader";
import { ChatPageTemplate } from "../../templates/ChatPageTemplate";
import type { ChatMessage, FileItem } from "../../components";

// ─── Local EditorHeader variant with neutral (white) tooltips ───────────────

const ActionButtonWhite: React.FC<{
  icon: string;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => (
  <Tooltip content={label} type="neutral" position="bottom" size="s">
    <div>
      <Button variant="icon" size="m" onClick={onClick} leftIconName={icon} />
    </div>
  </Tooltip>
);

const EditorHeaderWhite: React.FC<EditorHeaderProps> = ({
  title = "Untitled document",
  showShare = true,
  onClose,
  onMenuClick,
  onShare,
  onESign,
  onDownload,
  onVersions,
  onMore,
  className = "",
}) => {
  return (
    <div
      className={`
        bg-card border-b-dashed
        flex h-16 items-center justify-between
        px-gitlaw-xl py-gitlaw-m
        ${className}
      `}
    >
      <div className="flex items-center gap-1">
        <Tooltip content="Close document" type="neutral" position="bottom" size="s">
          <div>
            <Button variant="icon" size="m" onClick={onClose} leftIconName="x" />
          </div>
        </Tooltip>
        <div className="flex items-center gap-1">
          <span className="text-base font-normal text-primary">{title}</span>
          <Tooltip content="Document options" type="neutral" position="bottom" size="s">
            <div>
              <Button variant="icon" size="s" onClick={onMenuClick} leftIconName="ellipsis" />
            </div>
          </Tooltip>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {showShare && (
          <Button variant="outline" size="m" showLeftIcon leftIconName="lock" onClick={onShare}>
            Share
          </Button>
        )}
        <div className="flex items-center gap-1">
          <ActionButtonWhite icon="signature" label="Start eSign" onClick={onESign} />
          <ActionButtonWhite icon="arrow-down-to-line" label="Download" onClick={onDownload} />
          <ActionButtonWhite icon="history" label="Versions" onClick={onVersions} />
          <ActionButtonWhite icon="menu" label="More" onClick={onMore} />
        </div>
      </div>
    </div>
  );
};

// ─── Reuse data from main stories ───────────────────────────────────────────

const defaultFiles: FileItem[] = [
  { id: "1", name: "Influencer agreement" },
];

const defaultMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: (
      <>
        <p>I've drafted your influencer agreement. To complete the document, I need a few details:</p>
        <ul>
          <li>Counterparty legal name (e.g., "Blake Logan" or company name)</li>
          <li>Counterparty address</li>
          <li>Signatory name and title</li>
          <li>Brief description of the campaign scope</li>
        </ul>
      </>
    ),
  },
  {
    id: "2",
    role: "user",
    content: "Sure: XYZ Ltd, 23 Waitrose Gardens SE24 OKL, reg nr 12738495",
  },
  {
    id: "3",
    role: "assistant",
    content: (
      <>
        <p>I've added the contractor details to the agreement:</p>
        <ul>
          <li><strong>Company:</strong> XYZ Ltd</li>
          <li><strong>Address:</strong> 23 Waitrose Gardens SE24 OKL</li>
          <li><strong>Registration:</strong> 12738495</li>
        </ul>
        <p>The document is ready for your review. You can edit any fields directly in the document on the right.</p>
      </>
    ),
  },
];

const SampleDocumentContent = () => (
  <>
    <h3 className="text-lg font-bold text-foreground mb-3">INTRODUCTION</h3>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li className="text-foreground">The Talent is an Influencer with a significant number of subscribers and followers to their channels and platforms. The Company wishes to make use of the Talent's services as stated hereunder to promote the Company's products and services to a wider audience.</li>
      <li className="text-foreground">The Lender has agreed to procure that the Talent shall provide certain services and materials for the Company as more particularly described in this Agreement and the parties agree that such services and materials shall be supplied in accordance with the terms of this Agreement.</li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mt-6 mb-3">IT IS AGREED AS FOLLOWS:</h3>
    <ol className="list-decimal list-inside space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Definitions and Interpretation</strong>
        <p className="ml-4 mt-2">In this Agreement, unless the context otherwise requires:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>"<strong>Confidential Information</strong>" means all information disclosed by one party to the other, whether orally, in writing, or by any other means, that is designated as confidential.</li>
          <li>"<strong>Content</strong>" means any and all materials, including but not limited to photographs, videos, audio recordings, written copy, graphics, and other creative works produced by the Talent in connection with this Agreement.</li>
          <li>"<strong>Deliverables</strong>" means the specific items of Content to be created and delivered by the Talent as set out in Schedule 1.</li>
        </ol>
      </li>
      <li className="text-foreground">
        <strong>Services</strong>
        <p className="ml-4 mt-2">The Lender shall procure that the Talent provides the Services set out in Schedule 1 to this Agreement.</p>
      </li>
      <li className="text-foreground">
        <strong>Term and Termination</strong>
        <p className="ml-4 mt-2">This Agreement shall commence on the Effective Date and continue for a period of 12 months unless terminated earlier in accordance with its terms.</p>
      </li>
    </ol>
  </>
);

// ─── Story meta ─────────────────────────────────────────────────────────────

const meta: Meta = {
  title: "Review/White Tooltips",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

// ─── Side by side comparison ────────────────────────────────────────────────

/**
 * ## White Tooltips Review
 *
 * This page shows the ChatPageTemplate with **white (neutral) tooltips**
 * on the document header buttons instead of the current purple tooltips.
 *
 * **What changed:**
 * - EditorHeader: All tooltips use `type="neutral"` (white bg, dark text)
 * - ChatInput: Tooltips remain purple for now (deeply embedded, would need prop threading)
 *
 * **To review:** Hover over the document header buttons (close, eSign, download, versions, more)
 * to see white tooltips.
 */
export const EditorHeaderComparison: StoryObj = {
  render: () => (
    <div className="flex flex-col h-screen">
      {/* Purple (current) */}
      <div className="border-b-2 border-dashed border-gray-300">
        <div className="px-4 py-2 bg-gray-100 text-sm font-medium text-gray-600">
          Current: Purple tooltips (hover over buttons to compare)
        </div>
        <div className="bg-card">
          <EditorHeaderWhite
            title="Influencer Agreement"
            // This actually uses the white version — we swap for comparison
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * Full page template with white tooltips on the editor header.
 * All editor header tooltips (close, document options, eSign, download, versions, more)
 * use white/neutral style instead of purple.
 *
 * **ChatInput tooltips:** The attachment and quick action tooltips inside ChatInput
 * still use purple. To change those would require a `tooltipType` prop on ChatInput.
 */
export const FullPageWhiteTooltips: StoryObj = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [sidebarCollapsed, setSidebarCollapsed] = React.useState(true);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [editorCollapsed, setEditorCollapsed] = React.useState(false);

    return (
      <div className="flex h-screen max-h-screen w-screen max-w-full overflow-hidden">
        {/* Sidebar */}
        <div className={`h-full shrink-0 transition-[width] duration-normal ease-gitlaw ${sidebarCollapsed ? "w-16" : "w-72"}`}>
          <div className="h-full">
            {/* Minimal sidebar placeholder to keep layout consistent */}
            <div className="h-full bg-primary flex flex-col items-center py-4">
              <button
                onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
                className="p-2 rounded hover:bg-white/10 transition-colors"
              >
                <Icon name={sidebarCollapsed ? "panel-left" : "panel-left-close"} className="size-6 text-white" />
              </button>
            </div>
          </div>
        </div>

        {/* Chat Section */}
        <div className={`h-full overflow-hidden ${editorCollapsed ? "flex-1" : "shrink-0"}`} style={editorCollapsed ? undefined : { width: 400 }}>
          <div className="flex flex-col h-full bg-page-background" style={editorCollapsed ? undefined : { minWidth: 280 }}>
            <div className="flex h-16 items-center px-6 border-b border-border">
              <span className="text-base font-normal text-primary">Influencer Agreement with Blake Logan</span>
            </div>
            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-4">
              {defaultMessages.map((msg) => (
                <div key={msg.id} className={`mb-4 ${msg.role === "user" ? "text-right" : ""}`}>
                  <div className={`inline-block max-w-[85%] px-4 py-3 rounded-lg text-sm ${
                    msg.role === "user"
                      ? "bg-primary text-white"
                      : "bg-white shadow-sm"
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        {!editorCollapsed && (
          <div className="relative h-full shrink-0 cursor-col-resize group" style={{ width: 4 }}>
            <div className="absolute left-1/2 -translate-x-1/2 w-px h-full bg-border" />
          </div>
        )}

        {/* Editor Section with WHITE tooltips */}
        {!editorCollapsed && (
          <div className="flex flex-col flex-1 min-w-0 h-full bg-card shadow-card z-10">
            {/* White tooltip EditorHeader */}
            <EditorHeaderWhite
              title="Influencer Agreement"
              onClose={() => setEditorCollapsed(true)}
            />

            {/* Editor content placeholder */}
            <div className="flex-1 min-h-0 overflow-y-auto px-6 py-8">
              <div className="max-w-[680px] mx-auto">
                <SampleDocumentContent />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  },
};

/**
 * Uses the actual ChatPageTemplate (purple tooltips) for direct A/B comparison.
 * Open this and the WhiteTooltips story side by side to compare.
 */
export const CurrentPurpleTooltips: StoryObj = {
  render: () => (
    <ChatPageTemplate
      title="Influencer Agreement with Blake Logan"
      files={defaultFiles}
      userName="Ava Campbell"
      userInitials="AC"
      messages={defaultMessages}
      documentTitle="Influencer Agreement"
      documentSubtitle={"AGREEMENT FOR APPOINTMENT OF Influencer\n(via a lender/service company)"}
      agreementDate="21 March, 2025"
      effectiveDate="27 March, 2025"
      preambleText="This Social Talent Agreement is entered into on"
      party1={{ name: "ABC Entertainment", address: "112 Waitrose Gardens, WC2 ECH" }}
      party2={{ name: "", address: "" }}
      party1Role="Lender"
      party2Role="Company"
      documentContent={<SampleDocumentContent />}
      initialSidebarCollapsed={true}
    />
  ),
};
