#!/usr/bin/env node

/**
 * Update illustration SVGs to use CSS custom properties
 * This allows illustrations to use design system colors dynamically
 *
 * Run: node scripts/update-illustration-colors.js
 */

const fs = require('fs');
const path = require('path');

const illustrationsDir = path.join(__dirname, '../public/illustrations');

// Color mappings - only replace exact hex codes (not already-converted vars)
const colorMappings = [
  { hex: '#382C80', hexLower: '#382c80', varName: '--color-illustration-primary' },
  { hex: '#7F72FF', hexLower: '#7f72ff', varName: '--color-illustration-secondary' },
  { hex: '#FFFFFF', hexLower: '#ffffff', varName: '--color-illustration-base' },
];

let totalFiles = 0;
let updatedFiles = 0;

// Get all SVG files
const files = fs.readdirSync(illustrationsDir).filter(f => f.endsWith('.svg'));

files.forEach(filename => {
  const filepath = path.join(illustrationsDir, filename);
  let content = fs.readFileSync(filepath, 'utf-8');
  let originalContent = content;

  // Replace each color mapping
  colorMappings.forEach(({ hex, hexLower, varName }) => {
    const cssVar = `var(${varName}, ${hex})`;

    // Only replace hex codes that aren't already inside a var()
    // Use negative lookbehind to avoid replacing already-converted values
    const regexUpper = new RegExp(`(?<!var\\([^)]*)(${hex.replace('#', '\\#')})(?![^(]*\\))`, 'g');
    const regexLower = new RegExp(`(?<!var\\([^)]*)(${hexLower.replace('#', '\\#')})(?![^(]*\\))`, 'g');

    content = content.replace(regexUpper, cssVar);
    content = content.replace(regexLower, cssVar);
  });

  // Also replace fill="white" with CSS variable
  content = content.replace(/fill="white"/g, 'fill="var(--color-illustration-base, #FFFFFF)"');

  if (content !== originalContent) {
    fs.writeFileSync(filepath, content);
    updatedFiles++;
  }

  totalFiles++;
});

console.log(`Processed ${totalFiles} illustration files`);
console.log(`Updated ${updatedFiles} files`);
console.log('\nCSS variables:');
console.log('--color-illustration-primary: #382C80;    /* purple/900 - main strokes */');
console.log('--color-illustration-secondary: #7F72FF;  /* purple/500 - lighter accents */');
console.log('--color-illustration-base: #FFFFFF;       /* white - base fills */');
