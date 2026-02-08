import type { Meta, StoryObj } from "@storybook/react";
import { ChatPageTemplate } from "../../templates/ChatPageTemplate";
import type { ChatMessage, FileItem } from "../../components";

// Sample files
const defaultFiles: FileItem[] = [
  { id: "1", name: "Influencer agreement" },
];

const multipleFiles: FileItem[] = [
  { id: "1", name: "Influencer agreement with service company" },
  { id: "2", name: "Permanent Employment Agreement" },
  { id: "3", name: "Influencer Contract" },
  { id: "4", name: "SaaS Agreement with MNO SaaS" },
];

// Sample messages - using 'role' not 'type'
const defaultMessages: ChatMessage[] = [
  {
    id: "1",
    role: "assistant",
    content: (
      <>
        <p>I've drafted your influencer agreement. To complete the document, I need a few details:</p>
        <ul>
          <li>Counterparty legal name (e.g., "Blake Logan" or company name)</li>
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
          <li><strong>Company:</strong> XYZ Ltd</li>
          <li><strong>Address:</strong> 23 Waitrose Gardens SE24 OKL</li>
          <li><strong>Registration:</strong> 12738495</li>
        </ul>
        <p>The document is ready for your review. You can edit any fields directly in the document on the right.</p>
      </>
    ),
  },
];

