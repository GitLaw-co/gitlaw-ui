import{j as e}from"./jsx-runtime-DiklIkkE.js";import{R as M}from"./index-DRjF_FHU.js";import{S as re,F as h,a as b}from"./SidebarNavItem-Dhtkwn5r.js";import{S as ie}from"./SidebarSubItem-DuOQCIl9.js";import{S as oe}from"./SidebarProfileSwitch-BEjGroXF.js";import{S as le}from"./SidebarActions-CJrThlYE.js";import{B as de}from"./Building-xpjyteuL.js";import"./ChevronDown-C78wlgpO.js";import"./LogOut-BubIABas.js";const G=({className:s="size-6",color:n="currentColor"})=>e.jsxs("svg",{className:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"m11 17-5-5 5-5"}),e.jsx("path",{d:"m18 17-5-5 5-5"})]});G.__docgenInfo={description:"",methods:[],displayName:"ChevronsLeft",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const x=({className:s="size-6",color:n="currentColor"})=>e.jsxs("svg",{className:s,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M5 12h14"}),e.jsx("path",{d:"M12 5v14"})]});x.__docgenInfo={description:"",methods:[],displayName:"Plus",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const ce=[{id:"documents",label:"Documents",icon:e.jsx(h,{className:"size-5"}),children:[{id:"sub1",label:"Sub Item"},{id:"sub2",label:"Sub Item"}]},{id:"others",label:"Others",icon:e.jsx(b,{className:"size-5"})}],y=({variant:s="default",state:n="expanded",profileName:f="Acme Corporation",avatarInitials:J="AC",avatarSrc:K,navItems:Q=ce,isSignedIn:U=!0,onCollapseToggle:X,onProfileClick:Y,onSettingsClick:Z,onHelpClick:ee,onLogoutClick:ae,onNavItemClick:g,onSubItemClick:v,onNewDocumentClick:I,className:N=""})=>{const[C,te]=M.useState(new Set(["documents"])),t=n==="collapsed",S=s==="landing",se=a=>{te(r=>{const o=new Set(r);return o.has(a)?o.delete(a):o.add(a),o})},ne=a=>{a.children&&a.children.length>0&&se(a.id),g==null||g(a.id)},j=S?"bg-primary-light":"bg-white",A=t?"w-16":"w-72";return S&&!U?e.jsxs("div",{className:`
          flex flex-col h-full ${A} ${j}
          border-r border-secondary-dark
          ${N}
        `,children:[e.jsx("div",{className:"flex items-center justify-center h-16 border-b border-secondary-dark",children:e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center",children:e.jsx("span",{className:"text-sm font-black text-text-negative",children:"GL"})})}),e.jsx("div",{className:"flex-1 flex items-center justify-center p-4",children:!t&&e.jsx("p",{className:"text-sm text-text-secondary text-center",children:"Sign in to access your documents"})})]}):e.jsxs("div",{className:`
        flex flex-col h-full ${A} ${j}
        border-r border-secondary-dark transition-all duration-200
        ${N}
      `,children:[e.jsxs("div",{className:`flex items-center ${t?"flex-col gap-2 p-2":"p-3"} border-b border-secondary-dark`,children:[e.jsx("div",{className:t?"":"flex-1",children:e.jsx(oe,{name:f,avatarInitials:J,avatarSrc:K,collapsed:t,onClick:Y})}),e.jsx("button",{className:`
            flex items-center justify-center size-8 rounded
            hover:bg-secondary transition-colors
            ${t?"rotate-180":""}
          `,onClick:X,title:t?"Expand sidebar":"Collapse sidebar",children:e.jsx(G,{className:"size-5",color:"#1b1b1f"})})]}),!t&&e.jsx("div",{className:"p-3 border-b border-secondary-dark",children:e.jsxs("button",{className:`
              flex items-center justify-center gap-2 w-full h-10 px-4
              bg-primary text-text-negative rounded
              hover:bg-primary-dark transition-colors
              text-sm font-medium
            `,onClick:I,children:[e.jsx(x,{className:"size-5",color:"#f7f6ff"}),"New Document"]})}),t&&e.jsx("div",{className:"p-2 border-b border-secondary-dark",children:e.jsx("button",{className:`
              flex items-center justify-center size-10 mx-auto
              bg-primary text-text-negative rounded
              hover:bg-primary-dark transition-colors
            `,onClick:I,title:"New Document",children:e.jsx(x,{className:"size-5",color:"#f7f6ff"})})}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2",children:e.jsx("nav",{className:"flex flex-col gap-1",children:Q.map(a=>e.jsxs("div",{children:[e.jsx(re,{label:a.label,icon:a.icon,state:a.active?"active":"default",collapsed:t,showExpandArrow:!t&&a.children&&a.children.length>0,expanded:C.has(a.id),onClick:()=>ne(a)}),!t&&a.children&&C.has(a.id)&&e.jsx("div",{className:"mt-1",children:a.children.map(r=>e.jsx(ie,{label:r.label,state:r.active?"active":"default",onClick:()=>v==null?void 0:v(a.id,r.id)},r.id))})]},a.id))})}),e.jsx("div",{className:"p-2 border-t border-secondary-dark",children:e.jsx(le,{collapsed:t,onSettingsClick:Z,onHelpClick:ee,onLogoutClick:ae})})]})};y.__docgenInfo={description:"",methods:[],displayName:"Sidebar",props:{variant:{required:!1,tsType:{name:"union",raw:"'default' | 'landing'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'landing'"}]},description:"Visual variant",defaultValue:{value:"'default'",computed:!1}},state:{required:!1,tsType:{name:"union",raw:"'expanded' | 'collapsed'",elements:[{name:"literal",value:"'expanded'"},{name:"literal",value:"'collapsed'"}]},description:"Expanded or collapsed state",defaultValue:{value:"'expanded'",computed:!1}},profileName:{required:!1,tsType:{name:"string"},description:"Profile/company name",defaultValue:{value:"'Acme Corporation'",computed:!1}},avatarInitials:{required:!1,tsType:{name:"string"},description:"Avatar initials",defaultValue:{value:"'AC'",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source"},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"SidebarNavItemConfig"}],raw:"SidebarNavItemConfig[]"},description:"Navigation items",defaultValue:{value:`[
  {
    id: 'documents',
    label: 'Documents',
    icon: <FileText className="size-5" />,
    children: [
      { id: 'sub1', label: 'Sub Item' },
      { id: 'sub2', label: 'Sub Item' },
    ],
  },
  {
    id: 'others',
    label: 'Others',
    icon: <FolderClosed className="size-5" />,
  },
]`,computed:!1}},isSignedIn:{required:!1,tsType:{name:"boolean"},description:"Whether user is signed in (affects landing variant)",defaultValue:{value:"true",computed:!1}},onCollapseToggle:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Collapse toggle handler"},onProfileClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Profile switch click handler"},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"},onHelpClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Help click handler"},onLogoutClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Logout click handler"},onNavItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:"Nav item click handler"},onSubItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(parentId: string, itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"parentId"},{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:"Sub item click handler"},onNewDocumentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"New document click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ye={title:"Components/Sidebar",component:y,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","landing"],description:"Visual variant"},state:{control:"select",options:["expanded","collapsed"],description:"Expanded or collapsed state"},profileName:{control:"text",description:"Profile/company name"},avatarInitials:{control:"text",description:"Avatar initials"},isSignedIn:{control:"boolean",description:"Whether user is signed in (affects landing variant)"}},decorators:[s=>e.jsx("div",{style:{height:"600px",display:"flex"},children:e.jsx(s,{})})]},i=[{id:"documents",label:"Documents",icon:e.jsx(h,{className:"size-5"}),children:[{id:"contracts",label:"Contracts"},{id:"agreements",label:"Agreements"}]},{id:"others",label:"Others",icon:e.jsx(b,{className:"size-5"})},{id:"company",label:"Company",icon:e.jsx(de,{className:"size-5"})}],l={args:{variant:"default",state:"expanded",profileName:"Acme Corporation",avatarInitials:"AC",navItems:i,isSignedIn:!0}},d={args:{variant:"default",state:"collapsed",profileName:"Acme Corporation",avatarInitials:"AC",navItems:i,isSignedIn:!0}},c={args:{variant:"landing",state:"expanded",profileName:"Acme Corporation",avatarInitials:"AC",navItems:i,isSignedIn:!0}},m={args:{variant:"landing",state:"expanded",profileName:"Acme Corporation",avatarInitials:"AC",navItems:i,isSignedIn:!1}},u={args:{variant:"default",state:"expanded",profileName:"Acme Corporation",avatarInitials:"AC",navItems:[{id:"documents",label:"Documents",icon:e.jsx(h,{className:"size-5"}),active:!0,children:[{id:"contracts",label:"Contracts",active:!0},{id:"agreements",label:"Agreements"}]},{id:"others",label:"Others",icon:e.jsx(b,{className:"size-5"})}],isSignedIn:!0}},p={args:{variant:"default",state:"expanded",profileName:"Acme Corporation",avatarInitials:"AC",navItems:i,isSignedIn:!0},render:s=>{const[n,f]=M.useState(s.state||"expanded");return e.jsx(y,{...s,state:n,onCollapseToggle:()=>f(n==="expanded"?"collapsed":"expanded")})}};var k,w,T;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true
  }
}`,...(T=(w=l.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,q,L;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'collapsed',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true
  }
}`,...(L=(q=d.parameters)==null?void 0:q.docs)==null?void 0:L.source}}};var V,D,$;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true
  }
}`,...($=(D=c.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};var E,O,_;m.parameters={...m.parameters,docs:{...(E=m.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: 'landing',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: false
  }
}`,...(_=(O=m.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var F,P,W;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: [{
      id: 'documents',
      label: 'Documents',
      icon: <FileText className="size-5" />,
      active: true,
      children: [{
        id: 'contracts',
        label: 'Contracts',
        active: true
      }, {
        id: 'agreements',
        label: 'Agreements'
      }]
    }, {
      id: 'others',
      label: 'Others',
      icon: <FolderClosed className="size-5" />
    }],
    isSignedIn: true
  }
}`,...(W=(P=u.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};var B,R,H;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    variant: 'default',
    state: 'expanded',
    profileName: 'Acme Corporation',
    avatarInitials: 'AC',
    navItems: defaultNavItems,
    isSignedIn: true
  },
  render: args => {
    const [state, setState] = React.useState<'expanded' | 'collapsed'>(args.state || 'expanded');
    return <Sidebar {...args} state={state} onCollapseToggle={() => setState(state === 'expanded' ? 'collapsed' : 'expanded')} />;
  }
}`,...(H=(R=p.parameters)==null?void 0:R.docs)==null?void 0:H.source}}};const Ie=["Default","Collapsed","LandingSignedIn","LandingSignedOut","WithActiveItem","Interactive"];export{d as Collapsed,l as Default,p as Interactive,c as LandingSignedIn,m as LandingSignedOut,u as WithActiveItem,Ie as __namedExportsOrder,ye as default};
