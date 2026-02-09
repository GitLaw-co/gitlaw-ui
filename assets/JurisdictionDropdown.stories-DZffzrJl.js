import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as t}from"./MenuItem-Dv70_nnm.js";import{I as j}from"./Icon-CGgPBvn_.js";import{u as S}from"./uk-uk-B30oV7IO.js";import"./index-DRjF_FHU.js";import"./Button-DquhqAJK.js";import"./colors-CUQOl70L.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";const z={title:"Pages/Patterns/Jurisdiction Dropdown",component:t,parameters:{layout:"centered",docs:{description:{component:`Prototype: Jurisdiction Dropdown

This prototype demonstrates how to compose a jurisdiction/settings dropdown
using MenuItem components within a card container.`}}}},r=()=>e.jsx("img",{src:S,alt:"UK",className:"size-6 rounded-sm object-cover"}),s={render:()=>e.jsxs("div",{className:"w-[376px] p-2 bg-card rounded-lg shadow-card",children:[e.jsx(t,{primaryText:"Review agent changes",secondaryText:"Review AI changes before applying",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(j,{name:"text-search",className:"size-6"}),width:"fill",showRSwitch:!0,rSwitchChecked:!0,rSwitchSize:"s"}),e.jsx(t,{primaryText:"Your jurisdiction",secondaryText:"England & Wales",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill",showRIcon1:!0,rIcon1:"chevron-right"})]})},n={render:()=>e.jsxs("div",{className:"w-[376px] p-2 bg-card rounded-lg shadow-card",children:[e.jsx(t,{primaryText:"Review agent changes",secondaryText:"Review AI changes before applying",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(j,{name:"text-search",className:"size-6"}),width:"fill",showRSwitch:!0,rSwitchChecked:!1,rSwitchSize:"s"}),e.jsx(t,{primaryText:"Your jurisdiction",secondaryText:"England & Wales",showSecondaryText:!0,showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill",showRIcon1:!0,rIcon1:"chevron-right"})]})},o={render:()=>e.jsxs("div",{className:"w-[376px] p-2 bg-card rounded-lg shadow-card",children:[e.jsx("div",{className:"px-3 py-2 mb-1",children:e.jsx("input",{type:"text",placeholder:"Search jurisdictions...",className:"w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:border-primary"})}),e.jsx(t,{primaryText:"United Kingdom",showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill",showBackground:!0}),e.jsx(t,{primaryText:"England & Wales",showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill",selected:!0,leftElement:"select"}),e.jsx(t,{primaryText:"Singapore",showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill"}),e.jsx(t,{primaryText:"Afghanistan",showLeftElement:!0,leftIcon:e.jsx(r,{}),width:"fill"})]})};var i,a,c,d,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      {/* Review agent changes - with switch */}
      <MenuItem primaryText="Review agent changes" secondaryText="Review AI changes before applying" showSecondaryText showLeftElement leftIcon={<Icon name="text-search" className="size-6" />} width="fill" showRSwitch rSwitchChecked={true} rSwitchSize="s" />

      {/* Your jurisdiction - with flag and chevron */}
      <MenuItem primaryText="Your jurisdiction" secondaryText="England & Wales" showSecondaryText showLeftElement leftIcon={<UKFlag />} width="fill" showRIcon1 rIcon1="chevron-right" />
    </div>
}`,...(c=(a=s.parameters)==null?void 0:a.docs)==null?void 0:c.source},description:{story:`Jurisdiction dropdown with:
- Review agent changes toggle (allows user to review AI changes before they're applied)
- Your jurisdiction selector with flag`,...(l=(d=s.parameters)==null?void 0:d.docs)==null?void 0:l.description}}};var h,m,p,w,u;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      <MenuItem primaryText="Review agent changes" secondaryText="Review AI changes before applying" showSecondaryText showLeftElement leftIcon={<Icon name="text-search" className="size-6" />} width="fill" showRSwitch rSwitchChecked={false} rSwitchSize="s" />

      <MenuItem primaryText="Your jurisdiction" secondaryText="England & Wales" showSecondaryText showLeftElement leftIcon={<UKFlag />} width="fill" showRIcon1 rIcon1="chevron-right" />
    </div>
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source},description:{story:"With switch disabled",...(u=(w=n.parameters)==null?void 0:w.docs)==null?void 0:u.description}}};var f,x,g,y,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div className="w-[376px] p-2 bg-card rounded-lg shadow-card">
      {/* Search input placeholder */}
      <div className="px-3 py-2 mb-1">
        <input type="text" placeholder="Search jurisdictions..." className="w-full px-3 py-2 text-sm bg-surface border border-border rounded-lg focus:outline-none focus:border-primary" />
      </div>

      {/* Jurisdiction items */}
      <MenuItem primaryText="United Kingdom" showLeftElement leftIcon={<UKFlag />} width="fill" showBackground />

      <MenuItem primaryText="England & Wales" showLeftElement leftIcon={<UKFlag />} width="fill" selected leftElement="select" />

      <MenuItem primaryText="Singapore" showLeftElement leftIcon={<UKFlag />} width="fill" />

      <MenuItem primaryText="Afghanistan" showLeftElement leftIcon={<UKFlag />} width="fill" />
    </div>
}`,...(g=(x=o.parameters)==null?void 0:x.docs)==null?void 0:g.source},description:{story:"Jurisdiction selection list (submenu view)",...(I=(y=o.parameters)==null?void 0:y.docs)==null?void 0:I.description}}};const F=["Default","SwitchDisabled","JurisdictionList"];export{s as Default,o as JurisdictionList,n as SwitchDisabled,F as __namedExportsOrder,z as default};
