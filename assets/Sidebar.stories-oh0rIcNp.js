import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as u}from"./index-DRjF_FHU.js";import{I as t,c as p}from"./Icon-D7PltpT4.js";import{T as V}from"./Tooltip-BFq8Eu-V.js";const xe="data:image/svg+xml,%3csvg%20width='20'%20height='32'%20viewBox='0%200%2020%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9786_2648)'%3e%3cpath%20d='M15.325%208.82828L13.5551%2010.6061H18.9439V14.6058H16.2694L20.0308%2018.3841L17.2151%2021.2123L15.4447%2019.4339V24.8471H11.4629V22.1014L7.58169%2026L4.76616%2023.1717L6.5971%2021.3325H1.20666V17.3328H3.7607L0%2013.5552L2.81562%2010.7269L6.6977%2014.6266L4.00346%2017.3328H6.69672V21.2325L8.64824%2019.2722L11.4629%2022.0995V19.3324H15.3436L13.3331%2017.3128L16.0279%2014.6058H13.4538V10.7078L11.4428%2012.7278L8.68757%209.9601V12.6055H4.70578V7.09079H8.68757V9.83898L12.5094%206L15.325%208.82828Z'%20fill='%235E49D6'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9786_2648'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0%206)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",ge=""+new URL("landing-logo-expanded-DtpASzJj.svg",import.meta.url).href,he="data:image/svg+xml,%3csvg%20width='20'%20height='32'%20viewBox='0%200%2020%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9786_1815)'%3e%3cpath%20d='M15.325%208.82828L13.5551%2010.6061H18.9439V14.6058H16.2694L20.0308%2018.3841L17.2151%2021.2123L15.4447%2019.4339V24.8471H11.4629V22.1014L7.58169%2026L4.76616%2023.1717L6.5971%2021.3325H1.20666V17.3328H3.7607L0%2013.5552L2.81562%2010.7269L6.6977%2014.6266L4.00346%2017.3328H6.69672V21.2325L8.64824%2019.2722L11.4629%2022.0995V19.3324H15.3436L13.3331%2017.3128L16.0279%2014.6058H13.4538V10.7078L11.4428%2012.7278L8.68757%209.9601V12.6055H4.70578V7.09079H8.68757V9.83898L12.5094%206L15.325%208.82828Z'%20fill='%23F7F6FF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9786_1815'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0%206)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",fe=""+new URL("inner-logo-expanded-Dsc__ThS.svg",import.meta.url).href,s="size-5",ve=[{id:"new-chat",label:"New chat",icon:e.jsx(t,{name:"pen-line",className:s})},{id:"files",label:"Files",icon:e.jsx(t,{name:"folder-closed",className:s})},{id:"templates",label:"Templates",icon:e.jsx(t,{name:"layout-grid",className:s})},{id:"reminders",label:"Reminders",icon:e.jsx(t,{name:"bell",className:s})}],ye=[{id:"home",label:"Home",icon:e.jsx(t,{name:"home",className:s})},{id:"features",label:"Features",icon:e.jsx(t,{name:"sparkles",className:s})},{id:"pricing",label:"Pricing",icon:e.jsx(t,{name:"tag",className:s})},{id:"templates",label:"Templates",icon:e.jsx(t,{name:"layout-grid",className:s})},{id:"knowledge-base",label:"Knowledge base",icon:e.jsx(t,{name:"circle-help",className:s})},{id:"news",label:"News",icon:e.jsx(t,{name:"rss",className:s})}],be=[{id:"today",label:"Chat history",isDateHeader:!0},{id:"1",label:"BlueCrate Studio Case: Freelanc..."},{id:"2",label:"MNDA with Nick Logan"},{id:"3",label:"Sarah Tan: Employee Offer Letter"},{id:"4",label:"MNDA with John Carter"},{id:"5",label:"Alpha Tech: Software Developme..."},{id:"6",label:"CloudSmith Solutions: Service-L..."},{id:"7",label:"MNDA with John Carter"},{id:"8",label:"Partnership Agreement: TechFlow"},{id:"9",label:"NDA Review: Quantum Labs"},{id:"10",label:"Employment Contract: Mike Chen"},{id:"11",label:"Vendor Agreement: DataSync Inc"},{id:"12",label:"IP Assignment: Creative Works"},{id:"13",label:"Lease Agreement: Office Space"},{id:"14",label:"Consulting Agreement: J. Smith"},{id:"15",label:"Terms of Service Review"},{id:"16",label:"Privacy Policy Draft"},{id:"17",label:"SaaS Agreement: CloudNine"}],l=({variant:m="inner",status:o="expanded",user:x="signed-in",menuItems:c,chatHistory:g=be,userName:h="Alex Carter",userInitials:D="AC",userAvatar:f,onToggle:E,onMenuItemClick:w,onChatHistoryClick:T,className:pe=""})=>{const r=m==="landing",i=o==="collapsed",d=x==="signed-in",ue=c||(d?ve:ye),k=()=>r?i?he:fe:i?xe:ge,a={bg:r?"bg-primary":"bg-sidebar-background",menuText:r?"text-text-button-negative":"text-text-button",menuIcon:r?p.iconNegative:p.iconPrimary,chatHeadingText:r?"text-text-ai-chat-placeholder":"text-text-secondary",chatItemText:r?"text-text-negative":"text-text-primary",chatIcon:r?p.iconNegative:p.iconSecondary,hoverBg:r?"hover:bg-purple-600":"hover:bg-sidebar-hover",selectedBg:"bg-secondary",textPrimary:p.textPrimary},me=i?"w-16":"w-72";return e.jsxs("div",{className:`
        ${a.bg} ${me}
        flex flex-col h-full min-h-[600px]
        px-2 py-3 relative
        transition-all duration-200
        ${pe}
      `,children:[d&&e.jsx("div",{className:`flex items-center shrink-0 ${i?"justify-center":"justify-between"} h-12`,children:i?e.jsx(V,{content:"Open sidebar",size:"m",type:"neutral",children:e.jsx("button",{type:"button",onClick:E,className:`flex items-center justify-center h-12 p-3 rounded ${a.hoverBg} transition-colors`,"aria-label":"Open sidebar",children:e.jsx("img",{src:k(),alt:"GitLaw",className:"h-8"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center px-3 h-12",children:e.jsx("img",{src:k(),alt:"GitLaw",className:"h-8"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{type:"button",className:`size-10 flex items-center justify-center rounded ${a.hoverBg} transition-colors`,"aria-label":"Search",children:e.jsx(t,{name:"search",className:s,color:a.menuIcon})}),e.jsx("button",{type:"button",onClick:E,className:`size-10 flex items-center justify-center rounded ${a.hoverBg} transition-colors`,"aria-label":"Collapse sidebar",children:e.jsx(t,{name:"chevrons-left",className:s,color:a.menuIcon})})]})]})}),!d&&e.jsx("div",{className:"flex-1"}),e.jsx("nav",{className:"flex flex-col shrink-0",children:ue.map(n=>{const H=e.jsxs("button",{type:"button",onClick:()=>w==null?void 0:w(n.id),className:`
                flex items-center gap-2 min-h-12 p-3 rounded w-full
                ${a.hoverBg} transition-colors
                ${n.active?a.selectedBg:""}
                ${i?"justify-center":""}
              `,children:[n.icon&&e.jsx("span",{className:"shrink-0",children:u.cloneElement(n.icon,{color:a.menuIcon,className:s})}),!i&&e.jsx("span",{className:`text-base font-normal ${a.menuText} truncate`,children:n.label})]},n.id);return i&&d?e.jsx(V,{content:n.label,size:"m",type:"neutral",children:H},n.id):e.jsx(u.Fragment,{children:H},n.id)})}),!d&&e.jsx("div",{className:"flex-1"}),!i&&d&&g.length>0&&e.jsx("div",{className:"flex flex-col mt-4 flex-1 min-h-0 overflow-y-auto",children:g.map(n=>e.jsx(u.Fragment,{children:n.isDateHeader?e.jsx("div",{className:`px-3 py-3 text-sm font-normal ${a.chatHeadingText}`,children:n.label}):e.jsxs("button",{type:"button",onClick:()=>T==null?void 0:T(n.id),className:`
                    flex items-center gap-2 min-h-12 p-3 rounded
                    ${a.hoverBg} transition-colors text-left
                  `,children:[e.jsx(t,{name:"message-circle",className:s,color:a.chatIcon}),e.jsx("span",{className:`text-sm font-normal ${a.chatItemText} truncate`,children:n.label})]})},n.id))}),i&&d&&e.jsx("div",{className:"flex-1"}),d&&e.jsx("div",{className:`shrink-0 pt-2 ${i?"flex justify-center":""}`,children:i?e.jsx(V,{content:h,size:"m",type:"neutral",children:e.jsx("button",{type:"button",className:"flex items-center justify-center min-h-12 p-3 rounded transition-colors",children:e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:f?e.jsx("img",{src:f,alt:h,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:D})})})}):e.jsxs("button",{type:"button",className:"flex items-center gap-2 min-h-12 p-3 rounded transition-colors w-full bg-card",children:[e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:f?e.jsx("img",{src:f,alt:h,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:D})}),e.jsx("span",{className:"text-base font-normal text-text-primary truncate flex-1 text-left",children:h}),e.jsx(t,{name:"chevron-up",className:s,color:a.textPrimary})]})})]})};l.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{variant:{required:!1,tsType:{name:"union",raw:"'landing' | 'inner'",elements:[{name:"literal",value:"'landing'"},{name:"literal",value:"'inner'"}]},description:"Sidebar variant - landing (dark) or inner (light)",defaultValue:{value:"'inner'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'collapsed' | 'expanded'",elements:[{name:"literal",value:"'collapsed'"},{name:"literal",value:"'expanded'"}]},description:"Sidebar status - collapsed or expanded",defaultValue:{value:"'expanded'",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"'signed-in' | 'signed-out'",elements:[{name:"literal",value:"'signed-in'"},{name:"literal",value:"'signed-out'"}]},description:"User authentication status",defaultValue:{value:"'signed-in'",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarMenuItem"}],raw:"SidebarMenuItem[]"},description:"Main menu items"},chatHistory:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarChatHistoryItem"}],raw:"SidebarChatHistoryItem[]"},description:"Chat history items (shown in expanded signed-in state)",defaultValue:{value:`[
  { id: 'today', label: 'Chat history', isDateHeader: true },
  { id: '1', label: 'BlueCrate Studio Case: Freelanc...' },
  { id: '2', label: 'MNDA with Nick Logan' },
  { id: '3', label: 'Sarah Tan: Employee Offer Letter' },
  { id: '4', label: 'MNDA with John Carter' },
  { id: '5', label: 'Alpha Tech: Software Developme...' },
  { id: '6', label: 'CloudSmith Solutions: Service-L...' },
  { id: '7', label: 'MNDA with John Carter' },
  { id: '8', label: 'Partnership Agreement: TechFlow' },
  { id: '9', label: 'NDA Review: Quantum Labs' },
  { id: '10', label: 'Employment Contract: Mike Chen' },
  { id: '11', label: 'Vendor Agreement: DataSync Inc' },
  { id: '12', label: 'IP Assignment: Creative Works' },
  { id: '13', label: 'Lease Agreement: Office Space' },
  { id: '14', label: 'Consulting Agreement: J. Smith' },
  { id: '15', label: 'Terms of Service Review' },
  { id: '16', label: 'Privacy Policy Draft' },
  { id: '17', label: 'SaaS Agreement: CloudNine' },
]`,computed:!1}},userName:{required:!1,tsType:{name:"string"},description:"User name for profile",defaultValue:{value:"'Alex Carter'",computed:!1}},userInitials:{required:!1,tsType:{name:"string"},description:"User initials for avatar",defaultValue:{value:"'AC'",computed:!1}},userAvatar:{required:!1,tsType:{name:"string"},description:"User avatar image"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when collapse/expand is toggled"},onMenuItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when menu item is clicked"},onChatHistoryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when chat history item is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const Ie={title:"Components/Sidebar",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["landing","inner"],description:"Sidebar variant - landing (dark) or inner (light)"},status:{control:"radio",options:["collapsed","expanded"],description:"Sidebar status - collapsed or expanded"},user:{control:"radio",options:["signed-in","signed-out"],description:"User authentication status"},userName:{control:"text",description:"User name for profile"},userInitials:{control:"text",description:"User initials for avatar"}},decorators:[m=>e.jsx("div",{style:{height:"800px",display:"flex"},children:e.jsx(m,{})})]},v={args:{variant:"landing",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},y={args:{variant:"landing",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},b={args:{variant:"inner",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},S={args:{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},j={args:{variant:"landing",status:"expanded",user:"signed-out"}},C={args:{variant:"inner",status:"expanded",user:"signed-out"}},N={args:{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},I={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Landing - Collapsed"}),e.jsx(l,{variant:"landing",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Landing - Expanded"}),e.jsx(l,{variant:"landing",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Inner - Collapsed"}),e.jsx(l,{variant:"inner",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Inner - Expanded"}),e.jsx(l,{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]})]}),parameters:{layout:"padded"}},A={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed Out - Landing - Expanded"}),e.jsx(l,{variant:"landing",status:"expanded",user:"signed-out"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed Out - Inner - Expanded"}),e.jsx(l,{variant:"inner",status:"expanded",user:"signed-out"})]})]}),parameters:{layout:"padded"}},L={render:function(){const[o,x]=u.useState("expanded"),[c,g]=u.useState("inner");return e.jsxs("div",{style:{display:"flex",height:"800px"},children:[e.jsx(l,{variant:c,status:o,user:"signed-in",userName:"Alex Carter",userInitials:"AC",onToggle:()=>x(o==="collapsed"?"expanded":"collapsed")}),e.jsxs("div",{style:{padding:"16px",flex:1},children:[e.jsx("h3",{children:"Controls"}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsxs("button",{onClick:()=>x(o==="collapsed"?"expanded":"collapsed"),style:{marginRight:"8px",padding:"8px 16px"},children:["Toggle: ",o]}),e.jsxs("button",{onClick:()=>g(c==="landing"?"inner":"landing"),style:{padding:"8px 16px"},children:["Variant: ",c]})]})]})]})}};var z,O,P;v.parameters={...v.parameters,docs:{...(z=v.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(P=(O=v.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var _,$,R;y.parameters={...y.parameters,docs:{...(_=y.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(R=($=y.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var F,q,B;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(B=(q=b.parameters)==null?void 0:q.docs)==null?void 0:B.source}}};var M,U,J;S.parameters={...S.parameters,docs:{...(M=S.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(J=(U=S.parameters)==null?void 0:U.docs)==null?void 0:J.source}}};var Z,G,Q;j.parameters={...j.parameters,docs:{...(Z=j.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-out'
  }
}`,...(Q=(G=j.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var W,K,X;C.parameters={...C.parameters,docs:{...(W=C.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-out'
  }
}`,...(X=(K=C.parameters)==null?void 0:K.docs)==null?void 0:X.source}}};var Y,ee,ae;N.parameters={...N.parameters,docs:{...(Y=N.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(ae=(ee=N.parameters)==null?void 0:ee.docs)==null?void 0:ae.source}}};var ne,se,te;I.parameters={...I.parameters,docs:{...(ne=I.parameters)==null?void 0:ne.docs,source:{originalSource:`{
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
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed In - Landing - Collapsed</span>
        <Sidebar variant="landing" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed In - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed In - Inner - Collapsed</span>
        <Sidebar variant="inner" status="collapsed" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed In - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-in" userName="Alex Carter" userInitials="AC" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(te=(se=I.parameters)==null?void 0:se.docs)==null?void 0:te.source}}};var ie,re,le;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
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
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed Out - Landing - Expanded</span>
        <Sidebar variant="landing" status="expanded" user="signed-out" />
      </div>
      <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <span style={{
        fontSize: '12px',
        color: '#666'
      }}>Signed Out - Inner - Expanded</span>
        <Sidebar variant="inner" status="expanded" user="signed-out" />
      </div>
    </div>,
  parameters: {
    layout: 'padded'
  }
}`,...(le=(re=A.parameters)==null?void 0:re.docs)==null?void 0:le.source}}};var de,oe,ce;L.parameters={...L.parameters,docs:{...(de=L.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(oe=L.parameters)==null?void 0:oe.docs)==null?void 0:ce.source}}};const Ae=["SignedInLandingCollapsed","SignedInLandingExpanded","SignedInInnerCollapsed","SignedInInnerExpanded","SignedOutLandingExpanded","SignedOutInnerExpanded","Default","AllVariantsShowcase","SignedOutVariantsShowcase","Interactive"];export{I as AllVariantsShowcase,N as Default,L as Interactive,b as SignedInInnerCollapsed,S as SignedInInnerExpanded,v as SignedInLandingCollapsed,y as SignedInLandingExpanded,C as SignedOutInnerExpanded,j as SignedOutLandingExpanded,A as SignedOutVariantsShowcase,Ae as __namedExportsOrder,Ie as default};
