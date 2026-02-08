import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { EditorSection } from '../components/EditorSection';
import { EditorPaper } from '../components/EditorPaper';

const meta: Meta<typeof EditorSection> = {
  title: 'Editor/EditorSection',
  component: EditorSection,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      control: 'boolean',
      description: 'Whether the section is visible',
    },
    initialWidth: {
      control: { type: 'number', min: 400, max: 1600 },
      description: 'Initial width in pixels',
    },
    minWidth: {
      control: { type: 'number', min: 300, max: 600 },
      description: 'Minimum width in pixels',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample MNDA content
const MNDAContent = () => (
  <EditorPaper
    title="Mutual Non-Disclosure Agreement"
    subtitle="MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)"
    agreementDate="15 January 2026"
    effectiveDate="15 January 2026"
    party1={{ name: 'GitLaw Limited', address: '71-75 Shelton Street, London' }}
    party2={{ name: 'Acme Corp', address: '100 Innovation Drive, Cambridge' }}
  >
    <h3 className="text-lg font-bold text-foreground mb-3">RECITALS</h3>
    <ol className="list-decimal list-inside mb-6 space-y-3 text-sm">
      <li className="text-foreground">
        The Parties wish to explore a potential business relationship.
      </li>
      <li className="text-foreground">
        Each Party may disclose confidential information to the other.
      </li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mb-3">IT IS AGREED AS FOLLOWS:</h3>
    <ol className="list-decimal list-inside mb-6 space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Definitions</strong>
        <p className="ml-4 mt-2">"Confidential Information" means all information disclosed by one Party to the other.</p>
      </li>
      <li className="text-foreground">
        <strong>Obligations</strong>
        <p className="ml-4 mt-2">The Receiving Party shall hold the Confidential Information in strict confidence.</p>
      </li>
    </ol>
  </EditorPaper>
);

// Default story with interactive open/close
export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(true);
    const [editorWidth, setEditorWidth] = useState<number | undefined>(undefined);

    return (
      <div className="min-h-screen bg-page-background">
        {/* Left side content - responsive to editor width */}
        <div
          className="p-8 transition-[margin] duration-0"
          style={{ marginRight: isOpen ? (editorWidth ? `${editorWidth}px` : '50%') : 0 }}
        >
          <h1 className="text-2xl font-bold text-foreground mb-4">Main Content Area</h1>
          <p className="text-subtle mb-4">
            This area would contain the chat or other content.
            The editor section is on the right.
          </p>
          {!isOpen && (
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2 bg-primary text-white rounded"
            >
              Open Editor
            </button>
          )}
        </div>

        {/* Editor Section */}
        <EditorSection
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          onWidthChange={setEditorWidth}
          headerProps={{
            title: 'Mutual NDA',
            showShare: true,
          }}
        >
          <MNDAContent />
        </EditorSection>
      </div>
    );
  },
};

// Wide initial width
export const WideWidth: Story = {
  args: {
    isOpen: true,
    initialWidth: 800,
    headerProps: {
      title: 'Influencer Agreement',
      showShare: true,
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-page-background">
      <EditorSection {...args}>
        <MNDAContent />
      </EditorSection>
    </div>
  ),
};

// Narrow width
export const NarrowWidth: Story = {
  args: {
    isOpen: true,
    initialWidth: 450,
    minWidth: 400,
    headerProps: {
      title: 'Short Document',
      showShare: false,
    },
  },
  render: (args) => (
    <div className="min-h-screen bg-page-background">
      <EditorSection {...args}>
        <MNDAContent />
      </EditorSection>
    </div>
  ),
};
