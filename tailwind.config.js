/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // GitLaw Brand Colors (from Figma Semantic Colors)
        primary: {
          DEFAULT: '#5E49D6',  // purple/700
          light: '#EBE7FF',    // purple/100
          hover: '#6F5EEC',    // purple/600 (primary-hover)
        },
        secondary: {
          DEFAULT: '#EBE7FF',  // purple/100
          hover: '#E2DDFF',    // purple/200 (secondary-hover)
        },
        destructive: {
          DEFAULT: '#E11D48',  // red/500
        },
        alert: {
          DEFAULT: '#F97316',  // orange/500
        },
        positive: {
          DEFAULT: '#15803D',  // green/700
        },
        // Card Colors
        card: {
          DEFAULT: '#FFFFFF',  // white (card background)
        },
        // Text Colors (from Figma Semantic Colors)
        // Using semantic names to avoid text-text-* redundancy
        foreground: '#1B1B1F',        // obsidian/950 (primary text) - use text-foreground
        subtle: '#989898',            // grey/50 (secondary text) - use text-subtle
        negative: '#F7F6FF',          // purple/50 - use text-negative
        'foreground-button': '#5E49D6',   // purple/700 - use text-foreground-button
        'foreground-button-negative': '#F7F6FF', // purple/50
        'foreground-button-disabled': '#CFC8F3', // purple/300
        'foreground-tag': '#5E49D6',      // purple/700 - use text-foreground-tag
        'foreground-ai-placeholder': '#CFC8F3', // purple/300
        // Icon Colors (from Figma Semantic Colors)
        icon: {
          primary: '#5E49D6',    // purple/700
          secondary: '#989898',  // grey/50
          disabled: '#CFC8F3',   // purple/300
          negative: '#F7F6FF',   // purple/50
          black: '#1B1B1F',      // obsidian/950
        },
        // Background Colors
        backgrounds: {
          'button-primary': '#5E49D6',   // purple/700
          'button-secondary': '#EBE7FF', // purple/100
          'tag-background': '#EBFAEE',   // grass/50
          'switch-inactive': '#FFFFFF',  // white
        },
        // Border Colors (from Figma Semantic Colors)
        border: {
          DEFAULT: '#E2DDFF',  // purple/200
        },
        // Input Colors
        input: {
          DEFAULT: '#DFFBE3',    // grass/65 (input background)
          bright: '#FFFFFF',     // white
          border: '#DCE3E8',     // bluish/100 (input-border) - NOT purple/200!
          disabled: '#F1F5F8',   // bluish/50 (input-disabled)
          yellow: '#FEF37D',     // document empty input background
        },
        // Switch Colors
        switch: {
          active: '#5E49D6',       // purple/700
          inactive: '#CFC8F3',     // purple/300
          'active-thumb': '#FFFFFF', // white
        },
        // Active States
        active: {
          border: '#5E49D6',  // purple/700
        },
        // Sidebar Colors
        sidebar: {
          background: '#F3F1FF',  // purple/65
          hover: '#EBE7FF',       // purple/100
          border: '#DCE3E8',      // bluish/100
        },
        // Page/Layout Colors
        page: {
          background: '#F7F6FF',  // purple/50
        },
        // Landing page background
        landing: {
          DEFAULT: '#6F5EEC',  // purple/600
        },
        // Link text color
        link: '#5E49D6',  // purple/700
        // Muted Color
        muted: {
          DEFAULT: '#F0F0F5',     // obsidian/50
        },
        // Bluish Colors (for inputs/sidebars)
        bluish: {
          50: '#F1F5F8',
          100: '#DCE3E8',
        },
        // Grass Colors (for tags, inputs)
        grass: {
          50: '#EBFAEE',
          65: '#DFFBE3',
          80: '#D9F8DD',
          100: '#CFF5D4',
          150: '#C3F1CA',
        },
        // Additional Figma Primitives (commonly used)
        purple: {
          50: '#F7F6FF',
          65: '#F3F1FF',
          100: '#EBE7FF',
          200: '#E2DDFF',
          300: '#CFC8F3',
          400: '#B6AEE9',
          450: '#978AE6',
          500: '#7F72FF',
          600: '#6F5EEC',
          700: '#5E49D6',
          800: '#4D33BC',
          900: '#382C80',
          950: '#261D56',
        },
        obsidian: {
          50: '#F0F0F5',
          100: '#C0C0D1',
          200: '#A3A3B3',
          300: '#81818F',
          400: '#6E6E7B',
          500: '#5C5C67',
          600: '#4A4A53',
          700: '#38383F',
          800: '#2D2D33',
          900: '#242428',
          950: '#1B1B1F',
        },
        grey: {
          20: '#C4C4C4',
          40: '#ABABAB',
          50: '#989898',
          60: '#6B6B6B',
          80: '#3D3D3D',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['DM Serif Text', 'serif'],
        document: ['Merriweather', 'serif'], // Document/editor font
      },
      fontSize: {
        xxs: ['10px', { lineHeight: '1.4' }],
        xs: ['12px', { lineHeight: '1.4' }],
        sm: ['14px', { lineHeight: '1.4' }],
        base: ['16px', { lineHeight: '1.4' }],
        lg: ['18px', { lineHeight: '1.4' }],
        xl: ['20px', { lineHeight: '1.4' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
      },
      spacing: {
        'gitlaw-xxs': '1px',
        'gitlaw-xs': '2px',
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-l': '12px',
        'gitlaw-xl': '16px',
        'gitlaw-2xl': '24px',
        'gitlaw-3xl': '32px',
        'gitlaw-4xl': '48px',
      },
      borderRadius: {
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-full': '1000px',
      },
      boxShadow: {
        card: '0px 10px 40px 0px rgba(0, 0, 0, 0.05)',
      },
      ringColor: {
        primary: '#5E49D6',
      },
      screens: {
        'xs': '448px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1792px',
        '4xl': '2048px',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
