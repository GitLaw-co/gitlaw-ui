import{j as e}from"./jsx-runtime-DiklIkkE.js";import"./index-DRjF_FHU.js";const Z=({className:t="size-6",color:s="currentColor"})=>e.jsx("svg",{className:t,viewBox:"0 0 24 24",fill:s,stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("rect",{width:"14",height:"14",x:"5",y:"5",rx:"2"})});Z.__docgenInfo={description:"",methods:[],displayName:"Square",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const G=({className:t="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m5 12 7-7 7 7"}),e.jsx("path",{d:"M12 19V5"})]});G.__docgenInfo={description:"",methods:[],displayName:"ArrowUp",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const J=({className:t="size-6",color:s="currentColor"})=>e.jsx("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:e.jsx("path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48"})});J.__docgenInfo={description:"",methods:[],displayName:"Paperclip",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const K=({className:t="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M20 7h-9"}),e.jsx("path",{d:"M14 17H5"}),e.jsx("circle",{cx:"17",cy:"17",r:"3"}),e.jsx("circle",{cx:"7",cy:"7",r:"3"})]});K.__docgenInfo={description:"",methods:[],displayName:"Settings2",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const X=({className:t="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"}),e.jsx("path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}),e.jsx("path",{d:"M9 15h6"}),e.jsx("path",{d:"M12 18v-6"})]});X.__docgenInfo={description:"",methods:[],displayName:"FilePlus",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const Y=({className:t="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M14 2v4a2 2 0 0 0 2 2h4"}),e.jsx("path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"}),e.jsx("path",{d:"m9 18-1.5-1.5"}),e.jsx("circle",{cx:"5",cy:"14",r:"3"})]});Y.__docgenInfo={description:"",methods:[],displayName:"FileSearch",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ee=({className:t="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:t,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M21 6H3"}),e.jsx("path",{d:"M15 12H3"}),e.jsx("path",{d:"M17 18H3"})]});ee.__docgenInfo={description:"",methods:[],displayName:"AlignLeft",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const de=[{id:"draft",label:"Draft",icon:"draft"},{id:"review",label:"Review",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}],pe=({icon:t})=>{switch(t){case"draft":return e.jsx(X,{className:"size-4",color:"#5E49D6"});case"review":return e.jsx(Y,{className:"size-4",color:"#5E49D6"});case"summarize":return e.jsx(ee,{className:"size-4",color:"#5E49D6"});default:return null}},a=({status:t="active",size:s="l",placeholder:te="Draft a mutual NDA",value:v="",showQuickActions:se=!0,quickActions:ae=de,onChange:h,onSubmit:re,onQuickActionClick:f,onAttachmentClick:ne,onSettingsClick:ie,onStopClick:oe,className:g=""})=>{const le=t==="working",ce=t==="populated"||v.length>0,x=s==="l",y=x?"p-6":"p-4",ue=x?"gap-6":"gap-4",k=x?"rounded-xl":"rounded-lg";return le?e.jsx("div",{className:`
          bg-white border border-border ${k}
          shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
          flex flex-col ${y}
          w-full max-w-[624px]
          ${g}
        `,children:e.jsxs("div",{className:"flex items-center gap-2.5 p-4",children:[e.jsx("p",{className:"text-lg font-normal text-primary leading-[1.4]",children:"Working on your request..."}),e.jsx("button",{type:"button",onClick:oe,className:"ml-auto p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(Z,{className:"size-6",color:"#5E49D6"})})]})}):e.jsxs("div",{className:`
        bg-white ${k}
        shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col ${ue} ${y}
        w-full max-w-[624px]
        ${g}
      `,children:[e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx("input",{type:"text",value:v,onChange:r=>h==null?void 0:h(r.target.value),placeholder:te,className:`
            flex-1 text-lg font-normal leading-[1.4]
            text-text-primary placeholder:text-purple-300
            bg-transparent outline-none
          `}),ce&&e.jsx("button",{type:"button",onClick:re,className:`
              bg-primary hover:bg-primary-hover
              p-1 rounded transition-colors shrink-0
            `,children:e.jsx(G,{className:"size-6",color:"#F7F6FF"})})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{type:"button",onClick:ne,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(J,{className:"size-6",color:"#5E49D6"})}),e.jsx("button",{type:"button",onClick:ie,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(K,{className:"size-6",color:"#5E49D6"})})]}),se&&e.jsx("div",{className:"flex flex-wrap items-center justify-center gap-2",children:ae.map(r=>e.jsxs("button",{type:"button",onClick:()=>f==null?void 0:f(r),className:`
                  bg-secondary hover:bg-secondary-hover
                  flex items-center gap-1 h-8 px-3 py-2 rounded
                  text-xs font-normal text-text-button leading-[1.4]
                  transition-colors
                `,children:[e.jsx(pe,{icon:r.icon}),e.jsx("span",{children:r.label})]},r.id))})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"ChatInput",props:{status:{required:!1,tsType:{name:"union",raw:"'active' | 'populated' | 'working'",elements:[{name:"literal",value:"'active'"},{name:"literal",value:"'populated'"},{name:"literal",value:"'working'"}]},description:"Input status",defaultValue:{value:"'active'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'l' | 'm'",elements:[{name:"literal",value:"'l'"},{name:"literal",value:"'m'"}]},description:"Input size",defaultValue:{value:"'l'",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text",defaultValue:{value:"'Draft a mutual NDA'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Input value",defaultValue:{value:"''",computed:!1}},showQuickActions:{required:!1,tsType:{name:"boolean"},description:"Show quick actions",defaultValue:{value:"true",computed:!1}},quickActions:{required:!1,tsType:{name:"Array",elements:[{name:"QuickAction"}],raw:"QuickAction[]"},description:"Quick action items",defaultValue:{value:`[
  { id: 'draft', label: 'Draft', icon: 'draft' },
  { id: 'review', label: 'Review', icon: 'review' },
  { id: 'summarize', label: 'Summarize', icon: 'summarize' },
]`,computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"On value change"},onSubmit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On submit"},onQuickActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(action: QuickAction) => void",signature:{arguments:[{type:{name:"QuickAction"},name:"action"}],return:{name:"void"}}},description:"On quick action click"},onAttachmentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On attachment click"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On settings click"},onStopClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"On stop click (when working)"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const fe={title:"Components/ChatInput",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Placeholder text"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[t=>e.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:e.jsx(t,{})})]},n={args:{status:"active",size:"l",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},i={args:{status:"populated",size:"l",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},o={args:{status:"working",size:"l",showQuickActions:!1}},l={args:{status:"active",size:"m",placeholder:"Draft a mutual NDA",value:"",showQuickActions:!0}},c={args:{status:"populated",size:"m",placeholder:"Draft a mutual NDA",value:"User is typing here",showQuickActions:!0}},u={args:{status:"active",size:"l",placeholder:"Ask me anything...",value:"",showQuickActions:!1}},d={args:{status:"active",size:"l",placeholder:"What would you like to do?",value:"",showQuickActions:!0,quickActions:[{id:"draft",label:"Create contract",icon:"draft"},{id:"review",label:"Review document",icon:"review"},{id:"summarize",label:"Summarize",icon:"summarize"}]}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Working State"}),e.jsx(a,{status:"working",size:"l"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Active State (Empty)"}),e.jsx(a,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Populated State (With Text)"}),e.jsx(a,{status:"populated",size:"l",value:"User is typing here"})]})]})},m={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Large Size"}),e.jsx(a,{status:"active",size:"l",placeholder:"Draft a mutual NDA"})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-semibold mb-4 text-text-secondary",children:"Medium Size"}),e.jsx(a,{status:"active",size:"m",placeholder:"Draft a mutual NDA"})]})]})};var j,w,z;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(z=(w=n.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var N,b,A;i.parameters={...i.parameters,docs:{...(N=i.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'l',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(A=(b=i.parameters)==null?void 0:b.docs)==null?void 0:A.source}}};var D,S,q;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    status: 'working',
    size: 'l',
    showQuickActions: false
  }
}`,...(q=(S=o.parameters)==null?void 0:S.docs)==null?void 0:q.source}}};var C,T,_;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: '',
    showQuickActions: true
  }
}`,...(_=(T=l.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var Q,V,I;c.parameters={...c.parameters,docs:{...(Q=c.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    status: 'populated',
    size: 'm',
    placeholder: 'Draft a mutual NDA',
    value: 'User is typing here',
    showQuickActions: true
  }
}`,...(I=(V=c.parameters)==null?void 0:V.docs)==null?void 0:I.source}}};var L,W,M;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    placeholder: 'Ask me anything...',
    value: '',
    showQuickActions: false
  }
}`,...(M=(W=u.parameters)==null?void 0:W.docs)==null?void 0:M.source}}};var P,E,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(F=(E=d.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};var U,B,H;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(H=(B=p.parameters)==null?void 0:B.docs)==null?void 0:H.source}}};var O,$,R;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(R=($=m.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};const xe=["Active","Populated","Working","MediumActive","MediumPopulated","WithoutQuickActions","CustomQuickActions","AllStates","SizeComparison"];export{n as Active,p as AllStates,d as CustomQuickActions,l as MediumActive,c as MediumPopulated,i as Populated,m as SizeComparison,u as WithoutQuickActions,o as Working,xe as __namedExportsOrder,fe as default};
