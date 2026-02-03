import React from "react";
import { Input } from "./Input";

export type EditorPaperStatus = "default" | "view" | "diff";

export interface PartyInfo {
  name?: string;
  address?: string;
  role?: string;
}

export interface EditorPaperProps {
  /** Status of the editor paper */
  status?: EditorPaperStatus;
  /** Content to render inside the paper */
  children?: React.ReactNode;
  /** Whether to show the toolbar (only applies to default status) */
  showToolbar?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Agreement date value */
  agreementDate?: string;
  /** Agreement date change handler */
  onAgreementDateChange?: (value: string) => void;
  /** Party 1 info */
  party1?: PartyInfo;
  /** Party 1 change handler */
  onParty1Change?: (party: PartyInfo) => void;
  /** Party 2 info */
  party2?: PartyInfo;
  /** Party 2 change handler */
  onParty2Change?: (party: PartyInfo) => void;
  /** Document title */
  title?: string;
  /** Document subtitle */
  subtitle?: string;
  /** Effective date value */
  effectiveDate?: string;
  /** Effective date change handler */
  onEffectiveDateChange?: (value: string) => void;
  /** Preamble text before effective date (e.g., "This Agreement is entered into on") */
  preambleText?: string;
  /** Text between parties in header box (e.g., "and") */
  partiesConnector?: string;
  /** Party 1 role label (e.g., "Disclosing Party", "Lender") */
  party1Role?: string;
  /** Party 2 role label (e.g., "Receiving Party", "Hirer") */
  party2Role?: string;
}

/**
 * EditorPaper - Document paper/canvas component for the editor
 *
 * A white paper container for document content with optional toolbar.
 * Supports three status modes:
 * - default: Editable with toolbar
 * - view: Read-only without toolbar
 * - diff: Shows document differences
 */
export const EditorPaper: React.FC<EditorPaperProps> = ({
  status = "default",
  children,
  showToolbar = true,
  className = "",
  agreementDate = "",
  onAgreementDateChange,
  party1 = {},
  onParty1Change,
  party2 = {},
  onParty2Change,
  title = "Mutual Non-Disclosure Agreement",
  subtitle = "MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)",
  effectiveDate = "",
  onEffectiveDateChange,
  preambleText = "This Agreement is entered into on",
  partiesConnector = "and",
  party1Role = "Party 1",
  party2Role = "Party 2",
}) => {
  const isEditable = status === "default";
  const showToolbarArea = isEditable && showToolbar;

  // Determine input context based on whether values are filled
  const getContext = (value?: string) =>
    value ? "document-filled" : "document-empty";

  return (
    <div
      className={`
        bg-white
        flex flex-col items-center
        w-full
        font-document
        ${showToolbarArea ? "pt-16" : "pt-6"}
        pb-6 px-6
        min-h-screen
        ${className}
      `}
      data-status={status}
    >
      <div className="w-full max-w-3xl flex flex-col gap-4">
        {/* Document Header */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h1 className="text-2xl font-bold text-foreground m-0">{title}</h1>

          {/* DATED row */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-foreground">DATED</span>
            <Input
              size="xs"
              context={getContext(agreementDate)}
              value={agreementDate}
              onChange={onAgreementDateChange}
              placeholder="Agreement date"
            />
          </div>

          {/* Parties Table */}
          <div className="border border-input-border rounded flex flex-col">
            {/* Parties row */}
            <div className="flex items-center gap-1 p-4">
              <Input
                size="xs"
                context={getContext(party1.name)}
                value={party1.name || ""}
                onChange={(v) => onParty1Change?.({ ...party1, name: v })}
                placeholder="Party 1 full name"
              />
              <span className="text-sm text-foreground">
                {partiesConnector}
              </span>
              <Input
                size="xs"
                context={getContext(party2.name)}
                value={party2.name || ""}
                onChange={(v) => onParty2Change?.({ ...party2, name: v })}
                placeholder="Party 2 full name"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-input-border" />

            {/* Subtitle */}
            {subtitle && (
              <div className="p-4">
                <p className="text-sm font-bold text-foreground whitespace-pre-line m-0">
                  {subtitle}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Document Body Title */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-semibold text-foreground m-0">{title}</h2>

          {/* Effective date row */}
          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-sm text-foreground">{preambleText}</span>
            <Input
              size="xs"
              context={getContext(effectiveDate)}
              value={effectiveDate}
              onChange={onEffectiveDateChange}
              placeholder="Agreement date"
            />
          </div>

          {/* Between parties */}
          <div className="text-sm text-foreground">between:</div>

          {/* Party 1 details */}
          <div className="flex items-center gap-2 pl-4 flex-wrap">
            <span className="text-sm text-foreground">1.</span>
            <Input
              size="xs"
              context={getContext(party1.name)}
              value={party1.name || ""}
              onChange={(v) => onParty1Change?.({ ...party1, name: v })}
              placeholder="Party 1 full name"
            />
            <span className="text-sm text-foreground">of</span>
            <Input
              size="xs"
              context={getContext(party1.address)}
              value={party1.address || ""}
              onChange={(v) => onParty1Change?.({ ...party1, address: v })}
              placeholder="Party 1 address"
            />
            <span className="text-sm text-foreground">
              ("{party1Role}"); and
            </span>
          </div>

          {/* Party 2 details */}
          <div className="flex items-center gap-2 pl-4 flex-wrap">
            <span className="text-sm text-foreground">2.</span>
            <Input
              size="xs"
              context={getContext(party2.name)}
              value={party2.name || ""}
              onChange={(v) => onParty2Change?.({ ...party2, name: v })}
              placeholder="Party 2 full name"
            />
            <span className="text-sm text-foreground">of</span>
            <Input
              size="xs"
              context={getContext(party2.address)}
              value={party2.address || ""}
              onChange={(v) => onParty2Change?.({ ...party2, address: v })}
              placeholder="Party 2 address"
            />
            <span className="text-sm text-foreground">("{party2Role}").</span>
          </div>
        </div>

        {/* Document Content */}
        <div
          className="prose prose-sm max-w-none"
          contentEditable={isEditable}
          suppressContentEditableWarning
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default EditorPaper;
