import type { Meta, StoryObj } from "@storybook/react";
import { ChatThread, ChatMessage } from "../components/ChatThread";
import React from "react";

const meta: Meta<typeof ChatThread> = {
  title: "Components/Chat/ChatThread",
  component: ChatThread,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    inputValue: {
      control: "text",
      description: "Current input value",
    },
    disclaimer: {
      control: "text",
      description: "Disclaimer text below input",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

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

// Empty State
export const Empty: Story = {
  args: {
    messages: [],
    placeholder: "Ask anything about your legal documents...",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// With Messages
export const WithMessages: Story = {
  args: {
    messages: sampleMessages,
    placeholder: "Ask a follow-up question...",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "600px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// Single User Message
export const SingleUserMessage: Story = {
  args: {
    messages: [
      {
        id: "1",
        role: "user",
        content: "What are the key clauses in a service agreement?",
      },
    ],
    placeholder: "Ask anything...",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// Single Assistant Message
export const SingleAssistantMessage: Story = {
  args: {
    messages: [
      {
        id: "1",
        role: "assistant",
        content: (
          <p>
            Hello! I'm your legal document assistant. I can help you draft,
            review, and understand legal documents. What would you like to work
            on today?
          </p>
        ),
      },
    ],
    placeholder: "Type your question...",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "400px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// Long Conversation (scroll to see older messages)
export const LongConversation: Story = {
  args: {
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
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// With Input Value
export const WithInputValue: Story = {
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    inputValue: "How long should the NDA last?",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// Custom Disclaimer
export const CustomDisclaimer: Story = {
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    disclaimer: "This is a custom disclaimer message.",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};

// No Disclaimer
export const NoDisclaimer: Story = {
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    disclaimer: "",
  },
  decorators: [
    (Story) => (
      <div style={{ height: "500px", background: "#F7F6FF" }}>
        <Story />
      </div>
    ),
  ],
};
