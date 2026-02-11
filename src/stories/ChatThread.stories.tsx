import type { Story, StoryDefault } from "@ladle/react";
import { ChatThread, ChatMessage } from "../components/ChatThread";

export default {
  title: "Chat / ChatThread",
  meta: { layout: "fullscreen" },
  argTypes: {
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text for the input",
    },
    inputValue: {
      control: { type: "text" },
      description: "Current input value",
    },
    disclaimer: {
      control: { type: "text" },
      description: "Disclaimer text below input",
    },
  },
} satisfies StoryDefault;

const sampleMessages: ChatMessage[] = [
  {
    id: "1",
    role: "user",
    content: "Can you help me draft a mutual NDA?",
  },
  {
    id: "2",
    role: "assistant",
    content: (
      <>
        <p>
          Of course! I'd be happy to help you draft a mutual Non-Disclosure
          Agreement. To create the most appropriate NDA for your needs, I have a
          few questions:
        </p>
        <ol>
          <li>What is the purpose of sharing confidential information?</li>
          <li>Who are the parties involved?</li>
          <li>How long should the confidentiality obligations last?</li>
        </ol>
      </>
    ),
  },
  {
    id: "3",
    role: "user",
    content:
      "It's for a potential business partnership between my company and a software vendor. We'll be sharing product roadmaps and pricing information.",
  },
  {
    id: "4",
    role: "assistant",
    content: (
      <>
        <p>
          Perfect, that helps clarify the context. For a business partnership
          involving product roadmaps and pricing information, I'll draft a
          mutual NDA that protects both parties equally. Here's what I recommend
          including:
        </p>
        <ul>
          <li>
            Definition of confidential information covering technical, business,
            and financial data
          </li>
          <li>Mutual obligations for both parties</li>
          <li>Standard 2-3 year confidentiality period</li>
          <li>Exceptions for publicly known information</li>
          <li>Return or destruction of materials upon termination</li>
        </ul>
      </>
    ),
  },
];

export const Empty: Story = (args) => (
  <div style={{ height: "500px" }} className="bg-page-background">
    <ChatThread {...args} />
  </div>
);
Empty.args = {
  messages: [],
  placeholder: "Ask anything about your legal documents...",
};

export const WithMessages: Story = (args) => (
  <div style={{ height: "600px" }} className="bg-page-background">
    <ChatThread {...args} />
  </div>
);
WithMessages.args = {
  messages: sampleMessages,
  placeholder: "Ask a follow-up question...",
};

export const LongConversation: Story = (args) => (
  <div style={{ height: "500px" }} className="bg-page-background">
    <ChatThread {...args} />
  </div>
);
LongConversation.args = {
  messages: [
    ...sampleMessages,
    {
      id: "5",
      role: "user",
      content: "That sounds good. Can you also add a non-compete clause?",
    },
    {
      id: "6",
      role: "assistant",
      content: (
        <>
          <p>
            I can include a non-compete provision, but I should mention a few
            important considerations:
          </p>
          <p>
            Non-compete clauses in NDAs are less common and may face
            enforceability challenges depending on your jurisdiction. They're
            typically more appropriate in employment agreements or acquisition
            deals.
          </p>
          <p>For a vendor partnership, you might consider instead:</p>
          <ul>
            <li>
              A non-solicitation clause (preventing poaching of
              employees/customers)
            </li>
            <li>
              Restrictions on using confidential information for competitive
              purposes
            </li>
          </ul>
          <p>
            Would you like me to include one of these alternatives, or do you
            specifically need a full non-compete clause?
          </p>
        </>
      ),
    },
    {
      id: "7",
      role: "user",
      content: "Let's go with the non-solicitation clause instead.",
    },
    {
      id: "8",
      role: "assistant",
      content: (
        <>
          <p>
            Great choice. I'll add a non-solicitation clause that prevents
            either party from soliciting the other's employees or customers
            for a period of 12 months after the agreement ends. This is
            generally more enforceable and appropriate for a vendor
            partnership.
          </p>
          <p>
            I'm now ready to generate the complete NDA. Would you like me to
            proceed?
          </p>
        </>
      ),
    },
  ],
  placeholder: "Continue the conversation...",
};
