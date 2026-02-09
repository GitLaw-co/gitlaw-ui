import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as p}from"./index-DRjF_FHU.js";import{S as a}from"./Sidebar-D3SvkWVn.js";import"./Icon-CfPs8lnx.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./colors-CUQOl70L.js";const R={title:"Components/Navigation/Sidebar",component:a,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["landing","inner"],description:"Sidebar variant - landing (dark) or inner (light)"},status:{control:"radio",options:["collapsed","expanded"],description:"Sidebar status - collapsed or expanded"},user:{control:"radio",options:["signed-in","signed-out"],description:"User authentication status"},userName:{control:"text",description:"User name for profile"},userInitials:{control:"text",description:"User initials for avatar"}},decorators:[l=>e.jsx("div",{style:{height:"800px",display:"flex"},children:e.jsx(l,{})})]},t={args:{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},n={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed In - Landing - Collapsed"}),e.jsx(a,{variant:"landing",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed In - Landing - Expanded"}),e.jsx(a,{variant:"landing",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed In - Inner - Collapsed"}),e.jsx(a,{variant:"inner",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed In - Inner - Expanded"}),e.jsx(a,{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]})]}),parameters:{layout:"padded"}},i={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed Out - Landing - Expanded"}),e.jsx(a,{variant:"landing",status:"expanded",user:"signed-out"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{className:"text-xs text-text-secondary",children:"Signed Out - Inner - Expanded"}),e.jsx(a,{variant:"inner",status:"expanded",user:"signed-out"})]})]}),parameters:{layout:"padded"}},r={render:function(){const[s,x]=p.useState("expanded"),[d,I]=p.useState("inner");return e.jsxs("div",{style:{display:"flex",height:"800px"},children:[e.jsx(a,{variant:d,status:s,user:"signed-in",userName:"Alex Carter",userInitials:"AC",onToggle:()=>x(s==="collapsed"?"expanded":"collapsed")}),e.jsxs("div",{style:{padding:"16px",flex:1},children:[e.jsx("h3",{children:"Controls"}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsxs("button",{onClick:()=>x(s==="collapsed"?"expanded":"collapsed"),style:{marginRight:"8px",padding:"8px 16px"},children:["Toggle: ",s]}),e.jsxs("button",{onClick:()=>I(d==="landing"?"inner":"landing"),style:{padding:"8px 16px"},children:["Variant: ",d]})]})]})]})}};var o,c,u;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(u=(c=t.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var g,m,y;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    height: '800px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed In - Landing - Collapsed</span>
        <Sidebar variant="landing" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed In - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed In - Inner - Collapsed</span>
        <Sidebar variant="inner" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed In - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(y=(m=n.parameters)==null?void 0:m.docs)==null?void 0:y.source}}};var v,h,f;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: '24px',
    height: '800px'
  }}>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed Out - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-out" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span className="text-xs text-text-secondary">Signed Out - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-out" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,C,j;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: function InteractiveSidebar() {
    const [status, setStatus] = React.useState<'collapsed' | 'expanded'>('expanded');
    const [variant, setVariant] = React.useState<'landing' | 'inner'>('inner');
    return <div style={{
      display: 'flex',
      height: '800px'
    }}>
        <Sidebar variant={variant} status={status} user="signed-in" userName="Alex Carter" userInitials="AC" onToggle={() => setStatus(status === 'collapsed' ? 'expanded' : 'collapsed')} />
        <div style={{
        padding: '16px',
        flex: 1
      }}>
          <h3>Controls</h3>
          <div style={{
          marginTop: '8px'
        }}>
            <button onClick={() => setStatus(status === 'collapsed' ? 'expanded' : 'collapsed')} style={{
            marginRight: '8px',
            padding: '8px 16px'
          }}>
              Toggle: {status}
            </button>
            <button onClick={() => setVariant(variant === 'landing' ? 'inner' : 'landing')} style={{
            padding: '8px 16px'
          }}>
              Variant: {variant}
            </button>
          </div>
        </div>
      </div>;
  }
}`,...(j=(C=r.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const T=["Default","AllVariantsShowcase","SignedOutVariantsShowcase","Interactive"];export{n as AllVariantsShowcase,t as Default,r as Interactive,i as SignedOutVariantsShowcase,T as __namedExportsOrder,R as default};
