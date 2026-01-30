import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C}from"./Check-D1-gLYxc.js";import"./index-DRjF_FHU.js";const s=({message:i,variant:N="default",actionLabel:T="Action",showAction:S=!0,onActionClick:L,onClose:V,className:j=""})=>e.jsxs("div",{className:`
        bg-primary rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex items-center gap-4 px-4 py-2
        ${j}
      `,children:[e.jsx("p",{className:"text-sm font-normal text-text-negative leading-[1.4] max-w-[480px]",children:i}),S&&e.jsxs("button",{type:"button",onClick:L,className:`
            bg-primary hover:bg-primary-hover
            flex items-center gap-2 h-10 px-4 py-3 rounded
            text-sm font-normal text-text-negative leading-[1.4]
            transition-colors shrink-0
          `,children:[e.jsx(C,{className:"size-6",color:"#F7F6FF"}),e.jsx("span",{children:T})]})]});s.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:"Toast message"},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'success' | 'error' | 'warning'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'success'"},{name:"literal",value:"'error'"},{name:"literal",value:"'warning'"}]},description:"Toast variant",defaultValue:{value:"'default'",computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"Action button label",defaultValue:{value:"'Action'",computed:!1}},showAction:{required:!1,tsType:{name:"boolean"},description:"Show action button",defaultValue:{value:"true",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const D={title:"Components/Toast",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"Toast message"},variant:{control:"select",options:["default","success","error","warning"],description:"Toast variant"},actionLabel:{control:"text",description:"Action button label"},showAction:{control:"boolean",description:"Show action button"}},decorators:[i=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(i,{})})]},a={args:{message:"Reminder added for Service contract. We'll notify you on Sep 21, 2026.",actionLabel:"Action",showAction:!0}},t={args:{message:"Your changes have been saved successfully.",showAction:!1}},o={args:{message:"Document has been moved to trash.",actionLabel:"Undo",showAction:!0}},r={args:{message:'The document "Employment Agreement - John Smith" has been successfully shared with 5 team members. They will receive an email notification shortly.',actionLabel:"View",showAction:!0}},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(s,{message:"Reminder added for Service contract.",actionLabel:"Action",showAction:!0}),e.jsx(s,{message:"Document saved successfully.",showAction:!1}),e.jsx(s,{message:"File uploaded to folder 'Contracts'.",actionLabel:"View",showAction:!0})]})};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    message: "Reminder added for Service contract. We'll notify you on Sep 21, 2026.",
    actionLabel: 'Action',
    showAction: true
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,d,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    message: 'Your changes have been saved successfully.',
    showAction: false
  }
}`,...(p=(d=t.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,h,f;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    message: 'Document has been moved to trash.',
    actionLabel: 'Undo',
    showAction: true
  }
}`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var v,x,b;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    message: 'The document "Employment Agreement - John Smith" has been successfully shared with 5 team members. They will receive an email notification shortly.',
    actionLabel: 'View',
    showAction: true
  }
}`,...(b=(x=r.parameters)==null?void 0:x.docs)==null?void 0:b.source}}};var w,y,A;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toast message="Reminder added for Service contract." actionLabel="Action" showAction={true} />
      <Toast message="Document saved successfully." showAction={false} />
      <Toast message="File uploaded to folder 'Contracts'." actionLabel="View" showAction={true} />
    </div>
}`,...(A=(y=n.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};const E=["Default","WithoutAction","WithCustomAction","LongMessage","ToastExamples"];export{a as Default,r as LongMessage,n as ToastExamples,o as WithCustomAction,t as WithoutAction,E as __namedExportsOrder,D as default};
