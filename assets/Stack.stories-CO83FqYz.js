import{j as e}from"./jsx-runtime-DiklIkkE.js";import{S as a}from"./Stack-jcG19hUL.js";import{M as c}from"./MenuItem-cFQSHnm_.js";import"./index-DRjF_FHU.js";import"./Icon-CfPs8lnx.js";import"./Button-DR1DBuRh.js";import"./colors-CUQOl70L.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";const q={title:"Layout/Stack",component:a,parameters:{layout:"padded"},argTypes:{gap:{control:"select",options:["none","xs","s","m","l","xl"]},direction:{control:"select",options:["vertical","horizontal"]},padding:{control:"select",options:["none","xs","s","m","l","xl"]},dividers:{control:"boolean"}}},r=({label:s})=>e.jsx("div",{className:"px-4 py-3 rounded-lg bg-card border border-border text-sm text-foreground",children:s}),o={render:s=>e.jsx("div",{className:"max-w-[600px]",children:e.jsxs(a,{...s,children:[e.jsx(r,{label:"First item"}),e.jsx(r,{label:"Second item"}),e.jsx(r,{label:"Third item"})]})}),args:{gap:"s",direction:"vertical"}},t={render:s=>e.jsx("div",{className:"max-w-[600px]",children:e.jsxs(a,{...s,children:[e.jsx(r,{label:"Profile"}),e.jsx(r,{label:"Account"}),e.jsx(r,{label:"Billing"})]})}),args:{gap:"s",dividers:!0,direction:"vertical"}},n={render:s=>e.jsxs(a,{...s,children:[e.jsx(r,{label:"A"}),e.jsx(r,{label:"B"}),e.jsx(r,{label:"C"})]}),args:{gap:"m",direction:"horizontal"}},i={render:()=>e.jsx("div",{className:"max-w-[1040px]",children:e.jsxs(a,{gap:"none",children:[e.jsx(c,{primaryText:"Username",showSecondaryText:!0,secondaryText:"alexcarter",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(c,{primaryText:"Full name",showSecondaryText:!0,secondaryText:"Alex Carter",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(c,{primaryText:"Email",showSecondaryText:!0,secondaryText:"alex@example.com",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(c,{primaryText:"Dark mode",showLeftElement:!1,width:"fill",showRSwitch:!0,rSwitchChecked:!1})]})})},l={render:()=>e.jsx("div",{className:"flex gap-8",children:["none","xs","s","m","l","xl"].map(s=>e.jsxs("div",{children:[e.jsx("p",{className:"text-xs font-semibold text-secondary mb-2 uppercase",children:s}),e.jsxs(a,{gap:s,children:[e.jsx(r,{label:"A"}),e.jsx(r,{label:"B"}),e.jsx(r,{label:"C"})]})]},s))})};var d,m,p,x,h;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <div className="max-w-[600px]">
      <Stack {...args}>
        <DemoBox label="First item" />
        <DemoBox label="Second item" />
        <DemoBox label="Third item" />
      </Stack>
    </div>,
  args: {
    gap: "s",
    direction: "vertical"
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"Default vertical stack with small (8px) gap — matches settings row spacing.",...(h=(x=o.parameters)==null?void 0:x.docs)==null?void 0:h.description}}};var g,u,w,f,S;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => <div className="max-w-[600px]">
      <Stack {...args}>
        <DemoBox label="Profile" />
        <DemoBox label="Account" />
        <DemoBox label="Billing" />
      </Stack>
    </div>,
  args: {
    gap: "s",
    dividers: true,
    direction: "vertical"
  }
}`,...(w=(u=t.parameters)==null?void 0:u.docs)==null?void 0:w.source},description:{story:"Stack with dividers between items.",...(S=(f=t.parameters)==null?void 0:f.docs)==null?void 0:S.description}}};var b,v,y,j,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => <Stack {...args}>
      <DemoBox label="A" />
      <DemoBox label="B" />
      <DemoBox label="C" />
    </Stack>,
  args: {
    gap: "m",
    direction: "horizontal"
  }
}`,...(y=(v=n.parameters)==null?void 0:v.docs)==null?void 0:y.source},description:{story:"Horizontal stack — useful for card grids or button groups.",...(T=(j=n.parameters)==null?void 0:j.docs)==null?void 0:T.description}}};var k,D,B,I,E;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: () => <div className="max-w-[1040px]">
      <Stack gap="none">
        <MenuItem primaryText="Username" showSecondaryText secondaryText="alexcarter" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
        <MenuItem primaryText="Full name" showSecondaryText secondaryText="Alex Carter" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
        <MenuItem primaryText="Email" showSecondaryText secondaryText="alex@example.com" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
        <MenuItem primaryText="Dark mode" showLeftElement={false} width="fill" showRSwitch rSwitchChecked={false} />
      </Stack>
    </div>
}`,...(B=(D=i.parameters)==null?void 0:D.docs)==null?void 0:B.source},description:{story:"Settings rows — real-world usage with MenuItems.",...(E=(I=i.parameters)==null?void 0:I.docs)==null?void 0:E.description}}};var N,R,z,A,L;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: () => <div className="flex gap-8">
      {(["none", "xs", "s", "m", "l", "xl"] as const).map(gap => <div key={gap}>
          <p className="text-xs font-semibold text-secondary mb-2 uppercase">
            {gap}
          </p>
          <Stack gap={gap}>
            <DemoBox label="A" />
            <DemoBox label="B" />
            <DemoBox label="C" />
          </Stack>
        </div>)}
    </div>
}`,...(z=(R=l.parameters)==null?void 0:R.docs)==null?void 0:z.source},description:{story:"All gap sizes for comparison.",...(L=(A=l.parameters)==null?void 0:A.docs)==null?void 0:L.description}}};const J=["Default","WithDividers","Horizontal","SettingsRows","GapSizes"];export{o as Default,l as GapSizes,n as Horizontal,i as SettingsRows,t as WithDividers,J as __namedExportsOrder,q as default};
