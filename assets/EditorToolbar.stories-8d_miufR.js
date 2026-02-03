import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as m,c}from"./Icon-CHBhNP2K.js";import{B as y}from"./Button-B5ps7E3t.js";import{T as ee}from"./Tooltip-CxYUL3b1.js";import"./index-DRjF_FHU.js";const o=({icon:s,label:n,onClick:r,size:i,isFirst:d=!1,disabled:a=!1})=>{const u=i==="xs"?"xs":"s",g=i==="xs"?"size-3":"size-4",T=a?c.iconSecondary:c.iconBlack;return e.jsx(ee,{content:n,type:"purple",position:"bottom",size:"s",children:e.jsx("div",{className:d?"":"border-l border-purple-200",children:e.jsx(y,{variant:"icon",size:u,onClick:r,disabled:a,leftIcon:e.jsx(m,{name:s,className:g,color:T}),className:"rounded-none"})})})},ke=({icon:s,label:n,onClick:r,size:i,isFirst:d=!1})=>{const a=i==="xs"?"h-6":"h-8",u=i==="xs"?"size-3":"size-4",g=i==="xs"?"size-2.5":"size-3";return e.jsx(ee,{content:n,type:"purple",position:"bottom",size:"s",children:e.jsxs("button",{onClick:r,className:`
          ${a} flex items-center justify-center gap-0 px-1
          hover:bg-secondary/30 transition-colors rounded-none
          ${d?"":"border-l border-purple-200"}
        `,children:[e.jsx(m,{name:s,className:u,color:c.iconBlack}),e.jsx(m,{name:"chevron-down",className:g,color:c.iconBlack})]})})},he=({onClick:s,size:n})=>{const r=n==="xs"?"xs":"s",i=n==="xs"?"size-3":"size-4";return e.jsx(y,{variant:"ghost",size:r,onClick:s,showRightIcon:!0,rightIcon:e.jsx(m,{name:"chevron-down",className:i,color:c.iconBlack}),className:"rounded-none text-foreground",children:"Normal text"})},l=({children:s})=>e.jsx("div",{className:"flex items-start flex-wrap gap-0 border border-purple-300 rounded overflow-clip",children:s}),t=({size:s="xs",status:n="editing",onUndo:r,undoDisabled:i=!1,onRedo:d,redoDisabled:a=!1,onTextStyle:u,onBold:g,onItalic:T,onUnderline:se,onStrikethrough:oe,onList:ie,onOrderedList:ne,onLink:te,onImage:re,onTable:ae,onHorizontalRule:le,onQuote:ce,onCode:de,onHighlight:ue,onSuggestEdits:ge,onBackToEdit:me,className:C=""})=>{const z=s==="xs"?"xs":"s";if(n==="reviewing"){const pe=s==="xs"?"h-10":"h-12",xe=s==="xs"?"text-xs":"text-sm",be=s==="xs"?"size-4":"size-6";return e.jsxs("div",{className:`
          p-2 rounded-lg
          flex items-center justify-between
          ${pe}
          ${C}
        `,children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(m,{name:"history",className:be,color:c.iconBlack}),e.jsx("span",{className:`${xe} text-foreground`,children:"Reviewing version history"})]}),e.jsx(y,{variant:"secondary",size:z,showLeftIcon:!0,leftIconName:"x",onClick:me,children:"Back to edit"})]})}return e.jsxs("div",{className:`
        p-2 rounded-lg
        flex items-center justify-between
        ${C}
      `,children:[e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs(l,{children:[e.jsx(o,{icon:"undo-2",label:"Undo",onClick:r,size:s,isFirst:!0,disabled:i}),e.jsx(o,{icon:"redo-2",label:"Redo",onClick:d,size:s,disabled:a})]}),e.jsx(l,{children:e.jsx(he,{onClick:u,size:s})}),e.jsxs(l,{children:[e.jsx(o,{icon:"bold",label:"Bold",onClick:g,size:s,isFirst:!0}),e.jsx(o,{icon:"italic",label:"Italic",onClick:T,size:s}),e.jsx(o,{icon:"underline",label:"Underline",onClick:se,size:s}),e.jsx(o,{icon:"strikethrough",label:"Strikethrough",onClick:oe,size:s})]}),e.jsxs(l,{children:[e.jsx(o,{icon:"list",label:"Bullet list",onClick:ie,size:s,isFirst:!0}),e.jsx(o,{icon:"list-ordered",label:"Numbered list",onClick:ne,size:s})]}),e.jsxs(l,{children:[e.jsx(o,{icon:"link-2",label:"Insert link",onClick:te,size:s,isFirst:!0}),e.jsx(o,{icon:"image",label:"Insert image",onClick:re,size:s}),e.jsx(o,{icon:"table",label:"Insert table",onClick:ae,size:s}),e.jsx(o,{icon:"minus",label:"Horizontal rule",onClick:le,size:s}),e.jsx(o,{icon:"quote",label:"Block quote",onClick:ce,size:s})]}),e.jsxs(l,{children:[e.jsx(o,{icon:"code",label:"Code",onClick:de,size:s,isFirst:!0}),e.jsx(ke,{icon:"highlighter",label:"Highlight",onClick:ue,size:s})]})]}),e.jsx(y,{variant:"outline",size:z,showLeftIcon:!0,leftIconName:"pencil-line",onClick:ge,children:"Suggest edits"})]})};t.__docgenInfo={description:"",methods:[],displayName:"EditorToolbar",props:{size:{required:!1,tsType:{name:"union",raw:'"xs" | "s"',elements:[{name:"literal",value:'"xs"'},{name:"literal",value:'"s"'}]},description:"Toolbar size - xs for desktop, s for mobile (easier to tap)",defaultValue:{value:'"xs"',computed:!1}},status:{required:!1,tsType:{name:"union",raw:'"editing" | "reviewing"',elements:[{name:"literal",value:'"editing"'},{name:"literal",value:'"reviewing"'}]},description:"Toolbar state - editing shows formatting tools, reviewing shows version info",defaultValue:{value:'"editing"',computed:!1}},onUndo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when undo is clicked"},undoDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether undo is disabled",defaultValue:{value:"false",computed:!1}},onRedo:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when redo is clicked"},redoDisabled:{required:!1,tsType:{name:"boolean"},description:"Whether redo is disabled",defaultValue:{value:"false",computed:!1}},onTextStyle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when text style dropdown is clicked"},onBold:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when bold is clicked"},onItalic:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when italic is clicked"},onUnderline:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when underline is clicked"},onStrikethrough:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when strikethrough is clicked"},onList:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when bullet list is clicked"},onOrderedList:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when ordered list is clicked"},onLink:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when link is clicked"},onImage:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when image is clicked"},onTable:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when table is clicked"},onHorizontalRule:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when horizontal rule is clicked"},onQuote:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when quote is clicked"},onCode:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when code is clicked"},onHighlight:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when highlight dropdown is clicked"},onSuggestEdits:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when suggest edits is clicked"},onBackToEdit:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when back to edit is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const Te={title:"Components/EditorToolbar",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s"],description:"Toolbar size - xs for desktop, s for mobile (easier to tap)"},status:{control:"select",options:["editing","reviewing"],description:"Toolbar state - editing shows formatting tools, reviewing shows version info"},undoDisabled:{control:"boolean",description:"Whether undo button is disabled"},redoDisabled:{control:"boolean",description:"Whether redo button is disabled"}}},p={args:{size:"xs",status:"editing"}},x={args:{size:"s",status:"editing"}},b={args:{size:"xs",status:"reviewing"}},k={args:{size:"s",status:"reviewing"}},h={args:{size:"xs",status:"editing",undoDisabled:!0}},v={args:{size:"xs",status:"editing",redoDisabled:!0}},f={args:{size:"xs",status:"editing",undoDisabled:!0,redoDisabled:!0}},w={args:{size:"xs",status:"editing"},render:s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-4",children:"Hover over icons to see tooltips. Click actions to see console logs."}),e.jsx(t,{...s,onUndo:()=>console.log("Undo clicked"),onRedo:()=>console.log("Redo clicked"),onTextStyle:()=>console.log("Text style clicked"),onBold:()=>console.log("Bold clicked"),onItalic:()=>console.log("Italic clicked"),onUnderline:()=>console.log("Underline clicked"),onStrikethrough:()=>console.log("Strikethrough clicked"),onList:()=>console.log("Bullet list clicked"),onOrderedList:()=>console.log("Ordered list clicked"),onLink:()=>console.log("Link clicked"),onImage:()=>console.log("Image clicked"),onTable:()=>console.log("Table clicked"),onHorizontalRule:()=>console.log("Horizontal rule clicked"),onQuote:()=>console.log("Quote clicked"),onCode:()=>console.log("Code clicked"),onHighlight:()=>console.log("Highlight clicked"),onSuggestEdits:()=>console.log("Suggest edits clicked"),onBackToEdit:()=>console.log("Back to edit clicked")})]})},j={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Editing"}),e.jsx(t,{size:"xs",status:"editing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Mobile (s) - Editing"}),e.jsx(t,{size:"s",status:"editing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Editing (Undo/Redo disabled)"}),e.jsx(t,{size:"xs",status:"editing",undoDisabled:!0,redoDisabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Reviewing"}),e.jsx(t,{size:"xs",status:"reviewing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Mobile (s) - Reviewing"}),e.jsx(t,{size:"s",status:"reviewing"})]})]})};var S,N,D;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing'
  }
}`,...(D=(N=p.parameters)==null?void 0:N.docs)==null?void 0:D.source}}};var I,q,B;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: 's',
    status: 'editing'
  }
}`,...(B=(q=x.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var R,E,U;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'reviewing'
  }
}`,...(U=(E=b.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var H,L,M;k.parameters={...k.parameters,docs:{...(H=k.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    size: 's',
    status: 'reviewing'
  }
}`,...(M=(L=k.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,O,$;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing',
    undoDisabled: true
  }
}`,...($=(O=h.parameters)==null?void 0:O.docs)==null?void 0:$.source}}};var F,Q,W;v.parameters={...v.parameters,docs:{...(F=v.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing',
    redoDisabled: true
  }
}`,...(W=(Q=v.parameters)==null?void 0:Q.docs)==null?void 0:W.source}}};var _,A,G;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing',
    undoDisabled: true,
    redoDisabled: true
  }
}`,...(G=(A=f.parameters)==null?void 0:A.docs)==null?void 0:G.source}}};var J,K,P;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing'
  },
  render: args => <div>
      <p className="text-sm text-subtle mb-4">
        Hover over icons to see tooltips. Click actions to see console logs.
      </p>
      <EditorToolbar {...args} onUndo={() => console.log('Undo clicked')} onRedo={() => console.log('Redo clicked')} onTextStyle={() => console.log('Text style clicked')} onBold={() => console.log('Bold clicked')} onItalic={() => console.log('Italic clicked')} onUnderline={() => console.log('Underline clicked')} onStrikethrough={() => console.log('Strikethrough clicked')} onList={() => console.log('Bullet list clicked')} onOrderedList={() => console.log('Ordered list clicked')} onLink={() => console.log('Link clicked')} onImage={() => console.log('Image clicked')} onTable={() => console.log('Table clicked')} onHorizontalRule={() => console.log('Horizontal rule clicked')} onQuote={() => console.log('Quote clicked')} onCode={() => console.log('Code clicked')} onHighlight={() => console.log('Highlight clicked')} onSuggestEdits={() => console.log('Suggest edits clicked')} onBackToEdit={() => console.log('Back to edit clicked')} />
    </div>
}`,...(P=(K=w.parameters)==null?void 0:K.docs)==null?void 0:P.source}}};var X,Y,Z;j.parameters={...j.parameters,docs:{...(X=j.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Editing</p>
        <EditorToolbar size="xs" status="editing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Mobile (s) - Editing</p>
        <EditorToolbar size="s" status="editing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Editing (Undo/Redo disabled)</p>
        <EditorToolbar size="xs" status="editing" undoDisabled redoDisabled />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Desktop (xs) - Reviewing</p>
        <EditorToolbar size="xs" status="reviewing" />
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Mobile (s) - Reviewing</p>
        <EditorToolbar size="s" status="reviewing" />
      </div>
    </div>
}`,...(Z=(Y=j.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ce=["Default","MobileEditing","DesktopReviewing","MobileReviewing","UndoDisabled","RedoDisabled","UndoRedoDisabled","Interactive","AllVariants"];export{j as AllVariants,p as Default,b as DesktopReviewing,w as Interactive,x as MobileEditing,k as MobileReviewing,v as RedoDisabled,h as UndoDisabled,f as UndoRedoDisabled,Ce as __namedExportsOrder,Te as default};
