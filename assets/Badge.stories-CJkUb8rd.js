import{j as e}from"./jsx-runtime-DiklIkkE.js";import{B as s}from"./Badge-BTb2MvAY.js";import"./index-DRjF_FHU.js";const x={title:"Components/Data Display/Badge",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["primary","secondary","red","orange","green"],description:"The color type of the badge"},showNumber:{control:"boolean",description:"Show number in badge"},count:{control:"number",description:"The number to display"}}},t={args:{type:"primary",showNumber:!0,count:7}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-6",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"With Number"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{type:"primary",count:7}),e.jsx(s,{type:"secondary",count:5}),e.jsx(s,{type:"red",count:3}),e.jsx(s,{type:"orange",count:12}),e.jsx(s,{type:"green",count:1})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"Dot Only"}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{type:"primary",showNumber:!1}),e.jsx(s,{type:"secondary",showNumber:!1}),e.jsx(s,{type:"red",showNumber:!1}),e.jsx(s,{type:"orange",showNumber:!1}),e.jsx(s,{type:"green",showNumber:!1})]})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-text-secondary text-sm mb-2",children:"Usage Example"}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary rounded text-foreground-button",children:"Notifications"}),e.jsx(s,{type:"red",count:3,className:"absolute -top-1 -right-1"})]}),e.jsxs("div",{className:"relative inline-flex",children:[e.jsx("button",{className:"px-4 py-2 bg-secondary rounded text-foreground-button",children:"Messages"}),e.jsx(s,{type:"primary",count:12,className:"absolute -top-1 -right-1"})]})]})]})]})};var n,r,o;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    type: 'primary',
    showNumber: true,
    count: 7
  }
}`,...(o=(r=t.parameters)==null?void 0:r.docs)==null?void 0:o.source}}};var d,c,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <p className="text-text-secondary text-sm mb-2">With Number</p>
        <div className="flex items-center gap-4">
          <Badge type="primary" count={7} />
          <Badge type="secondary" count={5} />
          <Badge type="red" count={3} />
          <Badge type="orange" count={12} />
          <Badge type="green" count={1} />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Dot Only</p>
        <div className="flex items-center gap-4">
          <Badge type="primary" showNumber={false} />
          <Badge type="secondary" showNumber={false} />
          <Badge type="red" showNumber={false} />
          <Badge type="orange" showNumber={false} />
          <Badge type="green" showNumber={false} />
        </div>
      </div>
      <div>
        <p className="text-text-secondary text-sm mb-2">Usage Example</p>
        <div className="flex gap-4">
          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
              Notifications
            </button>
            <Badge type="red" count={3} className="absolute -top-1 -right-1" />
          </div>
          <div className="relative inline-flex">
            <button className="px-4 py-2 bg-secondary rounded text-foreground-button">
              Messages
            </button>
            <Badge type="primary" count={12} className="absolute -top-1 -right-1" />
          </div>
        </div>
      </div>
    </div>
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const u=["Default","AllVariants"];export{a as AllVariants,t as Default,u as __namedExportsOrder,x as default};
