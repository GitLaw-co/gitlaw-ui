import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as p}from"./index-DRjF_FHU.js";import{I as t}from"./Icon-CCFihSvx.js";import{T}from"./Tooltip-BFq8Eu-V.js";const xe="data:image/svg+xml,%3csvg%20width='20'%20height='32'%20viewBox='0%200%2020%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9786_2648)'%3e%3cpath%20d='M15.325%208.82828L13.5551%2010.6061H18.9439V14.6058H16.2694L20.0308%2018.3841L17.2151%2021.2123L15.4447%2019.4339V24.8471H11.4629V22.1014L7.58169%2026L4.76616%2023.1717L6.5971%2021.3325H1.20666V17.3328H3.7607L0%2013.5552L2.81562%2010.7269L6.6977%2014.6266L4.00346%2017.3328H6.69672V21.2325L8.64824%2019.2722L11.4629%2022.0995V19.3324H15.3436L13.3331%2017.3128L16.0279%2014.6058H13.4538V10.7078L11.4428%2012.7278L8.68757%209.9601V12.6055H4.70578V7.09079H8.68757V9.83898L12.5094%206L15.325%208.82828Z'%20fill='%235E49D6'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9786_2648'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0%206)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",me=""+new URL("landing-logo-expanded-DtpASzJj.svg",import.meta.url).href,ge="data:image/svg+xml,%3csvg%20width='20'%20height='32'%20viewBox='0%200%2020%2032'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20clip-path='url(%23clip0_9786_1815)'%3e%3cpath%20d='M15.325%208.82828L13.5551%2010.6061H18.9439V14.6058H16.2694L20.0308%2018.3841L17.2151%2021.2123L15.4447%2019.4339V24.8471H11.4629V22.1014L7.58169%2026L4.76616%2023.1717L6.5971%2021.3325H1.20666V17.3328H3.7607L0%2013.5552L2.81562%2010.7269L6.6977%2014.6266L4.00346%2017.3328H6.69672V21.2325L8.64824%2019.2722L11.4629%2022.0995V19.3324H15.3436L13.3331%2017.3128L16.0279%2014.6058H13.4538V10.7078L11.4428%2012.7278L8.68757%209.9601V12.6055H4.70578V7.09079H8.68757V9.83898L12.5094%206L15.325%208.82828Z'%20fill='%23F7F6FF'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_9786_1815'%3e%3crect%20width='20'%20height='20'%20fill='white'%20transform='translate(0%206)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e",he=""+new URL("inner-logo-expanded-Dsc__ThS.svg",import.meta.url).href,n="size-5",fe=[{id:"new-chat",label:"New chat",icon:e.jsx(t,{name:"pen-line",className:n})},{id:"files",label:"Files",icon:e.jsx(t,{name:"folder-closed",className:n})},{id:"templates",label:"Templates",icon:e.jsx(t,{name:"layout-grid",className:n})},{id:"reminders",label:"Reminders",icon:e.jsx(t,{name:"bell",className:n})}],ve=[{id:"home",label:"Home",icon:e.jsx(t,{name:"home",className:n})},{id:"features",label:"Features",icon:e.jsx(t,{name:"sparkles",className:n})},{id:"pricing",label:"Pricing",icon:e.jsx(t,{name:"tag",className:n})},{id:"templates",label:"Templates",icon:e.jsx(t,{name:"layout-grid",className:n})},{id:"knowledge-base",label:"Knowledge base",icon:e.jsx(t,{name:"circle-help",className:n})},{id:"news",label:"News",icon:e.jsx(t,{name:"rss",className:n})}],ye=[{id:"today",label:"Chat history",isDateHeader:!0},{id:"1",label:"BlueCrate Studio Case: Freelanc..."},{id:"2",label:"MNDA with Nick Logan"},{id:"3",label:"Sarah Tan: Employee Offer Letter"},{id:"4",label:"MNDA with John Carter"},{id:"5",label:"Alpha Tech: Software Developme..."},{id:"6",label:"CloudSmith Solutions: Service-L..."},{id:"7",label:"MNDA with John Carter"},{id:"8",label:"Partnership Agreement: TechFlow"},{id:"9",label:"NDA Review: Quantum Labs"},{id:"10",label:"Employment Contract: Mike Chen"},{id:"11",label:"Vendor Agreement: DataSync Inc"},{id:"12",label:"IP Assignment: Creative Works"},{id:"13",label:"Lease Agreement: Office Space"},{id:"14",label:"Consulting Agreement: J. Smith"},{id:"15",label:"Terms of Service Review"},{id:"16",label:"Privacy Policy Draft"},{id:"17",label:"SaaS Agreement: CloudNine"}],l=({variant:u="inner",status:o="expanded",user:x="signed-in",menuItems:c,chatHistory:m=ye,userName:g="Alex Carter",userInitials:V="AC",userAvatar:h,onToggle:D,onMenuItemClick:L,onChatHistoryClick:w,className:ce=""})=>{const r=u==="landing",i=o==="collapsed",d=x==="signed-in",pe=c||(d?fe:ve),E=()=>r?i?ge:he:i?xe:me,s={bg:r?"bg-[#5E49D6]":"bg-sidebar-background",menuText:r?"text-text-button-negative":"text-text-button",menuIcon:r?"#F7F6FF":"#5E49D6",chatHeadingText:r?"text-text-ai-chat-placeholder":"text-text-secondary",chatItemText:r?"text-text-negative":"text-text-primary",chatIcon:r?"#F7F6FF":"#989898",hoverBg:r?"hover:bg-purple-600":"hover:bg-sidebar-hover",selectedBg:"bg-secondary"},ue=i?"w-16":"w-72";return e.jsxs("div",{className:`
        ${s.bg} ${ue}
        flex flex-col h-full min-h-[600px]
        px-2 py-3 relative
        transition-all duration-200
        ${ce}
      `,children:[d&&e.jsx("div",{className:`flex items-center shrink-0 ${i?"justify-center":"justify-between"} h-12`,children:i?e.jsx(T,{content:"Open sidebar",size:"m",type:"neutral",children:e.jsx("button",{type:"button",onClick:D,className:`flex items-center justify-center h-12 p-3 rounded ${s.hoverBg} transition-colors`,"aria-label":"Open sidebar",children:e.jsx("img",{src:E(),alt:"GitLaw",className:"h-8"})})}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex items-center px-3 h-12",children:e.jsx("img",{src:E(),alt:"GitLaw",className:"h-8"})}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{type:"button",className:`size-10 flex items-center justify-center rounded ${s.hoverBg} transition-colors`,"aria-label":"Search",children:e.jsx(t,{name:"search",className:n,color:s.menuIcon})}),e.jsx("button",{type:"button",onClick:D,className:`size-10 flex items-center justify-center rounded ${s.hoverBg} transition-colors`,"aria-label":"Collapse sidebar",children:e.jsx(t,{name:"chevrons-left",className:n,color:s.menuIcon})})]})]})}),!d&&e.jsx("div",{className:"flex-1"}),e.jsx("nav",{className:"flex flex-col shrink-0",children:pe.map(a=>{const k=e.jsxs("button",{type:"button",onClick:()=>L==null?void 0:L(a.id),className:`
                flex items-center gap-2 min-h-12 p-3 rounded w-full
                ${s.hoverBg} transition-colors
                ${a.active?s.selectedBg:""}
                ${i?"justify-center":""}
              `,children:[a.icon&&e.jsx("span",{className:"shrink-0",children:p.cloneElement(a.icon,{color:s.menuIcon,className:n})}),!i&&e.jsx("span",{className:`text-base font-normal ${s.menuText} truncate`,children:a.label})]},a.id);return i&&d?e.jsx(T,{content:a.label,size:"m",type:"neutral",children:k},a.id):e.jsx(p.Fragment,{children:k},a.id)})}),!d&&e.jsx("div",{className:"flex-1"}),!i&&d&&m.length>0&&e.jsx("div",{className:"flex flex-col mt-4 flex-1 min-h-0 overflow-y-auto",children:m.map(a=>e.jsx(p.Fragment,{children:a.isDateHeader?e.jsx("div",{className:`px-3 py-3 text-sm font-normal ${s.chatHeadingText}`,children:a.label}):e.jsxs("button",{type:"button",onClick:()=>w==null?void 0:w(a.id),className:`
                    flex items-center gap-2 min-h-12 p-3 rounded
                    ${s.hoverBg} transition-colors text-left
                  `,children:[e.jsx(t,{name:"message-circle",className:n,color:s.chatIcon}),e.jsx("span",{className:`text-sm font-normal ${s.chatItemText} truncate`,children:a.label})]})},a.id))}),i&&d&&e.jsx("div",{className:"flex-1"}),d&&e.jsx("div",{className:`shrink-0 pt-2 ${i?"flex justify-center":""}`,children:i?e.jsx(T,{content:g,size:"m",type:"neutral",children:e.jsx("button",{type:"button",className:"flex items-center justify-center min-h-12 p-3 rounded transition-colors",children:e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:h?e.jsx("img",{src:h,alt:g,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:V})})})}):e.jsxs("button",{type:"button",className:"flex items-center gap-2 min-h-12 p-3 rounded transition-colors w-full bg-card",children:[e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:h?e.jsx("img",{src:h,alt:g,className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:V})}),e.jsx("span",{className:"text-base font-normal text-text-primary truncate flex-1 text-left",children:g}),e.jsx(t,{name:"chevron-up",className:n,color:"#1B1B1F"})]})})]})};l.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{variant:{required:!1,tsType:{name:"union",raw:"'landing' | 'inner'",elements:[{name:"literal",value:"'landing'"},{name:"literal",value:"'inner'"}]},description:"Sidebar variant - landing (dark) or inner (light)",defaultValue:{value:"'inner'",computed:!1}},status:{required:!1,tsType:{name:"union",raw:"'collapsed' | 'expanded'",elements:[{name:"literal",value:"'collapsed'"},{name:"literal",value:"'expanded'"}]},description:"Sidebar status - collapsed or expanded",defaultValue:{value:"'expanded'",computed:!1}},user:{required:!1,tsType:{name:"union",raw:"'signed-in' | 'signed-out'",elements:[{name:"literal",value:"'signed-in'"},{name:"literal",value:"'signed-out'"}]},description:"User authentication status",defaultValue:{value:"'signed-in'",computed:!1}},menuItems:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarMenuItem"}],raw:"SidebarMenuItem[]"},description:"Main menu items"},chatHistory:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarChatHistoryItem"}],raw:"SidebarChatHistoryItem[]"},description:"Chat history items (shown in expanded signed-in state)",defaultValue:{value:`[
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
]`,computed:!1}},userName:{required:!1,tsType:{name:"string"},description:"User name for profile",defaultValue:{value:"'Alex Carter'",computed:!1}},userInitials:{required:!1,tsType:{name:"string"},description:"User initials for avatar",defaultValue:{value:"'AC'",computed:!1}},userAvatar:{required:!1,tsType:{name:"string"},description:"User avatar image"},onToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback when collapse/expand is toggled"},onMenuItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when menu item is clicked"},onChatHistoryClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(id: string) => void",signature:{arguments:[{type:{name:"string"},name:"id"}],return:{name:"void"}}},description:"Callback when chat history item is clicked"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const Ne={title:"Components/Sidebar",component:l,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"radio",options:["landing","inner"],description:"Sidebar variant - landing (dark) or inner (light)"},status:{control:"radio",options:["collapsed","expanded"],description:"Sidebar status - collapsed or expanded"},user:{control:"radio",options:["signed-in","signed-out"],description:"User authentication status"},userName:{control:"text",description:"User name for profile"},userInitials:{control:"text",description:"User initials for avatar"}},decorators:[u=>e.jsx("div",{style:{height:"800px",display:"flex"},children:e.jsx(u,{})})]},f={args:{variant:"landing",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},v={args:{variant:"landing",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},y={args:{variant:"inner",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},b={args:{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},S={args:{variant:"landing",status:"expanded",user:"signed-out"}},j={args:{variant:"inner",status:"expanded",user:"signed-out"}},C={args:{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"}},N={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Landing - Collapsed"}),e.jsx(l,{variant:"landing",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Landing - Expanded"}),e.jsx(l,{variant:"landing",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Inner - Collapsed"}),e.jsx(l,{variant:"inner",status:"collapsed",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed In - Inner - Expanded"}),e.jsx(l,{variant:"inner",status:"expanded",user:"signed-in",userName:"Alex Carter",userInitials:"AC"})]})]}),parameters:{layout:"padded"}},I={render:()=>e.jsxs("div",{style:{display:"flex",gap:"24px",height:"800px"},children:[e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed Out - Landing - Expanded"}),e.jsx(l,{variant:"landing",status:"expanded",user:"signed-out"})]}),e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[e.jsx("span",{style:{fontSize:"12px",color:"#666"},children:"Signed Out - Inner - Expanded"}),e.jsx(l,{variant:"inner",status:"expanded",user:"signed-out"})]})]}),parameters:{layout:"padded"}},A={render:function(){const[o,x]=p.useState("expanded"),[c,m]=p.useState("inner");return e.jsxs("div",{style:{display:"flex",height:"800px"},children:[e.jsx(l,{variant:c,status:o,user:"signed-in",userName:"Alex Carter",userInitials:"AC",onToggle:()=>x(o==="collapsed"?"expanded":"collapsed")}),e.jsxs("div",{style:{padding:"16px",flex:1},children:[e.jsx("h3",{children:"Controls"}),e.jsxs("div",{style:{marginTop:"8px"},children:[e.jsxs("button",{onClick:()=>x(o==="collapsed"?"expanded":"collapsed"),style:{marginRight:"8px",padding:"8px 16px"},children:["Toggle: ",o]}),e.jsxs("button",{onClick:()=>m(c==="landing"?"inner":"landing"),style:{padding:"8px 16px"},children:["Variant: ",c]})]})]})]})}};var H,F,z;f.parameters={...f.parameters,docs:{...(H=f.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(z=(F=f.parameters)==null?void 0:F.docs)==null?void 0:z.source}}};var O,_,$;v.parameters={...v.parameters,docs:{...(O=v.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...($=(_=v.parameters)==null?void 0:_.docs)==null?void 0:$.source}}};var B,R,P;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'collapsed',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(P=(R=y.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var q,M,U;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(U=(M=b.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};var J,Z,G;S.parameters={...S.parameters,docs:{...(J=S.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    status: 'expanded',
    user: 'signed-out'
  }
}`,...(G=(Z=S.parameters)==null?void 0:Z.docs)==null?void 0:G.source}}};var Q,W,K;j.parameters={...j.parameters,docs:{...(Q=j.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-out'
  }
}`,...(K=(W=j.parameters)==null?void 0:W.docs)==null?void 0:K.source}}};var X,Y,ee;C.parameters={...C.parameters,docs:{...(X=C.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    variant: 'inner',
    status: 'expanded',
    user: 'signed-in',
    userName: 'Alex Carter',
    userInitials: 'AC'
  }
}`,...(ee=(Y=C.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var ae,ne,se;N.parameters={...N.parameters,docs:{...(ae=N.parameters)==null?void 0:ae.docs,source:{originalSource:`{
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
}`,...(se=(ne=N.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var te,ie,re;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(re=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var le,de,oe;A.parameters={...A.parameters,docs:{...(le=A.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(oe=(de=A.parameters)==null?void 0:de.docs)==null?void 0:oe.source}}};const Ie=["SignedInLandingCollapsed","SignedInLandingExpanded","SignedInInnerCollapsed","SignedInInnerExpanded","SignedOutLandingExpanded","SignedOutInnerExpanded","Default","AllVariantsShowcase","SignedOutVariantsShowcase","Interactive"];export{N as AllVariantsShowcase,C as Default,A as Interactive,y as SignedInInnerCollapsed,b as SignedInInnerExpanded,f as SignedInLandingCollapsed,v as SignedInLandingExpanded,j as SignedOutInnerExpanded,S as SignedOutLandingExpanded,I as SignedOutVariantsShowcase,Ie as __namedExportsOrder,Ne as default};
