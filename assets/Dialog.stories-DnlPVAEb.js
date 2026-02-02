import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as c}from"./Icon-CCFihSvx.js";import{B as d}from"./Button-DXAwNlu5.js";import{c as u}from"./colors-CkkS3ZSj.js";import"./index-DRjF_FHU.js";const a={container:"bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)] flex flex-col gap-4 p-6 w-[360px]",header:"flex items-center justify-between min-h-12 p-3",title:"text-xl font-semibold text-text-primary leading-[1.4]",closeButton:"p-1 hover:bg-secondary rounded transition-colors",closeIcon:"size-6",message:"text-base font-normal text-text-primary leading-[1.4]",buttonContainer:"flex items-center justify-end gap-2 py-2",buttonIcon:"size-4"},i=({title:l,message:j,primaryLabel:N="Save changes",secondaryLabel:B="Discard changes",showCloseButton:I=!0,onPrimaryClick:k,onSecondaryClick:q,onClose:P,open:_=!0,className:A=""})=>_?e.jsxs("div",{className:`${a.container} ${A}`,children:[e.jsxs("div",{className:a.header,children:[e.jsx("h2",{className:a.title,children:l}),I&&e.jsx("button",{type:"button",onClick:P,className:a.closeButton,children:e.jsx(c,{name:"x",className:a.closeIcon,color:u.textPrimary})})]}),e.jsx("p",{className:a.message,children:j}),e.jsxs("div",{className:a.buttonContainer,children:[e.jsx(d,{variant:"outline",size:"m",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"x",className:a.buttonIcon,color:u.iconPrimary}),onClick:q,className:"flex-1",children:B}),e.jsx(d,{variant:"primary",size:"m",showLeftIcon:!0,leftIcon:e.jsx(c,{name:"check",className:a.buttonIcon,color:u.iconNegative}),onClick:k,className:"flex-1",children:N})]})]}):null;i.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!0,tsType:{name:"string"},description:"Dialog title"},message:{required:!0,tsType:{name:"string"},description:"Dialog message/description"},primaryLabel:{required:!1,tsType:{name:"string"},description:"Primary button label",defaultValue:{value:"'Save changes'",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"Secondary button label",defaultValue:{value:"'Discard changes'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary button click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},open:{required:!1,tsType:{name:"boolean"},description:"Whether dialog is open",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const Y={title:"Components/Dialog",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Dialog title"},message:{control:"text",description:"Dialog message/description"},primaryLabel:{control:"text",description:"Primary button label"},secondaryLabel:{control:"text",description:"Secondary button label"},showCloseButton:{control:"boolean",description:"Show close button"},open:{control:"boolean",description:"Whether dialog is open"}},decorators:[l=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(l,{})})]},n={args:{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",showCloseButton:!0,open:!0}},t={args:{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},o={args:{title:"Share document",message:"Share this document with your team members. They will receive an email notification.",primaryLabel:"Share",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},s={args:{title:"Session expired",message:"Your session has expired. Please log in again to continue.",primaryLabel:"Log in",secondaryLabel:"Cancel",showCloseButton:!1,open:!0}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(i,{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",open:!0}),e.jsx(i,{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",open:!0})]})};var m,p,g;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    title: 'Unsaved changes',
    message: 'This document has unsaved changes. Save them now before moving on.',
    primaryLabel: 'Save changes',
    secondaryLabel: 'Discard changes',
    showCloseButton: true,
    open: true
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,y,b;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Delete document',
    message: 'Are you sure you want to delete this document? This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var f,x,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    title: 'Share document',
    message: 'Share this document with your team members. They will receive an email notification.',
    primaryLabel: 'Share',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var w,C,S;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    title: 'Session expired',
    message: 'Your session has expired. Please log in again to continue.',
    primaryLabel: 'Log in',
    secondaryLabel: 'Cancel',
    showCloseButton: false,
    open: true
  }
}`,...(S=(C=s.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var L,D,T;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Dialog title="Unsaved changes" message="This document has unsaved changes. Save them now before moving on." primaryLabel="Save changes" secondaryLabel="Discard changes" open={true} />
      <Dialog title="Delete document" message="Are you sure you want to delete this document? This action cannot be undone." primaryLabel="Delete" secondaryLabel="Cancel" open={true} />
    </div>
}`,...(T=(D=r.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};const $=["Default","DeleteConfirmation","ShareDocument","WithoutCloseButton","DialogExamples"];export{n as Default,t as DeleteConfirmation,r as DialogExamples,o as ShareDocument,s as WithoutCloseButton,$ as __namedExportsOrder,Y as default};
