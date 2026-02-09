import{j as e}from"./jsx-runtime-DiklIkkE.js";import{r as j}from"./index-DRjF_FHU.js";const r=({status:s=!1,disabled:t=!1,onChange:a,className:d=""})=>{const c=()=>{t||a==null||a(!s)};return e.jsx("button",{type:"button",onClick:c,disabled:t,className:`
        size-4 rounded-full border bg-card shrink-0 relative
        transition-colors duration-fast ease-gitlaw
        ${s?"border-primary":"border-border"}
        ${t?"opacity-50 cursor-not-allowed":"cursor-pointer"}
        ${d}
      `,"aria-checked":s,role:"radio",children:s&&e.jsx("div",{className:"absolute inset-[3px] bg-primary rounded-full"})})};r.__docgenInfo={description:"",methods:[],displayName:"Radio",props:{status:{required:!1,tsType:{name:"boolean"},description:"Radio state",defaultValue:{value:"false",computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Disabled state",defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(status: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"status"}],return:{name:"void"}}},description:"Change handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:'""',computed:!1}}}};const R={title:"Components/Form/Radio",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"boolean",description:"Radio state (on / off)"},disabled:{control:"boolean",description:"Disabled state"}}},n={args:{status:!1,disabled:!1}},l={render:()=>e.jsxs("div",{className:"flex items-center gap-6",children:[e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{status:!1}),e.jsx("span",{className:"text-xs text-subtle",children:"Off"})]}),e.jsxs("div",{className:"flex flex-col items-center gap-2",children:[e.jsx(r,{status:!0}),e.jsx("span",{className:"text-xs text-subtle",children:"On"})]})]})},i={render:()=>{const s=()=>{const[t,a]=j.useState(0),d=["Option A","Option B","Option C"];return e.jsx("div",{className:"flex flex-col gap-3 p-4 bg-card rounded-lg min-w-[240px]",children:d.map((c,o)=>e.jsxs("div",{className:"flex items-center gap-3 cursor-pointer",onClick:()=>a(o),children:[e.jsx(r,{status:t===o,onChange:()=>a(o)}),e.jsx("span",{className:"text-sm text-foreground",children:c})]},o))})};return e.jsx(s,{})}};var p,u,m;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    status: false,
    disabled: false
  }
}`,...(m=(u=n.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var x,f,g;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div className="flex items-center gap-6">
      <div className="flex flex-col items-center gap-2">
        <Radio status={false} />
        <span className="text-xs text-subtle">Off</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Radio status={true} />
        <span className="text-xs text-subtle">On</span>
      </div>
    </div>
}`,...(g=(f=l.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var b,v,N;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: () => {
    const RadioGroupExample = () => {
      const [selected, setSelected] = useState(0);
      const options = ['Option A', 'Option B', 'Option C'];
      return <div className="flex flex-col gap-3 p-4 bg-card rounded-lg min-w-[240px]">
          {options.map((label, i) => <div key={i} className="flex items-center gap-3 cursor-pointer" onClick={() => setSelected(i)}>
              <Radio status={selected === i} onChange={() => setSelected(i)} />
              <span className="text-sm text-foreground">{label}</span>
            </div>)}
        </div>;
    };
    return <RadioGroupExample />;
  }
}`,...(N=(v=i.parameters)==null?void 0:v.docs)==null?void 0:N.source}}};const S=["Default","AllStates","RadioGroup"];export{l as AllStates,n as Default,i as RadioGroup,S as __namedExportsOrder,R as default};
