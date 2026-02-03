import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as p}from"./index-DRjF_FHU.js";import{S as s}from"./Switch-TBqG44c8.js";const X={title:"Components/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Current checked state"},size:{control:"select",options:["s","m"],description:"The size of the switch"},disabled:{control:"boolean",description:"Disabled state"}}},t={args:{checked:!0,size:"m"}},n={args:{checked:!1,size:"m"}},c={args:{checked:!0,size:"s"}},r={args:{checked:!1,size:"s"}},i={args:{checked:!0,size:"m",disabled:!0}},o={args:{checked:!1,size:"m",disabled:!0}},d={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Medium On:"}),e.jsx(s,{checked:!0,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Medium Off:"}),e.jsx(s,{checked:!1,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Small On:"}),e.jsx(s,{checked:!0,size:"s"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Small Off:"}),e.jsx(s,{checked:!1,size:"s"})]})]})},P=()=>{const[a,u]=p.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:a,onChange:u,size:"m"}),e.jsx("span",{className:"text-sm text-subtle",children:a?"On":"Off"})]})},m={render:()=>e.jsx(P,{})},l={render:()=>{const a=()=>{const[u,G]=p.useState(!0),[H,J]=p.useState(!1),[K,L]=p.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm min-w-[300px]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Notifications"}),e.jsx(s,{checked:u,onChange:G})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Dark Mode"}),e.jsx(s,{checked:H,onChange:J})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Auto-save"}),e.jsx(s,{checked:K,onChange:L})]})]})};return e.jsx(a,{})}};var f,h,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'm'
  }
}`,...(x=(h=t.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};var g,S,v;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'm'
  }
}`,...(v=(S=n.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var N,k,j;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 's'
  }
}`,...(j=(k=c.parameters)==null?void 0:k.docs)==null?void 0:j.source}}};var w,z,O;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 's'
  }
}`,...(O=(z=r.parameters)==null?void 0:z.docs)==null?void 0:O.source}}};var b,M,C;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'm',
    disabled: true
  }
}`,...(C=(M=i.parameters)==null?void 0:M.docs)==null?void 0:C.source}}};var D,y,A;o.parameters={...o.parameters,docs:{...(D=o.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'm',
    disabled: true
  }
}`,...(A=(y=o.parameters)==null?void 0:y.docs)==null?void 0:A.source}}};var E,I,T;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Medium On:</span>
        <Switch checked size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Medium Off:</span>
        <Switch checked={false} size="m" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Small On:</span>
        <Switch checked size="s" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Small Off:</span>
        <Switch checked={false} size="s" />
      </div>
    </div>
}`,...(T=(I=d.parameters)==null?void 0:I.docs)==null?void 0:T.source}}};var U,_,R;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />
}`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};var q,B,F;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    const SwitchSettings = () => {
      const [notifications, setNotifications] = useState(true);
      const [darkMode, setDarkMode] = useState(false);
      const [autoSave, setAutoSave] = useState(true);
      return <div className="flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm min-w-[300px]">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Notifications</span>
            <Switch checked={notifications} onChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Dark Mode</span>
            <Switch checked={darkMode} onChange={setDarkMode} />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium">Auto-save</span>
            <Switch checked={autoSave} onChange={setAutoSave} />
          </div>
        </div>;
    };
    return <SwitchSettings />;
  }
}`,...(F=(B=l.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};const Y=["On","Off","SmallOn","SmallOff","DisabledOn","DisabledOff","AllStates","Interactive","UsageExample"];export{d as AllStates,o as DisabledOff,i as DisabledOn,m as Interactive,n as Off,t as On,r as SmallOff,c as SmallOn,l as UsageExample,Y as __namedExportsOrder,X as default};
