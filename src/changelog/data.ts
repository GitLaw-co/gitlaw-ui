// Auto-generated changelog from git commits
// Generated: 2026-02-02T12:39:59.371Z
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
    "date": "2026-02-02",
    "commits": [
      {
        "hash": "new",
        "message": "Add Dropdown component with adaptive width (220-360px)"
      },
      {
        "hash": "new",
        "message": "Add EditorHeader component with title, close, and share actions"
      },
      {
        "hash": "new",
        "message": "Add EditorToolbar component with formatting tools"
      },
      {
        "hash": "new",
        "message": "Add MenuItem R element options (label, icons, button, badge, switch, avatar, tags)"
      },
      {
        "hash": "new",
        "message": "Add Button leftIconName/rightIconName props for automatic icon sizing"
      },
      {
        "hash": "new",
        "message": "Refactor text colors to semantic names (text-foreground, text-subtle)"
      },
      {
        "hash": "new",
        "message": "Fix Switch visibility when unchecked (bg-secondary instead of white)"
      },
      {
        "hash": "new",
        "message": "Update Dialog width to 400px and fix header padding"
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
      },
      {
        "hash": "aa8a720",
        "message": "Add centralized component specs for Figma design tokens"
      },
      {
        "hash": "650740b",
        "message": "Revert Dialog icons to correct 16px size for size=m buttons"
      },
      {
        "hash": "84c7486",
        "message": "Fix Dialog button icons to match Figma specs (24px)"
      },
      {
        "hash": "cce4398",
        "message": "Fix button icon sizes in Dialog and Card.stories"
      },
      {
        "hash": "35c9d03",
        "message": "Fix icon sizes in buttons to match Figma specs"
      },
      {
        "hash": "94be51e",
        "message": "Fix Button sizes to match Figma specs"
      },
      {
        "hash": "fac8718",
        "message": "Update intro: Not intended for production use (yet!)"
      }
    ]
  },
  {
    "date": "2026-01-31",
    "commits": [
      {
        "hash": "a21510a",
        "message": "Update README and Introduction docs"
      },
      {
        "hash": "96274c1",
        "message": "Rename project to gitlaw-ui"
      }
    ]
  },
  {
    "date": "2026-01-30",
    "commits": [
      {
        "hash": "aef3894",
        "message": "Add Foundations section with Icons and Illustrations galleries"
      },
      {
        "hash": "c764775",
        "message": "Add Vercel deployment configuration"
      },
      {
        "hash": "b9bd21f",
        "message": "Update action header with Button components and icons"
      },
      {
        "hash": "5bcb6e0",
        "message": "Add new components and update Card with selection/rubber band"
      },
      {
        "hash": "febe67d",
        "message": "Fix folder card padding for responsive breakpoint"
      },
      {
        "hash": "f4a4896",
        "message": "Add Card component with file, template, and folder variants"
      }
    ]
  },
  {
    "date": "2026-01-29",
    "commits": [
      {
        "hash": "8783728",
        "message": "Add Tooltip component and integrate with Sidebar"
      },
      {
        "hash": "588785c",
        "message": "Fix Sidebar layout and styling"
      },
      {
        "hash": "6987319",
        "message": "Initial commit: GitLaw UI Storybook"
      },
      {
        "hash": "fcf5a8b",
        "message": "Update color tokens to match Figma design system"
      }
    ]
  },
  {
    "date": "2026-01-28",
    "commits": [
      {
        "hash": "107654d",
        "message": "Update Introduction with ListItem, Select, and TextField components"
      },
      {
        "hash": "a45a50e",
        "message": "Revert sidebar components for redesign"
      },
      {
        "hash": "a196e30",
        "message": "Add Sidebar components with expanded/collapsed states and variants"
      },
      {
        "hash": "230a1ba",
        "message": "Replace TextCursor icon with CircleDashed"
      },
      {
        "hash": "52193e9",
        "message": "Fix icon stroke weight to 1px to match design system"
      },
      {
        "hash": "fb28476",
        "message": "Add ListItem, Select, and TextField components from Figma"
      }
    ]
  },
  {
    "date": "2026-01-26",
    "commits": [
      {
        "hash": "1eb8839",
        "message": "Initial commit: GitLaw UI Storybook"
      }
    ]
  }
];

export const lastUpdated = "2026-02-02";
