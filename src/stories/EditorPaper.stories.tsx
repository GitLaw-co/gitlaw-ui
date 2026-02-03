import type { Meta, StoryObj } from '@storybook/react';
import { EditorPaper } from '../components/EditorPaper';

const meta: Meta<typeof EditorPaper> = {
  title: 'Components/Editor/EditorPaper',
  component: EditorPaper,
  parameters: {
    layout: 'fullscreen',
    backgrounds: { default: 'light' },
  },
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['default', 'view', 'diff'],
      description: 'Status mode of the editor paper',
    },
    showToolbar: {
      control: 'boolean',
      description: 'Whether to show toolbar space (default status only)',
    },
    title: {
      control: 'text',
      description: 'Document title',
    },
    subtitle: {
      control: 'text',
      description: 'Document subtitle',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Mutual NDA body content
const MNDABody = () => (
  <>
    <h3 className="text-lg font-bold text-foreground mb-3">RECITALS</h3>
    <ol className="list-decimal list-inside mb-6 space-y-3 text-sm">
      <li className="text-foreground">
        The Parties wish to explore a potential business relationship (the "<strong>Purpose</strong>").
      </li>
      <li className="text-foreground">
        In connection with the Purpose, each Party may disclose to the other certain confidential and proprietary information.
      </li>
      <li className="text-foreground">
        The Parties wish to protect such confidential information from unauthorized use and disclosure.
      </li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mb-3">IT IS AGREED AS FOLLOWS:</h3>

    <ol className="list-decimal list-inside mb-6 space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Definitions</strong>
        <ol className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-2">
          <li>"<strong>Confidential Information</strong>" means all information disclosed by one Party (the "<strong>Disclosing Party</strong>") to the other Party (the "<strong>Receiving Party</strong>"), whether orally, in writing, or by inspection of tangible objects, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure.</li>
          <li>"<strong>Representatives</strong>" means a Party's employees, officers, directors, advisors, agents, and consultants who have a need to know the Confidential Information for the Purpose.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Obligations of Confidentiality</strong>
        <ol className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-2">
          <li>The Receiving Party shall hold and maintain the Confidential Information in strict confidence and shall not, without the prior written consent of the Disclosing Party, disclose any Confidential Information to any person or entity.</li>
          <li>The Receiving Party shall use the Confidential Information solely for the Purpose and shall not use the Confidential Information for any other purpose without the prior written consent of the Disclosing Party.</li>
          <li>The Receiving Party shall protect the Confidential Information using the same degree of care it uses to protect its own confidential information, but in no event less than reasonable care.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Exclusions from Confidential Information</strong>
        <p className="ml-4 mt-2">Confidential Information does not include information that:</p>
        <ol className="list-[lower-alpha] list-inside ml-4 mt-2 space-y-2">
          <li>is or becomes publicly available through no fault of the Receiving Party;</li>
          <li>was in the Receiving Party's possession prior to disclosure by the Disclosing Party;</li>
          <li>is independently developed by the Receiving Party without use of the Confidential Information;</li>
          <li>is rightfully obtained by the Receiving Party from a third party without restriction on disclosure.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Return of Confidential Information</strong>
        <p className="ml-4 mt-2">Upon termination of discussions between the Parties or upon request by the Disclosing Party, the Receiving Party shall promptly return or destroy all Confidential Information and any copies thereof.</p>
      </li>

      <li className="text-foreground">
        <strong>Term</strong>
        <p className="ml-4 mt-2">This Agreement shall remain in effect for a period of two (2) years from the Effective Date. The obligations of confidentiality shall survive termination of this Agreement for a period of three (3) years.</p>
      </li>

      <li className="text-foreground">
        <strong>Governing Law</strong>
        <p className="ml-4 mt-2">This Agreement shall be governed by and construed in accordance with the laws of England and Wales, without regard to its conflict of laws principles.</p>
      </li>
    </ol>

    <p className="text-sm text-foreground mt-6">
      <strong>IN WITNESS WHEREOF</strong>, the Parties have executed this Agreement as of the Effective Date.
    </p>
  </>
);

// Default - Empty inputs (yellow backgrounds) - New MNDA
export const Default: Story = {
  args: {
    status: 'default',
    showToolbar: true,
    title: 'Mutual Non-Disclosure Agreement',
    subtitle: 'MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)',
  },
  render: (args) => (
    <div className="bg-page-background min-h-screen">
      <EditorPaper {...args}>
        <MNDABody />
      </EditorPaper>
    </div>
  ),
};

// Filled - With populated inputs (purple backgrounds)
export const Filled: Story = {
  args: {
    status: 'default',
    showToolbar: true,
    title: 'Mutual Non-Disclosure Agreement',
    subtitle: 'MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)',
    agreementDate: '15 January 2026',
    effectiveDate: '15 January 2026',
    party1: {
      name: 'GitLaw Limited',
      address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ',
    },
    party2: {
      name: 'Acme Corporation Ltd',
      address: '100 Innovation Drive, Cambridge, CB1 2AB',
    },
  },
  render: (args) => (
    <div className="bg-page-background min-h-screen">
      <EditorPaper {...args}>
        <MNDABody />
      </EditorPaper>
    </div>
  ),
};

// Partial - Some inputs filled (mixed yellow/purple)
export const PartiallyFilled: Story = {
  args: {
    status: 'default',
    showToolbar: true,
    title: 'Mutual Non-Disclosure Agreement',
    subtitle: 'MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)',
    agreementDate: '',
    effectiveDate: '15 January 2026',
    party1: {
      name: 'GitLaw Limited',
      address: '',
    },
    party2: {
      name: '',
      address: '',
    },
  },
  render: (args) => (
    <div className="bg-page-background min-h-screen">
      <EditorPaper {...args}>
        <MNDABody />
      </EditorPaper>
    </div>
  ),
};

// View mode (read-only)
export const ViewMode: Story = {
  args: {
    status: 'view',
    title: 'Mutual Non-Disclosure Agreement',
    subtitle: 'MUTUAL CONFIDENTIALITY AGREEMENT\n(Standard Form)',
    agreementDate: '15 January 2026',
    effectiveDate: '15 January 2026',
    party1: {
      name: 'GitLaw Limited',
      address: '71-75 Shelton Street, Covent Garden, London, WC2H 9JQ',
    },
    party2: {
      name: 'Acme Corporation Ltd',
      address: '100 Innovation Drive, Cambridge, CB1 2AB',
    },
  },
  render: (args) => (
    <div className="bg-page-background min-h-screen">
      <EditorPaper {...args}>
        <MNDABody />
      </EditorPaper>
    </div>
  ),
};

// Empty paper - starting a new document
export const Empty: Story = {
  args: {
    status: 'default',
    showToolbar: true,
    title: 'Untitled document',
    subtitle: '',
  },
  render: (args) => (
    <div className="bg-page-background min-h-screen">
      <EditorPaper {...args}>
        <p className="text-subtle italic text-sm">Start typing your document...</p>
      </EditorPaper>
    </div>
  ),
};
