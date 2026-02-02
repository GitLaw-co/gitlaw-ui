import{j as e}from"./jsx-runtime-DiklIkkE.js";import{I as r,c as a}from"./Icon-D7PltpT4.js";import{S as yt}from"./Switch-CGvwcuOx.js";import{B as Tt}from"./Badge-foPfH3i_.js";import"./index-DRjF_FHU.js";const t=({primaryText:Xe="Primary",secondaryText:Ye="2 minutes ago",leftElement:Ze="icon",showLeftElement:et=!0,showSecondaryText:tt=!1,showBackground:rt=!1,showStroke:at=!1,showTick:st=!1,leftIcon:nt,avatarSrc:j,avatarInitials:ot="AC",selected:I=!1,onClick:lt,className:it="",showRLabel:W=!1,rLabel:ct="Label",showRIcon1:N=!1,rIcon1:mt="check",showRIcon2:B=!1,rIcon2:ut="check",showRButton:q=!1,rButtonLabel:dt="Action",showRButtonSet:A=!1,onRButtonSetCancel:L,onRButtonSetConfirm:k,showRBadge:V=!1,rBadgeCount:ht=7,showRSwitch:C=!1,rSwitchChecked:ft=!1,onRSwitchChange:pt,showRLargeAvatar:M=!1,rLargeAvatarSrc:z,showRMediumAvatar:P=!1,rMediumAvatarSrc:D,showRTags:F=!1,rTagLabel:wt="Label"})=>{const xt=W||N||B||q||A||V||C||M||P||F,gt=()=>{if(!et)return null;switch(Ze){case"icon":return nt||e.jsx(r,{name:"circle-dashed",className:"size-6",color:a.textPrimary});case"avatar":return e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:j?e.jsx("img",{src:j,alt:"",className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-sm font-black text-negative",children:ot})});case"clause":return e.jsx("div",{className:"size-8 rounded-full bg-backgrounds-tag-background flex items-center justify-center shrink-0",children:e.jsx(r,{name:"info",className:"size-6",color:a.positive})});case"select":return e.jsx("div",{className:`
              size-4 rounded-sm border shrink-0 flex items-center justify-center
              ${I?"bg-primary border-primary":"bg-white border-secondary"}
            `,children:I&&e.jsx(r,{name:"check",className:"size-3",color:a.iconNegative})});case"mini-users":return e.jsxs("div",{className:"flex items-center -space-x-1 shrink-0",children:[e.jsx("div",{className:"size-4 rounded bg-gray-300 border-2 border-white z-10"}),e.jsx("div",{className:"size-4 rounded bg-primary flex items-center justify-center",children:e.jsx("span",{className:"text-[8px] font-black text-negative",children:"AC"})})]});default:return null}};return e.jsxs("div",{className:`
        relative flex items-center gap-2 min-h-12 p-3 w-[310px] cursor-pointer
        ${it}
      `,onClick:lt,children:[rt&&e.jsx("div",{className:"absolute inset-0 bg-secondary rounded"}),at&&e.jsx("div",{className:"absolute inset-0 border border-card-idle-border rounded"}),e.jsxs("div",{className:"relative flex items-center gap-2 flex-1 min-h-px min-w-px",children:[gt(),e.jsxs("div",{className:"flex flex-col flex-1 min-w-0",children:[e.jsx("p",{className:"text-base font-normal text-foreground truncate leading-[1.4]",children:Xe}),tt&&e.jsx("p",{className:"text-sm font-normal text-subtle truncate leading-[1.4]",children:Ye})]})]}),xt&&e.jsxs("div",{className:"relative flex items-center gap-2 justify-end min-h-6 shrink-0",children:[V&&e.jsx(Tt,{type:"red",count:ht}),W&&e.jsx("span",{className:"text-sm text-subtle min-w-6",children:ct}),q&&e.jsxs("button",{className:"flex items-center gap-1 px-3 py-2 h-8 rounded bg-secondary text-xs text-foreground-button",children:[e.jsx(r,{name:"check",className:"size-6",color:a.iconPrimary}),e.jsx("span",{children:dt})]}),A&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{className:"flex items-center justify-center size-8 rounded",onClick:R=>{R.stopPropagation(),L==null||L()},children:e.jsx(r,{name:"x",className:"size-6",color:a.iconPrimary})}),e.jsx("button",{className:"flex items-center justify-center size-8 rounded",onClick:R=>{R.stopPropagation(),k==null||k()},children:e.jsx(r,{name:"check",className:"size-6",color:a.iconPrimary})})]}),F&&e.jsxs("div",{className:"flex items-center gap-2 px-4 py-2 rounded bg-backgrounds-tag-background",children:[e.jsx(r,{name:"user-round",className:"size-6",color:a.positive}),e.jsx("span",{className:"text-sm text-foreground-tag",children:wt})]}),M&&e.jsx("div",{className:"size-16 rounded overflow-hidden shrink-0",children:z?e.jsx("img",{src:z,alt:"",className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full bg-primary"})}),P&&e.jsx("div",{className:"size-8 rounded overflow-hidden shrink-0",children:D?e.jsx("img",{src:D,alt:"",className:"w-full h-full object-cover"}):e.jsx("div",{className:"w-full h-full bg-primary"})}),N&&e.jsx(r,{name:mt,className:"size-6",color:a.iconPrimary}),B&&e.jsx(r,{name:ut,className:"size-6",color:a.iconPrimary}),C&&e.jsx(yt,{checked:ft,onChange:pt})]}),st&&e.jsx("div",{className:"absolute -top-1 -right-1 bg-primary rounded p-1 flex items-center justify-center",children:e.jsx(r,{name:"check",className:"size-6",color:a.iconNegative})})]})};t.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{primaryText:{required:!1,tsType:{name:"string"},description:"Primary text content",defaultValue:{value:"'Primary'",computed:!1}},secondaryText:{required:!1,tsType:{name:"string"},description:"Secondary text content",defaultValue:{value:"'2 minutes ago'",computed:!1}},leftElement:{required:!1,tsType:{name:"union",raw:"'icon' | 'avatar' | 'clause' | 'select' | 'mini-users'",elements:[{name:"literal",value:"'icon'"},{name:"literal",value:"'avatar'"},{name:"literal",value:"'clause'"},{name:"literal",value:"'select'"},{name:"literal",value:"'mini-users'"}]},description:"Type of left element to display",defaultValue:{value:"'icon'",computed:!1}},showLeftElement:{required:!1,tsType:{name:"boolean"},description:"Show left element",defaultValue:{value:"true",computed:!1}},showSecondaryText:{required:!1,tsType:{name:"boolean"},description:"Show secondary text",defaultValue:{value:"false",computed:!1}},showBackground:{required:!1,tsType:{name:"boolean"},description:"Show background highlight",defaultValue:{value:"false",computed:!1}},showStroke:{required:!1,tsType:{name:"boolean"},description:"Show border stroke",defaultValue:{value:"false",computed:!1}},showTick:{required:!1,tsType:{name:"boolean"},description:"Show tick badge in corner",defaultValue:{value:"false",computed:!1}},leftIcon:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom left icon"},avatarSrc:{required:!1,tsType:{name:"string"},description:"Avatar image source (for avatar type)"},avatarInitials:{required:!1,tsType:{name:"string"},description:"Avatar initials (for avatar type)",defaultValue:{value:"'AC'",computed:!1}},selected:{required:!1,tsType:{name:"boolean"},description:"Selected state (for select type)",defaultValue:{value:"false",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Click handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}},showRLabel:{required:!1,tsType:{name:"boolean"},description:"Show label text in R element",defaultValue:{value:"false",computed:!1}},rLabel:{required:!1,tsType:{name:"string"},description:"Label text for R element",defaultValue:{value:"'Label'",computed:!1}},showRIcon1:{required:!1,tsType:{name:"boolean"},description:"Show first icon in R element",defaultValue:{value:"false",computed:!1}},rIcon1:{required:!1,tsType:{name:"string"},description:"First icon name for R element",defaultValue:{value:"'check'",computed:!1}},showRIcon2:{required:!1,tsType:{name:"boolean"},description:"Show second icon in R element",defaultValue:{value:"false",computed:!1}},rIcon2:{required:!1,tsType:{name:"string"},description:"Second icon name for R element",defaultValue:{value:"'check'",computed:!1}},showRButton:{required:!1,tsType:{name:"boolean"},description:"Show button in R element",defaultValue:{value:"false",computed:!1}},rButtonLabel:{required:!1,tsType:{name:"string"},description:"Button label for R element",defaultValue:{value:"'Action'",computed:!1}},showRButtonSet:{required:!1,tsType:{name:"boolean"},description:"Show button set (x and check) in R element",defaultValue:{value:"false",computed:!1}},onRButtonSetCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Button set cancel handler"},onRButtonSetConfirm:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Button set confirm handler"},showRBadge:{required:!1,tsType:{name:"boolean"},description:"Show badge in R element",defaultValue:{value:"false",computed:!1}},rBadgeCount:{required:!1,tsType:{name:"number"},description:"Badge count for R element",defaultValue:{value:"7",computed:!1}},showRSwitch:{required:!1,tsType:{name:"boolean"},description:"Show switch in R element",defaultValue:{value:"false",computed:!1}},rSwitchChecked:{required:!1,tsType:{name:"boolean"},description:"Switch checked state for R element",defaultValue:{value:"false",computed:!1}},onRSwitchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:"Switch change handler for R element"},showRLargeAvatar:{required:!1,tsType:{name:"boolean"},description:"Show large avatar in R element",defaultValue:{value:"false",computed:!1}},rLargeAvatarSrc:{required:!1,tsType:{name:"string"},description:"Large avatar src for R element"},showRMediumAvatar:{required:!1,tsType:{name:"boolean"},description:"Show medium avatar in R element",defaultValue:{value:"false",computed:!1}},rMediumAvatarSrc:{required:!1,tsType:{name:"string"},description:"Medium avatar src for R element"},showRTags:{required:!1,tsType:{name:"boolean"},description:"Show tags in R element",defaultValue:{value:"false",computed:!1}},rTagLabel:{required:!1,tsType:{name:"string"},description:"Tag label for R element",defaultValue:{value:"'Label'",computed:!1}}}};const kt={title:"Components/MenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"},showRLabel:{control:"boolean",description:"Show label in R element"},rLabel:{control:"text",description:"Label text for R element"},showRIcon1:{control:"boolean",description:"Show first icon in R element"},rIcon1:{control:"text",description:"First icon name"},showRIcon2:{control:"boolean",description:"Show second icon in R element"},rIcon2:{control:"text",description:"Second icon name"},showRButton:{control:"boolean",description:"Show button in R element"},rButtonLabel:{control:"text",description:"Button label"},showRButtonSet:{control:"boolean",description:"Show button set (x and check)"},showRBadge:{control:"boolean",description:"Show badge in R element"},rBadgeCount:{control:"number",description:"Badge count"},showRSwitch:{control:"boolean",description:"Show switch in R element"},rSwitchChecked:{control:"boolean",description:"Switch checked state"},showRLargeAvatar:{control:"boolean",description:"Show large avatar in R element"},showRMediumAvatar:{control:"boolean",description:"Show medium avatar in R element"},showRTags:{control:"boolean",description:"Show tags in R element"},rTagLabel:{control:"text",description:"Tag label"}}},s={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},n={args:{primaryText:"Primary",secondaryText:"2 minutes ago",leftElement:"icon",showLeftElement:!0,showSecondaryText:!0}},o={args:{primaryText:"John Doe",secondaryText:"2 minutes ago",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,avatarInitials:"JD"}},l={args:{primaryText:"Information clause",secondaryText:"2 minutes ago",leftElement:"clause",showLeftElement:!0,showSecondaryText:!0}},i={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!1}},c={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!0}},m={args:{primaryText:"Team members",secondaryText:"3 users",leftElement:"mini-users",showLeftElement:!0,showSecondaryText:!0}},u={args:{primaryText:"Selected item",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,rIcon1:"check",showStroke:!0}},d={args:{primaryText:"Item with label",leftElement:"avatar",showLeftElement:!0,showRLabel:!0,rLabel:"Label",showStroke:!0}},h={args:{primaryText:"Item with action",leftElement:"avatar",showLeftElement:!0,showRButton:!0,rButtonLabel:"Action",showStroke:!0}},f={args:{primaryText:"Item with button set",leftElement:"avatar",showLeftElement:!0,showRButtonSet:!0,showStroke:!0}},p={args:{primaryText:"Notifications",leftElement:"avatar",showLeftElement:!0,showRBadge:!0,rBadgeCount:7,showStroke:!0}},w={args:{primaryText:"Toggle setting",leftElement:"avatar",showLeftElement:!0,showRSwitch:!0,rSwitchChecked:!0,showStroke:!0}},x={args:{primaryText:"Item with avatar",secondaryText:"Secondary text",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRLargeAvatar:!0,showStroke:!0}},g={args:{primaryText:"Item with tags",leftElement:"avatar",showLeftElement:!0,showRTags:!0,rTagLabel:"Label",showStroke:!0}},y={args:{primaryText:"Highlighted item",leftElement:"icon",showLeftElement:!0,showBackground:!0}},T={args:{primaryText:"Bordered item",leftElement:"icon",showLeftElement:!0,showStroke:!0}},v={args:{primaryText:"Active item",leftElement:"icon",showLeftElement:!0,showTick:!0}},b={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},E={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With label",leftElement:"avatar",showLeftElement:!0,showRLabel:!0,rLabel:"Label",showStroke:!0}),e.jsx(t,{primaryText:"With icon",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,rIcon1:"check",showStroke:!0}),e.jsx(t,{primaryText:"With two icons",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,showRIcon2:!0,rIcon1:"edit",rIcon2:"trash",showStroke:!0}),e.jsx(t,{primaryText:"With button",leftElement:"avatar",showLeftElement:!0,showRButton:!0,rButtonLabel:"Action",showStroke:!0}),e.jsx(t,{primaryText:"With button set",leftElement:"avatar",showLeftElement:!0,showRButtonSet:!0,showStroke:!0}),e.jsx(t,{primaryText:"With badge",leftElement:"avatar",showLeftElement:!0,showRBadge:!0,rBadgeCount:7,showStroke:!0}),e.jsx(t,{primaryText:"With switch",leftElement:"avatar",showLeftElement:!0,showRSwitch:!0,rSwitchChecked:!0,showStroke:!0}),e.jsx(t,{primaryText:"With large avatar",leftElement:"avatar",showLeftElement:!0,showRLargeAvatar:!0,showStroke:!0}),e.jsx(t,{primaryText:"With tags",leftElement:"avatar",showLeftElement:!0,showRTags:!0,rTagLabel:"Label",showStroke:!0})]})},S={args:{primaryText:"Complete menu item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var O,J,U;s.parameters={...s.parameters,docs:{...(O=s.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(U=(J=s.parameters)==null?void 0:J.docs)==null?void 0:U.source}}};var _,H,$;n.parameters={...n.parameters,docs:{...(_=n.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...($=(H=n.parameters)==null?void 0:H.docs)==null?void 0:$.source}}};var G,K,Q;o.parameters={...o.parameters,docs:{...(G=o.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD'
  }
}`,...(Q=(K=o.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;l.parameters={...l.parameters,docs:{...(X=l.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(Z=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,re;i.parameters={...i.parameters,docs:{...(ee=i.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false
  }
}`,...(re=(te=i.parameters)==null?void 0:te.docs)==null?void 0:re.source}}};var ae,se,ne;c.parameters={...c.parameters,docs:{...(ae=c.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true
  }
}`,...(ne=(se=c.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var oe,le,ie;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(ie=(le=m.parameters)==null?void 0:le.docs)==null?void 0:ie.source}}};var ce,me,ue;u.parameters={...u.parameters,docs:{...(ce=u.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  args: {
    primaryText: 'Selected item',
    leftElement: 'avatar',
    showLeftElement: true,
    showRIcon1: true,
    rIcon1: 'check',
    showStroke: true
  }
}`,...(ue=(me=u.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var de,he,fe;d.parameters={...d.parameters,docs:{...(de=d.parameters)==null?void 0:de.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with label',
    leftElement: 'avatar',
    showLeftElement: true,
    showRLabel: true,
    rLabel: 'Label',
    showStroke: true
  }
}`,...(fe=(he=d.parameters)==null?void 0:he.docs)==null?void 0:fe.source}}};var pe,we,xe;h.parameters={...h.parameters,docs:{...(pe=h.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with action',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButton: true,
    rButtonLabel: 'Action',
    showStroke: true
  }
}`,...(xe=(we=h.parameters)==null?void 0:we.docs)==null?void 0:xe.source}}};var ge,ye,Te;f.parameters={...f.parameters,docs:{...(ge=f.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with button set',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButtonSet: true,
    showStroke: true
  }
}`,...(Te=(ye=f.parameters)==null?void 0:ye.docs)==null?void 0:Te.source}}};var ve,be,Ee;p.parameters={...p.parameters,docs:{...(ve=p.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  args: {
    primaryText: 'Notifications',
    leftElement: 'avatar',
    showLeftElement: true,
    showRBadge: true,
    rBadgeCount: 7,
    showStroke: true
  }
}`,...(Ee=(be=p.parameters)==null?void 0:be.docs)==null?void 0:Ee.source}}};var Se,Le,ke;w.parameters={...w.parameters,docs:{...(Se=w.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    primaryText: 'Toggle setting',
    leftElement: 'avatar',
    showLeftElement: true,
    showRSwitch: true,
    rSwitchChecked: true,
    showStroke: true
  }
}`,...(ke=(Le=w.parameters)==null?void 0:Le.docs)==null?void 0:ke.source}}};var Re,je,Ie;x.parameters={...x.parameters,docs:{...(Re=x.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with avatar',
    secondaryText: 'Secondary text',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRLargeAvatar: true,
    showStroke: true
  }
}`,...(Ie=(je=x.parameters)==null?void 0:je.docs)==null?void 0:Ie.source}}};var We,Ne,Be;g.parameters={...g.parameters,docs:{...(We=g.parameters)==null?void 0:We.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with tags',
    leftElement: 'avatar',
    showLeftElement: true,
    showRTags: true,
    rTagLabel: 'Label',
    showStroke: true
  }
}`,...(Be=(Ne=g.parameters)==null?void 0:Ne.docs)==null?void 0:Be.source}}};var qe,Ae,Ve;y.parameters={...y.parameters,docs:{...(qe=y.parameters)==null?void 0:qe.docs,source:{originalSource:`{
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true
  }
}`,...(Ve=(Ae=y.parameters)==null?void 0:Ae.docs)==null?void 0:Ve.source}}};var Ce,Me,ze;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true
  }
}`,...(ze=(Me=T.parameters)==null?void 0:Me.docs)==null?void 0:ze.source}}};var Pe,De,Fe;v.parameters={...v.parameters,docs:{...(Pe=v.parameters)==null?void 0:Pe.docs,source:{originalSource:`{
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true
  }
}`,...(Fe=(De=v.parameters)==null?void 0:De.docs)==null?void 0:Fe.source}}};var Oe,Je,Ue;b.parameters={...b.parameters,docs:{...(Oe=b.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(Ue=(Je=b.parameters)==null?void 0:Je.docs)==null?void 0:Ue.source}}};var _e,He,$e;E.parameters={...E.parameters,docs:{...(_e=E.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With label" leftElement="avatar" showLeftElement showRLabel rLabel="Label" showStroke />
      <MenuItem primaryText="With icon" leftElement="avatar" showLeftElement showRIcon1 rIcon1="check" showStroke />
      <MenuItem primaryText="With two icons" leftElement="avatar" showLeftElement showRIcon1 showRIcon2 rIcon1="edit" rIcon2="trash" showStroke />
      <MenuItem primaryText="With button" leftElement="avatar" showLeftElement showRButton rButtonLabel="Action" showStroke />
      <MenuItem primaryText="With button set" leftElement="avatar" showLeftElement showRButtonSet showStroke />
      <MenuItem primaryText="With badge" leftElement="avatar" showLeftElement showRBadge rBadgeCount={7} showStroke />
      <MenuItem primaryText="With switch" leftElement="avatar" showLeftElement showRSwitch rSwitchChecked showStroke />
      <MenuItem primaryText="With large avatar" leftElement="avatar" showLeftElement showRLargeAvatar showStroke />
      <MenuItem primaryText="With tags" leftElement="avatar" showLeftElement showRTags rTagLabel="Label" showStroke />
    </div>
}`,...($e=(He=E.parameters)==null?void 0:He.docs)==null?void 0:$e.source}}};var Ge,Ke,Qe;S.parameters={...S.parameters,docs:{...(Ge=S.parameters)==null?void 0:Ge.docs,source:{originalSource:`{
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
}`,...(Qe=(Ke=S.parameters)==null?void 0:Ke.docs)==null?void 0:Qe.source}}};const Rt=["Default","WithSecondaryText","WithAvatar","WithClause","WithSelectUnselected","WithSelectSelected","WithMiniUsers","WithRIcon","WithRLabel","WithRButton","WithRButtonSet","WithRBadge","WithRSwitch","WithRLargeAvatar","WithRTags","WithBackground","WithStroke","WithTick","AllLeftElements","AllRElements","FullExample"];export{b as AllLeftElements,E as AllRElements,s as Default,S as FullExample,o as WithAvatar,y as WithBackground,l as WithClause,m as WithMiniUsers,p as WithRBadge,h as WithRButton,f as WithRButtonSet,u as WithRIcon,d as WithRLabel,x as WithRLargeAvatar,w as WithRSwitch,g as WithRTags,n as WithSecondaryText,c as WithSelectSelected,i as WithSelectUnselected,T as WithStroke,v as WithTick,Rt as __namedExportsOrder,kt as default};
