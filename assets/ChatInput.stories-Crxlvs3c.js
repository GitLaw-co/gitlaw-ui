import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as w}from"./index-DRjF_FHU.js";import{C as s}from"./ChatInput-SxNj5kAD.js";import{M as x}from"./MenuItem-CgSDSbGk.js";import{I as ce}from"./colors-C61pH6SS.js";import{u as le}from"./uk-uk-B30oV7IO.js";import"./Tooltip-BJTLr6Td.js";import"./Switch-TBqG44c8.js";import"./Badge-BTb2MvAY.js";const be={title:"Components/Chat/ChatInput",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Static placeholder text (overrides animated placeholders)"},animatedPlaceholders:{control:"object",description:"Array of placeholders to rotate through with animation"},placeholderInterval:{control:"number",description:"Interval in ms between placeholder rotations (default: 3000)"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[t=>e.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:e.jsx(t,{})})]},a={args:{status:"active",size:"l",value:"",showQuickActions:!0}},o={args:{status:"populated",size:"l",value:"User is typing here",showQuickActions:!0}},r={args:{status:"working",size:"l",showQuickActions:!1}},n={args:{status:"active",size:"m",value:"",showQuickActions:!0}},i={args:{status:"populated",size:"m",value:"User is typing here",showQuickActions:!0}},c={args:{status:"active",size:"l",placeholder:"Ask me anything...",value:"",showQuickActions:!1}},l={args:{status:"active",size:"l",placeholder:"What would you like to do?",value:"",showQuickActions:!0,quickActions:[{id:"draft",label:"Create contract",icon:"draft"},{id:"review",label:"Review document",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}]}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Working State"}),e.jsx(s,{status:"working",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Active State (Animated Placeholders)"}),e.jsx(s,{status:"active",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Populated State (With Text)"}),e.jsx(s,{status:"populated",size:"l",value:"User is typing here"})]})]})},u={args:{status:"active",size:"l",value:"",showQuickActions:!0,placeholderInterval:3e3},parameters:{docs:{description:{story:"By default, the ChatInput cycles through animated placeholder suggestions every 3 seconds with a smooth fade transition."}}}},m={args:{status:"active",size:"l",value:"",showQuickActions:!0,animatedPlaceholders:["Ask about contract clauses","Explain indemnification terms","Find similar agreements","Check for compliance issues"],placeholderInterval:2500},parameters:{docs:{description:{story:"You can provide custom placeholder messages and adjust the rotation interval."}}}},p={args:{status:"active",size:"l",placeholder:"Type your question here...",value:"",showQuickActions:!0},parameters:{docs:{description:{story:"Providing a static `placeholder` prop disables the animated rotation."}}}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Large Size (with animated placeholders)"}),e.jsx(s,{status:"active",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Medium Size (with animated placeholders)"}),e.jsx(s,{status:"active",size:"m"})]})]})},de=()=>e.jsx("img",{src:le,alt:"UK",className:"size-6 rounded-sm object-cover"}),ue=()=>{const[t,v]=w.useState(!1),[oe,re]=w.useState(!0),ne=e.jsxs("div",{className:"w-[376px] p-2 bg-card rounded-lg shadow-card",children:[e.jsx(x,{primaryText:"Review agent changes",secondaryText:"Review AI changes before applying",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(ce,{name:"text-search",className:"size-6"}),width:"fill",showRSwitch:!0,rSwitchChecked:oe,rSwitchSize:"s",onRSwitchChange:ie=>re(ie)}),e.jsx(x,{primaryText:"Your jurisdiction",secondaryText:"England & Wales",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(de,{}),width:"fill",showRIcon1:!0,rIcon1:"chevron-right"})]});return e.jsx(s,{status:"active",size:"l",onSettingsClick:()=>v(!t),showSettingsDropdown:t,settingsDropdownContent:ne,settingsDropdownPosition:"top",onSettingsDropdownClose:()=>v(!1)})},g={render:()=>e.jsx(ue,{}),parameters:{docs:{description:{story:"Click the settings icon to toggle the jurisdiction and settings dropdown."}}}};var f,k,b;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true
  }
}`,...(b=(k=a.parameters)==null?void 0:k.docs)==null?void 0:b.source}}};var z,S,A;o.parameters={...o.parameters,docs:{...(z=o.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'l',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(A=(S=o.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var y,j,C;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false
  }
}`,...(C=(j=r.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var I,Q,P;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'm',
    value: '',
    showQuickActions: true
  }
}`,...(P=(Q=n.parameters)==null?void 0:Q.docs)==null?void 0:P.source}}};var N,W,T;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'm',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(T=(W=i.parameters)==null?void 0:W.docs)==null?void 0:T.source}}};var D,R,E;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false
  }
}`,...(E=(R=c.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var M,U,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'What would you like to do?',
    value: '',
    showQuickActions: true,
    quickActions: [{
      id: 'draft',
      label: 'Create contract',
      icon: 'draft'
    }, {
      id: 'review',
      label: 'Review document',
      icon: 'review'
    }, {
      id: 'summarize',
      label: 'Summarize',
      icon: 'summarize'
    }]
  }
}`,...(q=(U=l.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};var F,L,Y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Active State (Animated Placeholders)</h3>
        <ChatInput status="active" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
    </div>
}`,...(Y=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Y.source}}};var B,K,_;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
    placeholderInterval: 3000
  },
  parameters: {
    docs: {
      description: {
        story: 'By default, the ChatInput cycles through animated placeholder suggestions every 3 seconds with a smooth fade transition.'
      }
    }
  }
}`,...(_=(K=u.parameters)==null?void 0:K.docs)==null?void 0:_.source}}};var O,G,H;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true,
    animatedPlaceholders: ['Ask about contract clauses', 'Explain indemnification terms', 'Find similar agreements', 'Check for compliance issues'],
    placeholderInterval: 2500
  },
  parameters: {
    docs: {
      description: {
        story: 'You can provide custom placeholder messages and adjust the rotation interval.'
      }
    }
  }
}`,...(H=(G=m.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,V,X;p.parameters={...p.parameters,docs:{...(J=p.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Type your question here...',
    value: '',
    showQuickActions: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Providing a static \`placeholder\` prop disables the animated rotation.'
      }
    }
  }
}`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};var Z,$,ee;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Large Size (with animated placeholders)</h3>
        <ChatInput status="active" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Medium Size (with animated placeholders)</h3>
        <ChatInput status="active" size="m" />
      </div>
    </div>
}`,...(ee=($=h.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var se,te,ae;g.parameters={...g.parameters,docs:{...(se=g.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: () => <ChatInputWithDropdown />,
  parameters: {
    docs: {
      description: {
        story: 'Click the settings icon to toggle the jurisdiction and settings dropdown.'
      }
    }
  }
}`,...(ae=(te=g.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};const ze=["Active","Populated","Working","MediumActive","MediumPopulated","WithoutQuickActions","CustomQuickActions","AllStates","AnimatedPlaceholders","CustomAnimatedPlaceholders","StaticPlaceholder","SizeComparison","WithSettingsDropdown"];export{a as Active,d as AllStates,u as AnimatedPlaceholders,m as CustomAnimatedPlaceholders,l as CustomQuickActions,n as MediumActive,i as MediumPopulated,o as Populated,h as SizeComparison,p as StaticPlaceholder,g as WithSettingsDropdown,c as WithoutQuickActions,r as Working,ze as __namedExportsOrder,be as default};
