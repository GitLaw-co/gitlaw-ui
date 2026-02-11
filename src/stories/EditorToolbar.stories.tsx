import React, { useState, useRef, useCallback, useEffect } from "react";
import type { Story, StoryDefault } from "@ladle/react";
import { EditorToolbar } from "../components/EditorToolbar";

export default {
  title: "Editor / EditorToolbar",
  meta: { layout: "padded" },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "s"],
      description:
        "Toolbar size - xs for desktop, s for mobile (easier to tap)",
    },
    status: {
      control: { type: "select" },
      options: ["editing", "reviewing"],
      description:
        "Toolbar state - editing shows formatting tools, reviewing shows version info",
    },
    undoDisabled: {
      control: { type: "boolean" },
      description: "Whether undo button is disabled",
    },
    redoDisabled: {
      control: { type: "boolean" },
      description: "Whether redo button is disabled",
    },
  },
} satisfies StoryDefault;

/* ------------------------------------------------------------------ */
/*  Shared callback factory                                            */
/* ------------------------------------------------------------------ */

const log = (name: string) => () => console.log(`${name} clicked`);

const allCallbacks = {
  onUndo: log("Undo"),
  onRedo: log("Redo"),
  onTextStyle: log("Text style"),
  onBold: log("Bold"),
  onItalic: log("Italic"),
  onUnderline: log("Underline"),
  onStrikethrough: log("Strikethrough"),
  onList: log("Bullet list"),
  onOrderedList: log("Ordered list"),
  onLink: log("Link"),
  onImage: log("Image"),
  onTable: log("Table"),
  onHorizontalRule: log("Horizontal rule"),
  onQuote: log("Quote"),
  onMarkAsSmartField: log("Mark as smart field"),
  onClauses: log("Clauses"),
  onSuggestEdits: log("Suggest edits"),
  onBackToEdit: log("Back to edit"),
};

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

export const Default: Story = (args) => <EditorToolbar {...args} />;
Default.args = {
  size: "xs",
  status: "editing",
};

/* ------------------------------------------------------------------ */
/*  Story: Interactive (resizable)                                     */
/* ------------------------------------------------------------------ */

/** Draggable resize handle for the interactive demo */
const ResizableToolbar: React.FC<{
  initialWidth?: number;
  minWidth?: number;
  size?: "xs" | "s";
  status?: "editing" | "reviewing";
}> = ({
  initialWidth = 800,
  minWidth = 200,
  size = "xs",
  status = "editing",
}) => {
  const [width, setWidth] = useState(initialWidth);
  const dragging = useRef(false);
  const startX = useRef(0);
  const startW = useRef(0);

  const onMouseDown = useCallback(
    (e: React.MouseEvent) => {
      dragging.current = true;
      startX.current = e.clientX;
      startW.current = width;
      e.preventDefault();
    },
    [width]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      const nextW = Math.max(minWidth, startW.current + (e.clientX - startX.current));
      setWidth(nextW);
    };
    const onMouseUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [minWidth]);

  return (
    <div className="flex flex-col gap-2">
      <p className="text-xs text-subtle tabular-nums">
        Container width: {width}px — drag the right edge to resize
      </p>
      <div className="relative" style={{ width }}>
        <div className="border border-border rounded-lg overflow-hidden">
          <EditorToolbar
            size={size}
            status={status}
            {...allCallbacks}
          />
        </div>
        {/* Drag handle */}
        <div
          onMouseDown={onMouseDown}
          className="absolute top-0 -right-2 w-4 h-full cursor-col-resize flex items-center justify-center"
        >
          <div className="w-1 h-8 bg-border rounded-full" />
        </div>
      </div>
    </div>
  );
};

export const Interactive: Story = () => (
  <div className="flex flex-col gap-8">
    <div>
      <p className="text-sm text-subtle mb-4">
        Drag the right edge to resize. Tool groups progressively overflow into
        the &ldquo;...&rdquo; menu. Click any button to see console logs.
      </p>
      <ResizableToolbar initialWidth={800} size="xs" />
    </div>
    <div>
      <p className="text-sm text-subtle mb-2">Mobile (s) — resizable</p>
      <ResizableToolbar initialWidth={500} size="s" />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Story: AllVariants                                                 */
/* ------------------------------------------------------------------ */

export const AllVariants: Story = () => (
  <div className="flex flex-col gap-6">
    <div>
      <p className="text-sm text-subtle mb-2">
        Full width — Desktop (xs) — all tools visible
      </p>
      <EditorToolbar size="xs" status="editing" {...allCallbacks} />
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        ~560px — insert group overflows
      </p>
      <div style={{ width: 560 }}>
        <EditorToolbar size="xs" status="editing" {...allCallbacks} />
      </div>
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        ~400px — format + list + insert + extra overflow
      </p>
      <div style={{ width: 400 }}>
        <EditorToolbar size="xs" status="editing" {...allCallbacks} />
      </div>
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        ~240px — minimal: undo/redo + overflow
      </p>
      <div style={{ width: 240 }}>
        <EditorToolbar size="xs" status="editing" {...allCallbacks} />
      </div>
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        Mobile (s) — full width
      </p>
      <EditorToolbar size="s" status="editing" {...allCallbacks} />
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        Desktop (xs) — Undo/Redo disabled
      </p>
      <EditorToolbar
        size="xs"
        status="editing"
        undoDisabled
        redoDisabled
        {...allCallbacks}
      />
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        Desktop (xs) — Reviewing
      </p>
      <EditorToolbar size="xs" status="reviewing" {...allCallbacks} />
    </div>

    <div>
      <p className="text-sm text-subtle mb-2">
        Mobile (s) — Reviewing
      </p>
      <EditorToolbar size="s" status="reviewing" {...allCallbacks} />
    </div>
  </div>
);
