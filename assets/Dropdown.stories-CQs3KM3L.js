import{j as l}from"./jsx-runtime-DiklIkkE.js";import{D as y}from"./Dropdown-BQT8-cPZ.js";import"./index-DRjF_FHU.js";import"./Icon-CfPs8lnx.js";import"./colors-CUQOl70L.js";const I={title:"Components/Actions/Dropdown",component:y,parameters:{layout:"centered",backgrounds:{default:"light"}},decorators:[k=>l.jsx("div",{style:{padding:"40px"},children:l.jsx(k,{})})],tags:["autodocs"],argTypes:{showIcons:{control:"boolean",description:"Whether to show icons in menu items"},heading:{control:"text",description:"Optional heading text"}}},e={args:{showIcons:!0,items:[{id:"1",label:"Primary",icon:"star"},{id:"2",label:"Restore",icon:"rotate-ccw"},{id:"3",label:"Duplicate",icon:"copy"},{id:"4",label:"Get link",icon:"link"}]}},n={args:{showIcons:!0,items:[{id:"1",label:"Primary",icon:"star",onClick:()=>console.log("Primary clicked")},{id:"2",label:"Restore",icon:"rotate-ccw",onClick:()=>console.log("Restore clicked")},{id:"3",label:"Duplicate",icon:"copy",onClick:()=>console.log("Duplicate clicked")},{id:"4",label:"Get link",icon:"link",onClick:()=>console.log("Get link clicked")}]}},o={args:{showIcons:!0,heading:"All Features",items:[{id:"1",label:"Selected item",secondaryLabel:"With secondary label",icon:"check-circle",selected:!0},{id:"2",label:"Normal item",secondaryLabel:"Also has secondary",icon:"circle"},{id:"3",label:"Disabled item",icon:"x-circle",disabled:!0},{id:"4",label:"Another option",icon:"star"}]}},i={args:{showIcons:!0,items:[{id:"1",label:"This is a very long label that should expand the dropdown",icon:"info"},{id:"2",label:"Another lengthy option to demonstrate width behavior",icon:"info"},{id:"3",label:"Short",icon:"info"}]}};var a,c,r;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(r=(c=e.parameters)==null?void 0:c.docs)==null?void 0:r.source}}};var t,s,d;n.parameters={...n.parameters,docs:{...(t=n.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
  }
}`,...(d=(s=n.parameters)==null?void 0:s.docs)==null?void 0:d.source}}};var m,p,b;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    showIcons: true,
    heading: 'All Features',
    items: [{
      id: '1',
      label: 'Selected item',
      secondaryLabel: 'With secondary label',
      icon: 'check-circle',
      selected: true
    }, {
      id: '2',
      label: 'Normal item',
      secondaryLabel: 'Also has secondary',
      icon: 'circle'
    }, {
      id: '3',
      label: 'Disabled item',
      icon: 'x-circle',
      disabled: true
    }, {
      id: '4',
      label: 'Another option',
      icon: 'star'
    }]
  }
}`,...(b=(p=o.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var h,u,g;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(g=(u=i.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const C=["Default","Interactive","AllVariants","LongLabels"];export{o as AllVariants,e as Default,n as Interactive,i as LongLabels,C as __namedExportsOrder,I as default};
