import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as l}from"./Icon-CCFihSvx.js";import{B as c}from"./Button-C6Y3-Hxg.js";import"./index-DRjF_FHU.js";const r=({title:i,message:C,primaryLabel:T="Save changes",secondaryLabel:j="Discard changes",showCloseButton:N=!0,onPrimaryClick:B,onSecondaryClick:k,onClose:q,open:_=!0,className:I=""})=>_?e.jsxs("div",{className:`
        bg-white rounded-lg shadow-[0px_10px_40px_0px_rgba(0,0,0,0.05)]
        flex flex-col gap-4 p-6 w-[360px]
        ${I}
      `,children:[e.jsxs("div",{className:"flex items-center justify-between min-h-12 p-3",children:[e.jsx("h2",{className:"text-xl font-semibold text-text-primary leading-[1.4]",children:i}),N&&e.jsx("button",{type:"button",onClick:q,className:"p-1 hover:bg-secondary rounded transition-colors",children:e.jsx(l,{name:"x",className:"size-6",color:"#1b1b1f"})})]}),e.jsx("p",{className:"text-base font-normal text-text-primary leading-[1.4]",children:C}),e.jsxs("div",{className:"flex items-center justify-end gap-2 py-2",children:[e.jsx(c,{variant:"outline",size:"m",showLeftIcon:!0,leftIcon:e.jsx(l,{name:"x",className:"size-5",color:"#5E49D6"}),onClick:k,className:"flex-1",children:j}),e.jsx(c,{variant:"primary",size:"m",showLeftIcon:!0,leftIcon:e.jsx(l,{name:"check",className:"size-5",color:"#F7F6FF"}),onClick:B,className:"flex-1",children:T})]})]}):null;r.__docgenInfo={description:"",methods:[],displayName:"Dialog",props:{title:{required:!0,tsType:{name:"string"},description:"Dialog title"},message:{required:!0,tsType:{name:"string"},description:"Dialog message/description"},primaryLabel:{required:!1,tsType:{name:"string"},description:"Primary button label",defaultValue:{value:"'Save changes'",computed:!1}},secondaryLabel:{required:!1,tsType:{name:"string"},description:"Secondary button label",defaultValue:{value:"'Discard changes'",computed:!1}},showCloseButton:{required:!1,tsType:{name:"boolean"},description:"Show close button",defaultValue:{value:"true",computed:!1}},onPrimaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Primary button click handler"},onSecondaryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Secondary button click handler"},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Close button click handler"},open:{required:!1,tsType:{name:"boolean"},description:"Whether dialog is open",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const V={title:"Components/Dialog",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{title:{control:"text",description:"Dialog title"},message:{control:"text",description:"Dialog message/description"},primaryLabel:{control:"text",description:"Primary button label"},secondaryLabel:{control:"text",description:"Secondary button label"},showCloseButton:{control:"boolean",description:"Show close button"},open:{control:"boolean",description:"Whether dialog is open"}},decorators:[i=>e.jsx("div",{className:"bg-page-background p-8",children:e.jsx(i,{})})]},a={args:{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",showCloseButton:!0,open:!0}},s={args:{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},n={args:{title:"Share document",message:"Share this document with your team members. They will receive an email notification.",primaryLabel:"Share",secondaryLabel:"Cancel",showCloseButton:!0,open:!0}},t={args:{title:"Session expired",message:"Your session has expired. Please log in again to continue.",primaryLabel:"Log in",secondaryLabel:"Cancel",showCloseButton:!1,open:!0}},o={render:()=>e.jsxs("div",{className:"flex flex-col gap-8",children:[e.jsx(r,{title:"Unsaved changes",message:"This document has unsaved changes. Save them now before moving on.",primaryLabel:"Save changes",secondaryLabel:"Discard changes",open:!0}),e.jsx(r,{title:"Delete document",message:"Are you sure you want to delete this document? This action cannot be undone.",primaryLabel:"Delete",secondaryLabel:"Cancel",open:!0})]})};var u,d,m;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    title: 'Unsaved changes',
    message: 'This document has unsaved changes. Save them now before moving on.',
    primaryLabel: 'Save changes',
    secondaryLabel: 'Discard changes',
    showCloseButton: true,
    open: true
  }
}`,...(m=(d=a.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,g,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    title: 'Delete document',
    message: 'Are you sure you want to delete this document? This action cannot be undone.',
    primaryLabel: 'Delete',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(h=(g=s.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var y,b,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    title: 'Share document',
    message: 'Share this document with your team members. They will receive an email notification.',
    primaryLabel: 'Share',
    secondaryLabel: 'Cancel',
    showCloseButton: true,
    open: true
  }
}`,...(f=(b=n.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var x,v,w;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    title: 'Session expired',
    message: 'Your session has expired. Please log in again to continue.',
    primaryLabel: 'Log in',
    secondaryLabel: 'Cancel',
    showCloseButton: false,
    open: true
  }
}`,...(w=(v=t.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,D,L;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-8">
      <Dialog title="Unsaved changes" message="This document has unsaved changes. Save them now before moving on." primaryLabel="Save changes" secondaryLabel="Discard changes" open={true} />
      <Dialog title="Delete document" message="Are you sure you want to delete this document? This action cannot be undone." primaryLabel="Delete" secondaryLabel="Cancel" open={true} />
    </div>
}`,...(L=(D=o.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};const F=["Default","DeleteConfirmation","ShareDocument","WithoutCloseButton","DialogExamples"];export{a as Default,s as DeleteConfirmation,o as DialogExamples,n as ShareDocument,t as WithoutCloseButton,F as __namedExportsOrder,V as default};
