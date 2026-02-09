/// <reference types="vite/client" />

// SVG imports as URL strings
declare module "*.svg" {
  const content: string;
  export default content;
}

