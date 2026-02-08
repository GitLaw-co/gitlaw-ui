import type { Meta, StoryObj } from "@storybook/react";
import { ChatPageTemplate } from "../../templates/ChatPageTemplate";
import type { ChatMessage, FileItem } from "../../components";

const meta: Meta<typeof ChatPageTemplate> = {
  title: "Pages/Chat Page",
  component: ChatPageTemplate,
  parameters: {
    layout: "fullscreen",
    backgrounds: { default: "light" },
  },
};

export default meta;
type Story = StoryObj<typeof ChatPageTemplate>;

/* ------------------------------------------------------------------ */
/*  Shared data                                                        */
/* ------------------------------------------------------------------ */

const files: FileItem[] = [
  { id: "1", name: "Influencer agreement with service company" },
  { id: "2", name: "Permanent Employment Agreement" },
  { id: "3", name: "Influencer Contract" },
  { id: "4", name: "SaaS Agreement with MNO SaaS" },
];

const messages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: (
      <>
        <p>
          I've drafted your influencer agreement. To complete the document, I
          need a few details:
        </p>
        <ul>
          <li>
            Counterparty legal name (e.g., "Blake Logan" or company name)
          </li>
          <li>Counterparty address</li>
          <li>Signatory name and title</li>
          <li>Brief description of the campaign scope</li>
        </ul>
      </>
    ),
  },
  {
    id: "2",
    role: "user",
    content: "Sure: XYZ Ltd, 23 Waitrose Gardens SE24 OKL, reg nr 12738495",
  },
  {
    id: "3",
    role: "assistant",
    content: (
      <>
        <p>I've added the contractor details to the agreement:</p>
        <ul>
          <li>
            <strong>Company:</strong> XYZ Ltd
          </li>
          <li>
            <strong>Address:</strong> 23 Waitrose Gardens SE24 OKL
          </li>
          <li>
            <strong>Registration:</strong> 12738495
          </li>
        </ul>
        <p>
          The document is ready for your review. You can edit any fields
          directly in the document on the right.
        </p>
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/*  Document body content                                              */
/* ------------------------------------------------------------------ */

const SampleDocumentContent = () => (
  <>
    <h3 className="text-lg font-bold text-foreground mb-3">INTRODUCTION</h3>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li className="text-foreground">
        The Talent is an Influencer with a significant number of subscribers and
        followers to their channels and platforms. The Company wishes to make use
        of the Talent's services as stated hereunder to promote the Company's
        products and services to a wider audience.
      </li>
      <li className="text-foreground">
        The Lender has agreed to procure that the Talent shall provide certain
        services and materials for the Company as more particularly described in
        this Agreement and the parties agree that such services and materials
        shall be supplied in accordance with the terms of this Agreement.
      </li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mt-6 mb-3">
      IT IS AGREED AS FOLLOWS:
    </h3>
    <ol className="list-decimal list-inside space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Definitions and Interpretation</strong>
        <p className="ml-4 mt-2">
          In this Agreement, unless the context otherwise requires:
        </p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>
            "<strong>Confidential Information</strong>" means all information
            disclosed by one party to the other, whether orally, in writing, or
            by any other means, that is designated as confidential.
          </li>
          <li>
            "<strong>Content</strong>" means any and all materials, including
            photographs, videos, audio recordings, written copy, graphics, and
            other creative works produced by the Talent in connection with this
            Agreement.
          </li>
          <li>
            "<strong>Deliverables</strong>" means the specific items of Content
            to be created and delivered by the Talent as set out in Schedule 1.
          </li>
          <li>
            "<strong>Effective Date</strong>" means the date first written above
            or the date on which both parties have signed this Agreement,
            whichever is later.
          </li>
          <li>
            "<strong>Intellectual Property Rights</strong>" means all patents,
            rights to inventions, copyright and related rights, trade marks,
            service marks, trade and domain names, rights in designs, database
            rights, moral rights, and any other intellectual property rights.
          </li>
          <li>
            "<strong>Platform</strong>" means any social media platform, website,
            application, or other digital medium on which the Talent maintains a
            presence.
          </li>
          <li>
            "<strong>Services</strong>" means the influencer marketing and
            content creation services to be provided by the Talent as described
            in this Agreement and Schedule 1.
          </li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Services</strong>
        <p className="ml-4 mt-2">
          The Lender shall procure that the Talent provides the Services set out
          in Schedule 1 to this Agreement in accordance with the following terms:
        </p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>
            The Talent shall create and publish Content promoting the Company's
            products and/or services on the Platforms specified in Schedule 1.
          </li>
          <li>
            All Content shall be original, created specifically for this
            engagement, and shall not infringe upon the intellectual property
            rights of any third party.
          </li>
          <li>
            The Talent shall comply with all applicable laws and regulations,
            including advertising standards and consumer protection laws.
          </li>
          <li>
            The Company shall have the right to review and approve all Content
            prior to publication. The Talent shall submit Content for approval at
            least 48 hours before the scheduled publication date.
          </li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Term and Termination</strong>
        <p className="ml-4 mt-2">
          This Agreement shall commence on the Effective Date and continue for a
          period of 12 months unless terminated earlier in accordance with its
          terms.
        </p>
      </li>

      <li className="text-foreground">
        <strong>Payment</strong>
        <p className="ml-4 mt-2">
          The Company shall pay the Lender the fees set out in Schedule 2 in
          accordance with the following terms:
        </p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>
            All fees are exclusive of VAT, which shall be added where applicable
            at the prevailing rate.
          </li>
          <li>
            Payment shall be made within 30 days of receipt of a valid invoice.
          </li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Intellectual Property</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>
            The Talent hereby grants to the Company an exclusive, royalty-free,
            worldwide licence to use, reproduce, modify, and distribute the
            Content in any media now known or hereafter developed.
          </li>
          <li>
            The licence granted shall be perpetual unless otherwise specified in
            Schedule 1.
          </li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Governing Law and Jurisdiction</strong>
        <p className="ml-4 mt-2">
          This Agreement shall be governed by and construed in accordance with
          the laws of England and Wales. The parties irrevocably submit to the
          exclusive jurisdiction of the courts of England and Wales.
        </p>
      </li>
    </ol>

    <p className="text-sm text-foreground mt-8">
      <strong>IN WITNESS WHEREOF</strong>, the parties have executed this
      Agreement as of the Effective Date first written above.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-8">
      <div>
        <p className="text-sm font-bold text-foreground mb-4">
          SIGNED for and on behalf of the LENDER:
        </p>
        <div className="border-b border-foreground w-48 mb-2"></div>
        <p className="text-sm text-foreground">Name:</p>
        <p className="text-sm text-foreground">Title:</p>
        <p className="text-sm text-foreground">Date:</p>
      </div>
      <div>
        <p className="text-sm font-bold text-foreground mb-4">
          SIGNED for and on behalf of the COMPANY:
        </p>
        <div className="border-b border-foreground w-48 mb-2"></div>
        <p className="text-sm text-foreground">Name:</p>
        <p className="text-sm text-foreground">Title:</p>
        <p className="text-sm text-foreground">Date:</p>
      </div>
    </div>
  </>
);

/* ------------------------------------------------------------------ */
/*  Shared props                                                       */
/* ------------------------------------------------------------------ */

const sharedProps = {
  title: "Influencer Agreement with Blake Logan",
  files,
  userName: "Ava Campbell",
  userInitials: "AC",
  messages,
  documentTitle: "Influencer Agreement",
  documentSubtitle:
    "AGREEMENT FOR APPOINTMENT OF Influencer\n(via a lender/service company)",
  agreementDate: "21 March, 2025",
  effectiveDate: "27 March, 2025",
  preambleText: "This Social Talent Agreement is entered into on",
  party1: { name: "ABC Entertainment", address: "112 Waitrose Gardens, WC2 ECH" },
  party2: { name: "", address: "" },
  party1Role: "Lender",
  party2Role: "Company",
  documentContent: <SampleDocumentContent />,
  initialSidebarCollapsed: true,
};

/* ------------------------------------------------------------------ */
/*  Story: Default                                                     */
/* ------------------------------------------------------------------ */

/**
 * Chat page — 3-panel layout: sidebar | chat thread | document editor.
 * Chat panel is resizable (280–600px, default 400px) via a draggable divider.
 */
export const Default: Story = {
  render: () => <ChatPageTemplate {...sharedProps} />,
};

/* ------------------------------------------------------------------ */
/*  Story: Empty Chat                                                  */
/* ------------------------------------------------------------------ */

/**
 * New conversation state — no messages or files yet.
 */
export const EmptyChat: Story = {
  render: () => (
    <ChatPageTemplate
      {...sharedProps}
      title="New chat"
      messages={[]}
      files={[]}
    />
  ),
};
