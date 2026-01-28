import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as y}from"./Check-D1-gLYxc.js";import"./index-DRjF_FHU.js";const ne=({className:r="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1"}),e.jsx("path",{d:"M7 22h1a4 4 0 0 0 4-4v-1"}),e.jsx("path",{d:"M7 2h1a4 4 0 0 1 4 4v1"}),e.jsx("rect",{x:"8",y:"10",width:"8",height:"4",rx:"1"})]});ne.__docgenInfo={description:"",methods:[],displayName:"TextCursor",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const oe=({className:r="size-6",color:s="currentColor"})=>e.jsxs("svg",{className:r,viewBox:"0 0 24 24",fill:"none",stroke:s,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[e.jsx("circle",{cx:"12",cy:"12",r:"10"}),e.jsx("path",{d:"M12 16v-4"}),e.jsx("path",{d:"M12 8h.01"})]});oe.__docgenInfo={description:"",methods:[],displayName:"Info",props:{className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'size-6'",computed:!1}},color:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'currentColor'",computed:!1}}}};const t=({primaryText:r="Primary",secondaryText:s="2 minutes ago",leftElement:le="icon",showLeftElement:ie=!0,showSecondaryText:ce=!1,showRightElement:me=!1,showBackground:de=!1,showStroke:ue=!1,showTick:pe=!1,leftIcon:fe,avatarSrc:g,avatarInitials:he="AC",selected:T=!1,onClick:xe,className:ye=""})=>{const ge=()=>{if(!ie)return null;switch(le){case"icon":return fe||e.jsx(ne,{className:"size-6",color:"#1b1b1f"});case"avatar":return e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:g?e.jsx("img",{src:g,alt:"",className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:he})});case"clause":return e.jsx("div",{className:"size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0",children:e.jsx(oe,{className:"size-6",color:"#15803d"})});case"select":return e.jsx("div",{className:`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${T?"bg-primary border-primary":"bg-white border-secondary"}
            `,children:T&&e.jsx(y,{className:"size-3",color:"#f7f6ff"})});case"mini-users":return e.jsxs("div",{className:"flex items-center -space-x-1 shrink-0",children:[e.jsx("div",{className:"size-4 rounded bg-gray-300 border-2 border-white z-10"}),e.jsx("div",{className:"size-4 rounded bg-primary flex items-center justify-center",children:e.jsx("span",{className:"text-[8px] font-black text-text-negative",children:"AC"})})]});default:return null}};return e.jsxs("div",{className:`
        relative flex items-center gap-2 min-h-12 p-3 w-[310px] cursor-pointer
        ${ye}
      `,onClick:xe,children:[de&&e.jsx("div",{className:"absolute inset-0 bg-secondary rounded"}),ue&&e.jsx("div",{className:"absolute inset-0 border border-card-idle-border rounded"}),e.jsxs("div",{className:"relative flex items-center gap-2 flex-1 min-h-px min-w-px",children:[ge(),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("p",{className:"text-base font-normal text-text-primary truncate leading-[1.4]",children:r}),ce&&e.jsx("p",{className:"text-sm font-normal text-text-secondary truncate leading-[1.4]",children:s})]})]}),me&&e.jsx("div",{className:"relative flex items-center justify-end min-h-6 shrink-0",children:e.jsx(y,{className:"size-6",color:"#5e49d6"})}),pe&&e.jsx("div",{className:"absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center",children:e.jsx(y,{className:"size-6",color:"#f7f6ff"})})]})};t.__docgenInfo={description:"",methods:[],displayName:"ListItem",props:{primaryText:{required:!1,tsType:{name:"string"},description:"Primary text content",defaultValue:{value:"'Primary'",computed:!1}},secondaryText:{required:!1,tsType:{name:"string"},description:"Secondary text content",defaultValue:{value:"'2 minutes ago'",computed:!1}},leftElement:{required:!1,tsType:{name:"union",raw:"'icon' | 'avatar' | 'clause' | 'select' | 'mini-users'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'clause'"},{name:"literal",value:"'select'"},{name:"literal",value:"'mini-users'"}]},description:"Type of left element to display",defaultValue:{value:"'icon'",computed:!1}},showLeftElement:{required:!1,tsType:{name:"boolean"},description:"Show left element",defaultValue:{value:"true",computed:!1}},showSecondaryText:{required:!1,tsType:{name:"boolean"},description:"Show secondary text",defaultValue:{value:"false",computed:!1}},showRightElement:{required:!1,tsType:{name:"boolean"},description:"Show right element (check icon)",defaultValue:{value:"false",computed:!1}},showBackground:{required:!1,tsType:{name:"boolean"},description:"Show background highlight",defaultValue:{value:"false",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"false",computed:!1}},showTick:{required:!1,tsType:{name:"boolean"},description:"Show tick badge in corner",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source (for avatar type)"},avatarInitials:{required:!1,tsType:{name:"string"},description:"Avatar initials (for avatar type)",defaultValue:{value:"'AC'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (for select type)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ve={title:"Components/ListItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showRightElement:{control:"boolean",description:"Show right element (check icon)"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"}}},a={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},n={args:{primaryText:"Primary",secondaryText:"2 minutes ago",leftElement:"icon",showLeftElement:!0,showSecondaryText:!0}},o={args:{primaryText:"John Doe",secondaryText:"2 minutes ago",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,avatarInitials:"JD"}},l={args:{primaryText:"Information clause",secondaryText:"2 minutes ago",leftElement:"clause",showLeftElement:!0,showSecondaryText:!0}},i={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!1}},c={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!0}},m={args:{primaryText:"Team members",secondaryText:"3 users",leftElement:"mini-users",showLeftElement:!0,showSecondaryText:!0}},d={args:{primaryText:"Selected item",leftElement:"icon",showLeftElement:!0,showRightElement:!0}},u={args:{primaryText:"Highlighted item",leftElement:"icon",showLeftElement:!0,showBackground:!0}},p={args:{primaryText:"Bordered item",leftElement:"icon",showLeftElement:!0,showStroke:!0}},f={args:{primaryText:"Active item",leftElement:"icon",showLeftElement:!0,showTick:!0}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},x={args:{primaryText:"Complete list item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var w,E,v;a.parameters={...a.parameters,docs:{...(w=a.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(v=(E=a.parameters)==null?void 0:E.docs)==null?void 0:v.source}}};var S,b,L;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(L=(b=n.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var j,k,W;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD'
  }
}`,...(W=(k=o.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var N,I,C;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(C=(I=l.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};var q,V,z;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false
  }
}`,...(z=(V=i.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var A,R,B;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true
  }
}`,...(B=(R=c.parameters)==null?void 0:R.docs)==null?void 0:B.source}}};var P,_,M;m.parameters={...m.parameters,docs:{...(P=m.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(M=(_=m.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var D,O,F;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    primaryText: 'Selected item',
    leftElement: 'icon',
    showLeftElement: true,
    showRightElement: true
  }
}`,...(F=(O=d.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,U,H;u.parameters={...u.parameters,docs:{...(J=u.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true
  }
}`,...(H=(U=u.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var $,G,K;p.parameters={...p.parameters,docs:{...($=p.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true
  }
}`,...(K=(G=p.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Q,X,Y;f.parameters={...f.parameters,docs:{...(Q=f.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <ListItem primaryText="With icon" leftElement="icon" showLeftElement />
      <ListItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <ListItem primaryText="With clause" leftElement="clause" showLeftElement />
      <ListItem primaryText="With select" leftElement="select" showLeftElement />
      <ListItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,se,ae;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    primaryText: 'Complete list item',
    secondaryText: 'With all features enabled',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRightElement: true,
    showBackground: true,
    avatarInitials: 'FE'
  }
}`,...(ae=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ae.source}}};const Se=["Default","WithSecondaryText","WithAvatar","WithClause","WithSelectUnselected","WithSelectSelected","WithMiniUsers","WithRightElement","WithBackground","WithStroke","WithTick","AllLeftElements","FullExample"];export{h as AllLeftElements,a as Default,x as FullExample,o as WithAvatar,u as WithBackground,l as WithClause,m as WithMiniUsers,d as WithRightElement,n as WithSecondaryText,c as WithSelectSelected,i as WithSelectUnselected,p as WithStroke,f as WithTick,Se as __namedExportsOrder,ve as default};