// Sample document content - body only (header is handled by EditorPaper)
const SampleDocumentContent = () => (
  <>
    <h3 className="text-lg font-bold text-foreground mb-3">INTRODUCTION</h3>
    <ol className="list-decimal list-inside space-y-2 text-sm">
      <li className="text-foreground">The Talent is an Influencer with a significant number of subscribers and followers to their channels and platforms. The Company wishes to make use of the Talent's services as stated hereunder to promote the Company's products and services to a wider audience.</li>
      <li className="text-foreground">The Lender has agreed to procure that the Talent shall provide certain services and materials for the Company as more particularly described in this Agreement and the parties agree that such services and materials shall be supplied in accordance with the terms of this Agreement.</li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mt-6 mb-3">IT IS AGREED AS FOLLOWS:</h3>
    <ol className="list-decimal list-inside space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Definitions and Interpretation</strong>
        <p className="ml-4 mt-2">In this Agreement, unless the context otherwise requires:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>"<strong>Confidential Information</strong>" means all information disclosed by one party to the other, whether orally, in writing, or by any other means, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and circumstances of disclosure.</li>
          <li>"<strong>Content</strong>" means any and all materials, including but not limited to photographs, videos, audio recordings, written copy, graphics, and other creative works produced by the Talent in connection with this Agreement.</li>
          <li>"<strong>Deliverables</strong>" means the specific items of Content to be created and delivered by the Talent as set out in Schedule 1.</li>
          <li>"<strong>Effective Date</strong>" means the date first written above or the date on which both parties have signed this Agreement, whichever is later.</li>
          <li>"<strong>Intellectual Property Rights</strong>" means all patents, rights to inventions, utility models, copyright and related rights, trade marks, service marks, trade, business and domain names, rights in trade dress or get-up, rights in goodwill or to sue for passing off, unfair competition rights, rights in designs, rights in computer software, database rights, topography rights, moral rights, rights in confidential information and any other intellectual property rights.</li>
          <li>"<strong>Platform</strong>" means any social media platform, website, application, or other digital medium on which the Talent maintains a presence, including but not limited to Instagram, TikTok, YouTube, Twitter/X, Facebook, LinkedIn, and any successor platforms.</li>
          <li>"<strong>Services</strong>" means the influencer marketing and content creation services to be provided by the Talent as described in this Agreement and Schedule 1.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Services</strong>
        <p className="ml-4 mt-2">The Lender shall procure that the Talent provides the Services set out in Schedule 1 to this Agreement in accordance with the following terms:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>The Talent shall create and publish Content promoting the Company's products and/or services on the Platforms specified in Schedule 1.</li>
          <li>All Content shall be original, created specifically for this engagement, and shall not infringe upon the intellectual property rights of any third party.</li>
          <li>The Talent shall comply with all applicable laws and regulations, including but not limited to advertising standards, consumer protection laws, and platform-specific guidelines regarding sponsored content disclosure.</li>
          <li>The Talent shall clearly disclose the commercial nature of all Content in accordance with applicable advertising standards and platform requirements, using appropriate hashtags such as #ad, #sponsored, or #partnership as required.</li>
          <li>The Company shall have the right to review and approve all Content prior to publication. The Talent shall submit Content for approval at least 48 hours before the scheduled publication date.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Term and Termination</strong>
        <p className="ml-4 mt-2">This Agreement shall commence on the Effective Date and continue for a period of 12 months unless terminated earlier in accordance with its terms.</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>Either party may terminate this Agreement immediately by written notice if the other party commits a material breach of this Agreement and fails to remedy such breach within 14 days of receiving written notice requiring it to do so.</li>
          <li>The Company may terminate this Agreement immediately by written notice if the Talent engages in conduct that, in the Company's reasonable opinion, brings the Company into disrepute or is likely to adversely affect the Company's reputation or goodwill.</li>
          <li>Upon termination or expiry of this Agreement, the Talent shall immediately cease using any Company materials, trade marks, or other intellectual property, and shall return or destroy all Confidential Information in their possession.</li>
          <li>Termination of this Agreement shall not affect any rights or obligations that have accrued prior to termination, including the Company's right to use Content created prior to termination in accordance with the licence granted in this Agreement.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Payment</strong>
        <p className="ml-4 mt-2">The Company shall pay the Lender the fees set out in Schedule 2 in accordance with the following terms:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>All fees are exclusive of VAT, which shall be added where applicable at the prevailing rate.</li>
          <li>Payment shall be made within 30 days of receipt of a valid invoice.</li>
          <li>The Lender shall submit invoices following the completion of each milestone as set out in Schedule 2.</li>
          <li>If any sum payable under this Agreement is not paid when due, the Lender shall be entitled to charge interest on the overdue amount at the rate of 4% per annum above the base rate of the Bank of England from time to time.</li>
          <li>The Company may deduct or withhold from any sums due to the Lender any amounts required by law to be deducted or withheld.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Intellectual Property</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>The Talent hereby grants to the Company an exclusive, royalty-free, worldwide licence to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, perform, and display the Content in any media now known or hereafter developed for the purpose of promoting the Company's products and services.</li>
          <li>The licence granted in clause 5(a) shall be perpetual unless otherwise specified in Schedule 1.</li>
          <li>The Talent warrants that they are the sole owner of all Intellectual Property Rights in the Content and that the Content does not infringe the Intellectual Property Rights of any third party.</li>
          <li>The Company's trade marks, logos, and other brand elements remain the exclusive property of the Company. The Talent is granted a limited, non-exclusive licence to use such materials solely for the purpose of performing the Services under this Agreement.</li>
          <li>The Talent retains the right to include the Content in their personal portfolio for the purpose of showcasing their work to prospective clients, provided that such use does not compete with or detract from the Company's use of the Content.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Confidentiality</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>Each party undertakes to keep confidential all Confidential Information disclosed to it by the other party and to use such information only for the purposes of this Agreement.</li>
          <li>The obligations of confidentiality shall not apply to information that: (i) is or becomes publicly available through no fault of the receiving party; (ii) was already known to the receiving party prior to disclosure; (iii) is independently developed by the receiving party without use of the Confidential Information; or (iv) is required to be disclosed by law or regulatory authority.</li>
          <li>The obligations of confidentiality shall survive termination of this Agreement for a period of three years.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Representations and Warranties</strong>
        <p className="ml-4 mt-2">The Talent represents and warrants that:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>They have the full right, power, and authority to enter into this Agreement and to perform their obligations hereunder.</li>
          <li>They are not party to any other agreement that would prevent or restrict their ability to perform the Services.</li>
          <li>All information provided to the Company regarding their audience demographics, engagement rates, and follower counts is accurate and complete to the best of their knowledge.</li>
          <li>They will not engage in any activity that artificially inflates their follower counts or engagement metrics, including the purchase of followers, likes, comments, or other forms of fake engagement.</li>
          <li>They will comply with all applicable laws, regulations, and platform terms of service in the performance of the Services.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Indemnification</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>The Talent shall indemnify and hold harmless the Company from and against any and all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to: (i) any breach of the Talent's representations, warranties, or obligations under this Agreement; (ii) any claim that the Content infringes the Intellectual Property Rights of any third party; or (iii) any negligent or wrongful act or omission of the Talent in connection with the performance of the Services.</li>
          <li>The Company shall indemnify and hold harmless the Talent from and against any and all claims, damages, losses, costs, and expenses (including reasonable legal fees) arising out of or relating to: (i) any breach of the Company's obligations under this Agreement; or (ii) any claim arising from the Company's products or services that is not attributable to the Content or the Talent's performance of the Services.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Limitation of Liability</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>Neither party shall be liable to the other for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, revenue, data, or business opportunities, arising out of or relating to this Agreement.</li>
          <li>The total liability of either party under or in connection with this Agreement shall not exceed the total fees paid or payable under this Agreement.</li>
          <li>Nothing in this Agreement shall limit or exclude either party's liability for: (i) death or personal injury caused by negligence; (ii) fraud or fraudulent misrepresentation; or (iii) any other liability that cannot be limited or excluded by applicable law.</li>
        </ol>
      </li>

      <li className="text-foreground">
        <strong>Force Majeure</strong>
        <p className="ml-4 mt-2">Neither party shall be liable for any failure or delay in performing their obligations under this Agreement if such failure or delay results from circumstances beyond the reasonable control of that party, including but not limited to acts of God, natural disasters, war, terrorism, riots, embargoes, acts of civil or military authorities, fire, floods, accidents, strikes, or shortages of transportation, facilities, fuel, energy, labour, or materials. The affected party shall give prompt notice to the other party of any such event and shall use reasonable efforts to mitigate its effects.</p>
      </li>

      <li className="text-foreground">
        <strong>Assignment</strong>
        <p className="ml-4 mt-2">The Talent may not assign, transfer, or subcontract any of their rights or obligations under this Agreement without the prior written consent of the Company. The Company may assign this Agreement to any affiliate or successor entity without the Talent's consent, provided that the assignee agrees to be bound by the terms of this Agreement.</p>
      </li>

      <li className="text-foreground">
        <strong>Entire Agreement</strong>
        <p className="ml-4 mt-2">This Agreement, together with the Schedules attached hereto, constitutes the entire agreement between the parties with respect to the subject matter hereof and supersedes all prior negotiations, representations, warranties, and agreements between the parties, whether written or oral. No modification or amendment of this Agreement shall be effective unless in writing and signed by both parties.</p>
      </li>

      <li className="text-foreground">
        <strong>Severability</strong>
        <p className="ml-4 mt-2">If any provision of this Agreement is held to be invalid, illegal, or unenforceable, the validity, legality, and enforceability of the remaining provisions shall not be affected or impaired thereby. The parties agree to negotiate in good faith to replace any invalid, illegal, or unenforceable provision with a valid, legal, and enforceable provision that achieves, to the greatest extent possible, the economic, business, and other purposes of the original provision.</p>
      </li>

      <li className="text-foreground">
        <strong>Waiver</strong>
        <p className="ml-4 mt-2">The failure of either party to enforce any right or provision of this Agreement shall not constitute a waiver of such right or provision. Any waiver of any provision of this Agreement shall be effective only if in writing and signed by the waiving party.</p>
      </li>

      <li className="text-foreground">
        <strong>Notices</strong>
        <p className="ml-4 mt-2">All notices, requests, demands, and other communications under this Agreement shall be in writing and shall be deemed to have been duly given: (i) upon delivery if delivered personally; (ii) upon receipt if sent by registered or certified mail, return receipt requested; (iii) on the next business day if sent by overnight courier; or (iv) upon confirmation of receipt if sent by email. Notices shall be sent to the addresses set forth in this Agreement or to such other address as either party may designate in writing.</p>
      </li>

      <li className="text-foreground">
        <strong>Governing Law and Jurisdiction</strong>
        <p className="ml-4 mt-2">This Agreement shall be governed by and construed in accordance with the laws of England and Wales. The parties irrevocably submit to the exclusive jurisdiction of the courts of England and Wales for the resolution of any disputes arising out of or relating to this Agreement.</p>
      </li>

      <li className="text-foreground">
        <strong>Counterparts</strong>
        <p className="ml-4 mt-2">This Agreement may be executed in any number of counterparts, each of which shall be deemed an original, and all of which together shall constitute one and the same instrument. Electronic signatures shall be deemed to be original signatures for all purposes.</p>
      </li>
    </ol>

    <p className="text-sm text-foreground mt-8">
      <strong>IN WITNESS WHEREOF</strong>, the parties have executed this Agreement as of the Effective Date first written above.
    </p>

    <div className="mt-8 grid grid-cols-2 gap-8">
      <div>
        <p className="text-sm font-bold text-foreground mb-4">SIGNED for and on behalf of the LENDER:</p>
        <div className="border-b border-foreground w-48 mb-2"></div>
        <p className="text-sm text-foreground">Name:</p>
        <p className="text-sm text-foreground">Title:</p>
        <p className="text-sm text-foreground">Date:</p>
      </div>
      <div>
        <p className="text-sm font-bold text-foreground mb-4">SIGNED for and on behalf of the COMPANY:</p>
        <div className="border-b border-foreground w-48 mb-2"></div>
        <p className="text-sm text-foreground">Name:</p>
        <p className="text-sm text-foreground">Title:</p>
        <p className="text-sm text-foreground">Date:</p>
      </div>
    </div>

    <h3 className="text-lg font-bold text-foreground mt-12 mb-3">SCHEDULE 1 - SERVICES AND DELIVERABLES</h3>
    <ol className="list-decimal list-inside space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Campaign Overview</strong>
        <p className="ml-4 mt-2">The Talent shall create and publish content promoting the Company's products across their social media platforms as detailed below.</p>
      </li>
      <li className="text-foreground">
        <strong>Deliverables</strong>
        <table className="ml-4 mt-2 w-full border-collapse border border-input-border text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-input-border p-2 text-left">Platform</th>
              <th className="border border-input-border p-2 text-left">Content Type</th>
              <th className="border border-input-border p-2 text-left">Quantity</th>
              <th className="border border-input-border p-2 text-left">Due Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-input-border p-2">Instagram</td>
              <td className="border border-input-border p-2">Feed Post</td>
              <td className="border border-input-border p-2">4</td>
              <td className="border border-input-border p-2">Monthly</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">Instagram</td>
              <td className="border border-input-border p-2">Stories</td>
              <td className="border border-input-border p-2">8</td>
              <td className="border border-input-border p-2">Bi-weekly</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">TikTok</td>
              <td className="border border-input-border p-2">Video</td>
              <td className="border border-input-border p-2">2</td>
              <td className="border border-input-border p-2">Monthly</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">YouTube</td>
              <td className="border border-input-border p-2">Integration</td>
              <td className="border border-input-border p-2">1</td>
              <td className="border border-input-border p-2">Quarterly</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li className="text-foreground">
        <strong>Content Requirements</strong>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>All content must feature the Company's products prominently and in a positive light.</li>
          <li>Content must include appropriate hashtags as specified by the Company.</li>
          <li>Content must tag the Company's official accounts where applicable.</li>
          <li>Content must comply with platform-specific advertising disclosure requirements.</li>
        </ol>
      </li>
    </ol>

    <h3 className="text-lg font-bold text-foreground mt-12 mb-3">SCHEDULE 2 - FEES AND PAYMENT</h3>
    <ol className="list-decimal list-inside space-y-4 text-sm">
      <li className="text-foreground">
        <strong>Total Fee</strong>
        <p className="ml-4 mt-2">The total fee for the Services under this Agreement is £50,000 (Fifty Thousand Pounds Sterling), payable as follows:</p>
      </li>
      <li className="text-foreground">
        <strong>Payment Schedule</strong>
        <table className="ml-4 mt-2 w-full border-collapse border border-input-border text-sm">
          <thead>
            <tr className="bg-secondary">
              <th className="border border-input-border p-2 text-left">Milestone</th>
              <th className="border border-input-border p-2 text-left">Amount</th>
              <th className="border border-input-border p-2 text-left">Due</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-input-border p-2">Upon signing</td>
              <td className="border border-input-border p-2">£12,500</td>
              <td className="border border-input-border p-2">Within 14 days of execution</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">Quarter 1 completion</td>
              <td className="border border-input-border p-2">£12,500</td>
              <td className="border border-input-border p-2">Month 3</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">Quarter 2 completion</td>
              <td className="border border-input-border p-2">£12,500</td>
              <td className="border border-input-border p-2">Month 6</td>
            </tr>
            <tr>
              <td className="border border-input-border p-2">Final delivery</td>
              <td className="border border-input-border p-2">£12,500</td>
              <td className="border border-input-border p-2">Month 12</td>
            </tr>
          </tbody>
        </table>
      </li>
      <li className="text-foreground">
        <strong>Expenses</strong>
        <p className="ml-4 mt-2">The Company shall reimburse the Talent for pre-approved reasonable expenses incurred in connection with the Services, including travel, accommodation, and production costs. All expenses must be approved in writing by the Company in advance and supported by appropriate receipts or documentation.</p>
      </li>
      <li className="text-foreground">
        <strong>Bonus Payments</strong>
        <p className="ml-4 mt-2">The Talent shall be entitled to the following performance bonuses based on content performance metrics:</p>
        <ol className="list-[lower-alpha] list-inside ml-8 mt-2 space-y-2">
          <li>£2,500 bonus if aggregate content views exceed 5 million during the Term.</li>
          <li>£5,000 bonus if aggregate content engagement rate exceeds 8% during the Term.</li>
          <li>£10,000 bonus if the campaign generates over 10,000 tracked conversions.</li>
        </ol>
      </li>
    </ol>
  </>
);

