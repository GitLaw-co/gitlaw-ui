import {
  purple,
  obsidian,
  grey,
  grass,
  bluish,
  semantic,
} from './src/specs/colors.tokens.js';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // GitLaw Brand Colors (from colors.tokens.js — single source of truth)
        primary: {
          DEFAULT: semantic.primary,
          light: semantic.primaryLight,
          hover: semantic.primaryHover,
          dark: purple[800],
        },
        secondary: {
          DEFAULT: semantic.secondary,
          hover: semantic.secondaryHover,
          dark: purple[200],
        },
        destructive: {
          DEFAULT: semantic.destructive,
        },
        alert: {
          DEFAULT: semantic.alert,
        },
        positive: {
          DEFAULT: semantic.positive,
        },
        // Card Colors
        card: {
          DEFAULT: semantic.card,
        },
        // Text Colors (semantic names to avoid text-text-* redundancy)
        foreground: semantic.textPrimary,
        subtle: semantic.textSecondary,
        negative: semantic.textNegative,
        'foreground-button': semantic.textButton,
        'foreground-button-negative': semantic.textButtonNegative,
        'foreground-button-disabled': semantic.textButtonDisabled,
        'foreground-tag': semantic.textButton,
        'foreground-ai-placeholder': semantic.textButtonDisabled,
        // Icon Colors
        icon: {
          primary: semantic.iconPrimary,
          secondary: semantic.iconSecondary,
          disabled: semantic.iconDisabled,
          negative: semantic.iconNegative,
          black: semantic.iconBlack,
        },
        // Background Colors
        backgrounds: {
          'button-primary': semantic.primary,
          'button-secondary': semantic.secondary,
          'tag-background': semantic.tagBackground,
          'switch-inactive': semantic.white,
        },
        // Border Colors
        border: {
          DEFAULT: semantic.border,
        },
        // Input Colors
        input: {
          DEFAULT: grass[65],
          bright: semantic.white,
          border: semantic.inputBorder,
          disabled: semantic.inputDisabled,
          yellow: semantic.inputYellow,
        },
        // Switch Colors
        switch: {
          active: semantic.switchActive,
          inactive: semantic.switchInactive,
          'active-thumb': semantic.white,
        },
        // Star Colors
        star: {
          inactive: semantic.starInactive,
          active: semantic.starActive,
        },
        // Active States
        active: {
          border: semantic.primary,
        },
        // Sidebar Colors
        sidebar: {
          background: semantic.sidebarBackground,
          hover: semantic.sidebarHover,
          border: semantic.sidebarBorder,
        },
        // Page/Layout Colors
        page: {
          background: semantic.pageBackground,
        },
        // Landing page background
        landing: {
          DEFAULT: semantic.landing,
        },
        // Link text color
        link: semantic.link,
        // Muted Color
        muted: {
          DEFAULT: semantic.muted,
        },
        // Primitive palettes (for one-off usage)
        bluish,
        grass,
        purple,
        obsidian,
        grey,
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
        primary: semantic.primary,
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
      // Animation system - standardized from Sidebar specs
      transitionTimingFunction: {
        'gitlaw': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      transitionDuration: {
        'fast': '100ms',   // opacity, color changes
        'normal': '150ms', // layout shifts, width changes
        'slow': '200ms',   // content fades, placeholder rotations
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
};
