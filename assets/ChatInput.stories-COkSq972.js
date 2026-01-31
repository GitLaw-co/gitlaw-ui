import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as t}from"./Icon-CCFihSvx.js";import"./index-DRjF_FHU.js";const ne=[{id:"draft",label:"Draft",icon:"draft"},{id:"review",label:"Review",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}],ie=({icon:s})=>{switch(s){case"draft":return e.jsx(t,{name:"file-plus",className:"size-4",color:"#5E49D6"});case"review":return e.jsx(t,{name:"file-search",className:"size-4",color:"#5E49D6"});case"summarize":return e.jsx(t,{name:"align-left",className:"size-4",color:"#5E49D6"});default:return null}},a=({status:s="active",size:H="l",placeholder:J="Draft a mutual NDA",value:g="",showQuickActions:K=!0,quickActions:X=ne,onChange:x,onSubmit:Y,onQuickActionClick:h,onAttachmentClick:Z,onSettingsClick:ee,onStopClick:te,className:f=""})=>{const ae=s==="working",se=s==="populated"||g.length>0,v=H==="l",w=v?"p-6":"p-4",re=v?"gap-6":"gap-4",y=v?"rounded-xl":"rounded-lg";return ae?e.jsx("div",{className:`
          bg-white border border-border ${y}
          shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
          flex flex-col ${w}
          w-full max-w-[624px]
          ${f}
        `,children:e.jsxs("div",{className:"flex items-center gap-2.5 p-4",children:[e.jsx("p",{className:"text-lg font-normal text-primary leading-[1.4]",children:"Working on your request..."}),e.jsx("button",{type:"button",onClick:te,className:"ml-auto p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"square",className:"size-6",color:"#5E49D6"})})]})}):e.jsxs("div",{className:`
        bg-white ${y}
        shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col ${re} ${w}
        w-full max-w-[624px]
        ${f}
      `,children:[e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx("input",{type:"text",value:g,onChange:r=>x==null?void 0:x(r.target.value),placeholder:J,className:`
            flex-1 text-lg font-normal leading-[1.4]
            text-text-primary placeholder:text-purple-300
            bg-transparent outline-none
          `}),se&&e.jsx("button",{type:"button",onClick:Y,className:`
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            `,children:e.jsx(t,{name:"arrow-up",className:"size-6",color:"#F7F6FF"})})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{type:"button",onClick:Z,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"paperclip",className:"size-6",color:"#5E49D6"})}),e.jsx("button",{type:"button",onClick:ee,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(t,{name:"settings-2",className:"size-6",color:"#5E49D6"})})]}),K&&e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:X.map(r=>e.jsxs("button",{type:"button",onClick:()=>h==null?void 0:h(r),className:`
                  bg-secondary hover:bg-secondary-hover
                  flex items-center gap-1 h-8 px-3 py-2 rounded
                  text-xs font-normal text-text-button leading-[1.4]
                  transition-colors
                `,children:[e.jsx(ie,{icon:r.icon}),e.jsx("span",{children:r.label})]},r.id))})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{status:{required:!1,tsType:{name:"union",raw:"'active' | 'populated' | 'working'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'working'"}]},description:"Input status",defaultValue:{value:"'active'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"}]},description:"Input size",defaultValue:{value:"'l'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Draft a mutual NDA'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:"''",computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"Show quick actions",defaultValue:{value:"true",computed:!1}},quickActions:{required:!1,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Quick action items",defaultValue:{value:`[
  { id: 'draft', label: 'Draft', icon: 'draft' },
  { id: 'review', label: 'Review', icon: 'review' },
  { id: 'summarize', label: 'Summarize', icon: 'summarize' },
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"On value change"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On submit"},onQuickActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: QuickAction) => void",signature:{arguments:[{type:{name:"QuickAction"},name:"action"}],return:{name:"void"}}},description:"On quick action click"},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On attachment click"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On settings click"},onStopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On stop click (when working)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ue={title:"Components/ChatInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[s=>e.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:e.jsx(s,{})})]},n={args:{status:"active",size:"l",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},i={args:{status:"populated",size:"l",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},o={args:{status:"working",size:"l",showQuickActions:!1}},l={args:{status:"active",size:"m",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},c={args:{status:"populated",size:"m",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},u={args:{status:"active",size:"l",placeholder:"Ask me anything...",value:"",showQuickActions:!1}},d={args:{status:"active",size:"l",placeholder:"What would you like to do?",value:"",showQuickActions:!0,quickActions:[{id:"draft",label:"Create contract",icon:"draft"},{id:"review",label:"Review document",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}]}},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Working State"}),e.jsx(a,{status:"working",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Active State (Empty)"}),e.jsx(a,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Populated State (With Text)"}),e.jsx(a,{status:"populated",size:"l",value:"User is typing here"})]})]})},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Large Size"}),e.jsx(a,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Medium Size"}),e.jsx(a,{status:"active",size:"m",placeholder:"Draft a mutual NDA"})]})]})};var b,k,A;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(A=(k=n.parameters)==null?void 0:k.docs)==null?void 0:A.source}}};var z,N,j;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(j=(N=i.parameters)==null?void 0:N.docs)==null?void 0:j.source}}};var D,S,Q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false
  }
}`,...(Q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:Q.source}}};var C,q,I;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(I=(q=l.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};var T,W,_;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(_=(W=c.parameters)==null?void 0:W.docs)==null?void 0:_.source}}};var E,P,O;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false
  }
}`,...(O=(P=u.parameters)==null?void 0:P.docs)==null?void 0:O.source}}};var V,$,M;d.parameters={...d.parameters,docs:{...(V=d.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(M=($=d.parameters)==null?void 0:$.docs)==null?void 0:M.source}}};var U,R,F;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(F=(R=m.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var L,B,G;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(G=(B=p.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};const de=["Active","Populated","Working","MediumActive","MediumPopulated","WithoutQuickActions","CustomQuickActions","AllStates","SizeComparison"];export{n as Active,m as AllStates,d as CustomQuickActions,l as MediumActive,c as MediumPopulated,i as Populated,p as SizeComparison,u as WithoutQuickActions,o as Working,de as __namedExportsOrder,ue as default};
