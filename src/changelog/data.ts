// Auto-generated changelog from git commits
// Generated: 2026-02-11T15:55:36.127Z
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
    "date": "2026-02-11",
    "commits": [
      {
        "hash": "7ffb723",
        "message": "Fix author name and trim redundant credits"
      },
      {
        "hash": "79d85c5",
        "message": "Credit Dario Codi Pietro as designer in Introduction and README"
      },
      {
        "hash": "5733cce",
        "message": "Trim Tidy Up intro in CLAUDE.md"
      },
      {
        "hash": "060c48e",
        "message": "Refine CLAUDE.md self-maintenance: keep table, stay concise"
      },
      {
        "hash": "1012bdf",
        "message": "Add Divider component and self-maintenance rule to CLAUDE.md"
      },
      {
        "hash": "1342498",
        "message": "Rename Assets to assets, connectors to services, add Google icon"
      },
      {
        "hash": "2946e7a",
        "message": "Rewrite CLAUDE.md: leaner structure, all references preserved (#7)"
      },
      {
        "hash": "fae352d",
        "message": "Consolidate design tokens into single source of truth (#6)"
      },
      {
        "hash": "2c498a8",
        "message": "Add forwardRef and native element props to form controls (#5)"
      },
      {
        "hash": "731de37",
        "message": "Fix code audit findings: a11y, Tailwind purge, side effects, docs (#4)"
      }
    ]
  },
  {
    "date": "2026-02-10",
    "commits": [
      {
        "hash": "cbbae37",
        "message": "Redesign tidy-up routine with concrete commands and checks"
      },
      {
        "hash": "1a5f5ed",
        "message": "Tidy up: extract transition utilities, consolidate stories, update docs"
      },
      {
        "hash": "ed89c8b",
        "message": "Responsive EditorToolbar with overflow menu (#3)"
      }
    ]
  },
  {
    "date": "2026-02-09",
    "commits": [
      {
        "hash": "bf5e11b",
        "message": "Add Billing page prototype with SettingsTableRow component"
      },
      {
        "hash": "6afc6c2",
        "message": "Compact card partial content + always-visible star + clean up stories"
      },
      {
        "hash": "3adf803",
        "message": "Add sort dropdown to grid view with delayed close"
      },
      {
        "hash": "c29e5bf",
        "message": "Remove sort label from table header"
      },
      {
        "hash": "7be8a19",
        "message": "Revert \"Add Select all / Deselect all label to table header edit mode\""
      },
      {
        "hash": "6f35256",
        "message": "Add Select all / Deselect all label to table header edit mode"
      },
      {
        "hash": "3c9607e",
        "message": "Move sort indicator from ListHeader to table header row"
      },
      {
        "hash": "6b46390",
        "message": "Remove top margin between ListHeader and table header"
      },
      {
        "hash": "572aa8d",
        "message": "Always show table header in list/grid views, fix header spacing"
      },
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
        "hash": "61be7b1",
        "message": "Fix TS2307 SVG import errors: move assets into src/"
      },
      {
        "hash": "e9d8128",
        "message": "Storybook cleanup: add autodocs tags and consolidate stories"
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
      }
    ]
  }
];

export const lastUpdated = "2026-02-11";
