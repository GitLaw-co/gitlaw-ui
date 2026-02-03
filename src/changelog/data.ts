// Auto-generated changelog from git commits
// Generated: 2026-02-03T17:44:02.503Z
// Run: node scripts/generate-changelog.js

export interface ChangelogEntry {
  date: string;
  commits: {
    hash: string;
    message: string;
  }[];
}

export const changelog: ChangelogEntry[] = [
  {
    "date": "2026-02-03",
    "commits": [
      {
        "hash": "c47720b",
        "message": "Add ChatThread component with message components and reorganize Storybook"
      },
      {
        "hash": "980ddb9",
        "message": "Fix document context Input to be inline with w-auto, not full-width"
      },
      {
        "hash": "d97932b",
        "message": "Simplify Input - remove hug customizations, keep only background color for document context"
      },
      {
        "hash": "cb0ea0e",
        "message": "Fix Input hug - remove w-0 that was hiding text"
      },
      {
        "hash": "ee2b7dc",
        "message": "Fix Input hug using size attribute with w-0 min-w-0 for tighter fit"
      },
      {
        "hash": "d156705",
        "message": "Reduce Input hug right padding by removing +1ch buffer"
      },
      {
        "hash": "1ddef3d",
        "message": "Fix Input hug using ch units for proper character-based width"
      },
      {
        "hash": "b1f57d2",
        "message": "Make document context inputs use hug behavior by default"
      },
      {
        "hash": "bb17c45",
        "message": "Fix Input hug alignment using inline-flex for proper content hugging"
      },
      {
        "hash": "20830b8",
        "message": "Fix Input hug alignment to actually hug contents"
      },
      {
        "hash": "84ddabd",
        "message": "Fix text color swatches using inline style for color"
      },
      {
        "hash": "045a6ce",
        "message": "Fix text color swatches to show actual text samples"
      },
      {
        "hash": "37087b0",
        "message": "Fix typography font demo overflow in cards"
      },
      {
        "hash": "2581317",
        "message": "Update changelog with latest commits"
      },
      {
        "hash": "350a7cf",
        "message": "Various component updates and new EditorPaper/EditorSection components"
      },
      {
        "hash": "d890500",
        "message": "Add Node.js version constraints"
      },
      {
        "hash": "43ef064",
        "message": "Document MDX table support addon requirement in CLAUDE.md"
      },
      {
        "hash": "4adc218",
        "message": "Add setup section with npm install to CLAUDE.md"
      },
      {
        "hash": "1271446",
        "message": "Clarify Figma MCP 403 error handling in CLAUDE.md"
      },
      {
        "hash": "96ff739",
        "message": "Add Figma MCP 403 auth timeout note to CLAUDE.md"
      },
      {
        "hash": "bbce3bb",
        "message": "Add animated rotating placeholders to ChatInput"
      },
      {
        "hash": "1d15c98",
        "message": "Remove custom icons, fix Card selection ring, add ChatInput tooltips"
      },
      {
        "hash": "94ef3f6",
        "message": "Disable Vercel deployments for gh-pages branch"
      }
    ]
  },
  {
    "date": "2026-02-02",
    "commits": [
      {
        "hash": "d77c6ea",
        "message": "Enable MDX tables with @storybook/addon-mdx-gfm"
      },
      {
        "hash": "4f64d11",
        "message": "Update Introduction.mdx with complete design tokens"
      },
      {
        "hash": "f5ad1c3",
        "message": "Add shadow-card CSS utility and apply to all card-like components"
      },
      {
        "hash": "13d297f",
        "message": "Add tidy up routine to CLAUDE.md"
      },
      {
        "hash": "028c307",
        "message": "Tidy up: add shadow-card utility and export Dropdown"
      },
      {
        "hash": "9bf4aea",
        "message": "Fix text-muted color conflict - rename to text-subtle"
      },
      {
        "hash": "1f3bca9",
        "message": "Add new components and refactor text colors"
      },
      {
        "hash": "ca340ac",
        "message": "Add component inventory and API patterns to CLAUDE.md"
      },
      {
        "hash": "4d15a60",
        "message": "Update CLAUDE.md with Vercel auto-deploy info"
      },
      {
        "hash": "05746eb",
        "message": "Add CLAUDE.md with project-specific instructions for Claude Code"
      },
      {
        "hash": "b5fae93",
        "message": "Simplify Claude Code setup instructions"
      },
      {
        "hash": "9761311",
        "message": "Add Claude Code and Figma MCP setup instructions"
      },
      {
        "hash": "188578b",
        "message": "Add Vercel configuration for Storybook build"
      },
      {
        "hash": "efe75ed",
        "message": "Fix disabled button icon color"
      },
      {
        "hash": "63074fd",
        "message": "Replace hardcoded hex colors with design system constants"
      },
      {
        "hash": "d2a6944",
        "message": "Update illustrations to use CSS custom properties"
      },
      {
        "hash": "4bdd660",
        "message": "Add signature icon to icon set"
      },
      {
        "hash": "c8e358b",
        "message": "Clean up sidebar sort configuration"
      },
      {
        "hash": "26388a6",
        "message": "Fix sidebar sort order - move Changelog to bottom"
      },
      {
        "hash": "717a81d",
        "message": "Move Changelog to bottom of sidebar"
      },
      {
        "hash": "3500fdb",
        "message": "Update changelog data"
      },
      {
        "hash": "ac3edbf",
        "message": "Add auto-generated changelog from Git commits"
      },
      {
        "hash": "bc07a3f",
        "message": "Fix spacing tokens and color consistency"
      },
      {
        "hash": "2643443",
        "message": "Refactor: Use centralized color tokens across all components"
      },
      {
        "hash": "4ab8a4f",
        "message": "Restructure Storybook: separate Foundations from Components"
      },
      {
        "hash": "51776ce",
        "message": "Reorganize Storybook navigation to match README categories"
      }
    ]
  }
];

export const lastUpdated = "2026-02-03";
