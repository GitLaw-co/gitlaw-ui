import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as s,F as a,a as m}from"./SidebarNavItem-Dhtkwn5r.js";import"./index-DRjF_FHU.js";const q={title:"Components/Sidebar/SidebarNavItem",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{state:{control:"select",options:["default","hover","active"],description:"Current state"},collapsed:{control:"boolean",description:"Whether the item is collapsed (icon only)"},showExpandArrow:{control:"boolean",description:"Whether to show expand arrow"},expanded:{control:"boolean",description:"Whether the expand arrow is rotated"},label:{control:"text",description:"Label text"}},decorators:[t=>e.jsx("div",{style:{width:"264px"},children:e.jsx(t,{})})]},r={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"default",collapsed:!1}},o={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"hover",collapsed:!1}},l={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"active",collapsed:!1}},c={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"default",collapsed:!1,showExpandArrow:!0,expanded:!1}},d={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"default",collapsed:!1,showExpandArrow:!0,expanded:!0}},i={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"default",collapsed:!0},decorators:[t=>e.jsx("div",{style:{width:"auto"},children:e.jsx(t,{})})]},n={args:{label:"Documents",icon:e.jsx(a,{className:"size-5"}),state:"hover",collapsed:!0},decorators:[t=>e.jsx("div",{style:{width:"auto"},children:e.jsx(t,{})})]},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(s,{label:"Default",icon:e.jsx(a,{className:"size-5"}),state:"default"}),e.jsx(s,{label:"Hover",icon:e.jsx(a,{className:"size-5"}),state:"hover"}),e.jsx(s,{label:"Active",icon:e.jsx(a,{className:"size-5"}),state:"active"}),e.jsx(s,{label:"With Arrow",icon:e.jsx(m,{className:"size-5"}),state:"default",showExpandArrow:!0,expanded:!1}),e.jsx(s,{label:"Arrow Expanded",icon:e.jsx(m,{className:"size-5"}),state:"default",showExpandArrow:!0,expanded:!0})]})};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false
  }
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,v,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'hover',
    collapsed: false
  }
}`,...(b=(v=o.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var w,N,g;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'active',
    collapsed: false
  }
}`,...(g=(N=l.parameters)==null?void 0:N.docs)==null?void 0:g.source}}};var j,z,A;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false,
    showExpandArrow: true,
    expanded: false
  }
}`,...(A=(z=c.parameters)==null?void 0:z.docs)==null?void 0:A.source}}};var S,E,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: false,
    showExpandArrow: true,
    expanded: true
  }
}`,...(D=(E=d.parameters)==null?void 0:E.docs)==null?void 0:D.source}}};var F,y,T;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'default',
    collapsed: true
  },
  decorators: [Story => <div style={{
    width: 'auto'
  }}>
        <Story />
      </div>]
}`,...(T=(y=i.parameters)==null?void 0:y.docs)==null?void 0:T.source}}};var C,W,I;n.parameters={...n.parameters,docs:{...(C=n.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Documents',
    icon: <FileText className="size-5" />,
    state: 'hover',
    collapsed: true
  },
  decorators: [Story => <div style={{
    width: 'auto'
  }}>
        <Story />
      </div>]
}`,...(I=(W=n.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var H,_,L;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <SidebarNavItem label="Default" icon={<FileText className="size-5" />} state="default" />
      <SidebarNavItem label="Hover" icon={<FileText className="size-5" />} state="hover" />
      <SidebarNavItem label="Active" icon={<FileText className="size-5" />} state="active" />
      <SidebarNavItem label="With Arrow" icon={<FolderClosed className="size-5" />} state="default" showExpandArrow expanded={false} />
      <SidebarNavItem label="Arrow Expanded" icon={<FolderClosed className="size-5" />} state="default" showExpandArrow expanded />
    </div>
}`,...(L=(_=p.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const B=["Default","Hover","Active","WithExpandArrow","WithExpandArrowExpanded","Collapsed","CollapsedHover","AllStates"];export{l as Active,p as AllStates,i as Collapsed,n as CollapsedHover,r as Default,o as Hover,c as WithExpandArrow,d as WithExpandArrowExpanded,B as __namedExportsOrder,q as default};
