import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as g}from"./ChatThread-DuK8jXmN.js";import"./index-DRjF_FHU.js";import"./ChatInput-Bb-bg1kI.js";import"./index-DIvcuAjW.js";import"./Icon-CfPs8lnx.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./colors-CUQOl70L.js";const A={title:"Chat/ChatThread",component:g,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},inputValue:{control:"text",description:"Current input value"},disclaimer:{control:"text",description:"Disclaimer text below input"}}},h=[{id:"1",role:"user",content:"Can you help me draft a mutual NDA?"},{id:"2",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Of course! I'd be happy to help you draft a mutual Non-Disclosure Agreement. To create the most appropriate NDA for your needs, I have a few questions:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"What is the purpose of sharing confidential information?"}),e.jsx("li",{children:"Who are the parties involved?"}),e.jsx("li",{children:"How long should the confidentiality obligations last?"})]})]})},{id:"3",role:"user",content:"It's for a potential business partnership between my company and a software vendor. We'll be sharing product roadmaps and pricing information."},{id:"4",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Perfect, that helps clarify the context. For a business partnership involving product roadmaps and pricing information, I'll draft a mutual NDA that protects both parties equally. Here's what I recommend including:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Definition of confidential information covering technical, business, and financial data"}),e.jsx("li",{children:"Mutual obligations for both parties"}),e.jsx("li",{children:"Standard 2-3 year confidentiality period"}),e.jsx("li",{children:"Exceptions for publicly known information"}),e.jsx("li",{children:"Return or destruction of materials upon termination"})]})]})}],t={args:{messages:[],placeholder:"Ask anything about your legal documents..."},decorators:[o=>e.jsx("div",{style:{height:"500px"},className:"bg-page-background",children:e.jsx(o,{})})]},n={args:{messages:h,placeholder:"Ask a follow-up question..."},decorators:[o=>e.jsx("div",{style:{height:"600px"},className:"bg-page-background",children:e.jsx(o,{})})]},s={args:{messages:[...h,{id:"5",role:"user",content:"That sounds good. Can you also add a non-compete clause?"},{id:"6",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"I can include a non-compete provision, but I should mention a few important considerations:"}),e.jsx("p",{children:"Non-compete clauses in NDAs are less common and may face enforceability challenges depending on your jurisdiction. They're typically more appropriate in employment agreements or acquisition deals."}),e.jsx("p",{children:"For a vendor partnership, you might consider instead:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"A non-solicitation clause (preventing poaching of employees/customers)"}),e.jsx("li",{children:"Restrictions on using confidential information for competitive purposes"})]}),e.jsx("p",{children:"Would you like me to include one of these alternatives, or do you specifically need a full non-compete clause?"})]})},{id:"7",role:"user",content:"Let's go with the non-solicitation clause instead."},{id:"8",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Great choice. I'll add a non-solicitation clause that prevents either party from soliciting the other's employees or customers for a period of 12 months after the agreement ends. This is generally more enforceable and appropriate for a vendor partnership."}),e.jsx("p",{children:"I'm now ready to generate the complete NDA. Would you like me to proceed?"})]})}],placeholder:"Continue the conversation..."},decorators:[o=>e.jsx("div",{style:{height:"500px"},className:"bg-page-background",children:e.jsx(o,{})})]};var a,r,i;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    messages: [],
    placeholder: "Ask anything about your legal documents..."
  },
  decorators: [Story => <div style={{
    height: "500px"
  }} className="bg-page-background">
        <Story />
      </div>]
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var l,c,d;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    placeholder: "Ask a follow-up question..."
  },
  decorators: [Story => <div style={{
    height: "600px"
  }} className="bg-page-background">
        <Story />
      </div>]
}`,...(d=(c=n.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,u;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    messages: [...sampleMessages, {
      id: "5",
      role: "user",
      content: "That sounds good. Can you also add a non-compete clause?"
    }, {
      id: "6",
      role: "assistant",
      content: <>
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
    }, {
      id: "7",
      role: "user",
      content: "Let's go with the non-solicitation clause instead."
    }, {
      id: "8",
      role: "assistant",
      content: <>
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
    }],
    placeholder: "Continue the conversation..."
  },
  decorators: [Story => <div style={{
    height: "500px"
  }} className="bg-page-background">
        <Story />
      </div>]
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const I=["Empty","WithMessages","LongConversation"];export{t as Empty,s as LongConversation,n as WithMessages,I as __namedExportsOrder,A as default};
