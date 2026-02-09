import{j as e}from"./jsx-runtime-DiklIkkE.js";import{P as l}from"./PageShell-0l7LJpE8.js";import{P as v}from"./PageNav-D7dIpawk.js";import{S as r}from"./Stack-jcG19hUL.js";import{I as E}from"./Input-M7N85g8K.js";import{I as d}from"./Icon-CfPs8lnx.js";import{S as n}from"./Section-DyWTw6cr.js";import{M as t}from"./MenuItem-cFQSHnm_.js";import{c as m}from"./colors-CUQOl70L.js";import"./index-DRjF_FHU.js";import"./Sidebar-D3SvkWVn.js";import"./Tooltip-p54vDDUe.js";import"./Popover-OT7etBEe.js";import"./TopHeader-Cb2FF6HH.js";import"./Badge-BTb2MvAY.js";import"./Button-DR1DBuRh.js";import"./Dropdown-BQT8-cPZ.js";import"./Avatar-CgqWibtJ.js";import"./Switch-Biwu3wdI.js";import"./Checkbox-CfK9XmaB.js";const _={title:"Pages/Settings",component:l,parameters:{layout:"fullscreen",backgrounds:{default:"light"}}},c=[{id:"profile",label:"Profile"},{id:"account",label:"Account"},{id:"organizations",label:"Organizations"},{id:"contacts",label:"Contacts"},{id:"api-keys",label:"API keys"},{id:"memories",label:"Memories"},{id:"billing",label:"Billing"}],s=[{id:"1",name:"Alex Carter",type:"Personal Account",initials:"AC"},{id:"2",name:"Whisk",type:"Organization",initials:"WH"}],L=S=>c.map(o=>({id:o.id,label:o.label,selected:o.id===S})),a={render:()=>e.jsx(l,{title:"Settings",initialSidebarCollapsed:!0,mobileNavItems:L("profile"),mobileNavActiveLabel:"Profile",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(v,{activeAccount:s[0],accounts:s,items:c,activeItemId:"profile",className:"hidden md:flex"}),e.jsx("div",{className:"flex-1 max-w-[1040px]",children:e.jsx(n,{variant:"card",children:e.jsxs(r,{gap:"none",children:[e.jsx(t,{primaryText:"Profile picture",showLeftElement:!1,width:"fill",showRLargeAvatar:!0}),e.jsx(t,{primaryText:"Public profile",showSecondaryText:!0,secondaryText:"user/alexcarter",showLeftElement:!1,width:"fill",showRButton:!0,rButtonLabel:"View",rButtonIcon:"arrow-right"}),e.jsx(t,{primaryText:"Username",showSecondaryText:!0,secondaryText:"alexcarter",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"Full name",showSecondaryText:!0,secondaryText:"Alex Carter",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"Bio",showSecondaryText:!0,secondaryText:"Alex is the founder of TechWave, a groundbreaking startup...",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"URL",showSecondaryText:!0,secondaryText:"www.abc.com",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"Location",showSecondaryText:!0,secondaryText:"Dayton, OH",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"User visibility",showSecondaryText:!0,secondaryText:"Public",showLeftElement:!1,width:"fill",showRIcon1:!0,rIcon1:"chevron-right"}),e.jsx(t,{primaryText:"Hide email address",showLeftElement:!1,width:"fill",showRSwitch:!0,rSwitchChecked:!0})]})})})]})})},i={render:()=>e.jsx(l,{title:"Settings",initialSidebarCollapsed:!0,mobileNavItems:L("organizations"),mobileNavActiveLabel:"Organizations",children:e.jsxs("div",{className:"flex gap-4",children:[e.jsx(v,{activeAccount:s[0],accounts:s,items:c,activeItemId:"organizations",className:"hidden md:flex"}),e.jsx("div",{className:"flex-1 max-w-[1040px]",children:e.jsxs(r,{gap:"l",children:[e.jsx(E,{placeholder:"Search organizations",showLeftIcon:!0,leftIcon:e.jsx(d,{name:"search",className:"size-5",color:m.iconSecondary})}),e.jsx(n,{variant:"card",onClick:()=>alert("Navigate to Whisk org settings"),children:e.jsxs(r,{gap:"none",children:[e.jsx(t,{primaryText:"Whisk",showLeftElement:!0,leftElement:"avatar",avatarInitials:"WH",width:"fill",showRIcon1:!0,rIcon1:"ellipsis"}),e.jsx(t,{primaryText:"The Whisk Product Team is dedicated to creating a seamless app experience...",showLeftElement:!1,width:"fill"}),e.jsxs("div",{className:"grid grid-cols-2 gap-0 px-3",children:[e.jsx(t,{primaryText:"Registered name",showSecondaryText:!0,secondaryText:"Foodient Ltd.",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Registered address",showSecondaryText:!0,secondaryText:"483 Green Lanes, London, England, N13 4BS",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Jurisdiction",showSecondaryText:!0,secondaryText:"England and Wales",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Entity type",showSecondaryText:!0,secondaryText:"Limited Company",showLeftElement:!1,width:"fill"})]})]})}),e.jsx(n,{variant:"card",onClick:()=>alert("Navigate to GitLaw org settings"),children:e.jsxs(r,{gap:"none",children:[e.jsx(t,{primaryText:"GitLaw",showLeftElement:!0,leftElement:"avatar",avatarInitials:"GL",width:"fill",showRIcon1:!0,rIcon1:"ellipsis"}),e.jsx(t,{primaryText:"GitLaw is an innovative platform designed to simplify legal processes...",showLeftElement:!1,width:"fill"}),e.jsxs("div",{className:"grid grid-cols-2 gap-0 px-3",children:[e.jsx(t,{primaryText:"Registered name",showSecondaryText:!0,secondaryText:"GitLaw LLC",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Registered address",showSecondaryText:!0,secondaryText:"San Francisco, California",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Jurisdiction",showSecondaryText:!0,secondaryText:"The State of California",showLeftElement:!1,width:"fill"}),e.jsx(t,{primaryText:"Entity type",showSecondaryText:!0,secondaryText:"Limited Liability Company",showLeftElement:!1,width:"fill"})]})]})}),e.jsx(n,{variant:"card",children:e.jsx(t,{primaryText:"Add new Organization",showLeftElement:!0,leftIcon:e.jsx(d,{name:"circle-plus",className:"size-5",color:m.iconSecondary}),width:"fill"})})]})})]})})};var h,f,x,w,p;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <PageShell title="Settings" initialSidebarCollapsed mobileNavItems={mobileNavItems("profile")} mobileNavActiveLabel="Profile">
      <div className="flex gap-4">
        <PageNav activeAccount={accounts[0]} accounts={accounts} items={settingsNavItems} activeItemId="profile" className="hidden md:flex" />
        <div className="flex-1 max-w-[1040px]">
          <Section variant="card">
            <Stack gap="none">
              <MenuItem primaryText="Profile picture" showLeftElement={false} width="fill" showRLargeAvatar />
              <MenuItem primaryText="Public profile" showSecondaryText secondaryText="user/alexcarter" showLeftElement={false} width="fill" showRButton rButtonLabel="View" rButtonIcon="arrow-right" />
              <MenuItem primaryText="Username" showSecondaryText secondaryText="alexcarter" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="Full name" showSecondaryText secondaryText="Alex Carter" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="Bio" showSecondaryText secondaryText="Alex is the founder of TechWave, a groundbreaking startup..." showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="URL" showSecondaryText secondaryText="www.abc.com" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="Location" showSecondaryText secondaryText="Dayton, OH" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="User visibility" showSecondaryText secondaryText="Public" showLeftElement={false} width="fill" showRIcon1 rIcon1="chevron-right" />
              <MenuItem primaryText="Hide email address" showLeftElement={false} width="fill" showRSwitch rSwitchChecked={true} />
            </Stack>
          </Section>
        </div>
      </div>
    </PageShell>
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source},description:{story:`Settings Profile page — card variant wrapping list items.
Matches the Figma pattern: white bg, 8px padding, 8px rounded.`,...(p=(w=a.parameters)==null?void 0:w.docs)==null?void 0:p.description}}};var y,g,u,T,I;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <PageShell title="Settings" initialSidebarCollapsed mobileNavItems={mobileNavItems("organizations")} mobileNavActiveLabel="Organizations">
      <div className="flex gap-4">
        <PageNav activeAccount={accounts[0]} accounts={accounts} items={settingsNavItems} activeItemId="organizations" className="hidden md:flex" />
        <div className="flex-1 max-w-[1040px]">
          <Stack gap="l">
            <Input placeholder="Search organizations" showLeftIcon leftIcon={<Icon name="search" className="size-5" color={colors.iconSecondary} />} />
            <Section variant="card" onClick={() => alert("Navigate to Whisk org settings")}>
              <Stack gap="none">
                <MenuItem primaryText="Whisk" showLeftElement leftElement="avatar" avatarInitials="WH" width="fill" showRIcon1 rIcon1="ellipsis" />
                <MenuItem primaryText="The Whisk Product Team is dedicated to creating a seamless app experience..." showLeftElement={false} width="fill" />
                <div className="grid grid-cols-2 gap-0 px-3">
                  <MenuItem primaryText="Registered name" showSecondaryText secondaryText="Foodient Ltd." showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Registered address" showSecondaryText secondaryText="483 Green Lanes, London, England, N13 4BS" showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Jurisdiction" showSecondaryText secondaryText="England and Wales" showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Entity type" showSecondaryText secondaryText="Limited Company" showLeftElement={false} width="fill" />
                </div>
              </Stack>
            </Section>
            <Section variant="card" onClick={() => alert("Navigate to GitLaw org settings")}>
              <Stack gap="none">
                <MenuItem primaryText="GitLaw" showLeftElement leftElement="avatar" avatarInitials="GL" width="fill" showRIcon1 rIcon1="ellipsis" />
                <MenuItem primaryText="GitLaw is an innovative platform designed to simplify legal processes..." showLeftElement={false} width="fill" />
                <div className="grid grid-cols-2 gap-0 px-3">
                  <MenuItem primaryText="Registered name" showSecondaryText secondaryText="GitLaw LLC" showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Registered address" showSecondaryText secondaryText="San Francisco, California" showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Jurisdiction" showSecondaryText secondaryText="The State of California" showLeftElement={false} width="fill" />
                  <MenuItem primaryText="Entity type" showSecondaryText secondaryText="Limited Liability Company" showLeftElement={false} width="fill" />
                </div>
              </Stack>
            </Section>
            <Section variant="card">
              <MenuItem primaryText="Add new Organization" showLeftElement leftIcon={<Icon name="circle-plus" className="size-5" color={colors.iconSecondary} />} width="fill" />
            </Section>
          </Stack>
        </div>
      </div>
    </PageShell>
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source},description:{story:`Organizations page — search + multiple card groups.
Matches the Figma Organizations section pattern.`,...(I=(T=i.parameters)==null?void 0:T.docs)==null?void 0:I.description}}};const q=["Profile","Organizations"];export{i as Organizations,a as Profile,q as __namedExportsOrder,_ as default};
