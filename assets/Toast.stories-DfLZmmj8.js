import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as g}from"./Icon-CfPs8lnx.js";import{c as h}from"./colors-CUQOl70L.js";import"./index-DRjF_FHU.js";const a=({message:o,variant:v="default",actionLabel:m="Action",showAction:u=!0,onActionClick:p,onClose:y,className:f=""})=>e.jsxs("div",{className:`
        bg-primary rounded-lg shadow-card
        flex items-center gap-4 px-4 py-2
        ${f}
      `,children:[e.jsx("p",{className:"text-sm font-normal text-negative leading-[1.4] max-w-[480px]",children:o}),u&&e.jsxs("button",{type:"button",onClick:p,className:`
            bg-primary hover:bg-primary-hover
            flex items-center gap-2 h-10 px-4 py-3 rounded
            text-sm font-normal text-negative leading-[1.4]
            transition-colors duration-fast ease-gitlaw shrink-0
          `,children:[e.jsx(g,{name:"check",className:"size-6",color:h.iconNegative}),e.jsx("span",{children:m})]})]});a.__docgenInfo={description:"",methods:[],displayName:"Toast",props:{message:{required:!0,tsType:{name:"string"},description:"Toast message"},variant:{required:!1,tsType:{name:"union",raw:'"default" | "success" | "error" | "warning"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"success"'},{name:"literal",value:'"error"'},{name:"literal",value:'"warning"'}]},description:"Toast variant",defaultValue:{value:'"default"',computed:!1}},actionLabel:{required:!1,tsType:{name:"string"},description:"Action button label",defaultValue:{value:'"Action"',computed:!1}},showAction:{required:!1,tsType:{name:"boolean"},description:"Show action button",defaultValue:{value:"true",computed:!1}},onActionClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Action button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const T={title:"Components/Feedback/Toast",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{message:{control:"text",description:"Toast message"},variant:{control:"select",options:["default","success","error","warning"],description:"Toast variant"},actionLabel:{control:"text",description:"Action button label"},showAction:{control:"boolean",description:"Show action button"}},decorators:[o=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(o,{})})]},t={args:{message:"Reminder added for Service contract. We'll notify you on Sep 21, 2026.",actionLabel:"Action",showAction:!0}},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsx(a,{message:"Reminder added for Service contract.",actionLabel:"Action",showAction:!0}),e.jsx(a,{message:"Document saved successfully.",showAction:!1}),e.jsx(a,{message:"The document 'Employment Agreement - John Smith' has been successfully shared with 5 team members. They will receive an email notification shortly.",actionLabel:"View",showAction:!0})]})};var n,r,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    message: "Reminder added for Service contract. We'll notify you on Sep 21, 2026.",
    actionLabel: 'Action',
    showAction: true
  }
}`,...(i=(r=t.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};var c,l,d;s.parameters={...s.parameters,docs:{...(c=s.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <Toast message="Reminder added for Service contract." actionLabel="Action" showAction={true} />
      <Toast message="Document saved successfully." showAction={false} />
      <Toast message="The document 'Employment Agreement - John Smith' has been successfully shared with 5 team members. They will receive an email notification shortly." actionLabel="View" showAction={true} />
    </div>
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const S=["Default","AllVariants"];export{s as AllVariants,t as Default,S as __namedExportsOrder,T as default};
