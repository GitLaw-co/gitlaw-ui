import{j as e}from"./jsx-runtime-DiklIkkE.js";import{A as t}from"./Avatar-fRZogy1Q.js";import"./index-DRjF_FHU.js";import"./Icon-CGgPBvn_.js";import"./colors-CUQOl70L.js";const y={title:"Components/Data Display/Avatar",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["image","initials","icon","empty"],description:"The type of avatar content"},size:{control:"select",options:["S","M","L","XL"],description:"The size of the avatar"},initials:{control:"text",description:"Initials text (for initials type)"},showEdit:{control:"boolean",description:"Show edit button"}}},s={args:{type:"image",size:"M",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",alt:"User avatar"}},i={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-text-secondary",children:"Types"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(t,{type:"image",size:"L",src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"}),e.jsx(t,{type:"initials",size:"L",initials:"JD"}),e.jsx(t,{type:"icon",size:"L"}),e.jsx(t,{type:"empty",size:"L"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"mb-2 text-sm font-medium text-text-secondary",children:"Sizes"}),e.jsxs("div",{className:"flex items-end gap-4",children:[e.jsx(t,{type:"initials",size:"S",initials:"S"}),e.jsx(t,{type:"initials",size:"M",initials:"M"}),e.jsx(t,{type:"initials",size:"L",initials:"L"}),e.jsx(t,{type:"initials",size:"XL",initials:"XL"})]})]})]})};var a,n,r;s.parameters={...s.parameters,docs:{...(a=s.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: 'image',
    size: 'M',
    src: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
    alt: 'User avatar'
  }
}`,...(r=(n=s.parameters)==null?void 0:n.docs)==null?void 0:r.source}}};var o,p,c;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Types</p>
        <div className="flex items-center gap-4">
          <Avatar type="image" size="L" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" />
          <Avatar type="initials" size="L" initials="JD" />
          <Avatar type="icon" size="L" />
          <Avatar type="empty" size="L" />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm font-medium text-text-secondary">Sizes</p>
        <div className="flex items-end gap-4">
          <Avatar type="initials" size="S" initials="S" />
          <Avatar type="initials" size="M" initials="M" />
          <Avatar type="initials" size="L" initials="L" />
          <Avatar type="initials" size="XL" initials="XL" />
        </div>
      </div>
    </div>
}`,...(c=(p=i.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const v=["Default","AllVariants"];export{i as AllVariants,s as Default,v as __namedExportsOrder,y as default};