const meta: Meta<typeof ChatPageTemplate> = {
  title: "Pages/Chat Page",
  component: ChatPageTemplate,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ChatPageTemplate>;

// Default story with all sections
export const Default: Story = {
  args: {
    title: "Influencer Agreement with Blake Logan",
    files: defaultFiles,
    userName: "Ava Campbell",
    userInitials: "AC",
    messages: defaultMessages,
    documentTitle: "Influencer Agreement",
    documentSubtitle: "AGREEMENT FOR APPOINTMENT OF Influencer\n(via a lender/service company)",
    agreementDate: "21 March, 2025",
    effectiveDate: "27 March, 2025",
    preambleText: "This Social Talent Agreement is entered into on",
    party1: {
      name: "ABC Entertainment",
      address: "112 Waitrose Gardens, WC2 ECH",
    },
    party2: {
      name: "",
      address: "",
    },
    party1Role: "Lender",
    party2Role: "Company",
    documentContent: <SampleDocumentContent />,
    initialSidebarCollapsed: true,
  },
};

// With expanded sidebar
export const SidebarExpanded: Story = {
  args: {
    ...Default.args,
    initialSidebarCollapsed: false,
  },
};

// With multiple files
export const MultipleFiles: Story = {
  args: {
    ...Default.args,
    files: multipleFiles,
  },
};

// Empty chat (new conversation)
export const EmptyChat: Story = {
  args: {
    ...Default.args,
    title: "New chat",
    messages: [],
    files: [],
  },
};
