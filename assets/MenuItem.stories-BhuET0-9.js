import{j as e}from"./jsx-runtime-DiklIkkE.js";import{M as t}from"./MenuItem-cFQSHnm_.js";import"./index-DRjF_FHU.js";import"./Icon-CfPs8lnx.js";import"./Button-DR1DBuRh.js";import"./colors-CUQOl70L.js";import"./Switch-Biwu3wdI.js";import"./Badge-BTb2MvAY.js";import"./Checkbox-CfK9XmaB.js";const I={title:"Components/Actions/MenuItem",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{leftElement:{control:"select",options:["icon","avatar","clause","select","mini-users"],description:"Type of left element to display"},showLeftElement:{control:"boolean",description:"Show the left element"},showSecondaryText:{control:"boolean",description:"Show secondary text"},showBackground:{control:"boolean",description:"Show background highlight"},showStroke:{control:"boolean",description:"Show border stroke"},showTick:{control:"boolean",description:"Show tick badge in corner"},primaryText:{control:"text",description:"Primary text content"},secondaryText:{control:"text",description:"Secondary text content"},selected:{control:"boolean",description:"Selected state (for select type)"},showRLabel:{control:"boolean",description:"Show label in R element"},rLabel:{control:"text",description:"Label text for R element"},showRIcon1:{control:"boolean",description:"Show first icon in R element"},rIcon1:{control:"text",description:"First icon name"},showRIcon2:{control:"boolean",description:"Show second icon in R element"},rIcon2:{control:"text",description:"Second icon name"},showRButton:{control:"boolean",description:"Show button in R element"},rButtonLabel:{control:"text",description:"Button label"},showRButtonSet:{control:"boolean",description:"Show button set (x and check)"},showRBadge:{control:"boolean",description:"Show badge in R element"},rBadgeCount:{control:"number",description:"Badge count"},showRSwitch:{control:"boolean",description:"Show switch in R element"},rSwitchChecked:{control:"boolean",description:"Switch checked state"},showRLargeAvatar:{control:"boolean",description:"Show large avatar in R element"},showRMediumAvatar:{control:"boolean",description:"Show medium avatar in R element"},showRTags:{control:"boolean",description:"Show tags in R element"},rTagLabel:{control:"text",description:"Tag label"}}},o={args:{primaryText:"Primary",leftElement:"icon",showLeftElement:!0}},r={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With icon",leftElement:"icon",showLeftElement:!0}),e.jsx(t,{primaryText:"With avatar",leftElement:"avatar",showLeftElement:!0,avatarInitials:"AC"}),e.jsx(t,{primaryText:"With clause",leftElement:"clause",showLeftElement:!0}),e.jsx(t,{primaryText:"With select",leftElement:"select",showLeftElement:!0}),e.jsx(t,{primaryText:"With mini-users",leftElement:"mini-users",showLeftElement:!0})]})},n={render:()=>e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx(t,{primaryText:"With label",leftElement:"avatar",showLeftElement:!0,showRLabel:!0,rLabel:"Label",showStroke:!0}),e.jsx(t,{primaryText:"With icon",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,rIcon1:"check",showStroke:!0}),e.jsx(t,{primaryText:"With two icons",leftElement:"avatar",showLeftElement:!0,showRIcon1:!0,showRIcon2:!0,rIcon1:"edit",rIcon2:"trash",showStroke:!0}),e.jsx(t,{primaryText:"With button",leftElement:"avatar",showLeftElement:!0,showRButton:!0,rButtonLabel:"Action",showStroke:!0}),e.jsx(t,{primaryText:"With button set",leftElement:"avatar",showLeftElement:!0,showRButtonSet:!0,showStroke:!0}),e.jsx(t,{primaryText:"With badge",leftElement:"avatar",showLeftElement:!0,showRBadge:!0,rBadgeCount:7,showStroke:!0}),e.jsx(t,{primaryText:"With switch",leftElement:"avatar",showLeftElement:!0,showRSwitch:!0,rSwitchChecked:!0,showStroke:!0}),e.jsx(t,{primaryText:"With large avatar",leftElement:"avatar",showLeftElement:!0,showRLargeAvatar:!0,showStroke:!0}),e.jsx(t,{primaryText:"With tags",leftElement:"avatar",showLeftElement:!0,showRTags:!0,rTagLabel:"Label",showStroke:!0})]})},a={args:{primaryText:"Complete menu item",secondaryText:"With all features enabled",leftElement:"avatar",showLeftElement:!0,showSecondaryText:!0,showRightElement:!0,showBackground:!0,avatarInitials:"FE"}};var s,l,i;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    primaryText: 'Primary',
    leftElement: 'icon',
    showLeftElement: true
  }
}`,...(i=(l=o.parameters)==null?void 0:l.docs)==null?void 0:i.source}}};var m,c,h;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div className="flex flex-col gap-2">
      <MenuItem primaryText="With icon" leftElement="icon" showLeftElement />
      <MenuItem primaryText="With avatar" leftElement="avatar" showLeftElement avatarInitials="AC" />
      <MenuItem primaryText="With clause" leftElement="clause" showLeftElement />
      <MenuItem primaryText="With select" leftElement="select" showLeftElement />
      <MenuItem primaryText="With mini-users" leftElement="mini-users" showLeftElement />
    </div>
}`,...(h=(c=r.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var u,w,p;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(p=(w=n.parameters)==null?void 0:w.docs)==null?void 0:p.source}}};var d,f,x;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};const k=["Default","AllLeftElements","AllRElements","FullExample"];export{r as AllLeftElements,n as AllRElements,o as Default,a as FullExample,k as __namedExportsOrder,I as default};
