import{j as t}from"./jsx-runtime-DiklIkkE.js";import{B as e}from"./Button-DquhqAJK.js";import"./index-DRjF_FHU.js";import"./Icon-CGgPBvn_.js";import"./colors-CUQOl70L.js";const h={title:"Components/Actions/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","outline","ghost","destructive","disabled","icon"],description:"The visual style variant of the button"},size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the button"},showLeftIcon:{control:"boolean",description:"Show the left icon"},showRightIcon:{control:"boolean",description:"Show the right icon"},children:{control:"text",description:"Button label text"}}},n={args:{variant:"primary",size:"m",children:"Button",showLeftIcon:!0}},i={render:()=>t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{children:[t.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"Variants"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",size:"m",children:"Primary"}),t.jsx(e,{variant:"secondary",size:"m",children:"Secondary"}),t.jsx(e,{variant:"outline",size:"m",children:"Outline"}),t.jsx(e,{variant:"ghost",size:"m",children:"Ghost"}),t.jsx(e,{variant:"destructive",size:"m",children:"Destructive"}),t.jsx(e,{variant:"disabled",size:"m",children:"Disabled"}),t.jsx(e,{variant:"icon",size:"m"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"Sizes"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",size:"xs",children:"XS"}),t.jsx(e,{variant:"primary",size:"s",children:"Small"}),t.jsx(e,{variant:"primary",size:"m",children:"Medium"}),t.jsx(e,{variant:"primary",size:"l",children:"Large"}),t.jsx(e,{variant:"primary",size:"xl",children:"Extra Large"})]})]}),t.jsxs("div",{children:[t.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"With Icons"}),t.jsxs("div",{className:"flex items-center gap-4",children:[t.jsx(e,{variant:"primary",size:"m",showLeftIcon:!0,children:"Left Icon"}),t.jsx(e,{variant:"primary",size:"m",showRightIcon:!0,children:"Right Icon"}),t.jsx(e,{variant:"primary",size:"m",showLeftIcon:!0,showRightIcon:!0,children:"Both Icons"})]})]})]})};var s,r,a;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'primary',
    size: 'm',
    children: 'Button',
    showLeftIcon: true
  }
}`,...(a=(r=n.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};var o,c,m;i.parameters={...i.parameters,docs:{...(o=i.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-text-secondary text-sm mb-2">Variants</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="m">Primary</Button>
          <Button variant="secondary" size="m">Secondary</Button>
          <Button variant="outline" size="m">Outline</Button>
          <Button variant="ghost" size="m">Ghost</Button>
          <Button variant="destructive" size="m">Destructive</Button>
          <Button variant="disabled" size="m">Disabled</Button>
          <Button variant="icon" size="m" />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Sizes</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="xs">XS</Button>
          <Button variant="primary" size="s">Small</Button>
          <Button variant="primary" size="m">Medium</Button>
          <Button variant="primary" size="l">Large</Button>
          <Button variant="primary" size="xl">Extra Large</Button>
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">With Icons</p>
        <div className="flex items-center gap-4">
          <Button variant="primary" size="m" showLeftIcon>Left Icon</Button>
          <Button variant="primary" size="m" showRightIcon>Right Icon</Button>
          <Button variant="primary" size="m" showLeftIcon showRightIcon>Both Icons</Button>
        </div>
      </div>
    </div>
}`,...(m=(c=i.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const v=["Default","AllVariants"];export{i as AllVariants,n as Default,v as __namedExportsOrder,h as default};
