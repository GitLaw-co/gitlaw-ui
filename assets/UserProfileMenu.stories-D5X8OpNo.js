import{j as e}from"./jsx-runtime-DiklIkkE.js";import{C as I}from"./Check-D1-gLYxc.js";import{S,L as w}from"./LogOut-BubIABas.js";import"./index-DRjF_FHU.js";const v=({userName:h="John Doe",userEmail:y="john@example.com",avatarInitials:j="JD",avatarSrc:i,profiles:o=[],onSettingsClick:C,onLogoutClick:N,onProfileSelect:n,className:b=""})=>e.jsxs("div",{className:`
        w-64 bg-white rounded-lg shadow-lg border border-input-border
        overflow-hidden
        ${b}
      `,children:[e.jsxs("div",{className:"flex items-center gap-3 p-4 border-b border-input-border",children:[e.jsx("div",{className:"size-10 rounded-full bg-primary flex items-center justify-center shrink-0",children:i?e.jsx("img",{src:i,alt:"",className:"w-full h-full object-cover rounded-full"}):e.jsx("span",{className:"text-sm font-black text-text-negative",children:j})}),e.jsxs("div",{className:"flex-1 min-w-0",children:[e.jsx("p",{className:"text-sm font-medium text-text-primary truncate",children:h}),e.jsx("p",{className:"text-xs text-text-secondary truncate",children:y})]})]}),o.length>0&&e.jsxs("div",{className:"py-2 border-b border-input-border",children:[e.jsx("p",{className:"px-4 py-1 text-xs font-medium text-text-secondary uppercase tracking-wide",children:"Switch Profile"}),o.map(a=>e.jsxs("button",{className:`
                flex items-center gap-3 w-full px-4 py-2
                hover:bg-secondary transition-colors
                text-left
              `,onClick:()=>n==null?void 0:n(a.id),children:[e.jsx("div",{className:"size-8 rounded bg-primary flex items-center justify-center shrink-0",children:a.avatarSrc?e.jsx("img",{src:a.avatarSrc,alt:"",className:"w-full h-full object-cover rounded"}):e.jsx("span",{className:"text-xs font-black text-text-negative",children:a.avatarInitials||a.name.substring(0,2).toUpperCase()})}),e.jsx("span",{className:"flex-1 text-sm text-text-primary truncate",children:a.name}),a.selected&&e.jsx(I,{className:"size-4 shrink-0",color:"#5e49d6"})]},a.id))]}),e.jsxs("div",{className:"py-2",children:[e.jsxs("button",{className:`
            flex items-center gap-3 w-full px-4 py-2
            hover:bg-secondary transition-colors
            text-left
          `,onClick:C,children:[e.jsx(S,{className:"size-5",color:"#1b1b1f"}),e.jsx("span",{className:"text-sm text-text-primary",children:"Settings"})]}),e.jsxs("button",{className:`
            flex items-center gap-3 w-full px-4 py-2
            hover:bg-secondary transition-colors
            text-left
          `,onClick:N,children:[e.jsx(w,{className:"size-5",color:"#1b1b1f"}),e.jsx("span",{className:"text-sm text-text-primary",children:"Log out"})]})]})]});v.__docgenInfo={description:"",methods:[],displayName:"UserProfileMenu",props:{userName:{required:!1,tsType:{name:"string"},description:"Current user name",defaultValue:{value:"'John Doe'",computed:!1}},userEmail:{required:!1,tsType:{name:"string"},description:"Current user email",defaultValue:{value:"'john@example.com'",computed:!1}},avatarInitials:{required:!1,tsType:{name:"string"},description:"User avatar initials",defaultValue:{value:"'JD'",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:"User avatar image source"},profiles:{required:!1,tsType:{name:"Array",elements:[{name:"UserProfileOption"}],raw:"UserProfileOption[]"},description:"Available profiles to switch to",defaultValue:{value:"[]",computed:!1}},onSettingsClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Settings click handler"},onLogoutClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Logout click handler"},onProfileSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(profileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"profileId"}],return:{name:"void"}}},description:"Profile select handler"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const E={title:"Components/UserProfileMenu",component:v,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{userName:{control:"text",description:"Current user name"},userEmail:{control:"text",description:"Current user email"},avatarInitials:{control:"text",description:"User avatar initials"}}},s={args:{userName:"John Doe",userEmail:"john@example.com",avatarInitials:"JD",profiles:[]}},t={args:{userName:"John Doe",userEmail:"john@example.com",avatarInitials:"JD",profiles:[{id:"1",name:"Acme Corporation",avatarInitials:"AC",selected:!0},{id:"2",name:"Personal Workspace",avatarInitials:"PW"},{id:"3",name:"Startup Inc",avatarInitials:"SI"}]}},r={args:{userName:"Jane Smith",userEmail:"jane@company.com",avatarInitials:"JS",profiles:[{id:"1",name:"Company A",avatarInitials:"CA"},{id:"2",name:"Company B",avatarInitials:"CB",selected:!0},{id:"3",name:"Company C",avatarInitials:"CC"},{id:"4",name:"Personal",avatarInitials:"PE"}]}};var l,m,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    avatarInitials: 'JD',
    profiles: []
  }
}`,...(c=(m=s.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    userName: 'John Doe',
    userEmail: 'john@example.com',
    avatarInitials: 'JD',
    profiles: [{
      id: '1',
      name: 'Acme Corporation',
      avatarInitials: 'AC',
      selected: true
    }, {
      id: '2',
      name: 'Personal Workspace',
      avatarInitials: 'PW'
    }, {
      id: '3',
      name: 'Startup Inc',
      avatarInitials: 'SI'
    }]
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var x,f,g;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    userName: 'Jane Smith',
    userEmail: 'jane@company.com',
    avatarInitials: 'JS',
    profiles: [{
      id: '1',
      name: 'Company A',
      avatarInitials: 'CA'
    }, {
      id: '2',
      name: 'Company B',
      avatarInitials: 'CB',
      selected: true
    }, {
      id: '3',
      name: 'Company C',
      avatarInitials: 'CC'
    }, {
      id: '4',
      name: 'Personal',
      avatarInitials: 'PE'
    }]
  }
}`,...(g=(f=r.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const A=["Default","WithProfiles","MultipleProfiles"];export{s as Default,r as MultipleProfiles,t as WithProfiles,A as __namedExportsOrder,E as default};
