import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as t}from"./MenuItem-CgSDSbGk.js";import"./index-DRjF_FHU.js";import"./colors-C61pH6SS.js";import"./Switch-TBqG44c8.js";import"./Badge-BTb2MvAY.js";const Oe={title:"Components/MenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"},showRLabel:{control:"boolean",description:"Show label in R element"},rLabel:{control:"text",description:"Label text for R element"},showRIcon1:{control:"boolean",description:"Show first icon in R element"},rIcon1:{control:"text",description:"First icon name"},showRIcon2:{control:"boolean",description:"Show second icon in R element"},rIcon2:{control:"text",description:"Second icon name"},showRButton:{control:"boolean",description:"Show button in R element"},rButtonLabel:{control:"text",description:"Button label"},showRButtonSet:{control:"boolean",description:"Show button set (x and check)"},showRBadge:{control:"boolean",description:"Show badge in R element"},rBadgeCount:{control:"number",description:"Badge count"},showRSwitch:{control:"boolean",description:"Show switch in R element"},rSwitchChecked:{control:"boolean",description:"Switch checked state"},showRLargeAvatar:{control:"boolean",description:"Show large avatar in R element"},showRMediumAvatar:{control:"boolean",description:"Show medium avatar in R element"},showRTags:{control:"boolean",description:"Show tags in R element"},rTagLabel:{control:"text",description:"Tag label"}}},r={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},a={args:{primaryText:"Primary",secondaryText:"2 minutes ago",leftElement:"icon",showLeftElement:!0,showSecondaryText:!0}},o={args:{primaryText:"John Doe",secondaryText:"2 minutes ago",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,avatarInitials:"JD"}},n={args:{primaryText:"Information clause",secondaryText:"2 minutes ago",leftElement:"clause",showLeftElement:!0,showSecondaryText:!0}},s={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!1}},l={args:{primaryText:"Option item",leftElement:"select",showLeftElement:!0,selected:!0}},i={args:{primaryText:"Team members",secondaryText:"3 users",leftElement:"mini-users",showLeftElement:!0,showSecondaryText:!0}},m={args:{primaryText:"Selected item",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,rIcon1:"check",showStroke:!0}},c={args:{primaryText:"Item with label",leftElement:"avatar",showLeftElement:!0,showRLabel:!0,rLabel:"Label",showStroke:!0}},h={args:{primaryText:"Item with action",leftElement:"avatar",showLeftElement:!0,showRButton:!0,rButtonLabel:"Action",showStroke:!0}},u={args:{primaryText:"Item with button set",leftElement:"avatar",showLeftElement:!0,showRButtonSet:!0,showStroke:!0}},w={args:{primaryText:"Notifications",leftElement:"avatar",showLeftElement:!0,showRBadge:!0,rBadgeCount:7,showStroke:!0}},p={args:{primaryText:"Toggle setting",leftElement:"avatar",showLeftElement:!0,showRSwitch:!0,rSwitchChecked:!0,showStroke:!0}},d={args:{primaryText:"Item with avatar",secondaryText:"Secondary text",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRLargeAvatar:!0,showStroke:!0}},f={args:{primaryText:"Item with tags",leftElement:"avatar",showLeftElement:!0,showRTags:!0,rTagLabel:"Label",showStroke:!0}},E={args:{primaryText:"Highlighted item",leftElement:"icon",showLeftElement:!0,showBackground:!0}},x={args:{primaryText:"Bordered item",leftElement:"icon",showLeftElement:!0,showStroke:!0}},g={args:{primaryText:"Active item",leftElement:"icon",showLeftElement:!0,showTick:!0}},S={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},T={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With label",leftElement:"avatar",showLeftElement:!0,showRLabel:!0,rLabel:"Label",showStroke:!0}),e.jsx(t,{primaryText:"With icon",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,rIcon1:"check",showStroke:!0}),e.jsx(t,{primaryText:"With two icons",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,showRIcon2:!0,rIcon1:"edit",rIcon2:"trash",showStroke:!0}),e.jsx(t,{primaryText:"With button",leftElement:"avatar",showLeftElement:!0,showRButton:!0,rButtonLabel:"Action",showStroke:!0}),e.jsx(t,{primaryText:"With button set",leftElement:"avatar",showLeftElement:!0,showRButtonSet:!0,showStroke:!0}),e.jsx(t,{primaryText:"With badge",leftElement:"avatar",showLeftElement:!0,showRBadge:!0,rBadgeCount:7,showStroke:!0}),e.jsx(t,{primaryText:"With switch",leftElement:"avatar",showLeftElement:!0,showRSwitch:!0,rSwitchChecked:!0,showStroke:!0}),e.jsx(t,{primaryText:"With large avatar",leftElement:"avatar",showLeftElement:!0,showRLargeAvatar:!0,showStroke:!0}),e.jsx(t,{primaryText:"With tags",leftElement:"avatar",showLeftElement:!0,showRTags:!0,rTagLabel:"Label",showStroke:!0})]})},y={args:{primaryText:"Complete menu item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var L,R,b;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(b=(R=r.parameters)==null?void 0:R.docs)==null?void 0:b.source}}};var v,k,W;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    secondaryText: '2 minutes ago',
    leftElement: 'icon',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(W=(k=a.parameters)==null?void 0:k.docs)==null?void 0:W.source}}};var I,B,A;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    primaryText: 'John Doe',
    secondaryText: '2 minutes ago',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    avatarInitials: 'JD'
  }
}`,...(A=(B=o.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var M,j,C;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    primaryText: 'Information clause',
    secondaryText: '2 minutes ago',
    leftElement: 'clause',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(C=(j=n.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};var D,N,F;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: false
  }
}`,...(F=(N=s.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var O,P,J;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    primaryText: 'Option item',
    leftElement: 'select',
    showLeftElement: true,
    selected: true
  }
}`,...(J=(P=l.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var U,H,_;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    primaryText: 'Team members',
    secondaryText: '3 users',
    leftElement: 'mini-users',
    showLeftElement: true,
    showSecondaryText: true
  }
}`,...(_=(H=i.parameters)==null?void 0:H.docs)==null?void 0:_.source}}};var q,z,G;m.parameters={...m.parameters,docs:{...(q=m.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    primaryText: 'Selected item',
    leftElement: 'avatar',
    showLeftElement: true,
    showRIcon1: true,
    rIcon1: 'check',
    showStroke: true
  }
}`,...(G=(z=m.parameters)==null?void 0:z.docs)==null?void 0:G.source}}};var K,Q,V;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with label',
    leftElement: 'avatar',
    showLeftElement: true,
    showRLabel: true,
    rLabel: 'Label',
    showStroke: true
  }
}`,...(V=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var X,Y,Z;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with action',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButton: true,
    rButtonLabel: 'Action',
    showStroke: true
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with button set',
    leftElement: 'avatar',
    showLeftElement: true,
    showRButtonSet: true,
    showStroke: true
  }
}`,...(te=(ee=u.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var re,ae,oe;w.parameters={...w.parameters,docs:{...(re=w.parameters)==null?void 0:re.docs,source:{originalSource:`{
  args: {
    primaryText: 'Notifications',
    leftElement: 'avatar',
    showLeftElement: true,
    showRBadge: true,
    rBadgeCount: 7,
    showStroke: true
  }
}`,...(oe=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:oe.source}}};var ne,se,le;p.parameters={...p.parameters,docs:{...(ne=p.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    primaryText: 'Toggle setting',
    leftElement: 'avatar',
    showLeftElement: true,
    showRSwitch: true,
    rSwitchChecked: true,
    showStroke: true
  }
}`,...(le=(se=p.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,me,ce;d.parameters={...d.parameters,docs:{...(ie=d.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with avatar',
    secondaryText: 'Secondary text',
    leftElement: 'avatar',
    showLeftElement: true,
    showSecondaryText: true,
    showRLargeAvatar: true,
    showStroke: true
  }
}`,...(ce=(me=d.parameters)==null?void 0:me.docs)==null?void 0:ce.source}}};var he,ue,we;f.parameters={...f.parameters,docs:{...(he=f.parameters)==null?void 0:he.docs,source:{originalSource:`{
  args: {
    primaryText: 'Item with tags',
    leftElement: 'avatar',
    showLeftElement: true,
    showRTags: true,
    rTagLabel: 'Label',
    showStroke: true
  }
}`,...(we=(ue=f.parameters)==null?void 0:ue.docs)==null?void 0:we.source}}};var pe,de,fe;E.parameters={...E.parameters,docs:{...(pe=E.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  args: {
    primaryText: 'Highlighted item',
    leftElement: 'icon',
    showLeftElement: true,
    showBackground: true
  }
}`,...(fe=(de=E.parameters)==null?void 0:de.docs)==null?void 0:fe.source}}};var Ee,xe,ge;x.parameters={...x.parameters,docs:{...(Ee=x.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  args: {
    primaryText: 'Bordered item',
    leftElement: 'icon',
    showLeftElement: true,
    showStroke: true
  }
}`,...(ge=(xe=x.parameters)==null?void 0:xe.docs)==null?void 0:ge.source}}};var Se,Te,ye;g.parameters={...g.parameters,docs:{...(Se=g.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  args: {
    primaryText: 'Active item',
    leftElement: 'icon',
    showLeftElement: true,
    showTick: true
  }
}`,...(ye=(Te=g.parameters)==null?void 0:Te.docs)==null?void 0:ye.source}}};var Le,Re,be;S.parameters={...S.parameters,docs:{...(Le=S.parameters)==null?void 0:Le.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(be=(Re=S.parameters)==null?void 0:Re.docs)==null?void 0:be.source}}};var ve,ke,We;T.parameters={...T.parameters,docs:{...(ve=T.parameters)==null?void 0:ve.docs,source:{originalSource:`{
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
}`,...(We=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:We.source}}};var Ie,Be,Ae;y.parameters={...y.parameters,docs:{...(Ie=y.parameters)==null?void 0:Ie.docs,source:{originalSource:`{
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
}`,...(Ae=(Be=y.parameters)==null?void 0:Be.docs)==null?void 0:Ae.source}}};const Pe=["Default","WithSecondaryText","WithAvatar","WithClause","WithSelectUnselected","WithSelectSelected","WithMiniUsers","WithRIcon","WithRLabel","WithRButton","WithRButtonSet","WithRBadge","WithRSwitch","WithRLargeAvatar","WithRTags","WithBackground","WithStroke","WithTick","AllLeftElements","AllRElements","FullExample"];export{S as AllLeftElements,T as AllRElements,r as Default,y as FullExample,o as WithAvatar,E as WithBackground,n as WithClause,i as WithMiniUsers,w as WithRBadge,h as WithRButton,u as WithRButtonSet,m as WithRIcon,c as WithRLabel,d as WithRLargeAvatar,p as WithRSwitch,f as WithRTags,a as WithSecondaryText,l as WithSelectSelected,s as WithSelectUnselected,x as WithStroke,g as WithTick,Pe as __namedExportsOrder,Oe as default};
