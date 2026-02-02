import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r}from"./Icon-CCFihSvx.js";import{c as a}from"./colors-CkkS3ZSj.js";import"./index-DRjF_FHU.js";const t=({primaryText:se="Primary",secondaryText:ne="2 minutes ago",leftElement:oe="icon",showLeftElement:le=!0,showSecondaryText:ie=!1,showRightElement:ce=!1,showBackground:me=!1,showStroke:ue=!1,showTick:de=!1,leftIcon:pe,avatarSrc:y,avatarInitials:fe="AC",selected:g=!1,onClick:he,className:xe=""})=>{const ye=()=>{if(!le)return null;switch(oe){case"icon":return pe||e.jsx(r,{name:"circle-dashed",className:"size-6",color:a.textPrimary});case"avatar":return e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:y?e.jsx("img",{src:y,alt:"",className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:fe})});case"clause":return e.jsx("div",{className:"size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0",children:e.jsx(r,{name:"info",className:"size-6",color:a.positive})});case"select":return e.jsx("div",{className:`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${g?"bg-primary border-primary":"bg-white border-secondary"}
            `,children:g&&e.jsx(r,{name:"check",className:"size-3",color:a.iconNegative})});case"mini-users":return e.jsxs("div",{className:"flex items-center -space-x-1 shrink-0",children:[e.jsx("div",{className:"size-4 rounded bg-gray-300 border-2 border-white z-10"}),e.jsx("div",{className:"size-4 rounded bg-primary flex items-center justify-center",children:e.jsx("span",{className:"text-[8px] font-black text-text-negative",children:"AC"})})]});default:return null}};return e.jsxs("div",{className:`
        relative flex items-center gap-2 min-h-12 p-3 w-[310px] cursor-pointer
        ${xe}
      `,onClick:he,children:[me&&e.jsx("div",{className:"absolute inset-0 bg-secondary rounded"}),ue&&e.jsx("div",{className:"absolute inset-0 border border-card-idle-border rounded"}),e.jsxs("div",{className:"relative flex items-center gap-2 flex-1 min-h-px min-w-px",children:[ye(),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("p",{className:"text-base font-normal text-text-primary truncate leading-[1.4]",children:se}),ie&&e.jsx("p",{className:"text-sm font-normal text-text-secondary truncate leading-[1.4]",children:ne})]})]}),ce&&e.jsx("div",{className:"relative flex items-center justify-end min-h-6 shrink-0",children:e.jsx(r,{name:"check",className:"size-6",color:a.iconPrimary})}),de&&e.jsx("div",{className:"absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center",children:e.jsx(r,{name:"check",className:"size-6",color:a.iconNegative})})]})};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{primaryText:{required:!1,tsType:{name:"string"},description:"Primary text content",defaultValue:{value:"'Primary'",computed:!1}},secondaryText:{required:!1,tsType:{name:"string"},description:"Secondary text content",defaultValue:{value:"'2 minutes ago'",computed:!1}},leftElement:{required:!1,tsType:{name:"union",raw:"'icon' | 'avatar' | 'clause' | 'select' | 'mini-users'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'clause'"},{name:"literal",value:"'select'"},{name:"literal",value:"'mini-users'"}]},description:"Type of left element to display",defaultValue:{value:"'icon'",computed:!1}},showLeftElement:{required:!1,tsType:{name:"boolean"},description:"Show left element",defaultValue:{value:"true",computed:!1}},showSecondaryText:{required:!1,tsType:{name:"boolean"},description:"Show secondary text",defaultValue:{value:"false",computed:!1}},showRightElement:{required:!1,tsType:{name:"boolean"},description:"Show right element (check icon)",defaultValue:{value:"false",computed:!1}},showBackground:{required:!1,tsType:{name:"boolean"},description:"Show background highlight",defaultValue:{value:"false",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"false",computed:!1}},showTick:{required:!1,tsType:{name:"boolean"},description:"Show tick badge in corner",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source (for avatar type)"},avatarInitials:{required:!1,tsType:{name:"string"},description:"Avatar initials (for avatar type)",defaultValue:{value:"'AC'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (for select type)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const ve={title:"Components/MenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showRightElement:{control:"boolean",description:"Show right element (check icon)"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"}}},s={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},n={args:{primaryText:"Primary",secondaryText:"2 minutes ago",leftElement:"icon",showLeftElement:!0,showSecondaryText:!0}},o={args:{primaryText:"John Doe",secondaryText:"2 minutes ago",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,avatarInitials:"JD"}},l={args:{primaryText:"Information clause",secondaryText:"2 minutes ago",leftElement:"clause",showLeftElement:!0,showSecondaryText:!0}},i={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!1}},c={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!0}},m={args:{primaryText:"Team members",secondaryText:"3 users",leftElement:"mini-users",showLeftElement:!0,showSecondaryText:!0}},u={args:{primaryText:"Selected item",leftElement:"icon",showLeftElement:!0,showRightElement:!0}},d={args:{primaryText:"Highlighted item",leftElement:"icon",showLeftElement:!0,showBackground:!0}},p={args:{primaryText:"Bordered item",leftElement:"icon",showLeftElement:!0,showStroke:!0}},f={args:{primaryText:"Active item",leftElement:"icon",showLeftElement:!0,showTick:!0}},h={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},x={args:{primaryText:"Complete menu item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var w,E,T;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(T=(E=s.parameters)==null?void 0:E.docs)==null?void 0:T.source}}};var v,S,b;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(b=(S=n.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var k,L,j;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD'
  }
}`,...(j=(L=o.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var W,N,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var q,A,C;i.parameters={...i.parameters,docs:{...(q=i.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false
  }
}`,...(C=(A=i.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var R,V,z;c.parameters={...c.parameters,docs:{...(R=c.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true
  }
}`,...(z=(V=c.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};var B,M,P;m.parameters={...m.parameters,docs:{...(B=m.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(P=(M=m.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var D,O,F;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    primaryText: 'Selected item',
    leftElement: 'icon',
    showLeftElement: true,
    showRightElement: true
  }
}`,...(F=(O=u.parameters)==null?void 0:O.docs)==null?void 0:F.source}}};var J,U,_;d.parameters={...d.parameters,docs:{...(J=d.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true
  }
}`,...(_=(U=d.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var H,$,G;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true
  }
}`,...(G=($=p.parameters)==null?void 0:$.docs)==null?void 0:G.source}}};var K,Q,X;f.parameters={...f.parameters,docs:{...(K=f.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true
  }
}`,...(X=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(ee=(Z=h.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,re,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
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
}`,...(ae=(re=x.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const Se=["Default","WithSecondaryText","WithAvatar","WithClause","WithSelectUnselected","WithSelectSelected","WithMiniUsers","WithRightElement","WithBackground","WithStroke","WithTick","AllLeftElements","FullExample"];export{h as AllLeftElements,s as Default,x as FullExample,o as WithAvatar,d as WithBackground,l as WithClause,m as WithMiniUsers,u as WithRightElement,n as WithSecondaryText,c as WithSelectSelected,i as WithSelectUnselected,p as WithStroke,f as WithTick,Se as __namedExportsOrder,ve as default};
