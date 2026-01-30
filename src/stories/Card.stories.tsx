import type { Meta, StoryObj } from '@storybook/react';
import { Card } from '../components/Card';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['file', 'template', 'folder'],
      description: 'Card type',
    },
    title: {
      control: 'text',
      description: 'Card title',
    },
    description: {
      control: 'text',
      description: 'Card description (for file/template)',
    },
    visibility: {
      control: 'select',
      options: ['private', 'public', 'shared', 'organization'],
      description: 'Visibility status',
    },
    organizationName: {
      control: 'text',
      description: 'Organization name (when visibility is organization)',
    },
    starred: {
      control: 'boolean',
      description: 'Whether card is starred',
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label on hover (file/template only)',
    },
    onFileClick: {
      action: 'file clicked',
      description: 'Callback when a file within a folder is clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="bg-page-background p-8">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Card>;

// Sample data
const sampleOwner = {
  name: 'Whisk',
  initials: 'WH',
};

const sampleFiles = [
  { id: '1', name: 'Service Design Agreement' },
  { id: '2', name: 'Client Engagement Contract' },
  { id: '3', name: 'Non-Disclosure Agreement' },
  { id: '4', name: 'Consulting Services Agreement' },
  { id: '5', name: 'Partnership Agreement' },
  { id: '6', name: 'Employment Contract' },
];

// Default File Card
export const FileCard: Story = {
  args: {
    type: 'file',
    title: 'Service Contract Template',
    description: 'Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.',
    owner: sampleOwner,
    visibility: 'private',
    starred: false,
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Card {...args} />
    </div>
  ),
};

// Starred File Card
export const StarredFileCard: Story = {
  args: {
    type: 'file',
    title: 'Service Contract Template',
    description: 'Explains how Mozilla handles minimal personal data for Facebook pages, with no sharing without consent.',
    owner: sampleOwner,
    visibility: 'private',
    starred: true,
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Card {...args} />
    </div>
  ),
};

// Template Card
export const TemplateCard: Story = {
  args: {
    type: 'template',
    title: 'Service Provision Agreement',
    description: 'Details the terms and conditions of the agreement between parties regarding service usage.',
    owner: sampleOwner,
    visibility: 'private',
    starred: false,
    actionLabel: 'Use Template',
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Card {...args} />
    </div>
  ),
};

// Folder Card
export const FolderCard: Story = {
  args: {
    type: 'folder',
    title: 'Employment Contracts',
    filesCount: 8,
    files: sampleFiles,
    starred: false,
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Card {...args} />
    </div>
  ),
};

// Starred Folder Card
export const StarredFolderCard: Story = {
  args: {
    type: 'folder',
    title: 'NDAs',
    filesCount: 5,
    files: sampleFiles,
    starred: true,
  },
  render: (args) => (
    <div style={{ width: '240px' }}>
      <Card {...args} />
    </div>
  ),
};

// All Visibility States
export const VisibilityStates: Story = {
  render: () => (
    <div className="flex gap-4">
      <div style={{ width: '220px' }}>
        <Card
          type="file"
          title="Private Document"
          description="Only visible to you."
          owner={sampleOwner}
          visibility="private"
        />
      </div>
      <div style={{ width: '220px' }}>
        <Card
          type="file"
          title="Public Document"
          description="Accessible to everyone."
          owner={sampleOwner}
          visibility="public"
        />
      </div>
      <div style={{ width: '220px' }}>
        <Card
          type="file"
          title="Shared Document"
          description="Shared with specific people."
          owner={sampleOwner}
          visibility="shared"
        />
      </div>
      <div style={{ width: '220px' }}>
        <Card
          type="file"
          title="Organization Document"
          description="Shared with organization."
          owner={sampleOwner}
          visibility="organization"
          organizationName="Gitlaw"
        />
      </div>
    </div>
  ),
};

// Responsive Sizes (under/over 200px breakpoint)
export const ResponsiveSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Under 200px (compact: no star, no file count, 16px padding)</h3>
        <div className="flex gap-4">
          <div style={{ width: '180px' }}>
            <Card
              type="file"
              title="Compact File"
              description="Smaller card variant."
              owner={sampleOwner}
              visibility="private"
              starred={true}
            />
          </div>
          <div style={{ width: '180px' }}>
            <Card
              type="folder"
              title="Compact Folder"
              filesCount={5}
              files={sampleFiles}
              starred={true}
            />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">200px+ (full: star visible, file count visible, 24px padding)</h3>
        <div className="flex gap-4">
          <div style={{ width: '240px' }}>
            <Card
              type="file"
              title="Standard File"
              description="Standard card variant."
              owner={sampleOwner}
              visibility="private"
              starred={true}
            />
          </div>
          <div style={{ width: '240px' }}>
            <Card
              type="folder"
              title="Standard Folder"
              filesCount={5}
              files={sampleFiles}
              starred={true}
            />
          </div>
        </div>
      </div>
    </div>
  ),
};

// Card Grid
export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4" style={{ width: '1000px' }}>
      <Card
        type="file"
        title="Service Agreement"
        description="Terms and conditions for services."
        owner={sampleOwner}
        visibility="private"
      />
      <Card
        type="file"
        title="Design Contract"
        description="Creative design engagement terms."
        owner={sampleOwner}
        visibility="shared"
        starred
      />
      <Card
        type="folder"
        title="NDAs"
        filesCount={12}
        files={sampleFiles}
      />
      <Card
        type="file"
        title="Partnership Agreement"
        description="Business partnership terms."
        owner={sampleOwner}
        visibility="organization"
        organizationName="Gitlaw"
      />
      <Card
        type="folder"
        title="Client Contracts"
        filesCount={23}
        files={sampleFiles}
        starred
      />
      <Card
        type="file"
        title="Consulting Agreement"
        description="Consulting services terms."
        owner={sampleOwner}
        visibility="public"
      />
      <Card
        type="template"
        title="NDA Template"
        description="Standard NDA template."
        owner={sampleOwner}
        visibility="private"
        actionLabel="Use Template"
      />
      <Card
        type="folder"
        title="Templates"
        filesCount={8}
        files={sampleFiles}
      />
    </div>
  ),
};
