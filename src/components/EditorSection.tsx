import React, { useState, useCallback, useRef, useEffect } from "react";
import { EditorHeader, EditorHeaderProps } from "./EditorHeader";
import { containerBreakpoints } from "../constants/breakpoints";

// Snap threshold matches @xs container query breakpoint
const SNAP_THRESHOLD = containerBreakpoints["@xs"];

export interface EditorSectionProps {
  /** Whether the section is open/visible */
  isOpen?: boolean;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Initial width of the section (default: 50% of viewport) */
  initialWidth?: number;
  /** Minimum width in pixels */
  minWidth?: number;
  /** Maximum width in pixels (or percentage of viewport) */
  maxWidth?: number;
  /** Callback when width changes during drag */
  onWidthChange?: (width: number) => void;
  /** EditorHeader props */
  headerProps?: Omit<EditorHeaderProps, "onClose">;
  /** Content to render (EditorPaper with toolbar inside) */
  children?: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
}

/**
 * EditorSection - Resizable document editing panel
 *
 * Contains EditorHeader, EditorToolbar, and content area (EditorPaper).
 * Positioned on the right side with a draggable left edge for resizing.
 * Can be closed via the X button in EditorHeader.
 */
export const EditorSection: React.FC<EditorSectionProps> = ({
  isOpen = true,
  onClose,
  initialWidth,
  minWidth = 400,
  maxWidth,
  onWidthChange,
  headerProps = {},
  children,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number | undefined>(initialWidth);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartXRef = useRef<number>(0);
  const dragStartWidthRef = useRef<number>(0);
  const currentWidthRef = useRef<number>(0);

  // Calculate actual max width (parent width - 4px to always show left edge)
  // Use the container's parent to get actual available width (works in iframes)
  const getMaxWidth = useCallback(() => {
    if (maxWidth) return maxWidth;
    if (containerRef.current?.parentElement) {
      return containerRef.current.parentElement.clientWidth - 4;
    }
    return 1200;
  }, [maxWidth]);

  // Handle drag start - capture starting position and width
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (containerRef.current) {
      const currentWidth = containerRef.current.getBoundingClientRect().width;
      dragStartXRef.current = e.clientX;
      dragStartWidthRef.current = currentWidth;
    }

    setIsDragging(true);
  }, []);

  // Handle drag move
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Prevent default to avoid text selection
      e.preventDefault();

      // Calculate delta from drag start position
      const deltaX = dragStartXRef.current - e.clientX;
      const newWidth = dragStartWidthRef.current + deltaX;

      // Clamp to min/max
      const clampedWidth = Math.max(
        minWidth,
        Math.min(newWidth, getMaxWidth()),
      );
      currentWidthRef.current = clampedWidth;
      setWidth(clampedWidth);
      onWidthChange?.(clampedWidth);
    };

    const handleMouseUp = (e: MouseEvent) => {
      e.preventDefault();

      // Snap to max width if current width is within 160px of max width
      const currentMaxWidth = getMaxWidth();
      const currentWidth = currentWidthRef.current;
      const distanceFromMax = currentMaxWidth - currentWidth;

      if (distanceFromMax < SNAP_THRESHOLD) {
        setWidth(currentMaxWidth);
        onWidthChange?.(currentMaxWidth);
      }

      setIsDragging(false);
    };

    // Use capture phase for more reliable event handling
    document.addEventListener("mousemove", handleMouseMove, { passive: false });
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, minWidth, getMaxWidth]);

  // Set cursor during drag
  useEffect(() => {
    if (isDragging) {
      document.body.style.cursor = "ew-resize";
      document.body.style.userSelect = "none";
    } else {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    }

    return () => {
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={`
        fixed top-0 right-0 h-full
        bg-white
        flex flex-col
        shadow-card
        ${className}
      `}
      style={{
        width: width ? `${width}px` : "50%",
      }}
    >
      {/* Drag handle on left edge */}
      <div
        onMouseDown={handleDragStart}
        className={`
          absolute left-0 top-0 bottom-0
          cursor-ew-resize
          hover:bg-primary/30
          transition-colors duration-fast ease-gitlaw
          z-10
          ${isDragging ? "w-1 bg-primary/40" : "w-px bg-border"}
        `}
      />

      {/* Header */}
      <EditorHeader {...headerProps} onClose={onClose} />

      {/* Content area (EditorPaper with toolbar) - scrollable */}
      <div className="flex-1 overflow-auto bg-white">{children}</div>
    </div>
  );
};

export default EditorSection;
