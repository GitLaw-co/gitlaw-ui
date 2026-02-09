import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as l}from"./Input-M7N85g8K.js";import"./index-DRjF_FHU.js";import"./Icon-CfPs8lnx.js";import"./colors-CUQOl70L.js";const w={title:"Components/Form/Input",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","s","m","l","xl"],description:"The size of the input"},status:{control:"select",options:["empty","populated","active"],description:"The current status of the input"},align:{control:"select",options:["fill","hug"],description:"Width behavior"},showLabel:{control:"boolean",description:"Show external label"},showLeftIcon:{control:"boolean",description:"Show left icon"},showRightIcon:{control:"boolean",description:"Show right icon (clear button)"},placeholder:{control:"text",description:"Placeholder text"},label:{control:"text",description:"Label text"},disabled:{control:"boolean",description:"Disabled state"},context:{control:"select",options:["default","document-empty","document-filled"],description:"Context for document inputs - affects background color"}}},t={args:{size:"m",placeholder:"Enter text...",align:"fill"},decorators:[m=>e.jsx("div",{style:{width:"360px"},children:e.jsx(m,{})})]},s={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsx(l,{size:"xl",placeholder:"Extra Large",showLabel:!0,label:"XL"}),e.jsx(l,{size:"l",placeholder:"Large",showLabel:!0,label:"L"}),e.jsx(l,{size:"m",placeholder:"Medium",showLabel:!0,label:"M"}),e.jsx(l,{size:"s",placeholder:"Small",showLabel:!0,label:"S"}),e.jsx(l,{size:"xs",placeholder:"Extra Small",showLabel:!0,label:"XS"})]})},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 w-[360px]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Empty (yellow background - new input)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{size:"xs",placeholder:"Placeholder text",context:"document-empty",align:"hug"}),e.jsx(l,{size:"xs",placeholder:"Agreement date",context:"document-empty",align:"hug"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Filled (purple background - edited input)"}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsx(l,{size:"xs",value:"Contents",context:"document-filled",align:"hug"}),e.jsx(l,{size:"xs",value:"March 27, 2026",context:"document-filled",align:"hug"})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm text-subtle mb-2",children:"Full width variants"}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(l,{size:"xs",placeholder:"Empty full width",context:"document-empty",align:"fill"}),e.jsx(l,{size:"xs",value:"Filled full width",context:"document-filled",align:"fill"})]})]})]})};var n,o,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: 'm',
    placeholder: 'Enter text...',
    align: 'fill'
  },
  decorators: [Story => <div style={{
    width: '360px'
  }}>
        <Story />
      </div>]
}`,...(i=(o=t.parameters)==null?void 0:o.docs)==null?void 0:i.source}}};var r,c,d;s.parameters={...s.parameters,docs:{...(r=s.parameters)==null?void 0:r.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <Input size="xl" placeholder="Extra Large" showLabel label="XL" />
      <Input size="l" placeholder="Large" showLabel label="L" />
      <Input size="m" placeholder="Medium" showLabel label="M" />
      <Input size="s" placeholder="Small" showLabel label="S" />
      <Input size="xs" placeholder="Extra Small" showLabel label="XS" />
    </div>
}`,...(d=(c=s.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,x,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 w-[360px]">
      <div>
        <p className="text-sm text-subtle mb-2">Empty (yellow background - new input)</p>
        <div className="flex flex-wrap gap-2">
          <Input size="xs" placeholder="Placeholder text" context="document-empty" align="hug" />
          <Input size="xs" placeholder="Agreement date" context="document-empty" align="hug" />
        </div>
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Filled (purple background - edited input)</p>
        <div className="flex flex-wrap gap-2">
          <Input size="xs" value="Contents" context="document-filled" align="hug" />
          <Input size="xs" value="March 27, 2026" context="document-filled" align="hug" />
        </div>
      </div>
      <div>
        <p className="text-sm text-subtle mb-2">Full width variants</p>
        <div className="flex flex-col gap-2">
          <Input size="xs" placeholder="Empty full width" context="document-empty" align="fill" />
          <Input size="xs" value="Filled full width" context="document-filled" align="fill" />
        </div>
      </div>
    </div>
}`,...(u=(x=a.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};const z=["Default","AllSizes","DocumentInputs"];export{s as AllSizes,t as Default,a as DocumentInputs,z as __namedExportsOrder,w as default};
