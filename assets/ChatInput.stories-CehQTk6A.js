import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as s,c as a}from"./Icon-CHBhNP2K.js";import{T as x}from"./Tooltip-CxYUL3b1.js";import"./index-DRjF_FHU.js";const oe=[{id:"draft",label:"Draft",icon:"draft"},{id:"review",label:"Review",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}],le={draft:"Draft a new document",review:"Review a document",summarize:"Summarize a document"},ce=({icon:n})=>{switch(n){case"draft":return e.jsx(s,{name:"file-plus",className:"size-4",color:a.iconPrimary});case"review":return e.jsx(s,{name:"file-search",className:"size-4",color:a.iconPrimary});case"summarize":return e.jsx(s,{name:"align-left",className:"size-4",color:a.iconPrimary});default:return null}},r=({status:n="active",size:K="l",placeholder:X="Draft a mutual NDA",value:b="",showQuickActions:Y=!0,quickActions:Z=oe,onChange:v,onSubmit:ee,onQuickActionClick:f,onAttachmentClick:te,onSettingsClick:se,onStopClick:ae,className:w=""})=>{const re=n==="working",ne=n==="populated"||b.length>0,g=K==="l",y=g?"p-6":"p-4",ie=g?"gap-6":"gap-4",k=g?"rounded-xl":"rounded-lg";return re?e.jsx("div",{className:`
          bg-white border border-border ${k}
          shadow-card
          flex flex-col ${y}
          w-full max-w-[624px]
          ${w}
        `,children:e.jsxs("div",{className:"flex items-center gap-2.5 p-4",children:[e.jsx("p",{className:"text-lg font-normal text-primary leading-[1.4]",children:"Working on your request..."}),e.jsx("button",{type:"button",onClick:ae,className:"ml-auto p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(s,{name:"square",className:"size-6",color:a.iconPrimary})})]})}):e.jsxs("div",{className:`
        bg-white ${k}
        shadow-card
        flex flex-col ${ie} ${y}
        w-full max-w-[624px]
        ${w}
      `,children:[e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx("input",{type:"text",value:b,onChange:t=>v==null?void 0:v(t.target.value),placeholder:X,className:`
            flex-1 text-lg font-normal leading-[1.4]
            text-foreground placeholder:text-purple-300
            bg-transparent outline-none
          `}),ne&&e.jsx("button",{type:"button",onClick:ee,className:`
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            `,children:e.jsx(s,{name:"arrow-up",className:"size-6",color:a.iconNegative})})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx(x,{content:"Add a file",type:"purple",position:"bottom",size:"s",children:e.jsx("button",{type:"button",onClick:te,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(s,{name:"paperclip",className:"size-6",color:a.iconPrimary})})}),e.jsx(x,{content:"Configure chat",type:"purple",position:"bottom",size:"s",children:e.jsx("button",{type:"button",onClick:se,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(s,{name:"settings-2",className:"size-6",color:a.iconPrimary})})})]}),Y&&e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:Z.map(t=>e.jsx(x,{content:le[t.icon]||t.label,type:"purple",position:"bottom",size:"s",children:e.jsxs("button",{type:"button",onClick:()=>f==null?void 0:f(t),className:`
                    bg-secondary hover:bg-secondary-hover
                    flex items-center gap-1 h-8 px-3 py-2 rounded
                    text-xs font-normal text-foreground-button leading-[1.4]
                    transition-colors
                  `,children:[e.jsx(ce,{icon:t.icon}),e.jsx("span",{children:t.label})]})},t.id))})]})]})};r.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{status:{required:!1,tsType:{name:"union",raw:'"active" | "populated" | "working"',elements:[{name:"literal",value:'"active"'},{name:"literal",value:'"populated"'},{name:"literal",value:'"working"'}]},description:"Input status",defaultValue:{value:'"active"',computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"l" | "m"',elements:[{name:"literal",value:'"l"'},{name:"literal",value:'"m"'}]},description:"Input size",defaultValue:{value:'"l"',computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:'"Draft a mutual NDA"',computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:'""',computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"Show quick actions",defaultValue:{value:"true",computed:!1}},quickActions:{required:!1,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Quick action items",defaultValue:{value:`[
  { id: "draft", label: "Draft", icon: "draft" },
  { id: "review", label: "Review", icon: "review" },
  { id: "summarize", label: "Summarize", icon: "summarize" },
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"On value change"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On submit"},onQuickActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: QuickAction) => void",signature:{arguments:[{type:{name:"QuickAction"},name:"action"}],return:{name:"void"}}},description:"On quick action click"},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On attachment click"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On settings click"},onStopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On stop click (when working)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const he={title:"Components/ChatInput",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[n=>e.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:e.jsx(n,{})})]},i={args:{status:"active",size:"l",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},o={args:{status:"populated",size:"l",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},l={args:{status:"working",size:"l",showQuickActions:!1}},c={args:{status:"active",size:"m",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},u={args:{status:"populated",size:"m",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},d={args:{status:"active",size:"l",placeholder:"Ask me anything...",value:"",showQuickActions:!1}},m={args:{status:"active",size:"l",placeholder:"What would you like to do?",value:"",showQuickActions:!0,quickActions:[{id:"draft",label:"Create contract",icon:"draft"},{id:"review",label:"Review document",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}]}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Working State"}),e.jsx(r,{status:"working",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Active State (Empty)"}),e.jsx(r,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Populated State (With Text)"}),e.jsx(r,{status:"populated",size:"l",value:"User is typing here"})]})]})},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Large Size"}),e.jsx(r,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Medium Size"}),e.jsx(r,{status:"active",size:"m",placeholder:"Draft a mutual NDA"})]})]})};var z,A,N;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(N=(A=i.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var j,D,S;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(S=(D=o.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var Q,C,q;l.parameters={...l.parameters,docs:{...(Q=l.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false
  }
}`,...(q=(C=l.parameters)==null?void 0:C.docs)==null?void 0:q.source}}};var T,I,P;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(P=(I=c.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};var W,O,V;u.parameters={...u.parameters,docs:{...(W=u.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(V=(O=u.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var $,M,R;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false
  }
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var U,E,_;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(_=(E=m.parameters)==null?void 0:E.docs)==null?void 0:_.source}}};var L,B,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Active State (Empty)</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
    </div>
}`,...(F=(B=p.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Large Size</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Medium Size</h3>
        <ChatInput status="active" size="m" placeholder="Draft a mutual NDA" />
      </div>
    </div>
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const ve=["Active","Populated","Working","MediumActive","MediumPopulated","WithoutQuickActions","CustomQuickActions","AllStates","SizeComparison"];export{i as Active,p as AllStates,m as CustomQuickActions,c as MediumActive,u as MediumPopulated,o as Populated,h as SizeComparison,d as WithoutQuickActions,l as Working,ve as __namedExportsOrder,he as default};
