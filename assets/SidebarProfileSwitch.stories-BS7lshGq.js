import{j as a}from"./jsx-runtime-DiklIkkE.js";import{S as i}from"./SidebarProfileSwitch-BEjGroXF.js";import"./index-DRjF_FHU.js";import"./ChevronDown-C78wlgpO.js";const P={title:"Components/Sidebar/SidebarProfileSwitch",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["default","hover","active"],description:"Current state"},collapsed:{control:"boolean",description:"Whether the component is collapsed (icon only)"},name:{control:"text",description:"Profile/company name"},avatarInitials:{control:"text",description:"Avatar initials"}},decorators:[l=>a.jsx("div",{style:{width:"264px"},children:a.jsx(l,{})})]},e={args:{name:"Acme Corporation",avatarInitials:"AC",state:"default",collapsed:!1}},t={args:{name:"Acme Corporation",avatarInitials:"AC",state:"hover",collapsed:!1}},r={args:{name:"Acme Corporation",avatarInitials:"AC",state:"active",collapsed:!1}},s={args:{name:"Acme Corporation",avatarInitials:"AC",state:"default",collapsed:!0},decorators:[l=>a.jsx("div",{style:{width:"auto"},children:a.jsx(l,{})})]},o={args:{name:"Very Long Company Name That Should Truncate",avatarInitials:"VL",state:"default",collapsed:!1}},n={render:()=>a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx(i,{name:"Default state",avatarInitials:"DS",state:"default"}),a.jsx(i,{name:"Hover state",avatarInitials:"HS",state:"hover"}),a.jsx(i,{name:"Active state",avatarInitials:"AS",state:"active"})]})};var c,d,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'default',
    collapsed: false
  }
}`,...(m=(d=e.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,u,v;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'hover',
    collapsed: false
  }
}`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,S,A;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'active',
    collapsed: false
  }
}`,...(A=(S=r.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var g,h,C;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'Acme Corporation',
    avatarInitials: 'AC',
    state: 'default',
    collapsed: true
  },
  decorators: [Story => <div style={{
    width: 'auto'
  }}>
        <Story />
      </div>]
}`,...(C=(h=s.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var x,I,y;o.parameters={...o.parameters,docs:{...(x=o.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    name: 'Very Long Company Name That Should Truncate',
    avatarInitials: 'VL',
    state: 'default',
    collapsed: false
  }
}`,...(y=(I=o.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var j,w,b;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <SidebarProfileSwitch name="Default state" avatarInitials="DS" state="default" />
      <SidebarProfileSwitch name="Hover state" avatarInitials="HS" state="hover" />
      <SidebarProfileSwitch name="Active state" avatarInitials="AS" state="active" />
    </div>
}`,...(b=(w=n.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};const T=["Default","Hover","Active","Collapsed","LongName","AllStates"];export{r as Active,n as AllStates,s as Collapsed,e as Default,t as Hover,o as LongName,T as __namedExportsOrder,P as default};
