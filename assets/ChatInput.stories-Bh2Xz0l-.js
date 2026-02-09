import{j as t}from"./jsx-runtime-DiklIkkE.js";import{r as i}from"./index-DRjF_FHU.js";import{C as e}from"./ChatInput-DU6C6oU_.js";import{M as c}from"./MenuItem-Dv70_nnm.js";import{I as S}from"./Icon-CGgPBvn_.js";import{u as I}from"./uk-uk-B30oV7IO.js";import"./index-DIvcuAjW.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./colors-CUQOl70L.js";import"./Button-DquhqAJK.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";const K={title:"Chat/ChatInput",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:["active","populated","working"],description:"Input status"},size:{control:"select",options:["l","m"],description:"Input size"},placeholder:{control:"text",description:"Static placeholder text (overrides animated placeholders)"},animatedPlaceholders:{control:"object",description:"Array of placeholders to rotate through with animation"},placeholderInterval:{control:"number",description:"Interval in ms between placeholder rotations (default: 3000)"},value:{control:"text",description:"Input value"},showQuickActions:{control:"boolean",description:"Show quick actions"}},decorators:[s=>t.jsx("div",{className:"bg-page-background p-8",style:{width:"700px"},children:t.jsx(s,{})})]},o={args:{status:"active",size:"l",value:"",showQuickActions:!0}},n={render:()=>t.jsxs("div",{className:"flex flex-col gap-6",children:[t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Working State"}),t.jsx(e,{status:"working",size:"l"})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Active State (Animated Placeholders)"}),t.jsx(e,{status:"active",size:"l"})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Populated State (With Text)"}),t.jsx(e,{status:"populated",size:"l",value:"User is typing here"})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"text-sm font-semibold mb-4 text-subtle",children:"Medium Size"}),t.jsx(e,{status:"active",size:"m"})]})]})},C=()=>t.jsx("img",{src:I,alt:"UK",className:"size-6 rounded-sm object-cover"});function z(){const[s,a]=i.useState(!1),[v,b]=i.useState(!0),f=t.jsxs("div",{className:"w-[376px] p-2 bg-card rounded-lg shadow-card",children:[t.jsx(c,{primaryText:"Review agent changes",secondaryText:"Review AI changes before applying",showSecondaryText:!0,showLeftElement:!0,leftIcon:t.jsx(S,{name:"text-search",className:"size-6"}),width:"fill",showRSwitch:!0,rSwitchChecked:v,rSwitchSize:"s",onRSwitchChange:j=>b(j)}),t.jsx(c,{primaryText:"Your jurisdiction",secondaryText:"England & Wales",showSecondaryText:!0,showLeftElement:!0,leftIcon:t.jsx(C,{}),width:"fill",showRIcon1:!0,rIcon1:"chevron-right"})]});return t.jsx(e,{status:"active",size:"l",onSettingsClick:()=>a(!s),showSettingsDropdown:s,settingsDropdownContent:f,settingsDropdownPosition:"top",onSettingsDropdownClose:()=>a(!1)})}const r={render:()=>t.jsx(z,{}),parameters:{docs:{description:{story:"Click the settings icon to toggle the jurisdiction and settings dropdown."}}}};var l,d,p;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    status: 'active',
    size: 'l',
    value: '',
    showQuickActions: true
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,u,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Working State</h3>
        <ChatInput status="working" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Active State (Animated Placeholders)</h3>
        <ChatInput status="active" size="l" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Populated State (With Text)</h3>
        <ChatInput status="populated" size="l" value="User is typing here" />
      </div>
      <div>
        <h3 className="text-sm font-semibold mb-4 text-subtle">Medium Size</h3>
        <ChatInput status="active" size="m" />
      </div>
    </div>
}`,...(h=(u=n.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,w;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <ChatInputWithDropdown />,
  parameters: {
    docs: {
      description: {
        story: 'Click the settings icon to toggle the jurisdiction and settings dropdown.'
      }
    }
  }
}`,...(w=(g=r.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const L=["Default","AllStates","WithSettingsDropdown"];export{n as AllStates,o as Default,r as WithSettingsDropdown,L as __namedExportsOrder,K as default};
