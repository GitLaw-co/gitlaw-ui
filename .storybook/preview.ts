import type { Preview } from '@storybook/react';
import '../src/styles/globals.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f7f6ff',
        },
        {
          name: 'dark',
          value: '#1b1b1f',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
      ],
    },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Foundations',
          ['Colors', 'Typography', 'Spacing', 'Icons', 'Illustrations'],
          'Components',
          ['Avatar', 'Badge', 'Button', 'Card', 'ChatInput', 'Dialog', 'Input', 'MenuItem', 'Select', 'Sidebar', 'Switch', 'Tab', 'Tag', 'TextField', 'Toast', 'Tooltip'],
          '*',
        ],
      },
    },
  },
};

export default preview;
