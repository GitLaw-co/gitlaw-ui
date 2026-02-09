import{j as e}from"./jsx-runtime-DiklIkkE.js";import{E as o}from"./EditorToolbar-D4XcLBzh.js";import"./index-DRjF_FHU.js";import"./Icon-CfPs8lnx.js";import"./Button-DR1DBuRh.js";import"./colors-CUQOl70L.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";const z={title:"Editor/EditorToolbar",component:o,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s"],description:"Toolbar size - xs for desktop, s for mobile (easier to tap)"},status:{control:"select",options:["editing","reviewing"],description:"Toolbar state - editing shows formatting tools, reviewing shows version info"},undoDisabled:{control:"boolean",description:"Whether undo button is disabled"},redoDisabled:{control:"boolean",description:"Whether redo button is disabled"}}},s={args:{size:"xs",status:"editing"}},t={args:{size:"xs",status:"editing"},render:u=>e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-4",children:"Hover over icons to see tooltips. Click actions to see console logs."}),e.jsx(o,{...u,onUndo:()=>console.log("Undo clicked"),onRedo:()=>console.log("Redo clicked"),onTextStyle:()=>console.log("Text style clicked"),onBold:()=>console.log("Bold clicked"),onItalic:()=>console.log("Italic clicked"),onUnderline:()=>console.log("Underline clicked"),onStrikethrough:()=>console.log("Strikethrough clicked"),onList:()=>console.log("Bullet list clicked"),onOrderedList:()=>console.log("Ordered list clicked"),onLink:()=>console.log("Link clicked"),onImage:()=>console.log("Image clicked"),onTable:()=>console.log("Table clicked"),onHorizontalRule:()=>console.log("Horizontal rule clicked"),onQuote:()=>console.log("Quote clicked"),onCode:()=>console.log("Code clicked"),onHighlight:()=>console.log("Highlight clicked"),onSuggestEdits:()=>console.log("Suggest edits clicked"),onBackToEdit:()=>console.log("Back to edit clicked")})]})},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Editing"}),e.jsx(o,{size:"xs",status:"editing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Mobile (s) - Editing"}),e.jsx(o,{size:"s",status:"editing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Editing (Undo/Redo disabled)"}),e.jsx(o,{size:"xs",status:"editing",undoDisabled:!0,redoDisabled:!0})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Desktop (xs) - Reviewing"}),e.jsx(o,{size:"xs",status:"reviewing"})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Mobile (s) - Reviewing"}),e.jsx(o,{size:"s",status:"reviewing"})]})]})};var l,n,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    size: 'xs',
    status: 'editing'
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,r,a;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(a=(r=t.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var g,x,m;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(m=(x=i.parameters)==null?void 0:x.docs)==null?void 0:m.source}}};const D=["Default","Interactive","AllVariants"];export{i as AllVariants,s as Default,t as Interactive,D as __namedExportsOrder,z as default};
