import{j as e}from"./jsx-runtime-DiklIkkE.js";import{P as s}from"./PageShell-C9jiX08o.js";import"./index-DRjF_FHU.js";import"./Sidebar-DIpisecJ.js";import"./Icon-CfPs8lnx.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./colors-CUQOl70L.js";import"./TopHeader-Cb2FF6HH.js";import"./Badge-BTb2MvAY.js";import"./Button-DR1DBuRh.js";import"./Dropdown-BQT8-cPZ.js";const D={title:"Layout/PageShell",component:s,parameters:{layout:"fullscreen",backgrounds:{default:"light"}},argTypes:{title:{control:"text"},isSignedIn:{control:"boolean"},initialSidebarCollapsed:{control:"boolean"},showHeaderStroke:{control:"boolean"}}},a={render:r=>e.jsx(s,{...r,children:e.jsxs("div",{className:"max-w-[800px]",children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"Page content goes here"}),e.jsx("p",{className:"text-sm text-secondary",children:"PageShell provides Sidebar + TopHeader + a scrollable content area with standard padding (84px horizontal, 32px top, 64px bottom)."})]})}),args:{title:"Dashboard",initialSidebarCollapsed:!0}},t={render:r=>e.jsx(s,{...r,children:e.jsxs("div",{className:"max-w-[800px]",children:[e.jsx("h2",{className:"text-xl font-semibold text-foreground mb-4",children:"With expanded sidebar"}),e.jsx("p",{className:"text-sm text-secondary",children:"The sidebar is expanded by default, showing the full navigation."})]})}),args:{title:"Settings",initialSidebarCollapsed:!1}};var o,n,i,l,d;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`{
  render: args => <PageShell {...args}>
      <div className="max-w-[800px]">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          Page content goes here
        </h2>
        <p className="text-sm text-secondary">
          PageShell provides Sidebar + TopHeader + a scrollable content area
          with standard padding (84px horizontal, 32px top, 64px bottom).
        </p>
      </div>
    </PageShell>,
  args: {
    title: "Dashboard",
    initialSidebarCollapsed: true
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source},description:{story:"Default — collapsed sidebar with basic content.",...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.description}}};var p,c,m,x,h;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => <PageShell {...args}>
      <div className="max-w-[800px]">
        <h2 className="text-xl font-semibold text-foreground mb-4">
          With expanded sidebar
        </h2>
        <p className="text-sm text-secondary">
          The sidebar is expanded by default, showing the full navigation.
        </p>
      </div>
    </PageShell>,
  args: {
    title: "Settings",
    initialSidebarCollapsed: false
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source},description:{story:"With expanded sidebar showing full navigation.",...(h=(x=t.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};const T=["Default","ExpandedSidebar"];export{a as Default,t as ExpandedSidebar,T as __namedExportsOrder,D as default};
