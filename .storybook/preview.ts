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
          [
            "Colors",
            "Typography",
            "Icons",
            "Illustrations",
            "Spacing",
            "Breakpoints",
          ],
          "Layout",
          ["PageShell", "Stack", "Section"],
          "Components",
          [
            "Avatar",
            "Badge",
            "Button",
            "Card",
            "Checkbox",
            "Chat",
            ["ChatInput", "ChatThread"],
            "Dialog",
            "Dropdown",
            "Editor",
            ["EditorHeader", "EditorPaper", "EditorSection", "EditorToolbar"],
            "Input",
            "MenuItem",
            "PageNav",
            "Popover",
            "Radio",
            "Select",
            "Sidebar",
            "StarIcon",
            "StickyFeaturePromoBar",
            "Switch",
            "Tab",
            "TableListItem",
            "Tag",
            "TextField",
            "Toast",
            "Tooltip",
            "TopHeader",
          ],
          "Prototypes",
          ["DocumentMenuItem", "JurisdictionDropdown"],
          "Changelog",
        ],
      },
    },
  },
};

export default preview;
