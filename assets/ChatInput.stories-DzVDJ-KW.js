import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as t}from"./Icon-CCFihSvx.js";import{c as a}from"./colors-CkkS3ZSj.js";import"./index-DRjF_FHU.js";const ie=[{id:"draft",label:"Draft",icon:"draft"},{id:"review",label:"Review",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}],oe=({icon:r})=>{switch(r){case"draft":return e.jsx(t,{name:"file-plus",className:"size-4",color:a.iconPrimary});case"review":return e.jsx(t,{name:"file-search",className:"size-4",color:a.iconPrimary});case"summarize":return e.jsx(t,{name:"align-left",className:"size-4",color:a.iconPrimary});default:return null}},s=({status:r="active",size:J="l",placeholder:K="Draft a mutual NDA",value:f="",showQuickActions:X=!0,quickActions:Y=ie,onChange:h,onSubmit:Z,onQuickActionClick:v,onAttachmentClick:ee,onSettingsClick:te,onStopClick:ae,className:y=""})=>{const se=r==="working",re=r==="populated"||f.length>0,g=J==="l",w=g?"p-6":"p-4",ne=g?"gap-6":"gap-4",b=g?"rounded-xl":"rounded-lg";return se?e.jsx("div",{className:`
          bg-white border border-border ${b}
          shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
          flex flex-col ${w}
          w-full max-w-[624px]
          ${y}
        `,children:e.jsxs("div",{className:"flex items-center gap-2.5 p-4",children:[e.jsx("p",{className:"text-lg font-normal text-primary leading-[1.4]",children:"Working on your request..."}),e.jsx("button",{type:"button",onClick:ae,className:"ml-auto p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"square",className:"size-6",color:a.iconPrimary})})]})}):e.jsxs("div",{className:`
        bg-white ${b}
        shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col ${ne} ${w}
        w-full max-w-[624px]
        ${y}
      `,children:[e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx("input",{type:"text",value:f,onChange:n=>h==null?void 0:h(n.target.value),placeholder:K,className:`
            flex-1 text-lg font-normal leading-[1.4]
            text-text-primary placeholder:text-purple-300
            bg-transparent outline-none
          `}),re&&e.jsx("button",{type:"button",onClick:Z,className:`
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            `,children:e.jsx(t,{name:"arrow-up",className:"size-6",color:a.iconNegative})})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{type:"button",onClick:ee,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"paperclip",className:"size-6",color:a.iconPrimary})}),e.jsx("button",{type:"button",onClick:te,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"settings-2",className:"size-6",color:a.iconPrimary})})]}),X&&e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:Y.map(n=>e.jsxs("button",{type:"button",onClick:()=>v==null?void 0:v(n),className:`
                  bg-secondary hover:bg-secondary-hover
                  flex items-center gap-1 h-8 px-3 py-2 rounded
                  text-xs font-normal text-text-button leading-[1.4]
                  transition-colors
                `,children:[e.jsx(oe,{icon:n.icon}),e.jsx("span",{children:n.label})]},n.id))})]})]})};s.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{status:{required:!1,tsType:{name:"union",raw:"'active' | 'populated' | 'working'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'working'"}]},description:"Input status",defaultValue:{value:"'active'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"}]},description:"Input size",defaultValue:{value:"'l'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Draft a mutual NDA'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:"''",computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"Show quick actions",defaultValue:{value:"true",computed:!1}},quickActions:{required:!1,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Quick action items",defaultValue:{value:`[
  { id: 'draft', label: 'Draft', icon: 'draft' },
  { id: 'review', label: 'Review', icon: 'review' },
  { id: 'summarize', label: 'Summarize', icon: 'summarize' },
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"On value change"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On submit"},onQuickActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: QuickAction) => void",signature:{arguments:[{type:{name:"QuickAction"},name:"action"}],return:{name:"void"}}},description:"On quick action click"},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On attachment click"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On settings click"},onStopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On stop click (when working)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const me={title:"Components/ChatInput",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[r=>e.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:e.jsx(r,{})})]},i={args:{status:"active",size:"l",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},o={args:{status:"populated",size:"l",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},l={args:{status:"working",size:"l",showQuickActions:!1}},c={args:{status:"active",size:"m",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},u={args:{status:"populated",size:"m",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},d={args:{status:"active",size:"l",placeholder:"Ask me anything...",value:"",showQuickActions:!1}},m={args:{status:"active",size:"l",placeholder:"What would you like to do?",value:"",showQuickActions:!0,quickActions:[{id:"draft",label:"Create contract",icon:"draft"},{id:"review",label:"Review document",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}]}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Working State"}),e.jsx(s,{status:"working",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Active State (Empty)"}),e.jsx(s,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Populated State (With Text)"}),e.jsx(s,{status:"populated",size:"l",value:"User is typing here"})]})]})},x={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Large Size"}),e.jsx(s,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Medium Size"}),e.jsx(s,{status:"active",size:"m",placeholder:"Draft a mutual NDA"})]})]})};var k,A,z;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(z=(A=i.parameters)==null?void 0:A.docs)==null?void 0:z.source}}};var N,j,D;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(D=(j=o.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var S,Q,C;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false
  }
}`,...(C=(Q=l.parameters)==null?void 0:Q.docs)==null?void 0:C.source}}};var q,I,T;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(T=(I=c.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var P,W,_;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(_=(W=u.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var O,V,$;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false
  }
}`,...($=(V=d.parameters)==null?void 0:V.docs)==null?void 0:$.source}}};var M,U,R;m.parameters={...m.parameters,docs:{...(M=m.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(R=(U=m.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var E,L,B;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Active State (Empty)</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
    </div>
}`,...(B=(L=p.parameters)==null?void 0:L.docs)==null?void 0:B.source}}};var F,G,H;x.parameters={...x.parameters,docs:{...(F=x.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Large Size</h3>
        <ChatInput status="active" size="l" placeholder="Draft a mutual NDA" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-text-secondary">Medium Size</h3>
        <ChatInput status="active" size="m" placeholder="Draft a mutual NDA" />
      </div>
    </div>
}`,...(H=(G=x.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};const pe=["Active","Populated","Working","MediumActive","MediumPopulated","WithoutQuickActions","CustomQuickActions","AllStates","SizeComparison"];export{i as Active,p as AllStates,m as CustomQuickActions,c as MediumActive,u as MediumPopulated,o as Populated,x as SizeComparison,d as WithoutQuickActions,l as Working,pe as __namedExportsOrder,me as default};
