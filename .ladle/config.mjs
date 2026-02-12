/** @type {import('@ladle/react').UserConfig} */
export default {
  stories: "src/**/*.stories.{js,jsx,ts,tsx}",
  port: 6006,
  outDir: "build",
  addons: {
    control: { enabled: true },
    width: {
      enabled: true,
      options: {
        xsmall: 414,
        small: 640,
        medium: 768,
        large: 1024,
        xlarge: 1280,
      },
    },
    a11y: { enabled: true },
  },
  storyOrder: (stories) => {
    const categoryPriority = [
      "introduction",
      "foundations",
      "layout",
      "components",
      "chat",
      "editor",
      "pages",
      "changelog",
    ];

    return stories.sort((a, b) => {
      const aCategory = a.split("--")[0].split("-")[0].toLowerCase();
      const bCategory = b.split("--")[0].split("-")[0].toLowerCase();
      const aIndex = categoryPriority.findIndex((c) => aCategory.includes(c));
      const bIndex = categoryPriority.findIndex((c) => bCategory.includes(c));
      const aPriority = aIndex === -1 ? 999 : aIndex;
      const bPriority = bIndex === -1 ? 999 : bIndex;
      if (aPriority !== bPriority) return aPriority - bPriority;
      return a.localeCompare(b);
    });
  },
};
