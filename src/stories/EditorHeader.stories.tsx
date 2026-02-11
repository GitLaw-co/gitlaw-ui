import type { Story, StoryDefault } from "@ladle/react";
import { EditorHeader } from '../components/EditorHeader';

export default {
  title: "Editor / EditorHeader",
  meta: { layout: "padded" },
  argTypes: {
    title: {
      control: { type: "text" },
      description: 'Document title displayed in the header',
    },
    showShare: {
      control: { type: "boolean" },
      description: 'Show the Share button',
    },
  },
} satisfies StoryDefault;

// Default
export const Default: Story = (args) => <EditorHeader {...args} />;
Default.args = {
  title: 'Influencer agreement',
  showShare: true,
};

// With long title
export const LongTitle: Story = (args) => <EditorHeader {...args} />;
LongTitle.args = {
  title: 'Employment Agreement for Senior Software Engineer Position',
  showShare: true,
};

// Interactive example with console logging
export const Interactive: Story = (args) => (
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
);
Interactive.args = {
  title: 'Employment Agreement',
  showShare: true,
};
