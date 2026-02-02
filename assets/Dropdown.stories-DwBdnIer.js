import{j as n}from"./jsx-runtime-DiklIkkE.js";import{I as w,c as x}from"./Icon-D7PltpT4.js";import"./index-DRjF_FHU.js";const g=({items:h,heading:y,showIcons:le=!0,className:ie=""})=>n.jsxs("div",{className:`
        w-[220px] max-w-[360px] p-2 rounded-lg
        bg-card
        shadow-card
        flex flex-col gap-px
        ${ie}
      `,style:{width:"max-content",minWidth:"220px",maxWidth:"360px"},children:[y&&n.jsx("div",{className:"px-3 py-2 text-base font-semibold text-foreground",children:y}),h.map(e=>n.jsxs("button",{onClick:e.onClick,disabled:e.disabled,className:`
            w-full px-3 py-3 rounded-none
            flex items-center gap-2 text-left
            transition-colors
            ${e.disabled?"opacity-50 cursor-not-allowed":"hover:bg-secondary/30 cursor-pointer"}
            ${e.selected?"bg-secondary/20":""}
          `,children:[le&&e.icon&&n.jsx(w,{name:e.icon,className:"size-5",color:x.iconBlack}),n.jsxs("div",{className:"flex flex-col flex-1",children:[n.jsx("span",{className:"text-base text-foreground",children:e.label}),e.secondaryLabel&&n.jsx("span",{className:"text-sm text-subtle",children:e.secondaryLabel})]}),e.selected&&n.jsx(w,{name:"check",className:"size-5",color:x.iconBlack})]},e.id))]});g.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownItem"}],raw:"DropdownItem[]"},description:"List of dropdown items"},heading:{required:!1,tsType:{name:"string"},description:"Optional heading text"},showIcons:{required:!1,tsType:{name:"boolean"},description:"Whether to show icons",defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes",defaultValue:{value:"''",computed:!1}}}};const de={title:"Components/Dropdown",component:g,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showIcons:{control:"boolean",description:"Whether to show icons in menu items"},heading:{control:"text",description:"Optional heading text"}}},o={args:{showIcons:!0,items:[{id:"1",label:"Primary",icon:"star"},{id:"2",label:"Restore",icon:"rotate-ccw"},{id:"3",label:"Duplicate",icon:"copy"},{id:"4",label:"Get link",icon:"link"}]}},a={args:{showIcons:!1,items:[{id:"1",label:"Option 1"},{id:"2",label:"Option 2"},{id:"3",label:"Option 3"},{id:"4",label:"Option 4"}]}},s={args:{showIcons:!0,heading:"Actions",items:[{id:"1",label:"Edit",icon:"pencil"},{id:"2",label:"Delete",icon:"trash-2"},{id:"3",label:"Archive",icon:"archive"}]}},l={args:{showIcons:!0,items:[{id:"1",label:"Small",icon:"type",selected:!1},{id:"2",label:"Medium",icon:"type",selected:!0},{id:"3",label:"Large",icon:"type",selected:!1}]}},i={args:{showIcons:!0,items:[{id:"1",label:"John Doe",secondaryLabel:"john@example.com",icon:"user"},{id:"2",label:"Jane Smith",secondaryLabel:"jane@example.com",icon:"user"},{id:"3",label:"Bob Wilson",secondaryLabel:"bob@example.com",icon:"user"}]}},r={args:{showIcons:!0,items:[{id:"1",label:"Available",icon:"check-circle"},{id:"2",label:"Disabled",icon:"x-circle",disabled:!0},{id:"3",label:"Also available",icon:"check-circle"}]}},c={args:{showIcons:!0,items:[{id:"1",label:"Primary",icon:"star",onClick:()=>console.log("Primary clicked")},{id:"2",label:"Restore",icon:"rotate-ccw",onClick:()=>console.log("Restore clicked")},{id:"3",label:"Duplicate",icon:"copy",onClick:()=>console.log("Duplicate clicked")},{id:"4",label:"Get link",icon:"link",onClick:()=>console.log("Get link clicked")}]},render:h=>n.jsxs("div",{children:[n.jsx("p",{className:"text-sm text-subtle mb-4",children:"Click items to see console logs."}),n.jsx(g,{...h})]})},t={args:{showIcons:!0,items:[{id:"1",label:"Rename",icon:"pencil"},{id:"2",label:"Duplicate",icon:"copy"},{id:"3",label:"Move to folder",icon:"folder"},{id:"4",label:"Download as PDF",icon:"file-down"},{id:"5",label:"Delete",icon:"trash-2"}]}},d={args:{showIcons:!1,items:[{id:"1",label:"Normal text",selected:!0},{id:"2",label:"Heading 1"},{id:"3",label:"Heading 2"},{id:"4",label:"Heading 3"},{id:"5",label:"Quote"},{id:"6",label:"Code block"}]}},m={args:{showIcons:!0,heading:"Version History",items:[{id:"1",label:"Current version",secondaryLabel:"Just now",icon:"file-check",selected:!0},{id:"2",label:"Auto-saved",secondaryLabel:"5 minutes ago",icon:"save"},{id:"3",label:"Manual save",secondaryLabel:"1 hour ago",icon:"save"},{id:"4",label:"Initial draft",secondaryLabel:"Yesterday",icon:"file"}]}},b={args:{showIcons:!0,heading:"Share with",items:[{id:"1",label:"Anyone with the link",secondaryLabel:"Can view",icon:"globe"},{id:"2",label:"Only people invited",secondaryLabel:"Restricted",icon:"lock",selected:!0},{id:"3",label:"Team members",secondaryLabel:"Can edit",icon:"users"}]}},p={args:{showIcons:!0,items:[{id:"1",label:"This is a very long label that should expand the dropdown",icon:"info"},{id:"2",label:"Another lengthy option to demonstrate width behavior",icon:"info"},{id:"3",label:"Short",icon:"info"}]}},u={args:{showIcons:!1,items:[{id:"1",label:"A"},{id:"2",label:"B"},{id:"3",label:"C"}]}};var f,k,I;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'Primary',
      icon: 'star'
    }, {
      id: '2',
      label: 'Restore',
      icon: 'rotate-ccw'
    }, {
      id: '3',
      label: 'Duplicate',
      icon: 'copy'
    }, {
      id: '4',
      label: 'Get link',
      icon: 'link'
    }]
  }
}`,...(I=(k=o.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};var v,L,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    showIcons: false,
    items: [{
      id: '1',
      label: 'Option 1'
    }, {
      id: '2',
      label: 'Option 2'
    }, {
      id: '3',
      label: 'Option 3'
    }, {
      id: '4',
      label: 'Option 4'
    }]
  }
}`,...(S=(L=a.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};var D,C,A;s.parameters={...s.parameters,docs:{...(D=s.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    heading: 'Actions',
    items: [{
      id: '1',
      label: 'Edit',
      icon: 'pencil'
    }, {
      id: '2',
      label: 'Delete',
      icon: 'trash-2'
    }, {
      id: '3',
      label: 'Archive',
      icon: 'archive'
    }]
  }
}`,...(A=(C=s.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var j,W,N;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'Small',
      icon: 'type',
      selected: false
    }, {
      id: '2',
      label: 'Medium',
      icon: 'type',
      selected: true
    }, {
      id: '3',
      label: 'Large',
      icon: 'type',
      selected: false
    }]
  }
}`,...(N=(W=l.parameters)==null?void 0:W.docs)==null?void 0:N.source}}};var O,H,R;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'John Doe',
      secondaryLabel: 'john@example.com',
      icon: 'user'
    }, {
      id: '2',
      label: 'Jane Smith',
      secondaryLabel: 'jane@example.com',
      icon: 'user'
    }, {
      id: '3',
      label: 'Bob Wilson',
      secondaryLabel: 'bob@example.com',
      icon: 'user'
    }]
  }
}`,...(R=(H=i.parameters)==null?void 0:H.docs)==null?void 0:R.source}}};var T,P,M;r.parameters={...r.parameters,docs:{...(T=r.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'Available',
      icon: 'check-circle'
    }, {
      id: '2',
      label: 'Disabled',
      icon: 'x-circle',
      disabled: true
    }, {
      id: '3',
      label: 'Also available',
      icon: 'check-circle'
    }]
  }
}`,...(M=(P=r.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var B,G,J;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'Primary',
      icon: 'star',
      onClick: () => console.log('Primary clicked')
    }, {
      id: '2',
      label: 'Restore',
      icon: 'rotate-ccw',
      onClick: () => console.log('Restore clicked')
    }, {
      id: '3',
      label: 'Duplicate',
      icon: 'copy',
      onClick: () => console.log('Duplicate clicked')
    }, {
      id: '4',
      label: 'Get link',
      icon: 'link',
      onClick: () => console.log('Get link clicked')
    }]
  },
  render: args => <div>
      <p className="text-sm text-subtle mb-4">Click items to see console logs.</p>
      <Dropdown {...args} />
    </div>
}`,...(J=(G=c.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var V,q,E;t.parameters={...t.parameters,docs:{...(V=t.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'Rename',
      icon: 'pencil'
    }, {
      id: '2',
      label: 'Duplicate',
      icon: 'copy'
    }, {
      id: '3',
      label: 'Move to folder',
      icon: 'folder'
    }, {
      id: '4',
      label: 'Download as PDF',
      icon: 'file-down'
    }, {
      id: '5',
      label: 'Delete',
      icon: 'trash-2'
    }]
  }
}`,...(E=(q=t.parameters)==null?void 0:q.docs)==null?void 0:E.source}}};var _,$,z;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    showIcons: false,
    items: [{
      id: '1',
      label: 'Normal text',
      selected: true
    }, {
      id: '2',
      label: 'Heading 1'
    }, {
      id: '3',
      label: 'Heading 2'
    }, {
      id: '4',
      label: 'Heading 3'
    }, {
      id: '5',
      label: 'Quote'
    }, {
      id: '6',
      label: 'Code block'
    }]
  }
}`,...(z=($=d.parameters)==null?void 0:$.docs)==null?void 0:z.source}}};var F,Q,Y;m.parameters={...m.parameters,docs:{...(F=m.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    heading: 'Version History',
    items: [{
      id: '1',
      label: 'Current version',
      secondaryLabel: 'Just now',
      icon: 'file-check',
      selected: true
    }, {
      id: '2',
      label: 'Auto-saved',
      secondaryLabel: '5 minutes ago',
      icon: 'save'
    }, {
      id: '3',
      label: 'Manual save',
      secondaryLabel: '1 hour ago',
      icon: 'save'
    }, {
      id: '4',
      label: 'Initial draft',
      secondaryLabel: 'Yesterday',
      icon: 'file'
    }]
  }
}`,...(Y=(Q=m.parameters)==null?void 0:Q.docs)==null?void 0:Y.source}}};var K,U,X;b.parameters={...b.parameters,docs:{...(K=b.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    heading: 'Share with',
    items: [{
      id: '1',
      label: 'Anyone with the link',
      secondaryLabel: 'Can view',
      icon: 'globe'
    }, {
      id: '2',
      label: 'Only people invited',
      secondaryLabel: 'Restricted',
      icon: 'lock',
      selected: true
    }, {
      id: '3',
      label: 'Team members',
      secondaryLabel: 'Can edit',
      icon: 'users'
    }]
  }
}`,...(X=(U=b.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var Z,ee,ne;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    items: [{
      id: '1',
      label: 'This is a very long label that should expand the dropdown',
      icon: 'info'
    }, {
      id: '2',
      label: 'Another lengthy option to demonstrate width behavior',
      icon: 'info'
    }, {
      id: '3',
      label: 'Short',
      icon: 'info'
    }]
  }
}`,...(ne=(ee=p.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var oe,ae,se;u.parameters={...u.parameters,docs:{...(oe=u.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  args: {
    showIcons: false,
    items: [{
      id: '1',
      label: 'A'
    }, {
      id: '2',
      label: 'B'
    }, {
      id: '3',
      label: 'C'
    }]
  }
}`,...(se=(ae=u.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};const me=["Default","WithoutIcons","WithHeading","WithSelectedItem","WithSecondaryLabels","WithDisabledItems","Interactive","DocumentActions","TextStyleSelector","VersionHistory","SharePermissions","LongLabels","MinimalLabels"];export{o as Default,t as DocumentActions,c as Interactive,p as LongLabels,u as MinimalLabels,b as SharePermissions,d as TextStyleSelector,m as VersionHistory,r as WithDisabledItems,s as WithHeading,i as WithSecondaryLabels,l as WithSelectedItem,a as WithoutIcons,me as __namedExportsOrder,de as default};
