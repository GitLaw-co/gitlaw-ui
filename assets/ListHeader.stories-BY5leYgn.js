import{j as e}from"./jsx-runtime-DiklIkkE.js";import{L as t}from"./ListHeader-BvWNZaQs.js";import"./index-DRjF_FHU.js";import"./Button-DR1DBuRh.js";import"./Icon-CfPs8lnx.js";import"./colors-CUQOl70L.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";const A={title:"Components/Navigation/ListHeader",component:t,parameters:{layout:"padded"},argTypes:{mode:{control:"select",options:["default","edit"]},label:{control:"text"}}},b=[{icon:"search"},{icon:"arrow-down-wide-narrow"},{icon:"layout-grid"},{icon:"plus"}],d=[{icon:"trash-2",label:"Delete"},{icon:"arrow-down-to-line",label:"Download"},{icon:"folder-input",label:"Move"},{icon:"check",label:"Done"}],s={args:{mode:"default",label:"234 files",actions:b}},a={render:()=>e.jsxs("div",{className:"flex flex-col gap-6 max-w-[1046px]",children:[e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-secondary mb-2 uppercase",children:"Default"}),e.jsx("div",{className:"bg-page-background rounded-lg",children:e.jsx(t,{mode:"default",label:"234 files",actions:b})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-secondary mb-2 uppercase",children:"Edit — 0 selected"}),e.jsx("div",{className:"bg-page-background rounded-lg",children:e.jsx(t,{mode:"edit",label:"0 files selected",editActions:d})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-secondary mb-2 uppercase",children:"Edit — 3 selected"}),e.jsx("div",{className:"bg-page-background rounded-lg",children:e.jsx(t,{mode:"edit",label:"3 files selected",editActions:d})})]}),e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-secondary mb-2 uppercase",children:"Default — with active grid toggle"}),e.jsx("div",{className:"bg-page-background rounded-lg",children:e.jsx(t,{mode:"default",label:"234 files",actions:[{icon:"search"},{icon:"arrow-down-wide-narrow"},{icon:"layout-grid",active:!0},{icon:"plus"}]})})]})]})};var n,o,i,l,r;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    mode: "default",
    label: "234 files",
    actions: defaultActions
  }
}`,...(i=(o=s.parameters)==null?void 0:o.docs)==null?void 0:i.source},description:{story:"Default mode — file count with icon action buttons.",...(r=(l=s.parameters)==null?void 0:l.docs)==null?void 0:r.description}}};var c,m,p,u,x;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6 max-w-[1046px]">
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Default
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader mode="default" label="234 files" actions={defaultActions} />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Edit — 0 selected
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader mode="edit" label="0 files selected" editActions={editActions} />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Edit — 3 selected
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader mode="edit" label="3 files selected" editActions={editActions} />
        </div>
      </div>
      <div>
        <p className="text-xs font-semibold text-secondary mb-2 uppercase">
          Default — with active grid toggle
        </p>
        <div className="bg-page-background rounded-lg">
          <ListHeader mode="default" label="234 files" actions={[{
          icon: "search"
        }, {
          icon: "arrow-down-wide-narrow"
        }, {
          icon: "layout-grid",
          active: true
        }, {
          icon: "plus"
        }]} />
        </div>
      </div>
    </div>
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"All variants — default and edit modes side by side.",...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.description}}};const D=["Default","AllVariants"];export{a as AllVariants,s as Default,D as __namedExportsOrder,A as default};
