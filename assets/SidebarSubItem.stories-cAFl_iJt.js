import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as o}from"./SidebarSubItem-DuOQCIl9.js";import"./index-DRjF_FHU.js";const j={title:"Components/Sidebar/SidebarSubItem",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["default","hover","active"],description:"Current state"},label:{control:"text",description:"Label text"}},decorators:[f=>e.jsx("div",{style:{width:"264px"},children:e.jsx(f,{})})]},t={args:{label:"Sub Item",state:"default"}},a={args:{label:"Sub Item",state:"hover"}},s={args:{label:"Sub Item",state:"active"}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-1",children:[e.jsx(o,{label:"Default state",state:"default"}),e.jsx(o,{label:"Hover state",state:"hover"}),e.jsx(o,{label:"Active state",state:"active"})]})};var l,c,n;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    label: 'Sub Item',
    state: 'default'
  }
}`,...(n=(c=t.parameters)==null?void 0:c.docs)==null?void 0:n.source}}};var d,i,m;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Sub Item',
    state: 'hover'
  }
}`,...(m=(i=a.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var u,p,b;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Sub Item',
    state: 'active'
  }
}`,...(b=(p=s.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var S,v,x;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-1">
      <SidebarSubItem label="Default state" state="default" />
      <SidebarSubItem label="Hover state" state="hover" />
      <SidebarSubItem label="Active state" state="active" />
    </div>
}`,...(x=(v=r.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const A=["Default","Hover","Active","AllStates"];export{s as Active,r as AllStates,t as Default,a as Hover,A as __namedExportsOrder,j as default};
