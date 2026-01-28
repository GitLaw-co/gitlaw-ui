import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as x}from"./index-DRjF_FHU.js";const K={s:{track:"w-8 h-4",thumb:"w-3.5 h-3"},m:{track:"w-10 h-5",thumb:"w-5 h-4"}},s=({checked:a=!1,size:t="m",onChange:n,disabled:r=!1,className:g=""})=>{const c=K[t],S=()=>{r||n==null||n(!a)};return e.jsx("button",{type:"button",role:"switch","aria-checked":a,disabled:r,onClick:S,className:`
        relative inline-flex items-center
        rounded-sm py-0.5
        transition-colors
        ${c.track}
        ${a?"bg-primary justify-end pr-0.5":"bg-white border border-secondary-dark justify-start pl-0.5"}
        ${r?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${g}
      `,children:e.jsx("span",{className:`
          rounded-sm transition-colors
          ${c.thumb}
          ${a?"bg-white":"bg-secondary-dark"}
        `})})};s.__docgenInfo={description:"",methods:[],displayName:"Switch",props:{checked:{required:!1,tsType:{name:"boolean"},description:"Current checked state",defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'s' | 'm'",elements:[{name:"literal",value:"'s'"},{name:"literal",value:"'m'"}]},description:"The size of the switch",defaultValue:{value:"'m'",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Change handler"},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const W={title:"Components/Switch",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{checked:{control:"boolean",description:"Current checked state"},size:{control:"select",options:["s","m"],description:"The size of the switch"},disabled:{control:"boolean",description:"Disabled state"}}},i={args:{checked:!0,size:"m"}},o={args:{checked:!1,size:"m"}},d={args:{checked:!0,size:"s"}},l={args:{checked:!1,size:"s"}},m={args:{checked:!0,size:"m",disabled:!0}},u={args:{checked:!1,size:"m",disabled:!0}},p={render:()=>e.jsxs("div",{className:"flex flex-col gap-4",children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Medium On:"}),e.jsx(s,{checked:!0,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Medium Off:"}),e.jsx(s,{checked:!1,size:"m"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Small On:"}),e.jsx(s,{checked:!0,size:"s"})]}),e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:"w-24 text-sm",children:"Small Off:"}),e.jsx(s,{checked:!1,size:"s"})]})]})},L=()=>{const[a,t]=x.useState(!1);return e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx(s,{checked:a,onChange:t,size:"m"}),e.jsx("span",{className:"text-sm text-text-secondary",children:a?"On":"Off"})]})},f={render:()=>e.jsx(L,{})},h={render:()=>{const a=()=>{const[t,n]=x.useState(!0),[r,g]=x.useState(!1),[c,S]=x.useState(!0);return e.jsxs("div",{className:"flex flex-col gap-4 p-4 bg-white rounded-lg shadow-sm min-w-[300px]",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Notifications"}),e.jsx(s,{checked:t,onChange:n})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Dark Mode"}),e.jsx(s,{checked:r,onChange:g})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-medium",children:"Auto-save"}),e.jsx(s,{checked:c,onChange:S})]})]})};return e.jsx(a,{})}};var v,k,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'm'
  }
}`,...(w=(k=i.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var N,j,b;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'm'
  }
}`,...(b=(j=o.parameters)==null?void 0:j.docs)==null?void 0:b.source}}};var z,y,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 's'
  }
}`,...(O=(y=d.parameters)==null?void 0:y.docs)==null?void 0:O.source}}};var C,M,D;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 's'
  }
}`,...(D=(M=l.parameters)==null?void 0:M.docs)==null?void 0:D.source}}};var A,T,$;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    checked: true,
    size: 'm',
    disabled: true
  }
}`,...($=(T=m.parameters)==null?void 0:T.docs)==null?void 0:$.source}}};var q,E,I;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    checked: false,
    size: 'm',
    disabled: true
  }
}`,...(I=(E=u.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var V,_,U;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(U=(_=p.parameters)==null?void 0:_.docs)==null?void 0:U.source}}};var R,B,F;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: () => <InteractiveSwitch />
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var G,H,J;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(J=(H=h.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};const X=["On","Off","SmallOn","SmallOff","DisabledOn","DisabledOff","AllStates","Interactive","UsageExample"];export{p as AllStates,u as DisabledOff,m as DisabledOn,f as Interactive,o as Off,i as On,l as SmallOff,d as SmallOn,h as UsageExample,X as __namedExportsOrder,W as default};
