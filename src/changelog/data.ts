// Auto-generated changelog from git commits
// Generated: 2026-02-03T14:05:08.552Z
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
      }
    ]
  }
];

export const lastUpdated = "2026-02-03";
