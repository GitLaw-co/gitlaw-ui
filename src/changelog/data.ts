// Auto-generated changelog from git commits
// Generated: 2026-02-09T17:20:29.469Z
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
    "date": "2026-02-09",
    "commits": [
      {
        "hash": "a6fc7e1",
        "message": "Fix icon paths for GitHub Pages using STORYBOOK_BASE env var"
      },
      {
        "hash": "b456461",
        "message": "Fix icon paths for GitHub Pages subdirectory deploy"
      },
      {
        "hash": "d5bb368",
        "message": "Add ESC key support to exit edit mode in FileList"
      },
      {
        "hash": "6430ae9",
        "message": "Simplify edit mode: inline-only layout, 50/50 column fix, selection count in header"
      },
      {
        "hash": "1f469a8",
        "message": "Update inline edit mode: replace Done with X button and selection count"
      },
      {
        "hash": "d47711f",
        "message": "Tidy up: update docs, component count, mobile touch fixes"
      },
      {
        "hash": "bd6bb3b",
        "message": "Add interactive file list page with view switching, selection, and responsive cards"
      },
      {
        "hash": "de3140a",
        "message": "Regenerate changelog with latest commit"
      },
      {
        "hash": "7add01c",
        "message": "Add mobile responsive PageShell, nav dropdown, and MenuItem Button reuse"
      }
    ]
  },
  {
    "date": "2026-02-08",
    "commits": [
      {
        "hash": "0cd7fbe",
        "message": "Add Escape and Return icon SVGs"
      },
      {
        "hash": "13f1692",
        "message": "Add number icon SVGs (0-9)"
      },
      {
        "hash": "9d22ea6",
        "message": "Add responsive file list, ListHeader component, and clean up page stories"
      },
      {
        "hash": "ced7baa",
        "message": "Add File List page prototype with list and card grid views"
      },
      {
        "hash": "1951ae3",
        "message": "Update auto-generated changelog data"
      },
      {
        "hash": "03b61b4",
        "message": "Restructure Storybook tree: group components, promote Chat/Editor, add Pages"
      },
      {
        "hash": "6fef7be",
        "message": "Add layout primitives: PageShell, Stack, Section"
      },
      {
        "hash": "e9b373e",
        "message": "Add COMPONENTS.md API cheat sheet for prompt-based prototyping"
      }
    ]
  },
  {
    "date": "2026-02-06",
    "commits": [
      {
        "hash": "bc8dfce",
        "message": "Add StarIcon story for discoverability in Storybook"
      },
      {
        "hash": "1254b4c",
        "message": "Tidy up: update docs to 34 components, fix hardcoded hex colors"
      },
      {
        "hash": "0d3c614",
        "message": "Add Checkbox, Radio, TableListItem, StarIcon components; clean up all stories"
      }
    ]
  },
  {
    "date": "2026-02-05",
    "commits": [
      {
        "hash": "7d578ca",
        "message": "Fix Storybook sidebar sort: add missing components to storySort"
      },
      {
        "hash": "9e6ca3a",
        "message": "Refine PageNav: dropdown padding, sort logic, text size, demo data"
      },
      {
        "hash": "fe0e44a",
        "message": "Add PageNav component with context switcher and animated dropdown"
      },
      {
        "hash": "b22af76",
        "message": "Remove Review stories folder, update changelog"
      },
      {
        "hash": "1edcd31",
        "message": "Add white tooltip variant story for review with Kirill"
      },
      {
        "hash": "74bed0f",
        "message": "Fix Storybook build: rename changelog script to .cjs for ESM compat"
      },
      {
        "hash": "d38b7bc",
        "message": "Standardize animations across all components with Tailwind tokens"
      }
    ]
  },
  {
    "date": "2026-02-04",
    "commits": [
      {
        "hash": "3a5bf48",
        "message": "Set up npm publishing for @gitlaw/ui design system"
      },
      {
        "hash": "8c3ae8f",
        "message": "Add StickyFeaturePromoBar component"
      },
      {
        "hash": "29f81f5",
        "message": "Add ChatPageTemplate with jurisdiction dropdown and Input improvements"
      },
      {
        "hash": "17d9dba",
        "message": "Fix sidebar icon alignment when collapsed"
      },
      {
        "hash": "23c84a1",
        "message": "Improve sidebar animation with snappier transitions"
      },
      {
        "hash": "1f65337",
        "message": "Add Popover component and refactor Tooltip to use it"
      },
      {
        "hash": "b823386",
        "message": "Add settings dropdown to ChatInput with position options"
      },
      {
        "hash": "023f0fd",
        "message": "Update ChatInput settings tooltip to \"Jurisdiction and settings\""
      }
    ]
  },
  {
    "date": "2026-02-03",
    "commits": [
      {
        "hash": "fc2a3a7",
        "message": "Add Prototypes section with DocumentMenuItem, fix Sidebar icons, add MenuItem width prop"
      },
      {
        "hash": "16c075b",
        "message": "Fix TypeScript errors across components and stories"
      },
      {
        "hash": "00cf96c",
        "message": "Update Introduction docs and fix ChatThread story"
      },
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
      }
    ]
  }
];

export const lastUpdated = "2026-02-09";
