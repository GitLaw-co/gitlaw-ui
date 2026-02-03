/**
 * Container query breakpoints (from @tailwindcss/container-queries)
 * These match the default values from the plugin
 * @see https://github.com/tailwindlabs/tailwindcss-container-queries
 */
export const containerBreakpoints = {
  "@xs": 320, // 20rem
  "@sm": 384, // 24rem
  "@md": 448, // 28rem
  "@lg": 512, // 32rem
  "@xl": 576, // 36rem
  "@2xl": 672, // 42rem
  "@3xl": 768, // 48rem
  "@4xl": 896, // 56rem
  "@5xl": 1024, // 64rem
  "@6xl": 1152, // 72rem
  "@7xl": 1280, // 80rem
} as const;

/**
 * Viewport breakpoints (custom GitLaw breakpoints)
 * These are defined in tailwind.config.js
 */
export const viewportBreakpoints = {
  xs: 448,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
  "3xl": 1792,
  "4xl": 2048,
} as const;
