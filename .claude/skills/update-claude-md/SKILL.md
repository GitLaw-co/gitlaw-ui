---
name: update-claude-md
description: Review recent changes to the codebase and update CLAUDE.md accordingly. Checks for new/removed components, changed paths, new patterns, and keeps the file in sync.
disable-model-invocation: true
allowed-tools: Read, Grep, Glob, Edit, Bash
---

# Update CLAUDE.md

Review the current state of the codebase and ensure `CLAUDE.md` is accurate and up to date.

## Steps

### 1. Check Existing Components Table

Compare the "Existing Components" table in CLAUDE.md against actual component files:

1. List all `.tsx` files in `src/components/` (excluding `index.ts`)
2. Compare against the table in CLAUDE.md
3. Add rows for any new components (alphabetical order, one-line description)
4. Remove rows for any deleted components

### 2. Check Project Structure

Verify the directory tree in CLAUDE.md matches reality:

1. Check for any new directories under `src/`
2. Check for renamed or removed directories
3. Update the tree if needed — keep it minimal, don't list every file

### 3. Check for New Patterns

Look for new conventions that should be documented:

1. New hooks in `src/hooks/` — mention in relevant section
2. New templates in `src/templates/` — mention in relevant section
3. New spec files in `src/specs/` — mention in relevant section
4. New utility classes in `globals.css` — add to the existing utilities list

### 4. Verify Accuracy

Spot-check a few existing entries:

1. Verify color token examples still exist in `colors.tokens.js`
2. Verify spacing token names in `tailwind.config.js`
3. Verify the deployment URLs are still correct

### 5. Apply Changes

- Keep edits minimal — one-line table rows, not paragraphs
- Maintain existing formatting and style
- Do not add lengthy descriptions
- The table is a quick-reference index, not documentation

Report a summary of all changes made.
