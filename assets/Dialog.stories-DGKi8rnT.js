import{j as e}from"./jsx-runtime-DiklIkkE.js";import{X as l}from"./X-euOaDNtq.js";import{C as P}from"./Check-D1-gLYxc.js";import"./index-DRjF_FHU.js";const r=({title:i,message:w,primaryLabel:L="Save changes",secondaryLabel:j="Discard changes",showCloseButton:T=!0,onPrimaryClick:N,onSecondaryClick:B,onClose:k,open:q=!0,className:_=""})=>q?e.jsxs("div",{className:`
        bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col gap-4 p-6 w-[360px]
        ${_}
      `,children:[e.jsxs("div",{className:"flex items-center justify-between min-h-12 p-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary leading-[1.4]",children:i}),T&&e.jsx("button",{type:"button",onClick:k,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(l,{className:"size-6",color:"#1b1b1f"})})]}),e.jsx("p",{className:"text-base font-normal text-text-primary leading-[1.4]",children:w}),e.jsxs("div",{className:"flex items-center justify-end gap-2 py-2",children:[e.jsxs("button",{type:"button",onClick:B,className:`
            flex-1 flex items-center justify-center gap-2 h-10 px-4 py-3
            border border-primary rounded
            text-sm font-normal text-text-button leading-[1.4]
            hover:bg-secondary transition-colors
          `,children:[e.jsx(l,{className:"size-6",color:"#5E49D6"}),e.jsx("span",{children:j})]}),e.jsxs("button",{type:"button",onClick:N,className:`
            flex-1 flex items-center justify-center gap-2 h-10 px-4 py-3
            bg-primary rounded
            text-sm font-normal text-text-negative leading-[1.4]
            hover:bg-primary-hover transition-colors
          `,children:[e.jsx(P,{className:"size-6",color:"#F7F6FF"}),e.jsx("span",{children:L})]})]})]}):null;r.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!0,tsType:{name:"string"},description:"Dialog title"},message:{required:!0,tsType:{name:"string"},description:"Dialog message/description"},primaryLabel:{required:!1,tsType:{name:"string"},description:"Primary button label",defaultValue:{value:"'Save changes'",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"Secondary button label",defaultValue:{value:"'Discard changes'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary button click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},open:{required:!1,tsType:{name:"boolean"},description:"Whether dialog is open",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const U={title:"Components/Dialog",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Dialog title"},message:{control:"text",description:"Dialog message/description"},primaryLabel:{control:"text",description:"Primary button label"},secondaryLabel:{control:"text",description:"Secondary button label"},showCloseButton:{control:"boolean",description:"Show close button"},open:{control:"boolean",description:"Whether dialog is open"}},decorators:[i=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(i,{})})]},a={args:{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",showCloseButton:!0,open:!0}},n={args:{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},t={args:{title:"Share document",message:"Share this document with your team members. They will receive an email notification.",primaryLabel:"Share",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},s={args:{title:"Session expired",message:"Your session has expired. Please log in again to continue.",primaryLabel:"Log in",secondaryLabel:"Cancel",showCloseButton:!1,open:!0}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(r,{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",open:!0}),e.jsx(r,{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",open:!0})]})};var c,d,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: 'Unsaved changes',
    message: 'This document has unsaved changes. Save them now before moving on.',
    primaryLabel: 'Save changes',
    secondaryLabel: 'Discard changes',
    showCloseButton: true,
    open: true
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Delete document',
    message: 'Are you sure you want to delete this document? This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Share document',
    message: 'Share this document with your team members. They will receive an email notification.',
    primaryLabel: 'Share',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var x,f,v;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Session expired',
    message: 'Your session has expired. Please log in again to continue.',
    primaryLabel: 'Log in',
    secondaryLabel: 'Cancel',
    showCloseButton: false,
    open: true
  }
}`,...(v=(f=s.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var C,S,D;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Dialog title="Unsaved changes" message="This document has unsaved changes. Save them now before moving on." primaryLabel="Save changes" secondaryLabel="Discard changes" open={true} />
      <Dialog title="Delete document" message="Are you sure you want to delete this document? This action cannot be undone." primaryLabel="Delete" secondaryLabel="Cancel" open={true} />
    </div>
}`,...(D=(S=o.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};const W=["Default","DeleteConfirmation","ShareDocument","WithoutCloseButton","DialogExamples"];export{a as Default,n as DeleteConfirmation,o as DialogExamples,t as ShareDocument,s as WithoutCloseButton,W as __namedExportsOrder,U as default};
