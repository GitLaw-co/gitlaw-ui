import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "light",
      values: [
        {
          name: "light",
          value: "#f7f6ff",
        },
        {
          name: "dark",
          value: "#1b1b1f",
        },
        {
          name: "white",
          value: "#ffffff",
        },
      ],
    },
    options: {
      storySort: {
        order: [
          "Introduction",
          "Foundations",
          ["Colors", "Typography", "Spacing", "Icons", "Illustrations"],
          "Layout",
          ["PageShell", "Stack", "Section"],
          "Components",
          [
            "Actions",
            ["Button", "MenuItem"],
            "Form",
            ["Input", "TextField", "Select", "Checkbox", "Radio", "Switch"],
            "Data Display",
            ["Avatar", "Badge", "Card", "StarIcon", "TableListItem", "Tag"],
            "Navigation",
            ["Sidebar", "TopHeader", "PageNav", "ListHeader", "Tab"],
            "Overlays",
            ["Dialog", "Dropdown", "Popover", "Tooltip"],
            "Feedback",
            ["Toast", "StickyFeaturePromoBar"],
          ],
          "Chat",
          ["ChatInput", "ChatThread"],
          "Editor",
          ["EditorHeader", "EditorToolbar", "EditorPaper", "EditorSection"],
          "Pages",
          ["Chat Page", "Settings", "File List", "Patterns"],
          "Changelog",
        ],
      },
    },
  },
};

export default preview;
