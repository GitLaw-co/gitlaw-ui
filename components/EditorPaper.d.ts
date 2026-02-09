import { default as React } from '../../node_modules/react';

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
export declare const EditorPaper: React.FC<EditorPaperProps>;
export default EditorPaper;
