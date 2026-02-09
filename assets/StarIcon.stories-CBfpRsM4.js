import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as s}from"./StarIcon-BtetS-2M.js";import"./index-DRjF_FHU.js";import"./colors-CUQOl70L.js";const N={title:"Components/Data Display/StarIcon",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{starred:{control:"boolean",description:"Active (filled purple) or inactive (light purple)"},className:{control:"text",description:"Tailwind size class (e.g. size-5, size-8)"}}},a={args:{starred:!0,className:"size-8"}},t={render:()=>e.jsxs("div",{className:"flex items-end gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{starred:!0,className:"size-8"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Active"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{starred:!1,className:"size-8"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"Inactive"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{starred:!0,className:"size-5"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"size-5"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(s,{starred:!0,className:"size-4"}),e.jsx("span",{className:"text-xs text-text-secondary",children:"size-4"})]})]})};var r,c,n;a.parameters={...a.parameters,docs:{...(r=a.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    starred: true,
    className: "size-8"
  }
}`,...(n=(c=a.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var l,i,x;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: () => <div className="flex items-end gap-6">
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-8" />
        <span className="text-xs text-text-secondary">Active</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred={false} className="size-8" />
        <span className="text-xs text-text-secondary">Inactive</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-5" />
        <span className="text-xs text-text-secondary">size-5</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <StarIcon starred className="size-4" />
        <span className="text-xs text-text-secondary">size-4</span>
      </div>
    </div>
}`,...(x=(i=t.parameters)==null?void 0:i.docs)==null?void 0:x.source}}};const f=["Default","AllStates"];export{t as AllStates,a as Default,f as __namedExportsOrder,N as default};
