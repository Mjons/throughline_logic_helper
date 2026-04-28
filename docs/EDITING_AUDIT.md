# Editing UX Audit

Full audit of text editing issues in BeatOptionNode and BeatClusterNode. The user reports: copy/paste broken, spacebar doesn't work, canvas drag interferes with text selection, visual clipping.

---

## Issues Found

### 1. Spacebar triggers canvas pan instead of typing a space (CRITICAL)

**File:** `src/App.tsx` ~line 1066 (ReactFlow config)

ReactFlow captures spacebar by default for canvas panning. There's no `spaceKey={null}` prop to disable it. When a textarea is focused, pressing spacebar pans the canvas instead of inserting a space character.

**Fix:** Add `spaceKey={null}` to the `<ReactFlow>` component.

---

### 2. Mouse wheel zoom intercepts textarea scrolling (HIGH)

**File:** `src/App.tsx` ~line 1078

`zoomOnScroll` is enabled. When editing a textarea that has more content than fits (especially with `resize: vertical`), scrolling inside the textarea triggers canvas zoom instead. The textareas don't have `onWheel` stopPropagation.

**Fix:** Either disable `zoomOnScroll` or add `noWheelClassName="nopan"` to ReactFlow and `className="nopan"` to editing textareas.

---

### 3. Keyboard events bubble to canvas (HIGH)

**Files:** `src/components/BeatOptionNode.tsx` lines 90-95, `src/components/BeatClusterNode.tsx` lines 92-97

The `onFieldKey` handler only handles Escape. It does NOT call `stopPropagation()` on other keys. This means every keypress inside a textarea also fires at the canvas level, potentially triggering ReactFlow shortcuts (arrow keys for node movement, Backspace/Delete for node deletion — though `deleteKeyCode={null}` mitigates the latter).

**Fix:** Call `e.stopPropagation()` for all keys in `onFieldKey`, not just Escape. Also add `onKeyUp` stopPropagation.

---

### 4. Copy/paste events bubble to canvas (MEDIUM)

**Files:** `src/components/BeatOptionNode.tsx`, `src/components/BeatClusterNode.tsx`

No `onCopy`, `onCut`, or `onPaste` handlers on textareas. These events bubble to parent/canvas listeners. ReactFlow or browser-level handlers may intercept clipboard operations, causing "weird" paste behavior (pasting canvas data instead of clipboard text, or clipboard operations being suppressed).

**Fix:** Add `onCopy`, `onCut`, `onPaste` handlers that call `e.stopPropagation()`.

---

### 5. `selectionOnDrag` captures text selection drags (MEDIUM)

**File:** `src/App.tsx` ~line 1079

`selectionOnDrag` is enabled on the ReactFlow canvas. When trying to click-drag inside a textarea to select text, the canvas drag-selection can interfere. The textareas have `onMouseDown={stop}` which partially mitigates this, but edge cases remain — especially near the edges of the textarea where mousedown might register on the node container first.

**Fix:** Consider `selectionOnDrag={false}` or make it conditional.

---

### 6. Cluster `overflow: hidden` clips expanded textareas (HIGH)

**File:** `src/App.css` line ~226

```css
.beat-cluster {
  overflow: hidden;
}
```

Option nodes have `extent: "parent"` constraining them to the cluster bounds. When editing, the textarea may expand beyond the card height (especially with `resize: vertical`). The card's `overflow: visible` (set on `.beat-option.editing`) tries to fix this, but the parent cluster's `overflow: hidden` clips it anyway.

**Fix:** Add `.beat-cluster.editing { overflow: visible; }` — though this only helps when the cluster itself is being edited. For option editing, the cluster isn't in editing state, so we need a different approach: either remove `extent: "parent"` or set `overflow: visible` on all clusters unconditionally (the border-radius handles visual clipping anyway).

---

### 7. Cluster editing has no z-index (LOW)

**File:** `src/App.css`

`.beat-option.editing` has `z-index: 20`, but `.beat-cluster.editing` has no explicit z-index. When editing cluster fields (name, subtitle, prompt), the expanded textareas may render behind neighboring clusters or option cards.

**Fix:** Add `z-index: 20` to `.beat-cluster.editing`.

---

## Fix Priority

| #   | Issue                                      | Impact                             | Effort        |
| --- | ------------------------------------------ | ---------------------------------- | ------------- |
| 1   | `spaceKey={null}`                          | Spacebar doesn't work at all       | 1 line        |
| 3   | `stopPropagation()` on all keyboard events | Keys trigger canvas shortcuts      | ~10 lines     |
| 4   | Clipboard event handlers                   | Copy/paste broken                  | ~6 lines      |
| 6   | Cluster overflow clipping                  | Expanded textareas invisible       | 1 CSS rule    |
| 2   | Scroll/zoom conflict                       | Can't scroll in expanded textareas | 2 lines       |
| 7   | Cluster editing z-index                    | Visual layering                    | 1 CSS rule    |
| 5   | `selectionOnDrag`                          | Text selection edge cases          | 1 prop change |

All fixes together are ~25 lines of changes.
