import { default as React } from '../../node_modules/react';

export type SectionVariant = "default" | "card";
export interface SectionProps {
    /** Section heading text (optional — renders as a small uppercase label) */
    title?: string;
    /** Right-side action element next to the title (e.g. a button or link) */
    action?: React.ReactNode;
    /** Visual variant: "default" (no background) or "card" (white card with rounded corners) */
    variant?: SectionVariant;
    /** Whether to show a top border above the section */
    showBorder?: boolean;
    /** Click handler for the entire card area (card variant only) */
    onClick?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Section content */
    children: React.ReactNode;
}
/**
 * Section — Labeled group within a page, matching the "Authors Section" pattern from Figma.
 *
 * Renders an optional heading row (title + action) and its children.
 * Use `variant="card"` for the white card background seen on settings list groups.
 *
 * With `onClick`, the entire card becomes a single interactive area (cursor pointer, hover state).
 * Use MenuItem's `showRIcon1 rIcon1="ellipsis"` on the first row for a three-dot menu.
 */
export declare const Section: React.FC<SectionProps>;
export default Section;
