import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as Q}from"./ChatInput-SxNj5kAD.js";import"./index-DRjF_FHU.js";import"./colors-C61pH6SS.js";import"./Tooltip-BJTLr6Td.js";const L=({children:s,className:a=""})=>e.jsx("div",{className:`flex flex-col gap-4 items-end mb-4 last:mb-0 ${a}`,children:e.jsx("div",{className:"p-4 bg-secondary text-secondary-foreground max-w-[80%] rounded-lg text-sm break-words",children:s})});L.__docgenInfo={description:"",methods:[],displayName:"ChatUserMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const E=({children:s,className:a=""})=>e.jsx("div",{className:`flex flex-col gap-4 mb-4 last:mb-0 ${a}`,children:e.jsx("div",{className:"prose prose-sm text-sm text-foreground w-full break-words",children:s})});E.__docgenInfo={description:"",methods:[],displayName:"ChatAssistantMessage",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const G=({messages:s=[],placeholder:a="Ask anything",inputValue:m="",onInputChange:U,onSubmit:$,onAttachmentClick:O,onSettingsClick:P,disclaimer:h="GitLaw isn't a law firm and may make mistakes. Always review and consult a qualified attorney.",className:z=""})=>e.jsx("div",{className:`flex flex-col h-full min-h-0 ${z}`,children:e.jsx("div",{className:"flex-1 basis-0 min-h-0 overflow-y-auto flex flex-col items-stretch",children:e.jsx("div",{className:"flex-1 flex flex-col items-stretch",children:e.jsxs("div",{className:"flex flex-col flex-1 shrink max-w-4xl mx-auto w-full pt-4",children:[e.jsxs("div",{className:"shrink-0 flex flex-col space-y-4 flex-1",children:[e.jsx("div",{className:"flex-1 basis-0 min-h-0"}),s.map(t=>t.role==="user"?e.jsx(L,{children:t.content},t.id):e.jsx(E,{children:t.content},t.id))]}),e.jsxs("div",{className:"shrink-0 sticky bottom-0 mt-6 pb-4 bg-page-background",children:[e.jsx(Q,{size:"m",status:m?"populated":"active",value:m,onChange:U,onSubmit:$,onAttachmentClick:O,onSettingsClick:P,showQuickActions:!1,placeholder:a,fullWidth:!0}),h&&e.jsx("p",{className:"text-xs text-subtle text-center pt-2",children:h})]})]})})})});G.__docgenInfo={description:"",methods:[],displayName:"ChatThread",props:{messages:{required:!1,tsType:{name:"Array",elements:[{name:"ChatMessage"}],raw:"ChatMessage[]"},description:"",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Ask anything"',computed:!1}},inputValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}},onInputChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},disclaimer:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:`"GitLaw isn't a law firm and may make mistakes. Always review and consult a qualified attorney."`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const Z={title:"Components/Chat/ChatThread",component:G,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{placeholder:{control:"text",description:"Placeholder text for the input"},inputValue:{control:"text",description:"Current input value"},disclaimer:{control:"text",description:"Disclaimer text below input"}}},n=[{id:"1",role:"user",content:"Can you help me draft a mutual NDA?"},{id:"2",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Of course! I'd be happy to help you draft a mutual Non-Disclosure Agreement. To create the most appropriate NDA for your needs, I have a few questions:"}),e.jsxs("ol",{children:[e.jsx("li",{children:"What is the purpose of sharing confidential information?"}),e.jsx("li",{children:"Who are the parties involved?"}),e.jsx("li",{children:"How long should the confidentiality obligations last?"})]})]})},{id:"3",role:"user",content:"It's for a potential business partnership between my company and a software vendor. We'll be sharing product roadmaps and pricing information."},{id:"4",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Perfect, that helps clarify the context. For a business partnership involving product roadmaps and pricing information, I'll draft a mutual NDA that protects both parties equally. Here's what I recommend including:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Definition of confidential information covering technical, business, and financial data"}),e.jsx("li",{children:"Mutual obligations for both parties"}),e.jsx("li",{children:"Standard 2-3 year confidentiality period"}),e.jsx("li",{children:"Exceptions for publicly known information"}),e.jsx("li",{children:"Return or destruction of materials upon termination"})]})]})}],r={args:{messages:[],placeholder:"Ask anything about your legal documents..."},decorators:[s=>e.jsx("div",{style:{height:"500px",background:"#F7F6FF"},children:e.jsx(s,{})})]},o={args:{messages:n,placeholder:"Ask a follow-up question..."},decorators:[s=>e.jsx("div",{style:{height:"600px",background:"#F7F6FF"},children:e.jsx(s,{})})]},i={args:{messages:[{id:"1",role:"user",content:"What are the key clauses in a service agreement?"}],placeholder:"Ask anything..."},decorators:[s=>e.jsx("div",{style:{height:"400px",background:"#F7F6FF"},children:e.jsx(s,{})})]},l={args:{messages:[{id:"1",role:"assistant",content:e.jsx("p",{children:"Hello! I'm your legal document assistant. I can help you draft, review, and understand legal documents. What would you like to work on today?"})}],placeholder:"Type your question..."},decorators:[s=>e.jsx("div",{style:{height:"400px",background:"#F7F6FF"},children:e.jsx(s,{})})]},c={args:{messages:[...n,{id:"5",role:"user",content:"That sounds good. Can you also add a non-compete clause?"},{id:"6",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"I can include a non-compete provision, but I should mention a few important considerations:"}),e.jsx("p",{children:"Non-compete clauses in NDAs are less common and may face enforceability challenges depending on your jurisdiction. They're typically more appropriate in employment agreements or acquisition deals."}),e.jsx("p",{children:"For a vendor partnership, you might consider instead:"}),e.jsxs("ul",{children:[e.jsx("li",{children:"A non-solicitation clause (preventing poaching of employees/customers)"}),e.jsx("li",{children:"Restrictions on using confidential information for competitive purposes"})]}),e.jsx("p",{children:"Would you like me to include one of these alternatives, or do you specifically need a full non-compete clause?"})]})},{id:"7",role:"user",content:"Let's go with the non-solicitation clause instead."},{id:"8",role:"assistant",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Great choice. I'll add a non-solicitation clause that prevents either party from soliciting the other's employees or customers for a period of 12 months after the agreement ends. This is generally more enforceable and appropriate for a vendor partnership."}),e.jsx("p",{children:"I'm now ready to generate the complete NDA. Would you like me to proceed?"})]})}],placeholder:"Continue the conversation..."},decorators:[s=>e.jsx("div",{style:{height:"500px",background:"#F7F6FF"},children:e.jsx(s,{})})]},d={args:{messages:n.slice(0,2),placeholder:"Ask anything...",inputValue:"How long should the NDA last?"},decorators:[s=>e.jsx("div",{style:{height:"500px",background:"#F7F6FF"},children:e.jsx(s,{})})]},p={args:{messages:n.slice(0,2),placeholder:"Ask anything...",disclaimer:"This is a custom disclaimer message."},decorators:[s=>e.jsx("div",{style:{height:"500px",background:"#F7F6FF"},children:e.jsx(s,{})})]},u={args:{messages:n.slice(0,2),placeholder:"Ask anything...",disclaimer:""},decorators:[s=>e.jsx("div",{style:{height:"500px",background:"#F7F6FF"},children:e.jsx(s,{})})]};var g,y,f;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    messages: [],
    placeholder: "Ask anything about your legal documents..."
  },
  decorators: [Story => <div style={{
    height: "500px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var x,v,F;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages,
    placeholder: "Ask a follow-up question..."
  },
  decorators: [Story => <div style={{
    height: "600px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(F=(v=o.parameters)==null?void 0:v.docs)==null?void 0:F.source}}};var j,k,b;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: "1",
      role: "user",
      content: "What are the key clauses in a service agreement?"
    }],
    placeholder: "Ask anything..."
  },
  decorators: [Story => <div style={{
    height: "400px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(b=(k=i.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var w,N,A;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    messages: [{
      id: "1",
      role: "assistant",
      content: <p>
            Hello! I'm your legal document assistant. I can help you draft,
            review, and understand legal documents. What would you like to work
            on today?
          </p>
    }],
    placeholder: "Type your question..."
  },
  decorators: [Story => <div style={{
    height: "400px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(A=(N=l.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};var S,T,C;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    height: "500px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(C=(T=c.parameters)==null?void 0:T.docs)==null?void 0:C.source}}};var I,q,M;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    inputValue: "How long should the NDA last?"
  },
  decorators: [Story => <div style={{
    height: "500px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(M=(q=d.parameters)==null?void 0:q.docs)==null?void 0:M.source}}};var D,W,R;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    disclaimer: "This is a custom disclaimer message."
  },
  decorators: [Story => <div style={{
    height: "500px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(R=(W=p.parameters)==null?void 0:W.docs)==null?void 0:R.source}}};var V,_,H;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    messages: sampleMessages.slice(0, 2),
    placeholder: "Ask anything...",
    disclaimer: ""
  },
  decorators: [Story => <div style={{
    height: "500px",
    background: "#F7F6FF"
  }}>
        <Story />
      </div>]
}`,...(H=(_=u.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};const ee=["Empty","WithMessages","SingleUserMessage","SingleAssistantMessage","LongConversation","WithInputValue","CustomDisclaimer","NoDisclaimer"];export{p as CustomDisclaimer,r as Empty,c as LongConversation,u as NoDisclaimer,l as SingleAssistantMessage,i as SingleUserMessage,d as WithInputValue,o as WithMessages,ee as __namedExportsOrder,Z as default};
