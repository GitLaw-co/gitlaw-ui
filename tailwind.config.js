/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // GitLaw Brand Colors
        primary: {
          DEFAULT: '#5e49d6',
          light: '#ebe7ff',
          dark: '#4a3aab',
        },
        secondary: {
          DEFAULT: '#ebe7ff',
          dark: '#cfc8f3',
        },
        destructive: {
          DEFAULT: '#e11d48',
        },
        alert: {
          DEFAULT: '#f97316',
        },
        positive: {
          DEFAULT: '#15803d',
        },
        // Text Colors
        text: {
          primary: '#1b1b1f',
          secondary: '#989898',
          negative: '#f7f6ff',
          button: '#5e49d6',
          'button-disabled': '#cfc8f3',
          tag: '#5e49d6',
        },
        // Background Colors
        backgrounds: {
          'button-primary': '#5e49d6',
          'button-secondary': '#ebe7ff',
          'tag-background': '#ebfaee',
          'switch-inactive': 'white',
        },
        // Input Colors
        input: {
          bright: 'white',
          border: '#dce3e8',
        },
        // Switch Colors
        switch: {
          active: '#5e49d6',
          inactive: '#cfc8f3',
          'active-thumb': 'white',
        },
        // Active States
        active: {
          border: '#5e49d6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
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
        'gitlaw-xs': '4px',
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-l': '12px',
        'gitlaw-xl': '16px',
        'gitlaw-2xl': '24px',
      },
      borderRadius: {
        'gitlaw-s': '4px',
        'gitlaw-m': '8px',
        'gitlaw-full': '1000px',
      },
    },
  },
  plugins: [],
};
