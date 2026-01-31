import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r}from"./Icon-CCFihSvx.js";import"./index-DRjF_FHU.js";const t=({primaryText:ae="Primary",secondaryText:se="2 minutes ago",leftElement:ne="icon",showLeftElement:oe=!0,showSecondaryText:le=!1,showRightElement:ie=!1,showBackground:ce=!1,showStroke:me=!1,showTick:ue=!1,leftIcon:de,avatarSrc:x,avatarInitials:pe="AC",selected:y=!1,onClick:fe,className:he=""})=>{const xe=()=>{if(!oe)return null;switch(ne){case"icon":return de||e.jsx(r,{name:"circle-dashed",className:"size-6",color:"#1b1b1f"});case"avatar":return e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:x?e.jsx("img",{src:x,alt:"",className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:pe})});case"clause":return e.jsx("div",{className:"size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0",children:e.jsx(r,{name:"info",className:"size-6",color:"#15803d"})});case"select":return e.jsx("div",{className:`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${y?"bg-primary border-primary":"bg-white border-secondary"}
            `,children:y&&e.jsx(r,{name:"check",className:"size-3",color:"#f7f6ff"})});case"mini-users":return e.jsxs("div",{className:"flex items-center -space-x-1 shrink-0",children:[e.jsx("div",{className:"size-4 rounded bg-gray-300 border-2 border-white z-10"}),e.jsx("div",{className:"size-4 rounded bg-primary flex items-center justify-center",children:e.jsx("span",{className:"text-[8px] font-black text-text-negative",children:"AC"})})]});default:return null}};return e.jsxs("div",{className:`
        relative flex items-center gap-2 min-h-12 p-3 w-[310px] cursor-pointer
        ${he}
      `,onClick:fe,children:[ce&&e.jsx("div",{className:"absolute inset-0 bg-secondary rounded"}),me&&e.jsx("div",{className:"absolute inset-0 border border-card-idle-border rounded"}),e.jsxs("div",{className:"relative flex items-center gap-2 flex-1 min-h-px min-w-px",children:[xe(),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("p",{className:"text-base font-normal text-text-primary truncate leading-[1.4]",children:ae}),le&&e.jsx("p",{className:"text-sm font-normal text-text-secondary truncate leading-[1.4]",children:se})]})]}),ie&&e.jsx("div",{className:"relative flex items-center justify-end min-h-6 shrink-0",children:e.jsx(r,{name:"check",className:"size-6",color:"#5e49d6"})}),ue&&e.jsx("div",{className:"absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center",children:e.jsx(r,{name:"check",className:"size-6",color:"#f7f6ff"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{primaryText:{required:!1,tsType:{name:"string"},description:"Primary text content",defaultValue:{value:"'Primary'",computed:!1}},secondaryText:{required:!1,tsType:{name:"string"},description:"Secondary text content",defaultValue:{value:"'2 minutes ago'",computed:!1}},leftElement:{required:!1,tsType:{name:"union",raw:"'icon' | 'avatar' | 'clause' | 'select' | 'mini-users'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'clause'"},{name:"literal",value:"'select'"},{name:"literal",value:"'mini-users'"}]},description:"Type of left element to display",defaultValue:{value:"'icon'",computed:!1}},showLeftElement:{required:!1,tsType:{name:"boolean"},description:"Show left element",defaultValue:{value:"true",computed:!1}},showSecondaryText:{required:!1,tsType:{name:"boolean"},description:"Show secondary text",defaultValue:{value:"false",computed:!1}},showRightElement:{required:!1,tsType:{name:"boolean"},description:"Show right element (check icon)",defaultValue:{value:"false",computed:!1}},showBackground:{required:!1,tsType:{name:"boolean"},description:"Show background highlight",defaultValue:{value:"false",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"false",computed:!1}},showTick:{required:!1,tsType:{name:"boolean"},description:"Show tick badge in corner",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source (for avatar type)"},avatarInitials:{required:!1,tsType:{name:"string"},description:"Avatar initials (for avatar type)",defaultValue:{value:"'AC'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (for select type)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const Ee={title:"Components/MenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showRightElement:{control:"boolean",description:"Show right element (check icon)"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"}}},a={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},s={args:{primaryText:"Primary",secondaryText:"2 minutes ago",leftElement:"icon",showLeftElement:!0,showSecondaryText:!0}},n={args:{primaryText:"John Doe",secondaryText:"2 minutes ago",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,avatarInitials:"JD"}},o={args:{primaryText:"Information clause",secondaryText:"2 minutes ago",leftElement:"clause",showLeftElement:!0,showSecondaryText:!0}},l={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!1}},i={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!0}},c={args:{primaryText:"Team members",secondaryText:"3 users",leftElement:"mini-users",showLeftElement:!0,showSecondaryText:!0}},m={args:{primaryText:"Selected item",leftElement:"icon",showLeftElement:!0,showRightElement:!0}},u={args:{primaryText:"Highlighted item",leftElement:"icon",showLeftElement:!0,showBackground:!0}},d={args:{primaryText:"Bordered item",leftElement:"icon",showLeftElement:!0,showStroke:!0}},p={args:{primaryText:"Active item",leftElement:"icon",showLeftElement:!0,showTick:!0}},f={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},h={args:{primaryText:"Complete menu item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var g,w,E;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(E=(w=a.parameters)==null?void 0:w.docs)==null?void 0:E.source}}};var T,v,S;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,k,L;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD'
  }
}`,...(L=(k=n.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var j,W,N;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(N=(W=o.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var I,q,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false
  }
}`,...(A=(q=l.parameters)==null?void 0:q.docs)==null?void 0:A.source}}};var C,R,V;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true
  }
}`,...(V=(R=i.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var z,B,M;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(M=(B=c.parameters)==null?void 0:B.docs)==null?void 0:M.source}}};var P,D,O;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    primaryText: 'Selected item',
    leftElement: 'icon',
    showLeftElement: true,
    showRightElement: true
  }
}`,...(O=(D=m.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var F,J,U;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true
  }
}`,...(U=(J=u.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var _,H,$;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true
  }
}`,...($=(H=d.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,K,Q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true
  }
}`,...(Q=(K=p.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(Z=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;h.parameters={...h.parameters,docs:{...(ee=h.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    primaryText: 'Complete menu item',
    secondaryText: 'With all features enabled',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRightElement: true,
    showBackground: true,
    avatarInitials: 'FE'
  }
}`,...(re=(te=h.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};const Te=["Default","WithSecondaryText","WithAvatar","WithClause","WithSelectUnselected","WithSelectSelected","WithMiniUsers","WithRightElement","WithBackground","WithStroke","WithTick","AllLeftElements","FullExample"];export{f as AllLeftElements,a as Default,h as FullExample,n as WithAvatar,u as WithBackground,o as WithClause,c as WithMiniUsers,m as WithRightElement,s as WithSecondaryText,i as WithSelectSelected,l as WithSelectUnselected,d as WithStroke,p as WithTick,Te as __namedExportsOrder,Ee as default};
