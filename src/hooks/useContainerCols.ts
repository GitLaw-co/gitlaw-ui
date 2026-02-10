import { useState, useEffect, useRef, type RefObject } from "react";
import type { TableListItemCols } from "../components/TableListItem";
import { containerBreakpoints } from "../constants/breakpoints";

/**
 * useContainerCols — Returns the appropriate `cols` value for TableListItem
 * based on the observed width of a container element.
 *
 * Uses ResizeObserver to track the container width and maps it to the
 * TableListItemCols type (0 | 2 | 4 | 6).
 *
 * Breakpoints (from containerBreakpoints):
 * - < @2xl (672px) → 0 (name only, no header row)
 * - @2xl–@4xl (672–896px) → 2 (Name + Updated)
 * - @4xl–@5xl (896–1024px) → 4 (Name + Type + Last viewed + Updated)
 * - ≥ @5xl (1024px) → 6 (all columns)
 */
export function useContainerCols(
  ref?: RefObject<HTMLElement | null>
): { cols: TableListItemCols; containerRef: RefObject<HTMLDivElement | null> } {
  const internalRef = useRef<HTMLDivElement>(null);
  const targetRef = ref || internalRef;
  const [cols, setCols] = useState<TableListItemCols>(6);

  useEffect(() => {
    const el = targetRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      const width = entries[0]?.contentRect.width ?? 0;
      let next: TableListItemCols;
      if (width < containerBreakpoints["@2xl"]) next = 0;
      else if (width < containerBreakpoints["@4xl"]) next = 2;
      else if (width < containerBreakpoints["@5xl"]) next = 4;
      else next = 6;
      setCols(next);
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [targetRef]);

  return { cols, containerRef: internalRef };
}

export default useContainerCols;
