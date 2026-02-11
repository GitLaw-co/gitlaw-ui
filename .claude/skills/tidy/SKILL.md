---
name: tidy
description: Run the full tidy-up checklist — exports, story categories, story count, hex colors, repeated patterns, build, and commit. Use after finishing a task to ensure codebase consistency.
disable-model-invocation: false
allowed-tools: Read, Grep, Glob, Bash, Edit
---

# Tidy Up

Run through all 7 tidy-up checks in order. Report findings for each step before moving on. Fix any issues found automatically where possible, or report them if manual intervention is needed.

## Step 1: Exports

Check that every component file in `src/components/` has matching exports in `src/components/index.ts`.

1. Count component `.tsx` files: `ls src/components/*.tsx | wc -l`
2. Count `export {` lines: `grep -c "^export {" src/components/index.ts`
3. For each component file, verify both a value export (`export { Foo }`) and a type export (`export type { FooProps }`) exist in `index.ts`
4. Check the component count in `src/stories/Introduction.mdx` matches reality
5. Fix any missing exports

## Step 2: Story Categories

Check every story file has a proper `title: "Components/<Category>/Name"` format.

Valid categories: Actions, Form, Data Display, Navigation, Overlays, Feedback.
Other valid prefixes: Chat/, Editor/, Layout/, Pages/.

1. Run: `grep "title:" src/stories/*.stories.tsx`
2. Flag any stories missing a category or using an invalid one
3. Fix any issues

## Step 3: Story Count

No story file should have more than 4 exported stories.

1. For each story file, count `export const` statements
2. Flag any file with more than 4
3. Report findings (do not auto-fix — story reduction needs judgment)

## Step 4: Hex Colors

No hardcoded hex colors should appear in components or templates (except `Icon.tsx` colorFilters).

1. Run: `grep -rn '"#[0-9A-Fa-f]' src/components/ src/templates/`
2. Exclude `Icon.tsx` colorFilters from results
3. Replace any hardcoded hex values with the appropriate token from `specs/colors.tokens.js`

## Step 5: Repeated Patterns

Find Tailwind class combos that appear 3+ times and could be extracted to `globals.css`.

1. Search for repeated `transition-*` patterns: `grep -roh 'transition-[a-z]* duration-fast ease-gitlaw' src/components/ | sort | uniq -c`
2. Check for other repeated multi-class patterns
3. If a pattern appears 3+ times, extract to `@layer utilities` in `globals.css`, then bulk-replace across all files
4. Existing utilities to be aware of: `transition-interactive`, `transition-fade`, `shadow-card`

## Step 6: Build

Run the Storybook build to verify everything compiles.

1. Run: `npm run build-storybook`
2. Report any errors (chunk size warnings are OK)
3. All errors must be fixed before proceeding

## Step 7: Commit

Stage and commit the changes.

1. Stage only the specific files that were modified (not `git add -A`)
2. Write a descriptive commit message
3. Include `Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>`
4. Push if on a feature branch

After all steps, report a summary of what was found and fixed.
