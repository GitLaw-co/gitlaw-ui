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
      storySort: (a, b) => {
        const order = [
          'Introduction',
          'Foundations',
          'Components',
          'Changelog',
        ];

        const aTitle = a.title || a.id;
        const bTitle = b.title || b.id;

        // Get the top-level category
        const aCategory = aTitle.split('/')[0];
        const bCategory = bTitle.split('/')[0];

        const aIndex = order.indexOf(aCategory);
        const bIndex = order.indexOf(bCategory);

        // If both are in order array, sort by order
        if (aIndex !== -1 && bIndex !== -1) {
          return aIndex - bIndex;
        }
        // If only one is in order, prioritize it
        if (aIndex !== -1) return -1;
        if (bIndex !== -1) return 1;
        // Otherwise alphabetical
        return aTitle.localeCompare(bTitle);
      },
    },
  },
};

export default preview;
