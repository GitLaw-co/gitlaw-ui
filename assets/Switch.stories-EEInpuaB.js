import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as u}from"./index-DRjF_FHU.js";import{S as s}from"./Switch-Biwu3wdI.js";const w={title:"Components/Form/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Current checked state"},size:{control:"select",options:["s","m"],description:"The size of the switch"},disabled:{control:"boolean",description:"Disabled state"}}},a={args:{checked:!1,size:"m",disabled:!1}},c={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Medium On:"}),e.jsx(s,{checked:!0,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Medium Off:"}),e.jsx(s,{checked:!1,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Small On:"}),e.jsx(s,{checked:!0,size:"s"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Small Off:"}),e.jsx(s,{checked:!1,size:"s"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Disabled On:"}),e.jsx(s,{checked:!0,disabled:!0,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-32 text-sm",children:"Disabled Off:"}),e.jsx(s,{checked:!1,disabled:!0,size:"m"})]})]})};function N(){const[n,h]=u.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:n,onChange:h,size:"m"}),e.jsx("span",{className:"text-sm text-subtle",children:n?"On":"Off"})]})}const t={render:()=>e.jsx(N,{})};var i,l,r;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'm',
    disabled: false
  }
}`,...(r=(l=a.parameters)==null?void 0:l.docs)==null?void 0:r.source}}};var d,m,o;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Medium On:</span>
        <Switch checked size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Medium Off:</span>
        <Switch checked={false} size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Small On:</span>
        <Switch checked size="s" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Small Off:</span>
        <Switch checked={false} size="s" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Disabled On:</span>
        <Switch checked disabled size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Disabled Off:</span>
        <Switch checked={false} disabled size="m" />
      </div>
    </div>
}`,...(o=(m=c.parameters)==null?void 0:m.docs)==null?void 0:o.source}}};var p,x,f;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />
}`,...(f=(x=t.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const S=["Default","AllStates","Interactive"];export{c as AllStates,a as Default,t as Interactive,S as __namedExportsOrder,w as default};
