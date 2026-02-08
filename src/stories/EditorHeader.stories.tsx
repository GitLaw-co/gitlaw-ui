import type { Meta, StoryObj } from '@storybook/react';
import { EditorHeader } from '../components/EditorHeader';

const meta: Meta<typeof EditorHeader> = {
  title: 'Editor/EditorHeader',
  component: EditorHeader,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Document title displayed in the header',
    },
    showShare: {
      control: 'boolean',
      description: 'Show the Share button',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default
export const Default: Story = {
  args: {
    title: 'Influencer agreement',
    showShare: true,
  },
};

// With long title
export const LongTitle: Story = {
  args: {
    title: 'Employment Agreement for Senior Software Engineer Position',
    showShare: true,
  },
};

// Interactive example with console logging
export const Interactive: Story = {
  args: {
    title: 'Employment Agreement',
    showShare: true,
  },
  render: (args) => (
    <div>
      <p className="text-sm text-subtle mb-4">Hover over icons to see tooltips. Click actions to see console logs.</p>
      <EditorHeader
        {...args}
        onClose={() => console.log('Close clicked')}
        onTitleClick={() => console.log('Title clicked')}
        onMenuClick={() => console.log('Menu clicked')}
        onShare={() => console.log('Share clicked')}
        onESign={() => console.log('eSign clicked')}
        onDownload={() => console.log('Download clicked')}
        onVersions={() => console.log('Versions clicked')}
        onMore={() => console.log('More clicked')}
      />
    </div>
  ),
};
