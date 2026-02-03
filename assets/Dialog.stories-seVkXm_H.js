import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as P,c as A}from"./Icon-CHBhNP2K.js";import{B as c}from"./Button-B5ps7E3t.js";import"./index-DRjF_FHU.js";const a={container:"bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-6 w-[400px]",header:"flex items-center justify-between min-h-12 py-3",title:"text-xl font-semibold text-foreground leading-[1.4]",closeButton:"p-1 hover:bg-secondary rounded transition-colors",closeIcon:"size-6",message:"text-base font-normal text-foreground leading-[1.4]",buttonContainer:"flex items-center justify-end gap-2 py-2"},i=({title:l,message:D,primaryLabel:T="Save changes",secondaryLabel:j="Discard changes",showCloseButton:B=!0,onPrimaryClick:N,onSecondaryClick:k,onClose:q,open:I=!0,className:_=""})=>I?e.jsxs("div",{className:`${a.container} ${_}`,children:[e.jsxs("div",{className:a.header,children:[e.jsx("h2",{className:a.title,children:l}),B&&e.jsx("button",{type:"button",onClick:q,className:a.closeButton,children:e.jsx(P,{name:"x",className:a.closeIcon,color:A.textPrimary})})]}),e.jsx("p",{className:a.message,children:D}),e.jsxs("div",{className:a.buttonContainer,children:[e.jsx(c,{variant:"outline",size:"m",showLeftIcon:!0,leftIconName:"x",onClick:k,className:"flex-1",children:j}),e.jsx(c,{variant:"primary",size:"m",showLeftIcon:!0,leftIconName:"check",onClick:N,className:"flex-1",children:T})]})]}):null;i.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!0,tsType:{name:"string"},description:"Dialog title"},message:{required:!0,tsType:{name:"string"},description:"Dialog message/description"},primaryLabel:{required:!1,tsType:{name:"string"},description:"Primary button label",defaultValue:{value:'"Save changes"',computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"Secondary button label",defaultValue:{value:'"Discard changes"',computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary button click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},open:{required:!1,tsType:{name:"boolean"},description:"Whether dialog is open",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const z={title:"Components/Dialog",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Dialog title"},message:{control:"text",description:"Dialog message/description"},primaryLabel:{control:"text",description:"Primary button label"},secondaryLabel:{control:"text",description:"Secondary button label"},showCloseButton:{control:"boolean",description:"Show close button"},open:{control:"boolean",description:"Whether dialog is open"}},decorators:[l=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(l,{})})]},n={args:{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",showCloseButton:!0,open:!0}},t={args:{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},s={args:{title:"Share document",message:"Share this document with your team members. They will receive an email notification.",primaryLabel:"Share",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},o={args:{title:"Session expired",message:"Your session has expired. Please log in again to continue.",primaryLabel:"Log in",secondaryLabel:"Cancel",showCloseButton:!1,open:!0}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(i,{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",open:!0}),e.jsx(i,{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",open:!0})]})};var u,d,m;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Unsaved changes',
    message: 'This document has unsaved changes. Save them now before moving on.',
    primaryLabel: 'Save changes',
    secondaryLabel: 'Discard changes',
    showCloseButton: true,
    open: true
  }
}`,...(m=(d=n.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Delete document',
    message: 'Are you sure you want to delete this document? This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(h=(g=t.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,b,f;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Share document',
    message: 'Share this document with your team members. They will receive an email notification.',
    primaryLabel: 'Share',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,v,w;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Session expired',
    message: 'Your session has expired. Please log in again to continue.',
    primaryLabel: 'Log in',
    secondaryLabel: 'Cancel',
    showCloseButton: false,
    open: true
  }
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var C,S,L;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Dialog title="Unsaved changes" message="This document has unsaved changes. Save them now before moving on." primaryLabel="Save changes" secondaryLabel="Discard changes" open={true} />
      <Dialog title="Delete document" message="Are you sure you want to delete this document? This action cannot be undone." primaryLabel="Delete" secondaryLabel="Cancel" open={true} />
    </div>
}`,...(L=(S=r.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};const Y=["Default","DeleteConfirmation","ShareDocument","WithoutCloseButton","DialogExamples"];export{n as Default,t as DeleteConfirmation,r as DialogExamples,s as ShareDocument,o as WithoutCloseButton,Y as __namedExportsOrder,z as default};
